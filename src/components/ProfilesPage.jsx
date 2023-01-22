import ProfileCard from './ProfileCard';
import styles from './ProfilesPage.module.css'

const ProfilesPage = () => {
    return (
        <>
            <div>
                <h1>
                    Manage Profiles:
                </h1>
                <div>
                    <ProfileCard 
                    img={'http://occ-0-300-1168.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbV2URr-qEYOrESG0qnP2787XsIxWTMBh7QfJwyqYxMAVFNyiXAqFeu16gI8yTxg3kLwF2mUDKmZGfwBEDd7722xskhYwAMwsBBe.png?r=bd7'}
                    profileName = 'Yinka'
                    />
                </div>
                <button>
                    Done
                </button>
            </div>
        </>
    )
}

export default ProfilesPage;
