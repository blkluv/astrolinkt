import { Avatar, Button } from "./ui";
import { Lucide } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      {/* Header Avatar + Branding */}
      <div className="flex flex-row items-center gap-4">
        <Avatar src="/favicon.svg" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-1">
          <h1 className="font-medium text-lg lg:text-3xl">🌴 TREE.</h1>
          <h2 className="font-medium text-2xl lg:text-xl">🅰️TL5D LINK-TREE 🔗</h2>
        </div>
      </div>

      {/* About TREE. */}
      <div className="flex flex-col gap-4 text-lg">
        <p>
          🅰️ TREE. is the official ATL5D.com 🌐 link-in-bio drop for creator livestream shows and W🅰️LLO for $ATL tips.
        </p>
        <p className="text-sm text-neutral-10 italic">🅱️iz What3Words 🅰️DDY: <code>///keep.it.simple</code></p>

        {/* TREE. Categories */}
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex items-center gap-3">
            <span>🏬</span>
            <span><strong>🅱️IZ</strong></span>
          </div>

          <div className="flex items-center gap-3">
            <span>💫</span>
            <span><strong>🅰️FLUENCERS</strong></span>
          </div>
        </div>

        {/* Onboarding Section */}
        <div className="mt-6 space-y-2">
          <p className="text-xl font-semibold">✨ Instant Onboarding:</p>
          <p>Summon the 🧙🏼‍♂️ <strong>Wizard of Hahz</strong> on Telegram to get activated 🔥</p>

          <div className="flex flex-col gap-2 mt-2">
            <div className="flex items-start gap-3">
              <span>🔗</span>
              <span>Claim your custom branded TREE. 🅰️TL5D subdomain</span>
            </div>
            <div className="flex items-start gap-3">
              <span>📢</span>
              <span>Display a menu of your livestream shows and your d-commerce merch</span>
            </div>
            <div className="flex items-start gap-3">
              <span>🦶🏽🦶🏽</span>
              <span>Drive real foot traffic to your What3Words 🅱️iz IRL</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex self-stretch justify-end mt-4">
        <Button 
          as="a" 
          href="https://t.me/hahznft" 
          target="_blank" 
          aria-label="Contact Wizard of Hahz on Telegram"
          className="bg-purple-600 hover:bg-purple-700 transition-colors"
        >
          <span className="text-xl flex items-center gap-2">
            🧙🏼‍♂️ Wizard of Hahz
          </span>
        </Button>
      </div>
    </div>
  );
};
