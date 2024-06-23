import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {

    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopneer,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div>
            <div className="flex items-end justify-end text-gray-200 mt-4  mr-4">
                <div className="text-4xl">
                    <a className="cursor-pointer mr-2 hover:text-gray-400 transition" onClick={() => openInNewTab('https://www.linkedin.com/in/irving-aguilera/')}>  <FontAwesomeIcon icon={faLinkedin} /></a>
                    <a className="cursor-pointer mr-2 hover:text-gray-400 transition" onClick={() => openInNewTab('https://www.instagran.com')}><FontAwesomeIcon icon={faInstagram} /></a>
                    <a className="cursor-pointer mr-2 hover:text-gray-400 transition" onClick={() => openInNewTab('https://www.instagran.com')}><FontAwesomeIcon icon={faMessage} /></a>
                </div>
            </div>
        </div>
    )
}