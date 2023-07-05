function randomVGrade() {
  const grades = ['V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8'];
  return grades[Math.floor(Math.random() * grades.length)];
}

const routes = [
  { id: 1, name: 'Amphitheatre', wallId: 1, difficulty: randomVGrade() },
  { id: 2, name: 'Boulder', wallId: 1, difficulty: randomVGrade() },
  { id: 3, name: 'Slab', wallId: 1, difficulty: randomVGrade() },
  { id: 4, name: 'Overhang', wallId: 3, difficulty: randomVGrade() },
  { id: 5, name: 'Underbelly', wallId: 3, difficulty: randomVGrade() },
  { id: 6, name: 'Arch', wallId: 3, difficulty: randomVGrade() },
  { id: 7, name: 'Flatwall', wallId: 3, difficulty: randomVGrade() },
  // double the list
  { id: 8, name: 'Backwall', wallId: 2, difficulty: randomVGrade() },
  { id: 9, name: 'Ramp', wallId: 2, difficulty: randomVGrade() },
  { id: 10, name: 'Crack', wallId: 4, difficulty: randomVGrade() },
  { id: 11, name: 'Dihedral', wallId: 4, difficulty: randomVGrade() },
  { id: 12, name: 'Cave', wallId: 4, difficulty: randomVGrade() },
  { id: 13, name: 'Crimp', wallId: 4, difficulty: randomVGrade() },
  { id: 14, name: 'Slope', wallId: 2, difficulty: randomVGrade() },
];

export default routes;
