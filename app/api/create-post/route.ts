import { connectDB } from "@/lib/config/db";
import Post from "@/lib/models/post.model";
import { TPostModel } from "@/types/post";
import { NextRequest } from "next/server";


export async function createPost(postData: Partial<TPostModel>) {
    try {
        await connectDB();
        const post = await Post.create(postData)
        return post;
    } catch (error) {
        throw new Error(`Failed to create post: ${error}`)
    }
}

export async function POST(req: NextRequest) {
    try {
        const postData: Partial<TPostModel> = await req.json();
        const post = await createPost(postData);
        return new Response(JSON.stringify(post), { status: 201 });
    } catch (error) {
        return new Response(`Failed to create post: ${error}`, { status: 500 });
    }
}