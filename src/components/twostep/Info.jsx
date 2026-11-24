import AudioFigure from '../figure/AudioFigure'
import FullFigure from '../figure/FullFigure'
import ImageFigure from '../figure/ImageFigure'
import Column from '../general/Column'
import Row from '../general/Row'
import PageHeader from '../text/PageHeader'
import PageText from '../text/PageText'

const Info = ({ infoData }) => {
    //set data categories
    var text = infoData.text;
    var imgs = infoData.imgs;
    var audio = infoData.audio;

    return (
        <>
            <Row>
                <PageText text={text.definition}/>
                <FullFigure size="big" audioSrc={audio.sample} imageSrc={imgs.normal.ref} alt={imgs.normal.alt} caption="Hear how it sounds!"/>
            </Row>
            <PageHeader header="Classical Applications"/>
            <PageText text={text.classical}/>
            <Row>
                <ImageFigure size="medium" src={imgs.fun.ref} alt={imgs.fun.alt} caption={text.imgCaption}/>
                <Column>
                    <PageHeader header="Famous Piece" centered={true}/>
                    <PageText text={text.pieceInfo}/>
                    <AudioFigure src={audio.piece} caption={text.pieceCaption}/>
                </Column>
            </Row>
            <Column>
                <PageHeader header="Fun Fact!" centered={true}/>
                <PageText text={text.funFact}/>
            </Column>
        </>
    )
}

export default Info
