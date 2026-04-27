const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">About Dragon News</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          At Dragon News, our mission is to deliver accurate, timely, and
          engaging news that empowers our readers to stay informed about the
          world around them. We strive to be the most trusted source of
          information, combining journalistic integrity with innovative
          storytelling.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-lg leading-relaxed mb-4">
          Founded in 2023, Dragon News emerged from a passion for quality
          journalism in the digital age. Our founders recognized the need for a
          news platform that prioritizes truth, transparency, and reader
          engagement over sensationalism.
        </p>
        <p className="text-lg leading-relaxed">
          What started as a small team of dedicated journalists has grown into a
          comprehensive news network covering local, national, and international
          events. Our name, &quot;Dragon News,&quot; symbolizes our commitment
          to breathing fire into important stories and guarding the truth.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-2">
          <li>
            <strong>Integrity:</strong> We report facts accurately and fairly,
            without bias or agenda.
          </li>
          <li>
            <strong>Innovation:</strong> We embrace new technologies to enhance
            our storytelling and reach.
          </li>
          <li>
            <strong>Community:</strong> We believe in serving our readers and
            the communities we cover.
          </li>
          <li>
            <strong>Diversity:</strong> We strive for diverse perspectives in
            our reporting and team.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-lg leading-relaxed">
          Our team consists of experienced journalists, editors, and digital
          experts who are passionate about their craft. From investigative
          reporters to data analysts, each member of our dragon team plays a
          crucial role in bringing you the news that matters.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg leading-relaxed">
          Have a story tip or feedback? We&apos;d love to hear from you. Reach
          out to us at contact@dragonnews.com or follow us on social media for
          the latest updates.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
