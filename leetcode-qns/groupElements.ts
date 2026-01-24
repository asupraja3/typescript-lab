

//Group the user details based on user id by Summming up the duration and merging the 
// equipment used
function groupUserDetails(details: UserDetail[]): UserDetail[] {

    // Create a map to hold grouped user details
    const userMap: Map<number, UserDetail> = new Map();
    for (const detail of details) {
        // Check if the user already exists in the map
        if (userMap.has(detail.user)) {
            // Update existing user details
            const existingDetail = userMap.get(detail.user)!;
            // Sum up the duration and merge equipment arrays
            existingDetail.duration += detail.duration;
            // Alternative way to merge equipment arrays without duplicates
            for (const item of detail.equipment) {
                if (!existingDetail.equipment.includes(item)) {
                    existingDetail.equipment.push(item);
                }
            }

        } else {
            userMap.set(detail.user, {
            user: detail.user,
            duration: detail.duration,
            equipment: detail.equipment 
        });

        }
    }
    // Convert the map values back to an array
    return Array.from(userMap.values());
}

type UserDetail = {
  user: number;
  duration: number;
  equipment: string[];
};
let Users_details: UserDetail[] = [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] }, ]


console.log(groupUserDetails(Users_details));
// Output:
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 7, duration: 450, equipment: ['dumbbell', 'bike', 'kettlebell'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 2, duration: 400, equipment: ['treadmill', 'bike'] }
// ]