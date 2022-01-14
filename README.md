## E-Commerce Store integrating Atlas Search using MongoDB and NextJS

[MongoDB](https://www.mongodb.com/) is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. This example will show you how to connect to and use MongoDB as your backend for your Next.js app.

If you want to learn more about MongoDB, visit the following pages:

- [MongoDB Atlas](https://mongodb.com/atlas)
- [MongoDB Documentation](https://docs.mongodb.com/)

If you want to learn more about NextJS, vistit the following pages:

- [NextJS Github](https://github.com/vercel/next.js/#getting-started)
- [NextJS Documentation](https://nextjs.org/learn/basics/create-nextjs-app)
## Configuration

### Set up a MongoDB database

Set up a MongoDB database either locally or with [MongoDB Atlas for free](https://mongodb.com/atlas).

### Set up environment variables

Copy the `env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Set each variable on `.env.local`:

- `MONGODB_URI` - Your MongoDB connection string. If you are using [MongoDB Atlas](https://mongodb.com/atlas) you can find this by clicking the "Connect" button for your cluster.

### Run Next.js in development mode

```bash
npm install
npm run dev
```

Your app should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

You will either see a message stating "You are connected to MongoDB" or "You are NOT connected to MongoDB". Ensure that you have provided the correct `MONGODB_URI` environment variable.

When you are successfully connected, you can refer to the [MongoDB Node.js Driver docs](https://mongodb.github.io/node-mongodb-native/3.4/tutorials/collections/) for further instructions on how to query your database.

## Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

#### Deploy from Our Template

Alternatively, you can deploy using the original "with-mongodb" template by clicking on the Deploy button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-mongodb&project-name=with-mongodb&repository-name=with-mongodb&env=MONGODB_URI,MONGODB_DB&envDescription=Required%20to%20connect%20the%20app%20with%20MongoDB)


# Atlas Search 

### Indexes

Three Indexes were set up (the maximum for a free cluster) for different purposes for this app.

1. The first index searches our database for a single element of a collection: type.
The type being passed as a parameter is either 'mens', or 'womens', and the database is searched accordingly.
```js
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
      return res;
}
```

2. The second index searches our database for a single element of a collection: collectionName.
The collection being passed as a parameter is either 'sport', 'luxury', or 'collectors', and the database is searched accordingly.
```js
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
```

3. The third index setup for this app is the most powerful and one I would like to show off for purposes fo the hackathon. This index is setup using MongoDB's Atlas Search's [AutoComplete](https://docs.atlas.mongodb.com/atlas-search/autocomplete/). Autocomplete allows us to take a complete index of our database, and search through a specific field for products that match the spelling of a word. We can even apply a fuzzy filter, so when users misspell our product names, MongoDB still knows what they mean. The index is as follows:

```js
export const atlasSearch = async (searchText) => {
    const res = await Product.collection.aggregate([
        {
            $search: {
              index: 'autocomplete', 
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
    ]).limit(50).toArray()
    return res;
}
```

The name of this index is autocomplete, and the path we are looking through is the description of the products. We could look through names/titles if we had simpler products like groceries, but with shoe descriptions, Atlas Search uses score based returns to order the products that are returned from the query based on their score. Using a simple dropdown, I have placed the products underneath the search bar in a scrollable menu.




