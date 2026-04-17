export default function Products() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold mb-8">Our Products</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold">Live Catfish</h3>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold">Smoked Catfish</h3>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow">
          <h3 className="text-xl font-semibold">Packaged Fish</h3>
        </div>
      </div>
    </section>
  )
}
