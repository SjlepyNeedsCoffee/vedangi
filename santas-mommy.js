function secretSanta(names) {
    const givers = [...names];
    const receivers = [...names];

    // Shuffle the receivers list
    receivers.sort(() => Math.random() - 0.5);

    const pairs = {};
    let attempts = 0;

    // Ensure no one gets their own name
    while (attempts < 1000) {
        let valid = true;

        for (let i = 0; i < givers.length; i++) {
            if (givers[i] === receivers[i]) {
                valid = false;
                break;
            }
        }

        if (valid) {
            // Assign pairs
            for (let i = 0; i < givers.length; i++) {
                pairs[givers[i]] = receivers[i];
            }
            return pairs;
        }

        // Shuffle again if invalid
        receivers.sort(() => Math.random() - 0.5);
        attempts++;
    }

    throw new Error("Couldn't generate valid Secret Santa assignments after many attempts.");
}

// List of names
const names = [
    "Kabeer", "Arshpreet", "Hritaxhi", "Reyna", "Zineerah", "Nidhi", "Barkha",
    "Shree", "Paulomi", "Ray", "Pratham", "Isha", "Seeya", "Nikita",
    "Sunishka", "Deeya", "Alisha", "Shaina", "Siddhi D", "Tanishka"
];

// Generate Secret Santa assignments
try {
    const assignments = secretSanta(names);

    // Output the complete list of "Who got who"
    console.log("Secret Santa assignments:");
    for (const [giver, receiver] of Object.entries(assignments)) {
        console.log(`${giver} got ${receiver}`);
    }
} catch (error) {
    console.error(error.message);
}
