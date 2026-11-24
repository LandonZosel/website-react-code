import Image from './Image'
import './Figure.css'

const ImageFigure = ({size, src, alt, caption}) => {
    return (
        <div className="figureContainer">
            <figure>
                <Image size={size} src={src} alt={alt}/>
                <figcaption>
                    {caption}
                </figcaption>
            </figure>
        </div>
    )
}

export default ImageFigure
