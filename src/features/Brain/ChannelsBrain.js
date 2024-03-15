import React from "react";
import { Channels } from "../../app/assets/shared/ChannelsMain";

const ChannelsArrayRender = () => {
  return (
    <div>
      {Channels.map(channel => (
        <div key={channel.id}>
          <h2>{channel.name}</h2>
          <p>{channel.description}</p>
          <div>{channel.channel}</div> {/* This assumes channel.video is a valid JSX element */}
          <img src={channel.poster} alt={channel.name} width='1000px' />
          <h4>{channel.genre.join(', ')}</h4>
          <h4>{channel.language}</h4>
          <video width="320" height="240" controls>
            <source src={channel.video}/>
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
}

export default ChannelsArrayRender;
