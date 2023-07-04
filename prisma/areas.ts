export const areas = [
  {
    name: 'Upstairs',
    location: 'Second floor',
    description: 'Upstairs climbing area',
  },
  {
    name: 'Downstairs',
    location: 'First Floor',
    description: 'Downstairs climbing area',
  },
];

const insertStatements = areas.map((area) => {
  return `INSERT INTO areas (name, location, description) VALUES ('${area.name}', '${area.location}', '${area.description}');`;
});

console.log(insertStatements.join('\n'));
