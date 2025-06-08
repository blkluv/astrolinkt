import { IconButton } from "./ui";
import { cn } from "./ui/utils";
import { Lucide } from "./icons";
import { FaEthereum } from "react-icons/fa";

// Add window.ethereum type declaration
declare global {
  interface Window {
    ethereum?: any;
  }
}

// Tipping contract ABI (simplified)
const tipContract = {
  address: "0x...ATL5DTipContract" as `0x${string}`,
  abi: [
    {
      inputs: [
        { name: "creator", type: "address" },
        { name: "amount", type: "uint256" }
      ],
      name: "tipCreator",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function"
    }
  ] as const  // Mark as const for type inference
};

const getRandomWallo = () => {
  const adjectives = ["cool", "hype", "fresh", "sunny", "zesty"];
  const nouns = ["peach", "vibes", "grind", "drop", "buzz"];
  return `@${adjectives[Math.floor(Math.random() * adjectives.length)]}${nouns[Math.floor(Math.random() * nouns.length)]}`;
};

const creators = [
  {
    category: "🍔 Foodies",
    list: [
      {
        name: "👅 TongueTiedFoodie",
        platform: "TikTok 🍜",
        handle: "@tonguetiedfoodie",
        url: "https://www.tiktok.com/@tonguetiedfoodie",
        wallet: "0x...foodie1" as `0x${string}`,
        booking: "https://cal.com/tonguetied/atl5d"
      },
      {
        name: "🍴 EatingWithErica",
        platform: "TikTok 🧋",
        handle: "@eatingwitherica",
        url: "https://www.tiktok.com/@eatingwitherica",
        wallet: "0x...erica2" as `0x${string}`,
        booking: "https://cal.com/eatingwitherica/atl5d"
      }
    ],
  },
  {
    category: "💇 Hair Game",
    list: [
      {
        name: "💁 Sabrina Molu",
        platform: "Instagram 💕",
        handle: "@sabrinamolu",
        url: "https://www.instagram.com/sabrinamolu",
        wallet: "0x...molu3" as `0x${string}`,
        booking: "https://cal.com/sabrinamolu/atl5d"
      }
    ],
  }
];

export default () => {
  const handleTip = async (creatorAddress: string, amount: number) => {
    try {
      // Connect to wallet first
      const { ethereum } = window;
      if (!ethereum) throw new Error("No wallet detected");
      
      // Request accounts if not already connected
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setUserAddress(accounts[0]);
      
      if (!userAddress) throw new Error("No connected wallet");

      // Call smart contract
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          to: tipContract.address,
          from: userAddress,
          data: encodeFunctionData({
            abi: tipContract.abi,
            functionName: "tipCreator",
            args: [creatorAddress, amount]
          })
        }]
      });
      
      alert(`Sent ${amount} $ATL!`);
    } catch (error) {
      console.error("Tip failed:", error);
    }
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
          All payments settle instantly on Base Network.
        </p>
      </div>

      {creators.map(({ category, list }) => (
        <div key={category} className="mb-8">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            {category} 
            <span className="text-xs bg-neutral-4 text-neutral-11 px-2 py-0.5 rounded-full">
              {list.length} creators
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
                      <span className="text-xs text-neutral-10">({creator.platform})</span>
                    </h4>
                    <p className="text-xs text-neutral-11 mt-1">
                      {creator.handle} • 🏦 WALLO: <em>{getRandomWallo()}</em>
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
                
                {/* Tipping & Booking Actions */}
                <div className="mt-3 flex gap-2 flex-wrap">
                  <button 
                    onClick={() => handleTip(creator.wallet, 1000)}
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-full",
                      "bg-[#A6192E]/10 hover:bg-[#A6192E]/20",
                      "border border-[#A6192E]/20",
                      "transition-colors"
                    )}
                  >
                    <FaEthereum className="text-[#A6192E] size-3" />
                    Tip $ATL
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
                    onClick={() => navigator.clipboard.writeText(creator.wallet)}
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