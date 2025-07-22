import React from "react";
import { user } from './const';

function Contacto() {
    return (
        <div className="d-flex justify-content-center gap-3 mt-3">
            {[
                {
                    url: user.linkedin,
                    icon: 'https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/linkedin/default.svg',
                    alt: 'LinkedIn'
                },
                {
                    url: `https://mail.google.com/mail/?view=cm&fs=1&to=${user.email}`,
                    icon: 'https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/gmail/default.svg',
                    alt: 'Email'
                },
                {
                    url: user.github,
                    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
                    alt: 'GitHub'
                }
            ].map((item, index) => (
                <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                    style={{
                        display: 'inline-block',
                        transition: 'transform 0.3s ease',
                        filter: 'invert(1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <img
                        src={item.icon}
                        alt={item.alt}
                        style={{
                            width: '35px',
                            height: '35px',
                            filter: 'drop-shadow(0 0 2px var(--ubuntu-terminal-green))'
                        }}
                    />
                </a>
            ))}
        </div>
    );
}

export default Contacto;