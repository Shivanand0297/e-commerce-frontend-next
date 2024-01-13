import { getCategories } from "@/actions/getCategories";
import MainNav from "./MainNav";
import NavbarActions from "./NavbarActions";

const Navbar = async () => {

  let categories = await getCategories();

  return (
    <div className="px-2 py-1 p-3 flex justify-between items-center bg-white dark:bg-slate-500">
      <MainNav data={categories} />
      <NavbarActions/>
    </div>
  )
}

export default Navbar;