import React from 'react'
import InfoContainer from '../UI/UserInfo'

const UserList = (props) => {
    const styles = {
        listStyleType: 'none', 
        paddingLeft: 0, 
        marginLeft: 0,
    }
    return (
        <div>
            {
                props.users.map(user => <ul style={styles}>
                    <li>
                        <InfoContainer>
                            {user.name} - {user.age} ({user.gender})
                        </InfoContainer>
                    </li>
                </ul>)
            }

        </div>
    )
}

export default UserList
