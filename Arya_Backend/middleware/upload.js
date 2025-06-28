import express from 'express';
import multer from 'multer'
const Router = express.Router()
import path from 'path'
import fs from 'fs'


const storage = multer.diskStorage({
    destination: function (req, file, cd) {
        const proudctCategory = req.query.category || "woman"

        const uploadPath = path.join('../Arya_Frontend/public/uploads/', proudctCategory)
        fs.mkdirSync(uploadPath, { recursive: true })
        return cd(null, uploadPath)

    },
    filename: function (req, file, cd) {
        cd(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage })

Router.post('/upload', upload.single('image'), (req, res) => {

    const proudctCategory = req.query.category || "woman"

    if (!req.file) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
    }

    return res.status(200).json({
        success: true,
        filePath: `/uploads/${proudctCategory}/${req.file.filename}`
    });
});



export default Router