import axios from "axios";
import { BlogsFeed } from "@/app/(home)/_components/feed";

import BlogForm from "../_components/blogForm";
import Feed from "../_components/feed";

const HomePage = async () => {

    var { data }:{ data: BlogsFeed }  = await axios.get("http://localhost:8080/api/blog/feed");


    return ( 
        <div className="md:flex align-middle h-full justify-center gap-5 xl:px-14">
            <div className="mt-5 w-full">
                <BlogForm />
            </div>
            <div className="mt-5 w-full">
                <Feed data={data}/>
            </div>
        </div>
    );
}
 
export default HomePage;