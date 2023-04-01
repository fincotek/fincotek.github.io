import Navbar, { drawerWidth } from "./Navbar";
import Footer from "./Footer";
import { ReactNode } from "react";
import { Box, Container } from "@mui/material";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            paddingTop: { xs: "56px", md: "64px" },
            height: "100vh",
          }}
        >
          <Container>{children}</Container>
          <Box
            sx={{
              mt: "auto",
            }}
          >
            <Footer />
          </Box>
        </Box>
      </main>
    </>
  );
}
