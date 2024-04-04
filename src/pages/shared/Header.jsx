import logo from "../../assets/logo.png"
import moment from 'moment';
const Header = () => {
    return (
        <div className="text-center">
            <img className="mx-auto" src={logo} alt="" />
            <h2 className="text-2xl">Journalism Without Fear or Favour</h2>
            <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;