import logo from '../assets/imagens/logo-verde-medio.svg';

export function Header() {
    return (
        <header className="fixed z-50 w-screen px-4 md:px-16 lg:px-28 py-4">
            <div className="flex container mx-auto py-3 justify-between">
                <a href="/" className="self-center">
                    <img src={logo} alt="Site logo" className="h-8 md:h-10" />
                </a>

                <div className="w-2/4 lg:w-3/6 rounded-lg px-2.5 border border-(--green-light) hidden md:flex bg-white">
                    <button className="self-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-6 text-(--green-medium)"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>
                    <input
                        type="text"
                        placeholder="O que voce esta procurando?"
                        className="outline-0 px-2 py-2 w-full text-gray-600"
                    />
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    <a href="/login" className="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-5 md:size-6 text-(--green-medium)"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                        </svg>
                    </a>
                    <a href="/cart" className="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="size-5 md:size-6 text-(--green-medium)"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
            <div className="w-full rounded-lg px-2.5 border border-(--green-light) flex md:hidden bg-white">
                <button className="self-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-5 md:size-6 text-(--green-medium)"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </button>
                <input
                    type="text"
                    placeholder="O que voce esta procurando?"
                    className="outline-0 px-2 py-2 w-full text-gray-600"
                />
            </div>
        </header>
    );
}
