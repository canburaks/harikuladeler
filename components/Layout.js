import Footer from "./Footer";
import Navbar from "./Navbar"

export default function Layout({ children, categories }) {
    return (
        <div>
            <Navbar categories={categories} />
                {children}
            <Footer />
        </div>
    )
  }