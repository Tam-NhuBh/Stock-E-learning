import React from 'react';

interface SocialLinkProps {
  name: string;
  url: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ name, url }) => {
  return (
    <div className="flex items-center space-x-2">
      <span>{name}:</span>
      <a href={url} className="text-blue-500 hover:text-blue-600">{url}</a>
    </div>
  );
};

const Profile: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Profile & Settings</h1>
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
        <input type="text" id="firstName" name="firstName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
      </div>
      {/* Repeat for Last Name, Headline, etc. */}

      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Biography</label>
        <textarea id="bio" name="bio" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"></textarea>
      </div>

      <div className="space-y-2">
        <SocialLink name="Twitter" url="http://www.twitter.com/" />
        <SocialLink name="Facebook" url="http://www.facebook.com/" />
        <SocialLink name="LinkedIn" url="http://www.linkedin.com/" />
        <SocialLink name="Youtube" url="http://www.youtube.com/" />
      </div>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Save</button>
    </div>
  );
};

export default Profile;
