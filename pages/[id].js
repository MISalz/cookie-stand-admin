import { useRouter } from 'next/router'
import { useAuth } from '../context/auth'
import { useEffect } from 'react'
import resource from '../hooks/resource'

export default function StandDetail() {
    const router = useRouter();
    const { user } = useAuth();
    const { resources, error } = resource();

    useEffect(() => {
        if (error || !user) {
            router.push('/')
        }
    })

    if (!resources) return <h2>Loading...</h2>

    const { id } = router.query;

    const resource = resources.find(item => item.id == id)

    return <h1>Stand detail {JSON.stringify(resource)}</h1>
}