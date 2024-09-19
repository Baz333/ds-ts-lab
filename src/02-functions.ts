import { Friend, Colleague, EmailContact } from "./myTypes";
import { colleagues, friends } from "./01-basics";

function older(f: Friend) {
    f.age += 1
    return `${f.name} is now ${f.age}`
}

// console.log(older(friends[0]))

function allOlder(friends: Friend[]) {
    const array: string[] = [];
    friends.forEach(friend => {
        array.push(older(friend));
    });
    return array;
}

// console.log(allOlder(friends))

function highestExtension(cs: Colleague[]) {
    const result = cs.sort(
        (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}

// console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name: string, dept: string, email: string) {
    const newColleague = {
        name: name,
        department: dept,
        contact: {
            email: email,
            extension: highestExtension(cs).contact.extension + 1,
        },
    }
    cs.push(newColleague);
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
// console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
    const sorted = colleagues.sort(sorter);
    const result: EmailContact[] = sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
    return result;
}

// console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
// console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

function findFriends(
    friends: Friend[],
    filter: (friend: Friend) => boolean
): string[] {
    const filtered = friends.filter(filter);
    const result: string[] = filtered.map((friend) => (friend.name))
    return result;
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));