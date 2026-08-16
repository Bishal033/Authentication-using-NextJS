import Link from "next/link";
import{
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Input,
    Button,
    Dropdown,
    Avatar,
    Popover,
    PopoverTrigger,
    PopoverContent
} from "@nextui-org/react";
import {auth} from "@/auth";
import * as actions from '@/actions';

export default async function Header() {
    const session = await auth();

    let authContent: React.ReactNode;
    if(session?.user){
        authContent = <Popover placement="left">
        <PopoverTrigger>
            <Avatar src={session.user.image || "/default-avatar.png"} />
        </PopoverTrigger>
        <PopoverContent>
            <div className="p-4">
                <form action={actions.signOut}>
                <Button type="submit">Sign Out</Button>
                </form>
            </div>
        </PopoverContent>
        </Popover>
    }
    else{
        authContent = <>
        <NavbarItem>
            <form action={actions.signIn} method="post">
                <Button type="submit" color="secondary" variant="bordered">Sign In</Button>
            </form>
        </NavbarItem>
        <NavbarItem> 
            <form action={actions.signIn} method="post">
                <Button type="submit" color="secondary" variant="flat">Sign Up</Button>
            </form>
        </NavbarItem>
        </>
    }

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
                       {authContent}
            </NavbarContent>    
        </Navbar>
    );
}