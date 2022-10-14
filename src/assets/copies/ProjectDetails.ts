import images from 'assets/images';
import { IProject } from 'entities/Projects';
import {
    vpcLogosRow,
    heetsLogosRow,
    mangoLogosRow,
    reaLogosRow,
    ppjLogosRow,
} from './LogosRow';

// Main Projects
const vpcDetails: IProject = {
    title: 'VPC',
    description: 'A web app built to manage Audits and Auditors. This web app allows users to create auditors, create audits, assign specific auditor to a specific audit and also assess auditors to see their competency level in different fields of auditing.',
    techs: vpcLogosRow,
    images: [images.heetsLogin, images.heets1, images.heets2],
};

const heetsDetails: IProject = {
    title: 'Heets',
    description: 'A web app where a user can create, update and delete FAQs that will be consumed by a custom telegram bot. The way the interaction work is once a user creates their FAQs, the FAQs will be stored in a database and the custom telegram bot will retrieve the created FAQs from the database and display it to the customers. This app also allows a user to create a set of predefined questions for another telegram bot for age verification.',
    techs: heetsLogosRow,
    images: [images.heetsLogin, images.heets1, images.heets2],
};

const mangoDetails: IProject = {
    title: 'Mango',
    description: 'A web app built for an admin to create and manage campaigns, QR codes and surveys. Each module have their own seperate CRUD process and each module have their own seperate reports sections which are dashboards with fancy graphs and bar charts. The surveys created will be stored in a database and a seperate mobile specific web app will retrieve those surveys from the database and display it for customers to answer.',
    techs: mangoLogosRow,
    images: [images.mangoLogin, images.mango1, images.mango2],
};

const reaDetails: IProject = {
    title: 'Dormeo REA',
    description: '\'Real Estate Agent\' web app built for REA\'s that communicate with 2 other web apps for Admins and Owners. This web app allows REA\'s to create an account and submit their qualification levels for the admins to assess. The REA\'s could also view properties that are currently on sale and manage properties that they are assigned to.',
    techs: reaLogosRow,
    images: [images.heetsLogin, images.heets1, images.heets2],
};

// Other Projects
const faqBotDetails: IProject = {
    title: 'Faq Bot',
    description: 'klasjfasjf skljdfhaskjfhd lkjsdhflkasjhdf lkjhsdklfjha',
    techs: heetsLogosRow,
    images: [images.heetsLogin, images.heets1, images.heets2],
};

const ageBotDetails: IProject = {
    title: 'Age Bot',
    description: 'klasjfasjf skljdfhaskjfhd lkjsdhflkasjhdf lkjhsdklfjha',
    techs: heetsLogosRow,
    images: [images.heetsLogin, images.heets1, images.heets2],
};

export {
    // Main Projects
    vpcDetails,
    heetsDetails,
    mangoDetails,
    reaDetails,

    // Other Projects
    faqBotDetails,
    ageBotDetails,

};
