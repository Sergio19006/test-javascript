import { describe, expect, test } from '@jest/globals';
import { getCategoryPath } from './index';


describe('test breadcrum', () => {

    const categories = [
        {
            name: 'category1',
            subcategories: [
                {
                    name: 'category2',
                    subcategories: []
                },
                {
                    name: 'category3',
                    subcategories: [
                        {
                            name: 'category4',
                            subcategories: []
                        }
                    ]
                }
            ]
        },
        {
            name: 'category5',
            subcategories: []
        }
    ];

    test('Check children 3 in breadcrum', () => {
        expect(getCategoryPath(categories, 'category4')).toBe('/category1/category3/category4');
    });

    test('Check children 2 in breadcrum', () => {
        expect(getCategoryPath(categories, 'category2')).toBe('/category1/category2');
    });

    test('Check children in breadcrum', () => {
        expect(getCategoryPath(categories, 'category5')).toBe('/category5');
    });
});
