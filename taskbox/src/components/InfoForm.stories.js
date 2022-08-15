import React from 'react';

import InfoForm from './InfoForm';

export default {
  component: InfoForm,
  title: 'InfoForm',
};

const Template = (args) => <InfoForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  InfoFormModel: {
    id: '1',
    title: 'vote',
    desc: 'voteDesc',
    startDateTime: new Date(),
    endDateTime: new Date(),
  },
};
