import { Drawer, Toolbar, Typography } from "@mui/material";

const drawerWidth = 240;

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
        [`& .MuiDrawer-paper`]: { width: drawerWidth },
      }}
      open={open}
      anchor="right"
      onClose={() => setOpen(false)}
    >
      <Toolbar />
      <Typography variant="h5">ddd</Typography>
    </Drawer>
  );
}
