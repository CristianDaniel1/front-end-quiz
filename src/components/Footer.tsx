import { links } from '../data.ts';

export const Footer = () => {
  return (
    <footer className="border-t border-primary px-4 sm:px-6">
      <p className="text-center py-8 font-medium">
        Desenvolvido por <span className="text-sky-400">Cristian Daniel</span>,
        entre em contato:
      </p>
      <ul className="flex gap-6 justify-center pb-10">
        {links.map(link => (
          <li key={link.alt}>
            <a
              href={link.url}
              target={link.url.endsWith('@gmail.com') ? '' : '_blank'}
            >
              <img
                src={link.img}
                alt={link.alt}
                width={50}
                height={50}
                className="w-10 sm:w-[50px]"
              />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
