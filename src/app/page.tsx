'use client';

import React, { useState } from "react";

export default function HomePage() {
  const [theme, setTheme] = useState("light");
  const isLight = theme === "light";

  return (
    <div
      className={`min-h-screen px-6 py-12 transition-colors duration-300 ${
        isLight
          ? "bg-white text-gray-900"
          : "bg-gradient-to-b from-gray-950 to-gray-900 text-white"
      }`}
    >
      {/* Theme Toggle */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setTheme(isLight ? "dark" : "light")}
          className={`px-4 py-2 rounded-md shadow-sm ${
            isLight
              ? "bg-gray-200 text-gray-900 hover:bg-gray-300"
              : "bg-white text-gray-900 hover:bg-gray-100"
          }`}
        >
          {isLight ? "Dark Mode" : "Light Mode"}
        </button>
      </div>

      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The Quantum-Ready Payment Infrastructure
        </h1>
        <p
          className={`text-lg mb-8 ${
            isLight ? "text-gray-600" : "text-gray-400"
          }`}
        >
          VETA is a next-generation P2P payment platform powered by Balanced
          UTxO, Quantum cryptography, and hybrid Quantum-AI infrastructure.
        </p>
        <a
          href="downloads/VETA_Whitepaper_EN.pdf"
          className={`inline-block text-lg px-8 py-4 rounded-lg transition ${
            isLight
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Download Whitepaper
        </a>
      </section>

      {/* Features Section */}
      <section className="mt-24 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          {
            icon: "🌐",
            title: "Distributed Ledger",
            desc: "Non-blockchain based Balance UTxO model enables parallelism, statefulness, and scalability.",
            color: "text-blue-400",
          },
          {
            icon: "⚡",
            title: "Quantum & AI Powered",
            desc: "Integrated QAOA optimization, zkSNARK acceleration, and QML-based fraud detection engine.",
            color: "text-yellow-400",
          },
          {
            icon: "🛡️",
            title: "Post-Quantum Secure",
            desc: "Hybrid signature wallet infrastructure (ECDSA + PQC) with zk-proof privacy and quantum-resilient cryptography.",
            color: "text-green-400",
          },
        ].map((f, i) => (
          <div
            key={i}
            className={`p-6 rounded-xl transition ${
              isLight
                ? "bg-gray-100 text-gray-900"
                : "bg-gray-800 text-white"
            }`}
          >
            <div className={`${f.color} w-10 h-10 mb-4`}>{f.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className={isLight ? "text-gray-700" : "text-gray-400"}>
              {f.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Join the Quantum Web3 Movement
        </h2>
        <p
          className={`mb-6 ${isLight ? "text-gray-700" : "text-gray-400"}`}
        >
          Developers, investors, and innovators — shape the future of trustless
          payment.
        </p>
        <a
          href="https://github.com/veta-foundation/veta"
          className={`inline-block text-lg px-8 py-4 rounded-lg transition ${
            isLight
              ? "bg-gray-900 text-white hover:bg-gray-800"
              : "bg-white text-gray-900 hover:bg-gray-200"
          }`}
        >
          Get Involved
        </a>
      </section>
    </div>
  );
}

