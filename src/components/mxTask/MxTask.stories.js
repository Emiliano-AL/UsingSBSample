import MxTask from './MxTask.vue';

import { action } from '@storybook/addon-actions';

export default {
  component: MxTask,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'MxTask',
  //👇 Our events will be mapped in Storybook UI
  argTypes: {
    onPinTask: {},
    onArchiveTask: {},
  },
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
};

const Template = args => ({
  components: { MxTask },
  setup() {
    return { args, ...actionsData };
  },
  template: '<MxTask v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test MxTask',
    state: 'TASK_INBOX',
  },
};