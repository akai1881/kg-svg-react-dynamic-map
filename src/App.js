import RadioSVGMap from "./RadioSvg";
import KgMap from "./map";
import "./App.css";
import { useState } from "react";

const options = [
    { id: "issyk", data: [{ street: "test issyk street", phone: "test issyk phone" }] },
    { id: "osh", data: [{ street: "test osh street", phone: "test osh phone" }] },
    { id: "chui", data: [{ street: "test issyk street", phone: "test issyk phone" }] },
    { id: "talas", data: [{ street: "test osh street", phone: "test osh phone" }] },
    { id: "jalal-abad", data: [{ street: "test issyk street", phone: "test issyk phone" }] },
    { id: "batken", data: [{ street: "test osh street", phone: "test osh phone" }] },
    { id: "naryn", data: [{ street: "test osh street", phone: "test osh phone" }] }
];

function App() {
    const [focusedLocation, setFocusedLocation] = useState(null);

    const [selectRegion, setSelectedRegion] = useState(options[0]);

    const [modal, setModal] = useState(false);

    const getLocationName = event => {
        return event.target.attributes.name.value;
    };

    const handleFocus = (event, location) => {
        const focusedLocation = getLocationName(event);
        setSelectedRegion(options.find(item => focusedLocation === item.id));
        setModal(true);
        setFocusedLocation(focusedLocation);
    };

    const getLocationClassName = (location, index) => {
        return `svg-map__location svg-map__location--heat${index % 15}`;
    };

    return (
        <>
            <div className="kg-map">
                <RadioSVGMap map={KgMap} locationClassName={getLocationClassName} onLocationFocus={handleFocus} />
            </div>
            {modal && (
                <div>
                    {selectRegion.id}, <button onClick={() => setModal(false)}>close</button>
                </div>
            )}
        </>
    );
}

export default App;
