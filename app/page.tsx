import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./components/hero"), {
  ssr: false, // Disable SSR
});

const Home= ()=> {
  const now = new Date()
  return (
    <main>
      <Hero />
    </main>
  )
}

export default Home