import {mount} from '@vue/test-utils';
import PureTaskList from '../../src/components/PureTaskList.vue';

import {WithPinnedTasks} from '../../src/components/PureTaskList.stories';

it('renders pinned tasks at the start of the list', () => {
// render PureTaskList
    const wrapper = mount(PureTaskList, {
        propsData: WithPinnedTasks.args,
    });

    const firstPinnedTask = wrapper.find('.list-item:nth-child(1).TASK_PINNED');
    expect(firstPinnedTask).not.toBe(null);
});
