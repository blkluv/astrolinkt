import { Avatar, Button } from "./ui";
import { Lucide } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="/favicon.svg" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-3xl">🌴 TREE.</h1>
          <h2 className="font-medium text-2xl lg:text-xl">🅰️TL5D LINK-TREE</h2>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-lg">
        <p>TREE. is the ATL5D.com linktree "link in bio" for creators standing on business mapped a What3Words 3 word 🅰️DDY ///keep.it.simple.:</p>
        
        <div className="flex items-start gap-3">
          <span>🏬</span>
          <span>BIZ</span>
        </div>

        <div className="flex items-start gap-3">
          <span>💫</span>
          <span>🅰️FLUENCERS</span>
        </div>

        <p className="mt-4">✨ <strong>Instant Onboarding:</strong></p>
        <p>Summon the 🧙🏼‍♂️ <strong>Wizard of Hahz</strong> on Telegram to rise up:</p>

        <div className="flex items-start gap-3">
          <span>🔗</span>
          <span>Claim your custom 🅰️ TREE.</span>
        </div>

        <div className="flex items-start gap-3">
          <span>📢</span>
          <span>Launch paid ad campaigns</span>
        </div>

        <div className="flex items-start gap-3">
          <span>🦶🏽🦶🏽</span>
          <span>Drive real foot traffic to your 🅰️ block.</span>
        </div>
      </div>

      <div className="flex self-stretch justify-end">
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
