import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/navigation";
import DeleteButton from "./_components/delete_button";

type Blog = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  summary: string;
  content: string;
  published: boolean;
  autherId: number;
};

const BlogPage = async ({
  params,
}: {
  params: {
    id: any;
    slug: string;
  };
}) => {
  const data = await axios.get(`http://localhost:8080/api/blog/${params.id}`);

  const blog: Blog = data.data;

  const date = new Date(blog.createdAt);

  const editMode = false;

  return (
        <div className="flex-col w-full text-center">
            <div className="flex align-middle justify-center">
                <h4 className="text-lg p-7">created at:<br/>{date.getDay()}/{date.getMonth()}/{date.getFullYear()} {date.getHours()}:{date.getMinutes()}</h4>
                <h1 className="text-2xl font-bold p-7 mx-auto">{blog.title}</h1>
                <div className="p-7 flex gap-4">
                    <Button variant={"secondary"} className="w-[50px]">
                        Edit
                    </Button>
                    <DeleteButton id={blog.id}/>
                </div>
            </div>
            <div className="p-10 text-start">
                <h5>Blog summary:</h5>
                <Separator/>
                <h6 className="border-top bg-slate-50 rounded-md m-3">{blog.summary}</h6>
            </div>
            <div className="p-10 text-start">
                <h5>Blog content:</h5>
                <Separator/>
                <h6 className="border-top bg-slate-50 rounded-md m-3">{blog.content}</h6>
            </div>
        </div>
    );
};

export default BlogPage;
