import Header from "../../components/Header";
import Footer from "../../components/Footer";

function LayoutDefault({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
export default LayoutDefault;