import styles from './ProfileCard.module.css'

const ProfileCard = (props) => {
    return (
        <div className={styles['single-profile']}>
            <img src={props.img} alt={props.profileName + "'s profile"} />
            <p>{props.profileName}</p>
        </div>
    )
}

export default ProfileCard

// background-image:url(http://occ-0-300-1168.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbV2URr-qEYOrESG0qnP2787XsIxWTMBh7QfJwyqYxMAVFNyiXAqFeu16gI8yTxg3kLwF2mUDKmZGfwBEDd7722xskhYwAMwsBBe.png?r=bd7)


