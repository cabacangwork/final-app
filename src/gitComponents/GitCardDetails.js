import React, { useState } from 'react';

const GitCardDetails = (props) => {

    const { info, repos, followers } = props.details;

    const repoList = 
      repos.map(repo => 
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank">{repo.name}</a>
        </li>
      );
    
    const followerList = 
      followers.map(follower => 
        <li key={follower.id}>
          <a href={follower.url} target="_blank">{follower.login}</a>
        </li>
      );

    return ( 
      <>
        {
          Object.keys(info).length>=1 && 
          <div className="card-container">
            <div className="left">
              <div className="respos">
                <h5>Repos: ({repos.length})</h5>
                <ul>{repoList}</ul>
              </div>
              <div className="followers">
                <h5>Followers: ({followers.length})</h5>
                <ul>{followerList}</ul>
              </div>
            </div>
            <div className="right">
              <img className='user-avatar' src={info.avatar_url}/>
              <p>{info.name}</p>
              <p>{info.company}</p>
            </div>
          </div>
        }
      </>
    );
}
 
export default GitCardDetails;