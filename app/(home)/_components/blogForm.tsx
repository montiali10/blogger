"use client"

import * as z from "zod"
import Axios from "axios"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"


const formSchema = z.object({
    title: z.string().min(4, {
        message: "Title must be at least 4 characters.",
    }).max(30, {
        message: "Title must be at most 30 characters."
    }),
    content: z.string().min(2),
    summary: z.string().min(2)
})


const BlogForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            content: "",
            summary: ""
        },
    })

    const router = useRouter();

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true);
        try {
            await Axios.post('http://localhost:8080/api/blog/create', {
                title: values.title,
                content: values.content,
                summary: values.summary,
                autherId: 1
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    throw new Error(error);
                });
            form.reset();
            router.push('blog');
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    const [isLoading, setIsLoading] = useState(false);

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Blog Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Blog Title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Blog Content</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Write the content of the blog."
                                    className="resize-none h-[250px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="summary"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Blog Summary</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us a little bit about yourself"
                                    className="resize-none h-[100px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex gap-3">
                    <Button type="submit" disabled={isLoading} >Post Blog</Button>
                    {/* spinner */}
                </div>
            </form>
        </Form>
    );
}

export default BlogForm;