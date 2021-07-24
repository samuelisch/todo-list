import UI from './UI';

//FACTORY FUNCTION FOR PROJECTS
const CreateProject = (title) => {
    //initialise project array
    let taskList = [];

    //function to set title
    function setTitle(title) {
        this.title = title;
    };

    //adds tasks to current projectList
    function addTask(task) {
        taskList.push(task);
    };

    return {title, setTitle, taskList, addTask};
}

//ADD PROJECT
function addNewProject(name) {
    //create new instance of project
    const newProject = CreateProject(name);
    console.log(newProject);
    //add DOM elements through UI module
    UI.addProjectLink(name);
}

const projectModule = {
    CreateProject,
    addNewProject
}

export default projectModule;