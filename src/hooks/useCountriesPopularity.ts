import { useEffect, useState } from "react";
import { NumberFieldProps, useGetList } from "react-admin";
import { User } from "../shared/types/user.types";

export interface CountryPopularity {
  name: string;
  count: string;
}

export const useCountriesPopularity = (): CountryPopularity[] | undefined => {
  const { data } = useGetList("users");
  const [countries, setCountries] = useState<CountryPopularity[]>();

  useEffect(() => {
    let count: any = {};

    if (data?.length) {
      for (let item of data) {
        if (count[item.country] === undefined) {
          count[item.country] = 1;
        } else {
          count[item.country]++;
        }
      }
    }

    const keys = Object.keys(count);
    const values = Object.values(count);

    const result = keys.map((item, index) => ({
      name: item,
      count: values[index],
    })) as CountryPopularity[];

    setCountries(result);
  }, [data]);

  return countries;
};
