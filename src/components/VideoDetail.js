import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return(
      <div>Loading...</div>
    )
  }

  const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`;

  return(
    <div>
      <div className="Media u-positionRelative u-block u-paddingNone u-overflowHidden Media--16by9 u-marginBottomSmall">
        <iframe title="Video player" src={videoSrc} frameBorder="0" className="Media-item"></iframe>
      </div>
      <h4 className="u-text500 u-fontMedium">{video.snippet.title}</h4>
      <div className="u-textGray">{video.snippet.description}</div>
    </div>
  )
};

export default VideoDetail;