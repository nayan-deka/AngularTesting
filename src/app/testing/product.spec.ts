import {Product} from './product'
describe('product model', () =>{

    it('Compoenet should be created', () =>{
        let p = new Product(101,"monitor",5000)
        expect(p).toBeTruthy()
        expect(p.pid).toEqual(101)
    })
})