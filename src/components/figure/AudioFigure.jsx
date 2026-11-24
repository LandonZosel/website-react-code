import Audio from './Audio'
import './Figure.css'

const AudioFigure = ({src, caption}) => {
    return (
        <div className ="figureContainer">
            <figure>
                <Audio src={src}/>
                <figcaption>
                    <cite>{caption}</cite>
                </figcaption>
            </figure>
        </div>
    )
}

export default AudioFigure
