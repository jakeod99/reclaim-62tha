const overallProgressBuilder = (overallProgress) => {
  const anchor = document.getElementById('overall-progress-anchor');
  overallProgress.forEach(sectionProgress => {
    const section = document.createElement('div');
    section.textContent = sectionProgress.section + " " + sectionProgress.currentProgress
    anchor.appendChild(section);
  });
}

overallProgressBuilder(overallProgress);