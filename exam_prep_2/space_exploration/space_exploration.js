function spaceCrewManager(input) {
    const n = Number(input.shift());
    const astronauts = {};

    for (let i = 0; i < n; i++) {
        const [name, section, skillsRaw] = input[i].split(' ');
        const skills = skillsRaw.split(',');
        astronauts[name] = {
            section: section,
            skills: new Set(skills)
        };
    }

    for (let i = n; i < input.length; i++) {
        if (input[i] === 'End') break;

        const [command, name, param1, param2] = input[i].split(' / ');

        if (command === 'Perform') {
            const section = param1;
            const skill = param2;

            if (
                astronauts[name].section === section &&
                astronauts[name].skills.has(skill)
            ) {
                console.log(`${name} has successfully performed the skill: ${skill}!`);
            } else {
                console.log(`${name} cannot perform the skill: ${skill}.`);
            }

        } else if (command === 'Transfer') {
            const newSection = param1;
            astronauts[name].section = newSection;
            console.log(`${name} has been transferred to: ${newSection}`);

        } else if (command === 'Learn Skill') {
            const newSkill = param1;
            if (astronauts[name].skills.has(newSkill)) {
                console.log(`${name} already knows the skill: ${newSkill}.`);
            } else {
                astronauts[name].skills.add(newSkill);
                console.log(`${name} has learned a new skill: ${newSkill}.`);
            }
        }
    }

    for (const [name, info] of Object.entries(astronauts)) {
        const sortedSkills = [...info.skills].sort((a, b) => a.localeCompare(b));
        console.log(`Astronaut: ${name}, Section: ${info.section}, Skills: ${sortedSkills.join(', ')}`);
    }
}


spaceCrewManager(
    [
        "2",
        "Alice command_module piloting, communications",
        "Bob engineering_bay repair, maintenance",
        "Perform / Alice / command_module / piloting",
        "Perform / Bob / command_module / repair",
        "Learn Skill / Alice / navigation",
        "Perform / Alice / command_module / navigation",
        "Transfer / Bob / command_module",
        "Perform / Bob / command_module / maintenance",
        "End"
    ]
);
