
function findDuplicate(nums: number[]): number{
    
    //Sort the numbers
    nums.sort()
    for(let i=0;i<nums.length-1;i++){
        if (nums[i] === nums[i+1]){
            return nums[i]
        }
    }
    return -1
}

let nums1:number[] = [3,1,3,4,2]
console.log(findDuplicate(nums1))