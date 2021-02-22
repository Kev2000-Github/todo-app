export type taskType = {
    task: string;
    date: number;
    id: string;
}[];

export interface multipleTasksType { tasks: taskType }

const initialState: multipleTasksType = {
    tasks:
        [
            { task: "Play games", date: new Date(1612791753288).getTime(), id: "1" },
            { task: "Review apps", date: new Date(999998999999).getTime(), id: "2" },
            { task: "Clean the house", date: new Date(1610828471820).getTime(), id: "3" }
        ]
}

export const taskReducer = (state: multipleTasksType = initialState, action: any) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { tasks: [...state.tasks, action.payload] };
        case 'DELETE_TASK':
            const payload = state.tasks.filter(task => task['id'] != action.payload['id']);
            return { tasks: payload }
        case 'EDIT_TASK':
            const data = state.tasks.map(task => {
                if (task.id == action.payload['id']) return action.payload;
                else return task;
            });
            return { tasks: data }
        default:
            return state;
    }
}