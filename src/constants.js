const MODULES = {
  core: {
    'AccountSettings': require('./client/core/accountsettings'),
    'ActivityStream': require('./client/core/activitystream'),
    'Attachments': require('./client/core/attachments'),
    'Automations': require('./client/core/automations'),
    'Brand': require('./client/core/brand'),
    'CustomAgentRoles': require('./client/core/customagentroles'),
    'DynamicContent': require('./client/core/dynamiccontent'),
    'DynamicContentVariants': require('./client/core/dynamiccontentvariants'),
    'GroupMemberships': require('./client/core/groupmemberships'),
    'Groups': require('./client/core/groups'),
    'Imports': require('./client/core/imports'),
    'Installations': require('./client/core/installations'),
    'JobStatuses': require('./client/core/jobstatuses'),
    'Locales': require('./client/core/locales'),
    'Macros': require('./client/core/macros'),
    'OauthTokens': require('./client/core/oauthtokens'),
    'OrganizationFields': require('./client/core/organizationfields'),
    'OrganizationMemberships': require('./client/core/organizationmemberships'),
    'Organizations': require('./client/core/organizations'),
    'PermissionGroups': require('./client/core/permissiongroups'),
    'Policies': require('./client/core/policies'),
    'Requests': require('./client/core/requests'),
    'SatisfactionRatings': require('./client/core/satisfactionratings'),
    'Search': require('./client/core/search'),
    'Sessions': require('./client/core/sessions'),
    'SharingAgreement': require('./client/core/sharingagreement'),
    'SuspendedTickets': require('./client/core/suspendedtickets'),
    'Tags': require('./client/core/tags'),
    'Targets': require('./client/core/targets'),
    'TicketAudits': require('./client/core/ticketaudits'),
    'TicketEvents': require('./client/core/ticketevents'),
    'TicketExport': require('./client/core/ticketexport'),
    'TicketFields': require('./client/core/ticketfields'),
    'TicketForms': require('./client/core/ticketforms'),
    'TicketImport': require('./client/core/ticketimport'),
    'TicketMetrics': require('./client/core/ticketmetrics'),
    'Tickets': require('./client/core/tickets'),
    'Triggers': require('./client/core/triggers'),
    'UserFields': require('./client/core/userfields'),
    'UserIdentities': require('./client/core/useridentities'),
    'Users': require('./client/core/users'),
    'Views': require('./client/core/views'),
    'Webhooks': require('./client/core/webhooks')
  },
  helpcenter: {
    'AccessPolicies': require('./client/helpcenter/accesspolicies'),
    'ArticleAttachments': require('./client/helpcenter/articleattachments'),
    'ArticleComments': require('./client/helpcenter/articlecomments'),
    'ArticleLabels': require('./client/helpcenter/articlelabels'),
    'Articles': require('./client/helpcenter/articles'),
    'Categories': require('./client/helpcenter/categories'),
    'Search': require('./client/helpcenter/search'),
    'Sections': require('./client/helpcenter/sections'),
    'Subscriptions': require('./client/helpcenter/subscriptions'),
    'Translations': require('./client/helpcenter/translations'),
    'UserSegments': require('./client/helpcenter/usersegments'),
    'Votes': require('./client/helpcenter/votes')
  },
  nps: {
    'Invitations': require('./client/nps/invitations'),
    'Surveys': require('./client/nps/surveys')
  },
  services: {
    'Links': require('./client/services/links')
  },
  voice: {
    'AgentActivity': require('./client/voice/agentactivity'),
    'Availabilities': require('./client/voice/availabilities'),
    'CurrentQueueActivity': require('./client/voice/currentqueueactivity'),
    'GreetingCategories': require('./client/voice/greetingcategories'),
    'Greetings': require('./client/voice/greetings'),
    'HistoricalQueueActivity': require('./client/voice/historicalqueueactivity'),
    'PhoneNumbers': require('./client/voice/phonenumbers')
  }
};

const ENDPOINTS = {
  core: '.zendesk.com/api/v2',
  helpcenter: '.zendesk.com/api/v2/help_center',
  services: '.zendesk.com/api/services/jira',
  voice: '.zendesk.com/api/v2/channels/voice',
};

const MODULE_BASE_PATHS = {
  core: './client/core/',
  helpcenter: './client/helpcenter/',
  nps: './client/nps/',
  services: './client/services/',
  voice: './client/voice/',
};

module.exports = {MODULES, MODULE_BASE_PATHS, ENDPOINTS};
