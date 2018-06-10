const expect = require('chai').expect;
const indicesOf = require('../index');

describe('indicesOf()', () => {

    describe('with strings', () => {

        it('should find all occurances of a substring in a string', () => {
            expect(indicesOf('n', "If I Can't Dance It's Not My Revolution")).to.deep.equal([ 7, 13, 38 ]);
            expect(indicesOf('an', "If I Can't Dance It's Not My Revolution")).to.deep.equal([ 6, 12 ]);
            expect(indicesOf('Dan', "If I Can't Dance It's Not My Revolution")).to.deep.equal([ 11 ]);
            expect(indicesOf('Porsche', "If I Can't Dance It's Not My Revolution")).to.deep.equal([ ]);
        });
    
        it('should find overlapping substrings', () => {
            expect(indicesOf('ana', 'Bananas')).to.deep.equal([1, 3]);
        });
    
        it('should respect the startOffset', () => {
            const cantona = "When the seagulls follow the trawler, it's because they think sardines will be thrown into the sea.";
            expect(indicesOf('the', cantona)).to.deep.equal([ 5, 25, 51, 91 ]);
            expect(indicesOf('the', cantona, 5)).to.deep.equal([ 5, 25, 51, 91 ]);
            expect(indicesOf('the', cantona, 6)).to.deep.equal([ 25, 51, 91 ]);
            expect(indicesOf('the', cantona, 25)).to.deep.equal([ 25, 51, 91 ]);
            expect(indicesOf('the', cantona, 26)).to.deep.equal([ 51, 91 ]);
            expect(indicesOf('the', cantona, 51)).to.deep.equal([ 51, 91 ]);
            expect(indicesOf('the', cantona, 52)).to.deep.equal([ 91 ]);
            expect(indicesOf('the', cantona, 91)).to.deep.equal([ 91 ]);
            expect(indicesOf('the', cantona, 92)).to.deep.equal([ ]);
        });
    
        it('should respect the endOffset', () => {
            const cantona = "When the seagulls follow the trawler, it's because they think sardines will be thrown into the sea.";
            expect(indicesOf('the', cantona, 0, 90)).to.deep.equal([ 5, 25, 51 ]);
            expect(indicesOf('the', cantona, 0, 91)).to.deep.equal([ 5, 25, 51 ]);
            expect(indicesOf('the', cantona, 0, 92)).to.deep.equal([ 5, 25, 51 ]);
            expect(indicesOf('the', cantona, 0, 93)).to.deep.equal([ 5, 25, 51 ]);
            expect(indicesOf('the', cantona, 0, 94)).to.deep.equal([ 5, 25, 51, 91 ]);
        });
    
    });

    describe('with buffers', () => {

        it('should find all occurances of a substring in a string', () => {
            const haystack = Buffer.from("If I Can't Dance It's Not My Revolution");
            expect(indicesOf('n', haystack)).to.deep.equal([ 7, 13, 38 ]);
            expect(indicesOf('an', haystack)).to.deep.equal([ 6, 12 ]);
            expect(indicesOf('Dan', haystack)).to.deep.equal([ 11 ]);
            expect(indicesOf('Porsche', haystack)).to.deep.equal([ ]);
        });

        it('should return byte positions, not char positions', () => {
            expect(indicesOf('l', Buffer.from('Alg', 'utf8'))).to.deep.equal([ 1 ]);
            expect(indicesOf('l', Buffer.from('Älg', 'utf8'))).to.deep.equal([ 2 ]);
            expect(indicesOf('l', Buffer.from('𠜎lg', 'utf8'))).to.deep.equal([ 4 ]);
        });

        it('should respect the startOffset', () => {
            const cantona = Buffer.from("When the seagulls follow the trawler, it's because they think sardines will be thrown into the sea.");
            expect(indicesOf('the', cantona)).to.deep.equal([ 5, 25, 51, 91 ]);
            expect(indicesOf('the', cantona, 5)).to.deep.equal([ 5, 25, 51, 91 ]);
            expect(indicesOf('the', cantona, 6)).to.deep.equal([ 25, 51, 91 ]);
            expect(indicesOf('the', cantona, 25)).to.deep.equal([ 25, 51, 91 ]);
            expect(indicesOf('the', cantona, 26)).to.deep.equal([ 51, 91 ]);
            expect(indicesOf('the', cantona, 51)).to.deep.equal([ 51, 91 ]);
            expect(indicesOf('the', cantona, 52)).to.deep.equal([ 91 ]);
            expect(indicesOf('the', cantona, 91)).to.deep.equal([ 91 ]);
            expect(indicesOf('the', cantona, 92)).to.deep.equal([ ]);
        });
    
        it('should respect the endOffset', () => {
            const cantona = Buffer.from("When the seagulls follow the trawler, it's because they think sardines will be thrown into the sea.");
            expect(indicesOf('the', cantona, 0, 90)).to.deep.equal([ 5, 25, 51 ]);
            expect(indicesOf('the', cantona, 0, 91)).to.deep.equal([ 5, 25, 51 ]);
            expect(indicesOf('the', cantona, 0, 92)).to.deep.equal([ 5, 25, 51 ]);
            expect(indicesOf('the', cantona, 0, 93)).to.deep.equal([ 5, 25, 51 ]);
            expect(indicesOf('the', cantona, 0, 94)).to.deep.equal([ 5, 25, 51, 91 ]);
        });
    
   });

});