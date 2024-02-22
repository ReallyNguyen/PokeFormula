import Label from "@/components/label"
import CardShowcase from "@/components/cardShowcase"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProfileCard from "@/components/profileCard"
import styles from '../styles/Profile.module.css'

export default function Profile(){
    return(
        <>
            <Header />
                <div className={styles.container}>
                    <Label title='Profile' />
                    <ProfileCard />
                    <CardShowcase />   
                </div>
            <Footer />

        </>
    )
}