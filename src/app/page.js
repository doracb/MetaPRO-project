import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import HowItWorks from "@/app/components/HowItWorks";

export default function HomePage() {
  return (
    <>
      <header
        style={{
          padding: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a>
          <img
            src="/images/logo-zeventa.png"
            alt="Zeventa Logo"
            style={{ height: 100, borderRadius: 8 }}
          />
        </a>
        <Button
          href="/login"
          style={{
            fontSize: 14,
            border: "1px solid #000000",
            display: "inline-block",
            padding: "6px 16px",
            color: "#000000",
            backgroundColor: "white",
            fontFamily: "var(--font-playfair)",
            borderRadius: 6,
          }}
        >
          Intră în cont
        </Button>
      </header>

      <main
        style={{
          padding: 5,
          fontFamily: "sans-serif",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: 38,
            marginBottom: 16,
            textAlign: "center",
            fontFamily: "var(--font-playfair)",
            color: "#000000",
          }}
        >
          Planifică evenimentul perfect{" "}
        </h1>

        <p
          style={{
            fontSize: 20,
            marginBottom: 32,
            lineHeight: "1.6",
            color: "#000000",
          }}
        >
          Zeventa este o aplicație ce ușurează planificarea evenimentului tau.
          Găsește furnizorii potriviți pentru nunta, botezul sau petrecerea ta.
          Compară oferte, vezi recenzii și rezervă totul în doar câțiva pași!
        </p>

        <Button
          href="/client"
          style={{
            display: "inline-block",
            padding: "12 24",
            backgroundColor: "#7c469f",
            color: "white",
            borderRadius: 6,
            fontWeight: "bold",
            fontFamily: "var(--font-playfair)",
          }}
        >
          <SearchIcon style={{ fontSize: 20 }} /> Search
        </Button>

        <HowItWorks />

        <footer style={{ marginTop: 64, fontSize: 14, color: "#777" }}>
          © {new Date().getFullYear()} Zeventa. Toate drepturile rezervate.
        </footer>
      </main>
    </>
  );
}
