import '../../src/App.css';

export default function Timeline() {
    return (
        <>
            <section id="timeline" className="relative mx-auto container px-2 pt-24 lg:h-screen lg:pt-0 lg:w-[740px] lg:flex lg:flex-col lg:justify-start lg:items-center" style={{ marginTop: '10%' }}>
                <div className="container mx-auto mt-5">
                    <h2 className=" text-3xl font-bold text-dark-700 dark:text-primary-50 mb-5">Experiencia</h2>
                    <ol className="relative border-s border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="titulocelestito flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Desarrollador web Back-end </h3>
                            <time className="subtitulo2 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">No Country - Pasantía</time>
                            <p className="mb-4 font-normal text-dark-700 dark:text-dark-200 text-base text-pretty">
                                Participé en una pasantía laboral en No Country como parte de mi compromiso
                                con el desarrollo de habilidades en trabajo en equipo y adaptabilidad. Durante
                                esta experiencia, desempeñé el rol de <strong>desarrollador backend con Java Spring Boot</strong> y
                                me desempeñé como <strong>Project Manager</strong>, liderando a un equipo de frontend y backend, definiendo
                                la estructura del proyecto, la nomenclatura y organizando reuniones utilizando metodologías
                                como <strong>Scrum y Kanban.</strong></p>

                            <p className="mb-4 font-normal text-dark-700 dark:text-dark-200 text-base text-pretty">
                                Trabajé en equipos multiculturales y seguimos la metodología Scrum. También utilizamos Trello
                                para la asignación de tareas. Esta experiencia no solo me permitió aplicar mis habilidades previas,
                                sino también aprender de manera activa y rápida en un entorno dinámico.</p>

                            <a
                                href="https://www.nocountry.tech/" target="_blank"
                                role="link"
                                className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                            >
                                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                </svg>
                                No country
                            </a>

                        </li>
                        <li className="mb-10 ms-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="titulocelestito mb-1 text-lg font-semibold text-gray-900 dark:text-white">Docente de Programación</h3>
                            <time className="subtitulo2 block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Fundación Uno - Jornada Completa</time>
                            <p className="mb-4 font-normal text-dark-700 dark:text-dark-200 text-base text-pretty">
                                En esta posición, desempeñé el rol de docente, brindando conocimientos especializados en
                                programación. Facilité clases dentro del programa <strong>CS50 de Harvard</strong>  que se imparte en la
                                <strong> universidad Nacional de Ingeniería de Nicaragua</strong> sobre programación, abordando temáticas
                                que incluyen el uso del lenguaje C, javascript la creación de algoritmos y el <strong>desarrollo web,
                                    con python, flask y PostgreSQL</strong> También tuve la oportunidad de impartir clases en el Instituto Loyola,
                                donde enseñé los fundamentos de Python.

                            </p>
                            <p className="mb-4 font-normal text-dark-700 dark:text-dark-200 text-base text-pretty">
                                Además, desempeñé responsabilidades adicionales, como la preparación de clases, la
                                ejecución de codificación en vivo, el seguimiento de la asistencia a través del sistema
                                laboral, la gestión de las calificaciones de los estudiantes y la realización de tutorías
                                personalizadas. Asimismo, <strong>coordiné proyectos de estudiantes universitarios presentados en
                                    ferias tecnológicas, entre otras tareas.</strong>
                            </p>
                            <a
                                href="https://code-fu.net.ni/" target="_blank"
                                role="link"
                                className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
                            >
                                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                </svg>
                                Code - Fundación uno
                            </a>
                        </li>
                    </ol>
                </div>
            </section >
        </>
    );
}