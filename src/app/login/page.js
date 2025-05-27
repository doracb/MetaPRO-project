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
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h1
          style={{ marginBottom: "1.5rem", fontSize: "2rem", color: "#6a1b9a" }}
        >
          Autentificare
        </h1>

        <form>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={{
              display: "block",
              width: "100%",
              padding: "0.75rem",
              fontSize: "1rem",
              marginBottom: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          >
            <option value="client">Client</option>
            <option value="furnizor">Furnizor</option>
          </select>

          <input
            type="email"
            placeholder="Email"
            style={{
              display: "block",
              width: "100%",
              padding: "0.75rem",
              fontSize: "1rem",
              marginBottom: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="password"
            placeholder="Parolă"
            style={{
              display: "block",
              width: "100%",
              padding: "0.75rem",
              fontSize: "1rem",
              marginBottom: "1rem",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              backgroundColor: "#7c469f",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              width: "100%",
              marginTop: "0.5rem",
            }}
          >
            Autentifică-te
          </button>

          <p
            style={{
              marginTop: "1.5rem",
              fontSize: "0.95rem",
              color: "#6a1b9a",
            }}
          >
            Nu ai cont?{" "}
            <a
              href="/register"
              style={{ color: "#6a1b9a", textDecoration: "underline" }}
            >
              Creează unul
            </a>
          </p>
        </form>
      </div>
    </main>
  );
}
