import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import Link from "next/link";

export default function AppBarHeader() {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#f9f7fb",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        zIndex: 1100,
      }}
    >
      <Toolbar>
        <a>
          <img
            src="/images/logo-zeventa.png"
            alt="Zeventa Logo"
            style={{ height: 90, borderRadius: 8 }}
          />
        </a>
        <Typography sx={{ flexGrow: 1 }}></Typography>
        <Box>
          <Link href="/#home" passHref>
            <Button style={{ color: "black" }}>Acasă</Button>
          </Link>
          <Link href="/#cum-functioneaza" passHref>
            <Button style={{ color: "black" }}>Cum funcționează?</Button>
          </Link>
          <Link href="/#ce-oferim" passHref>
            <Button style={{ color: "black" }}>Ce îți oferim?</Button>
          </Link>
          <Link href="/login" passHref>
            <Button style={{ color: "black" }}>Login</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
