"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Button = ({ children, onClick }: any) => (
  <button
    onClick={onClick}
    className="bg-pink-200 hover:bg-pink-300 px-4 py-2 rounded-full shadow text-sm"
  >
    {children}
  </button>
);

const Card = ({ children }: any) => (
  <div className="bg-white shadow-xl rounded-2xl p-6 max-w-xl mx-auto">
    {children}
  </div>
);

const CardContent = ({ children }: any) => <div className="space-y-3">{children}</div>;

export default function PurrfectMatchApp() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage navigate={setPage} />;
      case "browse":
        return <BrowsePage navigate={setPage} />;
      case "profile":
        return <CreateProfilePage navigate={setPage} />;
      case "messages":
        return <MeowssagesPage navigate={setPage} />;
      case "quiz":
        return <CompatibilityQuiz navigate={setPage} />;
      case "verify":
        return <PawfileVerification navigate={setPage} />;
      case "gallery":
        return <CameowraMoments navigate={setPage} />;
      default:
        return <HomePage navigate={setPage} />;
    }
  };

  return (
    <motion.div
      className="p-6 min-h-screen bg-gradient-to-br from-pink-100 to-purple-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center mb-6">
        <img src="/logo.png" alt="Purrfect Match Logo" className="w-32 mx-auto" />
        <h1 className="text-3xl font-bold mt-2 text-pink-700">Purrfect Match</h1>
      </div>
      <nav className="flex flex-wrap justify-center gap-3 mb-6">
        <Button onClick={() => setPage("home")}>Home</Button>
        <Button onClick={() => setPage("browse")}>Browse</Button>
        <Button onClick={() => setPage("profile")}>Profile</Button>
        <Button onClick={() => setPage("messages")}>Meowssages</Button>
        <Button onClick={() => setPage("quiz")}>Quiz</Button>
        <Button onClick={() => setPage("verify")}>Verify</Button>
        <Button onClick={() => setPage("gallery")}>Gallery</Button>
      </nav>
      {renderPage()}
    </motion.div>
  );
}

// -- Pages (shortened for readability) --
function HomePage({ navigate }: any) {
  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-semibold">🐾 Welcome to Purrfect Match</h2>
        <p>Find the purr-sonality your kitty has been dreaming of.</p>
        <Button onClick={() => navigate("browse")}>Browse Mates</Button>
      </CardContent>
    </Card>
  );
}

function BrowsePage({ navigate }: any) {
  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-semibold">😻 Meet Potential Mates</h2>
        <ul>
          <li>Whiskers, 3 y/o, Birdwatcher</li>
          <li>Mittens, 5 y/o, Laser Hunter</li>
          <li>Fluffy, 2 y/o, Napper</li>
        </ul>
        <Button onClick={() => navigate("profile")}>Create Profile</Button>
      </CardContent>
    </Card>
  );
}

// -- Additional pages like CreateProfilePage, MeowssagesPage, CompatibilityQuiz,
// CameowraMoments, PawfileVerification would follow here (trimmed for brevity).
