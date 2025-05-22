
import { MOCK_PROJECTS } from "./MockProjects";

function ProjetsPage(){
  return (
   <>
     <h1>Projects</h1>
    <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
   </>
  );
}

export default ProjetsPage;