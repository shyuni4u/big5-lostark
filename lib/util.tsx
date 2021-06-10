import React from 'react';

export const Util = {
  test: 'test'
};

// const parseRange = (val: number) => {
//   if (val >= 1 && val < 3) return 1;
//   if (val == 3) return 3;
//   if (val > 3 && val <= 5) return 5;
//   return 0;
// };

// const gr = (max: number, min: number) => {
//   return Math.round(Math.random() * (max - min) + min);
// };
// const listLength = GameClassInfo.length - 1;
// for (let n = 0; n < 200; n++) {
//   const _selectedClass = GameClassInfo[gr(listLength, 0)];
//   const _selectedTalent = _selectedClass.talents[gr(_selectedClass.talents.length - 1, 0)];
//   console.log(
//     `INSERT INTO TB_RESULT VALUES ('${_selectedClass.name}', '${_selectedTalent.name}', '${gr(5, 1)}${gr(5, 1)}${gr(5, 1)}${gr(5, 1)}${gr(5, 1)}${gr(5, 1)}${gr(5, 1)}${gr(
//       5,
//       1
//     )}${gr(5, 1)}${gr(5, 1)}${gr(5, 1)}${gr(5, 1)}', ${parseRange((((gr(5, 1) + gr(5, 1) + gr(5, 1)) / 3) * 100) / 100)}, ${parseRange(
//       (((gr(5, 1) + gr(5, 1)) / 2) * 100) / 100
//     )}, ${parseRange((((gr(5, 1) + gr(5, 1)) / 2) * 100) / 100)}, ${parseRange((((gr(5, 1) + gr(5, 1) + gr(5, 1)) / 3) * 100) / 100)}, ${parseRange(
//       (((gr(5, 1) + gr(5, 1)) / 2) * 100) / 100
//     )}, NOW());`
//   );
// }

export default Util;
