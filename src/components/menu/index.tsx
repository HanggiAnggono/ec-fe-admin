import { useLogout, useMenu } from "@refinedev/core";
import { NavLink } from "react-router";

export const Menu = () => {
  const { mutate: logout } = useLogout();
  const { menuItems, selectedKey } = useMenu();

  return (
    <nav className="menu p-0">
      <div className="flex flex-col">
        {menuItems.map((item) => (
          <NavLink
            key={item.key}
            className={`no-underline p-2 px-8 hover:bg-slate-200 ${
              selectedKey === item.key ? "!bg-slate-400 !text-white" : ""
            }`}
            to={item.route ?? "/"}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      <button className="m-2" onClick={() => logout()}>
        Logout
      </button>
    </nav>
  );
};
