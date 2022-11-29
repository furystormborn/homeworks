import { TaskStatus } from './enums';
import { IClientData, IPerson, ITask } from './interfaces';

export abstract class Person implements IPerson {
    name: string;
    age: number;
    experience: number;
    
    constructor(person: IPerson) {
        this.name = person.name;
        this.age = person.age;
        this.experience = person.experience;
    }

    createTask(taskID: number, info: string): Task {
            return new Task(
                {
                    id: taskID,
                    title: info,
                    status: TaskStatus.TO_DO
                }
            )
    }

    abstract work(task: Task): Task
    
}

export class Developer extends Person {
    protected technologyStack: string[] = [];

    constructor(person: IPerson, tech: string[] = []) {
        super(person);
        this.technologyStack = tech;
    }
    public work(task: Task): Task {
        console.log(`Developing - ${task.id} - ${task.title}`);
        task.changeStatus(TaskStatus.QA);
        return task;
    }
}

export class BackendDeveloper extends Developer {

    public work(task: Task): Task {
        console.log(`FE Developing - ${task.id} - ${task.title}`);
        task.changeStatus(TaskStatus.QA);
        return task;
    }
}

export class FrontendDeveloper extends Developer {
    public work(task: Task): Task {
        console.log(`BE Developing - ${task.id} - ${task.title}`);
        task.changeStatus(TaskStatus.QA);
        return task;
    }
}

export class DevOpsDeveloper extends Developer {
    public work(task: Task): Task {
        console.log(`DEVOPS Developing - ${task.id} - ${task.title}`);
        task.changeStatus(TaskStatus.QA);
        return task;
    }
}

export class QualityAssuranceEngineer extends Developer {
    public work(task: Task): Task {
        console.log(`Testing - ${task.id} - ${task.title}`);
        task.changeStatus(TaskStatus.DONE);
        return task;
    }
}

export class ProjectManager extends Person {
    public work(task: Task): Task {
        console.log(`Doing some work on - ${task.id} - ${task.title}`);
        task.changeStatus(TaskStatus.IN_PROGRESS);
        return task;
    }
}

export class BusinessAnalyst extends Person {

    public work(task: Task): Task {
        console.log(`Creating task in backlog - ${task.id} - ${task.title}`);
        task.changeStatus(TaskStatus.TO_DO);
        return task;
    }

    public manage(clientTasks: string[]): Task[] {
        let tasks: Task[] = [];
        clientTasks.forEach((el, index) => {
            let createdTask: Task = this.createTask(index+1, el);
            createdTask = this.work(createdTask);
            tasks.push(createdTask);
        });

        return tasks;
    }
}

type ValidTeamMember = BackendDeveloper | DevOpsDeveloper | FrontendDeveloper | QualityAssuranceEngineer | ProjectManager | BusinessAnalyst;

export class Team {
    teamMembers: {[key: string]: ValidTeamMember[] } = {
        BackendDeveloper: [],
        FrontendDeveloper: [],
        DevOpsDeveloper: [],
        QualityAssuranceEngineer: [],
        ProjectManager: [],
        BusinessAnalyst: []
    }

    tasks: Task[] = [];

    constructor(members: Person[]) {
        members.forEach((el) => {
            const instanceName = el.constructor.name;

            if(this.teamMembers[instanceName]) {
                this.teamMembers[instanceName].push(el);
            }
        });
    }

    public work(clientData: IClientData) {
        const ba = this.teamMembers.BusinessAnalyst[0];
        if(ba && ba instanceof BusinessAnalyst) {
            this.tasks = ba.manage(clientData.tasks);
        }

        const pm = this.teamMembers.ProjectManager[0];
        const bedev = this.teamMembers.BackendDeveloper[0];
        const fedev = this.teamMembers.FrontendDeveloper[0];
        const devops = this.teamMembers.DevOpsDeveloper[0];
        const qa = this.teamMembers.QualityAssuranceEngineer[0];

        this.tasks = this.tasks.map((task) => {
            if(task.status === TaskStatus.TO_DO) {
                task = pm.work(task)
            }
            if(task.status === TaskStatus.IN_PROGRESS) {
                let rand = Math.floor(Math.random() * 3) + 1;
                switch(rand) {
                    case 1:
                        task = bedev.work(task);
                        break;
                    case 2: 
                        task = fedev.work(task);
                        break;
                    case 3:
                        task = devops.work(task);
                        break;
                    default:
                        task = devops.work(task);
                }
            }
            if(task.status === TaskStatus.QA) {
                task = qa.work(task)
            }

            return task;
        }

           
        );
        

        console.log( `Project ${clientData.projectName} is done!` );
        
    }
}

export class Task implements ITask {
    id: number;
    title: string;
    status: TaskStatus;

    constructor(task: ITask) {
        this.id = task.id;
        this.title = task.title;
        this.status = task.status;
    }

    changeStatus(status: TaskStatus) {
        this.status = status;
    }

}