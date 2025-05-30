import { Grid, Box, Typography, Paper } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import ChecklistIcon from "@mui/icons-material/Checklist";
import StarIcon from "@mui/icons-material/Star";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const offers = [
  {
    title: "Totul într-un singur loc",
    description:
      "Conectează rapid furnizori de locații, foto-video, decor, catering, muzică și altele – fără haos logistic.",
    icon: <PlaceIcon sx={{ fontSize: 60, color: "#7c469f" }} />,
  },
  {
    title: "Planificare ghidată",
    description:
      "Filtre inteligente și sugestii personalizate pe baza bugetului, locației și tipului de eveniment.",
    icon: <ChecklistIcon sx={{ fontSize: 60, color: "#7c469f" }} />,
  },
  {
    title: "Status clar al evenimentului",
    description:
      "Vei ști în orice moment în ce stadiu te afli – fără surprize sau întârzieri.",
    icon: <StarIcon sx={{ fontSize: 60, color: "#7c469f" }} />,
  },
  {
    title: "Recenzii și transparență",
    description:
      "Analizează experiențele altor clienți și ia decizii informate cu ajutorul recenziilor verificate.",
    icon: <PeopleAltIcon sx={{ fontSize: 60, color: "#7c469f" }} />,
  },
  {
    title: "Consultanță la cerere",
    description:
      "Primești sfaturi utile de la specialiști pentru a lua cele mai bune decizii.",
    icon: <SupportAgentIcon sx={{ fontSize: 60, color: "#7c469f" }} />,
  },
];

export default function WhatWeOffer() {
  return (
    <Box
      id="ce-oferim"
      sx={{
        padding: "4rem 2rem",
        textAlign: "center",
        backgroundColor: "#fefafe",
        borderRadius: "24px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "black",
          fontWeight: 700,
          letterSpacing: 2,
          mb: 5,
          fontFamily: "var(--font-playfair)",
        }}
      >
        Ce îți oferim?
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {offers.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Paper
              elevation={3}
              sx={{
                padding: 4,
                borderRadius: "16px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box mb={2}>{item.icon}</Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  fontFamily: "var(--font-playfair)",
                }}
              >
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "black" }}>
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
