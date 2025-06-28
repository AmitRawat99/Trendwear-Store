import ReviewModel from "../models/ReviewModel.js";

export const AddReview = async (req, res) => {
    try {
        const { id } = req.params
        console.log("id" , id);
        

        const { ProductId, rating, message } = req.body;
        const { userId } = req.user
        console.log(userId);
        

        if (!rating || !message) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields"
            });
        }

        const newReview = await new ReviewModel({
            ProductId,
            userId,
            rating,
            message,
        });

        await newReview.save()

        res.status(201).json({
            success: true,
            message: "Review added successfully",
            review: newReview
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message
        });
    }
};

export const findReview = async (req, res) => {
    try {

        const { id } = req.params

        const findAllReviews = await ReviewModel.findAll({ where: { ProductId : id } })

        if (!findAllReviews || findAllReviews.length === 0) {
            return res.status(400).json({
                success: false,
               message: "No reviews found for this id",
            });
        }

        res.status(200).json({
            success: true,
            message: "find review successfully",
            findAllReviews,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: error.message,
        });
    }
};
