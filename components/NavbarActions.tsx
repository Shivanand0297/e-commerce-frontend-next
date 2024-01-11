"use client";

import { ShoppingBag } from "lucide-react";
import Button from "@/components/ui/Button";
import { useEffect, useState } from "react";

const NavbarActions = () => {

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!isMounted){
    return null
  }

  return (
    <div className="ml-auto flex items-center gap-4">
      <Button type="button" className="flex justify-center items-center px-4 py-2 bg-black rounded-full">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-white font-medium text-sm">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
