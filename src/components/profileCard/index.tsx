import { useState } from 'react';
import Image from 'next/image';
import styles from './ProfileCard.module.css';

export default function ProfileCard() {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [avatar, setAvatar] = useState(null);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    const handleAvatarChange = (e: any) => {
        const file = e.target.files[0];
        setAvatar(file);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.personalProfile}>
                    <h1>Personal Profile</h1>
                    {!isEditing && <button className={styles.edit} onClick={handleEdit}>Edit</button>}
                    {isEditing && <button className={styles.save} onClick={handleSave}>Save</button>}
                </div>
                <div className={styles.middleContainer}>
                    <form className={styles.infoContainer}>
                        <div className={styles.nameContainer}>
                            <div className={styles.name}>
                                <label className={styles.label}>Name:</label>
                                {isEditing ? (
                                    <input 
                                        type='text' 
                                        name='name' 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                    />
                                ) : (
                                    <span>{name}</span>
                                )}
                            </div>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.emailContainer}>
                            <div className={styles.email}>
                                <label className={styles.label}>Email:</label>
                                {isEditing ? (
                                    <input 
                                        type='text' 
                                        name='email' 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                ) : (
                                    <span>{email}</span>
                                )}
                            </div>
                            <div className={styles.line}></div>
                        </div>
                        {isEditing && (
                            <div className={styles.avatarUpload}>
                                <label className={styles.label}>Avatar:</label>
                                <input 
                                    type="file" 
                                    accept="image/*" 
                                    onChange={handleAvatarChange} 
                                />
                            </div>
                        )}
                    </form> 
                    {avatar ? (
                        <div
                            className={styles.avatar}
                            style={{ backgroundImage: `url(${URL.createObjectURL(avatar)})` }}
                        ></div>
                        ) : (
                        <div className={styles.avatarPlaceholder}><h1>Avatar</h1></div>
                    )}
                </div>
                <div className={styles.tcg}>
                    <h1>TCG earning:</h1>
                </div>
            </div>
        </>
    );
}
