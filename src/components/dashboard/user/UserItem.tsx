import { Grid, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { randomDate } from "../../../shared/utils/randomDate";

interface Props {
  username: string;
  balance: number;
  country: string;
}

export const UserItem: FC<Props> = ({ username, balance, country }) => {
  return (
    <Grid container>
      <Grid item width="50%">
        <Typography variant="body1" align="left">
          {username}
        </Typography>
      </Grid>
      <Grid item width="20%">
        <Typography variant="body1" align="center">
          {balance}$
        </Typography>
      </Grid>
      <Grid item width="30%">
        <Typography variant="body1" align="center">
          {country}
        </Typography>
      </Grid>
    </Grid>
  );
};
