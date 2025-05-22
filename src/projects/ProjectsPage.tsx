
import { MOCK_PROJECTS } from "./MockProjects";
import ProjectList from './ProjectList';

function ProjetsPage(){
  return (
   <>
     <h1>Projects</h1>
    <ProjectList projects={MOCK_PROJECTS} />
   </>
  );
}

export default ProjetsPage;