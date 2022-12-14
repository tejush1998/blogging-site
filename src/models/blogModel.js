const mongoose = require("mongoose");
const objectId = mongoose.Schema.Types.ObjectId;
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    authorId: {
      type: objectId,
      required: true,
      ref: "Author",
    },
    tags: [String],
    category: {
      type: String,
      required: true,
      lowercase:true
    },
    subcategory: [String],
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    publishedAt: {type: Date,
    default:null},
    deletedAt: {type: Date,
    default:null}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
