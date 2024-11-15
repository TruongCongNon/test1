import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex h-14 lg:h-24 items-center justify-between bg-slate-950 px-8 text-white">
      <div className="flex items-center gap-4 space-x-4">
        <Link to="/">
          <img className="w-16 sm:w-28 lg:w-32" src="./netflix.png" />
        </Link>
        <a className="sm:text-[1vw]" href="">
          Phim
        </a>
        <a className="sm:text-[1vw]" href="">
          Truyền hình
        </a>
      </div>
      <div>
        <FontAwesomeIcon
          className="cursor-pointer lg:text-[1.3vw]"
          icon={faMagnifyingGlass}
        />
      </div>
    </header>
  );
};

export default Header;
