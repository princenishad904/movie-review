import { Dropdown } from "keep-react";
import { auth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
const Profile = () => {
  let Image = (
    <div className="w-12 h-12 border rounded-full overflow-hidden">
      <img
        src="https://media.licdn.com/dms/image/D4D03AQENC4AW1P_kMg/profile-displayphoto-shrink_200_200/0/1688570285286?e=2147483647&v=beta&t=XTSkq1zDptkM2qP7KUomOuXXd_zWIWHNVKjYhh5sPVY"
        alt=""
      />
    </div>
  );
  return (
    <Dropdown
      label={Image}
      size="sm"
      type=""
      dismissOnClick={true}
      arrowIcon={false}
      className="w-12 h-12"
    >
      <NavLink to={"/"}>
        <Dropdown.Item>Home</Dropdown.Item>
      </NavLink>
      <NavLink to={"/admin"}>
        <Dropdown.Item>Dashboard</Dropdown.Item>
      </NavLink>
      <NavLink to={"/upload-new-movie"}>
        <Dropdown.Item>Upload Movie</Dropdown.Item>
      </NavLink>

      <button onClick={() => signOut(auth)}>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </button>
    </Dropdown>
  );
};

export default Profile;
