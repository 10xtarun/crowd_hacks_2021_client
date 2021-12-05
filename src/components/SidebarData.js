import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'Talk About Mental Health',
        path: 'talk',
        icon: <AiIcons.AiFillInteraction />,
        className: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/profile',
        icon: <AiIcons.AiFillProfile />,
        className: 'nav-text'
    },
    {
        title: 'Message',
        path: '/message',
        icon: <FaIcons.FaEnvelopeOpenText />,
        className: 'nav-text'
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />,
        className: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople />,
        className: 'nav-text'
    },
]