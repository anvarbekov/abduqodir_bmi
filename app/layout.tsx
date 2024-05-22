import './globals.css'
import type { Metadata } from 'next'
import { Bellota } from 'next/font/google'
import Providers from '@/components/Providers'
import DrawerButton from '@/components/DrawerButton'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/header/Header1'
import { FaPhoneAlt, FaInstagram, FaYoutube, FaTelegram } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

const bellota = Bellota({ subsets: ['latin'], weight: ["400"]})

export const metadata: Metadata = {
  title: "Surxondaryo viloyati Qumqo'rg'on tumani 2-son kasb-hunar maktabining rasmiy veb sayti",
  description: 'Modern ECommerce Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bellota.className}>
        <Providers>
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <div className="min-h-screen flex flex-col">
                <Header />
                {children}
                <footer className="footer footer-center p-4">
                  <div className="address__footer">
                    <h3>
                      <CiLocationOn /> <span>Bizning manzil</span>
                    </h3>
                    <p>
                      O‘zbekiston Respublikasi, Surxondaryo viloyati, Qumqorgon tumani
                    </p>
                    <h3>
                      <FaPhoneAlt /> Telefon raqam
                    </h3>
                    <p className="phone__number">
                      <a href="tel:+998-91-582-92-55">+998-91-582-92-55</a>
                      <a href="tel:+998-99-426-05-74">+998-99-426-05-74</a>
                      <a href="tel:+998-91-903-70-58">+998-91-903-70-58</a>
                    </p>
                  </div>
                  <div className="map__footer">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2431.3454244263044!2d67.637527!3d37.886984!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b55b524d3f1b1f%3A0xd9b9279a224a511d!2sQumqo&#39;rg&#39;on%20tuman%202-son%20kasb-hunar%20maktabi!5e1!3m2!1sen!2sus!4v1716184634530!5m2!1sen!2sus"
                      width="600"
                      height="450"
                      className="footer__map"
                      style={{ border: 0 }}
                      loading="lazy"></iframe>
                  </div>
                  <div className="logo__footer">
                    <p>
                      © 2024 Qumqorgon tumani 2-son kasb hunar maktabi. Barcha huquqlar
                      himoyalangan. Veb-sayt <a className="text-teal-400" target="_blank" href="https://courcesget.netlify.app/">gettalim.com</a> tomonidan ishlab
                      chiqilgan
                    </p>
                    <div className="social">
                        <a href="https://t.me/qum2khm2" target="_blank" className="tg"><FaTelegram className="contact_icons anims fab fa-telegram" /></a>
                        <a href="https://www.instagram.com/reel/C6DUiBwtkR4/?igsh=MXYwMXJkNDlvejJiNA==" target="_blank" className="ins"><FaInstagram  className="contact_icons anims fab fa-instagram" /></a>
                        <a href="https://youtube.com/@Qumqorgontuman2-sonkasb-hunarm?si=JXcuLBR16Jg254ZE" target="_blank" className="you"><FaYoutube className="contact_icons anims fab fa-youtube" /></a>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <Sidebar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
