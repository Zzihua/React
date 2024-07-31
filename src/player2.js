import { Player } from "video-react";

export default function Player2(){
    return(
        <Player
            fluid={false}
            width={600}
            height={400}
            muted={true}
            autoPlay={true}
            poster="https://upload.wikimedia.org/wikipedia/commons/6/69/Sintel_Cover_Durian_Project.jpg"
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />    
    );
}