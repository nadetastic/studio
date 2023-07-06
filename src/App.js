import React, { useState, useEffect } from "react";
import "./App.css";
import { Category, Recommended, NavBar, Footer, Product } from "./components";
import "@aws-amplify/ui-react/styles.css"; // default theme
import { Flex, AmplifyProvider } from "@aws-amplify/ui-react";
import { Cart, CartItem } from "./models";
import { DataStore } from "@aws-amplify/datastore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // we keep the cart at the app level so we can pass it between components
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState();

  useEffect(() => {
    // get the Cart or create a new one if one doesn't exist
    async function getCart() {
      if (cart === undefined) {
        const cart = await DataStore.query(Cart);
        if (cart.length !== 0) {
          setCart(cart[0]);
        } else {
          const cart = new Cart({});
          DataStore.save(cart);
          setCart(cart);
        }
      }
    }

    getCart();

    // Subscribe to CartItems so we can update the cart badge as items are added
    if (cart !== undefined) {
      const subscription = DataStore.observeQuery(CartItem, (ci) => {
        ci.cartID("eq", cart.id);
      }).subscribe((snapshot) => {
        if (snapshot !== undefined) {
          setCartItems(snapshot.items);
        }
      });

      return () => subscription.unsubscribe();
    }

    return;
  }, [cart]);

  // General function to pass to other components to provide common logic across components
  async function updateCartItem(id, q) {
    const items = await DataStore.query(CartItem, (c) =>
      c.cartID("eq", cart.id).cartItemProductId("eq", id)
    );

    // if we already have an item in the cart we will add appropriately
    if (items.length !== 0) {
      DataStore.save(
        CartItem.copyOf(items[0], (updated) => {
          updated.quantity = q(updated.quantity);
        })
      );
    } else {
      // Create a new CartItem if one doesn't exist
      DataStore.save(
        new CartItem({
          cartID: cart.id,
          cartItemProductId: id,
          quantity: q(0),
        })
      );
    }
  }

  return (
    <AmplifyProvider>
      <Router>
        <Flex
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          alignContent="flex-start"
          wrap="nowrap"
          gap="1rem"
        >
          <NavBar cartItems={cartItems} />
          <Routes>
            <Route path="/" element={<Recommended />} />
            <Route
              path="/category/:name"
              element={<Category updateCart={updateCartItem} />}
            />
            <Route
              path="/product/:id"
              element={<Product updateCart={updateCartItem} />}
            />
          </Routes>
          <Footer></Footer>
        </Flex>
      </Router>
    </AmplifyProvider>
  );
}

export default App;
