export default function decorate(block) {
  const rows = [...block.children].slice(1);

  const items = rows.map((row) => {
    const [label, link] = [...row.children].map((c) =>
      c.textContent.trim()
    );
    return { label, link };
  });

  // VERY IMPORTANT: default-content-wrapper > ul > li
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
