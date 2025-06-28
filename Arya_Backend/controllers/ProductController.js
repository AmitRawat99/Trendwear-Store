import experss from 'express';
import ProductModel from '../models/ProductModel.js'
import multer from 'multer'

// get all prodcuts 

export const GetAllProduct = async (req, res) => {
    try {
        const findAllproduct = await ProductModel.findAll()


        if (!findAllproduct || findAllproduct.length === 0) {
            req.status(404).json({
                message: "Not found  products"
            })
        }

        res.status(200).json({
            success: true,
            message: "successfully retrieved  products",
            products: findAllproduct
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong while retrieving products",
            error: error.message
        })
    }
}

// post all product according to id 

export const PostAllProducts = async (req, res) => {

    try {
        const { productId,
            productName,
            slug,
            subImg1,
            subImg2,
            subImg3,
            productmainImg,
            productBrand,
            productOriginalPrice,
            productOldPrice,
            productDiscount,
            productSubCategory,
            productRating,
            productTotalReview,
            productDescription,
            productCategory,
            productTags,
            productStock,
            productSizes,
            productColors,
            productMaterial,
            productWashCare,
            productShippingInfo,
            productOffers,
            isFeatured,
            isNewArrival,
            productMainCategory } = req.body;

        const files = req.files || {}

        const createProduct = new ProductModel({
            productId,
            productName,
            slug: productName,
            productBrand,
            productOriginalPrice,
            productOldPrice,
            productmainImg,
            subImg1,
            subImg2,
            subImg3,
            productDiscount,
            productRating,
            productSubCategory,
            productTotalReview,
            productDescription,
            productCategory,
            productTags,
            productStock,
            productSizes,
            productColors,
            productMaterial,
            productWashCare,
            productShippingInfo,
            productOffers,
            isFeatured,
            isNewArrival,
            productMainCategory
        });


        await createProduct.save()
        console.log("products", createProduct);


        return res.status(201).json({
            success: true,
            message: "create product successfully",
            product: createProduct
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "somethink went wrong not posted the products",
            error: error.message
        })
    }
}

// delete product according to id 

export const DeleteProduct = async (req, res) => {
    try {
        const { id } = req.params
        const productfind = await ProductModel.findOne({ where: { id } })


        if (!productfind) {
            res.status(404).json({
                success: false,
                message: "Product not find on this id",
            })
        }

        productfind.destroy()

        res.status(201).json({
            success: true,
            message: "produt delete successfully",
            product: productfind
        })

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "somethink went wrong",
            error: error.message
        })
    }
}

// update produt according to id 

export const UpdateProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const findUpdateProduct = await ProductModel.findOne({ where: { id } })

        if (!findUpdateProduct) {
            res.status(401).jon({
                message: false,
                message: "product not found on this id"
            })
        }

        findUpdateProduct.update(req.body)
        console.log(findUpdateProduct);


        res.status(201).json({
            success: true,
            message: "update product succssfully",
            updateProduct: findUpdateProduct,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: " somethink went wrong ",
            error: error.message
        })
    }
}


export const FindOneProduct = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id);

        const findOne = await ProductModel.findByPk(id)

        if (!findOne) {
            return res.status(404).json({
                success: false,
                message: "Not found the product on this id",
            })
        }

        return res.status(201).json({
            success: true,
            message: "Product find successfully",
            findOneProduct: findOne
        })

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: "somethink went wrong",
            error: error.message
        })
    }
}