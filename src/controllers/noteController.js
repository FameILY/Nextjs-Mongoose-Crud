import connectMongoDB from "@/lib/db";
import Note from "@/models/Note";

export async function getAllNotes(req) {
    await connectMongoDB()
    const result = await Note.find()
    if (result.length > 0) {
    
        return result
    } else {
        return "No Notes yet, create a note first by POST request"
    }
}

export async function getSingleNote(id){
    await connectMongoDB()
    const result = await Note.findById(id) //returns null if not found

    if (result) {
    
        return result
    } else {
        return "Couldn't find the note, maybe deleted or wrong id"
    }
}