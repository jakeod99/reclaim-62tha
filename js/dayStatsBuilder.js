const dayStatsBuilder = (dayData) => {
  const anchor = document.getElementById('day-stats-anchor');
  const list = document.createElement('ul');
  list.setAttribute('class', 'day-stats-list');
  const common = dayData.commonStats;
  Object.keys(common).forEach(statKey => {
    const item = document.createElement('li');
    item.setAttribute('class', 'day-stats-list-item');
    item.textContent = `${common[statKey]} ${statKey}`;
    list.appendChild(item);
  });
  anchor.appendChild(list);
}

dayStatsBuilder(data.days.find(el => el.day === day));