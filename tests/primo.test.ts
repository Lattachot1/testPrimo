import {merge} from '../src/testPrimo';

describe('Merge Function Tests', () => {
    
    test('Case 1: ', () => {
        const c1 = [1, 3, 5];
        const c2 = [2, 4, 6];
        const c3 = [9, 8, 7];
        expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    test('Case 2: ', () => {
        expect(merge([], [], [])).toEqual([]);
    });

    test('Case 3: ', () => {
        const c1 = [-5, 0];
        const c2 = [-5, 1];
        const c3 = [10, 0];
        expect(merge(c1, c2, c3)).toEqual([-5, -5, 0, 0, 1, 10]);
    });
});