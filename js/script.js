// Array of prewritten words
const words = [
    "Friend", "Buddy", "Pal", "Companion", "Sibling", "Bestie", "Mate",
    "Chum", "Confidant", "Amigo", "Sidekick", "Ally", "Homie", "Comrade",
    "BFF", "Cohort", "Soulmate", "Partner-in-crime",
    "Confidante", "Kindred spirit",
    "Bae", "Bro", "Sister", "Homie", "Partner", "Playmate",
    "Fellow", "Acquaintance", "Alter ego", "Blood brother", "Pen pal",
    "Classmate", "Roommate", "Teammate", "Wingman", "Supporter",
    "Beloved", "Neighbor", "Cousin"
];

// Create an Audio object with the audio file path
const audio = new Audio("Aud/aud.wav");

// Function to change the word and apply a random class every 300 milliseconds
function changeWord() {
    const wordElement = document.getElementById("word");
    let currentIndex = 0;

    // Function to play the audio
    function playAudio() {
        if (audio.volume !== 0) {
            audio.play();
        }
    }

    function toggleSound() {
        if (audio.volume === 0) {
            audio.volume = 1; // Unmute the audio
        } else {
            audio.volume = 0; // Mute the audio
        }
    }
    setInterval(() => {
        const word = words[currentIndex];
        wordElement.textContent = word;

        // Remove the previously applied class
        wordElement.className = "";
        document.addEventListener("click", () => {
            playAudio();
            toggleSound();
        });

        // Generate a random number between 1 and 20 to select a random class
        const randomClassNumber = Math.floor(Math.random() * 20) + 1;
        wordElement.classList.add(`w${randomClassNumber}`);

        // Play the audio every 300ms
        playAudio();

        currentIndex = (currentIndex + 1) % words.length;
    }, 300); // Updated time to 300 milliseconds
}

// Start changing the word on page load
changeWord();
