"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState("client");
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    firma: "",
    servicii: [],
    alteServicii: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (service) => {
    setForm((prev) => {
      const alreadySelected = prev.servicii.includes(service);
      return {
        ...prev,
        servicii: alreadySelected
          ? prev.servicii.filter((s) => s !== service)
          : [...prev.servicii, service],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...form, role };
    console.log("Date trimise:", data);
    router.push("/login");
  };

  const serviciiDisponibile = [
    "Foto / Video",
    "Muzică / DJ",
    "Decoruri / Aranjamente",
    "Catering",
    "Altele",
  ];

  return (
    <main style={mainStyle}>
      <div style={cardStyle}>
        <h1
          style={{
            color: "#7c469f",
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Creare cont {role === "client" ? "client" : "furnizor"}
        </h1>

        <form onSubmit={handleSubmit}>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={inputStyle}
          >
            <option value="client">Client</option>
            <option value="furnizor">Furnizor</option>
          </select>

          <input
            name="username"
            placeholder="Nume utilizator"
            required
            value={form.username}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            name="password"
            placeholder="Parolă"
            type="password"
            required
            value={form.password}
            onChange={handleChange}
            style={inputStyle}
          />

          {role === "furnizor" && (
            <>
              <input
                name="firma"
                placeholder="Nume firmă (opțional)"
                value={form.firma}
                onChange={handleChange}
                style={inputStyle}
              />

              <p
                style={{
                  fontWeight: "bold",
                  color: "#7c469f",
                  marginBottom: 8,
                }}
              >
                Servicii oferite:
              </p>
              {serviciiDisponibile.map((serviciu, i) => (
                <label
                  key={i}
                  style={{ display: "block", marginBottom: 4, color: "black" }}
                >
                  <input
                    type="checkbox"
                    checked={form.servicii.includes(serviciu)}
                    onChange={() => handleServiceChange(serviciu)}
                    style={{ marginRight: 8 }}
                  />
                  {serviciu}
                </label>
              ))}
            </>
          )}

          <button type="submit" style={buttonStyle}>
            Creează cont
          </button>
        </form>

        <p style={{ marginTop: "1rem", fontSize: "0.95rem", color: "#7c469f" }}>
          Ai deja cont?{" "}
          <a
            href="/login"
            style={{
              color: "#7c469f",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Autentifică-te
          </a>
        </p>
      </div>
    </main>
  );
}

const mainStyle = {
  minHeight: "100vh",
  backgroundColor: "#d5cce4",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem",
};

const cardStyle = {
  background: "white",
  padding: "2.5rem",
  borderRadius: "12px",
  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
  width: "100%",
  maxWidth: "500px",
};

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  marginBottom: "1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

const buttonStyle = {
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#7c469f",
  color: "white",
  fontSize: "1rem",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background 0.3s",
};
