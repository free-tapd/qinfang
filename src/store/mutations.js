// 配置页面信息
export const SET_PAGE_INFO = (state, data) => {
  console.log(data);
};
export const saveHospitalCode=(state,change)=>{
  console.log(change)
  state.hospitalCode=change.hospitalCode;
  state.hospitalMessage={...state.hospitalMessage,...change};

}
export const saveCity=(state,change)=>{
  state.hospitalMessage={...state.hospitalMessage,...change};
}
export const saveHospitalLimit=(state,change)=>{
  state.hospitalLimitList=change
}

