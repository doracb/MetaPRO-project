"use client";

import { useState } from "react";

export default function LoginPage() {
  const [role, setRole] = useState("client");

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d5cce4",
        padding: "1rem",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2.5rem",
          borderRadius: "12px",
          boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "420px",
          textAlign: "center",
        }}
      >
        <h1
          style={{ marginBottom: "1.5rem", color: "#7c469f", fontSize: "2rem" }}
        >
          Autentificare
        </h1>

        <form>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          >
            <option value="client">Client</option>
            <option value="furnizor">Furnizor</option>
          </select>

          <input
            type="email"
            placeholder="Email"
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />

          <input
            type="password"
            placeholder="Parolă"
            required
            style={{
              width: "100%",
              padding: "0.75rem",
              marginBottom: "1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.75rem",
              backgroundColor: "#7c469f",
              color: "white",
              fontSize: "1rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            Autentifică-te
          </button>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.95rem",
              color: "#7c469f",
            }}
          >
            Nu ai cont?{" "}
            <a
              href="/register"
              style={{
                color: "#7c469f",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Creează unul
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}
