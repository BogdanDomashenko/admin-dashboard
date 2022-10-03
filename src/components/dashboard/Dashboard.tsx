import { FC, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Title, useGetList } from "react-admin";
import { UserCountryChart } from "./charts/users/UserCountryCahrt";
import { useCountriesPopularity } from "../../hooks/useCountriesPopularity";

export const Dashboard: FC = () => {
  const countriesPopularity = useCountriesPopularity();

  return (
    <Card>
      <Title title="Dashboard" />
      <CardContent>
        {countriesPopularity && (
          <UserCountryChart countries={countriesPopularity} />
        )}
      </CardContent>
    </Card>
  );
};
