import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  return(
    <div className="u-flex u-cursorPointer" onClick={() => onVideoSelect(video)}>
      <div className="u-flexShrink-0 u-marginRightExtraSmall" style={{ width: '120px'}}>
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="u-maxWidthFull u-marginBottomSmall" />
      </div>
      <div className="u-flexGrow-1">
        <div className="u-text200 u-marginBottomSmall">{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem;