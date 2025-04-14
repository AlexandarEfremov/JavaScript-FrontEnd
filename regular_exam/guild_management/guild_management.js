function solve(input) {
    let n = parseInt(input[0]);
    let guild = {};

    for (let i = 1; i <= n; i++) {
        let [name, role, skills] = input[i].split(' ');
        guild[name] = {
            role: role,
            skills: skills.split(',')
        };
    }

    let commandIndex = n + 1;
    while (input[commandIndex] !== 'End') {
        let command = input[commandIndex];
        let [action, ...params] = command.split(' / ');

        switch (action) {
            case 'Perform':
                let [performName, performRole, performSkill] = params;
                if (guild[performName].role === performRole && guild[performName].skills.includes(performSkill)) {
                    console.log(`${performName} has successfully performed the skill: ${performSkill}!`);
                } else {
                    console.log(`${performName} cannot perform the skill: ${performSkill}.`);
                }
                break;

            case 'Reassign':
                let [reassignName, newRole] = params;
                guild[reassignName].role = newRole;
                console.log(`${reassignName} has been reassigned to: ${newRole}`);
                break;

            case 'Learn Skill':
                let [learnName, newSkill] = params;
                if (guild[learnName].skills.includes(newSkill)) {
                    console.log(`${learnName} already knows the skill: ${newSkill}.`);
                } else {
                    guild[learnName].skills.push(newSkill);
                    console.log(`${learnName} has learned a new skill: ${newSkill}.`);
                }
                break;
        }

        commandIndex++;
    }

    Object.keys(guild).forEach(name => {
        let { role, skills } = guild[name];
        skills.sort();
        console.log(`Guild Member: ${name}, Role: ${role}, Skills: ${skills.join(', ')}`);
    });
}

solve(
    [
        "4",
        "Lancelot knight jousting,swordplay",
        "Morgana sorceress dark_magic,illusion",
        "Robin archer archery,stealth",
        "Galahad paladin healing,swordplay",
        "Perform / Robin / archer / archery",
        "Perform / Morgana / knight / illusion",
        "Learn Skill / Lancelot / swordplay",
        "Learn Skill / Robin / tracking",
        "Learn Skill / Robin / tracking",
        "Reassign / Galahad / warrior",
        "Perform / Galahad / warrior / healing",
        "Reassign / Galahad / healer",
        "Perform / Galahad / healer / healing",
        "End"
    ]
)