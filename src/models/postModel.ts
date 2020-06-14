import { model, Schema } from "mongoose";

const postSchema = new Schema<IPost>({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
  },
  author: {
    type: String,
    default: 'admin',
  },
  likes: {
    type: Number,
    default: 0
  },
  status: {
    type: Boolean,
    default: true,
  },
  creationDate: {
    type: Date,
    default: new Date(),
  },
});

interface IPost {
  title?: string;
  body?: string;
  author: string;
  likes: number;
  status: boolean;
  creationDate: Date;
}

const Post = model("Post", postSchema);

export default Post;
