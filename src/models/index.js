// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Cart, CartItem, Category, Product } = initSchema(schema);

export {
  Cart,
  CartItem,
  Category,
  Product
};