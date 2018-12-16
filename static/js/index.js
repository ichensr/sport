(function(){

    var serviceNamespace = abp.utils.createNamespace(abp, 'services.userAccounts.account');

    serviceNamespace.login = function(loginModel, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/userAccounts/account/Login',
            type: 'POST',
            data: JSON.stringify(loginModel)
        }, ajaxParams));
    };


})();


(function(){

    var serviceNamespace = abp.utils.createNamespace(abp, 'services.liveSports.liveSportsItem');

    serviceNamespace.create = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSportsItem/Create',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.deleteLiveSportsItem = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSportsItem/DeleteLiveSportsItem',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.deleteLiveSportsItemSource = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSportsItem/DeleteLiveSportsItemSource',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.updateLiveSportsItemSourceOrder = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSportsItem/UpdateLiveSportsItemSourceOrder',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getLiveSportsItemById = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSportsItem/GetLiveSportsItemById',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getLiveSportsItemInFiveDay = function(ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSportsItem/GetLiveSportsItemInFiveDay',
            type: 'POST',
            data: JSON.stringify({})
        }, ajaxParams));
    };


})();


(function(){

    var serviceNamespace = abp.utils.createNamespace(abp, 'services.liveSports.channel');

    serviceNamespace.createChannelCategory = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/channel/CreateChannelCategory',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.deleteChannelCategory = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/channel/DeleteChannelCategory',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.updateChannelCategory = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/channel/UpdateChannelCategory',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getAllChannelCategoies = function(ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/channel/GetAllChannelCategoies',
            type: 'POST',
            data: JSON.stringify({})
        }, ajaxParams));
    };

    serviceNamespace.createChannel = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/channel/CreateChannel',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.deleteChannel = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/channel/DeleteChannel',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getAllChannels = function(ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/channel/GetAllChannels',
            type: 'POST',
            data: JSON.stringify({})
        }, ajaxParams));
    };

    serviceNamespace.getChannelCategories = function(ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/channel/GetChannelCategories',
            type: 'POST',
            data: JSON.stringify({})
        }, ajaxParams));
    };

    serviceNamespace.getChannelByCategory = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/channel/GetChannelByCategory',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };


})();


(function(){

    var serviceNamespace = abp.utils.createNamespace(abp, 'services.liveSports.fanCommunity');

    serviceNamespace.createOrUpdateFanCommunityCategory = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/fanCommunity/CreateOrUpdateFanCommunityCategory',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.updateFanCommunityCategoryOrder = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/fanCommunity/UpdateFanCommunityCategoryOrder',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.deleteFanCommunityCategory = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/fanCommunity/DeleteFanCommunityCategory',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getAllFanCommunityCategories = function(ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/fanCommunity/GetAllFanCommunityCategories',
            type: 'POST',
            data: JSON.stringify({})
        }, ajaxParams));
    };

    serviceNamespace.createOrUpdateFanCommunityAd = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/fanCommunity/CreateOrUpdateFanCommunityAd',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.updateFanCommunityAdOrder = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/fanCommunity/UpdateFanCommunityAdOrder',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.deleteFanCommunityAd = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/fanCommunity/DeleteFanCommunityAd',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getAllFanCommunityAds = function(ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/fanCommunity/GetAllFanCommunityAds',
            type: 'POST',
            data: JSON.stringify({})
        }, ajaxParams));
    };

    serviceNamespace.getFanCommunityCategories = function(ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/fanCommunity/GetFanCommunityCategories',
            type: 'POST',
            data: JSON.stringify({})
        }, ajaxParams));
    };

    serviceNamespace.getFanCommunityAdByCategory = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/fanCommunity/GetFanCommunityAdByCategory',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };


})();


(function(){

    var serviceNamespace = abp.utils.createNamespace(abp, 'services.liveSports.liveSports');

    serviceNamespace.getPopularLiveSportsItems = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSports/GetPopularLiveSportsItems',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getPopularVideoCategories = function(ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSports/GetPopularVideoCategories',
            type: 'POST',
            data: JSON.stringify({})
        }, ajaxParams));
    };

    serviceNamespace.getPopularVideos = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSports/GetPopularVideos',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getLiveSportsCategories = function(ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSports/GetLiveSportsCategories',
            type: 'POST',
            data: JSON.stringify({})
        }, ajaxParams));
    };

    serviceNamespace.getLiveSportsItemsByCategory = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSports/GetLiveSportsItemsByCategory',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getLiveSportsItemSources = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSports/GetLiveSportsItemSources',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };


})();


(function(){

    var serviceNamespace = abp.utils.createNamespace(abp, 'services.liveSports.liveSportsSiteSource');

    serviceNamespace.createOrUpdate = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSportsSiteSource/CreateOrUpdate',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace['delete'] = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSportsSiteSource/Delete',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.updateOrder = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSportsSiteSource/UpdateOrder',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.updateLastExecuteTime = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSportsSiteSource/UpdateLastExecuteTime',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getAllByLanguageCategory = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/liveSportsSiteSource/GetAllByLanguageCategory',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };


})();


(function(){

    var serviceNamespace = abp.utils.createNamespace(abp, 'services.liveSports.sportsCategory');

    serviceNamespace.createOrUpdate = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/sportsCategory/CreateOrUpdate',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.updateOrder = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/sportsCategory/UpdateOrder',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace['delete'] = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/sportsCategory/Delete',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getAll = function(ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/sportsCategory/GetAll',
            type: 'POST',
            data: JSON.stringify({})
        }, ajaxParams));
    };


})();


(function(){

    var serviceNamespace = abp.utils.createNamespace(abp, 'services.liveSports.sportsNews');

    serviceNamespace.create = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/sportsNews/Create',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getSportsNewsBySiteSource = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/sportsNews/GetSportsNewsBySiteSource',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace['delete'] = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/sportsNews/Delete',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getSportsNewsCategories = function(ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/sportsNews/GetSportsNewsCategories',
            type: 'POST',
            data: JSON.stringify({})
        }, ajaxParams));
    };

    serviceNamespace.getSportsNewsByCategory = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/sportsNews/GetSportsNewsByCategory',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getSportsNewsContentById = function(input, ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/sportsNews/GetSportsNewsContentById',
            type: 'POST',
            data: JSON.stringify(input)
        }, ajaxParams));
    };

    serviceNamespace.getHeadlines = function(ajaxParams) {
        return abp.ajax($.extend({
            url: abp.appPath + 'api/services/liveSports/sportsNews/GetHeadlines',
            type: 'POST',
            data: JSON.stringify({})
        }, ajaxParams));
    };


})();