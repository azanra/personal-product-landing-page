import { AboutImage } from "./image/image";
import { AboutHeader } from "./header/header";

function AboutContainer() {
    return (
        <div>
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