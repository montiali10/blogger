import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

const LoginPage = () => {
    return ( 
        <Card className="w-[400px] md:w-[500px] lg:w-[600px] text-center">
            <CardHeader>
                <CardTitle>Sign In</CardTitle>
                <CardDescription>Sign in to Blogger</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    );
}
 
export default LoginPage;