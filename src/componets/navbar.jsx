import '../../src/App.css';

export default function Navbar() {

    return (
        <>
            <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 " style={{ backgroundColor: 'rgb(2 6 23 / var(--tw-bg-opacity))' }}>
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <a className="flex gap-2 items-center self-center text-3xl font-black whitespace-nowrap text-primary-600 dark:text-primary-400" href="/">codev</a>
                        <div className="flex-grow flex items-center justify-center space-x-4 text-white-900">
                            <a className="font-medium p-2" href="#">Inicio</a>
                            <a className="font-medium p-2" href="#">Experiencia</a>
                            <a className="font-medium p-2" href="#">Portafolio</a>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )

}