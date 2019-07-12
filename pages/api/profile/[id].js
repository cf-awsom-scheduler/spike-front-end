import { teachers } from '../../../data';

export default ({ query: { id } }, res) => {
  const filtered = teachers.filter(request => request.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `User with id: ${id} not found.` });
  }
};
