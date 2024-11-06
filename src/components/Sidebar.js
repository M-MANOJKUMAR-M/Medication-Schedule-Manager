import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Sidebar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">Medication Manager</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Sidebar;
