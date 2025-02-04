import React from "react";

const Footer = () => {
  return (
    <footer className="bg-netflix-black text-netflix-gray py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Audio and Subtitles</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Media Center</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Help Center</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Jobs</a></li>
              <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
              <li><a href="#" className="hover:underline">Legal Notices</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Gift Cards</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Corporate Information</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Media Center</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Investor Relations</a></li>
              <li><a href="#" className="hover:underline">Legal Notices</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-sm">
          © 2024 Netflix Clone. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;