const experiences = [
    {
        id: 1,
        company: "Soluciones Integrales TecnoMTY S.A. de C.V.",
        date: "Enero - Junio 2024",
        position: "Desarrollador web Fullstack y UX/UI",
        responsibilities: [
            "Colaboración efectiva en equipos multidisciplinarios siguiendo el marco de trabajo Scrum.",
            "Creación de mockups y prototipos interactivos utilizando Figma para validar diseños con stakeholders.",
            "Desarrollo de proyectos utilizando Node.js y NPM, aplicando el framework Front-End React.",
            "Diseño y desarrollo de interfaces de usuario (UX/UI) modernas y responsivas con TailwindCSS.",
            "Implementación de componentes reutilizables y escalables para mejorar la eficiencia del desarrollo.",
            "Integración y consumo de API REST utilizando Axios y Fetch para asegurar una comunicación eficiente entre el Front-End y el Back-End.",
            "Adaptación de diseños responsivos para asegurar una experiencia de usuario óptima en dispositivos móviles.",
            "Gestión y uso avanzado de librerías de NPM para optimizar y mejorar el proceso de desarrollo.",
            "Apoyo en el desarrollo de un proyecto adicional utilizando Angular para la gestión de eventos de calendario, mejorando la funcionalidad y la experiencia del usuario en la aplicación.",
            "Gestión de control de versiones utilizando GitHub y SVN para el seguimiento y colaboración en el desarrollo de proyectos.",
            "Implementación de contenedores Docker para facilitar el despliegue y la administración de aplicaciones en entornos de producción.",
            "Trabajo en un entorno mayoritariamente angloparlante, demostrando fluidez en inglés para la comunicación efectiva con el equipo."
        ]
    },
    {
        id: 2,
        company: "APD Consultores de Software",
        date: "2023 - 2024",
        position: "Desarrollador web front end",
        responsibilities: [
            "Desarrollo de aplicaciones moviles en el framework Angular.",
            "Implementación de interfaces utilizando el framework Ionic.",
            "Compilación de aplicaciones moviles en formato APK por medio del framework Capacitor para la conversión de WebApps en Apps Moviles.",
            "Implementación de consumo de API para la conectividad con la base de datos."
        ]
    },
    {
        id: 3,
        company: "Desarrollo de videojuegos en Pixel Game Jam",
        date: "2022",
        position: "Desarrollador de videojuegos",
        responsibilities: [
            "Programación de scripts de movimiento e interacción con los escenarios en el lenguaje C# por medio de Unity.",
            "Programación de animaciones de personajes.",
            "Elaboración de niveles.",
            "Creación de scripts de acciones de personajes."
        ],
        link: "https://queksmar.itch.io/one-togueter",
    }
];

export default function Experience() {
    return (
        <div className="mx-4 md:mx-20 mt-10">
            <div className="flex justify-center items-center mx-4 sm:mx-10 md:mx-20 mt-10">
                <p className="text-lg sm:text-xl md:text-2xl text-white font-bold animate-slide-in-from-left">
                    MI EXPERIENCIA PROFESIONAL
                </p>
            </div>
            {experiences.map(experience => (
                <div key={experience.id} className="bg-white/20 rounded-md m-2 p-2 shadow-md animate-slide-in-from-left mb-4">
                    <p className="relative m-2 p-2 text-white text-xl font-bold">
                        {experience.company}
                    </p>
                    <p className="relative mx-2 px-2 text-white">
                        {experience.date}
                    </p>
                    <p className="relative mx-2 px-2 text-white font-bold">
                        {experience.position}
                    </p>
                    <div className="relative m-2 p-2 text-white">
                        <ul className="list-disc pl-5 text-sm space-y-2">
                            {experience.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                    {experience.link && (
                        <div className="relative m-2 p-2 text-white">
                            <iframe
                                frameBorder="0"
                                src="https://itch.io/embed/1521574"
                                width="552"
                                height="167"
                                className="w-full"
                            >
                                <a href={experience.link}>One Together by Queksmar, zaieni, Yuriev, LilithApple</a>
                            </iframe>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
