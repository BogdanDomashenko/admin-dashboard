import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { authProvider } from "./authProvider";
import { Dashboard } from "./components/dashboard/Dashboard";
import { OrderList } from "./components/orders/OrderList";
import { ProductCreate } from "./components/products/ProductCreate";
import { ProductEdit } from "./components/products/ProductEdit";
import { ProductList } from "./components/products/ProductList";
import { UserCreate } from "./components/users/UserCreate";
import { UserEdit } from "./components/users/UserEdit";
import { UserList } from "./components/users/UserList";

const dataProvider = jsonServerProvider(
  "https://my-json-server.typicode.com/BogdanDomashenko/admin-dashboard"
);

const App = () => {
  return (
    <Admin
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
      <Resource name="orders" list={OrderList} edit={EditGuesser} />
    </Admin>
  );
};

export default App;
