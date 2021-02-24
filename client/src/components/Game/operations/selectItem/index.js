import finish from "../finish";

export default (idItem) => {
    return (dispatch, getState)=>{
        const state = getState();
        const game = state.game.gValue;
        const task = game.task;
        const result = game.result;

        const isSelected = result.includes(idItem);

        if(!isSelected){
            const check = task.includes(idItem);

            if(check){
                if(task.length === result.length + 1){
                    dispatch(
                        finish(true)
                    );

                }else{
                    dispatch(
                        state.game.result.gUpdate(
                            [...result, idItem]
                        )
                    );
                }

            }else{
                dispatch(
                    finish(false)
                );
            }

        }else{
            dispatch(
                finish(false)
            );
        }
    }
};