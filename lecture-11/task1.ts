import { Developer, DevOpsDeveloper, ProjectManager, QualityAssuranceEngineer, BusinessAnalyst, BackendDeveloper, Team, FrontendDeveloper, Task } from './classes';
import { IClientData } from './interfaces';

const clientData: IClientData = {
    projectName: 'Web App Chat v2.0',
    technologyStack: ['React', 'NestJs', 'Docker'],
    tasks: [
      'create FE side',
      'create BE side',
      'Deploy to the server',
      'Configurate environment'
    ]
}




const team = new Team(
    [
        new BackendDeveloper({name: 'Alex', age: 21, experience: 3}),
        new FrontendDeveloper({name: 'Mitya', age: 21, experience: 2}),
        new DevOpsDeveloper({name: 'Max', age: 33, experience: 5}),
        new QualityAssuranceEngineer({name: 'Stas', age: 33, experience: 5}),
        new ProjectManager({name: 'Leo', age: 33, experience: 4}),
        new BusinessAnalyst({name: 'Natalia', age: 25, experience: 1}),
    ]
);

team.work(clientData);


  