"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';

const pesanJabutta = [
  "Semoga Misop Jabutta ini menghangatkan harimu! 🍜",
  "Terima kasih sudah menjadi bagian dari cerita kami.",
  "Jangan lupa bahagia hari ini, kamu sudah berusaha keras!",
  "Kuah rempah ini spesial untukmu, dinikmati selagi hangat ya!"
];

export default function PesanSpesial() {
  const [nama, setNama] = useState("");
  const [pesanTampil, setPesanTampil] = useState("");
  const [sudahKlik, setSudahKlik] = useState(false);

  const handleLihatPesan = (e) => {
    e.preventDefault();
    if (nama.trim() !== "") {
      const index = Math.floor(Math.random() * pesanJabutta.length);
      setPesanTampil(`Hai ${nama}, ${pesanJabutta[index]}`);
      setSudahKlik(true);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans flex flex-col">
      
      {/* --- NAVBAR --- */}
      {/* Di sini link menggunakan href ke path "/" diikuti ID section agar bisa lompat ke Home */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl font-bold tracking-tight text-orange-600 cursor-pointer">
              Kedai Jabutta
            </h1>
          </Link>
         
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow flex items-center justify-center p-6 pt-24 pb-12">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-orange-100 overflow-hidden border border-orange-50">
            
            {/* Video Area */}
            <div className="aspect-video bg-slate-200 relative">
              <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
                <source src="/video/thanks.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <h1 className="absolute bottom-4 left-6 text-white font-bold text-xl">Pesan Spesial</h1>
            </div>

            <div className="p-8 text-center">
              {!sudahKlik ? (
                <form onSubmit={handleLihatPesan} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-black text-slate-800">Khusus Untukmu</h2>
                    <p className="text-slate-500 text-sm mt-2">Masukkan namamu untuk melihat kejutan dari Kedai Jabutta.</p>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Ketik namamu di sini..."
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-orange-500 outline-none text-center text-lg font-medium"
                    required
                  />
                  <button type="submit" className="w-full bg-orange-500 text-white py-4 rounded-2xl font-bold shadow-lg hover:scale-[1.02] transition active:scale-95">
                    Buka Pesan ✨
                  </button>
                </form>
              ) : (
                <div className="space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-2">
                    <span className="text-3xl">🍜</span>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
                    <p className="text-xl text-orange-800 italic font-semibold leading-relaxed">
                      "{pesanTampil}"
                    </p>
                  </div>
                  <Link href="/" className="inline-block text-orange-500 font-bold hover:underline mt-4">
                    ← Kembali Beranda
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="container mx-auto px-6 flex flex-col items-center text-center gap-6">
          <h2 className="text-2xl font-black text-slate-900">Kedai Jabutta</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/6285111204623" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 transition-all duration-300">
                <FaWhatsapp className="text-2xl"/>
              </div>
            </a>
            <a href="https://instagram.com/kedaijabutta" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 transition-all duration-300">
                <FaInstagram className="text-2xl"/>
              </div>
            </a>
            <a href="https://tiktok.com/@kedaijabutta" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <FaTiktok className="text-2xl"/>
              </div>
            </a>
          </div>
          <p className="text-sm text-slate-400">© 2026 Kedai Jabutta. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}