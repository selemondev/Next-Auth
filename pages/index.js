import { useSession } from "next-auth/react";
import { getProviders,getSession } from "next-auth/react";
import Login from "../components/Login";
import { useRouter } from "next/router";
export default function Home({ providers }) {
  const { data: session } = useSession();
  const router = useRouter();
  if(!session) return <Login providers={providers}/>;
  return (
    <div className="container">
      {session ? (<><h1>{session.user.name}</h1>
      <h3>{session.user.email}</h3>
      <img src={session.user.image} alt={session.user.name} height={50} width={50}/></>) : (<><h1>Login</h1></>)}
    </div>
  )
}


export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context)
  return {
    props: {
    session,
    providers
    }
  }
}
