import * as React from "react"
import ReactPlayer from "react-player/lazy"

const ReactVideo = ({ video, poster, ...props }) => {
  return (
    <ReactPlayer
      {...props}
      config={{ file: { attributes: { poster: poster } } }}
      url={video}
      loop={props.loop || false}
      muted={props.muted || false}
    />
  )
}
export default ReactVideo
