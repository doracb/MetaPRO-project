import { Grid, Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
export default function HowItWorks() {
  const steps = [
    {
      title: "Înregistrare",
      description: "Creează un cont.",
      icon: <AccountCircleIcon sx={{ fontSize: 70, color: "#7c469f" }} />,
      number: 1,
    },
    {
      title: "Confirmare",
      description: "Confirmă contul prin adresa de email.",
      icon: <MarkEmailReadIcon sx={{ fontSize: 70, color: "#7c469f" }} />,
      number: 2,
    },
    {
      title: "Utilizare",
      description: "Accesează platforma.",
      icon: <AutoAwesomeIcon sx={{ fontSize: 70, color: "#7c469f" }} />,
      number: 3,
    },
  ];

  return (
    <Box
      sx={{
        padding: "4rem 2rem",
        textAlign: "center",
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
        Cum funcționează?
      </Typography>
      {/*<Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 5, color: "#7c469f" }}
      >
        Începe în doar trei pași!
      </Typography>*/}
      <Grid container spacing={3} justifyContent="center">
        {steps.map((step, idx) => (
          <Grid item xs={6} sm={3} md={4} key={idx}>
            <Box
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: "50%",
                width: 100,
                height: 100,
                mx: "auto",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: -10,
                  right: -10,
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "50%",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  px: 1.2,
                  py: 0.5,
                  fontSize: 14,
                }}
              >
                {step.number}
              </Box>
              {step.icon}
            </Box>

            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              {step.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "black", px: 2 }}>
              {step.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
