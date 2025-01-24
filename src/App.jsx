import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <>
      <div className="flex flex-col w-screen h-screen max-w-screen min-h-screen bg-cover bg-center" style={{backgroundImage: "url('/images/tulsibackground.jpg')"}}>
        <header className="text-center fixed top-0 w-full z-10">
          <Navbar />
        </header>
        <main className="flex-1 overflow-y-auto w-screen max-w-screen flex-wrap">
          <AppRoutes />
        </main>
        <footer className="text-center fixed bottom-0 w-full z-10 flex flex-row bg-gray-200 pt-5">
          <div className="flex flex-col flex-1">
            <Footer />
          </div>
          <div className="flex flex-col flex-1">
            <div id="google_translate_element"></div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
