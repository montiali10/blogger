import Navbar from "@/components/navbar";

const HomeLayout = (
    {
        children
    }:{
        children: React.ReactNode
    }
) => {
    return ( 
        <div>
            <Navbar />
            <div className="w-full h-screen px-10 pt-14">
                {children}
            </div>         
        </div>
    );
}
 
export default HomeLayout;