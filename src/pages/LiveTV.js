import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { Channels } from "../app/assets/shared/ChannelsMain";

const LiveTV = () => {
    return (
        <div className="movies-container">
            {Channels.map(channel => (
                <Link to={`/movie/${channel.name}`} key={channel.id} className="movie-poster">
                    <img className='moviesPosterSize' src={channel.poster} alt={channel.title} />
                </Link>
            ))}
        </div>
    );
};

export default LiveTV;
