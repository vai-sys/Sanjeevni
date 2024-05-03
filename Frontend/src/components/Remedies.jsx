



// import React from 'react';
// import herbsData from '../assets/db.json';

// const Remedies = () => {
//   const { common_herbs } = herbsData;

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Common Herbs and Their Benefits</h1>
//       <ul className="list-none mb-0">
//         {common_herbs.herbs.map((herb, index) => (
//           <li key={index} className="flex items-center mb-4">
//             <img src={herb.image} alt={herb.name} className="w-16 h-16 mr-4" />
//             <span className="text-lg font-bold">{herb.name}</span>
//             <span className="text-gray-600 ml-2">{herb.benefits}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );

// }

// export default Remedies;

import React from 'react';
import herbsData from '../assets/db.json';

const Remedies = () => {
  const { common_herbs } = herbsData;

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Common Herbs and Their Benefits</h1>
      <ul className="list-none mb-0">
        {common_herbs.herbs.map((herb, index) => (
          <li key={index} className="flex items-center mb-4">
            <img
              src={herb.image}
              alt={herb.name}
              className="w-16 h-16 mr-4 rounded-full"
            />
            <div className="flex justify-between flex-col">
              <span className="text-lg font-bold  mr-3">{herb.name}</span>
              
              <span className="text-gray-600">{herb.benefits}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Remedies;

// import React from 'react';
// import herbsData from '../assets/db.json';

// const Remedies = () => {
//   const { common_herbs } = herbsData;

//   return (
//     <div className="max-w-md mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Common Herbs and Their Benefits</h1>
//       <ul className="list-none mb-0">
//         {common_herbs.herbs.map((herb, index) => (
//           <li key={index} className="flex items-center mb-4">
//             <img
//               src={herb.image}
//               alt={herb.name}
//               className="w-16 h-16 mr-4 rounded-full"
//             />
//             <div className="flex-1">
//               <span className="text-lg font-bold">{herb.name}</span>
//               <span className="text-gray-600">{herb.benefits}</span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Remedies;



 