import { z } from "zod";
import {
  CreateOrderValidator,
  LoginValidator,
  SignupValidator,
} from "../validators.ts";

export type OrderDTO = {
  id: number;
  user_id: number;
  status: string;
  items: OrderItemDTO[];
};

export type OrderItemDTO = {
  product: ProductDTO;
};

export type ProductDTO = {
  id: string;
  quantity: number;
  product_name: string;
  category: string;
};

export type UserDTO = {
  id: number;
  username: string;
};

/**
 * ResponseData and Payload are both data transfer object in this context
 * but Payload indicate object sent FROM client TO server
 * and ResponseData indicate object sent FROM server TO client
 */

export type APIResponse<T> = {
  success: boolean;
  data?: T;
  error_message?: string;
};

export type CreateOrderResponseData = {
  order_id: number;
};

export type OrderListResponseData = {
  orders: OrderDTO[];
};

export type LoginResponseData = {
  access_token: string;
};

export type SignupResponseData = {
  redirect_url: string;
};

export type LoginPayload = z.infer<typeof LoginValidator>;
export type SignupPayload = z.infer<typeof SignupValidator>;
export type CreateOrderPayload = z.infer<typeof CreateOrderValidator>;
