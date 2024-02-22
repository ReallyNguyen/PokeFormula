import { useState } from 'react';
import Image from 'next/image';
import styles from './Panel.module.css';
import Label from '../label';

interface IPokeinput {
    [key: string]: any;
}


function Panel() {

  const [title, setTitle] = useState('Sign In');
  const [button, setButton] = useState('Sign In')
  const [json, setJson] = useState<string>();

  const onSubmit = (data: IPokeinput) => {
    setJson(JSON.stringify(data));
  };

  return (
    <div className={styles.container}>
      <div className={styles.L}>
        <Label title={title}/>
      </div>
      <form className={styles.form}>
        <p className={styles.p}>Username</p>
        <input placeholder="type here"className={styles.input}/>
        <p className={styles.p}>Password</p>
        <input placeholder="Set password here"className={styles.input}/>
        <button className={styles.button} onClick={onSubmit}>{button}</button>
      </form>
    </div>
  );
}

export default Panel;
