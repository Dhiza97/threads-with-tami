import { TPostModel } from "@/types/post";
import mongoose, { Schema } from "mongoose";
import User from "./user.model";

const PostModel = new Schema<TPostModel>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  coverImage: {
    type: String,
  },
  author: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
  },
  published: {
    type: Boolean,
  },
  tags: {
    type: [String],
  },
  likedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  comments: [
    {
      id: {
        type: String,
      },
      commentContent: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  views: {
    type: Number,
    default: 0,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  isDraft: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
}, {
  timestamps: true,
});

const Post = mongoose.models.Post || mongoose.model<TPostModel>("Post", PostModel);

export default Post;