import React from "react";

function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </header>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Overview
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Shortify is an open-source project provided “as is,” without
              accounts or server-side data collection. By using Shortify, you
              agree to these Terms of Service. If you do not agree, please do
              not use the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Eligibility and Access
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You may use the service subject to these Terms and applicable
              laws. We do not require user registration or accounts. Access may
              be modified, suspended, or terminated at any time for maintenance,
              updates, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Open Source
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Shortify is open source. You may view, use, modify, and distribute
              the source code in accordance with the project’s license. The
              application you are using may be a build of that code and is
              provided without warranties to the extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              No Data Collection
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We do not collect, track, or store personal data. Dashboard
              information (such as your shortened links and click counts) is
              stored locally in your browser and never sent to our servers.
              Clearing your browser data will remove this information from your
              device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Acceptable Use
            </h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              You agree not to use the service to:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Violate any laws or regulations.</li>
              <li>
                Infringe on intellectual property, privacy, or other rights.
              </li>
              <li>Distribute malware, phishing links, or harmful content.</li>
              <li>Engage in harassment, hate speech, or illegal activities.</li>
              <li>
                Abuse, overload, or attempt to disrupt the service or its
                infrastructure.
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              We may block, remove, or restrict content or access that violates
              these Terms or applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Content and Links
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You are responsible for the URLs and content you shorten or share.
              We do not endorse or verify third-party content. Use caution when
              following shortened links, and verify destinations before sharing
              them with others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Intellectual Property
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The Shortify name, branding, and any non-open-source assets (such
              as logos or artwork) may be protected by intellectual property
              rights and are not licensed for unrestricted use. Open-source code
              is provided under its respective license; review the repository
              for license details before reuse or distribution.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              No Warranties
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The service is provided “as is” and “as available,” without
              warranties of any kind, express or implied, including but not
              limited to warranties of merchantability, fitness for a particular
              purpose, and non-infringement. We do not guarantee that the
              service will be uninterrupted, secure, or error-free, or that any
              defects will be corrected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To the maximum extent permitted by law, we shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages, or any loss of data, profits, or revenues, arising from
              your use of or inability to use the service, even if we have been
              advised of the possibility of such damages. Your sole and
              exclusive remedy is to stop using the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Changes to the Service and Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We may modify or discontinue features at any time. We may update
              these Terms from time to time. Changes will be effective upon
              posting the updated Terms and updating the “Last updated” date
              above. Continued use of the service after changes constitutes
              acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Governing Law
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms are governed by applicable laws of your jurisdiction
              to the extent not preempted by other law. Any disputes arising out
              of or relating to these Terms or the service shall be resolved in
              accordance with such laws and, where applicable, in the courts of
              the relevant jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Contact
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Questions about these Terms?
            </p>
            <div className="mt-4 p-4 bg-gray-900 rounded-lg">
              <p className="text-gray-300">
                Email: aarushmishrashitalaprasad@gmail.com
              </p>
              <p className="text-gray-300">Address: Mumbai, India.</p>
            </div>
          </section>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()}{" "}
            <a href="https://github.com/A4rush">A4rush</a>. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
export default TermsOfService;
