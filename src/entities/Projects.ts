import { ILogo } from './Logos';

export interface IProject {
    title: string;
    description: string;
    techs: ILogo[];
    images: string[];
    icon: string;
}

export enum IProjectTypeEnum {
    mainProject,
    otherProject,
    sideProject,
}
