import { Container } from "@/layouts/Container";
import MetricHero from "../hero/MetricHero";

export default function Footer() {
  return (
    <footer className="bg-black/40 border-t border-green-500/20 text-white mt-20">
      <Container className="py-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold">Road to</span>
            </div>
            <div className="text-3xl font-bold text-green-400">sub 0</div>
            <p className="text-gray-400 text-md leading-relaxed max-w-md font-manrope mt-2">
              Building the future of decentralized innovation through
              collaborative hackathons and global community events.
            </p>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Connect</h3>
            <div className="space-y-3">
              <div className="flex space-x-3">
                <a
                  href="https://x.com/nerdconf_ar"
                  className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center hover:bg-green-500/30 transition-colors"
                >
                  <span className="text-green-400 text-sm font-bold">X</span>
                </a>
                <a
                  href="https://www.instagram.com/nerdconf/"
                  className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center hover:bg-green-500/30 transition-colors"
                >
                  <span className="text-green-400 text-sm font-bold">IG</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
            <span className="text-center sm:text-left">
              © 2024 Road to Sub0. All rights reserved.
            </span>
            <div className="flex space-x-4">
              <span>
                Built by{" "}
                <a
                  href="https://aftercode.dev"
                  className="text-radical-red transition-colors"
                >
                  Aftercode{" "}
                </a>
                and{" "}
                <a
                  href="https://nerdconf.com"
                  className="text-green transition-colors"
                >
                  Nerdconf
                </a>
              </span>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            Built for{" "}
            <span className="text-radical-red font-semibold">Polkadot</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
