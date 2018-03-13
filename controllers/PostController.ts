import Post from '../models/Posts';

// -- path que obtiene todos los post
export function getAllPosts(req, res, next) {
    Post.find((err, posts) => {
        if (err) {
            res.status(500).json({ err });
        }

        res.status(201).json({ posts });
    });
}
// --

// -- path que obtiene un post, condicionado por su id
export function getPostById(req, res, next) {
    const id = req.params.id;
  
    Post.findById(id, (err, post) => {
      if (err) {
          res.status(500).json({ err });
      }
  
      res.status(201).json({ post });
    });
}
// --

// -- path que crea un nuevo post
export function createPost(req, res, next) {
    const title = req.body.title;
    const content = req.body.content;

    if (!title) {
        res.status(422).json({ err: 'Title is required.' });
        return;
    } 

    if (!content) {
        res.status(422).json({ err: 'Content is required.' });
        return;
    }

    const post = new Post({
        title,
        content
    });

    post.save((err, post) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(201).json({post});
    });
}
// --

// -- path que actualiza un dato, condicionado por el id, que es enviado por params
export function updatePost (req, res, next) {
    const id = req.params.id;

    Post.findByIdAndUpdate(id, req.body, (err, post) => {
        if (err) {
            res.status(500).json({err});
        }

        res.status(201).json({post});
    });
}
// --

// -- path que permite eliminar un post, condicionado por el id, que es enviado por params
export function deletePost(req, res, next) {
    const id = req.params.id;

    Post.findByIdAndRemove(id, (err, post) => {
        if (err) {
            res.status(500).json({err});
        }

        res.status(200).json({post});
    });
}
// --