import { ProductUpdateManyWithoutReviewsInput } from "./ProductUpdateManyWithoutReviewsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  product?: ProductUpdateManyWithoutReviewsInput;
  rating?: number;
  user?: UserWhereUniqueInput | null;
};
