import { IconButton } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide } from "./icons";

// TODO : update stacks
const stacks = [
  {
    name: "🗺️ IRL.TRAVEL",
    category: "AI Travel - Let AI find your next travel destination based on your budget and interests.",
    url: "https://irl.travel",
  },
    {
    name: "🏦 BLKLUV.ORG",
    category: "The New Cash App - Send payments with BLKLUV.ORG with no middleman fees",
    url: "https://blkluv.org",
  },
  {
    name: "🤳 5DTOK.COM",
    category: "The New TikTok - Post short videos and earn Bitcoin tips.",
    url: "https://5dtok.com",
  },
    {
    name: "💸 IAMWEALTHY.APP",
    category: "Money App - Manage your money and plan a budget with AI assistance for free.",
    url: "https://iamwealthy.app",
  },
    {
    name: "🎙️ CAMP CREEK SALE PODCAST",
    category: "@CampCreekMarket TikTok Sale Podcast - Create a reel about your local service or product on sale.",
    url: "https://www.tiktok.com/effect/Camp-Creek-Sales-3626857215?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "🎙️ CAMP CREEK DELIVERY PODCAST",
    category: "Provide proof of a Camp Creek exit delivery on TikTok to get paid.",
    url: "https://www.tiktok.com/effect/Camp-Creek-Delivery-3632214827?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "🎙️ CAMP CREEK DRIVE PODCAST",
    category: "Provide proof of a Camp Creek exit driver service on TikTok to get paid.",
    url: "https://www.tiktok.com/effect/Camp-Creek-Driver-3632215447?is_from_webapp=1&sender_device=pc",
  },
];

export default () => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-3">🌌 PORTALS</h2>
      <ul className="grid grid-cols-2 gap-3 p-1">
        {stacks.map((stack) => {
          return (
            <li
              key={stack.name}
              className={cn(
                "group",
                "flex items-center justify-between px-4 py-3",
                "bg-neutral-2 hover:bg-neutral-3",
                "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
                "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
              )}
            >
              <div className="flex flex-row items-stretch gap-5 pl-2">
                <div className="flex items-center justify-center w-6">
                  {/* Emoji from the name serves as the icon */}
                  <span className="text-xl">{stack.name.match(/^\p{Emoji}+/u)?.[0]}</span>
                </div>

                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">
                    {stack.name.replace(/^\p{Emoji}+/u, '').trim()}
                  </h3>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
                    {stack.category}
                  </div>
                </div>
              </div>

              <IconButton as="a" role="button" href={stack.url} className="group/icon" target="_blank" aria-label="Open">
                <Lucide.IconExternalLink
                  aria-label="Open"
                  className="transition text-neutral-10 group-hover:text-primary-11 group-focus-visible/icon:text-primary-11"
                />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
