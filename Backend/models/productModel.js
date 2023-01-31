const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      default: 0,
    },

    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],

    category: {
      type: String,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
      default: 1,
    },

    numOfReviews: {
      type: Number,
      default: 0,
    },

    reviews: [
      {
        name: {
          type: String,
          required: true,
        },

        rating: {
          type: Number,
          required: false,
        },

        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
