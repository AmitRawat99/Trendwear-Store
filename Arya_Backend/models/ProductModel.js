import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../config/DatabaseConnection.js';

const Product = sequelize.define('Products', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    productId: {
        type: DataTypes.STRING
    },
    productName: {
        type: DataTypes.STRING
    },
    slug: {
        type: DataTypes.STRING
    },
    subImg1: {
        type: DataTypes.STRING
    },
    subImg2: {
        type: DataTypes.STRING
    },
    subImg3: {
        type: DataTypes.STRING
    },
    productmainImg: {
        type: DataTypes.STRING
    },
    productBrand: {
        type: DataTypes.STRING
    },
    productOriginalPrice: {
        type: DataTypes.FLOAT
    },
    productOldPrice: {
        type: DataTypes.FLOAT
    },
    productDiscount: {
        type: DataTypes.INTEGER
    },
    productRating: {
        type: DataTypes.FLOAT
    },
    productTotalReview: {
        type: DataTypes.STRING
    },
    productDescription: {
        type: DataTypes.TEXT
    },
    productCategory: {
        type: DataTypes.STRING
    },
    productTags: {
        type: DataTypes.STRING
    },
    productStock: {
        type: DataTypes.INTEGER
    },
    productSubCategory: {
        type: DataTypes.STRING
    },
    productMaterial: {
        type: DataTypes.STRING
    },
    productWashCare: {
        type: DataTypes.STRING
    },
    productShippingInfo: {
        type: DataTypes.STRING
    },
    productOffers: {
        type: DataTypes.STRING
    },
    productMainCategory: {
        type: DataTypes.STRING,
        allowNull: true
    },
    isFeatured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    isNewArrival: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: true,
    tableName: 'Products',
});

export default Product;
