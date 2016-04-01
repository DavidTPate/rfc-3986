'use strict';
var assert = require('assert');

var rfc3986 = require('../index');

describe('RFC-3986', function () {

    var propertiesToExpose = [
        'cidr',
        'IPv4address',
        'IPv6address',
        'IPvFuture',
        'IPLiteral',
        'scheme',
        'hierPart',
        'query',
        'fragment',
        'uri'
    ];
    propertiesToExpose.forEach(function (prop) {
        it('should expose ' + prop, function () {
            assert.ok(rfc3986[prop]);
        });
    });

    it('should be a valid regex', function () {
        var regex = new RegExp(rfc3986.uri);
        assert.equal(regex.test('http://example.com'), true, 'a URI should be a valid URI');
        assert.equal(regex.test('(╯°□°)╯︵ ┻━┻'), false, 'flipping tables aren\'t valid URIs!');
    });
});