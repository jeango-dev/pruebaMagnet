import data from './data.json';
import './App.css';
import Project from './components/Project';

function App() {
  // console.log(data.projects);

  // console.log(elementos);

  // useEffect(() => {
  // const elementos = data.projects.map((element) => {
  //   const elemento = data.roles.find((rol) => rol.id === element.id);
  //   return elemento.name;
  // });
  // console.log(elementos);
  // }, []);

  // const roles = data.roles.find((rol) => rol === data.roles.id);
  // console.log(roles);

  return (
    <>
      <h1>Prueba Magnet</h1>
      <ul>
        {data.projects?.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
    </>
  );
}

export default App;
