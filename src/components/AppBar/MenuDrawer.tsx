import { Drawer, List, ListItem, Toolbar } from "@mui/material";
import { Link } from "react-router";

const drawerWidth = 240;

export const routes = [
  { path: "/todo", text: "לעשות" },
  { path: "/shopping", text: "לקנות" },
  { path: "/muniStatus", text: "כסף" },
];

export function MenuDrawer({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        padding: "0.25rem",
        [`& .MuiDrawer-paper`]: { width: drawerWidth },
      }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Toolbar />

      <List>
        {routes.map((route) => (
          <ListItem key={route.path}>
            <Link
              style={{ color: "black", textDecoration: "none", width: "100%" }}
              to={route.path}
              onClick={() => setOpen(false)}
            >
              {route.text}
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
