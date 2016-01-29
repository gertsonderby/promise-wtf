/*global unexpected, describe, it*/
(function () {
'use strict';

var expect = unexpected.clone()
    // Test case, assertion fubar
    .addAssertion('<string> to temporally equal <string>', function (expect, one, two) {
        return expect.promise(function (run) {
            var resolve = run(function () {
                return expect(one, 'to equal', two);
            });
            setTimeout(resolve, 2);
            // resolve();
        });
    });

describe('promise WTF', function () {
    it('tests things', function () {
        return expect('foo', 'to temporally equal', 'bar');
    });
});

})();
