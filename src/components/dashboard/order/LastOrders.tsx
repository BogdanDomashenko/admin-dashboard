import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { FC } from "react";
import { Order } from "../../../shared/types/order.types";
import { OrderItem } from "./OrderItem";

interface Props {
  orders: Order[];
}

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  height: auto;
  overflow-y: auto;
  margin-top: 20px;
`;

export const LastOrders: FC<Props> = ({ orders }) => {
  return (
    <>
      <Typography variant="h6">Latest orders</Typography>
      <OrdersContainer>
        {orders.map((order) => (
          <OrderItem
            id={order.id}
            price={order.totalPrice}
            createdAt={order.createdAt}
            key={order.id}
          />
        ))}
      </OrdersContainer>
    </>
  );
};
