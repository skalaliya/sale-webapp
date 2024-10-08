import React from 'react'
import { Leaf, Flower, ShoppingBag, Mail } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-green-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Leaf className="mr-2" /> Aussie Yoga & Herbs
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#yoga" className="hover:underline">Yoga</a></li>
              <li><a href="#products" className="hover:underline">Products</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <section id="hero" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Welcome to Aussie Yoga & Herbs</h2>
          <p className="text-xl">Discover the perfect balance of mind, body, and nature with our yoga classes and herbal products.</p>
        </section>

        <section id="yoga" className="mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center"><Flower className="mr-2" /> Yoga Classes</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Beginners Yoga</h3>
              <p>Perfect for those new to yoga. Learn the basics and build a strong foundation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Advanced Flow</h3>
              <p>Challenge yourself with complex poses and flowing sequences.</p>
            </div>
          </div>
        </section>

        <section id="products" className="mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center"><ShoppingBag className="mr-2" /> Herbal Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Herbal Tea" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">Calming Herbal Tea</h3>
              <p>A soothing blend to help you relax and unwind.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1547793549-70faf88838c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Essential Oils" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">Essential Oil Blend</h3>
              <p>Aromatherapy oils to enhance your yoga practice.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://images.unsplash.com/photo-1543362906-acfc16c67564?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Herbal Supplements" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">Herbal Supplements</h3>
              <p>Natural supplements to support your wellbeing.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-4 flex items-center"><Mail className="mr-2" /> Contact Us</h2>
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring focus:ring-green-200"></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-200">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="bg-green-600 text-white p-4 mt-16">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Aussie Yoga & Herbs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App