export type TPostModel = {
    postId: string;
    title: string;
    content: string;
    author: string;
    coverImage: string;
    createdAt: Date;
    updatedAt: Date;
    published: boolean;
    tags: string[];
    likedBy: string[];
    comments: TCommentModel[];
    views: number;
    isFeatured: boolean;
    isDraft: boolean;
}

export type TCommentModel = {
    id: string;
    postId: string; // ID of the post the comment belongs to
    userId: string; // ID of the user who made the comment
    content: string;
    createdAt: Date;
}