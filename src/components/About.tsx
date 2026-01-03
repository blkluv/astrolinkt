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
          <h1 className="font-medium text-lg lg:text-3xl">🍑TREE</h1>
          <h2 className="font-medium text-2xl lg:text-xl">🗓️ Bookings</h2>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="flex flex-col gap-4 text-lg">
        <p className="text-xl font-semibold">✨ UNITED</p>
        <p>
          Promote your Atlanta services on ATL5D 🍑TREE. We promote our Tribe across
          our social channels, and businesses only pay for verified leads or bookings.
        </p>

        {/* Value of Subscribing - NEW SECTION */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200 mt-4">
          <p className="font-semibold text-lg mb-3">🚀 Why Subscribe to Camp Creek Market?</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <span>🗓️</span>
              <span><strong>Bookings</strong> Turn your service booking to a livestream reality show.</span>
            </div>
            <div className="flex items-start gap-3">
              <span>🎙️</span>
              <span><strong>Podcast:</strong> Use our @CampCreekMarket TikTok Podcast open mic to promote your Camp Creek services.</span>
            </div>
            <div className="flex items-start gap-3">
              <span>🎙️</span>
              <span><strong>ReelView:</strong> Ask your customers to leave a TikTok reel review we all can see.</span>
            </div>
            <div className="flex items-start gap-3">
              <span>🟠</span>
              <span><strong>Livestream Business:</strong> Watch Camp Creek Market livestreams.</span>
            </div>
          </div>
        </div>

        {/* Service Categories - FIXED CONTRAST */}
        <div className="mt-4">
          <p className="text-lg font-semibold mb-3">🎯 Services:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">🏬</span>
                <span className="font-semibold text-gray-800">Verified</span>
              </div>
              <p className="text-sm text-gray-700">Verify your purpose and we verify your service.</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">💫</span>
                <span className="font-semibold text-gray-800">Marketing</span>
              </div>
              <p className="text-sm text-gray-700">Hyper local Camp Creek Atlanta exit marketing.</p>
            </div>
          </div>
        </div>

        {/* Web5 Explained + Creator Opportunity */}
        <div className="mt-6 space-y-4">
          <p className="text-xl font-semibold">📲 Social Media</p>

          {/* Problem Statement */}
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="font-semibold mb-2">🎯 Problem:</p>
            <p className="text-sm text-gray-700">
              Only 2% of your business content on social media actually reaches your audience.
            </p>
          </div>

          {/* Web5 Solution */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold mb-2">🚀 Solution:</p>
            <p className="text-sm text-gray-700">
              On our Camp Creek Market Discord, 100% of your content reaches your target audience.
            </p>
          </div>

          {/* How It Works for Creators */}
          <div className="space-y-3">
            <p className="font-semibold">💫 Creator Marketing</p>
            
            <div className="flex items-start gap-3 bg-purple-50 p-3 rounded-lg border border-purple-200">
              <span>👤</span>
              <div>
                <span className="text-gray-800 font-semibold">Discord Profile</span>
                <p className="text-sm text-gray-700 mt-1">
                  Create a Camp Creek Market profile and donate your services to earn daily.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg border border-blue-200">
              <span>💫</span>
              <div>
                
                <span className="text-gray-800 font-semibold">Discord ReelView Subscription</span>
                <p className="text-sm text-gray-700 mt-1">
                  Subscribe to Camp Creek Market Discord ReelView and receive a branded TikTok ReelView mic.
                </p>
              </div>
            </div>
          </div>

          {/* Earnings Example */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-200">
            <p className="font-semibold text-lg mb-3">💰 How You Earn:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-2">🎯 Services:</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span>⭐</span>
                    <span>Donate your service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🔄</span>
                    <span>Provide proof with a ReelView</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-2">🌱 Products:</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span>👥</span>
                    <span>We create a Stripe product</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📈</span>
                    <span>Provide proof of delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Web5 Creator Toolkit */}
        <div className="mt-6 space-y-3">
          <p className="text-xl font-semibold">🏪 Business</p>
          
          <div className="space-y-2 mt-3">
            {/* LUV NFT Profile */}
            <div className="flex items-start gap-3 bg-purple-50 p-3 rounded-lg border border-purple-200">
              <span>👤</span>
              <div>
                <span className="text-gray-800 font-semibold">Discord Profile</span>
                <p className="text-sm text-gray-700 mt-1">
                  Create a verified Camp Creek Market Discord profile and channel for open business communication.
                </p>
              </div>
            </div>

            {/* HAHZ.LIVE Subscription */}
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg border border-green-200">
              <span>💫</span>
              <div>
                <span className="text-gray-800 font-semibold">Discord Ad Subscription</span>
                <p className="text-sm text-gray-700 mt-1">
                  Subscribe to a Camp Creek Discord Ad subscription to maximize your business visibility on all of
                  our channels with a fixed monthly fee that pays for itself.
                </p>
              </div>
            </div>

            {/* Onboarding Earnings Example */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-200">
              <p className="font-semibold text-lg mb-2">🚀 Benefits</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span>🌴</span>
                  <span>Ad a direct link to your business in the Camp Creek Linktree</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>📲</span>
                  <span>All TikTok posts auto-sync to Discord's #local-economy-hub</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>🎁</span>
                  <span><strong>5 Stripe product or service links</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <span>🧙🏽‍♂️</span>
                  <span>Fractionalized Wizard of Hahz CMO (Cheif Marketing Officer) marketing guidance </span>
                </div>
              </div>
            </div>

            {/* Quick Start Steps */}
            <div className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg border border-blue-200">
              <span>⚡</span>
              <div>
                <span className="text-gray-800 font-semibold">BLKLUV.ORG</span>
                <p className="text-sm text-gray-700 mt-1">
                  1. Send/Receive payments with no middleman fees • 2. Screenshot proof of pay
                </p>
              </div>
            </div>
          </div>

          {/* CTA for Immediate Action */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 mb-2">
              Join the Discord
            </p>
            <Button 
              as="a" 
              href="https://discord.gg/p6xd9CErYy" 
              target="_blank"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold"
            >
              <span className="flex items-center gap-2">
                💫 Discord
              </span>
            </Button>
          </div>
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
          <span className="flex items-center gap-2">
          Subscribe
          </span>
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
          <span className="flex items-center gap-2">
            🧙🏼‍♂️ Contact Wizard on Telegram
          </span>
        </Button>
      </div>
    </div>
  );
};