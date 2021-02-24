import GlobalModel from "global-model";
import items from "./items";

export default (parrentPath = "", name = "game") => {
    return new GlobalModel(
        parrentPath,
        name,
        {
            items: items(`${parrentPath}/${name}`).gInitialValue,
        },
        {
            status: "generate",
            level: 1,
            task: [],
            result: [],
            items: items(`${parrentPath}/${name}`).gStructure,
        }
    );
};