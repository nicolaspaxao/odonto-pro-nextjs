"use client";

import Link from "next/link";
import { FunctionComponent, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { SheetTrigger } from "@/components/ui/sheet";
import { LogIn, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const session = null;

  const navItems = [{ href: "#profissionais", label: "Profissionais" }];

  const NavLinks = () => {
    return (
      <>
        {navItems.map((item) => (
          <Button
            onClick={() => setIsOpen(false)}
            asChild
            key={item.href}
            className="bg-transparent hover:bg-transparent shadow-none text-zinc-900"
          >
            <Link className="text-base" href={item.href}>{item.label}</Link>
          </Button>
        ))}

        {session ? (
          <Link href="/dashboard" className="text-base flex items-center justify-center gap-2">Acessar Clínica</Link>
        ) : (
          <Button><LogIn/> Portal da Clinica</Button>
        )}
      </>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] py-4 px-6 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-3xl font-bold text-zinc-900">
          Odonto<span className="text-emerald-500">Prod</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <NavLinks />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              className="text-black hover:bg-transparent cursor-pointer"
              variant="ghost"
              size="icon"
            >
              <MenuIcon className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[240px] sm:w-[300px] z-[9999]"
          >
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Veja nossos links</SheetDescription>
            </SheetHeader>

            <nav className="flex flex-col gap-2 px-4">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
