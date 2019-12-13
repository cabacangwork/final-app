import React, { useState } from 'react';
import GitCardDetails from './GitCardDetails';

const GitCards = () => {

    const [search, setSearch] = useState('');
    const [info, setInfo] = useState({});
    const [repos, setRepos] = useState([]);
    const [followers, setFollowers] = useState([]);

    const searchUser = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://api.github.com/users/${search}`);
            const data = await res.json();
            const response = await fetch(`https://api.github.com/users/${search}/repos`);
            const repos = await response.json();
            const resp = await fetch(`https://api.github.com/users/${search}/followers`);
            const followers = await resp.json();
            setInfo(data);
            setRepos(repos);
            setFollowers(followers);
            await setSearch('');
            console.log(data)
        }
        catch{console.log('User Not Found')}
    }


    return ( 
        <div className="git-card container">
            <form className="search-card" onSubmit={searchUser}>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
            <GitCardDetails details={{info, repos, followers}} />
        </div>
    );
}
 
export default GitCards;