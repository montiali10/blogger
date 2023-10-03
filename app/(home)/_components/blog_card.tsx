"use client";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
  
interface Blog {
    blog: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        summary: string;
        content: string;
        published: boolean;
        autherId: number;
    }
};

const BlogCard = (blog: Blog) => {
    return (
        <Link href={`/blog/${blog.blog.id}`} className="curser-pointer">
            <Card className="h-[200px] hover:bg-slate-100">
                <CardHeader>
                <CardTitle>{blog.blog.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <h6 className="text-slate-400">blog summary:</h6>
                    <p className="h-[100px] overflow-hidden">{blog.blog.summary}</p>
                </CardContent>
            </Card>
        </Link>
    );
}
 
export default BlogCard;