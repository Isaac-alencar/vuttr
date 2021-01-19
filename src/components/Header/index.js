// import indexStyle from "../../styles/index.module.css";
import SearchBar from "../SearchBar";
import style from "./styles.module.css";

function Header() {
  return (
    <>
      <header className={style.header}>
        <h1 className={style.titleLG}>VUTTR</h1>
        <h3 className={style.titleMD}>Very Usefull Tools to Remember</h3>
      </header>
      <SearchBar />
    </>
  );
}

export default Header;
