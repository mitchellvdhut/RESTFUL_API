import Post from "../models/postModel.js";

class PostController {
  public static findAllPosts = (req: any, res: any) => {
    Post.find((err: any, posts: any) => {
      res.json(posts);
    });
  };

  public static findOnePost = (req: any, res: any, query: object) => {
    Post.findOne(query, (err: any, post: any) => {
      res.json(post);
    });
  };

    public static createOnePost = (req: any, res: any, query: object) => {
      Post.create(query, (err: any, post: any) => {
        if (err) return console.log(err);
        
        console.log(post);
        console.log('added 1 record to the database!')
      });
    };

  public static findOneAndDelete = (req: any, res: any, query: object) => {
    Post.findOneAndDelete(query, (err: any, post: any) => {
      if (err) return console.log(err);
      console.log(post)
      console.log(`removed note \'${post.title}\' from the database`)
      // Add undo function
    });
  };
  
  public static findOneAndUpdate = (req: any, res: any, query: object, update: object) => {
    Post.findOneAndUpdate(query, update, {
      new: true,
    }, (err: any, post: any) => {
      if (err) return console.log(err);

      console.log(post);
      console.log(`edited post: ${post.title}`)
    });
  };
}

export default PostController;
