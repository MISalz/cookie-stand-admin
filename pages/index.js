import LoginForm from '../components/LogInForm'
import CookieStandAdmin from '../components/CookieStandAdmin'
import { useAuth } from '../contexts/auth'

export default function Home() {

    const { user, login, logout } = useAuth();

    if (!user) return <LoginForm onSubmit={login} />

    return <CookieStandAdmin
        onLogout={logout}
        username={user.username}
    />

}