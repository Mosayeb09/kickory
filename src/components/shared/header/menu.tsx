import Link from "next/link";

import { ShoppingCartIcon, UserIcon } from "lucide-react";

const menu = () => {
    return (
        <div className="flex justify-end">
            <nav className="flex gap-4 w-full">
            <Link href={"/sign-in"} className="header-button">
            <UserIcon className="h-8 w-8"></UserIcon>
            <span className="font-bold">Sign in</span>

            
            </Link>
            <Link href={"/cart"} className="header-button">
            <ShoppingCartIcon className="h-8 w-8"></ShoppingCartIcon>
            <span className="font-bold">Cart</span>
          
            </Link>
            </nav>
        </div>
    );
};

export default menu;