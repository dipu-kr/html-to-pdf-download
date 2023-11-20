import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Instructions from "./components/Instructions";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-24 py-12">
          <Instructions />
          <Form />
        </div>
      </div>
      <Footer />
    </div>
  );
}
