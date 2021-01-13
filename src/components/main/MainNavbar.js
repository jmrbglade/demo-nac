import React, { useState } from 'react';
import logo2 from './logo_2_mq.png';

export const MainNavbar = () => {

    const [open, setOpen] = useState( false );

    return (
        !open ? (
            <nav className="w-full bg-white">
                <div className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <img
                                className="h-12" 
                                src={logo2}
                                alt=""
                            />
                            <span className="w-36 pl-3 text-xs font-semibold block">
                                EQUIPOS Y OPERACIONES INDUSTRIALES S.A.S
                            </span>
                        </div>
                        <div className="md:flex hidden md-block md:space-x-3 lg:space-x-5 xl:space-x-10 items-center text-sm">
                            <a className="hover:text-yellow-nac" href="#servicios">SERVICIOS</a>
                            <a className="hover:text-yellow-nac" href="#nosotros">NOSOTROS</a>
                            <a className="hover:text-yellow-nac" href="#proyectos">PROYECTOS</a>
                            <a className="hover:text-yellow-nac" href="#clientes">CLIENTES</a>
                            <a className="hover:text-yellow-nac" href="#contacto">CONTACTO</a>
                            <a className="text-xs w-16 text-center hover:text-yellow-nac" href="/">
                                Sistema de Gestión
                            </a>
                        </div>
                        
                        <button 
                            className="md:hidden w-10 items-center flex flex-col focus:outline-none"
                            onClick={ () => { setOpen(true) } }
                        >
                            <div className="bg-blue-nac w-8 h-1 my-1"></div>
                            <div className="bg-blue-nac w-8 h-1 my-1"></div>
                            <div className="bg-blue-nac w-8 h-1 my-1"></div>
                        </button>
                        
                    </div>
                </div>
            </nav>
        ): (
            <div className="flex flex-col p-3 w-full h-screen bg-gray-600 md:hidden">
                <div className="w-10 text-center self-end">
                    <h1 
                        onClick={ () => { setOpen(false) } }
                        className="text-white text-4xl font-semibold cursor-pointer"
                    >
                        X
                    </h1>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center w-full">
                    <a onClick={ () => { setOpen(false) } } className="text-white text-xl my-3" href="#servicios">SERVICIOS</a>
                    <a onClick={ () => { setOpen(false) } } className="text-white text-xl my-3" href="#nosotros">NOSOTROS</a>
                    <a onClick={ () => { setOpen(false) } } className="text-white text-xl my-3" href="#proyectos">PROYECTOS</a>
                    <a onClick={ () => { setOpen(false) } } className="text-white text-xl my-3" href="#clientes">CLIENTES</a>
                    <a onClick={ () => { setOpen(false) } } className="text-white text-xl my-3" href="#contacto">CONTACTO</a>
                    <a onClick={ () => { setOpen(false) } } className="text-white text-xl my-3" href="/">
                        Sistema de Gestión
                    </a>
                </div>
            </div>
        )
        
    )
}
