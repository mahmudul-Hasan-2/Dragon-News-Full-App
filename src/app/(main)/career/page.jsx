const CareerPage = () => (
  <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-bold text-center mb-8">
      Careers at Dragon News
    </h1>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Join the Dragon Team</h2>
      <p className="text-lg leading-relaxed">
        At Dragon News, we&apos;re always looking for passionate individuals
        who share our commitment to quality journalism and innovative
        storytelling. If you&apos;re ready to make an impact and be part of a
        dynamic team, we want to hear from you!
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-medium mb-2">Innovative Environment</h3>
          <p className="leading-relaxed">
            Work with cutting-edge tools and technologies in digital
            journalism. We're constantly evolving to bring the best stories to
            our readers.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Work-Life Balance</h3>
          <p className="leading-relaxed">
            We value our team's well-being with flexible schedules, remote
            work options, and comprehensive benefits.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Professional Growth</h3>
          <p className="leading-relaxed">
            Continuous learning opportunities, mentorship programs, and career
            advancement paths to help you reach your full potential.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2">Impactful Work</h3>
          <p className="leading-relaxed">
            Make a real difference by informing and engaging communities with
            stories that matter.
          </p>
        </div>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
      <div className="space-y-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-xl font-medium mb-2">Senior Journalist</h3>
          <p className="mb-2">
            Join our investigative team to uncover and report on important
            stories.
          </p>
          <p className="text-sm text-gray-600">
            Location: Remote | Type: Full-time
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-xl font-medium mb-2">
            Digital Content Producer
          </h3>
          <p className="mb-2">
            Create engaging multimedia content for our digital platforms.
          </p>
          <p className="text-sm text-gray-600">
            Location: Hybrid | Type: Full-time
          </p>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h3 className="text-xl font-medium mb-2">Data Analyst</h3>
          <p className="mb-2">
            Analyze trends and provide insights to drive our editorial
            decisions.
          </p>
          <p className="text-sm text-gray-600">
            Location: On-site | Type: Full-time
          </p>
        </div>
      </div>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Our Culture</h2>
      <p className="text-lg leading-relaxed mb-4">
        At Dragon News, we foster a culture of collaboration, creativity, and
        continuous improvement. Our team is diverse, inclusive, and united by
        a shared passion for journalism.
      </p>
      <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
        <li>Weekly team meetings and brainstorming sessions</li>
        <li>Professional development workshops and conferences</li>
        <li>Recognition programs for outstanding contributions</li>
        <li>Community outreach and volunteer opportunities</li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-4">Apply Today</h2>
      <p className="text-lg leading-relaxed mb-4">
        Ready to join the Dragon News family? Send your resume and cover
        letter to careers@dragonnews.com. We look forward to hearing from you!
      </p>
      <p className="text-lg leading-relaxed">
        Even if you don't see a position that matches your skills, we're
        always interested in meeting talented individuals. Reach out to us
        about future opportunities.
      </p>
    </section>
  </div>
);

export default CareerPage;
