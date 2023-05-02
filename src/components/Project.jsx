import data from '../data.json';
import PropTypes from 'prop-types';

function Project({ project }) {
  const { name, resources } = project;
  const managerResource = resources.find((resource) => resource.roleId === 1);
  const manager = data.resources.find(
    (r) => r.id === managerResource.resourceId
  );

  return (
    <div>
      <h2>{name}</h2>
      <p>{manager.name}</p>
      <p>{data.roles.find((r) => r.id === managerResource.roleId).name}</p>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.object,
};

export default Project;
