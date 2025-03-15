"use client"
import Header from "./components/layout/Header"
import Hero from "./components/sections/Hero"
import ProblemSolution from "./components/sections/ProblemSolution"
import Features from "./components/sections/Features"
import ForWhom from "./components/sections/ForWhom"
import HowItWorks from "./components/sections/HowItWorks"
import ApiDemo from "./components/sections/ApiDemo"
import Footer from "./components/layout/Footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <ForWhom />
        <HowItWorks />
        <ApiDemo />
      </main>
      <Footer />
    </div>
  )
}

