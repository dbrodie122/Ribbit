const dummyPartnerLogsData = { code: 'const areWeGreen = () => "super green"', messages: [{ userName: 'Father Vito Cornelius', text: 'hello there!', timestamp: '8:00' }, { userName: 'Father Vito Cornelius', text: 'oh hai!', timestamp: '8:00' }, { userName: 'Father Vito Cornelius', text: 'so nervous!', timestamp: '8:00' }] };
const partnerLogsReducer = (state = dummyPartnerLogsData, action) => {
  switch (action.type) {
    case 'GET_PARTNER_LOGS':
      return action.partnerLogs;
    default:
      return state;
  }
};

export default partnerLogsReducer;
