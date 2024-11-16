import { ContactText } from "./contact/contact";
import { CopyrightText } from "./copyright/copyright";
import { OperationalText } from "./operational/operational";

function FooterContainer() {
    return (
        <div className="flex-container footer-container">
            <ContactText/>
            <CopyrightText/>
            <OperationalText/>
        </div>
    )
}

export {FooterContainer};