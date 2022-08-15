import React from 'react';

const InfoForm = ({ InfoFormModel }) => {
  return (
    <div>
      <span>Inform ID </span>
      <div>{InfoFormModel.id}</div>
      <span>Inform Title </span>
      <div>Title을 입력해 주세요</div>
      <input type="text" defaultValue={InfoFormModel.title} />
      <div>Inform StartDateTime 을 선택하세요</div>
      <span>{InfoFormModel.startDateTime.getFullYear()}</span>
      <div>Inform EndDateTime 을 선택하세요</div>
      <span>{InfoFormModel.endDateTime.getFullYear()}</span>
    </div>
  );
};
export default InfoForm;
