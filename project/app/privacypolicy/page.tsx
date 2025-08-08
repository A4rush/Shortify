import React from "react";

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
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
              We are an open-source project and do not collect, track, or store
              personal data. Dashboard information (such as your shortened links
              and click counts) is stored locally in your browser and is never
              sent to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Information We Collect
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We do not collect personal information, usage analytics, device or
              browser fingerprints, or any other data about you.
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mt-3">
              <li>No personal information (e.g., name, email) is collected.</li>
              <li>No usage or analytics data is collected.</li>
              <li>No device or browser information is collected.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Local Storage
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The app stores your URLs and related metrics locally in your
              browser (e.g., localStorage) to provide core functionality. This
              data remains on your device and is under your control. Clearing
              your browser data will remove it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Cookies
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We do not use cookies or similar tracking technologies for
              analytics or advertising. Any browser storage used is solely for
              local functionality and is not transmitted to a server.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Information Sharing
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We do not sell, trade, or share personal information with third
              parties because we do not collect it in the first place.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Your Control
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You can manage or delete your locally stored data at any time via
              the app interface or by clearing your browser’s site data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Changes to This Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If our data practices change (for example, if we add optional
              cloud sync), we will update this policy and the “Last updated”
              date accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              Contact Us
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Questions about this policy?
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

export default PrivacyPolicy;
