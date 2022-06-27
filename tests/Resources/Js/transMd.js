Translator.transMd('arg-key');
Translator.transMd('arg-key-params', {});
Translator.transMd('arg-key-params-domain', {}, 'domain_name');
Translator.transMd('arg-key-params-filled', { foo: "bar", "foo-bar": "fill me" });
Translator.transMd('multiline-arg-key-params-filled-domain', {
    foo: "bar",
    "foo-bar": "fill me"
}, 'crazy-domain');

Translator.transMd(
    'multiline-tab-arg-key-params-filled-domain', {
        foo: "bar",
        "foo-bar": "fill me"
    },
    'real-crazy-domain'
);
