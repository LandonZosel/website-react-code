import './Image.css'

const Image = ({size, src, alt}) => {
    return (
        <img className={size+"Image"} src={"/10/img/"+src} alt={alt}/>
    )
}

export default Image
