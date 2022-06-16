window.addEventListener("keydown", (e) => {
    
    if (e.key === "a" || e.key === "s" || e.key === "d" || e.key === "f") {
    const audio = new Audio (`${e.key}.wav`);
    console.log(audio);
    audio.play();
    }
});

