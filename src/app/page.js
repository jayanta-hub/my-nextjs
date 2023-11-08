'use client';
import React from 'react';
import styles from './page.module.css';
import Login from './login/pages';

export default function Home() {

  
  return (
    <main className={styles.main}>
      <Login/>
    </main>
  );
}
