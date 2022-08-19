import firstLoad from "./modules/domControl";
import cancelButtons from "./modules/cancelButtons";
import { confirmProject } from "./modules/confirmProject";
import confirmTask from "./modules/confirmTask";

firstLoad();

const defaultProject = { name: "default", tasks: [] };
const projectList = [defaultProject];

cancelButtons();
confirmProject(projectList);
confirmTask(projectList);
