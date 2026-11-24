import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"
import PageTitle from "../text/PageTitle"
import PageTitleWithBack from "./PageTitleWithBack"
import Choices from "./Choices"
import Info from "./Info"
import ReportText from "./ReportText"

const TwoStep = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [choices, setChoices] = useState('');
    const [info, setInfo] = useState('');

    const [title, setTitle] = useState('Instruments');
    const [currentChoice, setCurrentChoice] = useState('none');
    const [choiceData, setChoiceData] = useState('');
    const [infoData, setInfoData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                var choiceData = await getChoiceData();
                setChoiceData(choiceData);
                var instrumentData = await getInstrumentData();
                setInfoData(instrumentData);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Error fetching data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    //retrives choice data from firebase
    async function getChoiceData() {
        const choiceRef = doc(db, "data", "choicePages");
        const choiceSnap = await getDoc(choiceRef);

        if (choiceSnap.exists()) {
            console.log("Document data:", choiceSnap.data());
            return choiceSnap.data();
        } else {
            console.log("No such document!");
        }
    }

    //retrives instrument data from firebase
    async function getInstrumentData() {
        const instrumentRef = doc(db, "data", "instrumentPages");
        const instrumentSnap = await getDoc(instrumentRef);

        if (instrumentSnap.exists()) {
            console.log("Document data:", instrumentSnap.data());
            return instrumentSnap.data();
        } else {
            console.log("No such document!");
        }
    }

    //called when a button is pressed and passes in the position of that button to determine what to display
    //uses 'currentChoice' to decide if it is a first choice press or second
    const choiceSelected = async (position, choiceOverride) => {
        if (typeof position === 'string') {
            setInfo('');
            let thisChoice = choiceOverride ?? currentChoice;
            if (thisChoice === "none") {
                //must be first choice
                var data = choiceData;
                var page;
                switch (position) {
                    case 'topLeft':
                        setCurrentChoice("idiophones");
                        page = data.idiophones;
                        break;
                    case 'topRight':
                        setCurrentChoice("membranophones");
                        page = data.membranophones;
                        break;
                    case 'botLeft':
                        setCurrentChoice("chordophones");
                        page = data.chordophones;
                        break;
                    case 'botRight':
                        setCurrentChoice("aerophones");
                        page = data.aerophones;
                        break;
                }
                //set title
                setTitle(page.title);
                var choices = page.choices;
                //set choices
                setChoices(choices);
            } else if (thisChoice === "idiophones") {
                setCurrentChoice("idiophonesInfo");
                var data = infoData;
                var instrumentData;
                switch (position) {
                    case 'topLeft':
                        //update the info fields
                        instrumentData = data.bells;
                        break;
                    case 'topRight':
                        //update the info fields
                        instrumentData = data.cymbals;
                        break;
                    case 'botLeft':
                        //update the info fields
                        instrumentData = data.gongs;
                        break;
                    case 'botRight':
                        //update the info fields
                        instrumentData = data.xylophone;
                        break;
                }
                setTitle(instrumentData.title);
                setInfo(instrumentData);
            } else if (thisChoice === "membranophones") {
                setCurrentChoice("membranophonesInfo");
                var data = infoData;
                var instrumentData;
                switch (position) {
                    case 'topLeft':
                        //update the info fields
                        instrumentData = data.bassDrum;
                        break;
                    case 'topRight':
                        //update the info fields
                        instrumentData = data.snareDrum;
                        break;
                    case 'botLeft':
                        //update the info fields
                        instrumentData = data.tambourine;
                        break;
                    case 'botRight':
                        //update the info fields
                        instrumentData = data.timpani;
                        break;
                }
                setTitle(instrumentData.title);
                setInfo(instrumentData);
            } else if (thisChoice === "chordophones") {
                setCurrentChoice("chordophonesInfo");
                var data = infoData;
                var instrumentData;
                switch (position) {
                    case 'topLeft':
                        //update the info fields
                        instrumentData = data.doubleBass;
                        break;
                    case 'topRight':
                        //update the info fields
                        instrumentData = data.harp;
                        break;
                    case 'botLeft':
                        //update the info fields
                        instrumentData = data.piano;
                        break;
                    case 'botRight':
                        //update the info fields
                        instrumentData = data.violin;
                        break;
                }
                setTitle(instrumentData.title);
                setInfo(instrumentData);
            } else if (thisChoice === "aerophones") {
                setCurrentChoice("aerophonesInfo");
                var data = infoData;
                var instrumentData;
                switch (position) {
                    case 'topLeft':
                        //update the info fields
                        instrumentData = data.flute;
                        break;
                    case 'topRight':
                        //update the info fields
                        instrumentData = data.frenchHorn;
                        break;
                    case 'botLeft':
                        //update the info fields
                        instrumentData = data.oboe;
                        break;
                    case 'botRight':
                        //update the info fields
                        instrumentData = data.trombone;
                        break;
                }
                setTitle(instrumentData.title);
                setInfo(instrumentData);
            }
        }
    }

    const backButtonClicked = async () => {
        if (currentChoice === "idiophonesInfo") {
            choiceSelected("topLeft", "none");
        } else if (currentChoice === "membranophonesInfo") {
            choiceSelected("topRight", "none");
        } else if (currentChoice === "chordophonesInfo") {
            choiceSelected("botLeft", "none");
        } else if (currentChoice === "aerophonesInfo") {
            choiceSelected("botRight", "none");
        } else if (currentChoice !== "none") {
            setCurrentChoice("none");
            setChoices('');
            setTitle('Instruments');
        }
    }

    if (loading) {
        return <ReportText text="Loading" loading={true}/>
    }

    if (error) {
        return <ReportText text={error}/>
    }

    if (info) {
        return (
            <>
                <PageTitleWithBack title={title} onClick={backButtonClicked}/>
                <Info infoData={info}/>
            </>
        )  
    }

    return (
        <>
            {currentChoice === "none" ?<PageTitle title={title}/> :<PageTitleWithBack title={title} onClick={backButtonClicked}/>}
            <Choices onClick={choiceSelected} choiceData={choices}/>
        </>
    )
}

export default TwoStep
