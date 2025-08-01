import Link from 'next/link'
import logo from '../../assets/logo_blanco.webp'
import Image from 'next/image'

export default function page() {
  return (
    <>
      <main className="w-full min-h-screen bg-cover bg-center " style={{ backgroundImage: `url('/assets/ypf.jpg')` }}>
        <div className="w-full min-h-screen bg-s-shadow/50 flex items-center justify-center flex-col gap-5">
          <div>
            <Image src={logo} width={150} className="absolute left-40 top-40" alt="" />
            <Link href="/admin/logout" className='text-white'>Cerrar sesion</Link>
          </div>
          <h2 className="text-white font-main text-6xl font-bold">¡Bienvenido, YPF!</h2>
          <a href="#docs" className="text-2xl text-white font-main">Ver mis documentos</a>
        </div>
      </main>
      {/* <section className="w-full min-h-screen" id="docs">
            <h2>Mis documentos</h2>
        </section> */}
    </>
  )
}