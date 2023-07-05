import React from 'react';

function DashboardCards() {
  const areas = [
    {
      id: 1,
      name: 'Upstairs',
      walls: [
        {
          id: 1,
          name: 'Amphitheatre',
          routes: generateRoutes(4),
        },
        {
          id: 2,
          name: 'Cave',
          routes: generateRoutes(3),
        },
      ],
    },
    {
      id: 2,
      name: 'Downstairs',
      walls: [
        {
          id: 3,
          name: 'Wall 1',
          routes: generateRoutes(5),
        },
        {
          id: 4,
          name: 'Wall 2',
          routes: generateRoutes(2),
        },
      ],
    },
  ];

  // Function to generate random routes with names and V grades
  function generateRoutes(count) {
    const routes = [];
    const vGrades = ['V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8'];
    for (let i = 1; i <= count; i++) {
      const route = {
        id: i,
        name: `Route ${i}`,
        vGrade: vGrades[Math.floor(Math.random() * vGrades.length)],
      };
      routes.push(route);
    }
    return routes;
  }

  return (
    <div className='bg-gray-100 py-8 px-4 flex justify-center'>
      <div className='max-w-3xl space-y-4 grid gap-4 sm:grid-cols-2'>
        {areas.map((area) => (
          <div key={area.id} className='bg-white rounded-lg p-4'>
            <h2 className='text-xl font-bold mb-2'>{area.name}</h2>
            {area.walls.map((wall) => (
              <div key={wall.id} className='mb-2'>
                <h3 className='text-lg font-medium'>{wall.name}</h3>
                {wall.routes.map((route) => (
                  <p key={route.id} className='text-gray-600'>
                    {route.name} - {route.vGrade}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardCards;
