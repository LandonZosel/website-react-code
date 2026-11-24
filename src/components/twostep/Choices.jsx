import Row from '../general/Row'
import ImageButton from './ImageButton'

// import './Choices.css'

const Choices = ({ onClick, choiceData }) => {
    let tLSrc = "idiophones.jpg";
    let tRSrc = "membranophones.jpg";
    let bLSrc = "chordophones.jpg";
    let bRSrc = "aerophones.jpg";

    let tLAlt = "A women hitting a bowl with a mallet";
    let tRAlt = "A man beating a drum head";
    let bLAlt = "A woman plucking a harp";
    let bRAlt = "A man blowing into the open air";

    let tLCap = "Idiophones";
    let tRCap = "Membranophones";
    let bLCap = "Chordophones";
    let bRCap = "Aerophones";

    if (choiceData) {
        tLSrc = choiceData[0].img.ref;
        tRSrc = choiceData[1].img.ref;
        bLSrc = choiceData[2].img.ref;
        bRSrc = choiceData[3].img.ref;

        tLAlt = choiceData[0].img.alt;
        tRAlt = choiceData[1].img.alt;
        bLAlt = choiceData[2].img.alt;
        bRAlt = choiceData[3].img.alt;

        tLCap = choiceData[0].title;
        tRCap = choiceData[1].title;
        bLCap = choiceData[2].title;
        bRCap = choiceData[3].title;
    }

    return (
        <>
            <Row>
                <ImageButton onClick={() => onClick("topLeft")} src={tLSrc} alt={tLAlt} caption={tLCap}/>
                <ImageButton onClick={() => onClick("topRight")} src={tRSrc} alt={tRAlt} caption={tRCap}/>
            </Row>
            <Row>
                <ImageButton onClick={() => onClick("botLeft")} src={bLSrc} alt={bLAlt} caption={bLCap}/>
                <ImageButton onClick={() => onClick("botRight")} src={bRSrc} alt={bRAlt} caption={bRCap}/>
            </Row>
        </>
    )
}

export default Choices
