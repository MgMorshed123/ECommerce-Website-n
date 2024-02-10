
import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },


    /* 
    the buyer field is referencing a Mongoose model named "users". This means that Mongoose will use the "users" model to fetch documents from the MongoDB collection associated with that model when populating this field.

    So, in this context, "Products" and "users" are the names of the Mongoose models, and Mongoose will use these models to populate the products and buyer fields respectively with documents from MongoDB based on the ObjectIDs stored in the orderSchema.
    */
   
    status: {
      type: String,
      default: "Not Process",
      enum: ["Not Process", "Processing", "Shipped", "deliverd", "cancel"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);