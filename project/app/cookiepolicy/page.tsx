import React from "react";

function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
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
              We are an open-source project and do not use cookies for
              analytics, advertising, or tracking. The application stores
              certain information locally in your browser to provide core
              functionality, and this data never leaves your device.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              What We Store Locally
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To power features like your dashboard, we store data locally in
              your browser (e.g., localStorage). This may include your shortened
              links and their click counts. This storage is not a cookie and is
              only accessible on your device. Clearing your browser data will
              remove it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Cookies
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We do not set non-essential cookies. We do not use cookies for
              analytics, advertising, or user tracking. If we introduce features
              that require essential cookies (for example, to maintain a session
              for an optional account feature), we will update this policy and
              only use cookies necessary for the service to function.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Third-Party Cookies
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We do not embed third-party analytics, advertising, or social
              media pixels that set cookies. If any future integration
              introduces third-party cookies, we will disclose their purpose and
              obtain consent where required before they are used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Your Control
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You can clear all locally stored data at any time by clearing your
              browser’s site data for this app. If your browser offers cookie or
              site data controls, you can use them to remove any stored
              information immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Changes to This Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If our storage or cookie practices change (for example, adding
              optional cloud sync or essential session cookies), we will update
              this Cookie Policy and the “Last updated” date above. Material
              changes may be highlighted within the app.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Contact
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Questions about this Cookie Policy?
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

export default CookiePolicy;
