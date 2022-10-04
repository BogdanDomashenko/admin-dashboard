import jsonServerProvider from "ra-data-json-server";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  CustomRoutes,
} from "react-admin";
import { Route } from "react-router-dom";
import { authProvider } from "./authProvider";
import { Dashboard } from "./components/dashboard/Dashboard";
import { MyLayout } from "./components/layout/MyLayout";
import { OrderEdit } from "./components/orders/OrderEdit";
import { OrderList } from "./components/orders/OrderList";
import { ProductCreate } from "./components/products/ProductCreate";
import { ProductEdit } from "./components/products/ProductEdit";
import { ProductList } from "./components/products/ProductList";
import { Settings } from "./components/settings/Settings";
import { UserCreate } from "./components/users/UserCreate";
import { UserEdit } from "./components/users/UserEdit";
import { UserList } from "./components/users/UserList";

const dataProvider = jsonServerProvider(
  "https://my-json-server.typicode.com/BogdanDomashenko/admin-dashboard"
);

const App = () => {
  return (
    <Admin
      layout={MyLayout}
      dataProvider={dataProvider}
      dashboard={Dashboard}
      authProvider={authProvider}
      requireAuth
    >
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
      <Resource
        name="products"
        list={ProductList}
        edit={ProductEdit}
        create={ProductCreate}
      />
      <Resource name="orders" list={OrderList} edit={OrderEdit} />
      <CustomRoutes>
        <Route path="/settings" element={<Settings />} />
      </CustomRoutes>
    </Admin>
  );
};

export default App;
