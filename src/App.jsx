import "./App.css";
import Tarjeta from "./assets/Tarjeta";
import SidebarNav from "./assets/NavBar";
import Header from "./assets/Header";
import TarjetaHorizontal from "./assets/TarjetaHorizontal";
import Grafico from "./assets/Grafico";
import XIcon from "./assets/icons/X.svg"
import TiktokIcon from "./assets/icons/tiktok.svg"
import ButterlfyIcon from "./assets/icons/butterfly.svg"
import InstagramIcon from "./assets/icons/instagram.svg"
import YoutubeIcon from "./assets/icons/youtube.svg"
import CrhomeIcon from "./assets/icons/chrome.svg"

function App() {

/*   const followersData = [
    ["Blanca", "Carlos", 254],
    ["Blanca", "Angel", 124],
    ["Carlos", "Angel", 54],
    ["Blanca", "Blanca", 3647],
    ["Carlos", "Carlos", 725],
    ["Angel", "Angel", 1973],
    ["Angel", "Blanca", 76],
  ];
 */
  return (
    <>
      <Header />
      <SidebarNav />
      <div className="flex w-full h-full bg-[#F7F7F7] mt-16">
        <main className="flex flex-col py-16 px-20 w-full gap-10 min-h-screen pl-32">
          <h1 className="text-xl font-semibold color-[#414F53] text-center">
            Intersection Accounts Followers
          </h1>
          <div className="flex gap-4 mb-12 flex-wrap justify-center">
            <Tarjeta
              texto="Query over 1b global members with granular interests to uncover hidden clusters (supports X member uploads)."
              textoBoton="Use X"
              onClick={() => alert("Card clicked!")}
            />
            <Tarjeta
              imagen="https://cdn.pixabay.com/photo/2021/11/01/15/20/meta-logo-6760788_960_720.png"
              texto="Query over 2.7b global members of Facebook, Instagram, Whatsapp to see mindset (supports first-party identifiers)."
              textoBoton="Use Meta"
              onClick={() => alert("Card clicked!")}
            />

            <Tarjeta
              imagen="https://img.icons8.com/ios7/600/228BE6/linkedin.png"
              texto="Query over 1b global member profiles on the largest professional network (supports first-party identifiers)."
              textoBoton="Use LinkedIn"
              onClick={() => alert("Card clicked!")}
            />
            <Tarjeta
              imagen="https://img.icons8.com/forma-light/600/FA5252/tiktok.png"
              texto="Query over ?b global member profiles to see an overview of their characteristics."
              textoBoton="Use TikTok"
              onClick={() => alert("Card clicked!")}
            />
            <Tarjeta
              imagen="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/all-3/shopping-cart-9xhllmo2cb79djc9j7b5kb.png/shopping-cart-pe974q2wd8bzu5cueg3qr.png?_a=DAJFJtWIZAAC"
              texto="Provide identifiers for your actual customers and get an overlay of social-enriched audience details."
              textoBoton="Use Shopper"
              onClick={() => alert("Card clicked!")}
              labelNew="New"
            />  
            </div>
          <h1 className="text-xl font-semibold color-[#414F53] text-center ">
            Choose Another Audience Focus
          </h1>
          <div className="flex gap-4  flex-wrap justify-start">
          <TarjetaHorizontal
            iconos={[XIcon, TiktokIcon, ButterlfyIcon]}
            titulo="Engagement"
            descripcion="Measure the volume of traffic from active authors on keywords, hashtags, URLs, and mentions."
            textoBoton="Go"
          />
          <TarjetaHorizontal
            iconos={[XIcon, TiktokIcon, InstagramIcon,ButterlfyIcon, CrhomeIcon, YoutubeIcon]}
            titulo="Popularity"
            descripcion="Juxtapose any social properties to measure their relative demand - assets, influencers, brands, and more."
            textoBoton="Go"
          />
              <TarjetaHorizontal
            iconos={[XIcon]}
            titulo="Growth"
            descripcion="Observe the evolving follower count changes of specific accounts that you want to group together."
            textoBoton="Go"
          />
              <TarjetaHorizontal
            iconos={[ButterlfyIcon]}
            titulo="Trends"
            descripcion="Track how interests and profile traits are changing for certain countries and mindsets over time."
            textoBoton="Go"
          />
              <TarjetaHorizontal
            iconos={[XIcon]}
            titulo="List Building"
            descripcion="Curate a filtered community to engage - even prune your own followers."
            textoBoton="Go"
          />
              <TarjetaHorizontal
            iconos={[XIcon, ButterlfyIcon]}
            titulo="Personas"
            descripcion="Curate a filtered community to engage - even prune your own followers."
            textoBoton="Go"
          />
          </div> 
        </main>
      </div>
    </>
  );
}

export default App;
