import HowItWorks from "@/app/components/HowItWorks";
import AppBarHeader from "@/app/components/AppBarHeader";

export default function HomePage() {
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <AppBarHeader />
      </div>
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
            marginTop: 32,
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
