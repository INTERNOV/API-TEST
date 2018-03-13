"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Posts_1 = require("../models/Posts");
// -- path que obtiene todos los post
function getAllPosts(req, res, next) {
    Posts_1.default.find(function (err, posts) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(201).json({ posts: posts });
    });
}
exports.getAllPosts = getAllPosts;
// --
// -- path que obtiene un post, condicionado por su id
function getPostById(req, res, next) {
    var id = req.params.id;
    Posts_1.default.findById(id, function (err, post) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(201).json({ post: post });
    });
}
exports.getPostById = getPostById;
// --
// -- path que crea un nuevo post
function createPost(req, res, next) {
    var title = req.body.title;
    var content = req.body.content;
    if (!title) {
        res.status(422).json({ err: 'Title is required.' });
        return;
    }
    if (!content) {
        res.status(422).json({ err: 'Content is required.' });
        return;
    }
    var post = new Posts_1.default({
        title: title,
        content: content
    });
    post.save(function (err, post) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(201).json({ post: post });
    });
}
exports.createPost = createPost;
// --
// -- path que actualiza un dato, condicionado por el id, que es enviado por params
function updatePost(req, res, next) {
    var id = req.params.id;
    Posts_1.default.findByIdAndUpdate(id, req.body, function (err, post) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(201).json({ post: post });
    });
}
exports.updatePost = updatePost;
// --
// -- path que permite eliminar un post, condicionado por el id, que es enviado por params
function deletePost(req, res, next) {
    var id = req.params.id;
    Posts_1.default.findByIdAndRemove(id, function (err, post) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ post: post });
    });
}
exports.deletePost = deletePost;
// -- 
//# sourceMappingURL=PostController.js.map