'use client'

import { useState, useEffect } from 'react'

export default function RealEstatePlatform() {
  const [properties, setProperties] = useState([
    { id: 1, title: 'Modern Apartment', price: 450000, beds: 3, baths: 2, area: 1200, city: 'Rahim Yar Khan', image: '🏢' },
    { id: 2, title: 'Luxury House', price: 850000, beds: 5, baths: 4, area: 3500, city: 'Rahim Yar Khan', image: '🏡' },
    { id: 3, title: 'Cozy Studio', price: 180000, beds: 1, baths: 1, area: 500, city: 'Rahim Yar Khan', image: '🏠' },
    { id: 4, title: 'Commercial Space', price: 320000, beds: 0, baths: 2, area: 2000, city: 'Rahim Yar Khan', image: '🏬' },
    { id: 5, title: 'Spacious Villa', price: 950000, beds: 6, baths: 5, area: 4500, city: 'Lahore', image: '🏛️' },
    { id: 6, title: 'Compact Office', price: 250000, beds: 0, baths: 1, area: 800, city: 'Islamabad', image: '🏢' },
  ])

  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(1000000)
  const [beds, setBeds] = useState('Any')
  const [city, setCity] = useState('All')
  const [favorites, setFavorites] = useState([])

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('favorites')
    if (saved) setFavorites(JSON.parse(saved))
  }, [])

  // Filter properties
  const filteredProperties = properties.filter(p => {
    const priceMatch = p.price >= minPrice && p.price <= maxPrice
    const bedsMatch = beds === 'Any' || (beds === '4+' ? p.beds >= 4 : p.beds === parseInt(beds))
    const cityMatch = city === 'All' || p.city === city
    return priceMatch && bedsMatch && cityMatch
  })

  const toggleFavorite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter(f => f !== id)
      : [...favorites, id]
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Real Estate Platform</h1>
          <p className="text-gray-600 mt-2">Find your perfect property | {filteredProperties.length} properties found</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Filters</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Price Range</label>
                  <div className="space-y-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={minPrice}
                      onChange={(e) => setMinPrice(parseInt(e.target.value) || 0)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(parseInt(e.target.value) || 1000000)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Bedrooms</label>
                  <select value={beds} onChange={(e) => setBeds(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                    <option>Any</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">City</label>
                  <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm">
                    <option value="All">All Cities</option>
                    <option>Rahim Yar Khan</option>
                    <option>Lahore</option>
                    <option>Islamabad</option>
                    <option>Karachi</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Properties */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProperties.map(property => (
                <div key={property.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
                  <div className="bg-gray-200 h-48 flex items-center justify-between px-4">
                    <div className="text-6xl">{property.image}</div>
                    <button onClick={() => toggleFavorite(property.id)} className="text-3xl">
                      {favorites.includes(property.id) ? '❤️' : '🤍'}
                    </button>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{property.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{property.city}</p>

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-blue-600">Rs {property.price.toLocaleString()}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{property.beds}</p>
                        <p className="text-gray-600">Beds</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{property.baths}</p>
                        <p className="text-gray-600">Baths</p>
                      </div>
                      <div className="text-center">
                        <p className="font-semibold text-gray-900">{property.area}</p>
                        <p className="text-gray-600">Sq Ft</p>
                      </div>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
