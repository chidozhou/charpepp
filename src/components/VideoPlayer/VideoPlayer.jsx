// import "./videoPlayer.css";
// import video from "../../assets/video.mp4";
// import { useRef } from "react";

// const VideoPlayer = ({ setPlayState, playState }) => {
//   const player = useRef(null);

//   const closePlayer = (e) => {
//     if (e.target === player.current) {
//       setPlayState(false);
//     }
//   };

//   return (
//     <div
//       className={`video-player ${playState ? "" : "hide"}`}
//       ref={player}
//       onClick={closePlayer}
//     >
//       <video src={video} autoPlay muted controls></video>
//     </div>
//   );
// };

// export default VideoPlayer;
