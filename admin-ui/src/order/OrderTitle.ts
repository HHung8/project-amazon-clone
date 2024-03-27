import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "paymentlntent";

export const OrderTitle = (record: TOrder): string => {
  return record.paymentlntent?.toString() || String(record.id);
};
