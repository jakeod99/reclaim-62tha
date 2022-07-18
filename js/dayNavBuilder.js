const dayNavBuilder = (days, backToRoot = "") => {
  const anchor = document.getElementById('day-nav-anchor');
  const row = document.createElement('div');
  row.setAttribute('class', 'row');
  days.forEach(day => {
    const col = document.createElement('div');
    col.setAttribute('class', 'col');
    const dayLinkContainer = document.createElement('div');
    dayLinkContainer.setAttribute('class', 'day-nav-link-container');
    const dayLink = document.createElement('a');
    dayLink.setAttribute('class', 'day-nav-link')
    dayLink.href = `${backToRoot}days/${day.day}.html`;
    dayLink.textContent = day.display;
    dayLinkContainer.appendChild(dayLink);
    col.appendChild(dayLinkContainer);
    row.appendChild(col);
  });
  anchor.appendChild(row)
}

dayNavBuilder(data.days, backToRoot);