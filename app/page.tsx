import dynamic from "next/dynamic";

const Main = dynamic(() => import("./components/main"), {
  ssr: false, // Disable SSR
});

const Home= ()=> {
  const now = new Date()
  return (
    <main>
      <Main />
    </main>
  )
}

export default Home