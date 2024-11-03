import React from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SidebarComponent = () => {
    return (
        <Sidebar>
            <div style={{ padding: "20px", fontWeight: "bold", fontSize: "1.2em" }}>
                Profile
            </div>
            <Menu
                menuItemStyles={{
                    button: {
                        [`&.active`]: {
                            backgroundColor: "#1c41c7",
                            color: "#ffc926",
                        },
                    },
                }}
            >
                <MenuItem component={<Link to="/calendar" />}>Calendar</MenuItem>
                <MenuItem component={<Link to="/todo" />}>Tasks</MenuItem>
                <MenuItem component={<Link to="/feedback" />}>Feedback</MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default SidebarComponent;

