import React from "react";

const experiences = [
    {
        id: 1,
        company: "Soluciones Integrales TecnomMTY S.A. de C.V.",
        date: "Febrero - Junio 2024",
        position: "Desarrollador front end",
        responsibilities: [
            "Trabajo colaborativo bajo el marco de trabajo Scrum.",
            "Creación de mockups del sistema por medio de Figma.",
            "Creación del proyecto por medio de Node.js y NPM, en el framework Front-End React.",
            "Desarrollo de las interfaces UX/UI por medio de TailwindCSS."
        ]
    },
    {
        id: 2,
        company: "Grupo APD",
        date: "2023 - 2024",
        position: "Desarrollador front end",
        responsibilities: [
            "Desarrollo de aplicaciones moviles en el framework Angular.",
            "Implementación de interfaces utilizando el framework Ionic.",
            "Compilación de aplicaciones moviles en formato APK por medio del framework Capacitor para la conversión de WebApps en Apps Moviles.",
            "Implementación de consumo de API para la conectividad con la base de datos."
        ]
    },
    {
        id: 3,
        company: "Desarrollo de videojuego en Pixel Game Jam",
        date: "2022",
        position: "Desarrollador front end",
        responsibilities: [
            "Programación de scripts de movimiento e interacción con los escenarios en el lenguaje C# por medio de Unity."
        ]
    }
];

export default function Experience() {
    return (
        <div className="ml-8 md:mx-20 ">
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
                        <ul className="list-disc pl-5 text-sm">
                            {experience.responsibilities.map((responsibility, index) => (
                                <li key={index}>{responsibility}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
