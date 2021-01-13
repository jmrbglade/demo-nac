import React from 'react'
import { MainNavbar } from './MainNavbar'
import imgDesmonte from './desmonte_tanque.jpg'
import imgDemolicion from './demolicion.jpg'
import imgTanque from './tanque.jpg'
import imgTransf from './transf.jpg'
import imgMarcaAgua from './marca_agua.png'
import imgProyecto1 from './proyecto_1.jpg'
import imgProyecto2 from './proyecto_2.jpg'
import imgProyecto3 from './proyecto_3.jpg'
import imgProyecto4 from './proyecto_4.jpg'
import imgCelsia from './celsia.png'
import imgAcerias from './acerias.png'
import imgArgos from './argos.png'
import imgOdinsa from './odinsa.png'
import imgHolcim from './holcim.png'

export const MainScreen = () => {
    return (
        <div className="w-full bg-purple-400 overflow-x-hidden">

            <div className="w-full h-screen flex flex-col">
                <MainNavbar />
                <div className="w-full relative flex flex-1 justify-center items-center bg-black overflow-hidden">
                    <img 
                        className="h-full w-full object-cover opacity-75"
                        src={imgDesmonte}
                        alt=""
                    />
                    <div className="absolute w-full h-full flex justify-center items-center">
                        <div className="w-9/12 sm:w-9/12 md:w-8/12 lg:w-8/12  xl:w-8/12">
                            <h1 className="text-white text-center font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                                LÍDERES EN CALIDAD DE CONSTRUCCIÓN, DEMOLICIÓN, DESMONTE Y MINERÍA
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <div id="servicios" className="w-full md:min-h-screen flex flex-col items-center bg-white ">
                <h1 className="mt-8 text-4xl font-semibold">SERVICIOS</h1>
                <div className="w-32 h-2 my-4 bg-yellow-nac"></div>
                <div className="md:mt-0 mt-3 flex-1 w-full flex flex-wrap items-center justify-center">
                    <div className="xl:w-2/12 md:w-1/4 flex flex-col bg-gray-100 w-9/12 mx-4 my-4">
                        <img 
                            src={imgDemolicion}
                            alt=""
                        />
                        <div className="px-4 py-4">
                            <h2 className="mb-3 font-semibold text-xl text-blue-900">Demolición</h2>
                            <p>
                                Mollit pariatur fugiat fugiat excepteur. Elit ad proident labore commodo anim cillum nisi. Labore ex ut anim cupidatat qui est ex. Excepteur dolore sit dolore fugiat in pariatur nostrud dolore minim aliqua pariatur nisi irure. Aliqua ad exercitation.
                            </p>
                        </div>
                        
                    </div>
                    <div className="xl:w-2/12 md:w-1/4 flex flex-col bg-gray-100 w-9/12 mx-4 my-4">
                        <img 
                            src={imgTanque}
                            alt=""
                        />
                        <div className="px-4 py-4">
                            <h2 className="mb-3 font-semibold text-xl text-blue-900">Desmonte de tanques</h2>
                            <p>
                                Mollit pariatur fugiat fugiat excepteur. Elit ad proident labore commodo anim cillum nisi. Labore ex ut anim cupidatat qui est ex. Excepteur dolore sit dolore fugiat in pariatur nostrud dolore minim aliqua pariatur nisi irure. Aliqua ad exercitation.
                            </p>
                        </div>
                        
                    </div>
                    <div className="xl:w-2/12 md:w-1/4 flex flex-col bg-gray-100 w-9/12 mx-4 my-4">
                        <img 
                            src={imgTransf}
                            alt=""
                        />
                        <div className="px-4 py-4">
                            <h2 className="mb-3 font-semibold text-xl text-blue-900">Desmonte de transformadores</h2>
                            <p>
                                Mollit pariatur fugiat fugiat excepteur. Elit ad proident labore commodo anim cillum nisi. Labore ex ut anim cupidatat qui est ex. Excepteur dolore sit dolore fugiat in pariatur nostrud dolore minim aliqua pariatur nisi irure. Aliqua ad exercitation.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div id="nosotros" className="w-full md:min-h-screen flex flex-col bg-white">
                <div className="w-full flex-1 py-5 flex flex-wrap justify-center items-stretch">
                    <div className="w-10/12 md:w-2/4 p-4 flex justify-end">
                        <div className="w-full md:w-11/12 lg:w-9/12 xl:w-7/12">
                            <h1 className="mt-8 text-4xl font-semibold">NOSOTROS</h1>
                            <div className="w-32 h-2 my-4 bg-yellow-nac"></div>
                            <p>
                                Mollit pariatur fugiat fugiat excepteur. Elit ad proident labore commodo anim cillum nisi. Labore ex ut anim cupidatat qui est ex. Excepteur dolore sit dolore fugiat in pariatur nostrud dolore minim aliqua pariatur nisi irure. Aliqua ad exercitation adipisicing adipisicing ullamco est elit do. Eu laboris qui id do ut duis sit duis laboris elit anim. Quis voluptate laboris nostrud cillum nostrud do pariatur.
                                Mollit pariatur fugiat fugiat excepteur. Elit ad proident labore commodo anim cillum nisi. Labore ex ut anim cupidatat qui est ex. Excepteur dolore sit dolore fugiat in pariatur nostrud dolore minim aliqua pariatur nisi irure. Aliqua ad exercitation adipisicing adipisicing ullamco est elit do. Eu laboris qui id do ut duis sit duis laboris elit anim. Quis voluptate laboris nostrud cillum nostrud do pariatur.    
                            </p>
                        </div>
                    </div>
                    <div className="w-10/12 md:w-2/4 py-3 flex flex-col">
                        <img 
                            src={imgMarcaAgua}
                            className="object-contain flex-1 h-80"
                            alt=""
                        />
                    </div>
                </div>
                <div className="w-full flex flex-wrap justify-center items-center flex-shrink-0 bg-yellow-nac">
                    <div className="lg:my-7 lg:w-48 my-6 md:w-36 mx-2 md:mx-0 w-4/12 text-center text-blue-nac font-semibold">
                        <h2 className="text-4xl lg:text-6xl mb-2 lg:mb-3">1995</h2>
                        <h3 className="text-lg lg:text-2xl lg:leading-none leading-none mb-2">Año de establecimiento</h3>
                    </div>
                    <div className="bg-white w-1 h-16 mx-4 hidden md:block"></div>
                    <div className="lg:my-7 lg:w-48 my-6 md:w-36 mx-2 md:mx-0 w-4/12 text-center text-blue-nac font-semibold">
                        <h2 className="text-4xl lg:text-6xl mb-2 lg:mb-3">215</h2>
                        <h3 className="text-lg lg:text-2xl lg:leading-none leading-none mb-2">Proyectos Completados</h3>
                    </div>
                    <div className="bg-white w-1 h-16 mx-4 hidden md:block"></div>
                    <div className="lg:my-7 lg:w-48 my-6 md:w-36 mx-2 md:mx-0 w-4/12 text-center text-blue-nac font-semibold">
                        <h2 className="text-4xl lg:text-6xl mb-2 lg:mb-3">+1000</h2>
                        <h3 className="text-lg lg:text-2xl lg:leading-none leading-none mb-2">Constructores Contratados</h3>
                    </div>
                    <div className="bg-white w-1 h-16 mx-4 hidden md:block"></div>
                    <div className="lg:my-7 lg:w-48 my-6 md:w-36 mx-2 md:mx-0 w-4/12 text-center text-blue-nac font-semibold">
                        <h2 className="text-4xl lg:text-6xl mb-2 lg:mb-3">22</h2>
                        <h3 className="text-lg lg:text-2xl lg:leading-none leading-none mb-2">Premios Obtenidos</h3>
                    </div>
                </div>       
            </div>

            <div id="proyectos" className="w-full flex flex-col items-center bg-white">
                <h1 className="mt-8 text-4xl font-semibold">PROYECTOS</h1>
                <div className="w-32 h-2 my-4 bg-yellow-nac"></div>
                <div className="flex-shrink-0 mt-6 mb-14 grid grid-cols-1 gap-6 md:grid-cols-2 w-10/12 lg:w-8/12 xl:w-6/12">
                    <div className="flex relative group">
                        <img 
                            alt=""
                            src={imgProyecto1}
                            className="group-hover:opacity-25"
                        />
                        <div className="absolute flex items-center justify-center h-full w-full">
                            <h2 className="opacity-0 group-hover:opacity-100 text-lg font-semibold">
                                Proyecto 1
                            </h2>
                        </div>
                    </div>
                    <div className="flex relative group">
                        <img 
                            alt=""
                            src={imgProyecto2}
                            className="group-hover:opacity-25"
                        />
                        <div className="absolute flex items-center justify-center h-full w-full">
                            <h2 className="opacity-0 group-hover:opacity-100 text-lg font-semibold">
                                Proyecto 2
                            </h2>
                        </div>
                    </div>
                    <div className="flex relative group">
                        <img 
                            alt=""
                            src={imgProyecto3}
                            className="group-hover:opacity-25"
                        />
                        <div className="absolute flex items-center justify-center h-full w-full">
                            <h2 className="opacity-0 group-hover:opacity-100 text-lg font-semibold">
                                Proyecto 3
                            </h2>
                        </div>
                    </div>
                    <div className="flex relative group">
                        <img 
                            alt=""
                            src={imgProyecto4}
                            className="group-hover:opacity-25"
                        />
                        <div className="absolute flex items-center justify-center h-full w-full">
                            <h2 className="opacity-0 group-hover:opacity-100 text-lg font-semibold">
                                Proyecto 4
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div id="clientes" className="w-full flex flex-col items-center bg-gray-100">
                <h1 className="mt-8 text-4xl font-semibold">CLIENTES</h1>
                <div className="w-32 h-2 my-4 bg-yellow-nac"></div>
                <div className="w-96 justify-center md:w-10/12 lg:w-8/12 xl:w-6/12 flex flex-shrink-0  flex-wrap items-center md:justify-between mt-7 mb-16">
                    <img 
                        src={imgCelsia}
                        alt=""
                        className="mx-4 md:mx-0 my-3 h-16 w-24 object-contain"
                    />
                    <img 
                        src={imgArgos}
                        alt=""
                        className="mx-4 md:mx-0 my-3 h-16 w-24 object-contain"
                    />
                    <img 
                        src={imgHolcim}
                        alt=""
                        className="mx-4 md:mx-0 my-3 h-16 w-24 object-contain"
                    />
                    <img 
                        src={imgAcerias}
                        alt=""
                        className="mx-4 md:mx-0 my-3 h-16 w-24 object-contain"
                    />
                    <img 
                        src={imgOdinsa}
                        alt=""
                        className="mx-4 md:mx-0 my-3 h-16 w-24 object-contain"
                    />
                </div>
            </div>

            <div id="contacto" className="w-full flex flex-col items-center bg-white pb-6">
                <h1 className="mt-8 text-4xl font-semibold">CONTACTO</h1>
                <div className="w-32 h-2 my-4 bg-yellow-nac"></div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1985.0129992644518!2d-72.9408706!3d5.7093825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x44de98386c6f2343!2sN.A.C%20Equipos%20y%20Operaciones%20Industriales%20S.A.S!5e0!3m2!1ses-419!2sco!4v1610497316466!5m2!1ses-419!2sco"
                    className="w-10/12 lg:w-9/12 xl:w-8/12 h-96 my-5"
                    aria-hidden="false"
                    title="map"
                    >
                </iframe>
                <div className="flex flex-wrap w-full lg:w-10/12 mt-6">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-9/12 xl:w-7/12">
                            <h2 className=" text-2xl font-semibold mb-4">Preguntas</h2>
                            <p className="mb-4">
                                Para todo tipo de preguntas, comentarios e inquietudes, por favor completa el siguiente formulario o comunícate a nuestra línea de atención.
                            </p>
                            <div className="w-full my-2">
                                <span className="text-sm italic text-gray-700 block mb-2">Nombre</span>
                                <input 
                                    className="w-full ring-1 py-1 px-2 ring-gray-500 rounded focus:ring-black"
                                    type="text"
                                />
                            </div>
                            <div className="w-full my-2">
                                <span className="text-sm italic text-gray-700 block mb-2">Apellido</span>
                                <input 
                                    className="w-full ring-1 py-1 px-2 ring-gray-500 rounded focus:ring-black"
                                    type="text"
                                />
                            </div>
                            <div className="w-full my-2">
                                <span className="text-sm italic text-gray-700 block mb-2">Email*</span>
                                <input 
                                    className="w-full ring-1 py-1 px-2 ring-gray-500 rounded focus:ring-black"
                                    type="text"
                                />
                            </div>
                            <div className="w-full my-2">
                                <span className="text-sm italic text-gray-700 block mb-2">Teléfono</span>
                                <input 
                                    className="w-full ring-1 py-1 px-2 ring-gray-500 rounded focus:ring-black"
                                    type="text"
                                />
                            </div>
                            <div className="w-full my-2">
                                <span className="text-sm italic text-gray-700 block mb-2">Déjanos un mensaje...</span>
                                <textarea className="w-full ring-1 py-1 px-2 h-32 ring-gray-500 rounded focus:ring-black">
                                </textarea>
                            </div>
                            <div className="flex justify-end mb-3">
                                <button className="bg-gray-700 py-1 px-8 text-yellow-nac rounded hover:bg-gray-600">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-9/12 xl:w-7/12">
                            <div className="mb-10">
                                <h2 className=" text-2xl font-semibold mb-4">Oficina Principal</h2>
                                <p>Carrera 18 # 2 - 67</p>
                                <p className="mb-5">Sogamoso, Boyacá</p>
                                <p>sogamoso@nacsas.com.co</p>
                                <p>Teléfono: 7706463</p>
                                <p>Fax: 788-432-456</p>
                            </div>
                            <div className="mb-10">
                                <h2 className=" text-2xl font-semibold mb-4">Oficina Medellín</h2>
                                <p>Calle 34 # 20 - 22</p>
                                <p className="mb-5">Medellín, Antioquia</p>
                                <p>medellin@nacsas.com.co</p>
                                <p>Teléfono: 7627647</p>
                                <p>Fax: 953-423-765</p>
                            </div>
                            <div className="flex space-x-10">
                                <svg className="h-10" viewBox="0 0 408.788 408.788">
                                    <path d="M353.701 0H55.087C24.665 0 .002 24.662.002 55.085v298.616c0 30.423 24.662 55.085 55.085 55.085h147.275l.251-146.078h-37.951c-4.932 0-8.935-3.988-8.954-8.92l-.182-47.087c-.019-4.959 3.996-8.989 8.955-8.989h37.882v-45.498c0-52.8 32.247-81.55 79.348-81.55h38.65a8.96 8.96 0 0 1 8.955 8.955v39.704a8.96 8.96 0 0 1-8.95 8.955l-23.719.011c-25.615 0-30.575 12.172-30.575 30.035v39.389h56.285c5.363 0 9.524 4.683 8.892 10.009l-5.581 47.087c-.534 4.506-4.355 7.901-8.892 7.901h-50.453l-.251 146.078h87.631c30.422 0 55.084-24.662 55.084-55.084V55.085C408.786 24.662 384.124 0 353.701 0z" fill="#475993"/>
                                </svg>
                                <svg className="h-10" viewBox="0 0 382 382">
                                    <path d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844a10.06 10.06 0 0 1-10.056 10.056H65.345a10.06 10.06 0 0 1-10.056-10.056V150.403a10.06 10.06 0 0 1 10.056-10.056h42.806a10.06 10.06 0 0 1 10.056 10.056v179.441zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654a9.25 9.25 0 0 1-9.246 9.246H286.73a9.25 9.25 0 0 1-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.25 9.25 0 0 1-9.246 9.246h-44.426a9.25 9.25 0 0 1-9.246-9.246V149.593a9.25 9.25 0 0 1 9.246-9.246h44.426a9.25 9.25 0 0 1 9.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z" fill="#0077b7"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="w-full flex justify-center items-center py-8 bg-gray-100">
                <span className="text-gray-600 text-xs md:text-base">
                    &copy; 2021 hecho por N.A.C Equipos y Operaciones Industriales S.A.S
                </span>
            </footer>
        </div>
    )
}
