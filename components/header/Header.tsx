import Image from "next/image";
import Logo from "../../assets/Header Logo.svg";
import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.subheader}>
        <Image src={Logo} width="150px" height="62px"></Image>
        <p className={classes.analyze}>ANALYZE ASAs</p>
      </div>
    </div>
  );
};

export default Header;
