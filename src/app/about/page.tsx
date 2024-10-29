

import Image from "next/image";
import about1 from "@/app/image/about1.jpeg";
import about2 from "@/app/image/about2.jpeg";

export default function About() {
  throw new Error("Error")
  return (
    <div>
      <h1 className="font-semibold text-blue-900 text-4xl ml-2 text-center">About</h1>
      <p className="align-middle">
        <Image src={about1} alt="institute" width={400} height={400} />
        An institute is an organisational body created for a certain purpose.
        They are often research organisations (research institutes) created to
        do research on specific topics, or can also be a professional body. In
        some countries, institutes can be part of a university or other
        institutions of higher education, either as a group of departments or an
        autonomous educational institution without a traditional university
        status such as a "university institute" (see Institute of Technology).
        In some countries, such as South Korea and India, private schools are
        sometimes referred to as institutes; also, in Spain, secondary schools
        are referred to as institutes. Historically, in some countries,
        institutes were educational units imparting vocational training and
        often incorporating libraries, also known as mechanics' institutes. The
        word "institute" comes from the Latin word institutum ("facility" or
        "habit"), in turn derived from instituere ("build", "create", "raise" or
        "educate").
      </p>

      <p className="text-center">
        <Image src={about2} alt="institute" width={400} height={400} />
        Umair Instutute is a public Artificial Intelligence located in the Urban metropolitan area of Karachi, Sindh,
        Pakistan. It was founded by Sir Hugh Dow, the then Governor of Sindh, in
        1945.[2] Umair Institute The university comprises two
        Stacks of languages undergraduate research institutes: Umair AI College
        and Umair International AI College. The university also has a very
        strong department of Postgraduate studies which monitors various basic
        medical sciences and clinical sciences programs at DUHS. Established in
        1945 as the Umair Institute, it is known for its strong emphasis on
        economics biomedical, health, and medical research programmes. It is
        ranked among the top medical schools by HEC in 2014. It also ranked
        latest by QS World University Rankings as among 600 best universities
        globally in the field of medicine.
      </p>
    </div>
  );
}
