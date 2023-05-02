const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

//Movie Blueprint
const movieSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        enum: ['action', 'fantasy', 'horror'],
        required: true
    },
    releaseYear: Number
})

module.exports = mongoose.model("Movie", movieSchema)

// const BlogPost = new Schema({
//     author: ObjectId,
//     title: String,
//     body: String,
//     date: Date
//   });

// const Comment = new Schema({
//     name: { type: String, default: 'hahaha' },
//     age: { type: Number, min: 18, index: true },
//     bio: { type: String, match: /[a-z]/ },
//     date: { type: Date, default: Date.now },
//     buff: Buffer
//   });
  
//   // a setter
//   Comment.path('name').set(function(v) {
//     return capitalize(v);
//   });
  
//   // middleware
//   Comment.pre('save', function(next) {
//     notify(this.get('email'));
//     next();
//   });