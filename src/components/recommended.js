import React, { useState, useEffect } from "react";
import { ItemCardBCollection } from "../ui-components";
import { Product } from "../models";
import { Heading, useBreakpointValue, Flex } from "@aws-amplify/ui-react";
import { Predicates, SortDirection } from "aws-amplify";
import { DataStore } from "@aws-amplify/datastore";

export default function Recommended() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Query prodcuts and limit to the top 5 as we need the top
    // rate products
    async function queryProduct() {
      if (products.length === 0) {
        try {
          const products = await DataStore.query(Product, Predicates.ALL, {
            sort: (p) => p.rating(SortDirection.DESCENDING),
            page: 0,
            limit: 5,
          });
          setProducts(products);
        } catch (error) {
          console.log("Error retrieving products", error);
        }
      }
    }

    queryProduct();
  }, [products]);

  // override collection properties and set page size based on screen size
  const overrides = {
    ItemCardBCollection: {
      itemsPerPage: useBreakpointValue({
        base: "1",
        small: "2",
        medium: "3",
        large: "4",
        xl: "5",
      }),
    },
  };
  return (
    <Flex direction="column" alignItems="center">
      <Heading level={3}>Recommended</Heading>
      <ItemCardBCollection items={products} overrides={overrides} />
    </Flex>
  );
}
