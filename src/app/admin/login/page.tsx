import React from 'react'
import Image from 'next/image'
import logo from '../../assets/logo.webp'
export default function page() {
  return (
    <main className='bg-white w-full min-h-screen flex items-center justify-center font-main'>
        <section className='text-black w-[650px] h-[550px] shadow-xl'>
            <div className='m-auto'>
                <Image src={logo} width={150} className='m-auto' alt="" />
                <hr className='w-72 m-auto' />
            </div>
            <section className='mt-5 flex gap-10 flex-col items-center justify-center'>
                <h2 className='text-3xl font-bold'>Inicio de Sesión</h2>
                <form action="" className='w-full flex items-center flex-col gap-5'>
                    <div className='w-4/5 flex flex-col'>
                        <label htmlFor="">Email</label>
                        <input type="text" className='h-10 border border-bluemain rounded-2xl' />
                    </div>
                    <div className='w-4/5 flex flex-col'>
                        <label htmlFor="">Contraseña</label>
                        <input type="password" className='h-10 border border-bluemain rounded-2xl' />
                    </div>
                    <button type='submit' className='mt-5 bg-bronze text-white w-4/5 h-10 rounded-2xl transition border hover:border-bronze hover:bg-white hover:text-bronze'>Iniciar sesión</button>
                </form>
                <div>
                    <p className='text-bluemain text-md font-bold hover:underline'>¿Olvidaste tu contraseña?</p>
                </div>
            </section>
        </section>
    </main>
  )
}
