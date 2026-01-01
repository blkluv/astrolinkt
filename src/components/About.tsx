import { Avatar, Button } from "./ui";
import { Lucide } from "./icons";

export default function Atl5DLinkTree() {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      {/* Header Avatar + Branding */}
      <div className="flex flex-row items-center gap-4">
        <Avatar src="/favicon.svg" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-1">
          <h1 className="font-medium text-lg lg:text-3xl">🅰️ ATL5D</h1>
          <h2 className="font-medium text-2xl lg:text-xl">🌴 ATL LINK-TREE 🔗</h2>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="flex flex-col gap-4 text-lg">
        <p className="text-xl font-semibold">✨ UNITED</p>

        <p>
          <strong>👋 Welcome to ATL5D</strong>
          <br />
          We designed a new blueprint uniting Atlanta businesses & creators — replacing competition
          with purpose-driven collaboration. Subscribe on Discord for livestream bookings, branded
          TikTok ReelView/podcast AR effects + TikTok/Instagram promotion.
        </p>

        {/* Value of Subscribing - NEW SECTION */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200 mt-4">
          <p className="font-semibold text-lg mb-3">🚀 Why Subscribe to Camp Creek Market?</p>

          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <span>🗓️</span>
              <span><strong>Bookings:</strong> Turn your service booking into a livestream reality show.</span>
            </div>

            <div className="flex items-start gap-3">
              <span>🎙️</span>
              <span><strong>Podcast:</strong> Use our @CampCreekMarket TikTok Podcast open mic to promote your services.</span>
            </div>

            <div className="flex items-start gap-3">
              <span>🎥</span>
              <span><strong>ReelView:</strong> Ask your customers to leave a TikTok reel review we all can see.</span>
            </div>

            <div className="flex items-start gap-3">
              <span>🟠</span>
              <span><strong>Livestream Business:</strong> Watch Camp Creek Market livestreams.</span>
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mt-4">
          <p className="text-lg font-semibold mb-3">🎯 Services:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🏬</span>
                <span className="font-semibold text-gray-800">Verified</span>
              </div>
              <p className="text-sm text-gray-700">
                Verify your purpose and we verify your service.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">💫</span>
                <span className="font-semibold text-gray-800">Marketing</span>
              </div>
              <p className="text-sm text-gray-700">
                Hyper-local Camp Creek Atlanta exit marketing.
              </p>
            </div>
          </div>
        </div>

        {/* (rest of your sections unchanged) */}

        {/* CTA for Immediate Action */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 mb-2">Join the Discord</p>

          <Button
            as="a"
            href="https://discord.gg/p6xd9CErYy"
            target="_blank"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold"
          >
            <span className="flex items-center gap-2">💫 Discord</span>
          </Button>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="flex flex-col sm:flex-row gap-4 self-stretch justify-between items-center mt-6 p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white">
        <div className="text-center sm:text-left">
          <p className="font-semibold">Ready to verify your Camp Creek Market business?</p>
          <p className="text-sm opacity-90">Subscribe today</p>
        </div>

        <Button
          as="a"
          href="https://discord.com/channels/1244450286337003520/shop"
          target="_blank"
          aria-label="Subscribe to Camp Creek Market Discord"
          className="bg-white text-purple-600 hover:bg-gray-100 transition-colors font-semibold"
        >
          <span className="flex items-center gap-2">Subscribe</span>
        </Button>
      </div>

      {/* Secondary CTA */}
      <div className="flex self-stretch justify-center mt-2">
        <Button
          as="a"
          href="https://t.me/wizardofhahz"
          target="_blank"
          className="border-purple-300 text-purple-600 hover:bg-purple-50 transition-colors"
        >
          <span className="flex items-center gap-2">🧙🏼‍♂️ Contact Wizard on Telegram</span>
        </Button>
      </div>
    </div>
  );
}