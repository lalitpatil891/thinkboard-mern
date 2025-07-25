import Note from "../models/Note.js"

export async function getAllNotes(req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in gelAllNotes controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {

        console.error("Error in createNote controller", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id, { title, content },
            {
                new: true,
            });

        if (!updatedNote) return res.status(404).json({ message: "Note not found" })

        res.status(200).json({ message: "Note updated successfully" });
    } catch (error) {
        console.error("Error in updateNode controller", error);
        res.status(500).json({ message: "Internal server error!" });
    }
};


export async function deleteNote(req, res) {
   try {
    
    
    //start from here 1:16:32 


   } catch (error) {
    
   }
};