import { NextResponse } from "next/server"
import Note from "@/models/Note"
import connectMongoDB from "@/lib/db";
import { getAllNotes } from "@/controllers/noteController";


export async function POST(req) {
    try {
        const { title, description } = await req.json();
        await connectMongoDB();
        await Note.create({ title, description });
        return NextResponse.json(
          { message: "Note created successfully" },
          { status: 200 }
        );

    } catch (err) {
        console.log(err)
        return NextResponse.json(err, { status: 200})
    }
  }

export async function GET(req) {

    const result = await getAllNotes()
    return NextResponse.json(result, { status: 200})
}