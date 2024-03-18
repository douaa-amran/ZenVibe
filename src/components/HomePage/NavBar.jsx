import { useState } from 'react'
import logo from "../../Images/Logo.png";
import { Dialog} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';


export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        console.log(id)
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        console.log(element)
        setMobileMenuOpen(false); // Close mobile menu after clicking a link
    };

    return (
        <header className="text-dark-purple ">
            <nav className="mx-auto my-6 flex max-w-7xl items-center justify-between lg:px-6" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="pl-6">
                        <img className="h-20 w-auto pt-2" src={logo} alt="Logo" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <a href="#" onClick={() => scrollToSection('about-us')} className="font-semibold leading-6 hover:text-light-purple">
                        About Us
                    </a>

                    <a href="#" onClick={() => scrollToSection('our-services')} className="font-semibold leading-6 hover:text-light-purple">
                        Our Services
                    </a>
                    <a href="#" onClick={() => scrollToSection('why-us')} className="font-semibold leading-6 hover:text-light-purple">
                        Why Us
                    </a>
                    <a href="#" onClick={() => scrollToSection('contact-us')} className="font-semibold leading-6 hover:text-light-purple">
                        Contact Us
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 gap-5 lg:justify-end px-4">
                    <button className="text-sm font-semibold text-dark-purple hover:text-light-purple leading-6 " onClick={() => navigate('/login')}>
                        Log In
                    </button>
                    <button className="text-sm border rounded-full py-2 px-4 font-semibold text-beige bg-light-purple hover:bg-dark-purple leading-6 " onClick={() => navigate('/signup')}>
                        Sign Up <span aria-hidden="true">&rarr;</span>
                    </button>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-3/4 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 border shadow-lg">
                    <div className="flex items-center justify-end">
                        <button
                            type="button"
                            className="-mx-2.5 -mb-2.5 rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <a
                                    href="#"
                                    onClick={() => scrollToSection('about-us')}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark-purple hover:text-light-purple"
                                >
                                    About us
                                </a>
                                <a
                                    href="#"
                                    onClick={() => scrollToSection('our-services')}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark-purple hover:text-light-purple"
                                >
                                    Our Services
                                </a>
                                <a
                                    href="#"
                                    onClick={() => scrollToSection('why-us')}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark-purple hover:text-light-purple"
                                >
                                    Why us
                                </a>
                                <a
                                    href="#"
                                    onClick={() => scrollToSection('contact-us')}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-dark-purple hover:text-light-purple"
                                >
                                    Contact us
                                </a>
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    onClick={() => navigate('/signup')}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-dark-purple hover:text-light-purple"
                                >
                                    Log in
                                </a>
                                <a
                                    href="#"
                                    onClick={() => navigate('/signup')}
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-dark-purple hover:text-light-purple"
                                >
                                   Sign Up
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
