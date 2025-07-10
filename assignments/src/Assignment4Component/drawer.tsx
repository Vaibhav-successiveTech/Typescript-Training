"use client"; // This is mandatory in app/ directory components

import * as React from "react";
import { useRouter } from "next/navigation"; // ✅ CORRECT import for app/ directory

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import QuizIcon from "@mui/icons-material/Quiz";

export default function AnchorTemporaryDrawer() {
    const [state, setState] = React.useState({ left: false });
    const router = useRouter(); // ✅ useRouter from next/navigation

    const toggleDrawer = (anchor: any, open: any) => (event: any) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        )
            return;
        setState({ ...state, [anchor]: open });
    };

    const questions = Array.from({ length: 14 }, (_, i) => `Question${i + 1}`);

    const list = (anchor: any) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {questions.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            onClick={() => router.push(`/Assignment4/Question${index + 1}`)}
                        >
                            <ListItemIcon>
                                <QuizIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <React.Fragment key="left">
                <Button
                    variant="contained"
                    onClick={toggleDrawer("left", true)}
                    sx={{
                        backgroundColor: "#E65182",
                        color: "white",
                        "&:hover": {
                        },
                    }}
                >
                    Open Questions
                </Button>
                <Drawer
                    anchor="left"
                    open={state.left}
                    onClose={toggleDrawer("left", false)}
                >
                    {list("left")}
                </Drawer>
            </React.Fragment>
        </div>
    );
}