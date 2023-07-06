import React, { useState, useEffect } from "react";
import { NavBar as UINavBar } from "../ui-components";
import { Divider, Menu, MenuItem } from "@aws-amplify/ui-react";
import { Category } from "../models";
import { DataStore, SortDirection, Predicates } from "@aws-amplify/datastore";
import { useNavigate } from "react-router-dom";

export default function NavBar({cartItems}) {
  let navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  // handle navigation changes
  const routeChange = (e) => {
    let path = `/category/${e.target.textContent}`;
    navigate(path);
  };

  // Query categories for building the menu
  async function queryCategories() {
    try {
      const categories = await DataStore.query(Category, Predicates.ALL, {
        sort: (c) => c.name(SortDirection.ASCENDING),
      });
      setCategories(categories);
    } catch (error) {
      console.log("Error retrieving categories", error);
    }
  }

  useEffect(() => {
    queryCategories();
  }, [categories, cartItems]);

  // Build the menu items
  const menuItems = categories.map((category) => (
    <MenuItem key={category.name} onClick={routeChange}>
      {category.name}
    </MenuItem>
  ));

  // overrides
  const overrides = {
    Menu: {
      position: 'static',
      children: <Menu>{menuItems}</Menu>,
    },
    Badge: {
      children: cartItems.reduce((t, v) => (t = t + v.quantity), 0),
    },
  };

  return (
    <div>
      <UINavBar width={"100vw"} overrides={overrides} />
      <Divider />
    </div>
  );
}
