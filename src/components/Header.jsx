import { useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/Header.scss";

// Inline SVG icons
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">{t("church_name")}</div>

        <nav className={`nav ${open ? "open" : ""}`}>
          <a href="#about">{t("about")}</a>
          <a href="#calendar">{t("calendar")}</a>
          <a href="#contacts">{t("contacts")}</a>

          <div className="lang-switcher">
            {["pl", "ua", "ru", "en", "de"].map((lng) => (
              <button key={lng} onClick={() => changeLang(lng)}>
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>

        <div 
          className="burger" 
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          <div className="burger-lines">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
