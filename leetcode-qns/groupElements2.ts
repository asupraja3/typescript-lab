type UserDetail2 = {
  user: number;
  duration: number;
  equipment: string[];
};

let Users_details2: UserDetail2[] = [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];

// 1. Create the container object
const resultObj: { [key: number]: UserDetail2 } = {};


Users_details2.forEach(element => {
    const userId = element.user;
    if (!resultObj[userId]) {
        resultObj[userId] = { user: userId, duration: 0, equipment: [] };
    }
    resultObj[userId].duration += element.duration;
    element.equipment.forEach(equip => {
        // const equ = equip;
        if (resultObj[userId].equipment.indexOf(equip) === -1) {
            resultObj[userId].equipment.push(equip);
        }
    });
    
})

console.log(Object.values(resultObj));