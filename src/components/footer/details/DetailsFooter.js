import React from 'react'
import styles from '../footer.module.css'
const DetailsFooter = ({name ,address , call ,mobile}) => {
    return (
        <div  className={styles.lis}>
            <li>نام شرکت: {name}</li>
            <li> آدرس شرکت: {address}</li>
            <li>شماره تماس شرکت : {call}</li>
            <li>شماره موبایل :  {mobile}</li>
        </div>
    )
}

export default DetailsFooter
