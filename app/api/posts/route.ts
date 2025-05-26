import { connectDB } from "@/lib/config/db";
import Post from "@/lib/models/post.model";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();
        const posts = await Post.find({ published: true }).sort({ createdAt: -1 });
        return NextResponse.json(posts)
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
    }
}