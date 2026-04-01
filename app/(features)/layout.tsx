import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Featureslayout({ children }: {children: React.ReactNode}){
    return(
    <div className="min-h-screen flex flex-col">
        <Header/>
        <main className="flex-grow">{children}</main>
        <Footer/>
    </div>
    );
}