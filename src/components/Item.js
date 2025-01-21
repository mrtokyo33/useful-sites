import styles from './css/Item.module.css'

function Item({title='Unknown', link='https://google.com'}) {
    return (
        <div className={styles.itemContainer}>
                <li>
                    <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
                </li>
        </div>
    )
}

export default Item