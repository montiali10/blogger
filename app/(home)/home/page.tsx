import BlogForm from "../_components/blogForm";
import Feed from "../_components/feed";

const HomePage = () => {
    return ( 
        <div className="md:flex align-middle justify-center gap-5 xl:px-14">
            <div className="mb-5 w-full">
                <BlogForm />
            </div>
            <div className="mb-5 w-full">
                <Feed />
            </div>
        </div>
    );
}
 
export default HomePage;