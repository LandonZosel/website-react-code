import './Audio.css'

const Audio = ({src}) => {
    return (
        <audio className="audioSpacing" controls src={"../10/audio/"+src}></audio>
    )
}

export default Audio
