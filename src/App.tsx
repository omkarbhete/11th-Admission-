import React, { useState } from "react";

type Lang = "mr" | "en";

type FAQ = {
  q: string;
  a: string;
};

type SectionData = {
  title: string;
  subtitle: string;
  menu: string[];
  process: string[];
  docs: string[];
  faq: FAQ[];
  updates: string[];
  importantDates: string[];
  instructions: string[];
  helpline: {
    website: string;
    email: string;
    phone: string;
  };
  footer: string;
};

const sections: Record<Lang, SectionData> = {
  mr: {
    title: "महाराष्ट्र FYJC 11वी प्रवेश मार्गदर्शन",
    subtitle: "11वी प्रवेश प्रक्रियेबद्दल सर्व माहिती एका ठिकाणी.",
    menu: ["मुख्यपृष्ठ", "प्रवेश प्रक्रिया", "कागदपत्रे", "FAQ"],
    process: [
      "अकाउंट तयार करा",
      "माहिती भरा",
      "कागदपत्रे अपलोड करा",
      "कॉलेज निवडा",
      "मेरिट लिस्ट तपासा",
    ],
    docs: [
      "10वी मार्कशीट / SSC Marksheet",
      "ICSE / CBSE / IB Equivalent Marksheet",
      "आधार कार्ड",
      "Leaving Certificate",
      "Passport Size Photo",
      "Caste Certificate",
      "Income Certificate",
      "Domicile Certificate",
      "Non Creamy Layer Certificate",
      "EWS Certificate",
      "Disability Certificate (If Applicable)",
      "Sports / NCC / Scouts Certificates",
    ],
    faq: [
      {
        q: "फॉर्म एडिट करता येतो का?",
        a: "हो, अंतिम लॉक करण्यापूर्वी एडिट करता येतो.",
      },
      {
        q: "Hamipatra वापरता येईल का?",
        a: "हो, कागदपत्रे नसल्यास Hamipatra अपलोड करू शकता.",
      },
      {
        q: "गुणवत्ता यादी कधी लागेल?",
        a: "गुणवत्ता यादी 15 मे 2026 रोजी सायंकाळी 5:00 वाजता जाहीर होईल.",
      },
      {
        q: "Round 0 प्रवेश म्हणजे काय?",
        a: "Round 0 प्रवेश प्रक्रिया 16 मे ते 19 मे 2026 पर्यंत चालेल.",
      },
      {
        q: "Leaving Certificate कधी जमा करायचा?",
        a: "Round 0 मध्ये प्रवेश घेतल्यास 3 आठवड्यांच्या आत Leaving Certificate जमा करणे आवश्यक आहे.",
      },
      {
        q: "कोणतीही अडचण आल्यास काय करावे?",
        a: "Toll Free Helpline Number 8530955564 वर संपर्क करा.",
      },
    ],
    updates: [
      "21 आणि 22 मे 2026 रोजी नवीन नोंदणी सुरू आहे - नवीन विद्यार्थ्यांनी अकाउंट तयार करून फॉर्म भरायचा आहे",
      "Part 1 आणि Part 2 फॉर्म भरणे आवश्यक आहे - Part 1 मध्ये वैयक्तिक माहिती आणि Part 2 मध्ये कॉलेज Preference भरायचे असतात",
      "गुणवत्ता यादी 15 मे 2026 रोजी सायंकाळी 5:00 वाजता जाहीर होईल - यामध्ये कोणत्या कॉलेजमध्ये प्रवेश मिळाला ते दिसेल",
      "16 मे 2026 सकाळी 10:00 पर्यंत तक्रार नोंदवू शकता - Merit List मध्ये चूक असल्यास ऑनलाइन तक्रार करा",
      "Quota आणि Open Category प्रवेश प्रक्रिया सुरू आहे - Management, Minority आणि In-House Quota साठी वेगळी प्रक्रिया असते",
      "Document Verification साठी कॉलेजमध्ये उपस्थित राहणे आवश्यक आहे - सर्व मूळ कागदपत्रे घेऊन कॉलेजमध्ये जावे लागेल",
      "Round 0 प्रवेश प्रक्रिया 16 मे ते 19 मे 2026 पर्यंत चालेल - कॉलेज कोट्यातील प्रवेश प्रक्रिया या काळात होईल",
      "Round 0 मध्ये प्रवेश घेतल्यास 3 आठवड्यांच्या आत Leaving Certificate जमा करणे आवश्यक आहे",
    ],
    importantDates: [
      "15 मे 2026 सायंकाळी 5:00 - गुणवत्ता यादी जाहीर होईल",
      "16 मे 2026 सकाळी 10:00 पर्यंत - Merit List तक्रार नोंदवू शकता",
      "16 मे 2026 सकाळी 11:00 पासून - Round 0 प्रवेश प्रक्रिया सुरू होईल",
      "19 मे 2026 सायंकाळी 6:00 पर्यंत - Round 0 प्रवेश प्रक्रिया चालेल",
      "21 मे 2026 ते 22 मे 2026 - नवीन नोंदणी आणि फॉर्म Edit करता येईल",
      "23 मे 2026 ते 26 मे 2026 - Allotment Process चालेल",
      "26 मे ते 28 मे 2026 - Admission Confirmation प्रक्रिया",
    ],
    instructions: [
      "Part 1 आणि Part 2 फॉर्म पूर्ण भरणे आवश्यक आहे",
      "विद्यार्थी कमीत कमी 1 आणि जास्तीत जास्त 10 कॉलेज निवडू शकतात",
      "Hamipatra आवश्यक असल्यास वापरू शकता",
      "Document Verification साठी कॉलेजमध्ये उपस्थित राहणे आवश्यक आहे",
    ],
    helpline: {
      website: "https://mahafyjcadmissions.in",
      email: "support@mahafyjcadmissions.in",
      phone: "8530955564",
    },
    footer: "ही वेबसाइट विद्यार्थ्यांच्या मार्गदर्शनासाठी तयार करण्यात आली आहे.",
  },
  en: {
    title: "Maharashtra FYJC 11th Admission Guidance",
    subtitle: "Everything about FYJC admissions in one place.",
    menu: ["Home", "Admission Process", "Documents", "FAQ"],
    process: [
      "Create Account",
      "Fill Information",
      "Upload Documents",
      "Choose Colleges",
      "Check Merit List",
    ],
    docs: [
      "Class 10 Marksheet / SSC Marksheet",
      "ICSE / CBSE / IB Equivalent Marksheet",
      "Aadhaar Card",
      "Leaving Certificate",
      "Passport Size Photo",
      "Caste Certificate",
      "Income Certificate",
      "Domicile Certificate",
      "Non Creamy Layer Certificate",
      "EWS Certificate",
      "Disability Certificate (If Applicable)",
      "Sports / NCC / Scouts Certificates",
    ],
    faq: [
      {
        q: "Can I edit the form?",
        a: "Yes, before final locking.",
      },
      {
        q: "Can I upload Hamipatra?",
        a: "Yes, if documents are missing.",
      },
      {
        q: "When will the Merit List release?",
        a: "Merit List will release on 26 May 2026.",
      },
      {
        q: "Need help?",
        a: "Call Toll Free Helpline Number 8530955564.",
      },
    ],
    updates: [
      "Fresh registration is open on 21 & 22 May 2026",
      "Part 1 and Part 2 forms are compulsory",
      "Merit List will release on 26 May 2026",
      "Quota and Open Category admissions are active",
      "Document verification is compulsory",
    ],
    importantDates: [
      "21 May 2026 to 22 May 2026 - New Registration",
      "23 May 2026 to 26 May 2026 - Allotment Process",
      "26 May 2026 - Merit List Release",
      "26 May to 28 May 2026 - Admission Confirmation",
    ],
    instructions: [
      "Students must complete Part 1 and Part 2 forms",
      "Students can choose minimum 1 and maximum 10 colleges",
      "Hamipatra can be uploaded if documents are unavailable",
      "Document verification is compulsory",
    ],
    helpline: {
      website: "https://mahafyjcadmissions.in",
      email: "support@mahafyjcadmissions.in",
      phone: "8530955564",
    },
    footer: "This website is created only for student guidance.",
  },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
      {children}
    </h2>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>("mr");
  const data = sections[lang];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="bg-blue-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">FYJC Guide</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setLang("mr")}
              className="bg-white text-blue-700 px-4 py-2 rounded-xl font-bold"
            >
              मराठी
            </button>

            <button
              onClick={() => setLang("en")}
              className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold"
            >
              English
            </button>
          </div>
        </div>
      </nav>

      <section className="bg-red-600 text-white p-6 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold mb-5">
            🚨 {lang === "mr" ? "महत्वाची प्रवेश सूचना" : "Important Admission Notice"}
          </h2>

          <div className="space-y-3 text-lg leading-8">
            <p>✅ {lang === "mr" ? "आवश्यक कागदपत्रे नसल्यास Hamipatra अपलोड करा" : "Upload Hamipatra if required documents are missing"}</p>
            <p>📄 {lang === "mr" ? "सर्व Upload जागी Hamipatra वापरू शकता" : "You can use Hamipatra for all upload fields"}</p>
            <p>📝 {lang === "mr" ? "'I Will Upload Documents At Admission Time' पर्याय निवडा" : "Choose 'I Will Upload Documents At Admission Time' if needed"}</p>
            <p>📞 {lang === "mr" ? "मदतीसाठी Toll Free Helpline: 8530955564" : "Toll Free Helpline: 8530955564"}</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">{data.title}</h1>
        <p className="text-xl max-w-3xl mx-auto mb-12">{data.subtitle}</p>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {data.process.map((step, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl"
            >
              <div className="text-5xl mb-4">{index + 1}</div>
              <h3 className="text-xl font-bold">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionTitle>
          {lang === "mr" ? "महत्वाच्या सूचना" : "Important Updates"}
        </SectionTitle>

        <div className="grid gap-5">
          {data.updates.map((notice, index) => (
            <div
              key={index}
              className="bg-white border-l-8 border-red-600 p-6 rounded-2xl shadow-lg"
            >
              <div>
                <h3 className="text-xl font-bold text-red-700 mb-3">
                  🔔 {lang === "mr" ? `महत्वाची सूचना ${index + 1}` : `Important Update ${index + 1}`}
                </h3>
                <p className="text-lg leading-8 font-semibold">{notice}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>
            {lang === "mr" ? "महत्वाच्या तारखा" : "Important Dates"}
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {data.importantDates.map((date, index) => (
              <div
                key={index}
                className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-md"
              >
                <p className="font-bold text-lg text-blue-800">📅 {date}</p>
              </div>
            ))}
          </div>

          <SectionTitle>
            {lang === "mr" ? "आवश्यक कागदपत्रे" : "Mandatory Documents"}
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {data.docs.map((doc, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-200 rounded-2xl p-5 shadow-md hover:shadow-xl transition"
              >
                <p className="font-semibold text-green-800 text-lg">📄 {doc}</p>
              </div>
            ))}
          </div>

          <SectionTitle>
            {lang === "mr"
              ? "जात आणि प्रवर्गानुसार आवश्यक कागदपत्रे"
              : "Category Wise Required Documents"}
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 border-t-8 border-blue-600 rounded-3xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-blue-700 mb-5">
                🧑‍🎓 {lang === "mr" ? "सर्व विद्यार्थ्यांसाठी" : "For All Students"}
              </h3>

              <ul className="space-y-3 text-lg text-gray-700 leading-8">
                <li>✅ SSC / 10th Marksheet</li>
                <li>✅ School Leaving Certificate</li>
                <li>✅ Aadhaar Card</li>
                <li>✅ Passport Size Photo</li>
                <li>✅ Mobile Number & Email ID</li>
              </ul>
            </div>

            <div className="bg-green-50 border-t-8 border-green-600 rounded-3xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-green-700 mb-5">
                🟢 SC / ST / OBC / SBC
              </h3>

              <ul className="space-y-3 text-lg text-gray-700 leading-8">
                <li>✅ Caste Certificate</li>
                <li>✅ Caste Validity Certificate</li>
                <li>✅ Non Creamy Layer Certificate</li>
                <li>✅ Income Certificate</li>
                <li>✅ Domicile Certificate</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-t-8 border-yellow-500 rounded-3xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-yellow-600 mb-5">
                🌾 EWS Category
              </h3>

              <ul className="space-y-3 text-lg text-gray-700 leading-8">
                <li>✅ EWS Certificate</li>
                <li>✅ Income Certificate</li>
                <li>✅ Aadhaar Card</li>
                <li>✅ Domicile Certificate</li>
              </ul>
            </div>

            <div className="bg-pink-50 border-t-8 border-pink-600 rounded-3xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-pink-700 mb-5">
                ♿ {lang === "mr" ? "दिव्यांग विद्यार्थ्यांसाठी" : "For Disabled Students"}
              </h3>

              <ul className="space-y-3 text-lg text-gray-700 leading-8">
                <li>✅ Disability Certificate</li>
                <li>✅ Medical Certificate</li>
                <li>✅ Aadhaar Card</li>
                <li>✅ Passport Photo</li>
              </ul>
            </div>

            <div className="bg-orange-50 border-t-8 border-orange-500 rounded-3xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-orange-600 mb-5">
                🏆 Sports / NCC / Scouts
              </h3>

              <ul className="space-y-3 text-lg text-gray-700 leading-8">
                <li>✅ Sports Certificate</li>
                <li>✅ NCC Certificate</li>
                <li>✅ Scouts & Guides Certificate</li>
                <li>✅ Participation Certificates</li>
              </ul>
            </div>

            <div className="bg-red-50 border-t-8 border-red-600 rounded-3xl p-6 shadow-xl">
              <h3 className="text-2xl font-bold text-red-700 mb-5">
                ⚠️ {lang === "mr" ? "कागदपत्रे नसल्यास" : "If Documents Are Missing"}
              </h3>

              <ul className="space-y-3 text-lg text-gray-700 leading-8">
                <li>✅ Hamipatra Upload करा</li>
                <li>✅ Declaration Form भरा</li>
                <li>✅ Upload Later Option निवडा</li>
                <li>✅ Admission वेळी Documents जमा करा</li>
              </ul>
            </div>
          </div>

          <SectionTitle>
            {lang === "mr" ? "प्रवेश सूचना" : "Admission Instructions"}
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-6">
            {data.instructions.map((item, index) => (
              <div
                key={index}
                className="bg-yellow-50 border-l-8 border-yellow-500 p-6 rounded-2xl shadow-lg"
              >
                <p className="text-lg font-semibold">✅ {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <SectionTitle>FAQ</SectionTitle>

        <div className="grid md:grid-cols-2 gap-6">
          {data.faq.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold mb-4">{item.q}</h3>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">📞 {lang === "mr" ? "मदत हवी आहे?" : "Need Help?"}</h2>

          <p className="text-2xl font-semibold leading-10">
            {lang === "mr"
              ? "FYJC Admission Process संदर्भात कोणतीही अडचण आल्यास अधिकृत Toll Free Helpline Number वर संपर्क करा."
              : "If you need help with the FYJC admission process, contact the official toll free helpline number."}
          </p>

          <div className="mt-8 bg-white/10 rounded-3xl p-6 text-left max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">📢 {lang === "mr" ? "Helpline सूचना" : "Helpline Instructions"}</h3>

            <ul className="space-y-4 text-lg leading-8">
              <li>✅ {lang === "mr" ? "Helpline सकाळी 10:00 ते सायंकाळी 6:00 पर्यंत उपलब्ध असते" : "Helpline is available from 10:00 AM to 6:00 PM."}</li>
              <li>✅ {lang === "mr" ? "Call लागत नसेल तर वारंवार प्रयत्न करा" : "If the call does not connect, try again."}</li>
              <li>✅ {lang === "mr" ? "Busy असल्यास काही वेळाने पुन्हा Call करा" : "If busy, call again after some time."}</li>
              <li>✅ {lang === "mr" ? "Admission ID आणि Mobile Number जवळ ठेवा" : "Keep your admission ID and mobile number ready."}</li>
              <li>✅ {lang === "mr" ? "अधिक माहितीसाठी अधिकृत वेबसाइट वापरा" : "Use the official website for more information."}</li>
            </ul>
          </div>

          <div className="mt-10 bg-white text-red-700 inline-block px-10 py-6 rounded-3xl shadow-2xl">
            <p className="text-4xl font-extrabold">{data.helpline.phone}</p>
          </div>

          <p className="mt-6 text-lg">{data.helpline.website}</p>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-8 px-4">
        <p className="mb-2">{data.footer}</p>
        <p className="text-gray-400 text-sm">{data.helpline.website}</p>
      </footer>
    </div>
  );
}

export function MeritListPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Merit List Updates</h1>

      <div className="bg-white p-8 rounded-3xl shadow-xl max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Round 1 Merit List</h2>

        <p className="mb-5">Check your allotment status using application number.</p>

        <button className="bg-blue-700 text-white px-6 py-3 rounded-xl font-bold">Check Merit List</button>
      </div>
    </div>
  );
}

export function CollegeFinderPage() {
  return (
    <div className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">College Finder</h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-4">
        <input type="text" placeholder="Enter City" className="p-4 rounded-xl border" />

        <select className="p-4 rounded-xl border">
          <option>Science</option>
          <option>Commerce</option>
          <option>Arts</option>
        </select>

        <input type="number" placeholder="Percentage" className="p-4 rounded-xl border" />
      </div>
    </div>
  );
}

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Contact Us</h1>

        <form className="space-y-5">
          <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border" />

          <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl border" />

          <textarea placeholder="Your Message" rows={5} className="w-full p-4 rounded-xl border" />

          <button type="submit" className="w-full bg-blue-700 text-white py-4 rounded-xl font-bold">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
