import React, { Fragment } from "react";

import PokemonDetailContent from "./index.content";
import PokemonDetailLoading from "./index.loading";
import service from "./index.service";

//begin global import
import CommonFetchData from "../../common/fetch-data";
//end global import

const PokemonDetail = ({
    match: {
        params: { slug },
    },
}) => {
    return (
        <div>
            <CommonFetchData
                service={{
                    serviceFunction: service.pokemonDetail,
                    slug: slug,
                    isReady: true,
                    reducer: "service",
                    key: "pokemonDetail",
                    group: "pokemon",
                }}
                renderLoading={() => (
                    <PokemonDetailLoading></PokemonDetailLoading>
                )}
                renderSuccess={response => {
                    return (
                        <PokemonDetailContent
                            resultData={response}
                        ></PokemonDetailContent>
                    );
                }}
                renderFailed={() => <div>something wrong</div>}
            ></CommonFetchData>
        </div>
    );
};

export default PokemonDetail;
