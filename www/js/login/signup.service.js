(function () {
    'use strict';
    angular
      .module('app.services')
      .service("SignUpService", SignUpService);

  SignUpService.$inject = ["$http", "$q", "CommonFactory", "AppConfig", "BaseConfig", "CodeConfig"];

  /**
   * 注册用户服务
   * @param $http
   * @param SUMIATE_DATA_MODE
   * @param BaseConfig
   * @returns {{signUp: signUp}}
   * @constructor
   */
  function SignUpService($http, $q, CommonFactory, AppConfig, BaseConfig, CodeConfig){

    return {
      signUp : signUp
    }

    /**
     * 新建用户信息入数据库
     * @param signUpData
     * @returns {*}
     */
    function signUp(signUpData) {

      var createResult;
      var deferred = $q.defer();
      var promise = deferred.promise;

      // 模拟数据
      if(AppConfig.SUMIATE_DATA_MODE)
      {

        createResult = CodeConfig.LOGIN_SUCCESS;
        deferred.resolve(createResult);
        return promise;

      }
      // 真实数据
      else{

        signUpData.password = md5(signUpData.password);
        $http.post(CommonFactory.getServerUrl("p/users/addUser"), signUpData, BaseConfig.headers)
          .success(handleSuccess)
          .error(handleError);
        return promise;

      }

      /**
       * 处理成功
       * @param data
       * @param status
       * @param headers
       * @param config
       */
      function handleSuccess(data, status, headers, config) {
        createResult = data;
        CommonFactory.saveUserLoginInfo(data);
        deferred.resolve(createResult);
      }

      /**
       * 处理失败
       * @param data
       * @param status
       * @param headers
       * @param config
       */
      function handleError(data, status, headers, config){
        createResult = CodeConfig.LOGIN_FAIL;
        deferred.reject(createResult);
      }

    }

  }

})();
