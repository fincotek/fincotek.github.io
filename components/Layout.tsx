import Navbar, { drawerWidth } from "./Navbar"
import Footer from "./Footer"
import { ReactNode } from "react"
import { Container } from "@mui/material"

export default function Layout({ children }: {
  children: ReactNode
}) {
  return (
    <>
      <Navbar />
      <main>
        <Container sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          paddingTop: '64px'
        }}>
          {children}
        </Container>
      </main>
      <Footer />
    </>
  )
}