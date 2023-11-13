import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';
import '../style/HomePage.css';

export default function HomePage() {
  return (
    <div className="main">
      <div className="Link-container">
        <Link to="/" className="Link">
          Anasayfa
        </Link>
        <Link to="/Add-Tenant" className="Link">
          Kiracı Ekle
        </Link>
        <Link to="/Add-Property" className="Link">
          Mülk Ekle
        </Link>
        <Link to="/Create-Rental" className="Link">
          Kiralama Oluştur
        </Link>
      </div>
      <button className="Link fixed-Link">Çıkış Yap</button>
    </div>
  );
}
