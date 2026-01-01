import { useEffect } from "react";
import { IconButton } from "./ui";
import { cn } from "./ui/utils";
import { Lucide } from "./icons";
import { FaInstagram, FaTiktok, FaYoutube, FaTwitter, FaCalendarAlt } from "react-icons/fa";
import { SiOnlyfans } from "react-icons/si";

const Projects = () => {
  const escrowAddress = "0x742d35Cc6634C0532925a3b8D4B8A7b7b8b8b8b8";
  const calComLink = "https://cal.com/atl5d";

  const handleCopyEscrow = () => {
    navigator.clipboard.writeText(escrowAddress);
    alert("Escrow address copied to clipboard!");
  };

  // Initialize Cal.com embed
  useEffect(() => {
    (function (C, A, L) {
      let p = function (a, ar) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    Cal("init");
  }, []);

  const domains = [
    {
      category: "🌐 Web5 Platforms",
      platform: "Decentralized Apps",
      icon: "🛡️",
      list: [
        {
          name: "5DTOK",
          handle: "Earn Bitcoin from fans",
          followers: "Bitcoin TikTok",
          url: "https://5dtok.com"
        },
        {
          name: "zapddit.hahz.live",
          handle: "Web5 Reddit",
          followers: "Community Forums",
          url: "https://zapddit.hahz.live"
        },
        {
          name: "nftv.hahz.live",
          handle: "Web5 YouTube",
          followers: "Video Platform",
          url: "https://nftv.hahz.live"
        },
        {
          name: "event.hahz.live",
          handle: "Web5 Meetup",
          followers: "Event Platform",
          url: "https://event.hahz.live"
        },
        {
          name: "shopstr.hahz.live",
          handle: "Web5 Shopify",
          followers: "E-commerce",
          url: "https://shopstr.hahz.live"
        },
        {
          name: "mic.hahz.live",
          handle: "Earn Bitcoin for reviews",
          followers: "Review Platform",
          url: "https://mic.hahz.live"
        },
        {
          name: "Pollerama.hahz.live",
          handle: "Social media for polls",
          followers: "Polling Platform",
          url: "https://pollerama.hahz.live"
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
          bookingType: "promo",
          bookingLink: "https://cal.com/atl5d/5-min-livestream-show",
          bookingLabel: "Quick Promo",
          price: "FREE",
          duration: "5 min",
          description: "5-min TikTok/IG shoutout"
        },
        {
          name: "🍗 The Hungry Black Man",
          handle: "@thehungryblackman",
          followers: "380K",
          url: "https://tiktok.com/@thehungryblackman",
          bookingType: "standard",
          bookingLink: "https://cal.com/atl5d/15min",
          bookingLabel: "Creator Session",
          price: "$77",
          duration: "15 min",
          description: "Livestream planning"
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
          bookingType: "premium",
          bookingLink: "https://cal.com/atl5d/30min",
          bookingLabel: "Show Production",
          price: "$155",
          duration: "30 min",
          description: "Full production planning"
        },
        {
          name: "🧴 Atlanta Glow",
          handle: "@atlantaglow",
          followers: "890K",
          url: "https://instagram.com/atlantaglow",
          bookingType: "standard",
          bookingLink: "https://cal.com/atl5d/15min",
          bookingLabel: "Creator Session",
          price: "$77",
          duration: "15 min",
          description: "Content planning session"
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
          bookingType: "premium",
          bookingLink: "https://cal.com/atl5d/30min",
          bookingLabel: "Show Production",
          price: "$155",
          duration: "30 min",
          description: "Music show production"
        },
        {
          name: "🎧 DJ Scream",
          handle: "@djscream",
          followers: "1.8M",
          url: "https://youtube.com/djscream",
          bookingType: "elite",
          bookingLink: "https://cal.com/atl5d/60-minute-livestream-show",
          bookingLabel: "Premium Show",
          price: "$333",
          duration: "60 min",
          description: "Extended production & promotion"
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
          bookingType: "business",
          bookingLink: "https://cal.com/atl5d/secret",
          bookingLabel: "Business Connect",
          price: "$15",
          duration: "15 min",
          description: "Service consultation"
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
          bookingType: "premium",
          bookingLink: "https://cal.com/atl5d/30min",
          bookingLabel: "Show Production",
          price: "$155",
          duration: "30 min",
          description: "Adult content planning"
        }
      ]
    }
  ];

  // Handle Cal.com booking
  const handleBookingClick = (creatorName, bookingLink) => {
    if (typeof Cal === 'undefined') {
      console.error('Cal.com script not loaded');
      window.open(bookingLink, '_blank');
      return;
    }
    
    Cal("prefill", {
      name: creatorName,
    });
    
    Cal("inline", {
      elementOrSelector: "#cal-booking-modal",
      calLink: bookingLink.replace("https://cal.com/", ""),
      config: {
        layout: "month_view",
        hideEventTypeDetails: false
      }
    });
  };

  // Pricing tiers data
  const pricingTiers = [
    {
      name: "Quick Promo",
      price: "FREE",
      duration: "5-min shoutout",
      type: "promo",
      color: "green"
    },
    {
      name: "Business Connect",
      price: "$15",
      duration: "15-min consultation",
      type: "business",
      color: "blue"
    },
    {
      name: "Creator Session",
      price: "$77",
      duration: "15-min planning",
      type: "standard",
      color: "purple"
    },
    {
      name: "Premium Show",
      price: "$333",
      duration: "60-min production",
      type: "elite",
      color: "yellow"
    }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      {/* ESCROW SECTION - KEPT AT TOP */}
      <h2 className="font-medium text-2xl mb-4 flex items-center gap-2">
        🛡️ Escrow
        <span className="text-xs bg-[#A6192E] text-white px-2 py-1 rounded-full">Blockchain</span>
      </h2>
      
      <div className="mb-6 p-4 bg-neutral-2 rounded-xl border border-neutral-4">
        <h3 className="font-semibold mb-2">🔒 Secure Escrow System</h3>
        <p className="text-sm">
          All transactions use our secure escrow wallet powered by blockchain technology. 
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

      {/* BOOKING SECTION */}
      <h2 className="font-medium text-2xl mb-4 flex items-center gap-2">
        📅 Book Creators & Services
        <span className="text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full">Live Video</span>
      </h2>
      
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
        <h3 className="font-semibold mb-2 flex items-center gap-2">
          <FaCalendarAlt className="text-blue-500" /> Instant Booking System
        </h3>
        <p className="text-sm">
          Book creators for livestream shows or consult with service providers directly via Discord video.
          All sessions are scheduled instantly with automated reminders.
        </p>
        <div className="mt-2 flex items-center gap-2">
          <code className="text-xs bg-black px-2 py-1 rounded border">cal.com/atl5d</code>
          <a
            href={calComLink}
            target="_blank"
            className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors"
          >
            View Full Calendar
          </a>
        </div>
      </div>

      {/* PRICING TIERS SECTION - VISIBLE BUTTONS */}
      <div className="mb-8">
        <h2 className="font-medium text-2xl mb-6 text-center">💰 Pricing Tiers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.name}
              className={cn(
                "group flex flex-col p-5 rounded-xl border-2",
                "transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
                tier.type === "elite" 
                  ? "bg-gradient-to-b from-yellow-50 to-orange-50 border-yellow-300 hover:border-yellow-400"
                  : tier.type === "premium"
                  ? "bg-gradient-to-b from-purple-50 to-pink-50 border-purple-300 hover:border-purple-400"
                  : tier.type === "business"
                  ? "bg-gradient-to-b from-blue-50 to-cyan-50 border-blue-300 hover:border-blue-400"
                  : "bg-gradient-to-b from-green-50 to-emerald-50 border-green-300 hover:border-green-400"
              )}
            >
              <h3 className={cn(
                "text-lg font-bold mb-3",
                tier.type === "elite" ? "text-yellow-800" :
                tier.type === "premium" ? "text-purple-800" :
                tier.type === "business" ? "text-blue-800" :
                "text-green-800"
              )}>
                {tier.name}
              </h3>
              
              <div className="mb-4">
                <div className="text-3xl font-extrabold mb-1">
                  {tier.price}
                </div>
                <div className="text-sm text-neutral-700">
                  {tier.duration}
                </div>
              </div>
              
              <button
                onClick={() => {
                  // Handle booking based on tier type
                  if (tier.type === "promo") {
                    handleBookingClick("Quick Promo", "https://cal.com/atl5d/5-min-livestream-show");
                  } else if (tier.type === "business") {
                    handleBookingClick("Business Connect", "https://cal.com/atl5d/secret");
                  } else if (tier.type === "standard") {
                    handleBookingClick("Creator Session", "https://cal.com/atl5d/15min");
                  } else {
                    handleBookingClick("Premium Show", "https://cal.com/atl5d/60-minute-livestream-show");
                  }
                }}
                className={cn(
                  "mt-auto w-full py-3 rounded-lg font-semibold",
                  "transition-all duration-200 hover:shadow-md",
                  tier.type === "elite" 
                    ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600"
                    : tier.type === "premium"
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                    : tier.type === "business"
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600"
                    : "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600"
                )}
              >
                {tier.price === "FREE" ? "Get Started Free" : "Book Now"}
              </button>
            </div>
          ))}
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
                      {item.followers} 
                      {item.description && ` • ${item.description}`}
                    </p>
                  </div>
                  
                  <div className="flex gap-1">
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
                  {/* CAL.COM BOOKING BUTTON - FIXED COLORS */}
                  {item.bookingLink && (
                    <button 
                      onClick={() => handleBookingClick(item.name, item.bookingLink)}
                      className={cn(
                        "flex flex-col items-start px-4 py-3 rounded-xl",
                        "transition-all hover:scale-[1.02] hover:shadow-md",
                        "font-medium min-w-[180px]",
                        item.bookingType === "elite" 
                          ? "bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600"
                          : item.bookingType === "premium"
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                          : item.bookingType === "business"
                          ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600"
                          : item.bookingType === "promo"
                          ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600"
                          : "bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-800 hover:to-gray-900"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="size-4" />
                        <span className="font-semibold">{item.bookingLabel}</span>
                      </div>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-lg font-bold">{item.price}</span>
                        <span className="text-xs opacity-90">{item.duration}</span>
                      </div>
                    </button>
                  )}
                  
                  {/* VIEW PROFILE BUTTON - FIXED COLORS */}
                  <a
                    href={item.url}
                    target="_blank"
                    className={cn(
                      "flex flex-col items-start px-4 py-3 rounded-xl",
                      "bg-gray-800 text-white border-2 border-gray-700",
                      "hover:bg-gray-900 hover:border-gray-600",
                      "transition-colors min-w-[180px]"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <Lucide.IconExternalLink className="size-4" />
                      <span className="font-medium">View Profile</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-300">
                      TikTok/Instagram
                    </div>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* CAL.COM MODAL */}
      <div id="cal-booking-modal" className="hidden"></div>
      
      {/* NEED DIFFERENT TIME SECTION */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-center">
        <h3 className="font-medium text-xl mb-3 flex items-center justify-center gap-2">
          <FaCalendarAlt className="size-5" /> Need a Different Time?
        </h3>
        <p className="text-sm mb-4 opacity-95">
          Browse our full availability calendar for all creators and service providers.
        </p>
        <button
          onClick={() => handleBookingClick("General Inquiry", calComLink)}
          className="inline-flex items-center gap-2 px-6 py-3 bg-black text-blue-600 rounded-full text-sm font-semibold hover:bg-gray-100 hover:shadow-lg transition-all transform hover:scale-105"
        >
          <FaCalendarAlt />
          View Full Calendar & Availability
        </button>
      </div>
    </div>
  );
};

export default Projects;