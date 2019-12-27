import { expect } from 'chai';
import * as Api from './api';

describe('campaing testing', () => {

    it('unit testing test', async () => {
      expect(1).to.eql(1);
    });

});


describe('campaing endpoint testing', () => {

    it('return campaing list', async () => {
        const expectedResult = {
            data:{
                campaign:{
                    Id: "2",
                    Name: "updated_name1",
                    Discription: "discription1"
                }
            }
        };
        const result = await Api.getCampaignById({ id: '2' });
        expect(result.data).to.eql(expectedResult);
    });

    it('update campaing by id', async () => {
        const expectedResult = {
            data:{
                "campaignUpdate": {
                    "Id": "2"
                }
            }
        };

        const params = {
            Id: 2,
            Name:"updated_name1",
        }
        const result = await Api.campaignUpdate(params);
        expect(result.data).to.eql(expectedResult);
    });


    it('create new campaing', async () => {
        const currentId = new Date().valueOf()
        const expectedResult = {
            data:{
                campaignCreated: {
                    Id: currentId
                }
            }
        };

        const params = {
            Id: currentId,
            Name:"name1",
            Discription:"discription1",
            CompanyId:"com1",
            GroupId:"group1",
            OfficeId:"off1",
            CreatedBy:"isuru1",
            Layers:[{Id:currentId, Name:"layer1"}]
        }
        const result = await Api.getCampaignById(params);
        expect(result.data).to.eql(expectedResult);
    });

});