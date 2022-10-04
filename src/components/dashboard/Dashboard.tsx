import { FC, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Box, Typography } from "@mui/material";
import { Title, useGetList } from "react-admin";
import { UserCountryChart } from "./charts/users/UserCountryCahrt";
import { useCountriesPopularity } from "../../hooks/useCountriesPopularity";
import { OrderItem } from "./order/OrderItem";
import { Order } from "../../shared/types/order.types";
import { OrdersChart } from "./charts/orders/OrdersChart";
import styled from "@emotion/styled";

const Item = styled.div<{ width?: string }>`
  width: ${(props) => props.width || "100%"};
  @media (max-width: 767.98px) {
    width: 100%;
  }
`;

export const Dashboard: FC = () => {
  const [sortedOrders, setSortedOrders] = useState<Order[]>();

  const countriesPopularity = useCountriesPopularity();
  const { data: orders } = useGetList("orders");

  useEffect(() => {
    if (orders?.length) {
      setSortedOrders(orders.sort((a, b) => a.id - b.id));
    }
  }, [orders]);

  return (
    <>
      <Title title="Dashboard" />
      <Grid container justifyContent="space-between" marginTop="20px">
        <Grid container gap="20px" width="68%">
          <Item>
            <Card>
              <CardContent>
                <OrdersChart />
              </CardContent>
            </Card>
          </Item>
          <Item width="30%">
            <Card>
              <CardContent>
                <Typography variant="h5">Users countries</Typography>
                {countriesPopularity && (
                  <UserCountryChart countries={countriesPopularity} />
                )}
              </CardContent>
            </Card>
          </Item>
        </Grid>
        <Grid container width="30%">
          <Item>
            <Card>
              <CardContent>
                <Typography variant="h6">Latest orders</Typography>
                <Grid
                  container
                  flexDirection="column"
                  gap="20px"
                  marginTop="20px"
                >
                  {sortedOrders?.length &&
                    sortedOrders.map((order) => (
                      <OrderItem
                        id={order.id}
                        price={order.totalPrice}
                        createdAt={order.createdAt}
                        key={order.id}
                      />
                    ))}
                </Grid>
              </CardContent>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </>
  );
};
