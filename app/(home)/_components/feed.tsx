"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import BlogCard from "./blog_card";

export type BlogsFeed = {
    totalCount: number;
    totalPage: number;
    currentPage: number;
    next?: {
        page: number;
        limit: number;
    };
    previous?: {
        page: number;
        limit: number;
    };
    paginateData: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        summary: string;
        content: string;
        published: boolean;
        autherId: number;
    }[];
    currentCountPerPage: number;
    range: number;
};


const Feed = ({ data }:{ data: BlogsFeed }) => {

    const [blogs, setBlogs] = useState(data);

    const nextFeed = async () => {
        if (blogs.currentPage < data.totalPage) {
            const newData = await axios.get(`http://localhost:8080/api/blog/feed?page=${(blogs.currentPage + 1)}&limit=${blogs.next?.limit == null ? blogs.previous?.limit : blogs.next.limit}`);
            setBlogs(newData.data);
        }
    }

    const previousFeed = async () => {
        if (blogs.currentPage > 1) {
            const newData = await axios.get(`http://localhost:8080/api/blog/feed?page=${(blogs.currentPage - 1)}&limit=${blogs.next?.limit == null ? blogs.previous?.limit : blogs.next.limit}`);
            setBlogs(newData.data);
        }
    }


    return ( 
        <div className="flex-col h-5/6">
            <ScrollArea className="w-full h-full rounded-md border">
                <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none"></h4>
                    {blogs.paginateData.map((blog) => (
                        <div key={blog.id}>
                            <BlogCard blog={blog}/>
                            <Separator className="my-2" />
                        </div>
                    ))}
                </div>
            </ScrollArea>
            <div className="flex justify-center gap-7 py-4">
                <Button
                    className="w-1/4"
                    onClick={() => {previousFeed()}}
                    disabled={ blogs.currentPage <= 1}
                >
                    Previous
                </Button>
                <div className="flex align-middle justify-center gap-2 pt-2">
                        <p>{blogs.currentPage}</p>
                        <p>out of</p>
                        <p>{blogs.totalPage}</p>
                </div>
                <Button
                    className="w-1/4"
                    onClick={() => {nextFeed()}}
                    disabled={ blogs.currentPage >= blogs.totalPage}
                >
                    Next
                </Button>
            </div>
            
        </div>
     );
}
 
export default Feed;