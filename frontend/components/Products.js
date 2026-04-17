export default function Products(){
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Our Products
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {[
          "Live Catfish",
          "Smoked Catfish",
          "Packaged Fish"
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-mist hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">{item}</h3>
            <p className="mt-2 opacity-70">
              Premium quality, hygienically handled and ready for market.
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}
