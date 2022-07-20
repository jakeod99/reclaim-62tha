const overallProgressBuilder = (data) => {
  const anchor = document.getElementById('overall-progress-anchor');
  data.sections.forEach(section => {
    const section = document.createElement('div');
    section.textContent = sectionProgress.section + " " + sectionProgress.currentProgress
    anchor.appendChild(section);
  });
}

overallProgressBuilder(data);

/*
<div class="overall-progress-bar-title">hey</div>
<div class="progress overall-progress-bar">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
</div>
*/