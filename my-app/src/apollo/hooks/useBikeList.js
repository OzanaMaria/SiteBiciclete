import { useQuery, gql } from "@apollo/client";

const GET_BIKES = gql`
query {
    characters{
      results{
        id
        name
        image
        type
      }
    }
  }
`
export const useBikes = () => {
  const { error, data, loading } = useQuery(GET_BIKES)
  console.log(error, loading, data);

  return {
    error,
    data,
    loading
  }
}