export default function decorate(block) {
  const rows = [...block.children].slice(1);

  const items = rows.map((row) => {
    const [label, link] = [...row.children].map((cell) =>
      cell.textContent.trim(),
    );
    return { label, link };
  });

  const wrapper = document.createElement('div');
  wrapper.className = 'default-content-wrapper';

  const ul = document.createElement('ul');

  items.forEach(({ label, link }) => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link}">${label}</a>`;
    ul.appendChild(li);
  });

  wrapper.appendChild(ul);
  block.replaceWith(wrapper);
}
