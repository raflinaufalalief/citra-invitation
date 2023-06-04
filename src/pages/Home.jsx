import Fitur from "../component/Fitur"
import Hero from "../component/Hero"
import Invitation from "../component/Invitation"
import KatalogDetail from "../component/KatalogDetail"
import PaketDetail from "../component/PriceList"
import Testimoni from "../component/Testimoni"
import Faq from "../component/Faq"
import Navbar from "../component/Navbar"

const Home = () => {
  return (
    <div className="notSupport:hidden">
      <Navbar />
      <Hero />
      <Invitation />
      <KatalogDetail />
      <PaketDetail />
      <Fitur />
      <Testimoni />
      <Faq />
    </div>
  )
}

export default Home
