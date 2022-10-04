import { Grid, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { randomDate } from "../../../shared/utils/randomDate";

interface Props {
  id: number;
  price: number;
  createdAt: string;
}

export const OrderItem: FC<Props> = ({ id, price, createdAt }) => {
  const date: Date = new Date(createdAt);

  return (
    <Grid container>
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
    </Grid>
  );
};
