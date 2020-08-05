import React from 'react'
import styled from 'styled-components';

export default function UserCard({userData}) {

    return (
        <Card>
        <img width={'200px'} height={'200px'} src={userData.avatar_url} />
        <Content>
       <p>login: {userData.login}</p>
       <p>Location: {userData.locaiton}</p>
       <p>{userData.followers}</p>
       <p>{userData.following}</p>
       <p>{userData.bio}</p>
       </Content>
        </Card>
    )
}
const Content = styled.div`
display: flex;
flex-direction: column;
`
const Card = styled.div`
display: flex;
`