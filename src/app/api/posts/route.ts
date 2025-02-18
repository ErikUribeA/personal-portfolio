import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const allowedOrigins = ["http://localhost:3000", "https://eriksportfolio.vercel.app"];

export async function POST(req: NextRequest) {
    const origin = req.headers.get("origin");
    
    if (origin && !allowedOrigins.includes(origin)) {
        return new NextResponse("CORS not allowed", { status: 403 });
    }

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
                icons // Guardamos los iconos directamente como JSON
            }
        });

        return new NextResponse(JSON.stringify(newPost), {
            status: 201,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": origin || "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse("Error al crear el post", { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    const origin = req.headers.get("origin");

    if (origin && !allowedOrigins.includes(origin)) {
        return new NextResponse("CORS not allowed", { status: 403 });
    }

    try {
        const posts = await prisma.post.findMany();

        return new NextResponse(JSON.stringify(posts), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": origin || "*",
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
            },
        });
    } catch (error) {
        console.error(error);
        return new NextResponse("Error al obtener los posts", { status: 500 });
    }
}

// Manejar preflight para CORS
export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        },
    });
}
