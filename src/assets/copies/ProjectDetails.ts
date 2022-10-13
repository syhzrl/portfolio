import { IProject } from 'entities/Projects';
import { heetsLogosRow, vpcLogosRow } from './LogosRow';

const vpcDetails: IProject = {
    title: 'VPC',
    description: 'klasjfasjf skljdfhaskjfhd lkjsdhflkasjhdf lkjhsdklfjha',
    techs: vpcLogosRow,
};

const heetsDetails: IProject = {
    title: 'Heets',
    description: 'klasjfasjf skljdfhaskjfhd lkjsdhflkasjhdf lkjhsdklfjha',
    techs: heetsLogosRow,
};

const faqBotDetails: IProject = {
    title: 'Faq Bot',
    description: 'klasjfasjf skljdfhaskjfhd lkjsdhflkasjhdf lkjhsdklfjha',
    techs: heetsLogosRow,
};

const ageBotDetails: IProject = {
    title: 'Age Bot',
    description: 'klasjfasjf skljdfhaskjfhd lkjsdhflkasjhdf lkjhsdklfjha',
    techs: heetsLogosRow,
};

export {
    vpcDetails,
    heetsDetails,
    faqBotDetails,
    ageBotDetails,
};
