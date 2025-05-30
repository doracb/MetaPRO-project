import HowItWorks from "@/app/components/HowItWorks";
import AppBarHeader from "@/app/components/AppBarHeader";
import WhatWeOffer from "@/app/components/WhatWeOffer";

export default function HomePage() {
  return (
    <>
      <div style={{ marginBottom: "120px", color: "#7c469f" }}>
        <AppBarHeader />
      </div>
      <h1
        id="home"
        style={{
          fontSize: 40,
          marginBottom: 32,
          marginTop: 64,
          textAlign: "center",
          fontFamily: "var(--font-playfair)",
          color: "#000000",
          scrollMarginTop: "100px",
        }}
      >
        ━━━━━━━━ Planifică evenimentul perfect cu Zeventa ━━━━━━━━
      </h1>
      {/* Hero image with overlay and centered card */}
      <div
        style={{
          backgroundImage: "url('/images/flowers.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "550px",
          width: "100%",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            padding: "2rem",
            borderRadius: "12px",
            maxWidth: "800px",
            textAlign: "center",
            margin: "0 1rem",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          }}
        >
          <p
            style={{
              fontSize: "1.5rem",
              lineHeight: "1.6",
              color: "#333",
              fontWeight: 500,
              fontFamily: "sans-serif",
            }}
          >
            Zeventa este o aplicație ce ușurează planificarea evenimentului tău.
            Găsește furnizorii potriviți pentru nuntă, botez sau orice altă
            petrecere. Compară oferte, vezi recenzii și rezervă totul în doar
            câțiva pași!
          </p>
        </div>
      </div>

      <main
        style={{
          padding: 5,
          fontFamily: "sans-serif",
          maxWidth: 800,
          margin: "0 auto",
        }}
      >
        <section id="cum-functioneaza" style={{ scrollMarginTop: "100px" }}>
          <HowItWorks />
        </section>

        <section
          id="ce-oferim"
          style={{ marginTop: 64, scrollMarginTop: "100px" }}
        >
          <WhatWeOffer />
        </section>
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
