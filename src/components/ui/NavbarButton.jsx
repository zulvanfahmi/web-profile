
export default function NavbarButton({text}) {
  return (

      <button 
      className='text-base hover:rounded-lg hover:backdrop-blur-lg hover:bg-white/10 hover:border-white/20 hover:shadow-xl uppercase space-x-0.5 text-white transition-all cursor-pointer py-2.5 px-3 hover:-translate-y-0.5 active:translate-y-0.5'>
        {text}
      </button>

  );
}

