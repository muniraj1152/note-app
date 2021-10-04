import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-light bg-secondary">
        <div className="collapse navbar-collapse" id="navbarNav">
          <h6>Notes app</h6>
        </div>
      </nav>
    </div>
  );
}
