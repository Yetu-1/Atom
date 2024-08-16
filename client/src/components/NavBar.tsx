import { Stack } from "react-bootstrap";
import "./NavBar.css"

const tabs = ["Dashboard", "Devices", "Tracking", "Settings"]

export function NavBar() {
    return (
        <div className="NavBar">
            <Stack gap={5}>
                <div className="Logo mt-3 mb-5">
                    <h1>Atom</h1> 
                </div>

                <div>
                    <Stack gap={4}>
                        {tabs.map(tab => { return <p>{tab}</p>}) }
                    </Stack>
                </div>
            </Stack>
        </div>

    );
}

function NavComp(value) {
    return (
        <div className="NavBar">

        </div>
    );
}