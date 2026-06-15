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

        <p className="mt-8 max-w-3xl text-[18px] font-semibold leading-[1.25] md:text-[28px]">
          uncy.pdf는 불필요하지만 의미 있는 오브제를 만드는 가구 및 목공 프로젝트입니다.
          <br />
          <br />
          uncy.pdf is a furniture and woodworking practice focused on creating unnecessary but meaningful objects.
        </p>
      </section>

      <section className="mx-auto max-w-5xl py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 text-[12px] uppercase tracking-[0.2em] text-neutral-500">
              Philosophy
            </div>

            <p className="text-[20px] leading-[1.45] md:text-[30px]">
              우리는 문제를 해결하기 위한 제품보다 새로운 시선과 경험을 만드는 물건에 관심이 있습니다.
              <br />
              <br />
              가구, 오브제, 그리고 실험적인 프로젝트를 통해 기능과 조형의 경계를 탐구합니다.
              <br />
              <br />
              We are interested in objects that create new perspectives and experiences rather than simply solving problems.
              <br />
              <br />
              Through furniture, objects, and experimental projects, we explore the boundary between utility and form.
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

              <a href="mailto:info@uncypdf.com">info@uncypdf.com</a>
              <p className="mt-6 text-[14px] no-underline text-neutral-500 md:text-[16px]">
                커미션, 협업, 제작 문의를 환영합니다.
                <br />
                Commissions, collaborations and custom inquiries are welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}