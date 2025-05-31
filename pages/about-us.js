import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Card from '../components/Card';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>{`About Us | Gathered Roots Cleaning Services`}</title>
        <meta
          name="description"
          content="Learn about Gathered Roots Cleaning: our story, mission, and core values. Discover why we are Lewiston's trusted cleaning professionals."
        />
        <meta
          property="og:title"
          content="About Us | Gathered Roots Cleaning Services"
        />
        <meta
          property="og:description"
          content="Learn about Gathered Roots Cleaning - a veteran-owned, family-operated cleaning business serving Lewiston and Clarkston."
        />
        <link rel="canonical" href="https://www.gatheredrootscleaning.com/about-us" />
        <meta property="og:url" content="https://www.gatheredrootscleaning.com/about-us" />
        
        {/* About Us / Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              name: 'About Us',
              description: 'Learn about Gathered Roots Cleaning - a veteran-owned, family-operated cleaning business serving the Lewiston-Clarkston area',
              url: 'https://www.gatheredrootscleaning.com/about-us',
              about: {
                '@type': 'LocalBusiness',
                '@id': 'https://www.gatheredrootscleaning.com',
                name: 'Gathered Roots Cleaning',
                description: 'Veteran-owned, family-operated cleaning business providing professional cleaning services',
                foundingDate: '2024',
                hasCredential: 'Veteran-owned business',
                additionalProperty: [
                  {
                    '@type': 'PropertyValue',
                    name: 'Business Type',
                    value: 'Family-operated'
                  },
                  {
                    '@type': 'PropertyValue',
                    name: 'Veteran Status',
                    value: 'Veteran-owned'
                  }
                ]
              }
            })
          }}
        />
      </Head>
      <main className="bg-background min-h-screen flex flex-col">
        <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-primary-accent-green mb-8 text-center">Our Story</h1>
              <div className="text-center max-w-3xl mx-auto prose prose-lg text-card-text-secondary">
                <p className="mb-4">
                  Family founded. Purpose driven. Rooted in care.
                </p>
                <p className="mb-4">
                  Gathered Roots Cleaning began as a conversation. We talked
                  about the kind of life we wanted to build, the example we hoped to set for our
                  children, and the kind of service we believed our community deserved.
                </p>
                <p className="mb-4">
                  As a U.S. Army veteran, I bring a background of discipline, structure, and
                  integrity. My wife, Chelsea, brings warmth, intuition, and a deep commitment to caring for
                  others. Together, we saw an opportunity not just to clean homes, but to create calm,
                  cared-for spaces where families can thrive.
                </p>
                <p className="mb-4">
                  Our name, Gathered Roots Cleaning, reflects what matters most to us: family, home, and
                  community.
                </p>
                <p className="mb-4">{`'Gathered' speaks to the way we bring people together — not just physically but emotionally. 'Roots' remind us of what grounds us — the values we live by and the home we are building with our children.`}</p>
                <p className="mb-4">
                  This business is not just our livelihood. It is a legacy we are building for our
                  family and a service we are honored to offer yours.
                </p>
                <p className="mb-4">
                  At Gathered Roots, we treat every home as if it were our own — with respect, care,
                  and attention to the little things that make a big difference.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-primary-accent-green mb-6 text-center">Mission Statement</h2>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-card-text-secondary text-lg leading-relaxed">
                  To provide exceptional cleaning services that create peaceful and
                  healthy homes, allowing our clients to reclaim their time and enjoy what matters
                  most.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-6 text-center">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center flex flex-col items-center">
                <h3 className="text-xl font-semibold text-card-text-primary mb-2">
                  Reliability
                </h3>
                <p className="text-card-text-secondary text-center">
                  You can count on us — not just to arrive, but to care. With every visit, we bring
                  consistency, follow-through, and a quiet dependability that lets you rest easy. In
                  a world that moves fast, we offer something steady.
                </p>
              </Card>
              <Card className="text-center flex flex-col items-center">
                <h3 className="text-xl font-semibold text-card-text-primary mb-2">Quality</h3>
                <p className="text-card-text-secondary text-center">
                  We believe in doing things the right way, even when no one is watching. From the
                  corners we do not skip to the care we put into every detail, our work is guided by
                  pride, craftsmanship, and a deep respect for your home.
                </p>
              </Card>
              <Card className="text-center flex flex-col items-center">
                <h3 className="text-xl font-semibold text-card-text-primary mb-2">
                  Community-Driven
                </h3>
                <p className="text-card-text-secondary text-center">
                  We believe a strong home begins with a strong community. Our work is a reflection
                  of the care we feel for the families and neighborhoods around us. We are here to
                  serve not just houses, but the people who make them home.
                </p>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-primary-accent-green mb-4">Meet Our Team</h2>
            <p className="text-text_dark mb-8">
              Our dedicated team members are the heart of Gathered Roots Cleaning. We believe in
              hiring friendly, trustworthy professionals who share our values.{" "}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Card className="text-center flex flex-col items-center">
                <Image
                  src="/images/team-chelsea.jpg"
                  alt="Gathered Roots Cleaning team member Chelsea, Owner"
                  width={128}
                  height={128}
                  className="rounded-full w-32 h-32 object-cover border-4 border-primary-accent-teal mb-4"
                />
                <h3 className="text-lg font-semibold text-card-text-primary mb-1">Chelsea M.</h3>
                <p className="text-card-text-secondary text-sm mb-2">Owner, Operator </p>
                <p className="text-card-text-secondary text-sm">
                  Hi, I'm Chelsea, co-owner of Gathered Roots Cleaning and mom to our wonderful kids. My passion for cleaning started early, working alongside my grandmother and learning the tricks of the trade that still guide my work today. From her, I learned that cleaning isn't just about appearance—it's about care, pride, and creating a space that nurtures the people in it. (Thanks, Gramm! ❤️)
                </p>
                <p className="text-card-text-secondary text-sm mt-2">
                  At Gathered Roots Cleaning, I handle day-to-day operations and work hands-on to ensure every home gets the thoughtful attention it deserves. Justin and I built this business around our family values—honesty, reliability, and kindness—and it's a joy to bring that spirit into the homes we serve.
                </p>
              </Card>
              <Card className="text-center flex flex-col items-center">
                <Image
                  src="/images/team-justin.jpg"
                  alt="Gathered Roots Cleaning team member Justin, Owner & Operator"
                  width={128}
                  height={128}
                  className="rounded-full w-32 h-32 object-cover border-4 border-primary-accent-teal mb-4"
                />
                <h3 className="text-lg font-semibold text-card-text-primary mb-1">Justin M.</h3>
                <p className="text-card-text-secondary text-sm mb-2">Co-owner, Operator</p>
                <p className="text-card-text-secondary text-sm">
                  Hi, I'm Justin, co-owner of Gathered Roots Cleaning, U.S. Army veteran, and proud father of four. My experience as a Combat Engineer instilled in me a strong work ethic and a commitment to excellence, which I now bring to every home we care for. Chelsea and I started this business to help families like ours enjoy the comfort and peace of a well-cared-for space.
                </p>
                <p className="text-card-text-secondary text-sm mt-2">
                  As a parent, I understand how fast life moves and how hard it can be to keep up with everything. That's why I approach every job with precision, respect, and heart—because every family deserves a clean and welcoming home they can truly relax in.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
