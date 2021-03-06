import PureTaskList from './PureTaskList.vue';

import * as TaskStories from './Task.stories';

// 默认导出，
export default {
    component: PureTaskList,
    title: 'TaskList',
    // 展示模板，类似slot
    decorators: [() => ({template: '<div style="margin: 3em;"><story/></div>'})],
    // emit
    argTypes: {
        onPinTask: {},
        onArchiveTask: {},
    },
};
// 测试模板，下面只要配置不同的参数就可以使用同一份测试模板
const Template = args => ({
    components: {PureTaskList},
    setup() {
        return {args, ...TaskStories.actionsData};
    },
    template: '<PureTaskList v-bind="args" />',
});

// 测试的组件,会自动根据命名去展示
export const Default = Template.bind({});
// 传入参数
Default.args = {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.
    tasks: [
        {...TaskStories.Default.args.task, id: '1', title: 'Task 1'},
        {...TaskStories.Default.args.task, id: '2', title: 'Task 2'},
        {...TaskStories.Default.args.task, id: '3', title: 'Task 3'},
        {...TaskStories.Default.args.task, id: '4', title: 'Task 4'},
        {...TaskStories.Default.args.task, id: '5', title: 'Task 5'},
        {...TaskStories.Default.args.task, id: '6', title: 'Task 6'},
    ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [
        ...Default.args.tasks.slice(0, 5),
        {id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'},
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
};
