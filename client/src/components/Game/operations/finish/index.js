import generateTask from "../generateTask";

export default (result = Boolean) => {
    return (dispatch, getState)=>{
        const state = getState();
        const game = state.game.gValue;

        const storage = localStorage;

        const level = result ? game.level + 1 : 1;

        const log = {
            timestamp: Date.now(),
            level,
            result
        };

        if(localStorage.getItem("trainStat")){
            localStorage.setItem(
                "trainStat",
                JSON.stringify(
                    [
                        ...JSON.parse(localStorage.getItem("trainStat")),
                        log
                    ]
                )
            );

        }else{
            localStorage.setItem(
                "trainStat",
                JSON.stringify(
                    [log]
                )
            )
        }

        dispatch(
            state.game.level.gUpdate(
                level
            )
        );

        dispatch(
            state.game.task.gUpdate([])
        );
        
        dispatch(
            state.game.result.gUpdate([])
        );

        dispatch(
            generateTask()
        );
    }
};