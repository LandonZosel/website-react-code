import Image from './Image'
import Audio from './Audio'
import './Figure.css'

const FullFigure = ({size, audioSrc, imageSrc, alt, caption, cite}) => {
    var captionHTML;

    if (cite) {
        captionHTML = <cite>{caption}</cite>;
    } else {
        captionHTML = caption;
    }
    
    return (
        <div className ="figureContainer">
            <figure>
                <Image size={size} src={imageSrc} alt={alt}/>
                <Audio src={audioSrc}/>
                <figcaption>
                    {captionHTML}
                </figcaption>
            </figure>
        </div>
    )
}

export default FullFigure
