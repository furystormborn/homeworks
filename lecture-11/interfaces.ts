import { TaskStatus } from "./enums";

export interface IPerson {
    name: string;
    age: number;
    experience: number;
}

export interface ITask {
    id: number,
    title: string;
    status: TaskStatus
    createdBy?: string;
    doneBy?: string;
}

export interface IClientData {
    projectName: string,
    technologyStack: string[]
    tasks: string[]
}