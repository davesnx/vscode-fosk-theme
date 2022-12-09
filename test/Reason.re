/* Big comment */

module Feature = {
  type t =
    | Firebase
    | FirebaseAuth
    | CustomCode
    | ScreenComponent
    | UnknownFeature;

  let fromRaw = (raw: string) => {
    switch (raw) {
    | "custom-code-components" => CustomCode
    | "firebase" => Firebase
    | "firebase-auth" => FirebaseAuth
    | "screen-component-type" => ScreenComponent
    | _ => UnknownFeature
    };
  };
};

let initialState: array(Feature.t) = [||];
let featuresContext = React.createContext(initialState);

module InternalProvider = {
  let makeProps = (~value, ~children, ()) => {
    "value": value,
    "children": children,
  };
  let make = React.Context.provider(featuresContext);
};

module Provider = {
  [@react.component]
  let make = (~children, ~dataCy="DarkCheckbox") => {
    let (value, setValue) = React.useState(_ => initialState);

    let (permissionsQuery, _) = ApolloHooks.useQuery(GQL.List.definition);
    React.useEffect1(
      () => {
        switch (permissionsQuery) {
        | Data(data) =>
          let featureList =
            data##enabledFeatures
            ->Js.Array2.map(f => Feature.fromRaw(f.name));
          setValue(_ => featureList);
        | _ => ()
        };

        None;
      },
      [|permissionsQuery|],
    );

    // Because this is all just react state now, everything that should update
    // will update, if/when we get permissions from the server.
    // In the meantime, no reason to prevent the rest of the application from
    // starting to render.
    <div className="flex">
    <DataCyWrapper name=dataCy>
      <div
        className={Cn.make([
          "w-4 h-4 rounded text-mono-200 bg-mono-700 flex justify-center items-center shadow cursor-pointer",
          "opacity-60"->Cn.ifTrue(disabled === Some(true)),
        ])}
        role="checkbox"
        onClick>
        <input
          ?id
          readOnly=true
          className="hidden"
          type_="checkbox"
          checked
          ?defaultChecked
          ?disabled
        />
        {checked ? <Icon icon=Icon.Check size=Icon.Small /> : React.null}
      </div>
    </DataCyWrapper>
    {switch (label) {
     | Some(label) =>
       <label className="ml-2 text-sm text-mono-100" htmlFor=?id>
         label->ReasonReact.string
       </label>
     | None => React.null
     }}
  </div>;
  };
};
