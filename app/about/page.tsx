import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#171716] px-[10px] py-[10px] text-neutral-100 md:px-3 md:py-3">
      <section className="rounded-md bg-[#009B46] px-4 py-4 text-black md:px-6 md:py-6">
        <Header />

        <h1 className="max-w-5xl text-[72px] font-black leading-[0.82] tracking-[-0.08em] md:text-[180px]">
          About
        </h1>

        <p className="mt-10 max-w-2xl text-[16px] font-medium leading-[1.35] tracking-[-0.02em] md:text-[36px]">
          불필요하지만 갖고 싶은 제품을 만듭니다.
          <br />
          We create products that are unnecessary, yet desirable.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 md:px-0">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="max-w-3xl text-[15px] leading-[1.8] tracking-[-0.01em] text-neutral-200 md:text-[22px] md:leading-[1.9]">
              uncy.pdf는 쓸모와 무쓸모를 구분하지 않습니다.
              <br />
              <br />
              언제나 갖고 싶은 물건을 만듭니다.
              <br />
              <br />
              <br />
              uncy.pdf does not distinguish between usefulness and uselessness.
              <br />
              <br />
              We create things worth wanting.
            </p>
          </div>

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

              
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}