import {
  FaAddressBook,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaUser,
  FaUserFriends,
} from "react-icons/fa";

interface SocialMedia {
  facebook: string;
  instagram: string;
  linkedin: string;
}

interface ContactInfo {
  name: string;
  relation: string;
  phone: string;
  email: string;
  social: SocialMedia;
}

interface ContactProps {
  contact: ContactInfo;
}

export default function Contact({ contact }: ContactProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Contact Information
      </h2>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <FaUser className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Name</p>
            <p className="font-semibold text-gray-900">{contact.name}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaUserFriends className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Relation</p>
            <p className="font-semibold text-gray-900">{contact.relation}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-semibold text-gray-900">{contact.phone}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaEnvelope className="w-5 h-5 text-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold text-gray-900">{contact.email}</p>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-100">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-100">
          <button
            onClick={() => {
              // Handle view contacts click
            }}
            className="w-full flex items-center justify-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors duration-300"
          >
            <FaAddressBook className="w-5 h-5" />
            <span>View All Contacts</span>
          </button>
        </div>
      </div>
    </div>
  );
}
