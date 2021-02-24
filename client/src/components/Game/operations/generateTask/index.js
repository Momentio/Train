
export default () => {
    return (dispatch, getState)=>{
        const state = getState();
        const game = state.game.gValue;
        
        const all = game.items;
        const level = game.level;
        const task = [];

        dispatch(
            state.game.status.gUpdate("generate")
        );

        for(let i = 0; i < level; i ++){
            let newValue;

            while(!newValue){
                let randomValue = all[
                    Math.floor(Math.random() * all.length)
                ].id;

                let isUnique = !task.includes(randomValue);

                if(isUnique) newValue = randomValue;
            }

            task.push(newValue);
        }

        dispatch(
            state.game.task.gUpdate(task)
        );

        dispatch(
            state.game.status.gUpdate("task")
        );
    }
};