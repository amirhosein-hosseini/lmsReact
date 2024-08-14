import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '@videojs/http-streaming';
import './VideoPlayer.css';
import styles from "./styles.module.scss";
import { PlayIcon, PauseIcon, VolumeUpIcon, VolumeMuteIcon, ExpandIcon } from './viewerIcons';
import ReactDOM from 'react-dom';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      playerRef.current = videojs(videoElement, {
        controls: true,
        responsive: true,
        fluid: true,
        playbackRates: [0.5, 1, 1.5, 2],
        sources: [{
          src: src,
          type: getVideoType(src)
        }],
        userActions: {
          hotkeys: true
        },
      });

      // Replace default icons with custom SVG icons
      const replaceIcon = (elementClass, IconComponent) => {
        const element = playerRef.current.el().querySelector(elementClass);
        if (element) {
          element.innerHTML = '';
          const iconWrapper = document.createElement('div');
          iconWrapper.className = 'custom-icon';
          ReactDOM.render(<IconComponent />, iconWrapper);
          element.appendChild(iconWrapper);
        }
      };

      replaceIcon('.vjs-play-control', PlayIcon);
      replaceIcon('.vjs-fullscreen-control', ExpandIcon);
      replaceIcon('.vjs-mute-control', VolumeUpIcon);

      // Listen for play/pause events to update the play/pause button
      playerRef.current.on('play', () => replaceIcon('.vjs-play-control', PauseIcon));
      playerRef.current.on('pause', () => replaceIcon('.vjs-play-control', PlayIcon));

      // Listen for mute/unmute events to update the mute button
      playerRef.current.on('volumechange', () => {
        if (playerRef.current.muted()) {
          replaceIcon('.vjs-mute-control', VolumeMuteIcon);
        } else {
          replaceIcon('.vjs-mute-control', VolumeUpIcon);
        }
      });
    } else {
      // Update the source if it changes
      playerRef.current.src({ type: getVideoType(src), src: src });
    }
  }, [src]);

  useEffect(() => {
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, []);

  const getVideoType = (url) => {
    if (url.endsWith('.m3u8')) {
      return 'application/x-mpegURL';
    } else if (url.endsWith('.mp4')) {
      return 'video/mp4';
    } else {
      return 'video/mp4';
    }
  };

  return (
    <div className="video-player-wrapper">
      <video 
        ref={videoRef} 
        className="video-js vjs-big-play-centered vjs-custom-skin"
      />
    </div>
  );
};

export default VideoPlayer;