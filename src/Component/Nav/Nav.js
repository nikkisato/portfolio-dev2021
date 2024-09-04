const navMenu = [
  // { name: 'Home', link: '#hero' },
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

function Nav() {
  return (
    <nav className="justify-center w-full bg-gray-800 p-4">
      <ul className="flex gap-4 justify-center">
        {navMenu.map((menu) => {
          return (
            <li
              className="mx-3 text-lg font-semibold"
              key={menu.name}
            >
              <a
                href={menu.link}
                className="text-white hover:text-gray-300"
              >
                {menu.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
