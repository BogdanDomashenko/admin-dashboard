import { Edit, SimpleForm, TextInput } from "react-admin";
import { SelectUserRole } from "./SelectUserRole";

export const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="username" />
      <SelectUserRole />
      <TextInput source="email" />
      <TextInput source="balance" />
      <TextInput source="country" />
      <TextInput source="city" />
    </SimpleForm>
  </Edit>
);
