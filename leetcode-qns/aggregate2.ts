type ProjectTask = {
  projectId: string;
  projectName: string;
  member: string;
  hours: number;
  taskType: 'Development' | 'Design' | 'Testing';
};

const tasks: ProjectTask[] = [
  { projectId: 'P1', projectName: 'Alpha', member: 'Alice', hours: 10, taskType: 'Development' },
  { projectId: 'P2', projectName: 'Beta', member: 'Bob', hours: 5, taskType: 'Design' },
  { projectId: 'P1', projectName: 'Alpha', member: 'Charlie', hours: 20, taskType: 'Testing' },
  { projectId: 'P1', projectName: 'Alpha', member: 'Alice', hours: 5, taskType: 'Development' },
  { projectId: 'P2', projectName: 'Beta', member: 'Alice', hours: 15, taskType: 'Development' },
  { projectId: 'P3', projectName: 'Gamma', member: 'David', hours: 40, taskType: 'Development' },
];

let projMap: {[key:string]:any} = {}

tasks.forEach(tsk => {
  const { projectId, projectName, member, hours, taskType } = tsk;
  if(!projMap[tsk.projectId]){
    projMap[projectId] = {
      projectId: projectId,
      projectName: projectName,
      totalHours: 0,
      members: [],
      taskTypes: new Set<string>()
    };
  }
  
});