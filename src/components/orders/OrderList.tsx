import { FC } from "react";
import {
  ArrayField,
  Datagrid,
  DateField,
  List,
  NumberField,
  ReferenceArrayField,
  ReferenceManyField,
  TextField,
  UrlField,
} from "react-admin";

export const OrderList: FC = () => {
  return (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <ReferenceManyField label="Products" reference="products" target="id">
          <Datagrid>
            <TextField source="name" />
            <TextField source="price" textAlign="right" />
          </Datagrid>
        </ReferenceManyField>
        <ArrayField source="products">
          <Datagrid>
            <TextField source="memory" />
            <TextField source="count" />
          </Datagrid>
        </ArrayField>
      </Datagrid>
    </List>
  );
};
