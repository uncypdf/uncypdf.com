import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#171716] px-[10px] py-[10px] text-neutral-100 md:px-3 md:py-3">
      <section className="rounded-md bg-[#009B46] px-4 py-4 text-black md:px-6 md:py-6">
        <Header />

        <h1 className="max-w-5xl text-[72px] font-black leading-[0.82] tracking-[-0.08em] md:text-[180px]">
          About
        </h1>

        <p className="mt-10 max-w-2xl text-[16px] font-medium leading-[1.35] tracking-[-0.02em] md:text-[36px]">
          uncy.pdf는 불필요하지만 갖고 싶은 제품을 만듭니다. 
          <br />
          uncy.pdf creates products that are unnecessary, yet desirable.
          <br />
        </p>
      </section>

      <section className="relative mt-[10px] overflow-hidden rounded-md">
        <div className="relative min-h-[900px] md:min-h-[1100px]">
          <Image
            src="/archive/1.png"
            alt="Pyramid"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 mx-auto flex min-h-[900px] max-w-6xl items-center px-6 py-16 md:min-h-[1100px] md:px-12">
            <div className="grid w-full gap-12 md:grid-cols-[220px_1fr] md:gap-20">
              <div>
                <div className="text-[12px] uppercase tracking-[0.24em] text-neutral-400">
                  Philosophy
                </div>
              </div>

              <div className="max-w-3xl">
                <p className="text-[15px] leading-[1.9] tracking-[-0.01em] text-white md:text-[18px] md:leading-[2]">
                우리는 물건의 쓸모를 기능만으로 판단하지 않습니다. 어떤 물건이 의미 있는지, 아름다운지, 혹은 곁에 두고 싶은지는 결국 사용하는 사람이 결정한다고 믿습니다.
                <br />
                <br />
                uncy.pdf는 쓸모와 무쓸모의 경계를 구분하기보다, 물건이 가진 본연의 미학에 집중합니다.
                <br />
                <br />
                기능을 위해 형태를 만드는 것이 아니라, 형태가 주는 경험과 감각을 탐구합니다.
                <br />
                <br />
                우리의 가구와 오브제는 누군가에겐 실용적이고, 누군가에겐 불필요하지만, 언제나 갖고 싶은 물건이기를 바랍니다.
                <br />
                <br />
                <br />
                We do not believe the value of an object can be defined by function alone. Whether something is meaningful, beautiful, or worth keeping close is ultimately decided by the person who lives with it.
                <br />
                <br />
                Rather than drawing a line between usefulness and uselessness, uncy.pdf focuses on the intrinsic aesthetics of objects.
                <br />
                <br />
                We are interested in the experiences and emotions that form can create.
                <br />
                <br />
                Our furniture and objects may be practical to some and unnecessary to others, but they are always intended to be things worth wanting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl py-20">
        <div className="max-w-xl">
          <div className="mb-6 text-[12px] uppercase tracking-[0.24em] text-neutral-500">
            Contact
          </div>

          <div className="space-y-3 text-[18px] underline underline-offset-4 md:text-[28px]">
            <a
              href="https://www.instagram.com/uncy.pdf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>

            <br />

            <a href="mailto:info@uncypdf.com">info@uncypdf.com</a>

            <p className="mt-6 text-[14px] no-underline text-neutral-500 md:text-[16px]">
              커미션, 협업, 제작 문의
              <br />
              Commissions, collaborations and custom inquiries
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}