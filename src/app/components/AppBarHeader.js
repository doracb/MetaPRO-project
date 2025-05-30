"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AppBarHeader() {
  const [category, setCategory] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    if (e.key === "Enter" && category) {
      router.push(`/search?categorie=${encodeURIComponent(category)}`);
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#f9f7fb",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
          <a>
            <img
              src="/images/logo-zeventa.png"
              alt="Zeventa Logo"
              style={{ height: 90, borderRadius: 8 }}
            />
          </a>

          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            onKeyDown={handleSearch}
            displayEmpty
            renderValue={(selected) =>
              selected ? (
                selected
              ) : (
                <span style={{ color: "#aaa" }}>Caută servicii...</span>
              )
            }
            sx={{
              ml: 2,
              mt: { xs: 2, sm: 0 },
              backgroundColor: "white",
              borderRadius: 1,
              width: 220,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#7c469f",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#5c2f82",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#5c2f82",
              },
              "& .MuiSelect-select": {
                padding: "10px 14px",
              },
            }}
            inputProps={{
              sx: {
                "&:focus": {
                  borderColor: "#5c2f82",
                },
              },
            }}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 300,
                  overflowY: "auto",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
                },
              },
              disableScrollLock: true,
            }}
          >
            <MenuItem value="Foto / Video">Foto / Video</MenuItem>
            <MenuItem value="Muzică / DJ">Muzică / DJ</MenuItem>
            <MenuItem value="Decoruri / Aranjamente">
              Decoruri / Aranjamente
            </MenuItem>
            <MenuItem value="Catering">Catering</MenuItem>
            <MenuItem value="Altele">Altele</MenuItem>
          </Select>
        </Box>

        <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
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
