import { SiAntdesign } from "react-icons/si";
import { SiBackendless } from "react-icons/si";
import { TbSettingsCode } from "react-icons/tb";
import { MdGroups3 } from "react-icons/md";
import React from 'react';

export const SKILLS = [
    {
        data_title: "Frontend",
        data_icon: <SiAntdesign />,
        skills: [
            { skill: 'Html', percentage: '75%' },
            { skill: 'Css3 (Sass/SCSS)', percentage: '80%' },
            { skill: 'vanilla Js', percentage: '70%' },
            { skill: 'React Js', percentage: '75%' },
        ],
    },
    {
        data_title: "Backend",
        data_icon: <SiBackendless />,
        skills: [
            { skill: 'Python Django', percentage: '60%' },
            { skill: 'Node Js', percentage: '75%' },
            { skill: 'Express', percentage: '60%' },
            { skill: 'Flask', percentage: '52%' },
        ],
    },
    {
        data_title: "Graphic",
        data_icon: <MdGroups3 />,
        skills: [
            { skill: 'Image Editing', percentage: '65%' },
            { skill: 'Illustrator', percentage: '80%' },
            { skill: 'Motion Graphics', percentage: '70%' },
            { skill: 'Animation', percentage: '60%' },
        ],
    },
    {
        data_title: "Tools",
        data_icon: <TbSettingsCode />,
        skills: [
            { skill: 'Git & GitHub', percentage: '85%' },
            { skill: 'Visual Studio Code', percentage: '80%' },
            { skill: 'Figma', percentage: '55%' },
            { skill: 'PyCharm', percentage: '75%' },
            { skill: 'Adobe Illustrator', percentage: '85%' },
            { skill: 'Adobe Photoshop', percentage: '65%' },
            { skill: 'Adobe AfterEffect', percentage: '65%' },
        ],
    },
    {
        data_title: "Soft SKills",
        data_icon: <MdGroups3 />,
        skills: [
            { skill: 'Problem- Solving', percentage: '90%' },
            { skill: 'Collaboration', percentage: '70%' },
            { skill: 'Attention to Details', percentage: '80%' },
            { skill: 'Analysis projections', percentage: '77%' },
        ],
    },
];
