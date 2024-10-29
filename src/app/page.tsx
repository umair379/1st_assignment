import Image from "next/image";
import Link from "next/link";
import profile from "./image/profile.jpeg";

export default function Home() {
  return (
    <div>
      <h1 className="font-semibold text-blue-900 text-4xl ml-2 text-center">
        Home
      </h1>
      <div>
        <Image
          src={profile}
          alt="profile"
          width={200}
          height={200}
          className="ml-4 mt-4  border-4 border-solid border-blue-500 rounded-full hover:border-red-800"
        />
        <h2 className="mt-2 text-5xl text-blue-800 font-serif font-semibold hover:text-red-800">
          Umair Khan
        </h2>
      </div>

      <div className="home-div">
        <h2 className="text-left text-2xl mt-7 mb-11 font-bold text-red-600">
          Your Bright Future Is Our Mission
        </h2>
        <Link
          href="#"
          className="p-1 text-xl bg-black text-white rounded-lg transition-all duration-100 hover:bg-red-700 hover:text-yellow-200 hover:m-6"
        >
          Admission Now
        </Link>
      </div>
    </div>
  );
}
