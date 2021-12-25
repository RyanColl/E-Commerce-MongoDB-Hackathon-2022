import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: [true, 'Please provide a name for this pet.'],
    // maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  price: {
    type: Number,
    // required: [true, "Please provide the pet owner's name"],
    // maxlength: [20, "Owner's Name cannot be more than 60 characters"],
  },
  description: {
    type: String,
    // required: [true, 'Please specify the species of your pet.'],
    // maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  category: {
    type: String,
  },
  brand: {
    type: String
  },
  image: {
    type: Array,
  },
  rating: {
    type: {rate: Number, count: Number},
  },
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)
