import { Product } from "../product/Product";
import { User } from "../user/User";

export type Review = {
  createdAt: Date;
  id: string;
  product?: Array<Product>;
  rating: number;
  updatedAt: Date;
  user?: User | null;
};
