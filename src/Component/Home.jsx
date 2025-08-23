

import BrandCta from './Brand_cta';
import MediaCard from './Cards/MediaCard';
import Carousel from './Carousel';
import ContactForm from './ContactForm';
import Services from './Services';


function Home() {
  return (
    <div>
        {/* <div><Navbar/></div> */}
       <Carousel/>
       <MediaCard/>
       <Services/>
       <BrandCta/>
       <ContactForm/>
    </div>
  )
}

export default Home;