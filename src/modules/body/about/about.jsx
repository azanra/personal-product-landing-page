import { AboutImage } from "./image/image";
import { AboutHeader } from "./header/header";
import "../../../App.css";

function AboutContainer() {
    return (
        <div className="container-bg-color element-top-gap flex-container about-container">
            <div>
                <AboutImage/>
            </div>
            <div>
                <AboutHeader/>
            </div>
        </div>       
    )
}

export {AboutContainer};