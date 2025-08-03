import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ResumePage() {
  return (
    <main className="max-w-3xl mx-auto bg-zinc-950 text-neutral-100 rounded-lg shadow-xl my-12 p-8 md:p-12 print:p-2">
      {/* Header */}
      <section className="text-center mb-6 border-b border-zinc-800 pb-6">
        <h1 className="text-4xl font-extrabold text-cyan-400 tracking-tight">
          Aly Badawy
        </h1>
        <div className="text-md text-gray-400 font-semibold mb-1">
          Wayne, NJ
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-gray-400 text-sm mb-2">
          <a
            href="mailto:me@alybadawy.com"
            className="hover:text-cyan-300 flex items-center gap-1"
          >
            <FaEnvelope /> me@alybadawy.com
          </a>
          <span className="hidden md:inline">|</span>
          <a
            href="https://github.com/AlyBadawy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 flex items-center gap-1"
          >
            <FaGithub /> github.com/AlyBadawy
          </a>
          <span className="hidden md:inline">|</span>
          <a
            href="https://www.linkedin.com/in/aly-badawy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 flex items-center gap-1"
          >
            <FaLinkedin /> linkedin.com/in/aly-badawy
          </a>
        </div>
        <div className="text-md text-fuchsia-300 font-bold mt-2">
          Technical Lead & Senior Software Engineer
        </div>
        <div className="text-gray-300 text-base mt-3 max-w-2xl mx-auto text-left">
          Proven technical leader delivering secure, scalable software and
          guiding cross-functional teams. Specialized in full-stack development,
          cloud, DevSecOps, and modern architecture. Active Public Trust
          Clearance. Passionate about building high-quality systems and driving
          impactful outcomes.
        </div>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-xl text-cyan-400 font-semibold mb-3 tracking-wide">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-300 text-sm">
          <ul className="list-disc ml-5">
            <li>
              Ruby on Rails, ReactJS, TypeScript, JavaScript (ES6+), HTML/CSS
            </li>
            <li>RESTful APIs, Microservices</li>
            <li>PostgreSQL, MySQL, MS SQL Server</li>
            <li>Docker, Kubernetes, AWS</li>
            <li>Kafka, Amazon Kinesis</li>
            <li>Git, CI/CD (GitHub Actions, Jenkins)</li>
          </ul>
          <ul className="list-disc ml-5">
            <li>Agile &amp; Test-Driven Development (TDD)</li>
            <li>Linux &amp; Windows environments</li>
            <li>iOS (Swift, SwiftUI)</li>
            <li>.NET (C#, VB.NET), Java, C, C++</li>
            <li>PCB &amp; hardware prototyping, IoT &amp; embedded systems</li>
            <li>Advanced Microsoft Excel</li>
          </ul>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl text-cyan-400 font-semibold mb-3 tracking-wide">
          Experience
        </h2>

        {/* Steampunk */}
        <div className="mb-8">
          <div className="flex flex-col justify-between">
            <div className="font-bold text-fuchsia-300">
              Senior Software Engineer &amp; Technical Lead
            </div>
            <div className="text-gray-400 text-xs italic">
              Steampunk Inc. (McLean, VA) &mdash; Mar 2022–Present
            </div>
          </div>
          <ul className="list-disc ml-5 text-gray-300 mt-1 text-sm space-y-1">
            <li>
              Led a team of 6 building mission-critical Rails/React applications
              for USCIS (U.S. Dept. of Homeland Security).
            </li>
            <li>
              Drove architecture and delivery of secure, scalable web apps;
              enforced clean code and modern patterns.
            </li>
            <li>
              Introduced improved methods for design, code reviews, and
              continuous delivery to elevate quality and team performance.
            </li>
            <li>
              Established TDD practices and accessibility compliance (Section
              508) across projects.
            </li>
            <li>
              Translated complex policy/regulatory needs into actionable, secure
              software features.
            </li>
          </ul>
        </div>

        {/* Freelancer */}
        <div className="mb-8">
          <div className="flex flex-col justify-between">
            <div className="font-bold text-fuchsia-300">
              Software Developer (Freelancer)
            </div>
            <div className="text-gray-400 text-xs italic">
              Remote &mdash; Jan 2019–Nov 2021
            </div>
          </div>
          <ul className="list-disc ml-5 text-gray-300 mt-1 text-sm space-y-1">
            <li>
              Developed and maintained full-stack apps for diverse clients using
              Rails, ASP.NET, Django, and cloud platforms.
            </li>
            <li>
              Designed RESTful APIs, managed databases, and implemented secure
              payment solutions with Stripe.
            </li>
            <li>
              Automated deployments via CI/CD, reduced release times, and
              ensured reliable hosting on VPS/cloud.
            </li>
            <li>
              Built desktop medical EDI parsers, custom IoT solutions, and AWS
              cloud integrations.
            </li>
            <li>
              Innovated emergency comms using radio networks for critical IoT
              use cases.
            </li>
          </ul>
        </div>

        {/* Fourteen Inch LLC */}
        <div className="mb-8">
          <div className="flex flex-col justify-between">
            <div className="font-bold text-fuchsia-300">
              System Admin &amp; Solutions Developer (Co-founder)
            </div>
            <div className="text-gray-400 text-xs italic">
              Fourteen Inch LLC (Brooklyn, NY) &mdash; Jan 2014–Nov 2018
            </div>
          </div>
          <ul className="list-disc ml-5 text-gray-300 mt-1 text-sm space-y-1">
            <li>
              Architected and managed secure networks using Ubuntu servers, AWS,
              OpenVPN, and Zohoto.
            </li>
            <li>
              Developed “Shoppy” (Rails e-commerce platform) and “Finish.io”
              (project management system with React/REST API).
            </li>
            <li>
              Built marketing sites, custom iOS apps, and automated
              testing/deployment workflows.
            </li>
            <li>
              Delivered client solutions in web, mobile, and hardware; provided
              ongoing system administration and support.
            </li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl text-cyan-400 font-semibold mb-3 tracking-wide">
          Education
        </h2>
        <div className="text-gray-300 text-sm">
          <div>
            <span className="font-bold text-fuchsia-300">
              Master of Information Systems
            </span>
            , University of Phoenix (Online Campus) <br />
            <span className="text-gray-400">March 2010 &mdash; GPA: 3.17</span>
          </div>
          <div className="mt-2">
            <span className="font-bold text-fuchsia-300">
              B.S. of Managerial Information Systems
            </span>
            , Sadat Academy for Management Sciences, Cairo, Egypt <br />
            <span className="text-gray-400">
              June 2006 &mdash; Very Good with second degree of honor
            </span>
          </div>
        </div>
      </section>

      {/* Download Resume */}
      <div className="mt-10 flex justify-center">
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-bold shadow hover:bg-cyan-600 transition"
        >
          Download PDF Resume
        </a>
      </div>
    </main>
  );
}
