import { links } from '../data.ts';

export const Footer = () => {
  return (
    <footer className="border-t border-primary">
      <p className="text-center px-4 py-6 font-medium">
        Desenvolvido por Cristian Daniel, entre em contato:
      </p>
      <ul className="flex gap-6 justify-center px-4 pb-10">
        {links.map(link => (
          <li key={link.alt} className="text-white">
            <a
              href={link.url}
              target={link.url.endsWith('@gmail.com') ? '' : '_blank'}
            >
              <img src={link.img} alt={link.alt} width={50} height={50} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
