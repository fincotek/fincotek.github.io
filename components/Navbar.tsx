import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Link from "next/link";

export const drawerWidth = 240;

export default function Navbar() {
  const drawer = (
    <>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { sm: "none" } }}
        >
          Fincotek White Paper
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton component={Link} href="/">
            <ListItemText primary="Overview" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} href="/product-authenticity">
            <ListItemText primary="Product Authenticity" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} href="/crowdfunding">
            <ListItemText primary="Crowdfunding" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} href="/analytics">
            <ListItemText primary="Analytics Tracking" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} href="/conclusion">
            <ListItemText primary="Conclusion" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton component={Link} href="/tokenomics">
            <ListItemText primary="Tokenomics" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} href="/presale">
            <ListItemText primary="Presale" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component={Link} href="/roadmap">
            <ListItemText primary="Roadmap" />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerOpen = () => {
    setMobileOpen(true);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const container =
    typeof window !== "undefined" ? () => window.document.body : undefined;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Fincotek White Paper
          </Typography>
          <Box>
            <Button component="a" href="https://fincotek.com">
              App
            </Button>
            <Button component="a" href="https://twitter.com/fincotek">
              Twitter
            </Button>
            <Button component="a" href="https://github.com/fincotek">
              Github
            </Button>
          </Box>
        </Toolbar>
        <Divider />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          onClick={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          anchor="left"
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
