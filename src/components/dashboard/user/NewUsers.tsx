import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { FC } from "react";
import { Order } from "../../../shared/types/order.types";
import { User } from "../../../shared/types/user.types";
import { UserItem } from "./UserItem";

interface Props {
  users: User[];
}

const UsersContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  height: 400px;
  overflow-y: auto;
  margin-top: 20px;
`;

export const NewUsers: FC<Props> = ({ users }) => {
  return (
    <>
      <Typography variant="h6">New users</Typography>
      <UsersContainer>
        {users.map((user) => (
          <UserItem
            username={user.username}
            balance={user.balance}
            country={user.country}
            key={user.id}
          />
        ))}
      </UsersContainer>
    </>
  );
};
