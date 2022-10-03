import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, ListGuesser, EditGuesser } from "react-admin";
import { Dashboard } from "./components/dashboard/Dashboard";
import { ProductList } from "./components/products/ProductList";
import { UserCreate } from "./components/users/UserCreate";
import { UserEdit } from "./components/users/UserEdit";
import { UserList } from "./components/users/UserList";

const dataProvider = jsonServerProvider("http://localhost:3000");

const App = () => {
  return (
    <Admin dataProvider={dataProvider} dashboard={Dashboard}>
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
      <Resource name="products" list={ProductList} />
    </Admin>
  );
};

export default App;
