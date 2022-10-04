import { FC } from "react";
import { Edit, SelectInput, SimpleForm, TextInput } from "react-admin";

export const OrderEdit: FC = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled source="id" />
      <SelectInput
        source="status"
        choices={[
          { id: "processing", name: "Processing" },
          { id: "completed", name: "Completed" },
          { id: "cancelled", name: "Cancelled" },
        ]}
      />
    </SimpleForm>
  </Edit>
);
