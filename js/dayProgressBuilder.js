const dayProgressBuilder = (progress) => {
  const anchor = document.getElementById('day-progress-anchor');
  progress.forEach(section => {
    const sectionTitle = document.createElement('div');
    sectionTitle.setAttribute('class', 'day-progress-bar-title');
    sectionTitle.textContent = section.section;
    anchor.appendChild(sectionTitle);

    const sectionProgressContainer = document.createElement('div');
    sectionProgressContainer.setAttribute('class', 'progress day-progress-bar')
    if (section.from > 0) {
      const fromBar = document.createElement('div');
      fromBar.setAttribute('class', 'progress-bar');
      fromBar.setAttribute('role', 'progressbar');
      fromBar.setAttribute('style', `width: ${section.from}%;`);
      fromBar.setAttribute('aria-valuenow', `${section.from}`);
      fromBar.setAttribute('aria-valuemin', "0");
      fromBar.setAttribute('aria-valuemax', "100");
      sectionProgressContainer.appendChild(fromBar);
    }
    if (section.to > 0) {
      const difference = section.to - section.from;
      const toBar = document.createElement('div');
      toBar.setAttribute('class', 'progress-bar bg-success');
      toBar.setAttribute('role', 'progressbar');
      toBar.setAttribute('style', `width: ${difference}%;`);
      toBar.setAttribute('aria-valuenow', `${difference}`);
      toBar.setAttribute('aria-valuemin', "0");
      toBar.setAttribute('aria-valuemax', "100");
      toBar.textContent = `${difference}%`;
      sectionProgressContainer.appendChild(toBar);
    }
    anchor.appendChild(sectionProgressContainer);
    
    const sectionTotal = document.createElement('div');
    sectionTotal.setAttribute('class', 'day-progress-bar-total')
    sectionTotal.textContent = `Total Progress: ${section.to}%`;
    anchor.appendChild(sectionTotal);
  });
}

dayProgressBuilder(data.days.find(el => el.day === day).progress);