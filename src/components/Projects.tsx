const projects = [
    {
        id: 1,
        company: "SIGAP | TecnoMTY",
        date: "2023",
        position: "Desarrollador web full stack",
        responsibilities: [
            "Lideré el proyecto y el equipo de desarrollo utilizando Laravel 9 con PHP 8.1.",
            "Modelé la base de datos con diagramas entidad-relación.",
            "Implementé modelos, vistas y controladores para el sistema.",
            "Desarrollé el registro e inicio de sesión de usuarios.",
            "Creé migraciones para la base de datos MySQL según el modelo entidad-relación.",
            "Desarrollé la lógica del back-end para el registro de huéspedes.",
            "Configuré rutas y seguridad con middlewares.",
            "Implementé el front-end usando HTML5, CSS3, JavaScript y Bootstrap."
        ]
    },
    {
        id: 3,
        company: "HotelGES",
        date: "2023",
        position: "Desarrollador web full stack",
        responsibilities: [
            "Lideré el proyecto y el equipo de desarrollo utilizando Laravel 9 con PHP 8.1.",
            "Modelé la base de datos con diagramas entidad-relación.",
            "Implementé modelos, vistas y controladores para el sistema.",
            "Desarrollé el registro e inicio de sesión de usuarios.",
            "Creé migraciones para la base de datos MySQL según el modelo entidad-relación.",
            "Desarrollé la lógica del back-end para el registro de huéspedes.",
            "Configuré rutas y seguridad con middlewares.",
            "Implementé el front-end usando HTML5, CSS3, JavaScript y Bootstrap."
        ]
    },
    {
        id: 4,
        company: "Dimension",
        date: "2022",
        position: "Desarrollador web full stack",
        responsibilities: [
            "Implementé modelos, vistas, controladores necesarios para la operación y manejo del sistema; trabajado bajo el framework Laravel 7 de la mano con php 7.4",
            "Desarrollé las migraciones correspondientes a lo establecido en el diagrama entidad-relación para trabajar con la base de datos MySQL.",
            "Desarrollé la lógica del backend para el inicio de sesión, la creación de perfiles  personalizables y la carga de imágenes.",
            "Implementé del front-end del sistema creando vistas funcionales por medio de HTML5, CSS3 y JavaScript de la mano del framework Bootstrap."
        ]
    },


];
export default function Projects() {

    return (
        <div className="mx-4 md:mx-20 mt-10">
            <div className="flex justify-center items-center mx-4 sm:mx-10 md:mx-20 mt-10">
                <p className="text-lg sm:text-xl md:text-2xl text-white font-bold  animate-slide-in-from-left ">PROYECTOS</p>
            </div>
            {projects.map(project => (
                <div key={project.id} className="bg-white/20 rounded-md m-2 p-2 shadow-md animate-slide-in-from-left mb-4">
                    <p className="relative m-2 p-2 text-white text-xl font-bold">
                        {project.company}
                    </p>
                    <p className="relative mx-2 px-2 text-white">
                        {project.date}
                    </p>
                    <p className="relative mx-2 px-2 text-white font-bold">
                        {project.position}
                    </p>
                    <div className="relative m-2 p-2 text-white">
                        <ul className="list-disc pl-5 text-sm space-y-2">
                            {project.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}