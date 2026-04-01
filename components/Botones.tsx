"use client";

export default function Botones() {
  return (
    <div className="space-y-4">
      <button
        onClick={() => window.open("https://www.tiktok.com", "_blank")}
        className="px-4 py-2 bg-black text-white rounded"
      >
        TikTok
      </button>

      <button
        onClick={() => window.open("https://www.facebook.com", "_blank")}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Facebook
      </button>

      <button
        onClick={() => window.open("https://www.instagram.com", "_blank")}
        className="px-4 py-2 bg-pink-500 text-white rounded"
      >
        Instagram
      </button>

      <button
        onClick={() => window.open("https://twitter.com", "_blank")}
        className="px-4 py-2 bg-sky-500 text-white rounded"
      >
        Twitter
      </button>

      <button
        onClick={() => window.open("https://www.youtube.com", "_blank")}
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        YouTube
      </button>

      <button
        onClick={() => window.open("https://www.mercadolibre.com.mx", "_blank")}
        className="px-4 py-2 bg-yellow-500 text-black rounded"
      >
        Mercado Libre
      </button>
    </div>
  );
}
