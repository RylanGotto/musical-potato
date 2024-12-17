import { Client, Users } from 'node-appwrite';
import type { PageLoad } from './$types';

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
.setProject('6760b5b2002c6bcf4022') // Your project ID
.setKey('standard_b6297e74f5d5a628d2d9e2a1fe649fbb8930c1e8da188bb310614017117f0e001ba288deff39cf0aa4518681e71027cd167cc07245ec40277000a1309c012f7aa9edd2bc3cf5780a91326bdb2092a9122358cb50c1e95e6f17b38d5cefd300333552c03b147cad4f4af6eb624b27644b5dc1a2e5e02357338c618498963741fa'); // Your secret API key

const users = new Users(client);


export const load: PageLoad = async ({ params }) => {
    async function crazy() {
        let r = await users.list()
        return r.users
    }
    
    return {
        users: crazy()
    };
};