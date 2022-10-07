import MxTable from './MxTable.vue';

// import { action } from '@storybook/addon-actions';

export default {
  component: MxTable,
	// excludeStories: /.*Data$/,
  title: 'MxTable',
}

const Template = args => ({
  components: { MxTable },
  setup() {
    return {
			list: [
				{
					productName: "Earphone",
					quantity: 3,
					amount: 120.50
				},
				{
					productName: "Logitech Keyboard",
					quantity: 1,
					amount: 110.50
				},
				{
					productName: "Samsung Galaxy Note 4",
					quantity: 2,
					amount: 1120.50
				},
			]
		};
  },
  template: `<MxTable :itemsList="list" />`,
});

export const MxTableComponent = Template.bind({});