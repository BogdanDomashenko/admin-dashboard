import styled from "@emotion/styled";
import { colors, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { Link } from "react-admin";

interface Props {
  id: number;
  username: string;
  balance: number;
  country: string;
}

const Container = styled.div`
  display: flex;
  padding: 20px 10px;
  color: black;
  &:hover {
    cursor: pointer;
    background-color: ${colors.grey[100]};
  }
`;

export const UserItem: FC<Props> = ({ id, username, balance, country }) => {
  return (
    <Link to={`/users/${id}`}>
      <Container>
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
      </Container>
    </Link>
  );
};
