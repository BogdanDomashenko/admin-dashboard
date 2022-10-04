import styled from "@emotion/styled";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";
import { Title } from "react-admin";

const SettingGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  @media (max-width: 767.98px) {
    width: 100%;
    &:not(:first-of-type) {
      margin-top: 40px;
    }
  }
`;

const Input = styled(TextField)`
  width: 250px;
`;

const SaveButton = styled(Button)`
  width: 100px;
  margin-top: 40px;
`;

export const Settings: FC = () => (
  <>
    <Grid container marginTop="20px">
      <Title title="Settings" />
      <SettingGroup>
        <Typography variant="h5">Database</Typography>
        <Input label="Host" defaultValue="localhost" />
        <Input type="number" label="Port" defaultValue="5224" />
        <Input label="Database" defaultValue="database" />
        <Input label="User" defaultValue="root" />
        <Input type="password" label="Password" defaultValue="admin" />
      </SettingGroup>
      <SettingGroup>
        <Typography variant="h5">General</Typography>
        <Input label="Site name" defaultValue="Admin dashboard" />
      </SettingGroup>
    </Grid>
    <SaveButton variant="contained">Save</SaveButton>
  </>
);
