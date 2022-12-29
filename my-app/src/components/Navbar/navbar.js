import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { GrBike } from "react-icons/gr";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Acasa', href: '/', current: true },
    { name: 'Catalog', href: '/catalog', current: false },
    { name: 'Despre mine', href: '/despre-mine', current: false },
    { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example({ props }) {
    console.log(props);
    return (
        <Disclosure as="nav" className={props}>
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <GrBike className="icons block h-9 w-auto lg:hidden" />
                                    <GrBike className="icons hidden h-9 w-auto lg:block" />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <div>

                                                {item.name === "Catalog" ?
                                                    <Menu as="div" className="relative ml-3">
                                                        <div>
                                                            <Menu.Button className="inline-flex w-full justify-center font-medium bg-transparent text-2xl font-medium text-white shadow-sm hover: text-2xl text-white-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 text-lg">
                                                                {item.name}
                                                                <ChevronDownIcon className="-mr-1 ml-2 h-8 w-5" aria-hidden="true" />
                                                            </Menu.Button>
                                                        </div>
                                                        <Transition
                                                            as={Fragment}
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-white ring-opacity-5 focus:outline-none ">
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="/catalog/de-curse"
                                                                            className={classNames(active ? 'text-red' : '', 'block px-4 py-2 text-xl text-black')}
                                                                        >
                                                                            De curse
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="/catalog/singlespeed"
                                                                            className={classNames(active ? 'text-red' : '', 'block px-4 py-2 text-xl text-black')}
                                                                        >
                                                                            Singlespeed
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="/catalog/trekking"
                                                                            className={classNames(active ? 'text-red' : '', 'block px-4 py-2 text-xl text-black')}
                                                                        >
                                                                            Trekking
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                                <Menu.Item>
                                                                    {({ active }) => (
                                                                        <a
                                                                            href="/catalog/arhiva"
                                                                            className={classNames(active ? 'text-red' : '', 'block px-4 py-2 text-xl text-black')}
                                                                        >
                                                                            Arhiva
                                                                        </a>
                                                                    )}
                                                                </Menu.Item>
                                                            </Menu.Items>

                                                        </Transition>
                                                    </Menu> : <><a
                                                        key={item.name}
                                                        href={item.href}
                                                        className='text-white hover:bg-gray-700 hover:text-white text-l px-3 py-2 rounded-md text-2xl font-medium'

                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}

                                                    </a></>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-2xl font-medium text-lg"
                                >
                                    <span>Admin</span>
                                </button>


                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-white text-black' : 'text-white-300 hover:bg-black hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
