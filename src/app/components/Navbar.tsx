import NavItem from "./client/NavItem";

export default function NavBar() {
  return (
    <nav className="my-4 flex justify-around items-center rounded-xl p-4 max-w-md h-auto mx-auto bg-white/80 backdrop-blur-sm text-black shadow-[#4A90E2] shadow-md border-transparent">
      <NavItem pathName="about" displayValue="About" />
      <NavItem pathName="portfolio" displayValue="Portfolio" />
      <NavItem pathName="contact" displayValue="Contact Me" />
      <button className="bg-[#4A90E2] text-white p-2 border rounded-[7px]">
        Download CV
      </button>
    </nav>
  );
}
