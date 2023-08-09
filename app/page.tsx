"use client"

import Image from 'next/image';
import { toast } from 'react-toastify';
import styles from './page.module.css'
import { useEffect, useState } from 'react';
import { useSendEmail } from '@/hooks/useSendMail';
import { ArrowIcon } from '@/components/icons/arrow-icon';

export default function Home() {

  const [email, setEmail] = useState("");
  const { mutate, isSuccess, isError } = useSendEmail();

  useEffect(() => {
    if(!isError) return;
    toast("Erro ao confirmar, verifique seu e-mail e tente novamente 😔",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
      theme: "light",
      type: "error"
    })
  }, [isError])

  const submit = () => {
    mutate({
      email
    })
  }

  return (
    <main className={styles.main}>
      <Image 
        height={150}
        width={150}
        src='/logo.png'
        alt='foto do perfil'
      />
      <h1 className={styles.heading}>Sobretudo Português</h1>
      <p className={styles.paragraph}>Fique por dentro das dicas e curiosidades sobre a Língua Portuguesa!</p>
      <div className={styles.inputWrapper}>
        <input 
          className={styles.input}
          onChange={e => setEmail(e.target.value)}
          placeholder='digite seu e-mail aqui'
          >
        </input>
        <button onClick={submit} className={styles.btn}>
          <ArrowIcon/>
        </button>
      </div>
    </main>
  )
}
