import { getProviders, getSession } from "next-auth/react";
import Login from "../components/Login";
const Blog = () => {
    return (
        <div>
            Blog App
        </div>
    );
}

export default Blog;

export async function getServerSideProps(context) {
    const session = await getSession(context);

    if(!session) {
        return {
            redirect: {
                destination: "/api/auth/signin?callbackUrl=http://localhost:3000"
            }
        }
    };

    return {
        props: {
            session
        }
    }
}