import { FC } from "react";
import {
  ArrayField,
  Datagrid,
  List,
  NumberField,
  TextField,
} from "react-admin";

export const ProductList: FC = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="name" />
        <NumberField source="price" />
        <ArrayField source="memory">
          <Datagrid>
            <TextField source="name" />
            <NumberField source="price" />
          </Datagrid>
        </ArrayField>
      </Datagrid>
    </List>
  );
};
