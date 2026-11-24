import PageTitle from '../components/text/PageTitle'
import PageHeader from '../components/text/PageHeader'
import PageText from '../components/text/PageText'
import ImageFigure from '../components/figure/ImageFigure'
import AudioFigure from '../components/figure/AudioFigure'
import FullFigure from '../components/figure/FullFigure'
import Row from '../components/general/Row'
import Column from '../components/general/Column'

import "./Page.css"

const Home = () => {
    return (
        <main className="mainContainer">
            <PageTitle title="The Orchestra"/>
            <PageHeader header="What is an orchestra?"/>
            <Row>
                <PageText text="An orchestra is a group of musicians that play a wide variety of instruments. An orchestra can play all sorts of pieces from classical to opera to pop culture. They are typically led by a conductor and feature four main sections of instruments: strings, woodwinds, brass, and percussion. Each of these sections adds another layer to the pieces the orchestra plays."/>
                <ImageFigure size="big" src="orchestra.jpg" alt="A group of musicians on a stage" caption="An orchestra ready to perform on a stage."/>
            </Row>
            <br/>
            <AudioFigure src="Symphony-No5.mp3" caption="Beethoven - Symphony No. 5"/>
            <br/>
            <Column>
                <Column>
                    <PageHeader header="What makes it different from other ensembles?"/>
                    <PageText text="An orchestra is different from other ensembles in its diversity. Orchestras have the widest variety of instruments. Not many other ensembles would you find an oboe, double bass, and trombone player all in the same room. Due to having such a wide variety of instruments, orchestras play a wide variety of pieces. Operas typically have a pit orchestra that meets the needs of the opera. Orchestras have performed for celebration anniversary concerts of movies and video games. Orchestras also typically like to play pieces that feature a soloist, including many classical pieces where most of the orchestra is accompaniment."/>
                </Column>
                <Row>
                    <FullFigure size="medium" imageSrc="the-magic-flute.jpg" audioSrc="The-Magic-Flute.mp3" alt="A woman performing opera" caption="The Magic Flute - Queen of the Night" cite={true}/>
                    <FullFigure size="medium" imageSrc="zelda-orchestra.jpg" audioSrc="The-Legend-of-Zelda.mp3" alt="A group of musicians on a stage in front of a 40th anniversary banner" caption="The Legend of Zelda 40th Anniversary Orchestra" cite={true}/>
                </Row>
            </Column>
            <br/>
        </main>
    )
}

export default Home