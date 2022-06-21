import { useAuth } from '../context/auth'
import resource from '../hooks/resource'
import CookieStandHeader from '../components/header'
import CookieStandFooter from '../components/footer'
import Head from 'next/head'

export default function Layout({ children }) {

    const { user, logout } = useAuth();
    const { resources } = resource()


    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CookieStandHeader username={user?.username} onLogout={logout} />
            <main className="w-5/6 mx-auto">{children}</main>
            <CookieStandFooter reports={resources || []} />
        </div>
    )
}