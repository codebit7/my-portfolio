import React, { useEffect, useState } from "react";
import "./Home.css";
import dotsImage from "../../../public/dots-effect.png";
import profileImage from "../../assets/profile-remove-bg.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LuDownload, LuMail, LuMessageSquare } from "react-icons/lu";
import { SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import { fetchResumeAndProfile } from "../../services/firebaseDatabaseService";

// Converts a Google Drive "share" link (e.g. .../file/d/FILE_ID/view?usp=sharing
// or ...?id=FILE_ID) into a URL that actually works inside an <img src="">.
// The Drive file must be shared as "Anyone with the link" for this to load.
// Pulls the file id out of any Google Drive share link
const getDriveFileId = (url) => {
  const match = url.match(/\/d\/([^/?]+)/) || url.match(/[?&]id=([^&]+)/);
  return match ? match[1] : null;
};

// Several URL formats, tried in order until one loads
const buildProfileCandidates = (url) => {
  if (!url) return [];
  const id = getDriveFileId(url);
  if (!id) return [url]; // not a Drive link, use as is
  return [
    `https://lh3.googleusercontent.com/d/${id}=w1000`,
    `https://drive.google.com/thumbnail?id=${id}&sz=w1000`,
    `https://drive.google.com/uc?export=view&id=${id}`,
  ];
};

const TYPING_TEXTS = ["Software Engineer", "MERN Stack Developer", "Freelancer"];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/codebit7", Icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/wamiq-rahim-05a83222b", Icon: FaLinkedinIn },
  { label: "Email", href: "mailto:wamiqrahim@gmail.com", Icon: LuMail },
];

const Home = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const [typeIndex, setTypeIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Resume + profile picture come from Firebase (portfolio/resumeAndProfileUrl).
  // Both are stored as Google Drive links; the profile link is converted to a
  // direct-image URL. The local asset is the fallback while loading / if empty.
  const [resumeUrl, setResumeUrl] = useState("");
  const [profileCandidates, setProfileCandidates] = useState([]);
const [profileIdx, setProfileIdx] = useState(0);
const [imgLoaded, setImgLoaded] = useState(false);
const profileSrc = profileCandidates[profileIdx] || profileImage;

  useEffect(() => {
    const loadResumeAndProfile = async () => {
      try {
        const data = await fetchResumeAndProfile();
        setResumeUrl(data?.resumeUrl || "");
        setProfileCandidates(buildProfileCandidates(data?.profileUrl));
        setProfileIdx(0);
      } catch (error) {
        console.error("Failed to load resume/profile from Firebase:", error);
      }
    };
    loadResumeAndProfile();
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = TYPING_TEXTS[typeIndex];
    let delay = isDeleting ? 45 : 95;
    if (!isDeleting && text === current) delay = 1800;
    if (isDeleting && text === "") delay = 400;

    const timer = setTimeout(() => {
      if (!isDeleting && text === current) {
        setIsDeleting(true);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setTypeIndex((i) => (i + 1) % TYPING_TEXTS.length);
      } else {
        setText(current.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, isDeleting, typeIndex]);

  const handleDownload = () => {
    if (!resumeUrl) {
      toast.error("Resume isn't available right now. Please try again shortly!");
      return;
    }

    try {
      setIsDownloading(true);

      const link = document.createElement("a");
      link.href = resumeUrl;
      link.setAttribute("download", "Wamiq_Rahim_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("Resume downloaded successfully!");
      setTimeout(() => setIsDownloading(false), 2000);
    } catch (error) {
      console.error("Download failed:", error);
      toast.error("Failed to download resume. Please try again!");
      setIsDownloading(false);
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-bg" aria-hidden="true" />

        <div className="hero-inner container">
          <div className="hero-copy">
            <p className="intro-text reveal" style={{ "--i": 0 }}>Hi there, I'm</p>
            <h1 className="name reveal" style={{ "--i": 1 }}>Wamiq Rahim</h1>
            <h2 className="profession reveal" style={{ "--i": 2 }}>
              <span className="typing-text">{text}</span>
              <span className="typing-cursor" aria-hidden="true">|</span>
            </h2>
            <p className="description reveal" style={{ "--i": 3 }}>
              I craft scalable, user-friendly web apps with clean code, blending performance, functionality, and design.
            </p>

            <div className="btns reveal" style={{ "--i": 4 }}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleDownload}
                disabled={isDownloading}
              >
                {isDownloading ? <span className="download-spinner" /> : <LuDownload />}
                {isDownloading ? "Downloading..." : "Download resume"}
              </button>
              <a href="#contact" className="btn btn-ghost" onClick={scrollToContact}>
                <LuMessageSquare />
                Let's talk
              </a>
            </div>

            <ul className="hero-socials reveal" style={{ "--i": 5 }}>
              {SOCIALS.map((social) => {
                const Icon = social.Icon;
                return (
                  <li key={social.label}>
                    <a
                      className="icon-btn"
                      href={social.href}
                      aria-label={social.label}
                      title={social.label}
                      {...(social.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="hero-visual reveal" style={{ "--i": 2 }}>
            <div className="shape-container">
              <img src={dotsImage} alt="" className="dots-image" />
              <div className="outer-shape">
                <div className="inner-shape">
                  <img
  className={`p-image ${imgLoaded ? "loaded" : ""}`}
  src={profileSrc}
  alt="Wamiq Rahim"
  referrerPolicy="no-referrer"
  onLoad={() => setImgLoaded(true)}
  onError={() => {
    setImgLoaded(false);
    // try the next URL; after the last one, your local photo is used
    if (profileIdx < profileCandidates.length) setProfileIdx((i) => i + 1);
  }}
/>
                </div>
              </div>

              <span className="chip chip-react" aria-hidden="true" title="React"><SiReact /></span>
              <span className="chip chip-node" aria-hidden="true" title="Node.js"><SiNodedotjs /></span>
              <span className="chip chip-mongo" aria-hidden="true" title="MongoDB"><SiMongodb /></span>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} theme="colored" />
    </>
  );
};

export default Home;
