export default function NavbarButton({ text, pageId }) {
  return (
    <>
      <a
        href={`#${pageId}`}
        className="
          text-base 
          uppercase 
          text-white
          py-1.5 px-2
          cursor-pointer transition-all 
          hover:bg-white/10 hover:backdrop-blur-lg hover:rounded-lg 
          hover:border-white/20 hover:shadow-xl hover:-translate-y-0.5
          active:translate-y-0.5
        ">
        {text}
      </a>
    </>
  );
}
