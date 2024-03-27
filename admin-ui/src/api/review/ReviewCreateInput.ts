import { ProductCreateNestedManyWithoutReviewsInput } from "./ProductCreateNestedManyWithoutReviewsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  product?: ProductCreateNestedManyWithoutReviewsInput;
  rating: number;
  user?: UserWhereUniqueInput | null;
};
