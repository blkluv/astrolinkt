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
          <h1 className="font-medium text-lg lg:text-3xl">💫 HAHZ.LIVE</h1>
          <h2 className="font-medium text-2xl lg:text-xl">🌴 WEB5 LINK-TREE 🔗</h2>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="flex flex-col gap-4 text-lg">
        <p className="text-xl font-semibold">✨ WEB5</p>
        <p>
          <strong>Web5:</strong> Your digital sovereignty meets spiritual alignment. 
          Manifest main character energy on-chain in the purpose economy where every interaction on-chain increases
          your blockchain credit. Support those who accept Bitcoin L$VE and build your tribe.
        </p>

        {/* Value of Subscribing - NEW SECTION */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border border-purple-200 mt-4">
          <p className="font-semibold text-lg mb-3">🚀 Why Subscribe to HAHZ.LIVE?</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-3">
              <span>🎯</span>
              <span><strong>Donate First:</strong> Get paid, after you submit proof of donation</span>
            </div>
            <div className="flex items-start gap-3">
              <span>🌐</span>
              <span><strong>Earn Bitcoin L$VE:</strong> Receive Bitcoin L$VE monthly for subscribing</span>
            </div>
            <div className="flex items-start gap-3">
              <span>📈</span>
              <span><strong>Spiritual Growth:</strong> Proven manifesting methods</span>
            </div>
            <div className="flex items-start gap-3">
              <span>💎</span>
              <span><strong>Exclusive Content:</strong> Livestreams, tutorials, and market insights</span>
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
                <span className="font-semibold text-gray-800">On-Chain Escrow</span>
              </div>
              <p className="text-sm text-gray-700">Submit proof of work on LUV NFT</p>
            </div>
            
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">💫</span>
                <span className="font-semibold text-gray-800">Livestream Business</span>
              </div>
              <p className="text-sm text-gray-700">Watch the purpose economy live</p>
            </div>
          </div>
        </div>

        {/* Web5 Explained + Creator Opportunity */}
        <div className="mt-6 space-y-4">
          <p className="text-xl font-semibold">🌐 Web5: Solutions</p>

          {/* Problem Statement */}
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <p className="font-semibold mb-2">🎯 The Web2 Problem:</p>
            <p className="text-sm text-gray-700">
              Platforms own your audience, control your reach, and take huge cuts. 
              You're building on rented land.
            </p>
          </div>

          {/* Web5 Solution */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-semibold mb-2">🚀 The Web5 Solution:</p>
            <p className="text-sm text-gray-700">
              <strong>You own everything</strong> - your identity, content, and relationships. 
              Built on Bitcoin technology, controlled by you.
            </p>
          </div>

          {/* How It Works for Creators */}
          <div className="space-y-3">
            <p className="font-semibold">💫 Your Web5 Creator Stack:</p>
            
            <div className="flex items-start gap-3 bg-purple-50 p-3 rounded-lg border border-purple-200">
              <span>👤</span>
              <div>
                <span className="text-gray-800 font-semibold">LUV NFT Profile</span>
                <p className="text-sm text-gray-700 mt-1">
                  Match LUV NFT APP name with your Phantom APP Username to start
                  your blockchain career with no algorithms and no shadowbanning.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg border border-blue-200">
              <span>💫</span>
              <div>
                
                <span className="text-gray-800 font-semibold">HAHZ.LIVE Subscription</span>
                <p className="text-sm text-gray-700 mt-1">
                    Tokenized business tools + <strong>5% lifetime royalties</strong> from referrals<br />
               <strong>Plus:</strong> Daily tokenized content airdrops (frequency based on your tier).
                </p>
              </div>
            </div>
          </div>

          {/* Earnings Example */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-200">
            <p className="font-semibold text-lg mb-3">💰 How You Earn in Web5:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-2">🎯 Direct Earnings:</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span>⭐</span>
                    <span>Keep 100% of your sales</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🔄</span>
                    <span>No platform fees</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold mb-2">🌱 Network Earnings:</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span>👥</span>
                    <span>5% from people you onboard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📈</span>
                    <span>Passive income grows forever</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Web5 Creator Toolkit */}
        <div className="mt-6 space-y-3">
          <p className="text-xl font-semibold">✨ All You Need for Web5 as a Creator</p>
          
          <div className="space-y-2 mt-3">
            {/* LUV NFT Profile */}
            <div className="flex items-start gap-3 bg-purple-50 p-3 rounded-lg border border-purple-200">
              <span>👤</span>
              <div>
                <span className="text-gray-800 font-semibold">LUV NFT Social Profile</span>
                <p className="text-sm text-gray-700 mt-1">
                  Your algorithm-free social presence where you own your content and connections
                </p>
              </div>
            </div>

            {/* HAHZ.LIVE Subscription */}
            <div className="flex items-start gap-3 bg-green-50 p-3 rounded-lg border border-green-200">
              <span>💫</span>
              <div>
                <span className="text-gray-800 font-semibold">HAHZ.LIVE Subscription</span>
                <p className="text-sm text-gray-700 mt-1">
                  Access tokenized marketing tools and earn <strong>5% royalties</strong> from everyone you onboard
                  that tokenizes their services and earn from your affiliate code.
                </p>
              </div>
            </div>

            {/* Onboarding Earnings Example */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-200">
              <p className="font-semibold text-lg mb-2">🎯 Example: Earn from Onboarding</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <span>➡️</span>
                  <span>Onboard 10 creators to tokenize their work</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>💰</span>
                  <span>Each pays $100/month subscription = $1,000/month pool</span>
                </div>
                <div className="flex items-start gap-2">
                  <span>🎁</span>
                  <span><strong>You earn 5% = $50/month in passive royalties</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <span>🚀</span>
                  <span>Scale to 100 creators = $500/month passive income</span>
                </div>
              </div>
            </div>

            {/* Quick Start Steps */}
            <div className="flex items-start gap-3 bg-blue-50 p-3 rounded-lg border border-blue-200">
              <span>⚡</span>
              <div>
                <span className="text-gray-800 font-semibold">Quick Start to Earnings</span>
                <p className="text-sm text-gray-700 mt-1">
                  1. Get your LUV NFT profile • 2. Subscribe to HAHZ.LIVE • 3. Onboard creators • 4. Earn 5% forever
                </p>
              </div>
            </div>
          </div>

          {/* CTA for Immediate Action */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 mb-2">
              Join the LUV NFT APP
            </p>
            <Button 
              as="a" 
              href="https://luvnft.com" 
              target="_blank"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold"
            >
              <span className="flex items-center gap-2">
                💫 LUV NFT APP
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="flex flex-col sm:flex-row gap-4 self-stretch justify-between items-center mt-6 p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white">
        <div className="text-center sm:text-left">
          <p className="font-semibold">Ready to manifest your next career on-chain?</p>
          <p className="text-sm opacity-90">Join the Web5 revolution today</p>
        </div>
        
        <Button 
          as="a" 
          href="https://sub.hahz.live" 
          target="_blank" 
          aria-label="Subscribe to HAHZ.LIVE"
          className="bg-white text-purple-600 hover:bg-gray-100 transition-colors font-semibold"
        >
          <span className="flex items-center gap-2">
            🚀 Subscribe Now
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