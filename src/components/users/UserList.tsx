import { Datagrid, EditButton, List, TextField } from "react-admin";
import { SelectUserRole } from "./SelectUserRole";

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="username" />
      <TextField source="email" />
      <TextField source="balance" />
      <TextField source="country" />
      <TextField source="city" />
      <EditButton />
    </Datagrid>
  </List>
);
