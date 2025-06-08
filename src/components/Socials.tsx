
const socials = [
  {
    name: "TikTok",
    href: "https://tiktok.com/@atl5d",
    icon: "🎵",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/atl5d",
    icon: "📸",
  },
  {
    name: "Telegram",
    href: "https://t.me/atl5d",
    icon: "📨",
  },
  {
    name: "IRL.TRAVEL",
    href: "https://irl.travel",
    icon: "☀️",
  },
];

export default function Socials() {
  return (
    <div
      className="social-icons"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        padding: "1rem",
      }}
    >
      {socials.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <span
            role="img"
            aria-label={name}
            style={{ fontSize: "2.5rem", marginBottom: "0.25rem" }}
          >
            {icon}
          </span>
          <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>{name}</span>
        </a>
      ))}
    </div>
  );
}
