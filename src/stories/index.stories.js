import MxButton from '@/components/mxButton/MxButton'
import { render } from 'vue';

export default {
  title: "Button",
  component: MxButton
};

export const withText = () => ({
  render() {
    return <MxButton></MxButton>
  }
})