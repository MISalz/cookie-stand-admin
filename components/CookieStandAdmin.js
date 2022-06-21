import CookieStandForm from './createform'
import CookieStandTable from './reporttable'
import resource from '../hooks/resource'

export default function CookieStandAdmin({ onLogout }) {

    const { resources, createResource, deleteResource, error } = resource();

    if (error) {
        onLogout();
        return null;
    }

    if (!resources) return <h2>Loading...</h2>

    return (
        <div>
            <CookieStandForm onCreate={createResource} />
            <CookieStandTable stands={resources} onDelete={deleteResource} />
        </div>
    )
}