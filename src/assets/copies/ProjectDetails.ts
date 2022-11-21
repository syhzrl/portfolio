import icons from 'assets/icons';
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
    description: 'A web app built to manage Audits and Auditors.',
    techs: vpcLogosRow,
    images: [images.heetsLogin, images.heets1, images.heets2],
    icon: icons.book,
};

const heetsDetails: IProject = {
    title: 'Heets',
    description: 'A web app built for managing FAQs that will be consumed by a custom telegram bot.',
    techs: heetsLogosRow,
    images: [images.heetsLogin, images.heets1, images.heets2],
    icon: icons.fire,
};

const mangoDetails: IProject = {
    title: 'Mango',
    description: 'A web app built for an admin to create and manage campaigns, QR codes and surveys.',
    techs: mangoLogosRow,
    images: [images.mangoLogin, images.mango1, images.mango2],
    icon: icons.mango,
};

const reaDetails: IProject = {
    title: 'Dormeo',
    description: '\'Real Estate Agent\' web app built for REA\'s that communicate with 2 other web apps for Admins and Owners.',
    techs: reaLogosRow,
    images: [images.heetsLogin, images.heets1, images.heets2],
    icon: icons.realEstate,
};

// Other Projects
const faqBotDetails: IProject = {
    title: 'Faq Bot',
    description: 'A Telegram bot built to consume and display custom FAQs to users via Telegram App.',
    techs: heetsLogosRow,
    images: [images.heetsLogin, images.heets1, images.heets2],
    icon: icons.audit,
};

const ageBotDetails: IProject = {
    title: 'Age Bot',
    description: 'A Telegram bot built to verify users age via Telegram App.',
    techs: heetsLogosRow,
    images: [images.heetsLogin, images.heets1, images.heets2],
    icon: icons.audit,
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
