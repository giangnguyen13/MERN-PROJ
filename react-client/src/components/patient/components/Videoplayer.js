import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ link }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`${link}`}
      //   src={`${link}`}https://youtu.be/DsFLMrXSJNg
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
