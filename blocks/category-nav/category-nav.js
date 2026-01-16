export default function decorate(block) {
  const rows = [...block.children].slice(1);

  const items = rows.map((row) => {
    const cells = [...row.children];
    const label = cells[0]?.textContent.trim();
    const link = cells[1]?.textContent.trim();

    return { label, link };
  });

  const wrapper = document.createElement('div');
  wrapper.className = 'default-content-wrapper';

  const ul = document.createElement('ul');

  items.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${item.link}">${item.label}</a>`;
    ul.appendChild(li);
  });

  wrapper.appendChild(ul);
  block.replaceWith(wrapper);
}
