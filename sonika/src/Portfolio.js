import React from "react";

export default function Portfolio() {
  return (
    <div className="flex min-h-screen text-white font-sans bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 scroll-smooth">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-1/3 lg:w-1/4 p-10 fixed h-full flex-col justify-start border-r border-slate-800 overflow-y-auto">
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">Sonika Nallapu</h1>
          <p className="text-sm text-slate-400">
            Bridging biology and engineering to shape the future of healthcare
          </p>
        </div>

        <nav className="text-md font-medium text-slate-400 space-y-4">
          <a href="#about" className="block hover:text-teal-400">About</a>
          <a href="#experience" className="block hover:text-teal-400">Experience</a>
          <a href="#projects" className="block hover:text-teal-400">Projects</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="w-full md:ml-1/3 lg:ml-1/4 px-8 py-20 space-y-40 overflow-x-hidden scroll-smooth text-right max-w-4xl ml-auto">
        {/* About Section */}
        <section id="about" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">About</h2>
          <p className="text-slate-400">
            I'm a biomedical engineer passionate about translating research into impactful medical technologies.
            I specialize in medical device design, tissue engineering, and applied molecular diagnostics.
            I’m currently seeking roles that allow me to innovate at the intersection of biology and engineering.
          </p>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">Experience</h2>

          <div className="mb-10">
            <h3 className="text-xl font-semibold text-white">Scientist I — CerFlux</h3>
            <p className="text-slate-400">June 2024 – Present</p>
            <p className="text-slate-400 mt-2">
              CerFlux is a biotechnology company focused on personalized cancer treatment through its POET® platform.
              I work within the preclinical R&D team conducting tumor viability assays and contributing to product pipeline development.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Template Production Associate — BioGX</h3>
            <p className="text-slate-400">July 2023 – June 2024</p>
            <p className="text-slate-400 mt-2">
              At BioGX, I prepared and tested lyophilized PCR controls in Sample-Ready™ format to support rapid diagnostic workflows.
              I also improved batch tracking and quality documentation practices.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="text-3xl font-bold text-teal-300 mb-6">Projects</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold">AdjustiFlow (2024)</h3>
              <p className="text-slate-400 mt-2">
                Senior capstone project: created a reusable sensor to measure blood flow in small vessels.
              </p>
              <ul className="list-disc list-inside text-sm text-slate-500 mt-2">
                <li>SolidWorks, 3D printing, mechanical testing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold">Tissue Engineering Presentation</h3>
              <p className="text-slate-400 mt-2">
                Analyzed scaffold materials for optimized tissue growth and cell attachment.
              </p>
              <ul className="list-disc list-inside text-sm text-slate-500 mt-2">
                <li>Hydrogel generation, scientific storytelling</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}