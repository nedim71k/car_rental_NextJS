import request, {gql, GraphQLClient} from "graphql-request"

const MASTER_URL = "https://eu-west-2.cdn.hygraph.com/content/cm5gqd5wr00az07ulkw3nnswb/master"

export const getCarsList=async()=>{
  const query=gql`
  query CarLists {
    carLists{
      carAvg
      carBrand
      carType
      createdAt
      id
      name
      price
      publishedAt
      updatedAt
      image {
      url
    }
      seat
    }
  }

  `

  const result=await request(MASTER_URL, query);
  return result;
}

export const getStoreLocations=async()=>{
  const query=gql`
  query storeLocation {
    storesLocations {
    address
    }
  }
  `

  const result = await request(MASTER_URL, query)
  return result;
}


export const createBooking = async(formValue:any)=>{
  const mutationQuery=gql`
  mutation MyMutation {
  createBooking(
    data: 
    {carId: 
      {connect: {id: "`+formValue.carId+`"}}, 
      contactNumber: "`+formValue.contactNumber+`", 
      dropOffDate: "`+formValue.dropOffDate+`", 
      dropOffTime: "`+formValue.pickUpTime+`", 
      userName: "`+formValue.userName+`",
      pickUpDate: "`+formValue.pickUpDate+`", 
      pickUpTime: "`+formValue.pickUpTime+`"
      }
  ) {
    id
  }
}
  `

const result = await request(MASTER_URL, mutationQuery);
return result;

}

