const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 3
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    company: {
        type: String,
        enum: {
            values: ['ikea', 'marcos', 'liddy', 'caressa'],
            message: 'Invalid company'
        },
    }
});

module.exports = mongoose.model('Product', productSchema);
