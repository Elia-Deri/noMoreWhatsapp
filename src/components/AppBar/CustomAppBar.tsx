import { useState } from "react";
import { Menu } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

import { MenuDrawer } from "./MenuDrawer";

export function CustomAppBar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <MenuDrawer open={openDrawer} setOpen={setOpenDrawer} />

      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Grid container>
            <Grid item>
              <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <Menu />
              </IconButton>
            </Grid>
          </Grid>

          <Typography variant="h5" position={"absolute"} right="50%" left="50%">
            Loopy
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
