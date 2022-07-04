import userInfoSlice from "./userInfoSlice";

/**
 * !!! This is a demo version so most of the blockchain-related operations will be commented out
 */

const changeUserAddr = userInfoSlice.actions.changeUserAddr;

export default function connect() {
  return async (dispatch) => {
    // const accounts = await window.ethereum.request({
    //   method: "eth_requestAccounts",
    // });
    // if (accounts.length === 0) {
    //   alert(
    //     "No addresses detected in your wallet. Please try connecting again."
    //   );
    //   console.error(
    //     `connectThunk: "eth_requestAccounts" returns zero-length accounts array`
    //   );
    //   return;
    // }
    // dispatch(changeUserAddr(accounts[0]));
    dispatch(changeUserAddr("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266"));
  };
}
