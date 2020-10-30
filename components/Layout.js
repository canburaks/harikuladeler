import Footer from "./Footer";
import Navbar from "./Navbar"

export default function Layout({ children, categories }) {
    return (
        <div>
                {children}
            <Footer />
        </div>
    )
  }