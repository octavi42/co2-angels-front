export function Contact() {
  return (
    <div className="max-w-md mx-auto">
      <form className="space-y-4">
        <input type="text" name="name" placeholder="Name" className="w-full px-3 py-2 bg-gray-800 text-white rounded-md text-sm" required />
        <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 bg-gray-800 text-white rounded-md text-sm" required />
        <textarea name="message" rows={4} placeholder="Message" className="w-full px-3 py-2 bg-gray-800 text-white rounded-md text-sm" required></textarea>
        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-black font-medium py-2 px-4 rounded-md transition-colors text-sm">
          Send
        </button>
      </form>
    </div>
  )
}

