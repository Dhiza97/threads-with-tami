export type TPostModel = {
    title: string;
    content: string;
    coverImage: string;
    author: {
        name: string;
        email: string;
        image: string;
    }
    published: boolean;
    tags: string[];
    likedBy: Types.ObjectId[];
    comments: TCommentModel[];
    views: number;
    isFeatured: boolean;
    isDraft: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export type TCommentModel = {
    id: string;
    commentContent: string;
    createdAt: Date;
}