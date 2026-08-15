function solve(input) {
    let index = 0;
    let n = Number(input[index++]);

    let guild = {};
    let result = [];

    for (let i = 0; i < n; i++) {
        let [name, role, skills] = input[index++].split(" ");

        guild[name] = {
            role: role,
            skills: new Set(skills.split(","))
        };
    }

    while (input[index] !== "End") {
        let command = input[index++];
        let parts = command.split(" / ");
        let action = parts[0];

        if (action === "Perform") {
            let name = parts[1];
            let role = parts[2];
            let skill = parts[3];

            if (
                guild[name].role === role &&
                guild[name].skills.has(skill)
            ) {
                result.push(
                    `${name} has successfully performed the skill: ${skill}!`
                );
            } else {
                result.push(
                    `${name} cannot perform the skill: ${skill}.`
                );
            }

        } else if (action === "Reassign") {
            let name = parts[1];
            let newRole = parts[2];

            guild[name].role = newRole;

            result.push(
                `${name} has been reassigned to: ${newRole}`
            );

        } else if (action === "Learn Skill") {
            let name = parts[1];
            let newSkill = parts[2];

            if (guild[name].skills.has(newSkill)) {
                result.push(
                    `${name} already knows the skill: ${newSkill}.`
                );
            } else {
                guild[name].skills.add(newSkill);

                result.push(
                    `${name} has learned a new skill: ${newSkill}.`
                );
            }
        }
    }

    for (let name in guild) {
        let skills = Array.from(guild[name].skills)
            .sort()
            .join(", ");

        result.push(
            `Guild Member: ${name}, Role: ${guild[name].role}, Skills: ${skills}`
        );
    }

    console.log(result.join("\n"));
}