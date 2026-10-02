import banner from'../assets/logo-text.png'
const Footer = () => {
  return (
    <footer className="border-t border-gray-100 mt-16">

      <div className="container mx-auto px-4 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-8">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-2">
              <div className="">
                <img src={banner} alt="" />
              {/* <div className="w-6 h-6 bg-purple-500 rounded-md flex items-center justify-center"> */}
                {/* <span className="text-white text-[10px] font-bold">
                  DS
                </span> */}
              </div>

              {/* <h2 className="text-[16px] font-bold">
                Dev <span className="text-pink-500">Stack</span> */}
              {/* </h2> */}

            </div>

            <p className="text-[10px] text-gray-400 leading-4 mt-4 max-w-md">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="flex gap-5 mt-6">

              <span className="text-[10px] text-gray-600">
                GitHub
              </span>

              <span className="text-[10px] text-gray-600">
                Twitter
              </span>

              <span className="text-[10px] text-gray-600">
                LinkedIn
              </span>

            </div>

          </div>


          {/* Product */}
          <div>

            <h3 className="text-[10px] font-bold text-gray-800">
              PRODUCT
            </h3>

            <div className="flex flex-col gap-3 mt-5">

              <span className="text-[10px] text-gray-400">
                Home
              </span>

              <span className="text-[10px] text-gray-400">
                Technologies
              </span>

              <span className="text-[10px] text-gray-400">
                Projects
              </span>

            </div>

          </div>


          {/* Company */}
          <div>

            <h3 className="text-[10px] font-bold text-gray-800">
              COMPANY
            </h3>

            <div className="flex flex-col gap-3 mt-5">

              <span className="text-[10px] text-gray-400">
                About
              </span>

              <span className="text-[10px] text-gray-400">
                Contact
              </span>

              <span className="text-[10px] text-gray-400">
                Careers
              </span>

            </div>

          </div>


          {/* Legal */}
          <div>

            <h3 className="text-[10px] font-bold text-gray-800">
              LEGAL
            </h3>

            <div className="flex flex-col gap-3 mt-5">

              <span className="text-[10px] text-gray-400">
                Privacy Policy
              </span>

              <span className="text-[10px] text-gray-400">
                Terms of Service
              </span>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-gray-100 mt-10 pt-6 flex justify-between items-center">

          <p className="text-[10px] text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-6">

            <span className="text-[10px] text-gray-400">
              Privacy
            </span>

            <span className="text-[10px] text-gray-400">
              Terms
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;