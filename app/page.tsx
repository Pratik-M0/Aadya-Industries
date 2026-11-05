
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  Factory,
  FlaskConical,
  Layers3,
  ShieldCheck,
} from 'lucide-react';

import { CTA, Cards, Hero, Steps } from '../components/sections';
import { FAQ } from '../components/interactive';
import { SectionTitle } from '../components/ui';
import { products, services } from '../lib/data';

const clients = [
  ['Family Dil Se Bana', '/images/clients/family-dil-se-bana.jpg'],
  ['Prakash Masale Pune', '/images/clients/prakash-masale-pune.jpg'],
  ['Sancheti Foods', '/images/clients/sancheti-foods.jpg'],
  ['Sawai Foods', '/images/clients/sawai-foods.jpg'],
];

const featuredProjects = [
  {
    title: 'Industrial Machinery & Integrated Solutions',
    industry: 'Food Processing, Chemicals & Engineering',
    requirement:
      'Customized machinery and integrated process solutions, including ribbon blenders, screw conveyors, material handling systems and lump breakers.',
    capabilities:
      'Equipment selection, technical specifications, vendor coordination and project execution.',
  },
  {
    title: 'Custom Stainless Steel Fabrication',
    industry: 'Food, Chemical & Pharmaceutical Industries',
    requirement:
      'Customized stainless steel hoppers, equipment structures, storage vessels and fabrication assemblies designed around process requirements.',
    capabilities:
      'SS304/SS316 fabrication, dimensional control, welding coordination and surface finishing.',
  },
  {
    title: 'Process Equipment & Package Solutions',
    industry: 'Chemical, Pharmaceutical & Process Industries',
    requirement:
      'Engineering and supply coordination of industrial process equipment, including reactors, storage tanks, pressure vessels, heat exchangers and condensers.',
    capabilities:
      'Technical documentation, material specifications, fabrication coordination and quality inspection.',
  },
];

const industryDetails = [
  {
    name: 'Chemical',
    icon: FlaskConical,
    description:
      'Custom-engineered reactors, pressure vessels and heat exchangers for chemical processing, material handling and safe industrial operations.',
  },
  {
    name: 'Pharmaceutical',
    icon: Factory,
    description:
      'Precision-built process equipment for pharmaceutical production, including reactors, storage vessels and specialized processing systems.',
  },
  {
    name: 'API & Bulk Drugs',
    icon: Layers3,
    description:
      'Reliable process equipment for API and bulk drug manufacturing, designed for demanding production and chemical processing requirements.',
  },
  {
    name: 'Food & Beverage',
    icon: Factory,
    description:
      'Efficient processing, mixing, heating and storage equipment supporting food and beverage manufacturing applications.',
  },
  {
    name: 'Oil & Gas',
    icon: FlaskConical,
    description:
      'Heavy-duty pressure vessels, storage tanks and process equipment engineered for demanding oil and gas industry applications.',
  },
  {
    name: 'Petrochemical',
    icon: Factory,
    description:
      'Specialized reactors, columns and heat exchangers designed for complex petrochemical processes and demanding operating conditions.',
  },
  {
    name: 'Biotechnology',
    icon: Layers3,
    description:
      'Precision-engineered process vessels and equipment supporting controlled production and specialized biotechnology applications.',
  },
  {
    name: 'Distillery & Brewery',
    icon: Factory,
    description:
      'Process equipment for fermentation, distillation, liquid handling and storage requirements in distillery and brewery operations.',
  },
  {
    name: 'Textile',
    icon: FlaskConical,
    description:
      'Industrial reactors, pressure vessels and process equipment for dyeing, chemical treatment and textile manufacturing operations.',
  },
  {
    name: 'Paper & Pulp',
    icon: Factory,
    description:
      'Durable process equipment for pulp processing, chemical handling, storage and other paper manufacturing applications.',
  },
  {
    name: 'Paint & Polymer',
    icon: Layers3,
    description:
      'Specialized mixing vessels, reactors and storage solutions for paint, resin, coating and polymer manufacturing processes.',
  },
  {
    name: 'Industrial Manufacturing',
    icon: Factory,
    description:
      'Customized industrial equipment and fabrication solutions designed to support diverse manufacturing and engineering requirements.',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Requirement Understanding',
    description:
      'Understanding project specifications, process requirements and customer expectations.',
  },
  {
    number: '02',
    title: 'Engineering & Design',
    description:
      'Developing technical drawings, equipment layouts and engineering solutions.',
  },
  {
    number: '03',
    title: 'Manufacturing Planning',
    description:
      'Planning materials, resources and production activities for efficient execution.',
  },
  {
    number: '04',
    title: 'Fabrication & Assembly',
    description:
      'Executing fabrication and assembly as per approved drawings and specifications.',
  },
  {
    number: '05',
    title: 'Quality Inspection',
    description:
      'Verifying dimensions, material specifications and workmanship at defined stages.',
  },
  {
    number: '06',
    title: 'Installation & Commissioning',
    description:
      'Supporting equipment installation, commissioning and project handover.',
  },
  {
    number: '07',
    title: 'After-Sales Support',
    description:
      'Providing technical assistance and continued support after project delivery.',
  },
];

export default function Home() {
  return (
    <main>
      <Hero />

      {/* VALUE PROPOSITION */}
      <section className="border-b border-slate-200 bg-white">
        <div className="container grid divide-y divide-slate-200 py-4 sm:grid-cols-5 sm:divide-x sm:divide-y-0">
          {[
            'Precision Engineering',
            'Quality Manufacturing',
            'Custom-Built Solutions',
            'Coordinated Execution',
            'Long-Term Support',
          ].map((item) => (
            <p
              className="py-3 text-center text-xs font-extrabold text-navy"
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      {/* INDUSTRIAL CHALLENGES */}
      <section className="section bg-mist">
        <div className="container grid gap-12 lg:grid-cols-2">
          <SectionTitle
            eyebrow="THE PROJECT REALITY"
            title="Industrial Challenges Require More Than Off-the-Shelf Equipment."
            copy="Complex requirements need a partner that can connect process intent, practical engineering and execution."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              'Equipment designed without process context',
              'Delays from poor coordination',
              'Difficult customization requirements',
              'Inconsistent fabrication quality',
              'Multiple vendors for execution',
              'Limited technical responsiveness',
            ].map((item) => (
              <div
                className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="section">
        <div className="container">
          <SectionTitle
            eyebrow="ONE PARTNER, FULLER SCOPE"
            title="One Engineering Partner. From Concept to Execution."
            copy="Aadya Industries brings key project stages into one coordinated engineering conversation."
          />
          <Steps />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section bg-mist">
        <div className="container">
          <SectionTitle
            eyebrow="PRODUCTS & SOLUTIONS"
            title="Equipment configured around your application."
            copy="Explore editable product categories for process, fabrication and industrial equipment requirements."
          />

          <Cards items={products.slice(0, 8)} type="product" />

          <Link
            className="mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-navy hover:text-orange"
            href="/products"
          >
            Explore all solutions →
          </Link>
        </div>
      </section>

      {/* ENGINEERING SERVICES */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="ENGINEERING SERVICES"
            title="Capability that moves requirements toward execution."
          />
          <Cards items={services} type="service" />
        </div>
      </section>

      {/* WHY AADYA */}
      <section className="section bg-navy text-white">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <SectionTitle
              eyebrow="WHY AADYA INDUSTRIES"
              title="Why Industrial Teams Choose Aadya Industries"
              light
              copy="A practical, engineering-led approach for projects where detail, coordination and execution matter."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Engineering-led approach',
                'Customized solutions',
                'Manufacturing expertise',
                'Quality-focused execution',
                'Practical design',
                'Responsive technical support',
              ].map((item) => (
                <p
                  className="flex items-center gap-3 font-bold"
                  key={item}
                >
                  <CheckCircle2 className="text-orange" size={18} />
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="relative min-h-80 overflow-hidden rounded-xl">
            <Image
              src="/images/engineering-review.png"
              alt="Engineers reviewing technical drawings at a fabrication facility"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="INDUSTRIES WE SERVE"
            title="Built to support demanding industrial applications."
            copy="Delivering engineered process equipment and customized fabrication solutions across diverse industrial sectors."
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {industryDetails.map((industry) => {
              const Icon = industry.icon;

              return (
                <Link
                  href="/industries"
                  className="card p-5"
                  key={industry.name}
                >
                  <Icon className="text-orange" size={28} />

                  <h3 className="mt-5 font-extrabold text-navy">
                    {industry.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {industry.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="section bg-mist">
        <div className="container">
          <SectionTitle
            eyebrow="SELECTED PROJECTS"
            title="Case studies with the details decision-makers need."
          />

          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <article className="card p-6" key={project.title}>
                <h3 className="text-xl font-extrabold text-navy">
                  {project.title}
                </h3>

                <dl className="mt-5 space-y-3 text-sm">
                  <div>
                    <dt className="font-bold text-navy">Industry</dt>
                    <dd className="text-slate-600">
                      {project.industry}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-bold text-navy">
                      Requirement & solution
                    </dt>
                    <dd className="text-slate-600">
                      {project.requirement}
                    </dd>
                  </div>

                  <div>
                    <dt className="font-bold text-navy">Capabilities</dt>
                    <dd className="text-slate-600">
                      {project.capabilities}
                    </dd>
                  </div>
                </dl>

                <Link
                  href="/contact"
                  className="mt-6 inline-block text-sm font-extrabold text-navy hover:text-orange"
                >
                  Discuss a Similar Project →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL CAPABILITIES */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="TECHNICAL DEPTH"
              title="More than fabrication. Engineering that informs execution."
              copy="Use technical drawings, equipment photography and verified capability detail to communicate project readiness."
            />

            <div className="mt-7 grid grid-cols-2 gap-3 text-sm font-bold text-navy">
              {[
                'Mechanical engineering',
                'Equipment design',
                'GA drawings',
                '3D modelling',
                'Plant layout',
                'Piping design',
                'Material selection',
                'Quality inspection',
              ].map((item) => (
                <p className="rounded-md bg-mist p-3" key={item}>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-navy p-8">
            <ShieldCheck className="text-orange" size={38} />

            <h3 className="mt-6 text-2xl font-extrabold text-white">
              Quality focus, made visible.
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Build trust with clear drawings, defined inspection points and
              transparent project communication—not unsupported claims.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-block font-extrabold text-orange"
            >
              Explore our approach →
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="section bg-mist">
        <div className="container">
          <SectionTitle
            eyebrow="CUSTOMER PROOF"
            title="Trusted by leading food and manufacturing brands."
          />

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {clients.map(([name, image]) => (
              <article
                className="card grid h-40 place-items-center p-5"
                key={name}
              >
                <Image
                  src={image}
                  alt={`${name} logo`}
                  width={160}
                  height={120}
                  className="max-h-24 w-auto object-contain"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* UPDATED HOW IT WORKS & FAQ */}
      <section className="section bg-mist">
        <div className="container">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">

            {/* HOW IT WORKS */}
            <div>
              <SectionTitle
                eyebrow="HOW IT WORKS"
                title="A clear journey from requirement to execution."
                copy="Our structured approach ensures every project moves forward with proper planning, engineering and quality control."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {processSteps.map((step) => (
                  <div
                    key={step.number}
                    className="group rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange/10 text-sm font-extrabold text-orange">
                        {step.number}
                      </span>

                      <span className="text-2xl font-extrabold text-slate-200 transition-colors group-hover:text-orange/50">
                        →
                      </span>
                    </div>

                    <h3 className="mt-5 text-base font-extrabold leading-snug text-navy">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* COMMON QUESTIONS */}
            <div className="lg:sticky lg:top-24">
              <SectionTitle
                eyebrow="COMMON QUESTIONS"
                title="Answers to help you get started."
                copy="Find answers to common questions about our equipment, engineering capabilities and project requirements."
              />

              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
                <FAQ />
              </div>

              {/* CONTACT SUPPORT */}
              <div className="mt-5 flex flex-col gap-4 rounded-xl bg-navy p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-extrabold text-white">
                    Have a specific requirement?
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Let's discuss your industrial equipment needs.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex shrink-0 items-center justify-center rounded-lg bg-orange px-5 py-3 text-sm font-extrabold text-white transition hover:bg-orange/90"
                >
                  Contact Us →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <CTA />
    </main>
  );
}
