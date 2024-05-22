import ContactForm from "@/components/contactForm/ContactForm";
import Link from "next/link";

export const metadata = {
  title: "Aloqa bolimi",
}
export default function ContactPage() {
  return (
    <>
      <section className="body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://cmb-boys.s3.amazonaws.com/uploads/asset_image/2_31_ht.jpg?t=1716330388" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">Surxondaryo viloyati Qumqorgon tumani 2-son kasb-hunar maktabi</h1>
            <p className="mb-8 leading-relaxed">Kasb-hunar maktabimiz 585 orinli, oquvchilar yotoqxonasi 50 orinli, oquv ustaxonamiz 150 orinli, Oshxona 50 orinli, Faollar zali 250 orinli, Sport zal 36 x 36 <br className="hidden lg:inline-block" />Bizga har qanday murojaatingizni pastdagi form oynasi orqali yuborishingiz mumkin.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <Link href={"/"}>Bosh sahifa</Link>
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <Link href={"/history"}>Muassasa tarixi</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <h3 className="text-center text-4xl mb-10">Xabaringizni yuboring</h3>
      <div className="my-10 mx-auto">
        <ContactForm />
      </div>
    </>
  )
}
