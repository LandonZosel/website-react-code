import PageTitle from '../components/text/PageTitle'
import PageHeader from '../components/text/PageHeader'
import PageText from '../components/text/PageText'
import ImageFigure from '../components/figure/ImageFigure'
import FullFigure from '../components/figure/FullFigure'
import Row from '../components/general/Row'
import Column from '../components/general/Column'

import "./Page.css"

const MusicTheory = () => {
    return (
        <main className="mainContainer">
            <PageTitle title="Music Theory"/>
            <PageHeader header="What is a scale?"/>
            <PageText text="A scale is a group of notes that harmonically work together. These groups are found based on patterns of intervals you can follow up the notes. The intervals are whole steps (W) and half steps (h) that you take up the 12 chromatic notes (C#, D, D#, E, F, F#, G, G#, A, A#, B, C) where whole steps are two notes and half steps are just one note. The name of any scale depends on the pattern you follow and the note you start on. For example, C Major scale follow the major pattern (WWhWWWh) and starts on C. Therefore, the C Major scale is: C, D, E, F, G, A, B, C."/>
            <FullFigure size="big" imageSrc="major-scale.png" audioSrc="c-major-scale.mp3" alt="The C major scale seperated by whole and half steps" caption="C Major Scale"/>,
            <br/>
            <PageHeader header="Chords" centered={true}/>
            <Row>
                <FullFigure size="small" imageSrc="c-major-triad.png" audioSrc="c-major-chord.mp3" alt="The C major triad" caption="C Major Triad"/>
                <PageText text="Chords are combinations of three or more notes. These notes, when played together, sound harmonically good and form the basis of all music. A triad is a chord of specifically three notes: the root, a major third (four half steps from the root), and a perfect fifth (seven half steps from the root). Chords are mostly based on scales. For example, the C Major triad is: C, E, G. A minor triad is almost the same as a major triad, but the major third is replaced with a minor third (three half steps) giving us C Minor triad: C, D#, G."/>
                <FullFigure size="small" imageSrc="c-minor-triad.png" audioSrc="c-minor-chord.mp3" alt="The C minor triad" caption="C Minor Triad"/>
            </Row>
            <PageHeader header="How can we classify instruments?"/>
            <PageText text="The Hornbostel-Sachs is the most widely used system of instrumental classification. It classifies instruments based on the way they are played and sound is produced. There are many subcategories but it has four main broad classifications: Idiophones, Membranophones, Chordophones, and Aerophones."/>
            <Row>
                <Column>
                    <ImageFigure size="medium" src="idiophones.jpg" alt="A women hitting a bowl with a mallet" caption="Idiophones produce sound by the full instrumental body vibrating."/>
                    <ImageFigure size="medium" src="chordophones.jpg" alt="A woman plucking a harp" caption="Chordophones produce sound by a string or strings vibrating."/>
                </Column>
                <Column>
                    <ImageFigure size="medium" src="membranophones.jpg" alt="A man beating a drum head" caption="Membranophones produce sound by a stretched membrane vibrating."/>
                    <ImageFigure size="medium" src="aerophones.jpg" alt="A man blowing into the open air" caption="Aerophones produce sound by vibrating the air."/>
                </Column>
            </Row>
        </main>
    )
}

export default MusicTheory