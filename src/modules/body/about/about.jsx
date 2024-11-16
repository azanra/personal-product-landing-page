import { AboutImage } from "./image/image";
import { AboutHeader } from "./header/header";
import "../../../App.css";

function AboutContainer() {
    return (
        <div className="container-bg-color element-top-gap flex-space-between about-container border-radius">
            <div className="flex-container flex-align-items">
                <AboutImage/>
            </div>
            <div>
                <AboutHeader/>
            </div>
        </div>       
    )
}

export {AboutContainer};