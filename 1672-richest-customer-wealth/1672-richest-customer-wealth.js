/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = accounts => {
    let maxAccount = 0;
    accounts.forEach(account => {
        const accountTotal = account.reduce((acc, num) => acc + num);
        if(accountTotal > maxAccount) maxAccount = accountTotal;
    });
    return maxAccount;
};