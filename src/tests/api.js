import axios from 'axios';

const API_URL = 'http://localhost:8000/graphql';

export const getCampaignById = async (variables) =>
  axios.post(API_URL, {
    query: `
      query($id: ID!) {
        campaign(id: $id){
            Id
            Name
            Discription
        }
      }
    `,
    variables,
    // should be id there
});

export const createCampaigns = async (variables) =>
  axios.post(API_URL, {
    query: `
      mutation(
        $Id: ID!
        $Name: String!
        $Discription: String!
        $CompanyId: String!
        $GroupId: String!
        $OfficeId: String!
        $CreatedBy: String!
        $Layers: JSON!
      ) {
        campaignCreated(
          Id:$Id
          Name:$Name
          Discription:$Discription
          CompanyId:$CompanyId
          GroupId:$GroupId
          OfficeId:$OfficeId
          CreatedBy:$CreatedBy
          Layers:$Layers
        ) {
          Id
        }
      }
    `,
    variables,
});

export const campaignUpdate = async (variables) =>
  axios.post(API_URL, {
    query: `
      mutation(
        $Id: ID!
        $Name: String
      ) {
        campaignUpdate(
          Id:$Id
          Name:$Name
        ) {
          Id
        }
      }
    `,
    variables,
});