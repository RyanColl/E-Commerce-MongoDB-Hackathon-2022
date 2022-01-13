import Product from "../models/Product";
import { sortByShoeSize } from "./dbAccess";

/* 

Welcome to the Atlas Search Queries!

Using mongoose, we can aggregate directly from the Product Model.

The indexes set up for getProductsByCollection and getProductsByType are not dynamic and
are used as filters for returning products based on how someone navigates to the product page

The index for atlasSearch is dynamic and uses the autocomplete feature to test 
all products in the database as a dropdown. This is the true power of atlas search

*/
export const getProductsByCollection = async (collection) => {
    const res = await Product.collection.aggregate([
        {
          $search: {
            index: 'collectionName',
            text: {
              query: `${collection}`,
              path: {
                'wildcard': '*'
              }
            }
          }
        }
      ]).limit(20).toArray()
      return res;
}


export const sortCollection = async (collection, sort) => {
  console.log('sorting by collection ...', sort)
  if(sort.shoeSizes) return await sortByShoeSize({collection}, sort)
  const res = await Product.collection.aggregate(
    [
      {
        $search: {
          index: 'collectionName',
          text: {
            query: `${collection}`,
            path: {
              'wildcard': '*'
            }
          }
        }
      }
    ]
  ).sort(sort).limit(20).toArray()
  return res;
}

export const getProductsByType = async (type) => {
    const res = await Product.collection.aggregate([
        {
          $search: {
            index: 'type',
            text: {
              query: `${type}`,
              path: {
                'wildcard': '*'
              }
            }
          }
        }
      ]).limit(20).toArray()
    //   console.log(res)
      return res;
}

export const sortType = async (type, sort) => {
  console.log('sorting by type ...', sort)
  if(sort.shoeSizes) return await sortByShoeSize({type}, sort)
  const res = await Product.collection.aggregate(
      [
          {
            $search: {
              index: 'type',
              text: {
                query: `${type}`,
                path: {
                  'wildcard': '*'
                }
              }
            }
          }
        ]
  ).sort(sort).limit(20).toArray()
  console.log(res)
  return res;
}



export const atlasSearch = async (searchText) => {
    const res = await Product.collection.aggregate([
        {
            $search: {
              index: 'default', // optional, defaults to "default"
              autocomplete: {
                query: `${searchText}`,
                path: 'description',
                fuzzy: {
                    maxEdits: 2,
                    prefixLength: 3
                },
              }
            }
          }
    ]).limit(8).toArray()
    console.log(res)
    return res;
}