import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Pages.css';

export default function NotFound() {
  return (
    <div className="notfound">
      <h2>Yanlış Sayfa</h2>
      <p>Sayfa Bulunamadı</p>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/" className="Link ">
        Anasayfa
      </Link>
    </div>
  );
}
