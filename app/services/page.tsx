import { Footer, Navbar } from "@/components/Navbar";
import Services from "@/components/Services";



export default function ServicesPage() {
    return (
        <div className="pt-10">
            <Navbar/>
            <Services />
            <Footer />
        </div>        
    )
}