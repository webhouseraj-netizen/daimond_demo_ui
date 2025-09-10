import manchLogo from "../assets/manch.png"; // path apne project ke hisaab se set karein
import MunchGallery from "./Cards/MunchGallery";




export default function ManchProfile() {

const sections = [
  {
    title: "मंच : एक परिचय",
    content:
      "मंच पटना ही नहीं, बल्कि बिहार की एक अभूतपूर्व  संस्था है। मंच की स्थापना का यह छतीसवाँ  वर्ष है। मंच एक सांस्कृतिक संस्था है। इसे ललित कलाओं का संगम भी कह सकते हैं। इसके अंतर्गत चित्रकला, मूर्तिकला, संगीतकला, नाट्यकला तथा साहित्य (काव्य, दृश्य एवं श्रव्य ) सभी  का समागम  है। ललित  कलाओं  में बिखरे  मानव समाज को एकसूत्र  में  बांधने  का बल है प्राकृतिक ,सामाजिक राजनैतिक ,धार्मिक एवं आर्थिक  विभेद  रहते हुए  भी मनुष्य में कुछ ऐसा  है जो सब  में समान  है  केवल इस  तथ्य  से दुनिया के लोग एक मंच पर इकठ्ठा  हो सकते है। कला एक ऐसी कड़ी  है जो सबको जोड़ती  है | मंच का उद्देश्य  मनुष्य के भीतर छिपी  कलात्मक  शक्तियों  को  जगाना ,उभारना एवं उनके सद्गुणों  का विकास  करना है। ",
  },
  {
    title: "हमारे आदर्श",
    content:
      "मंच के संस्थापकों में बिहार के  लोकप्रिय  कवि एवं  गीतकार स्वर्गीय राम  गोपाल शर्मा “रुद्र” रहे हैं।“बंधु  जरुरी  है  मुझको  घर लौटना ,एक मुझे भी ले लो अपनी नाव  में_ मंच द्वारा आयोजित गोष्ठी में रुद्र जी ने अपनी इस रचना का सस्वर पाठ किया था |उस समय कोई नहीं जानता था कि यह रुद्र जी की अन्तिम गोष्ठी होगी।बिहार ही नहीं बल्कि भारत में प्रसिद्धि  प्राप्त मूर्तिकार  एवं चित्रकार स्वर्गीय  दामोदर  प्रसाद अम्बष्ट हमारे दूसरे संस्थापक सदस्य थे।।",
  },
  {
    title: "अधिकारीगण :",
    
  },
];

const roles = [
  { label: "संरक्षक :", name: "डॉ॰ चतुर्भुज" },
  { label: "अध्यक्ष :", name: "श्री अजातशत्रु " },
  { label: "सचिव :", name: "श्री उमाशंकर प्रसाद वर्मा" },
  { label: "संयोजक :", name: "श्री कृष्ण चन्द्र बाजपेयी" },
];

const editors = [
   "श्री रामेश्वर प्रसाद",
  "डॉ॰ प्रकाश  चरण  प्रसाद",
  "श्री श्यामल बनर्जी",
  "डॉ॰ आशा सिंह",
  "श्री अशुतोष सुधाकर",
  "श्री वीरेंद्र कुमार सिन्हा",
  "श्री वीरेंद्र बऱियार ज्योति",
  "श्री कुमार जितेन्द्र ज्योति",
  "श्री देबाशीष घोष",
  "श्री रंजीव रंजन",
  "श्रीमती सुजाता बाजपेयी",
  "श्रीमती रश्मि सिन्हा",
  "श्री राजेन्द्र कुमार सिन्हा"
];

// const collaborators = [
//   "स्टेट बैंक",
//   "केनरा बैंक",
//   "आज",
//   "टाइम्स ऑफ इंडिया",
//   "सुपरयूथ ग्रुप ऑफ कंपनी",
// ];


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
          <h4 className="text-base font-semibold mb-3">सदस्यगण :</h4>
          <p className="text-sm md:text-base leading-7">
            {editors.join(", ")}
          </p>
        </div>
{/* 
        <div>
          <h4 className="font-semibold mb-3">सहयोग :</h4>
          <p className="text-sm md:text-base leading-7">{collaborators.join(", ")}</p>
        </div> */}
      </div>
    </section>
   <div className="min-h-[auto] bg-amber-500">
       <MunchGallery/>
   </div>
   </div>
  );
}
