import HowItWorks from "@/app/components/HowItWorks";
import AppBarHeader from "@/app/components/AppBarHeader";

export default function HomePage() {
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <AppBarHeader />
      </div>
      <h1
        id="home"
        style={{
          fontSize: 40,
          marginBottom: 32,
          marginTop: 32,
          textAlign: "center",
          fontFamily: "var(--font-playfair)",
          color: "#000000",
        }}
      >
        ━━━━━━━━ Planifică evenimentul perfect cu Zeventa ━━━━━━━━
      </h1>
      {/* Hero image section */}
      <div
        style={{
          backgroundImage: "url('/images/flowers.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "550px",
          width: "100%",
        }}
      />
      <main
        style={{
          padding: 5,
          fontFamily: "sans-serif",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: 20,
            marginTop: 32,
            marginBottom: 32,
            lineHeight: "1.6",
            color: "#000000",
          }}
        >
          Zeventa este o aplicație ce ușurează planificarea evenimentului tau.
          Găsește furnizorii potriviți pentru nunta, botezul sau petrecerea ta.
          Compară oferte, vezi recenzii și rezervă totul în doar câțiva pași!
        </p>

        <HowItWorks />
      </main>
      <footer
        style={{
          marginTop: 64,
          fontSize: 14,
          color: "#777",
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        © {new Date().getFullYear()} Zeventa. Toate drepturile rezervate.
      </footer>
    </>
  );
}
