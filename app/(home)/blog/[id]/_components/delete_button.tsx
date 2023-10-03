"use client"; 

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter} from "next/navigation";

const DeleteButton = ({id}:{id: number}) => {
    const router = useRouter()

    const deleteBlog = async () => {
      try {
          await axios.delete(`http://localhost:8080/api/blog/${id.toString()}`);
      } catch (error) {
          console.log(error);
      } finally {
        router.replace('/blog');
      }
    }

    return ( 
        <Button variant={"destructive"} className="w-[50px]" onClick={deleteBlog}>
            Delete
        </Button>
     );
}
 
export default DeleteButton;