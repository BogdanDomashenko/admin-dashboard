import { Create, SimpleForm, TextInput } from "react-admin";
import { SelectUserRole } from "./SelectUserRole";

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="id" required />
      <TextInput source="username" required />
      <SelectUserRole required />
      <TextInput source="email" required />
      <TextInput source="balance" required />
      <TextInput source="country" required />
      <TextInput source="city" required />
    </SimpleForm>
  </Create>
);
