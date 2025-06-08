import { IconButton } from "./ui";
import { cn } from "./ui/utils";
import { Lucide } from "./icons";
import { FaEthereum, FaInstagram, FaTiktok, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiOnlyfans } from "react-icons/si";

const Projects = () => {
  const getRandomWallo = () => {
    const adjectives = ["cool", "hype", "fresh", "sunny", "zesty"];
    const nouns = ["peach", "vibes", "grind", "drop", "buzz"];
    return `@${adjectives[Math.floor(Math.random() * adjectives.length)]}${nouns[Math.floor(Math.random() * nouns.length)]}`;
  };

  const creators = [
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
          wallet: "0x000...foodie",
          booking: "https://cal.com/atlfoodie"
        },
        {
          name: "🍗 The Hungry Black Man",
          handle: "@thehungryblackman",
          followers: "380K",
          url: "https://tiktok.com/@thehungryblackman",
          wallet: "0x000...hungry",
          booking: "https://cal.com/hungryblackman"
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
          wallet: "0x000...makeup",
          booking: "https://cal.com/makeupbyteri"
        },
        {
          name: "🧴 Atlanta Glow",
          handle: "@atlantaglow",
          followers: "890K",
          url: "https://instagram.com/atlantaglow",
          wallet: "0x000...glow",
          booking: "https://cal.com/atlglow"
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
          wallet: "0x000...kenny",
          booking: "https://cal.com/kennyburns"
        },
        {
          name: "🎧 DJ Scream",
          handle: "@djscream",
          followers: "1.8M",
          url: "https://youtube.com/djscream",
          wallet: "0x000...djscream",
          booking: "https://cal.com/djscream"
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
          wallet: "0x000...trae",
          booking: "https://cal.com/coachtrae"
        }
      ]
    },
    {
      category: "🔥 Adult Content",
      platform: "OnlyFans",
      icon: <SiOnlyfans className="text-red-400" />,
      list: [
        {
          name: "🍑 Atlanta Peach",
          handle: "@TheRealATLPeach",
          followers: "2.4M",
          url: "https://onlyfans.com/therealatlpeach",
          wallet: "0x000...peach",
          booking: "https://cal.com/atlpeach"
        }
      ]
    }
  ];

  const handleTip = (wallet: string) => {
    alert(`This will send $ATL to ${wallet} when fully implemented`);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="font-medium text-2xl mb-4 flex items-center gap-2">
        📍 ATL5D Creator Hub 
        <span className="text-xs bg-[#A6192E] text-white px-2 py-1 rounded-full">Powered by WALLO</span>
      </h2>
      
      <div className="mb-6 p-4 bg-neutral-2 rounded-xl border border-neutral-4">
        <h3 className="font-semibold mb-2">🔥 Pro Tip</h3>
        <p className="text-sm">
          Tip creators in $ATL or book them for your next livestream. 
          Wallet functionality activates when creators claim their profiles.
        </p>
      </div>

      {creators.map(({ category, platform, icon, list }) => (
        <div key={category} className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            {category} 
            <span className="text-xs bg-neutral-4 text-neutral-11 px-2 py-0.5 rounded-full flex items-center gap-1">
              {icon} {platform} • {list.length} creators
            </span>
          </h3>
          
          <ul className="grid grid-cols-1 gap-3">
            {list.map((creator) => (
              <li
                key={creator.handle}
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
                      {creator.name} 
                      <span className="text-xs text-neutral-10">({creator.handle})</span>
                    </h4>
                    <p className="text-xs text-neutral-11 mt-1">
                      {creator.followers} followers • 🏦 WALLO: <em>{getRandomWallo()}</em>
                    </p>
                  </div>
                  
                  <div className="flex gap-1">
                    <IconButton
                      as="a"
                      href={creator.url}
                      target="_blank"
                      size="md"
                      aria-label={`View ${creator.name}`}
                    >
                      <Lucide.IconExternalLink className="size-3.5" />
                    </IconButton>
                  </div>
                </div>
                
                <div className="mt-3 flex gap-2 flex-wrap">
                  <button 
                    onClick={() => handleTip(creator.wallet)}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full",
                      "bg-[#A6192E]/10 hover:bg-[#A6192E]/20",
                      "border border-[#A6192E]/20",
                      "transition-colors"
                    )}
                  >
                    <FaEthereum className="text-[#A6192E] size-3" />
                    Tip $ATL (Coming Soon)
                  </button>
                  
                  <a
                    href={creator.booking}
                    target="_blank"
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full",
                      "bg-neutral-4 hover:bg-neutral-5",
                      "border border-neutral-6",
                      "transition-colors"
                    )}
                  >
                    📅 Book for Livestream
                  </a>
                  
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(creator.wallet);
                      alert("Wallet address copied!");
                    }}
                    className={cn(
                      "px-2 py-1.5 text-xs rounded-full",
                      "bg-neutral-3 hover:bg-neutral-4",
                      "text-neutral-10 hover:text-neutral-11",
                      "transition-colors"
                    )}
                  >
                    Copy Wallet
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      
      <div className="mt-8 p-4 bg-[#FFD700]/10 rounded-xl border border-[#FFD700]/20 text-center">
        <h3 className="font-medium mb-2">Want to join this list?</h3>
        <p className="text-sm mb-3">
          ATL creators can apply to be featured and start earning $ATL tips.
        </p>
        <a
          href="https://t.me/atl5d"
          className="inline-block px-4 py-2 bg-[#A6192E] text-white rounded-full text-sm font-medium"
        >
          Apply as Creator
        </a>
      </div>
    </div>
  );
};

export default Projects;