import footerLogo from "../assets/footer_logo.webp";
import A from "../utils/Anchor";
import Button from "../utils/Button";
import Input from "../utils/Input";

function Footer() {
  return (
    <footer className="bg-footer-color text-gray-400 pt-10">
      <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 justify-between lg:gap-20 gap-4 p-4 py-6 lg:pt-8 lg:pb-20 border-b border-b-gray-500 ">
        <div className="lg:p-0 pb-4">
          <img src={footerLogo} alt="footer" className="h-8 mb-4" />
          <p className="text-md pt-4">
            Embrace the world of digital currency and redefine your investment
            strategies with us.
          </p>
          <div className="flex  gap-2 pt-8">
            <div class="social-icons flex flex-cols flex-wrap">
              <a href="#" class="social-icon facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon pinterest">
                <i class="fab fa-pinterest-p"></i>
              </a>
              <a href="#" class="social-icon linkedin">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="social-icon youtube">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 grid">
          <div className="flex flex-col gap-4 lg:border-0 border-t lg:p-0 py-8">
            <h4 className="font-medium text-white text-lg pb-4">Company</h4>
            <A href="#">Home</A>
            <A href="#">Blogs</A>
            <A href="#">Properties</A>
            <A href="#">Agents</A>
            <A href="#">FAQ</A>
          </div>
          <div className="flex flex-col gap-4 lg:border-0 border-t lg:p-0 py-8">
            <h4 className="font-medium text-white text-lg pb-4">Pages</h4>
            <A href="#">About Us</A>
            <A href="#">Contact</A>
            <A href="#">Style-Guide</A>
            <A href="#">Change-Log</A>
            <A href="#">Licensing</A>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:border-0 border-t lg:p-0 py-8">
          <h4 className="font-medium text-white text-lg pb-4">
            Subscribe Newsletter
          </h4>
          <p>
            Subscribe to our newsletter for weekly updates, market insights, and
            special offers.
          </p>
          <form>
            <Input type="email" placeholder="example@gmail.com" required />
            <Button type="submit" className=" w-full py-2 mt-4">
              Subscribe Now
            </Button>
          </form>
        </div>
      </div>
      <div className="py-4 text-lg text-center">
        <p>Copyright © 2024 TNC Resida | Designed by Karan Mistry</p>
      </div>
    </footer>
  );
}

export default Footer;
