import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Category as ModelCategory, Product } from "../models";
import { ItemCardACollection } from "../ui-components";
import {
  Grid,
  View,
  Collection,
  Heading,
  CheckboxField,
  Expander,
  ExpanderItem,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
import { DataStore } from "@aws-amplify/datastore";

export default function Category({ updateCart }) {
  // this component is used when something hits /category/{name}
  // name is used to represent the category we are viewing
  const { name } = useParams();
  const [prevName, setPrevName] = useState(""); //prevName allows us to see if the category has changed
  const [products, setProducts] = useState([]); //products is a list of the products to display filtered down
  const [allStyles, setAllStyles] = useState([]); //allStyles is a list of all the styles for building the filters
  const [filteredStyles, setFilteredStyles] = useState([]); //filteredStyles is a list of styles that are selected for filtering

  useEffect(() => {
    // Query for categories to get all the styles that make up that category
    // so we can build the filter display
    async function queryCategory() {
      try {
        const categories = await DataStore.query(ModelCategory, (c) =>
          c.name("eq", name)
        );
        if (categories) {
          setAllStyles(categories[0].styles);
          return categories[0].id;
        }
      } catch (error) {
        console.log("Error retrieving category", error);
      }
    }

    // queryProduct is used to query the products and filter by category and filtered again
    // based on any selected filters
    async function queryProduct() {
      try {
        const categories = await DataStore.query(ModelCategory, (c) =>
          c.name("eq", name)
        );
        if (categories) {
          const products = await DataStore.query(Product, (c) => {
            return c.categoryID("eq", categories[0].id);
          });

          // Filter the results if a style is selected
          setProducts(
            products.filter(
              (product) =>
                filteredStyles.includes(product.style) ||
                filteredStyles.length === 0
            )
          );
        }
      } catch (error) {
        console.log("Error retrieving posts", error);
      }
    }

    if (prevName !== name) {
      queryCategory();
      setPrevName(name);
    }
    queryProduct();
  }, [name, filteredStyles, prevName]);

  // When a filter is clicked (selected/unselected) we want to change
  // the filters that we are using to filter the products
  function filterClick(e) {
    let style = e.target.name;
    if (style) {
      if (filteredStyles.indexOf(style) > -1) {
        setFilteredStyles((filteredStyles) =>
          filteredStyles.filter((e) => {
            return e !== style;
          })
        );
      } else {
        setFilteredStyles((filteredStyles) => [...filteredStyles, style]);
      }
    } else {
      console.log(e);
    }
  }

  // overrides for our collection
  // Change the style of the collection to be a list on smaller screen formats and grid
  // on larger formats. Also change the items displayed depending on the screen size
  const overrides = {
    ItemCardACollection: {
      type: useBreakpointValue({
        small: "list",
        base: "list",
        medium: "grid",
      }),
      itemsPerPage: useBreakpointValue({
        base: "5",
        small: "5",
        medium: "10",
        large: "10",
        xl: "10",
      }),
    },
  };

  return (
    <Grid
      templateColumns="1fr 3fr"
      templateRows="3rem auto"
      gap="var(--amplify-space-small)"
    >
      <View columnSpan={2}>
        <Heading level={3}>{name}</Heading>
      </View>
      <View style={{ maxWidth: 300 }}>
        <Heading level={4}>Filters</Heading>
        <Expander type="multiple" defaultValue={["style"]}>
          <ExpanderItem title="Style" value="style">
            <Collection
              type="list"
              direction="column"
              justifyContent="stretch"
              items={allStyles || []}
            >
              {(item, _) => (
                <CheckboxField
                  key={item}
                  label={item}
                  name={item}
                  onClick={filterClick}
                />
              )}
            </Collection>
          </ExpanderItem>
        </Expander>
      </View>
      <View>
        <ItemCardACollection
          items={products}
          overrides={overrides}
          overrideItems={({ item, _ }) => ({
            overrides: {
              // Configure the Button on each card to add an item to the cart when clicked
              Button: {
                onClick: (e) => {
                  updateCart(item.id, function (x) {
                    return x + 1;
                  });
                },
              },
            },
          })}
        />
      </View>
    </Grid>
  );
}
