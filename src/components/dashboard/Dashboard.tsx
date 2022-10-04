import { FC, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Box, Typography } from "@mui/material";
import { Title, useGetList } from "react-admin";
import { UserCountryChart } from "./charts/users/UserCountryCahrt";
import { useCountriesPopularity } from "../../hooks/useCountriesPopularity";
import { OrderItem } from "./order/OrderItem";
import { SalesChart } from "./charts/orders/SalesChart";
import styled from "@emotion/styled";
import { RevenueChart } from "./charts/orders/RevenueChart";
import { LastOrders } from "./order/LastOrders";
import { Order } from "../../shared/types/order.types";
import { NewUsers } from "./user/NewUsers";

const Item = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => props.width || "100%"};
  @media (max-width: 767.98px) {
    width: 100%;
  }
`;

const Container = styled.div<{ width?: string; height?: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: ${(props) => props.width || "100%"};
  @media (max-width: 767.98px) {
    width: 100%;
    &:not(:first-child) {
      margin-top: 20px;
    }
  }
`;

export const Dashboard: FC = () => {
  const [sortedOrders, setSortedOrders] = useState<Order[]>();

  const countriesPopularity = useCountriesPopularity();
  const { data: orders } = useGetList("orders");
  const { data: users } = useGetList("users");

  useEffect(() => {
    if (orders?.length) {
      setSortedOrders(orders.sort((a, b) => a.id - b.id));
    }
  }, [orders]);

  return (
    <>
      <Title title="Dashboard" />
      <Grid
        container
        justifyContent="space-between"
        marginTop="20px"
        marginBottom="20px"
      >
        <Container width="68%">
          <Item>
            <Card>
              <CardContent>
                <Typography variant="h6" marginBottom="20px">
                  Sales
                </Typography>
                <SalesChart />
              </CardContent>
            </Card>
          </Item>
          <Item width="30%">
            <Card>
              <CardContent>
                <Typography variant="h6" marginBottom="20px">
                  Users countries
                </Typography>
                {countriesPopularity && (
                  <UserCountryChart countries={countriesPopularity} />
                )}
              </CardContent>
            </Card>
          </Item>
          <Item width="68%">
            <Card>
              <CardContent>
                <Typography variant="h6" marginBottom="20px">
                  Revenue
                </Typography>
                <RevenueChart />
              </CardContent>
            </Card>
          </Item>
        </Container>
        <Container width="30%">
          <Item>
            <Card>
              <CardContent>
                {sortedOrders?.length && <LastOrders orders={sortedOrders} />}
              </CardContent>
            </Card>
          </Item>
          <Item>
            <Card>
              <CardContent>
                {users?.length && <NewUsers users={users} />}
              </CardContent>
            </Card>
          </Item>
        </Container>
      </Grid>
    </>
  );
};
