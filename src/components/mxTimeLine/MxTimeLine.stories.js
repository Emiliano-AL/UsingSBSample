import MxTimeLine from './MxTimeLine.vue';

export default {
  component: MxTimeLine,
	// excludeStories: /.*Data$/,
  title: 'MxTimeLine',
}

const Template = args => ({
  components: { MxTimeLine },
  setup() {
    return {
			list: [
				{
					title: "Lorem ipsum",
					content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?",
					isRight: true
				},
				{
					title: "Lorem ipsum",
					content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?",
					isRight: false
				},
				{
					title: "Lorem ipsum",
					content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?",
					isRight: true
				},
				{
					title: "Lorem ipsum",
					content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?",
					isRight: false
				},
			]
		};
  },
  template: `<MxTimeLine :itemsList="list" />`,
});

export const MxTimelineComponent = Template.bind({});