import kinder1 from "../assets/kinder1.jpeg";
import kinder2 from "../assets/kinder2.jpeg";

export default function KinderCard() {
  return (
    <section className="w-full min-h-screen px-2 py-10 md:py-16 bg-gradient-to-br from-slate-300 via-purple-100 to-slate-300 flex flex-col items-center">
      {/* Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2 text-center">
        Educational{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Excellence
        </span>
      </h2>
      <p className="max-w-2xl text-center text-base md:text-lg text-gray-600 mb-10 md:mb-14">
        Our educational division is dedicated to promoting learning through
        engaging and informative content, focusing on pre-primary and primary
        education with modern teaching methodologies.
      </p>

      {/* Top Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 mb-12">
        {/* Image Left */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-lg transition-transform duration-500 hover:scale-105">
            <img
              src={kinder1}
              alt="Kinder Classroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Card Right */}
        <div className="md:w-1/2 w-full bg-violet-300/60 rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Early Childhood Development
          </h3>
          <p className="text-gray-700 mb-6">
            Comprehensive programs focused on nurturing young minds with
            age-appropriate learning activities and developmental milestones.
          </p>
          <div>
            <p className="font-semibold text-teal-600 mb-2">Key Features:</p>
            <ul className="space-y-2 text-gray-800 text-base">
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>Age-appropriate
                Curriculum
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>Developmental
                Milestones
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>Interactive
                Learning
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>Social Skills
                Development
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Card Left */}
        <div className="md:w-1/2 w-full bg-violet-300/60 rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Creative Learning Environment
          </h3>
          <p className="text-gray-700 mb-6">
            Modern educational approaches combined with creative arts, music,
            and hands-on activities to enhance learning experiences.
          </p>
          <div>
            <p className="font-semibold text-teal-600 mb-2">Key Features:</p>
            <ul className="space-y-2 text-gray-800 text-base">
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>Arts & Crafts
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>Music Programs
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>Creative Expression
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>Hands-on Activities
              </li>
            </ul>
          </div>
        </div>
        {/* Image Right */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-lg transition-transform duration-500 hover:scale-105">
            <img
              src={kinder2}
              alt="Creative Classroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl pt-10  flex flex-col md:flex-row gap-8 ">
        {/* Image Left */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-lg transition-transform duration-500 hover:scale-105">
            <img
              src={kinder1}
              alt="Kinder Classroom"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* Card Right */}
        <div className="md:w-1/2 w-full bg-violet-300/60 rounded-2xl  shadow-lg p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Safe & Nurturing Space
          </h3>
          <p className="text-gray-700 mb-6">
            Providing a secure, caring environment where children can explore,
            learn, and grow with confidence and joy.
          </p>
          <div>
            <p className="font-semibold text-teal-600 mb-2">Key Features:</p>
            <ul className="space-y-2 text-gray-800 text-base">
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>Age-appropriate
                Safe Environment
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>Qualified Teachers
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>Interactive
                Learning
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>Individual
                Attention
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-2">•</span>Parent
                Communication
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
