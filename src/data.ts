export type Lang = "mr" | "en";

export type FAQ = {
  q: string;
  a: string;
};

export type SectionData = {
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

export const seoUrl = "https://11th.vercel.app";

export const sections: Record<Lang, SectionData> = {
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
