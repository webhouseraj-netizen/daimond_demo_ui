
import manchLogo from "../assets/manch.png"; // path apne project ke hisaab se set karein
import MunchGallery from "./Cards/MunchGallery";




export default function ManchProfile() {

const sections = [
  {
    title: "मंच : एक परिचय",
    content:
      "मंच पटना ही नहीं, बल्कि बिहार की एक अनुपम संस्था है। मंच की स्थापना तक दो दशक बीत गये हैं। मंच एक सांस्कृतिक संस्था है। इसे नाट्य कलाकारों का संगम भी कह सकते हैं। इसके अन्तर्गत चित्रकला, मूर्तिकला, संगीतकला, नाटकशाला एवं साहित्य (काव्य, गद्य एवं नाटक) सभा का आयोजन है, ललित कलाओं मेजिसका मानव मनोभाव को अभिव्यक्त करने का माध्यम है। प्राकृतिक, सामाजिक, राजनीतिक, धार्मिक एवं आर्थिक विविध पहलुओं में मनुष्य के कुछ इच्छाएं हैं। ऐसे में मंच में सहभागिता के लिये हर मनुष्य स्वयं से जुड़कर ही उसकी एक ऐसी कहानी है जो सबको जोड़ती ही है। मंच का उद्देश्य могуके भीतर छिपी क्रयात्मक शक्तियों को उजागर, उपासना एवं उनके बढ़ाने का विकास करना है।",
  },
  {
    title: "हमारे आदर्श",
    content:
      "मंच के संस्थापक श्री बिहारी के लोकप्रिय छवि एवं गीतकार स्वर्गीय राम गोपाल बरनवाल 'नरन' रहे हैं। 'नरु' उन्हीं के कुछलोगों द्वारा बोला। एक मुझे ने जो की अपनी नाम में मंच द्वारा आयोजित गोष्ठी मेंमन्सूर जी ने अपनी इन रचनाओं का सरवर तक किया। उस समय कोई नहीं जानता था कि वह एक मंच की ही जरुरत थी। बिहार ही नहीं बल्कि भारत में प्रसिद्धि प्राप्त वृद्धिगत एवं विख्यात स्वर्गीय व्यासकर प्रसाद आदर्श हमारे दूसरे वरिष्ठ सदस्य थे।",
  },
  {
    title: "अधिकारिकणीय संरक्षक :",
    content: "स्वर्गीय डॉ० चट्टु प्रसाद",
  },
];

const roles = [
  { label: "अध्यक्ष :", name: "स्वर्गीय श्री अनलराज" },
  { label: "संचालक :", name: "श्री जगन सिंह एवं रमण शर्मा" },
  { label: "संपर्कदाता :", name: "श्री कृष्ण कुमार चतुर्वेदी" },
];

const editors = [
  "स्वर्गीय श्री रामेश प्रसाद",
  "स्वर्गीय प्रो प्रकाश प्रसाद",
  "डॉ० प्रकाश वर्मा",
  "डॉ० आनंद कुमार सिंह",
  "श्री आयुष्मान सुधार",
  "श्री बिरेन्द्र कुमार सिंह",
  "श्री बिरेन्द्र कुमार ज्योति",
  "श्री कुमार जितेन्द्र",
  "स्वर्गीय श्री देवीराम सिंह चन्द्र",
  "श्री राजीव रंजन",
  "स्वर्गीय श्रीमती सुगता कुमारी",
  "श्रीमती रेखा रस्तोगी",
  "श्री राजेन्द्र कुमार सिंह",
];

const collaborators = [
  "स्टेट बैंक",
  "केनरा बैंक",
  "आज",
  "टाइम्स ऑफ इंडिया",
  "सुपरयूथ ग्रुप ऑफ कंपनी",
];


  return (
   <div>
     <section className="min-h-[60vh] w-full flex flex-col items-center bg-white px-2 py-2 md:pt-3">
      {/* Logo & Title */}
      <div className="flex flex-col items-center mb-10 md:mb-1">
        <img
          src={manchLogo}
          alt="मंच पटना Logo"
          className="w-25 h-25 mb-2 object-contain"
        />
        {/* Add title below logo if needed */}
      </div>
      
      {/* Main Content */}
      <div className="max-w-[1500px] w-full text-[#222] mx-auto text-center md:text-left">
        {sections.map(({ title, content }, index) => (
          <div key={index} className="mb-2">
            <h3 className="text-base font-semibold mb-5 md:mb-2">{title}</h3>
            <p className="text-sm md:text-base leading-7">{content}</p>
          </div>
        ))}

        <div className="mb-2">
          {roles.map(({ label, name }) => (
            <p key={label} className="mb-2">
              <span className="font-semibold">{label} </span>
              {name}
            </p>
          ))}
        </div>

        <div className="mb-2">
          <h4 className="text-base font-semibold mb-3">संपादक-मंडल :</h4>
          <p className="text-sm md:text-base leading-7">
            {editors.join(", ")}
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">सहयोग :</h4>
          <p className="text-sm md:text-base leading-7">{collaborators.join(", ")}</p>
        </div>
      </div>
    </section>
   <div className="min-h-[auto] bg-amber-500">
       <MunchGallery/>
   </div>
   </div>
  );
}
