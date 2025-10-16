function playWord(audioPath) {
    var audio = new Audio(audioPath);
    audio.play().catch(function(error) {
        console.error("Playback error:", error);
    });
}