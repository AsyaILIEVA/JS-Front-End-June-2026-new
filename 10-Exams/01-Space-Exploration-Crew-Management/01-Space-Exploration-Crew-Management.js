function solve(input) {
    let index = 0;
    let n = Number(input[index++]);

    let astronauts = {};
    let result = [];

    for (let i = 0; i < n; i++) {
        let [name, section, skills] = input[index++].split(" ");

        astronauts[name] = {
            section: section,
            skills: new Set(skills.split(","))
        };
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
        }
    }

    for (let name in astronauts) {
        let skills = Array.from(astronauts[name].skills)
            .sort()
            .join(", ");

        result.push(
            `Astronaut: ${name}, Section: ${astronauts[name].section}, Skills: ${skills}`
        );
    }

    console.log(result.join("\n"));
}