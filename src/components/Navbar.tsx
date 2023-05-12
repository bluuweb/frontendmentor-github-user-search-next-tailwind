import SunIcon from "@/components/icons/SunIcon";

const Navbar = () => {
  return (
    <header className="mb-10 flex items-center space-x-2">
      <h1 className="flex-grow text-3xl font-bold text-white">devfinder</h1>

      <span className="uppercase text-white">Light</span>
      <button>
        <SunIcon
          className="fill-white"
          width={25}
        />
      </button>
    </header>
  );
};
export default Navbar;
