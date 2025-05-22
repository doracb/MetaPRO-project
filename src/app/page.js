import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PushPinIcon from '@mui/icons-material/PushPin';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

export default function HomePage() {
  return (
      <>
        <header style={{ padding: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <a>
                <img src="/images/logo-zeventa.png"
                alt="Zeventa Logo"
                style={{ height: 100, borderRadius: 8}}
            />
            </a>
          <Button href="/login"
             style={{
               fontSize: 14,
               border: "1px solid #000000",
               display: "inline-block", padding: "6px 16px",
               color: '#000000',
               backgroundColor: "white",
               fontFamily: 'var(--font-playfair)',
               borderRadius: 6}}>
            Login
          </Button>
        </header>

      <main style={{ padding: 5, fontFamily: 'sans-serif', maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ fontSize: 38, marginBottom: 16, fontFamily: 'var(--font-playfair)',color: '#000000' }}>Planifică evenimentul perfect </h1>

        <p style={{ fontSize: 20, marginBottom: 32, lineHeight: '1.6',color: '#000000' }}>
          Găsește furnizorii potriviți pentru nunta, botezul sau petrecerea ta.
          Compară oferte, vezi recenzii și rezervă totul în doar câțiva pași!
        </p>

        <Button
            href="/client"
            style={{
              display: 'inline-block', padding: '12 24',
              backgroundColor: 'rgba(154,94,211,0.51)',
              color: 'white',
              borderRadius: 6,
              fontWeight: 'bold', fontFamily: 'var(--font-playfair)'
            }}
        >
            <SearchIcon style={{ fontSize: 20 }} /> Search
        </Button>

        <section style={{ marginTop: 64 }}>
          <h2 style={{ fontSize: 20, color: "black" }}>Cum funcționează?</h2>
          <ul style={{ marginTop: 16, lineHeight: '2',color: '#000000' }}>
            <li><LocationOnIcon style={{ fontSize: 20 }} /> Selectezi locația și data evenimentului</li>
            <li><PushPinIcon style={{ fontSize: 20 }} /> Alegi serviciile dorite</li>
            <li><PriceCheckIcon style={{ fontSize: 20 }} /> Confirmi direct din platformă</li>
          </ul>
        </section>

        <footer style={{ marginTop: 64, fontSize: 14, color: '#777' }}>
          © {new Date().getFullYear()} Zeventa. Toate drepturile rezervate.
        </footer>
      </main>
      </>
  );
}
