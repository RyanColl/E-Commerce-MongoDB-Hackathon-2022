import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  title: {
    /* The name of this pet */

    type: String,
    // required: [true, 'Please provide a name for this pet.'],
    // maxlength: [20, 'Name cannot be more than 60 characters'],
  },
  price: {
    /* The owner of this pet */

    type: Number,
    // required: [true, "Please provide the pet owner's name"],
    // maxlength: [20, "Owner's Name cannot be more than 60 characters"],
  },
  description: {
    /* The species of your pet */

    type: String,
    // required: [true, 'Please specify the species of your pet.'],
    // maxlength: [30, 'Species specified cannot be more than 40 characters'],
  },
  category: {
    /* Pet's age, if applicable */

    type: String,
  },
  brand: {
    type: String
  },
  image: {
    /* Boolean poddy_trained value, if applicable */

    type: Array,
  },
  rating: {
    /* List of dietary needs, if applicable */

    type: {rate: Number, count: Number},
  },
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)
