const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  img: { type: String, require: true},
  theme: String,
  onSale: {
    type: Boolean,
    default: false
  },
  price: { type: String, require: true},
  inCart: {
    type: Boolean,
    default: false
  },
  onWishList: {
    type: Boolean,
    default: false
  }
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

// Add `createdAt` and `updatedAt` fields
itemSchema.set('timestamps', true);

// Transform output during `res.json(data)`, `console.log(data)` etc.
itemSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
  }
});

module.exports = mongoose.model('Item', itemSchema);