import { MenuItem, styled, MenuItemProps } from "@mui/material";

export const GoodMenuItem = styled(MenuItem)<MenuItemProps>(() => ({
  mt: "0.5vh",
  display: "flex",
  justifyContent: "right",
}));
