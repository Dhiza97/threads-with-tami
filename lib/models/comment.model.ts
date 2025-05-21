import { TCommentModel } from "@/types/post";
import mongoose, { Schema } from "mongoose";

const commentModel = new Schema<TCommentModel>({
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
}, {
    timestamps: true,
})

const Comment = mongoose.models.Comment || mongoose.model<TCommentModel>("Comment", commentModel);

export default Comment;