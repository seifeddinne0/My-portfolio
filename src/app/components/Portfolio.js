"use client"

import Portfoliocard from "./Portfoliocard";
import Horizontaline from "./Horizontaline";

const portfolioItems = [
  {
    title: "AgendaPro",
    tagline: "Event planning and scheduling for busy teams.",
    bullets: [
      "Built a complete event-management web application from the ground up",
      "Secure authentication with NextAuth",
      "Built to reduce friction in day-to-day planning",
    ],
    stack: ["Next.js", "React", "Tailwind", "JavaScript"],
    previewImage: "/agenda/pro1.png",
    demoLink: "/",
    githubLink: "https://github.com/seifeddinne0/AgendaPro",
    altName: "AgendaPro project preview",
  },
  {
    title: "AI Flashcards",
    tagline: "Study support with AI-generated flashcards.",
    bullets: [
      "Developed a SaaS-style educational flashcard application",
      "Integrated artificial intelligence for automatic generation",
      "Multi-language support and an admin interface for category management",
    ],
    stack: ["Next.js", "React", "JavaScript", "AI"],
    previewImage: "/flashcards/flashcard1.png",
    demoLink: "/",
    githubLink: "https://github.com/seifeddinne0/Flashcards-web-app",
    altName: "AI Flashcards project preview",
  },
  {
    title: "QR Generator",
    tagline: "Quick QR code creation with a simple workflow.",
    bullets: [
      "Generate QR codes for multiple input types",
      "Advanced customization via Canvas API (logos, colors, visual styles)",
      "Useful for quick sharing and handoff tasks",
    ],
    stack: ["Next.js", "React", "Tailwind", "JavaScript"],
    previewImage: "/qrcode/qr1.png",
    demoLink: "/",
    githubLink: "https://github.com/seifeddinne0/QR-generator",
    altName: "QR Generator project preview",
  },
];

function Portfolio() {
  const isOddItemCount = portfolioItems.length % 2 === 1;

  return (
    <section className="mt-5 mb-5 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" >
      <Horizontaline>
        <h1 className="mx-2 text-2xl montserrat text-center text-red-600">My Portfolio</h1>
      </Horizontaline>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:justify-items-center">
        {portfolioItems.map((item, index) => {
          const isLastOddCard = isOddItemCount && index === portfolioItems.length - 1;

          return (
            <Portfoliocard
              key={item.title}
              {...item}
              className={isLastOddCard ? "lg:col-span-2 lg:w-full lg:max-w-[38rem]" : "w-full"}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;