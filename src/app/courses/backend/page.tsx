import Course from "@/app/component/course";

export default function Backend() {
  return (
    <div>
      <Course />
      <h2  className="mt-6 ml-4 text-xl font-semibold text-blue-800 underline">Backend Developement</h2>
      <ul className="ml-4 text-blue-500">
        <li>-Python</li>
        <li>-PHP</li>
        <li>-Java</li>
        <li>-C sharp</li>
      </ul>
    </div>
  );
}
