function showSection(activeId) {
    const quizSections = document.querySelectorAll("section.section-quiz");

    quizSections.forEach(section => {
        if (section.id === activeId) {
            section.classList.remove("hidden");
        } else {
            section.classList.add("hidden");
        }
    });
}
window.showSection = showSection;
