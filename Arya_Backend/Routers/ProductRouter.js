import express from 'express'
import { GetAllProduct, PostAllProducts, DeleteProduct, UpdateProduct, FindOneProduct } from '../controllers/ProductController.js'
const Router = express.Router()
import multer from "multer";
const upload = multer({ dest: 'uploads/' })

// get all product 


Router.get('/get-all-product', GetAllProduct)

// post product 


Router.post('/add-all-products', PostAllProducts)

// delete product 


Router.delete('/delete-product/:id', DeleteProduct)

// update Product

Router.put('/update-product/:id', UpdateProduct)

// find product 

Router.get('/show-details/:id', FindOneProduct)


// post img 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cd(null, "/public/Images/Woman_Clothes")
    },
    filename: function (req, file, cd) {
        return cd(null, `${Date.now()}-${file.originalname}`)
    }
},
)

const uploads = multer({ storage })
console.log(uploads);


Router.get('/upload', upload.single('subImg1'), (req, res) => {
    console.log(req.body)
    console.log(req.file);
    return res.redirect('/')

})

export default Router