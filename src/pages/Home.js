import styles from './css/Home.module.css'

import AddButton from '../components/home/AddButton'
import Item from '../components/home/Item'

function Home(){
    return (
        <div className={styles.Home}>
            <main>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </main>

            <AddButton/>
        </div>
    )
}

export default Home