import Product from "../models/Product";


/* 

Welcome to the Atlas Search Queries!

Using mongoose, we can aggregate directly from the model.

The indexes set up for getProductsByCollection and getProductsByType are not dynamic and
are used as filters for returning products based on how someone navigates to the product page

The index for atlasSearch is dynamic and uses the 

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

export const atlasSearch = async (searchText) => {
    const res = await Product.collection.aggregate([
        {
            $search: {
              index: 'default', // optional, defaults to "default"
              autocomplete: {
                query: `${searchText}`,
                path: ["description", 'type', 'collectionName', 'title'],
                fuzzy: {
                    maxEdits: 2,
                    prefixLength: 3
                },
              }
            }
          }
    ]).toArray()
    console.log(res)
    return res;
}