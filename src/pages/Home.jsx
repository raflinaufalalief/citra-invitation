import Fitur from "../component/Fitur"
import Hero from "../component/Hero"
import Invitation from "../component/Invitation"
import KatalogDetail from "../component/KatalogDetail"
import PaketDetail from "../component/PriceList"
import Testimoni from "../component/Testimoni"
import Faq from "../component/Faq"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import CopyRight from "../component/CopyRight"
import Payment from "../component/Payment"

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
      <Footer />
      <CopyRight />
    </div>
  )
}

export default Home
