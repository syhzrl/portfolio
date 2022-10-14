import { ILogo } from './Logos';

export interface IProject {
    title: string;
    description: string;
    techs: ILogo[];
    images: string[];
}

export enum IProjectTypeEnum {
    mainProject,
    otherProject,
    sideProject,
}
