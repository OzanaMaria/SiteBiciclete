import { useQuery, gql } from "@apollo/client";
const GET_BIKE = gql`
query GetBike($id: ID!){
    character(id:$id){
     
        id
        name
        image
        gender
    }
  }
  `

export const useBike = (id) => {
  const { data, error, loading } = useQuery(GET_BIKE, {
    variables: {
      id
    }
  })

  return {
    data,
    error,
    loading
  }
}