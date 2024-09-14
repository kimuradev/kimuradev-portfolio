export default function Page() {
  return (
     <section className="flex flex-col flex-1 justify-center lg:px-8">
       <h1 className="mb-8 text-xl lg:text-3xl font-semibold tracking-tighter opacity-0 transition-fadein-down"
         style={{ animationDelay: '500ms' }}>
         hello world, it's me
       </h1>

       <h2 className='mb-4 text-6xl lg:text-8xl font-semibold tracking-tighter opacity-0 transition-fadein-down'
         style={{ animationDelay: '600ms' }}>
         Leandro Kimura
       </h2>

       <h2 className='mb-12 text-2xl lg:text-6xl font-semibold tracking-tighter opacity-0 text-zinc-400 transition-fadein-down'
         style={{ animationDelay: '700ms' }}>
         we have power to change the world.
       </h2>

       <div className='mb-8 max-w-[600px] opacity-0 transition-fadein-down'
         style={{ animationDelay: '800ms' }}>
         <p >
           I'm a software engineer driven by a passion for technology and its potential to reshape the world.
           explore my work to see how innovation and creativity can drive meaningful change.
         </p>
       </div>
     </section>
  )
}
