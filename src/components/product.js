import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemCardC } from "../ui-components";
import { Product as ModelProduct } from "../models";
import { DataStore } from "@aws-amplify/datastore";

export default function Product({ updateCart }) {
  // this component is used when something hits /product/{id}
  // id is used to represent the product unique ID
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    // Query the product based on id
    async function query() {
      if (product === undefined) {
        try {
          const product = await DataStore.query(ModelProduct, id);
          setProduct(product);
        } catch (error) {
          console.log("Error retrieving posts", error);
        }
      }
    }

    query();
  }, [id, product]);

  // Build the drop down list items
  const quantyOptions = [...Array(10)].map((_, i) => (
    <option key={i + 1} value={i + 1}>
      Qty: {i + 1}
    </option>
  ));

  // ovverideds for ItemCardC
  const overrides = {
    Quantity: {
      // We want to drop the placeholder for making the view better
      placeholder: null,
      // Populate the drop down with our quantity options
      children: quantyOptions,
      // On change of the drop down change the quantity value
      onChange: (e) => {
        setQuantity(e.target.value);
      },
    },
    AddToCart: {
      onClick: (e) => {
        // call the updateCart function with the quantity set in the drop down
        updateCart(id, function (x) {
          return x + parseInt(quantity, 10);
        });
      },
    },
  };

  return (
    <ItemCardC
      product={product}
      width={"100vw"}
      overrides={overrides}
    ></ItemCardC>
  );
}
