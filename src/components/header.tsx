import Link from "next/link";
import{
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
} from "@nextui-org/react";
import HeaderAuth from "@/components/header-auth";

export default function Header() {

    return (
        <Navbar className = "mb-4 shadow-sm border-b border-default-200">
            <NavbarBrand>
                <Link href="/" className="font-bold text-inherit">
                    Discuss
                </Link>
            </NavbarBrand>
            <NavbarContent justify="center" className="hidden sm:flex gap-4">
                <NavbarItem>
                    <Input placeholder="Search..." />
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                    <HeaderAuth/>
            </NavbarContent>    
        </Navbar>
    );
}