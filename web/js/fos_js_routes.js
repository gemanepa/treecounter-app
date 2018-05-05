fos.Router.setData({
  base_url: '',
  routes: {
    api_login_check: {
      tokens: [['text', '/api/login_check']],
      defaults: [],
      requirements: [],
      hosttokens: [],
      methods: [],
      schemes: []
    },
    target_update_form: {
      tokens: [
        ['variable', '/', '[^/]++', 'treecounter'],
        ['text', '/targets/updateForm'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    target_put: {
      tokens: [
        ['variable', '/', '[^/]++', 'treecounter'],
        ['text', '/targets'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['PUT'],
      schemes: []
    },
    notifications_get: {
      tokens: [
        ['text', '/notifications'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    followSubscribe_post: {
      tokens: [
        ['text', '/followSubscribe'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['POST'],
      schemes: []
    },
    followUnSubscribe_post: {
      tokens: [
        ['text', '/followUnSubscribe'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['POST'],
      schemes: []
    },
    donationContribution_form: {
      tokens: [
        ['text', '/donationContributionForm'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    giftDonationContribution_form: {
      tokens: [
        ['text', '/giftDonationContributionForm'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    donationContributions_get: {
      tokens: [
        ['text', '/donationContributions'],
        ['variable', '/', '[^/]++', 'treecounter'],
        ['text', '/treecounters'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    donationContribution_get: {
      tokens: [
        ['variable', '/', '[^/]++', 'donationContribution'],
        ['text', '/donationContributions'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    donationContributionByToken_get: {
      tokens: [
        ['variable', '/', '[^/]++', 'token'],
        ['text', '/donationByToken'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    donationContribution_post: {
      tokens: [
        ['variable', '/', '[^/]++', 'plantProject'],
        ['text', '/donationContributions'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['POST'],
      schemes: []
    },
    donationContribution_put: {
      tokens: [
        ['variable', '/', '[^/]++', 'donationContribution'],
        ['text', '/donationContributions'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['PUT'],
      schemes: []
    },
    donationContribution_delete: {
      tokens: [
        ['variable', '/', '[^/]++', 'donationContribution'],
        ['text', '/donationContributions'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['DELETE'],
      schemes: []
    },
    giftDonationContribution_post: {
      tokens: [
        ['variable', '/', '[^/]++', 'plantProject'],
        ['text', '/giftDonationContributions'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['POST'],
      schemes: []
    },
    plantContribution_form: {
      tokens: [
        ['text', '/plantContributionForm'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    plantContribution_get: {
      tokens: [
        ['variable', '/', '[^/]++', 'plantContribution'],
        ['text', '/plantContributions'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    plantContribution_post: {
      tokens: [
        ['text', '/plantContributions'],
        ['variable', '/', '[^/]++', 'treecounter'],
        ['text', '/treecounters'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['POST'],
      schemes: []
    },
    plantContribution_put: {
      tokens: [
        ['variable', '/', '[^/]++', 'plantContribution'],
        ['text', '/plantContributions'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['PUT'],
      schemes: []
    },
    plantContribution_delete: {
      tokens: [
        ['variable', '/', '[^/]++', 'plantContribution'],
        ['text', '/plantContributions'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['DELETE'],
      schemes: []
    },
    api_token_refresh: {
      tokens: [
        ['text', '/token_refresh'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['POST'],
      schemes: []
    },
    data_loginLoad_get: {
      tokens: [
        ['text', '/loadLoginData'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    data_menu_get: {
      tokens: [
        ['text', '/menu'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    data_userProfile_get: {
      tokens: [
        ['text', '/loadUserProfile'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    data_tpos_get: {
      tokens: [
        ['text', '/loadTpos'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    public_menu_get: {
      tokens: [
        ['text', '/menu'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/public']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    public_registrationTypes: {
      tokens: [
        ['text', '/registrationTypes'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/public']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    treecounter_get: {
      tokens: [
        ['variable', '/', '[^/]++', 'treecounter'],
        ['text', '/treecounter'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/public']
      ],
      defaults: { treecounter: null, _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    targetLog_get: {
      tokens: [
        ['text', '/target'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/public']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    targetLogs_get: {
      tokens: [
        ['variable', '/', '[^/]++', 'sort'],
        ['text', '/target'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/public']
      ],
      defaults: { sort: null, _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    auth_login_form: {
      tokens: [
        ['text', '/login'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/auth']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    auth_forgotPassword_form: {
      tokens: [
        ['text', '/forgotPassword'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/auth']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    auth_forgotPassword_post: {
      tokens: [
        ['text', '/forgotPassword'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/auth']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['POST'],
      schemes: []
    },
    auth_resetPassword_form: {
      tokens: [
        ['variable', '/', '[^/]++', 'token'],
        ['text', '/resetPassword'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/auth']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    auth_resetPassword_post: {
      tokens: [
        ['text', '/resetPassword'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/auth']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['POST'],
      schemes: []
    },
    auth_sendActivationLink_post: {
      tokens: [
        ['text', '/sendActivationLink'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['POST'],
      schemes: []
    },
    auth_accountActivate_post: {
      tokens: [
        ['text', '/accountActivate'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/auth']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['POST'],
      schemes: []
    },
    auth_accountActivationToken_debug: {
      tokens: [
        ['variable', '/', '[^/]++', 'userProfile'],
        ['text', '/accountActivationToken'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/auth']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    registration_form: {
      tokens: [
        ['variable', '/', '[^/]++', 'profileType'],
        ['text', '/registrationForm'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/auth']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    registration_forms: {
      tokens: [
        ['text', '/registrationForms'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/auth']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    register_post: {
      tokens: [
        ['variable', '/', '[^/]++', 'profileType'],
        ['text', '/register'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/auth']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['POST'],
      schemes: []
    },
    profileUpdate_form: {
      tokens: [
        ['variable', '/', '[^/]++', 'userProfile'],
        ['text', '/profileUpdateForm'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    profile_post: {
      tokens: [
        ['variable', '/', '[^/]++', 'userProfile'],
        ['text', '/profileUpdate'],
        ['variable', '/', '[^/]++', '_locale'],
        ['text', '/api']
      ],
      defaults: { _locale: null },
      requirements: [],
      hosttokens: [],
      methods: ['PUT'],
      schemes: []
    },
    bazinga_jstranslation_js: {
      tokens: [
        ['variable', '.', 'js|json', '_format'],
        ['variable', '/', '[\\w]+', 'domain'],
        ['text', '/translations']
      ],
      defaults: { domain: 'messages', _format: 'js' },
      requirements: { _format: 'js|json', domain: '[\\w]+' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    search2: {
      tokens: [['text', '/search2']],
      defaults: [],
      requirements: [],
      hosttokens: [],
      methods: ['POST'],
      schemes: []
    },
    app_homepage: {
      tokens: [['variable', '/', '(\\w{2})?', '_locale']],
      defaults: { _locale: null },
      requirements: { _locale: '(\\w{2})?' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    app_accountActivate: {
      tokens: [
        ['variable', '/', '[^/]++', 'token'],
        ['text', '/accountActivation'],
        ['variable', '/', '(\\w{2})?', '_locale']
      ],
      defaults: { _locale: null },
      requirements: { _locale: '(\\w{2})?' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    app_accountActivation: {
      tokens: [
        ['text', '/accountActivation'],
        ['variable', '/', '(\\w{2})?', '_locale']
      ],
      defaults: { _locale: null },
      requirements: { _locale: '(\\w{2})?' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    app_forgotPassword: {
      tokens: [
        ['text', '/forgotPassword'],
        ['variable', '/', '(\\w{2})?', '_locale']
      ],
      defaults: { _locale: null },
      requirements: { _locale: '(\\w{2})?' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    app_resetPassword: {
      tokens: [
        ['text', '/resetPassword'],
        ['variable', '/', '(\\w{2})?', '_locale']
      ],
      defaults: { _locale: null },
      requirements: { _locale: '(\\w{2})?' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    app_userHome: {
      tokens: [['text', '/home'], ['variable', '/', '(\\w{2})?', '_locale']],
      defaults: { _locale: null },
      requirements: { _locale: '(\\w{2})?' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    app_login: {
      tokens: [['text', '/login'], ['variable', '/', '(\\w{2})?', '_locale']],
      defaults: { _locale: null },
      requirements: { _locale: '(\\w{2})?' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    app_donateTrees: {
      tokens: [
        ['text', '/donateTrees'],
        ['variable', '/', '(\\w{2})?', '_locale']
      ],
      defaults: { _locale: null },
      requirements: { _locale: '(\\w{2})?' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    app_myTrees: {
      tokens: [['text', '/myTrees'], ['variable', '/', '(\\w{2})?', '_locale']],
      defaults: { _locale: null },
      requirements: { _locale: '(\\w{2})?' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    app_registerTrees: {
      tokens: [
        ['text', '/registerTrees'],
        ['variable', '/', '(\\w{2})?', '_locale']
      ],
      defaults: { _locale: null },
      requirements: { _locale: '(\\w{2})?' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    app_signup: {
      tokens: [['text', '/signup'], ['variable', '/', '(\\w{2})?', '_locale']],
      defaults: { _locale: null },
      requirements: { _locale: '(\\w{2})?' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    app_signupSuccess: {
      tokens: [
        ['text', '/signupSuccess'],
        ['variable', '/', '(\\w{2})?', '_locale']
      ],
      defaults: { _locale: null },
      requirements: { _locale: '(\\w{2})?' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    app_target: {
      tokens: [['text', '/target'], ['variable', '/', '(\\w{2})?', '_locale']],
      defaults: { _locale: null },
      requirements: { _locale: '(\\w{2})?' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    },
    app_treecounter: {
      tokens: [
        ['variable', '/', '[^/]++', 'treecounter'],
        ['text', '/treecounter'],
        ['variable', '/', '(\\w{2})?', '_locale']
      ],
      defaults: { _locale: null },
      requirements: { _locale: '(\\w{2})?' },
      hosttokens: [],
      methods: ['GET'],
      schemes: []
    }
  },
  prefix: '',
  host: 'localhost',
  scheme: 'http'
});
