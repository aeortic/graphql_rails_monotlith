import React from 'react';
import {useQuery} from '@apollo/react-hooks'
import gql from 'graphql-tag';

const LIBRARY_QUERY = gql`
  {
    items {
      id
      title
      user {
        fullName 
      }
    }
  }
`; 

export default function Library() {
  const {loading, data} = useQuery(LIBRARY_QUERY)
  return (
    loading
    ? 'loading...'
    : data.items.map(({title, id, user}) => (
      <div key={id}>
        <b>{title}</b> {user ? `added by ${user.fullName}`: null}
      </div>
    ))
  )
}