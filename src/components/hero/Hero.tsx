import Image from "next/image";
import Navbar from "../layout/Navbar";

export default function Hero() {
  return (
    <>
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">

        {/* Floating Shapes */}

        <div className="absolute left-10 top-1/2 w-16 h-16 bg-blue-500/20 rounded-full blur-sm" />
        <div className="absolute right-10 top-1/2 w-16 h-16 bg-blue-500/20 rounded-full blur-sm" />
        <div className="absolute left-0 top-96 w-10 h-10 bg-orange-500/20 rounded-full blur-sm" />
        <div className="absolute right-0 top-96 w-10 h-10 bg-orange-500/20 rounded-full blur-sm" />

        <div className="container mx-auto px-6">

          <div className="max-w-4xl mx-auto text-center">
<br /><br />
<br /><br />
<br />

            {/* Profile Image */}

            <div className="flex justify-center mb-16 md:mb-24">

              <div className="relative">

                <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-3xl scale-125" />

                <div
                  className="
                  relative
                  w-[250px]
                  h-[250px]
                  md:w-[290px]
                  md:h-[290px]
                  rounded-full
                  overflow-hidden
                  border
                  border-white/10
                  shadow-[0_0_60px_rgba(0,0,0,0.4)]
                "
                >
                  <br /><br />
                  <br /><br />
                  <Image
                    src="/profile.jpg"
                    alt="Mathuppriya"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

              </div>

            </div>

            {/* Badge */}

            <div className="inline-flex px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-16">

              <span className="text-emerald-400 text-sm tracking-widest font-medium">
                HELLO, I'M
              </span>

            </div>

            {/* Name */}

<h1
  className="
  font-playfair
  text-[4rem]
  md:text-[5.5rem]
  lg:text-[6rem]
  font-bold
  text-white
  leading-none
  "
>
  Mathuppriya
</h1>
<br />
{/* Role */}

<div className="mt-8">

  <h2
    className="
    text-xl
    md:text-2xl
    text-slate-200
    font-semibold
    "
  >
    Full Stack Developer
  </h2>

  <p
    className="
    mt-5
    text-lg
    text-slate-400
    "
  >
    Software Engineering Undergraduate
  </p>

</div>

<br /><br />

{/* Stats */}

<div className="flex justify-center gap-16 md:gap-24 mt-20 flex-wrap">

  <div>
    <h3 className="text-4xl md:text-5xl font-bold text-white">
      3.18
    </h3>

    <p className="text-slate-400 mt-3 text-base">
      GPA
    </p>
  </div>

  <div>
    <h3 className="text-4xl md:text-5xl font-bold text-white">
      4+
    </h3>

    <p className="text-slate-400 mt-3 text-base">
      Projects
    </p>
  </div>

  <div>
    <h3 className="text-4xl md:text-5xl font-bold text-white">
      10+
    </h3>

    <p className="text-slate-400 mt-3 text-base">
      Technologies
    </p>
  </div>

</div>

<br /><br />
{/* Buttons */}

<div className="flex justify-center gap-6 mt-20 flex-wrap">

  <button
    className="
    w-[150px]
    h-[48px]
    rounded-full
    bg-white
    text-black
    text-xl
    font-semibold
    transition-all
    duration-300
    hover:scale-105
    "
  >
    View Projects
  </button>

  <button
    className="
    w-[150px]
    h-[48px]
    rounded-full
    border
    border-white/30
    text-white
    text-xl
    font-medium
    transition-all
    duration-300
    hover:bg-white/5
    "
  >
    Download CV
  </button>

</div>

            </div>

          </div>

      </section>
    </>
  );
}