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
          uncy.pdf는 불필요하지만 갖고 싶은 제품을 만듭니다. 
          <br />
          uncy.pdf creates products that are unnecessary, yet desirable.
          <br />
        </p>
      </section>

      <section className="mx-auto max-w-5xl py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 text-[12px] uppercase tracking-[0.2em] text-neutral-500">
              Philosophy
            </div>

            <p className="text-[20px] leading-[1.45] md:text-[30px]">
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
                커미션, 협업, 제작 문의
                <br />
                Commissions, collaborations and custom inquiries
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}