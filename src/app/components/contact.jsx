import {
  FaEnvelope,
  FaGlobe,
  FaEnvelopeOpenText,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa6";

export default function contact() {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4">Contact & Connect</h2>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaEnvelope size={24} />
            </div>
            <h3 className="mb-2">Email</h3>
            <p>
              Connect with our leadership for any inquiries or assistance. Use
              our contact form{" "}
              <a href="" className="extra-bold">
                here
              </a>{" "}
              and we will get back you as soon as possible
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaGlobe size={24} />
            </div>
            <h3 className="mb-2">Socials</h3>
            <p className="mb-2">
              Connect with us on social media to stay up to date with the latest
              news and updates.
            </p>
            <div className="flex space-x-4">
              <FaInstagram size={24} />
              <FaFacebook size={24} />
              <FaLinkedin size={24} />
            </div>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FaEnvelopeOpenText size={24} />
            </div>
            <h3 className="mb-2">Mail</h3>
            <p>
              You can send mail and packages directly to the chapter house here;
            </p>
            <p>P.O. Box 1234</p>
            <p>Moscow, ID, 83843</p>
          </div>
        </div>
      </div>
    </section>
  );
}
