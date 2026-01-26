
interface Ticket  {
    id: number;
  category: string;
  status: string;
  priority: number;
}

let jSON = `[
  {"id": 1, "category": "Hardware", "status": "open", "priority": 1},
  {"id": 2, "category": "Software", "status": "closed", "priority": 3},
  {"id": 3, "category": "Hardware", "status": "closed", "priority": 2},
  {"id": 4, "category": "Software", "status": "open", "priority": 2},
  {"id": 5, "category": "Network", "status": "open", "priority": 1}
]`

let tickets: Ticket[]= JSON.parse(jSON)

let stat: Ticket[] = tickets.filter(t=>t.status==='open')
// console.log(tickets)
console.log(stat.length) // Output: 3


let groupedTickets: {[key:string]: Ticket[]} = {}

tickets.forEach(ticket => {
    const cat = ticket.category
    if(!groupedTickets[cat]){
        groupedTickets[cat] = []
    }else{
        groupedTickets[cat].push(ticket)
    }
    
});

console.log(groupedTickets)

