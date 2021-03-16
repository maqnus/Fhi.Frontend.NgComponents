import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { FhiDatepickerComponent } from './fhi-datepicker.component';
import { FhiDatepickerModule } from './fhi-datepicker.module';


export default {
  title: 'Fhi/fhi-datepicker',
  component: FhiDatepickerComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [FhiDatepickerModule],
    }),
  ],
} as Meta;

const Template: Story<FhiDatepickerComponent> = (args: FhiDatepickerComponent) => ({
  component: FhiDatepickerComponent,
  props: args,
});

export const normal = Template.bind({});
normal.args = {
  id: 'normal-date',
  icon: faCalendarAlt,
};

export const arrow = Template.bind({});
arrow.args = {
  id: 'arrow-date',
  icon: faCalendarAlt,
  navigation: 'arrow'
};

export const select = Template.bind({});
select.args = {
  id: 'select-date',
  icon: faCalendarAlt,
  navigation: 'select'
};
