import { ToastContainer } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";
import Page from './page'
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
// import './index.css';

export default function RootLayout({ children }) {
  return (
     <HelmetProvider>
      <div className="font-inter min-h-screen flex flex-col">
         <Helmet> 
          <title>Portfolio of Sharnjeet Singh Software Developer</title>
          <meta
            name="description"
            content="This is the portfolio of Sharnjeet Singh. I am a full stack developer and a self taught developer. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges."
          />
          {import.meta.env.VITE_GTM_ID && (
            <script>
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${import.meta.env.VITE_GTM_ID}');
              `}
            </script>
          )} 
        </Helmet>
         <ToastContainer /> 
        <main className="flex-grow relative max-w-full px-4 sm:px-6 lg:px-8 text-white"> 
           <Navbar /> 
           {children} *
            
          <ScrollToTop /> 
        </main> 
        <Page />
         <Footer /> 
      </div>
     </HelmetProvider>
  );
}
