import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHome, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {

    const openInNewTab = (url: string) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div className=''>
            <div className="fixed md:bottom-16 bottom-10 md:right-0 right-0 p-4 text-gray-300 z-20 mb-4">
                <div className="text-4xl flex flex-col m-2 ">
                    <a className="cursor-pointer mr-2 hover:text-gray-400 transition mb-1 text-5xl" onClick={() => openInNewTab('https://www.linkedin.com/in/irving-aguilera/')}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    {/* <a className="cursor-pointer mr-2 hover:text-gray-400 transition" onClick={() => openInNewTab('https://www.instagram.com')}><FontAwesomeIcon icon={faInstagram} /></a> */}
                    {/* <a className="cursor-pointer mr-2 hover:text-gray-400 transition mb-1" onClick={() => openInNewTab('https://www.instagram.com')}>
                        <FontAwesomeIcon icon={faMessage} />
                    </a> */}

                    <Link to="/" >
                        <div className="cursor-pointer mr-2 hover:text-gray-400 transition" >
                            <FontAwesomeIcon icon={faHome} />
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}
