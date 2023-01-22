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


// background-image:url(http://occ-0-300-1168.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdi6oYb6DJb1LndQWckgaXvrqqP3QURNa8Xngiq7wwFwDtWIg1otEuYKVxbYwS9c5clAI1_Bn7DuljwcvhfUzQu2_Y2v9y5P6t_n.png?r=e6e"
