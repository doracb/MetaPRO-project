import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import Link from "next/link";

export default function AppBarHeader() {
  return (
    <AppBar position="static" color="#CBC3E3">
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
          <Button style={{ color: "black" }}>Acasă</Button>
          <Button style={{ color: "black" }}>Cum funcționează?</Button>
          <Button style={{ color: "black" }}>Ce îți oferim?</Button>
          <Link href="/login" passHref>
            <Button style={{ color: "black" }}>Login</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
