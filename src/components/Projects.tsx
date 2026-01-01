import { IconButton } from "./ui";
import { cn } from "./ui/utils";
import { Lucide } from "./icons";
import { FaEthereum, FaInstagram, FaTiktok, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiOnlyfans } from "react-icons/si";

const Projects = () => {
  const escrowAddress = "0x742d35Cc6634C0532925a3b8D4B8A7b7b8b8b8b8"; // Replace with actual escrow address

  const handleCopyEscrow = () => {
    navigator.clipboard.writeText(escrowAddress);
    alert("Escrow address copied to clipboard!");
  };

  const domains = [
    {
      category: "🌐 Web5 Platforms",
      platform: "Decentralized Apps",
      icon: "🛡️",
      list: [
        {
          name: "x.hahz.live",
          handle: "Web5 X",
          followers: "Decentralized Social",
          url: "https://x.hahz.live",
          wallet: escrowAddress,
          orangeLink: "https://orange.hahz.live"
        },
        {
          name: "zapddit.hahz.live",
          handle: "Web5 Reddit",
          followers: "Community Forums",
          url: "https://zapddit.hahz.live",
          wallet: escrowAddress,
          orangeLink: "https://orange.hahz.live"
        },
        {
          name: "nftv.hahz.live",
          handle: "Web5 YouTube",
          followers: "Video Platform",
          url: "https://nftv.hahz.live",
          wallet: escrowAddress,
          orangeLink: "https://orange.hahz.live"
        },
        {
          name: "event.hahz.live",
          handle: "Web5 Meetup",
          followers: "Event Platform",
          url: "https://event.hahz.live",
          wallet: escrowAddress,
          orangeLink: "https://orange.hahz.live"
        },
        {
          name: "shopstr.hahz.live",
          handle: "Web5 Shopify",
          followers: "E-commerce",
          url: "https://shopstr.hahz.live",
          wallet: escrowAddress,
          orangeLink: "https://orange.hahz.live"
        },
        {
          name: "mic.hahz.live",
          handle: "Earn Bitcoin for reviews",
          followers: "Review Platform",
          url: "https://mic.hahz.live",
          wallet: escrowAddress,
          orangeLink: "https://orange.hahz.live"
        },
        {
          name: "Pollerama.hahz.live",
          handle: "Social media for polls",
          followers: "Polling Platform",
          url: "https://pollerama.hahz.live",
          wallet: escrowAddress,
          orangeLink: "https://orange.hahz.live"
        }
      ]
    },
    {
      category: "🍔 Food & Dining",
      platform: "Food TikTok",
      icon: <FaTiktok className="text-pink-500" />,
      list: [
        {
          name: "👨🏾‍🍳 Atlanta Foodie",
          handle: "@atlantafoodie",
          followers: "420K",
          url: "https://tiktok.com/@atlantafoodie",
          wallet: escrowAddress,
          orangeLink: "https://orange.hahz.live"
        },
        {
          name: "🍗 The Hungry Black Man",
          handle: "@thehungryblackman",
          followers: "380K",
          url: "https://tiktok.com/@thehungryblackman",
          wallet: escrowAddress,
          orangeLink: "https://orange.hahz.live"
        }
      ]
    },
    {
      category: "💇🏽‍♀️ Beauty & Lifestyle",
      platform: "Instagram",
      icon: <FaInstagram className="text-purple-500" />,
      list: [
        {
          name: "💄 MakeupByTeri",
          handle: "@makeupbyteri",
          followers: "1.2M",
          url: "https://instagram.com/makeupbyteri",
          wallet: escrowAddress,
          orangeLink: "https://orange.hahz.live"
        },
        {
          name: "🧴 Atlanta Glow",
          handle: "@atlantaglow",
          followers: "890K",
          url: "https://instagram.com/atlantaglow",
          wallet: escrowAddress,
          orangeLink: "https://orange.hahz.live"
        }
      ]
    },
    {
      category: "🎶 Music & Entertainment",
      platform: "YouTube",
      icon: <FaYoutube className="text-red-500" />,
      list: [
        {
          name: "🎤 Kenny Burns",
          handle: "@KennyBurnsTV",
          followers: "350K",
          url: "https://youtube.com/KennyBurnsTV",
          wallet: escrowAddress,
          orangeLink: "https://orange.hahz.live"
        },
        {
          name: "🎧 DJ Scream",
          handle: "@djscream",
          followers: "1.8M",
          url: "https://youtube.com/djscream",
          wallet: escrowAddress,
          orangeLink: "https://orange.hahz.live"
        }
      ]
    },
    {
      category: "🏀 Sports & Fitness",
      platform: "Twitter",
      icon: <FaTwitter className="text-blue-400" />,
      list: [
        {
          name: "🏋🏾‍♂️ Coach Trae",
          handle: "@CoachTraeATL",
          followers: "320K",
          url: "https://twitter.com/CoachTraeATL",
          wallet: escrowAddress,
          orangeLink: "https://funraise-thirdweb.hahz.live" // Updated with funraise thirdweb link
        }
      ]
    },
    {
      category: "🔥 Adult Content",
      platform: "Twerk",
      icon: <SiOnlyfans className="text-red-400" />,
      list: [
        {
          name: "🍑 Atlanta Peach",
          handle: "@twerkrz",
          followers: "2.4M",
          url: "https://twerk.dance",
          wallet: escrowAddress,
          orangeLink: "https://orange.hahz.live"
        }
      ]
    }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="font-medium text-2xl mb-4 flex items-center gap-2">
        🛡️ Web5 Domains & Escrow
        <span className="text-xs bg-[#A6192E] text-white px-2 py-1 rounded-full">Unstoppable Domains</span>
      </h2>
      
      <div className="mb-6 p-4 bg-neutral-2 rounded-xl border border-neutral-4">
        <h3 className="font-semibold mb-2">🔒 Secure Escrow System</h3>
        <p className="text-sm">
          All transactions use our secure escrow wallet powered by Unstoppable Domains. 
          Funds are held safely until services are delivered.
        </p>
        <div className="mt-2 flex items-center gap-2">
          <code className="text-xs bg-neutral-3 px-2 py-1 rounded">{escrowAddress}</code>
          <button 
            onClick={handleCopyEscrow}
            className="text-xs bg-[#A6192E] text-white px-2 py-1 rounded hover:bg-[#8B1526] transition-colors"
          >
            Copy
          </button>
        </div>
      </div>

      {domains.map(({ category, platform, icon, list }) => (
        <div key={category} className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            {category} 
            <span className="text-xs bg-neutral-4 text-neutral-11 px-2 py-0.5 rounded-full flex items-center gap-1">
              {icon} {platform} • {list.length} {category.includes('Platforms') ? 'domains' : 'creators'}
            </span>
          </h3>
          
          <ul className="grid grid-cols-1 gap-3">
            {list.map((item) => (
              <li
                key={item.name}
                className={cn(
                  "group flex flex-col p-4",
                  "bg-neutral-2 hover:bg-neutral-3",
                  "border border-neutral-4 hover:border-neutral-6 rounded-2xl",
                  "transition-colors"
                )}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium flex items-center gap-1.5">
                      {item.name} 
                      <span className="text-xs text-neutral-10">({item.handle})</span>
                    </h4>
                    <p className="text-xs text-neutral-11 mt-1">
                      {item.followers} • 🔒 Escrow: <code className="text-[10px]">{item.wallet.slice(0,8)}...{item.wallet.slice(-6)}</code>
                    </p>
                  </div>
                  
                  <div className="flex gap-1">
                    <IconButton
                      as="a"
                      href={item.orangeLink}
                      target="_blank"
                      size="md"
                      aria-label={`Orange Circle ${item.name}`}
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      🟠
                    </IconButton>
                    <IconButton
                      as="a"
                      href={item.url}
                      target="_blank"
                      size="md"
                      aria-label={`View ${item.name}`}
                    >
                      <Lucide.IconExternalLink className="size-3.5" />
                    </IconButton>
                  </div>
                </div>
                
                <div className="mt-3 flex gap-2 flex-wrap">
                  <button 
                    onClick={handleCopyEscrow}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full",
                      "bg-[#A6192E]/10 hover:bg-[#A6192E]/20",
                      "border border-[#A6192E]/20",
                      "transition-colors"
                    )}
                  >
                    <FaEthereum className="text-[#A6192E] size-3" />
                    Copy Escrow Address
                  </button>
                  
                  <a
                    href={item.orangeLink}
                    target="_blank"
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full",
                      "bg-orange-500/10 hover:bg-orange-500/20",
                      "border border-orange-500/20 text-orange-700",
                      "transition-colors"
                    )}
                  >
                    🟠 Orange Portal
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      
      <div className="mt-8 p-4 bg-[#FFD700]/10 rounded-xl border border-[#FFD700]/20 text-center">
        <h3 className="font-medium mb-2">🚀 Launch Your Web5 Domain</h3>
        <p className="text-sm mb-3">
          Get your own unstoppable domain and join the decentralized web revolution. 
          Secure your digital identity with Web5 technology.
        </p>
        <a
          href="https://orange.hahz.live"
          className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition-colors"
        >
          🟠 Get Started with Orange
        </a>
      </div>
    </div>
  );
};

export default Projects;