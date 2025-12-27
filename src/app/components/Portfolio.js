"use client"

import Portfoliocard from "./Portfoliocard";
import Horizontaline from "./Horizontaline";

function Portfolio() {
  return (
    <section className="mt-5 mb-5 mx-4" id="Portfolio">
      <Horizontaline>
        <h1 className="mx-2 text-2xl montserrat text-center text-red-600">My Portfolio</h1>
      </Horizontaline>
      <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
        <Portfoliocard
          images={[
            "/agenda/pro1.png", "/agenda/pro2.png", "/agenda/pro3.png", "/agenda/pro4.png",
            "/agenda/pro5.png", "/agenda/pro6.png", "/agenda/pro7.png", "/agenda/pro8.png"
          ]}
          altName="AgendaPro"
          githubLink="https://github.com/seifeddinne0/AgendaPro"
        >
          <h2 className="text-xl font-bold mb-2">AgendaPro</h2>
          <p className="text-gray-700">
            A comprehensive event management and scheduling application designed for productivity and organization.
          </p>
        </Portfoliocard>

        <Portfoliocard
          images={[
            "/flashcards/flashcard1.png", "/flashcards/flashcard2.png", "/flashcards/flashcard3.png",
            "/flashcards/flashcard4.png", "/flashcards/flashcard5.png", "/flashcards/flashcard6.png",
            "/flashcards/flashcard7.png", "/flashcards/flashcard8.png", "/flashcards/flashcard9.png"
          ]}
          altName="AI Flashcards"
          githubLink="https://github.com/seifeddinne0/AI-Flashcards"
        >
          <h2 className="text-xl font-bold mb-2">AI Flashcards</h2>
          <p className="text-gray-700">
            An intelligent learning tool that helps students master subjects through AI-generated flashcards and spaced repetition.
          </p>
        </Portfoliocard>

        <Portfoliocard
          images={[
            "/qrcode/qr1.png", "/qrcode/qr2.png", "/qrcode/qr3.png", "/qrcode/qr4.png"
          ]}
          altName="QR Generator"
          githubLink="https://github.com/seifeddinne0/QR-Generator"
        >
          <h2 className="text-xl font-bold mb-2">QR Generator</h2>
          <p className="text-gray-700">
            A versatile QR code creation tool supporting various data types and customizable designs.
          </p>
        </Portfoliocard>
      </div>
    </section>
  );
}
export default Portfolio;