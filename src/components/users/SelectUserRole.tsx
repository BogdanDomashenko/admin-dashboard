import { FC } from "react";
import { SelectInput, SelectInputProps } from "react-admin";

export const SelectUserRole: FC<SelectInputProps> = (props) => (
  <SelectInput
    source="role"
    choices={[
      { id: "user", name: "User" },
      { id: "admin", name: "Admin" },
    ]}
    {...props}
  />
);
