import styled from "@emotion/styled";
import { colors, Grid, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { Link } from "react-admin";
import { randomDate } from "../../../shared/utils/randomDate";

interface Props {
  id: number;
  price: number;
  createdAt: string;
}

const Container = styled.div`
  display: flex;
  padding: 20px 0;
  color: black;
  &:hover {
    cursor: pointer;
    background-color: ${colors.grey[100]};
  }
`;

export const OrderItem: FC<Props> = ({ id, price, createdAt }) => {
  const date: Date = new Date(createdAt);

  return (
    <Link to={`/orders/${id}`}>
      <Container>
        <Grid item width="10%">
          <Typography variant="body1" align="center">
            {id}
          </Typography>
        </Grid>
        <Grid item width="40%">
          <Typography variant="body1" align="center">
            {price}$
          </Typography>
        </Grid>
        <Grid item width="50%">
          <Typography variant="body1" align="center">
            {date.toLocaleString()}
          </Typography>
        </Grid>
      </Container>
    </Link>
  );
};
