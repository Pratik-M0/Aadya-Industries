
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Factory,
  GraduationCap,
  Lightbulb,
  Users,
  Wrench,
} from 'lucide-react';

import { SectionTitle } from '../../components/ui';
import { CTA } from '../../components/sections';
import { CareerApplicationForm } from '../../components/interactive';

export const metadata: Metadata = {
  title: 'Careers | Aadya Industries',
  description:
    'See the current Marketing Executive opening at Aadya Industries and explore future career opportunities.',
};

const opportunities = [
  {
    title: 'Mechanical Design Engineer',
    department: 'Engineering & Design',
    type: 'Full-time',
    icon: Wrench,
    description:
      'Work on engineering drawings, equipment design and technical documentation for industrial process equipment.',
    skills: [
      'Mechanical Engineering',
      'AutoCAD / SolidWorks',
      'GA Drawings',
      'Equipment Design',
    ],
  },
  {
    title: 'Production Engineer',
    department: 'Manufacturing',
    type: 'Full-time',
    icon: Factory,
    description:
      'Coordinate manufacturing activities, production planning and execution to meet project specifications.',
    skills: [
      'Production Planning',
      'Manufacturing Processes',
      'Technical Drawings',
      'Coordination',
    ],
  },
  {
    title: 'Quality Engineer',
    department: 'Quality Assurance',
    type: 'Full-time',
    icon: CheckCircle2,
    description:
      'Support quality inspection, documentation and verification of materials, dimensions and fabrication work.',
    skills: [
      'Quality Inspection',
      'Engineering Drawings',
      'Documentation',
      'Quality Control',
    ],
  },
  {
    title: 'Fabrication Supervisor',
    department: 'Fabrication',
    type: 'Full-time',
    icon: Wrench,
    description:
      'Coordinate fabrication activities, monitor workmanship and ensure work follows approved drawings and specifications.',
    skills: [
      'Fabrication Knowledge',
      'Welding Processes',
      'Team Coordination',
      'Drawing Interpretation',
    ],
  },
  {
    title: 'Business Development Executive',
    department: 'Sales & Marketing',
    type: 'Full-time',
    icon: BriefcaseBusiness,
    description:
      'Develop customer relationships, identify industrial business opportunities and coordinate customer enquiries.',
    skills: [
      'Client Communication',
      'Lead Generation',
      'Industrial Sales',
      'Business Development',
    ],
  },
];

const benefits = [
  {
    icon: Lightbulb,
    title: 'Continuous Learning',
    description:
      'Develop technical knowledge and gain exposure to industrial engineering and manufacturing.',
  },
  {
    icon: Users,
    title: 'Collaborative Environment',
    description:
      'Work alongside engineering and manufacturing professionals on practical industrial projects.',
  },
  {
    icon: GraduationCap,
    title: 'Career Development',
    description:
      'Build professional skills through hands-on experience and opportunities to take on new responsibilities.',
  },
  {
    icon: Factory,
    title: 'Industry Exposure',
    description:
      'Gain experience across process equipment, fabrication and industrial manufacturing applications.',
  },
];

export default function Careers() {
  return (
    <main>
      {/* CAREERS HERO */}
      <section className="relative overflow-hidden bg-navy py-20 text-white md:py-28">
        <div className="gridline absolute inset-0 opacity-50" />

        <div className="container relative">
          <p className="eyebrow">CAREERS AT AADYA INDUSTRIES</p>

          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Build Your Career.
            <span className="text-orange">
              {' '}Build What Matters.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Be part of an engineering-driven team working towards
            practical industrial solutions. Explore opportunities
            to learn, contribute and grow with Aadya Industries.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-orange/90"
            >
              Apply Now <ArrowRight size={18} />
            </Link>

            <a
              href="#opportunities"
              className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3.5 text-sm font-extrabold text-white transition hover:bg-white/10"
            >
              Explore Career Areas
            </a>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="section">
        <div className="container grid items-center gap-10 lg:grid-cols-2">
          <SectionTitle
            eyebrow="GROW WITH US"
            title="Your skills can help shape industrial solutions."
            copy="At Aadya Industries, we believe that people are an important part of every successful engineering project. We encourage practical thinking, teamwork, responsibility and continuous improvement."
          />

          <div className="rounded-2xl border border-slate-200 bg-mist p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-navy">
              Why work with Aadya Industries?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We aim to create an environment where individuals can
              develop their abilities, gain industry exposure and
              contribute to meaningful engineering and manufacturing
              work.
            </p>

            <div className="mt-6 space-y-3">
              {[
                'Practical engineering exposure',
                'Team-based project execution',
                'Learning and development',
                'Opportunities to take responsibility',
              ].map((item) => (
                <p
                  key={item}
                  className="flex items-center gap-3 text-sm font-bold text-navy"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-orange"
                  />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section id="opportunities" className="section bg-mist">
        <div className="container">
          <article className="mb-10 overflow-hidden rounded-2xl border border-orange/30 bg-white shadow-sm">
            <div className="grid lg:grid-cols-[1fr_auto]">
              <div className="p-7 md:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-extrabold uppercase tracking-[.16em] text-orange">
                    Current opening
                  </p>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
                    Now hiring
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-extrabold text-navy md:text-3xl">
                  Marketing Executive
                </h2>
                <p className="mt-2 font-bold text-slate-600">
                  Sales &amp; Marketing · Full-time
                </p>
                <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                  Help grow Aadya Industries by building our presence with industrial and B2B customers, creating clear marketing content and supporting lead generation.
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="font-extrabold text-navy">What you’ll do</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                      <li>Plan and publish content for digital channels.</li>
                      <li>Support campaigns, enquiries and lead generation.</li>
                      <li>Coordinate with the team to explain products and services clearly.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-navy">What we’re looking for</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-600">
                      <li>Marketing experience or a relevant education.</li>
                      <li>Strong writing, communication and coordination skills.</li>
                      <li>Interest in digital marketing and B2B or industrial markets.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex items-center bg-navy p-7 text-white lg:max-w-xs lg:p-9">
                <div>
                  <p className="text-sm leading-6 text-slate-300">
                    Use the application form below to share your details and resume.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <div id="application-form" className="scroll-mt-24 rounded-2xl bg-white p-6 shadow-sm md:p-8">
            <SectionTitle
              eyebrow="APPLY NOW"
              title="Apply for Marketing Executive."
              copy="Share your details and attach your resume. Our team will review your application."
            />
            <div className="mt-7">
              <CareerApplicationForm />
            </div>
          </div>

          <SectionTitle
            eyebrow="CAREER AREAS"
            title="Explore other career areas."
            copy="The roles below show areas where we welcome interest. The Marketing Executive role above is our current opening."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((job) => {
              const Icon = job.icon;

              return (
                <article
                  key={job.title}
                  className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-lg bg-orange/10 p-3">
                      <Icon
                        size={25}
                        className="text-orange"
                      />
                    </div>

                    <span className="rounded-full bg-mist px-3 py-1 text-xs font-bold text-slate-600">
                      {job.type}
                    </span>
                  </div>

                  <p className="mt-5 text-xs font-extrabold uppercase tracking-wider text-orange">
                    {job.department}
                  </p>

                  <h3 className="mt-2 text-xl font-extrabold text-navy">
                    {job.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {job.description}
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <p className="text-sm font-extrabold text-navy">
                      Relevant Skills
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md bg-mist px-2.5 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-auto flex items-center gap-2 pt-7 text-sm font-extrabold text-navy transition group-hover:text-orange"
                  >
                    Express Interest
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="LIFE AT AADYA"
            title="A workplace built around learning and collaboration."
            copy="We value individuals who are ready to learn, take initiative and contribute to our engineering and manufacturing journey."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon
                    size={30}
                    className="text-orange"
                  />

                  <h3 className="mt-5 text-lg font-extrabold text-navy">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="section bg-mist">
        <div className="container">
          <SectionTitle
            eyebrow="APPLICATION PROCESS"
            title="Take the next step towards your career."
            copy="Getting in touch with our team is simple. Follow these steps to express your interest."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                number: '01',
                title: 'Explore Opportunities',
                description:
                  'Review the career areas and identify where your skills and interests fit.',
              },
              {
                number: '02',
                title: 'Share Your Resume',
                description:
                  'Contact our team through the website and share your updated resume and details.',
              },
              {
                number: '03',
                title: 'Connect With Us',
                description:
                  'Our team can review your application and contact you if a suitable opportunity is available.',
              },
            ].map((step) => (
              <article
                key={step.number}
                className="rounded-xl border border-slate-200 bg-white p-7"
              >
                <span className="text-3xl font-extrabold text-orange">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-extrabold text-navy">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME SUBMISSION */}
      <section className="section">
        <div className="container">
          <div className="overflow-hidden rounded-2xl bg-navy p-8 text-white md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-xs font-extrabold tracking-[.2em] text-orange">
                  JOIN OUR TEAM
                </p>

                <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
                  Don't see a suitable opportunity?
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                  We welcome professionals and fresh talent who are
                  interested in engineering, manufacturing and industrial
                  solutions. Share your profile with us for consideration
                  against suitable future opportunities.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-orange px-7 py-4 text-sm font-extrabold text-white transition hover:bg-orange/90"
              >
                Submit Your Resume
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EXISTING WEBSITE CTA */}
      <CTA />
    </main>
  );
}
