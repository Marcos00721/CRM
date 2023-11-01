import { Drawer } from "@mui/material";
import React from "react";

const SideDrawer = ({ open, setOpen, anchor, children, ...other }) => {
  return (
    <Drawer
      anchor={anchor || "right"}
      open={open}
      onClose={() => setOpen(false)}
      {...other}
    >
      {children}
    </Drawer>
  );
};

export default SideDrawer;
