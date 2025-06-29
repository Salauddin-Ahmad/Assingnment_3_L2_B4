import { Types } from "mongoose";

export interface Tblog {
  title: string;
  content: string;
  author: Types.ObjectId; // Assuming author is a reference to a user document
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
}


// if custom methods are needed, they can be added to the TblogModel interface
// export interface TblogModel extends Model<Tblog> {
//     // custom methods
// }