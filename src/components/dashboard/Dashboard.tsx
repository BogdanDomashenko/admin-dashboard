import { FC, useEffect } from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid, Box, Typography } from "@mui/material";
import { Title, useGetList } from "react-admin";
import { UserCountryChart } from "./charts/users/UserCountryCahrt";
import { useCountriesPopularity } from "../../hooks/useCountriesPopularity";

export const Dashboard: FC = () => {
  const countriesPopularity = useCountriesPopularity();

  return (
    <>
      <Title title="Dashboard" />
      <Grid container justifyContent="space-between" marginTop="20px">
        <Box width="49%">
          <Card>
            <CardContent>
              <Typography variant="h5">Users countries</Typography>
              {countriesPopularity && (
                <UserCountryChart countries={countriesPopularity} />
              )}
            </CardContent>
          </Card>
        </Box>
        <Box width="49%">
          <Card>
            <CardContent>
              {countriesPopularity && (
                <UserCountryChart countries={countriesPopularity} />
              )}
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </>
  );
};
