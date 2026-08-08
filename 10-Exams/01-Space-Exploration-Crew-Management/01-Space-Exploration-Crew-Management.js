function solve(input) {
    let index = 0;
    let n = Number(input[index++]);

    let astronauts = {}; //object
    let result = [];

    for (let i = 0; i < n; i++) {
        let [name, section, skills] = input[index++].split(" ");
// index++ means:
// Use the current value of index, then increase it by 1.
// input[index] /input = 1
// index++;     /input = 2
// JavaScript assigns the values based on their positions:
// name     → "John"
// section  → "A1"
// skills   → "Java,Python,C++"

        astronauts[name] = {
            section: section,
            skills: new Set(skills.split(","))
        };
        //A Set is a collection that doesn't allow duplicate values.
    }

    while (input[index] !== "End") {
        let command = input[index++];
        let parts = command.split(" / ");
        let action = parts[0];

        if (action === "Perform") {
            let name = parts[1];
            let section = parts[2];
            let skill = parts[3];

            if (
                astronauts[name].section === section &&
                astronauts[name].skills.has(skill)
            ) {
                result.push(`${name} has successfully performed the skill: ${skill}!`);
            } else {
                result.push(`${name} cannot perform the skill: ${skill}.`);
            }

        } else if (action === "Transfer") {
            let name = parts[1];
            let newSection = parts[2];

            astronauts[name].section = newSection;

            result.push(`${name} has been transferred to: ${newSection}`);

        } else if (action === "Learn Skill") {
            let name = parts[1];
            let newSkill = parts[2];

            if (astronauts[name].skills.has(newSkill)) {
                result.push(`${name} already knows the skill: ${newSkill}.`);
            } else {
                astronauts[name].skills.add(newSkill);
                result.push(`${name} has learned a new skill: ${newSkill}.`);
            }
            // Array → push 
            // Set   → add 
        }
    }

    for (let name in astronauts) {
        let skills = Array.from(astronauts[name].skills)
            .sort()
            .join(", ");
            // Go through every property/key in the astronauts object. 
            // Array.from() converts the Set into an array, so we can use join, sort.. 
            // Take the astronaut's Set of skills → convert it to an array → sort it alphabetically → turn it into a comma-separated string.
        
            result.push(
            `Astronaut: ${name}, Section: ${astronauts[name].section}, Skills: ${skills}`
        );
    }

    console.log(result.join("\n"));
}