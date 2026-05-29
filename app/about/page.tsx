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

        <p className="mt-8 max-w-2xl text-[18px] font-semibold leading-[1.2] md:text-[28px]">
          uncy.pdf is a woodworking and furniture project focused on
          unnecessary but meaningful objects.
        </p>
      </section>

      <section className="mx-auto max-w-5xl py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 text-[12px] uppercase tracking-[0.2em] text-neutral-500">
              Philosophy
            </div>

            <p className="text-[22px] leading-[1.3] md:text-[32px]">
              We explore furniture, objects and experiments that do not
              necessarily solve problems, but create new ways of seeing,
              using and living.
            </p>
          </div>

          <div>
            <div className="mb-4 text-[12px] uppercase tracking-[0.2em] text-neutral-500">
              Contact
            </div>

            <div className="space-y-2 text-[18px] underline md:text-[24px]">
              <a
                href="https://www.instagram.com/uncy.pdf/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>

              <br />

              <a href="mailto:hello@uncypdf.com">hello@uncypdf.com</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}