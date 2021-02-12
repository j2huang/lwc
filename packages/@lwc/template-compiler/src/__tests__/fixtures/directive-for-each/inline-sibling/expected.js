import { registerTemplate } from "lwc";

function tmpl($api, $cmp, $slotset, $ctx) {
  const {
    k: api_key,
    d: api_dynamic,
    h: api_element,
    i: api_iterator,
    t: api_text,
    f: api_flatten
  } = $api;
  return [
    api_element(
      "ul",
      {
        key: 0
      },
      api_flatten([
        api_iterator($cmp.items, function(item) {
          return api_element(
            "li",
            {
              className: item.x,
              key: api_key(1, item.id)
            },
            [api_dynamic(item)]
          );
        }),
        api_element(
          "li",
          {
            key: 2
          },
          [api_text("Last")]
        )
      ])
    )
  ];
}

export default registerTemplate(tmpl);
tmpl.stylesheets = [];
