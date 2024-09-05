export default function privacy() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div class="mt-8 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          <h1 class="mb-4 tracking-tight leading-none">Privacy Policy</h1>
          <p>Last updated: 9/5/2024</p>
        </div>
      </section>
      <section className="mt-8 px-4 mx-auto max-w-screen-xl lg:px-12">
        <p>
          This Privacy Notice explains how Gamma Iota ("we," "us," or "our")
          collects, uses, and protects the personal information of visitors to
          our website www.deltasigvandals.org ("the Site"). We are committed to
          protecting your privacy and ensuring the security of your personal
          information.
        </p>

        <h2 className="mt-4">1. Information We Collect</h2>
        <p>
          We use Google Analytics 4 (GA4) to collect basic data about how
          visitors use our Site. The information we collect includes:
        </p>
        <ul className="list-disc list-inside">
          <li>IP address (anonymized)</li>
          <li>Browser type and version</li>
          <li>Device type (mobile, desktop, tablet)</li>
          <li>Operating system</li>
          <li>Referring website or URL</li>
          <li>Pages visited on the Site</li>
          <li>Time spent on each page</li>
          <li>Geographic location (region-level)</li>
        </ul>
        <p className="mt-2">
          This data is collected automatically and does not identify you
          personally. Google Analytics 4 uses cookies and similar tracking
          technologies to gather information. You can control your cookie
          preferences through your browser settings.
        </p>

        <h2 className="mt-4">2. How We Use Your Information</h2>
        <p>We use the data collected through GA4 to:</p>
        <ul className="list-disc list-inside">
          <li>Understand how visitors interact with our Site</li>
          <li>Improve the performance and content of our Site</li>
          <li>Optimize the user experience</li>
          <li>Monitor and analyze usage trends</li>
        </ul>

        <h2 className="mt-4">3. How We Protect Your Information</h2>
        <p>
          We are committed to ensuring that your information is secure. We have
          implemented appropriate technical and organizational measures to
          safeguard the information we collect via Google Analytics 4.
        </p>
        <p className="mt-2">
          Google Analytics 4 processes the data in compliance with the General
          Data Protection Regulation (GDPR) and other applicable data protection
          laws.
        </p>

        <h2 className="mt-4">4. Third-Party Access</h2>
        <p>
          The data collected via GA4 is processed by Google. Google may use this
          information in accordance with its own privacy policy, which you can
          review{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <p>
          We do not share, sell, or rent your personal data to third parties for
          marketing purposes.
        </p>

        <h2 className="mt-4">5. Your Choices and Rights</h2>
        <p>
          You have the following rights regarding the information we collect:
        </p>
        <ul className="list-disc list-inside">
          <li>
            <strong>Opt-Out of Tracking:</strong> You can opt out of Google
            Analytics tracking by installing the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-Out Browser Add-on
            </a>
            .
          </li>
          <li>
            <strong>Cookie Control:</strong> You can disable cookies in your
            browser settings, though this may affect your ability to use some
            features of the Site.
          </li>
        </ul>

        <h2 className="mt-4">6. Changes to This Privacy Notice</h2>
        <p>
          We may update this Privacy Notice from time to time. We will notify
          you of any changes by posting the new notice on this page. Please
          review this Privacy Notice periodically for any updates.
        </p>

        <h2 className="mt-4">7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Notice or our use of
          Google Analytics 4, please contact us using our form:
        </p>
        <button className="cta-button mt-4 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoXOOfRoRTSZvIRiCr7ryQ3vNiRH--6dPl_0UwxYwZ1oJjUA/viewform">
            <p className="cta-text">Contact</p>
          </a>
        </button>
      </section>
    </main>
  );
}
