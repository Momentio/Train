import GlobalModel from "global-model";
import items from "./cards";

export default (parrentPath = "", name = "items") => {
    return new GlobalModel(
        parrentPath,
        name,
        items.map((e, i) => ({src: e, id: i})),
    );
};