import Note from "@/models/Note";
import mongoose from "mongoose";
import { getSingleNote } from "@/controllers/noteController";
import { NextResponse } from "next/server";
const { ObjectId } = mongoose.Types;

export async function PUT(req, { params }) {
  try {
    const id = new ObjectId(params);
    const data = await req.json();

    const result = await Note.findByIdAndUpdate(id, data, { new: true });
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const id = new ObjectId(params);

    const result = await Note.findByIdAndDelete(id);
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(req, { params }) {
try {
    const id = new ObjectId(params);
    
    const result = await getSingleNote(id)
    return NextResponse.json(result)
} catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });

}
}
