import {
  ArrayInput,
  Create,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <NumberInput disabled source="id" />
      <TextInput source="name" />
      <NumberInput source="price" />
      <ArrayInput source="memory">
        <SimpleFormIterator inline>
          <TextInput source="name" />
          <NumberInput source="price" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
