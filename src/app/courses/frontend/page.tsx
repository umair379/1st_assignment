import Course from "@/app/component/course";

export default function Frontend() {
  return (
    <div>
      <Course />
      <h2  className="mt-6 ml-4 text-xl font-semibold text-blue-800 underline">Frontend Developement</h2>
      <ul className="ml-4 text-blue-500">
        <li>-HTML</li>
        <li>-CSS</li>
        <li>-TypeScript</li>
        <li>-Next js</li>
        <li>-Tailwind CSS</li>
      </ul>
    </div>
  );
}
