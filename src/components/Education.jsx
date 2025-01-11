import React from "react";
import { education } from "@/data/education";

const Education = () => {
  return (
    <section id="education" className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
        <ul className="space-y-6">
          {education.map((item, index) => (
            <li key={index} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-semibold">{item.degree || item.certification}</h3>
              <p className="text-gray-700">{item.institution || item.provider}</p>
              <p className="text-gray-500">{item.year}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
