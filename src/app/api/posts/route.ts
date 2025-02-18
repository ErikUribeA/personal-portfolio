import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    const { title_en, title_es, description_en, description_es, img, linkGithub, linkWeb, icons } = await req.json();

    try {
        const newPost = await prisma.post.create({
            data: {
                title_en,
                title_es,
                description_en,
                description_es,
                img,
                linkGithub,
                linkWeb,
                icons: icons // Guardamos los iconos directamente como JSON
            }
        });

        return NextResponse.json(newPost);
    } catch (error) {
        console.error(error);
        return NextResponse.error();
    }
}

export async function GET() {
    try {
        const posts = await prisma.post.findMany()

        return NextResponse.json(posts)
    } catch (error) {
        console.log(error)
    }
}