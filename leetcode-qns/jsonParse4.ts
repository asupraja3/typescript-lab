
interface Shipment {
    trackingId: string;
    status: 'In Transit' | 'Delivered' | 'Delayed';
    location: string;
    weight: number; // in kg
    lastUpdatedHoursAgo: number; 
}

let shipmentJSON = `[
    {"trackingId": "S1", "status": "In Transit", "location": "New York", "weight": 50, "lastUpdatedHoursAgo": 2},
    {"trackingId": "S2", "status": "Delayed", "location": "Chicago", "weight": 10, "lastUpdatedHoursAgo": 24},
    {"trackingId": "S3", "status": "Delivered", "location": "Austin", "weight": 5, "lastUpdatedHoursAgo": 48},
    {"trackingId": "S4", "status": "In Transit", "location": "New York", "weight": 120, "lastUpdatedHoursAgo": 1},
    {"trackingId": "S5", "status": "Delayed", "location": "Miami", "weight": 80, "lastUpdatedHoursAgo": 36}
]`;

let shipments:Shipment[] = JSON.parse(shipmentJSON)
// 1. ACTION: Flag "Critical Delays"

let critical:Shipment[]= shipments.filter(sh=>(sh.status == "Delayed" || sh.lastUpdatedHoursAgo > 24 ))

// 2. ACTION: Calculate Total Weight by Location for "In Transit" items
let smap:{[key:string]: number} = {}
shipments.forEach(ship=>{
    const loc = ship.location
    if(ship.status==="In Transit"){
        if(!smap[loc]){
            smap[loc] = 0 
        }
        smap[loc]+=ship.weight

    }
})

console.log(smap)

// 3. ACTION: Data Transformation (Formatting for a UI Notification)
// Create a list of strings that will be displayed in a "Alert" widget.

let alert1: string[] = []

critical.forEach(crit=>{
    alert1.push(`This shipment${crit.trackingId} is delayed`)
})

console.log(alert1)