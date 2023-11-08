'use client';
import React from 'react'
import { useRouter } from 'next/navigation';
import styles from '../page.module.css';

const Login = () => {
  const router = useRouter();

    const handleLogin = () => {
        // Your login logic here...
        // Assuming login is successful, redirect to the dashboard
        router.push('/dashboard');
      };
  return (
    <div className={styles.description}>
        <button type="button" onClick={handleLogin}>
          Dashboard
        </button>
      </div>
  )
}

export default Login