import { FC } from "react";
import { Menu } from "react-admin";

import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";

export const NavigationBar: FC = () => {
  return (
    <Menu>
      <Menu.DashboardItem />
      <Menu.Item to="/users" primaryText="MyUsers" leftIcon={<PeopleIcon />} />
      <Menu.Item
        to="/products"
        primaryText="Products"
        leftIcon={<InventoryIcon />}
      />
      <Menu.Item
        to="/orders"
        primaryText="Orders"
        leftIcon={<ShoppingCartIcon />}
      />
      <Menu.Item
        to="/settings"
        primaryText="Settings"
        leftIcon={<SettingsIcon />}
      />
    </Menu>
  );
};
