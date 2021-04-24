const jest = require('jest');
import "regenerator-runtime/runtime";
import { checkUrl, viewData } from '../src/client/js/viewData'

describe('Test: "viewData" should exist' , () => {
    test('It should be present!', async () => {
        expect(viewData).toBeDefined();
    });

    test("analysis() to be defined", () => {
        expect(viewData).toBeDefined();
    });
});


describe('Test: "checkUrl" should exist' , () => {
    test('It should be present!', async () => {
        expect(checkUrl).toBeDefined();
    });
});
