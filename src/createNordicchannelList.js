const buildHelper = require('./buildHelper');
const builder = require('./createGroup');

getSweIptv = async (iptvListArr) => {
    var sweIptvArr = ['#EXTM3U'];

    iptvListArr.forEach((iptvChannel, iptvIndex) => {
        if(iptvChannel.includes('group-title="Sweden"')) {
            sweIptvArr.push(iptvChannel)
            sweIptvArr.push(iptvListArr[iptvIndex+1])
        }
    })

    return sweIptvArr
}

(init = async () => {
    var iptvList = await buildHelper.getList('path/to/file');
    var iptvListArr = await iptvList.split('\n');
    var sweIptvArr = await getSweIptv(iptvListArr);

    builder.createGroupFromFavoriteList(sweIptvArr, 'favoriteChannels', 'Favorit');
})();
