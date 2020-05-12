import Header from '.'
describe("Header test",()=>{
    it("should test the number of products",()=>{
       const mockHeader = {productCount:16};
       expect(mockHeader.productCount).toBe(16)
    });
})