import {
  ArrayInput,
  Edit,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <NumberInput source="id" />
      <TextInput source="name" />
      <NumberInput source="price" />
      <ArrayInput source="memory">
        <SimpleFormIterator inline>
          <TextInput source="name" />
          <NumberInput source="price" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
