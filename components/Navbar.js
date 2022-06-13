import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
const Navbar = () => {
    const { data: session } = useSession();
    const handleSignIn = () => {
        signIn('github')
    };
    
    const handleSignOut = () => {
        signOut('github')
    };
    return (
        <div>
            <header>
                <nav>
                    <div>
                        <h1>Next Auth</h1>
                    </div>

                    <div>
                        <ul>
                           { session ? 
                           (<>
                           <Link href="/api/auth/signout">
                           <li onClick={handleSignOut}>Sign Out</li>
                           </Link></>)
                            : (<><Link href="/api/auth/signin">
                            <li onClick={handleSignIn}>Sign In</li>
                            </Link></>)}
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;