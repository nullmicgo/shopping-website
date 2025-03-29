import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#F4F6F5] pt-24 pb-32 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-8xl font-black leading-[1.1] mb-8">
                LET&apos;S{'\n'}
                EXPLORE{'\n'}
                UNIQUE{'\n'}
                CLOTHES.
              </h1>
              <p className="text-2xl text-[#191818] mb-12">
                Live for Influential and Innovative fashion!
              </p>
              <button className="bg-black text-white px-14 py-4 rounded-lg text-xl font-medium hover:bg-gray-900 transition-colors">
                Shop Now
              </button>
            </div>
            <div className="relative -right-20">
              <div className="absolute -top-40 -left-40 w-[850px] h-[850px] bg-primary rounded-full -z-10 opacity-90" />
              <div className="relative w-[800px] h-[1000px]">
                <Image
                  src="/images/hero-image.png"
                  alt="Fashion Model"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <Image
                key={num}
                src={`/images/brand-${num}.png`}
                alt={`Brand ${num}`}
                width={120}
                height={40}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-2 bg-primary rounded-full"></div>
            <h2 className="text-4xl font-black tracking-wider">NEW ARRIVALS</h2>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                image: "/images/product-1.png",
                title: "Hoodies & Sweetshirt",
                link: "#"
              },
              {
                image: "/images/product-2.png",
                title: "Coats & Parkas",
                link: "#"
              },
              {
                image: "/images/product-3.png",
                title: "Tees & T-Shirt",
                link: "#"
              }
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-6 bg-[#F4F6F5] aspect-[3/4]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-medium mb-2">{product.title}</h3>
                    <Link href={product.link} className="text-lg text-gray-500 hover:text-black transition-colors">
                      Explore Now!
                    </Link>
                  </div>
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payday Sale Section */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-2 bg-primary rounded-full"></div>
            <h2 className="text-4xl font-black tracking-wider">PAYDAY SALE NOW</h2>
          </div>
          
          <div className="grid grid-cols-4 gap-8">
            {[
              {
                image: "/images/sale-1.png",
                discount: "Spend minimum $100 get 30% off",
                code: "SHOPPING",
                time: "1 Jan to 10 Jan 2024"
              },
              {
                image: "/images/sale-2.png",
                discount: "Spend minimum $100 get 30% off",
                code: "SHOPPING",
                time: "1 Jan to 10 Jan 2024"
              },
              {
                image: "/images/sale-3.png",
                discount: "Spend minimum $100 get 30% off",
                code: "SHOPPING",
                time: "1 Jan to 10 Jan 2024"
              },
              {
                image: "/images/sale-4.png",
                discount: "Spend minimum $100 get 30% off",
                code: "SHOPPING",
                time: "1 Jan to 10 Jan 2024"
              }
            ].map((sale, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-6 bg-[#F4F6F5] aspect-square">
                  <Image
                    src={sale.image}
                    alt={sale.discount}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="text-lg mb-2">{sale.discount}</p>
                  <p className="text-2xl font-bold mb-2">UPTO {sale.code}</p>
                  <p className="text-gray-500">{sale.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Young's Favourite Section */}
      <section className="py-24 bg-[#F4F6F5]">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-2 bg-primary rounded-full"></div>
            <h2 className="text-4xl font-black tracking-wider">Young&apos;s Favourite</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {[
              {
                image: "/images/product-4.png",
                title: "Trending on instagram",
                link: "#"
              },
              {
                image: "/images/product-1.png",
                title: "All Under $40",
                link: "#"
              }
            ].map((item, index) => (
              <div key={index} className="relative rounded-3xl overflow-hidden group cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-[500px] transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-sm p-6 rounded-2xl">
                  <h3 className="text-2xl font-medium mb-2">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <Link href={item.link} className="text-lg text-gray-700 hover:text-black transition-colors">
                      Explore Now!
                    </Link>
                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-24">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black tracking-wider mb-10">
                DOWNLOAD APP &<br />
                GET THE VOUCHER!
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Get 30% off for first transaction using<br />
                Rondovision mobile app for now.
              </p>
              <div className="flex gap-6">
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/images/app-store.svg"
                    alt="Download on the App Store"
                    width={170}
                    height={50}
                  />
                </Link>
                <Link href="#" className="hover:opacity-80 transition-opacity">
                  <Image
                    src="/images/google-play.svg"
                    alt="Get it on Google Play"
                    width={170}
                    height={50}
                  />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-primary rounded-full -z-10" />
              <Image
                src="/images/mobile-app.svg"
                alt="Mobile App"
                width={400}
                height={600}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 bg-[#F4F6F5]">
        <div className="container mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-black tracking-wider mb-10">
              JOIN SHOPPING COMMUNITY TO<br />
              GET MONTHLY PROMO
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Type your email down below and be young wild generation
            </p>
            <div className="flex gap-4 justify-center">
              <input
                type="email"
                placeholder="Add your email here"
                className="w-96 px-6 py-3 rounded-lg text-lg border-2 border-black focus:outline-none focus:border-primary"
              />
              <button className="btn-primary text-lg">
                SEND
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
