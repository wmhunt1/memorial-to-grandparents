import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import InterviewAudio from "../../assets/audio/mama interview 12.2.19.mp3"

function Interview() {
    return (
        <div>
            <ReactAudioPlayer
                src={InterviewAudio}
                // autoPlay
                controls
            />
        </div>
    )
}
export default Interview;