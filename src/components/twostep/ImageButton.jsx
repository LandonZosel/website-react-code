import PageHeader from '../text/PageHeader'
import Image from '../figure/Image'

import './ImageButton.css'

const ImageButton = ({ onClick, src, alt, caption }) => {
    return (
        <div className="figureContainer">
            <figure>
                <button className="imageButton" onClick={onClick}>
                    <Image size="medium" src={src} alt={alt}/>
                </button>
                <figcaption>
                    <PageHeader header={caption}/>
                </figcaption>
            </figure>
        </div>
    )
}

export default ImageButton
