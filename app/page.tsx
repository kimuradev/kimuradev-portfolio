import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-xl lg:text-3xl font-semibold tracking-tighter">
        hello world, it's me
      </h1>

      <h2 className='mb-4 text-6xl lg:text-8xl font-semibold tracking-tighter'>
        Leandro Kimura
      </h2>

      <h2 className='mb-8 text-2xl lg:text-6xl font-semibold tracking-tighter text-zinc-400'>
        we have power to change the world.
      </h2>

      <div className='max-w-[600px]'>
        <p >
          i'm a software engineer driven by a passion for technology and its potential to reshape the world.
          explore my work to see how innovation and creativity can drive meaningful change.
        </p>
        <p>
          
        </p>
      </div>


      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
