function secretSanta(names) {
    // Shuffle the names
    const shuffled = [...names].sort(() => Math.random() - 0.5);
    const pairs = {};

    let attempts = 0;
    while (attempts < 1000) {
        for (let i = 0; i < shuffled.length; i++) {
            pairs[shuffled[i]] = shuffled[(i + 1) % shuffled.length];
        }

        // Check for reverse pairs
        let reversePairs = 0;
        for (const giver in pairs) {
            const receiver = pairs[giver];
            if (pairs[receiver] === giver) reversePairs++;
        }

        if (reversePairs <= 2) {
            return pairs;
        }

        // Retry if too many reverse pairs
        shuffled.sort(() => Math.random() - 0.5);
        attempts++;
    }

    throw new Error("Couldn't generate Secret Santa assignments within constraints.");
}

// List of names
const names = [
    "Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace",
    "Hank", "Ivy", "Jack", "Karen", "Leo", "Mona", "Nick",
    "Olivia", "Paul", "Quinn", "Rita", "Steve", "Tina"
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
