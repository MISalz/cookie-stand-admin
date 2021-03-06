import 'tailwindcss/tailwind.css'
import { AuthProvider } from '../contexts/auth';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthProvider>
    )
}

export default MyApp