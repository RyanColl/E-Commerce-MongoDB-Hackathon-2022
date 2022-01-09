import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  // for future tense, to make something required use: 
  // title: {
  //   type: String,
  //   required: [true, 'Please provide a name for this pet.'],
  //   maxlength: [20, 'Name cannot be more than 60 characters'],
  // },
  title: {type: String},
  price: {type: Number},
  description: {type: String},
  category: {type: String},
  brand: {type: String},
  image: {type: Array},
  rating: {
    oneStar: Number,
    twoStar: Number,
    threeStar: Number,
    fourStar: Number,
    fiveStar: Number,
  },
  type: {type: String},
  collectionName: {type: String}
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)
