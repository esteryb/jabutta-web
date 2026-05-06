"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaInstagram, FaTiktok, FaPlay } from 'react-icons/fa';

const menuJabutta = [
  {
    id: 1,
    nama: "Misop Spesial Jabutta",
    harga: "Rp 30.000",
    deskripsi: "Kuah rempah rahasia dengan suwiran ayam.",
    image: "/images/MisopBesar.png" 
  }
];

// Data Galeri Baru
const galeriJabutta = [
  { id: 1, type: 'video', src: '/images/video1.mov', alt: 'Suasana Kedai' },
  { id: 2, type: 'image', src: '/images/foto1.jpeg', alt: 'Proses Memasak' },
  { id: 3, type: 'image', src: '/images/foto4.jpeg', poster: '/images/thumb1.jpg' },
  { id: 4, type: 'image', src: '/images/foto2.jpeg', alt: 'Detail Misop' },
];

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <Link 
            href="/" 
            onClick={(e) => {
              if (window.location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <h1 className="text-xl font-bold tracking-tight text-orange-600 cursor-pointer">
              Kedai Jabutta
            </h1>
          </Link>

          <div className="flex gap-6 items-center">
            {/* <a href="#menu" className="text-sm font-medium hover:text-orange-500 transition">Menu</a> */}
            <a href="#galeri" className="text-sm font-medium hover:text-orange-500 transition">Galeri</a>
            <a href="#hubungikami" className="text-sm font-medium hover:text-orange-500 transition">Hubungi Kami</a>
            <a href="https://wa.me/6285111204623" target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-orange-200 hover:scale-105 transition active:scale-95">
              Pesan Sekarang
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-5xl md:text-6xl font-black leading-tight text-slate-900">
              Kehangatan <span className="text-orange-500">Kaldu</span> <br/>Untukmu
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              Manjakan lidahmu dengan Misop spesial hangat racikan asli Kedai Jabutta. Dibuat dengan cinta untuk menemani setiap cerita.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="relative aspect-square rounded-[2rem] bg-slate-200 overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition duration-500 border-8 border-white">
              <img
                src="/images/MisopBesar.png"
                alt="Misop Jabutta"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- MENU SECTION --- */}
      <section id="menu" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-slate-900">Menu Kami</h3>
            <div className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
            {menuJabutta.map((item) => (
              <div 
                key={item.id} 
                className="group bg-slate-50 p-4 rounded-3xl flex items-center gap-6 border border-slate-100 hover:shadow-lg transition-all duration-300 w-full md:w-[calc(50%-1rem)] max-w-md"
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-2xl overflow-hidden shadow-md">
                  <img 
                    src={item.image} 
                    alt={item.nama} 
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                  />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="text-xl font-bold text-slate-900">{item.nama}</h4>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">{item.deskripsi}</p>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-lg font-black text-orange-600">{item.harga}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* --- SARAN PENYAJIAN SECTION --- */}
<section className="py-20 bg-orange-50">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col md:flex-row items-center gap-12">
      
      {/* Kolom Video */}
      <div className="flex-1 w-full relative">
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[9/16] md:aspect-square max-w-sm mx-auto">
          <video 
            src="/images/video2.mov" 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        {/* Dekorasi Aksen */}
        <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg hidden md:block">
          <p className="text-orange-600 font-bold text-sm">Resep Otentik ✨</p>
        </div>
      </div>

      {/* Kolom Teks / Tutorial */}
      <div className="flex-1 space-y-8">
        <div>
          <h3 className="text-3xl font-black text-slate-900 leading-tight">
            Cara Menikmati <br/>
            <span className="text-orange-600">Kehangatan Jabutta</span>
          </h3>
          <p className="text-slate-600 mt-4">
            Agar rasa rempahnya makin "nendang", ikuti tutorial penyajian spesial dari kami:
          </p>
        </div>

        <div className="space-y-6">
          {/* Langkah 1 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">1</div>
            <div>
              <h4 className="font-bold text-slate-900">Tuang Selagi Panas</h4>
              <p className="text-sm text-slate-500">Disarankan kuah dalam keadaan panas saat dituang ke mangkuk agar aroma rempah keluar sempurna.</p>
            </div>
          </div>

          {/* Langkah 2 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">2</div>
            <div>
              <h4 className="font-bold text-slate-900">Aduk Misop</h4>
              <p className="text-sm text-slate-500">Aduk misop agar seluruh isinya merata.</p>
            </div>
          </div>

          {/* Langkah 3 */}
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">3</div>
            <div>
              <h4 className="font-bold text-slate-900">Tambahkan sambal</h4>
              <p className="text-sm text-slate-500">Tambahkan sambal sesuai selera kamu</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <a 
            href="https://wa.me/6285111204623" 
            className="inline-block border-2 border-orange-500 text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-md"
          >
            Pesan Buat Makan di Rumah
          </a>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* --- GALLERY SECTION (NEW) --- */}
      <section id="galeri" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-12">
            <h3 className="text-3xl font-extrabold text-slate-900">Momen Di Kedai</h3>
            <p className="text-slate-500 mt-2">Intip kelezatan dan suasana hangat kami</p>
            <div className="h-1 w-24 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
      {galeriJabutta.map((item) => (
        <div key={item.id} className="relative group overflow-hidden rounded-2xl aspect-[3/4] bg-slate-200 shadow-sm">
          {item.type === 'image' ? (
            <img 
              src={item.src} 
              alt={item.alt} 
              className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full relative">
              <video 
                src={item.src} 
                poster={item.poster}
                className="w-full h-full object-cover cursor-pointer"
                muted
                loop
                playsInline
                // KUNCI UTAMA: Tambahkan onClick agar bisa diklik manual
                onClick={(e) => {
                  if (e.target.paused) {
                    e.target.play();
                  } else {
                    e.target.pause();
                  }
                }}
                onMouseOver={e => e.target.play()}
                onMouseOut={e => e.target.pause()}
              />
              {/* Overlay Ikon Play: Tambahkan 'pointer-events-none' agar tidak menghalangi klik */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:opacity-0 transition-opacity pointer-events-none">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-orange-600 shadow-xl">
                  <FaPlay className="ml-1" />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <section id="hubungikami">
        <footer className="bg-white border-t border-slate-100 py-12">
          {/* ... isi footer tetap sama ... */}
          <div className="container mx-auto px-6 flex flex-col items-center text-center gap-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900">Kedai Jabutta</h2>
              <p className="text-slate-500 mt-2 max-w-xs">
                Kehangatan resep turun temurun, langsung ke meja makanmu.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <a href="https://wa.me/6285111204623" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <FaWhatsapp className="text-2xl"/>
                </div>
                <span className="text-[10px] mt-1 font-bold opacity-50 uppercase tracking-tighter">WhatsApp</span>
              </a>

              <a href="https://instagram.com/kedaijabutta" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  <FaInstagram className="text-2xl"/>
                </div>
                <span className="text-[10px] mt-1 font-bold opacity-50 uppercase tracking-tighter">Instagram</span>
              </a>

              <a href="https://tiktok.com/@kedaijabutta" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm">
                  <FaTiktok className="text-2xl"/>
                </div>
                <span className="text-[10px] mt-1 font-bold opacity-50 uppercase tracking-tighter">TikTok</span>
              </a>
            </div>

            <div className="w-full max-w-md h-px bg-slate-100 my-4"></div>

            <div className="text-sm text-slate-400">
              <p>© 2026 Kedai Jabutta. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}