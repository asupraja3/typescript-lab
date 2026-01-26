
function groupFunction(details:UserDetail[]): Userdetail[] {

    const userMap: Map<number,UserDetail> = new Map()

    for (const detail of details){
        if (userMap.has(detail.user)){
            const existing = userMap.get(detail.user)!
            existing.duration+=detail.duration

            for(const equip of detail.equipment){
                if(!existing.equipment.includes(equip)){
                    existing.equipment.push(equip)
                }
                
            }

        } else{
            userMap.set(detail.user,detail)
        }
    }
    return Array.from(userMap.values())
}





type Userdetail= { user:number, duration:number, equipment:string[]}

let Usersdetails: UserDetail[] = [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] } ]


console.log(groupFunction(Usersdetails))


