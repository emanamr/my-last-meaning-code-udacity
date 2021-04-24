const jest = require('jest');
import "regenerator-runtime/runtime";
import { analysis } from '../src/client/js/analysisText'

describe('Test: "analysis" should exist' , () => {
    test('It should be present!', async () => {
        expect(analysis).toBeDefined();
    });
});


describe("Testing the submit functionality", () => {    
    test("analysis() to be defined", () => {
        expect(analysis).toBeDefined();
    })
})

  
