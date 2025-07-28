
<!DOCTYPE html>
<html lang="en" ng-app="acculynx" ng-strict-di>
<head>
    <!--Prevent angular tags from showing at the highest level-->
    <style>
        [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
            display: none !important;
        }
    </style>

    <meta charset="utf-8" />
    <title ng-init='title = "Create New Lead"' ng-bind="title + ' &middot; AccuLynx'">Create New Lead &middot; AccuLynx</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

    <link id="favicon" href="/Images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
    <link rel="apple-touch-icon" href="/images/apple/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="16x16" href="/images/apple/apple-touch-icon-16x16.png">
    <link rel="apple-touch-icon" sizes="32x32" href="/images/apple/apple-touch-icon-32x32.png">
    <link rel="apple-touch-icon" sizes="36x36" href="/images/apple/apple-touch-icon-36x36.png">
    <link rel="apple-touch-icon" sizes="48x48" href="/images/apple/apple-touch-icon-48x48.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/images/apple/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/images/apple/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/images/apple/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/images/apple/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="96x96" href="/images/apple/apple-touch-icon-96x96.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/images/apple/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/images/apple/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/images/apple/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/images/apple/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/images/apple/apple-touch-icon-180x180.png">
    <link rel="apple-touch-icon" sizes="192x192" href="/images/apple/apple-touch-icon-192x192.png">
    

    <link href="/Styles/bootstrap3/bootstrap.css" rel="stylesheet">
    <link href="https://static.alstatic.net/stylebundle/Header-1a3e1ef39680391b.css" rel="stylesheet"/>

    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700|Roboto:100,300,400,500,700' rel='stylesheet' type='text/css'>


<script src="https://cdn.trackjs.com/agent/v3/latest/t.js"></script>
<script>
    const TrackJSApplication = 'prod-my-acculynx';

    if (window.TrackJS && TrackJSApplication) {
        TrackJS.install({
            token: "5633bad1c69a40c3a06e6b715c8d6024",
            application: TrackJSApplication,
            userId: 'umbrellacpsllp@gmail.com',
            sessionId: 'yyipkxpwg43gixl3ci01anqp',
            onError: function(payload) {
                var excludeErrorCodes = /^[4-5][0-9][0-9]/;

                if (excludeErrorCodes.test(payload.message) && !payload.message.startsWith('404')) {
                    return false;
                }

                return true;
            }
        });

        //var originalFetch = window.fetch;
        //window.fetch = function() {
        //    console.log("fetch call invoked:", arguments, new Error().stack);
        //    return originalFetch.apply(this, arguments);
        //}
    }
</script>


<script type="text/javascript">
    
</script>

    <script>
        (function(h,o,u,n,d) {
            h=h[d]=h[d]||{q:[],onReady:function(c){h.q.push(c)}}
            d=o.createElement(u);d.async=1;d.src=n
            n=o.getElementsByTagName(u)[0];n.parentNode.insertBefore(d,n)
        })(window,document,'script','https://www.datadoghq-browser-agent.com/us1/v5/datadog-rum.js','DD_RUM')
        window.DD_RUM.onReady(function () {

                window.DD_RUM.init({
                    clientToken: 'pub4344d8bb5734776e40f10c5ec5b45119',
                    applicationId: '09100f38-a187-4754-a52c-788d8a4916ac',
                    site: 'datadoghq.com',
                    service: 'my.acculynx.com',
                    env: 'prod',
                    version: '12401-5ad00e1',
                    sessionSampleRate: 2,
                    sessionReplaySampleRate: 0,
                    trackUserInteractions: true,
                    trackResources: true,
                    trackLongTasks: true,
                    defaultPrivacyLevel: 'allow',
                    telemetrySampleRate: 0,
                    allowedTracingUrls: [/http:\/\/.*\.acculynx\.com/, /https:\/\/.*\.acculynx\.com/],
                    beforeSend: (event) => {
                        if (event && event.resource && event.resource.url.indexOf("mini-profiler") !== -1) {
                            return false;
                        }
                    },
                });

                window.DD_RUM.setUser({
                    id: '2c4293df-d186-4320-8b5a-ffca32c1e064',
                    name: 'James Causey',
                    email: 'umbrellacpsllp@gmail.com'
                });

                window.DD_RUM.setGlobalContextProperty('company', {
                    LocationID: '707968e7-0d10-4801-8305-13aff1daf8bf',
                    ParentAccountNumber: '24203',
                    ParentAccountID: 'ba548d9a-03a0-48cf-846d-236d5320cfbf'
                });
        })
    </script>


    <script>
        var HW_config = {
            selector: "#release-notes", // CSS selector where to inject the badge
            account: 'yo8ALx', // your account ID
            translations: {
                title: "Release Notes"
            }
        };
    </script>
    
        <link href="https://static.alstatic.net/stylebundle/NewLead-81ff69a7f924c91e.css" rel="stylesheet"/>

    
</head>

        <body data-app responsive-resize>

<style>
    [v-cloak] {
        display: none;
    }
</style>


<!--rate acculynx - cant be AxModal since it renders a partial and has to be outside vue app since vue cant render partials, freaks out-->
<div class="overlay d-none" id="js-user-voice-modal">
    <div class="overlay__content">
        <button class="overlay__close-button" onclick="document.getElementById('js-user-voice-modal').classList.add('d-none')">
            <svg class="overlay__close-icon">
                <use xlink:href="/Images/icon-sprite.svg#icon-plus"></use>
            </svg>
        </button>
        <div class="flex flex-col flex-grow">
            <header class="overlay__header flex flex-center-center">
                <div class="overlay__heading">Rate AccuLynx</div>
            </header>

            <div class="overlay__body">

            </div>
        </div>
    </div>
</div>
<header id="vue-header" class="webapp-header" data-bootstrap="{&quot;Tasks&quot;:0,&quot;TasksDueToday&quot;:0,&quot;TasksOverdue&quot;:0,&quot;Appointments&quot;:0,&quot;Reminders&quot;:0,&quot;RemindersToday&quot;:0,&quot;AtMes&quot;:16,&quot;AtMeFiltersAllowed&quot;:true,&quot;CompanyUserID&quot;:&quot;2bde0f37-77ca-4733-9b4e-aaca2078a0fd&quot;}">
    <ax-app>
        <ax-modal v-model="showReminderModal" :callback="OnReminderSaved" :component="reminderModalView" :data="reminderModalData" :options="{size: 'small', fullHeight: true}"></ax-modal>
        <ax-modal v-model="showDeleteRecurringAppointmentModal" :callback="OnAppointmentDeleted" :component="deleteRecurringAppointmentModalView" :data="deleteRecurringAppointmentModalData" :options="{size: 'small'}"></ax-modal>
        <ax-modal v-model="showAtMeHelpModal" :component="atMeHelpModalView" :options="{size: 'small'}"></ax-modal>
        <ax-modal v-model="showInviteToCrewAppModal" :component="inviteToCrewAppModalModalView" :data="inviteToCrewAppModalModalData" :callback="onInviteSubCallback"></ax-modal>
        <ax-modal v-model="showResumeSubcontractorModal" :component="resumeSubcontractorModalView" :data="resumeSubcontractorModalData" :callback="onResumeSubCallback"></ax-modal>
        <ax-modal v-model="showFinancingModal" :component="financingModalView" :data="financingModalData"></ax-modal>
        <ax-modal v-model="showFinancingCalculatorModal" :component="financingCalculatorModalView" :data="financingCalculatorData"></ax-modal>

        <!--help modals-->
        <ax-modal v-model="showSubmitAnIdeaModal" :component="submitAnIdeaModalView" :data="{'ViewAllIdeasURL': 'http://feedback.acculynx.com/forums/243621-general-feedback/?sso=yKNHDwZQdVXYO2TtEC5e8El1b6Oy1VlDCOhh%2f0Tr7R91OR2QJHXLAsQGiP%2fIUjymVANUIDPLiIQMWKpaZGN%2bAo0YyFRRzxcSJ7kkEtSlX47tpehNqxp22Cn%2b1lis4HuDLI6%2f1crq9vx4Lw%2fYx38waxOTOuZ%2b%2blNIpAzU%2fpD3bvnnigFqBReMHHnosy7DS9apzL%2fADQla6YXGOw4NKrplhQ%3d%3d'}"></ax-modal>
        <ax-modal v-model="showSubmitTicketModal" :component="submitTicketModalView" :data='{"AccountNumber": "24203-1", "AccountAndLocationNumber":"ACC24203-1", "CurrentCompanyUserID": "2bde0f37-77ca-4733-9b4e-aaca2078a0fd", "CurrentCompanyUserEmail":"umbrellacpsllp@gmail.com", "SupportPhone":"(608) 473-3800 Ext. 200"}'></ax-modal>

        <!--training material-->
        <ax-modal v-model="showTrainingVideosModal" :component="trainingVideosModalView" :options="{size: 'large'}"></ax-modal>
        <div id="main-nav-wrapper">
            <div id="js-nav-secondary" class="meta-navigation-container">
                <a href="/" target="_self" class="meta-navigation-container__company-logo-link">
                    <svg class="meta-navigation-container__company-logo" width="165" height="23">
                        <use xlink:href="/Images/icon-sprite.svg#icon-acculynx-logo-prefilled-white-orange-white"></use>
                    </svg>
                </a>

                <section class="meta-navigation-container__location-picker location-picker flex-shrink">
                    <div class="ax-dropdown ax-dropdown--fullscreen-mobile flex flex-shrink" v-click-to-close="{'callback': CloseLocationSelectorMenu }">
                            <span class="meta-navigation-container__button location-picker__button ax-dropdown__button--connected">
                                <span ng-non-bindable v-pre>Umbrella Claims &amp; Property Solutions</span>
                            </span>
                    </div>
                </section>

                <section class="meta-navigation-container__meta-right">
                    <button id="release-notes" class="meta-navigation-container__release-notes release-notes">
                        Release Notes
                    </button>
                    <div class="flex flex-end-stretch flex-grow">
                        <div class="meta-navigation-container__myday ax-dropdown ax-dropdown--fullscreen-mobile">
                            <!--MyDay Vue App-->
                            <button id="js-myday-tasks" ax-test-click="MyDay-Tasks-Pane" class="meta-navigation-container__button flex flex-center-center" :class="{'meta-navigation-container__button--open': myDayPanes['tasks']}" v-on:click="ToggleMyDayDropdown('tasks')">
                                <svg class="meta-navigation-container__icon myday__icon ax_icon ax_icon--thumbtack" width="13" height="16">
                                    <use xlink:href="/Images/icon-sprite.svg#icon-thumbtack"></use>
                                </svg>
                                <span v-cloak class="myday__count" :class="{'myday__count--red' : $store.state.MyDay.Tasks.Overdue, 'myday__count--orange' : $store.state.MyDay.Tasks.DueToday && !$store.state.MyDay.Tasks.Overdue}">{{$store.state.MyDay.Tasks.Total | shortNumber }}</span>
                                <span class="myday__count" v-show="!isVueLoaded">--</span>
                            </button>
                            <button id="js-myday-appointments" ax-test-click="MyDay-Events-Pane" class="meta-navigation-container__button flex flex-center-center" :class="{'meta-navigation-container__button--open': myDayPanes['appointments']}" v-on:click="ToggleMyDayDropdown('appointments')">
                                <svg class="meta-navigation-container__icon myday__icon ax_icon ax_icon--calendar-empty" width="15" height="17">
                                    <use xlink:href="/Images/icon-sprite.svg#icon-calendar-empty"></use>
                                </svg>
                                <span v-cloak class="myday__count" :class="{'myday__count--orange' : myDayHeader.Appointments > 0}">{{myDayHeader.Appointments | shortNumber }}</span>
                                <span class="myday__count" v-show="!isVueLoaded">--</span>
                            </button>
                            <button id="js-myday-reminders" ax-test-click="MyDay-Reminders-Pane" class="meta-navigation-container__button flex flex-center-center" :class="{'meta-navigation-container__button--open': myDayPanes['reminders']}" v-on:click="ToggleMyDayDropdown('reminders')">
                                <svg class="meta-navigation-container__icon myday__icon ax_icon ax_icon--bell" width="14" height="14">
                                    <use xlink:href="/Images/icon-sprite.svg#icon-bell"></use>
                                </svg>
                                <span v-cloak class="myday__count" :class="{'myday__count--orange' : myDayHeader.RemindersToday > 0}">{{myDayHeader.Reminders | shortNumber }}</span>
                                <span class="myday__count" v-show="!isVueLoaded">--</span>
                            </button>
                            <!-- so having a component makes it jump in. Let's see how we feel about that -->
                            <my-day-at-me-counter v-cloak id="js-myday-atmes" ax-test-click="MyDay-AtMes-Pane" v-bind:is-open="myDayPanes['atmes']" v-bind:count="$store.state.MyDay.AtMes.Total" v-on:click.native="ToggleMyDayDropdown('atmes')"></my-day-at-me-counter>
                            <button v-show="!isVueLoaded" class="meta-navigation-container__button flex flex-center-center">
                                <span class="myday__icon">@Me</span>
                                <span class="myday__count">--</span>
                            </button>

                            <div class="my-day__dropdown-panel ax-dropdown__panel ax-dropdown__panel--auto-width ax-dropdown__panel--fullscreen-mobile"
                                 :class="{'ax-dropdown__panel--open': (myDayPanes['tasks'] || myDayPanes['reminders'] || myDayPanes['appointments'] || myDayPanes['atmes'])}"
                                 v-click-to-close="{'callback': CloseMyDayDropDowns, 'include': ['js-myday-tasks', 'js-myday-appointments', 'js-myday-reminders', 'js-myday-atmes'], 'includeSelectors': ['.at-mes'] }">
                                <header class="ax-dropdown__fullscreen-header">
                                    <p v-if="myDayPanes['tasks']">Tasks</p>
                                    <p v-if="myDayPanes['appointments']">Appointments</p>
                                    <p v-if="myDayPanes['reminders']">Reminders</p>
                                    <p v-if="myDayPanes['atmes']">@Me</p>
                                    <button class="ax-dropdown__fullscreen-close-button" v-on:click="CloseMyDayDropDowns()">
                                        <ax-svg icon="plus" class="ax-dropdown__fullscreen-close-icon" width="22" height="22"></ax-svg>
                                    </button>
                                </header>

                                <template v-if="myDayPanes['tasks']">
                                    <ax-myday-tasks></ax-myday-tasks>
                                </template>

                                <ax-myday-appointments :bus="bus" v-if="myDayPanes['appointments']"></ax-myday-appointments>
                                <ax-myday-reminders :bus="bus" v-if="myDayPanes['reminders']"></ax-myday-reminders>
                                <ax-myday-at-mes :bus="bus" v-if="myDayPanes['atmes']" v-bind:can-use-filters="myDayHeader.AtMeFiltersAllowed"></ax-myday-at-mes>
                            </div>
                        </div>
                        <div class="meta-navigation-container__account-dropdown flex" v-click-to-close="{'callback': CloseUserMenu }">
                            <div class="ax-dropdown">
                                <button class="meta-navigation-container__button ax-dropdown__button--connected flex" :class="{'meta-navigation-container__button--open': isUserMenuOpen}" v-on:click="isUserMenuOpen = !isUserMenuOpen;" ax-test-click="dashboard_NavBar_Settings_ddb">
                                    <span ax-test-view="Dashboard-Username-Dropdown" class="meta-navigation-container__user-name"><span ng-non-bindable v-pre>James Causey</span></span>
                                    <svg class="meta-navigation-container__icon" width="16" height="16">
                                        <use xlink:href="/Images/icon-sprite.svg#icon-cog"></use>
                                    </svg>
                                </button>
                                <div v-cloak class="ax-dropdown__panel ax-dropdown__panel--auto-width ax-dropdown__panel--flush-right ax-dropdown__panel--no-scroll ax-dropdown__panel--connected p-y--md f--nowrap" :class="{'ax-dropdown__panel--open': isUserMenuOpen}">
                                    <div class="p-x--lg p-y--xs f--gray-77 f--14 f--bold"><span ng-non-bindable v-pre>James Causey</span></div>
                                    <div class="p-x--lg p-y--xs f--gray-77 f--12"><span ng-non-bindable v-pre>umbrellacpsllp@gmail.com</span></div>
                                    <div class="p-x--lg p-y--xs f--gray-9d f--12">Role: Company Administrator</div>
                                    <div class="p-x--lg p-y--xs f--gray-9d f--12">
                                        Version: AccuLynx
                                            Pro
                                    </div>
                                    <hr class="br-t--xs br--gray-dc m-y--md" />
                                    <a href="/profile/edit" target="_self" class="p-x--lg p-y--sm d-block h--gray-ef" ax-test-click="dashboard_NavBar_SettingsEditProfile_link">Edit Profile</a>
                                            <a href="/manageusers/" target="_self" class="p-x--lg p-y--sm d-block h--gray-ef" ax-test-click="dashboard_NavBar_SetttingsManageYourTeam_link">Manage Your Team</a>
                                        <a href="/accountsettings/" target="_self" class="p-x--lg p-y--sm d-block h--gray-ef" ax-test-click="dashboard_NavBar_SettingsAccountSettings_link">Account Settings</a>
                                    <a href="/Authentication/SignOut" target="_self" class="p-x--lg p-y--sm d-block h--gray-ef" ax-test-click="dashboard_NavBar_SettingsSignOut_link">Sign Out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div id="js-nav-primary" class="main-navigation-container">
                <div class="main-navigation-container__mobile-button-bar">
                    <button class="main-navigation-container__toggle-nav" v-on:click="isMainNavOpen = true">
                        <div class="main-navigation-container__toggle-nav-icon"></div>
                        <div class="main-navigation-container__toggle-nav-icon"></div>
                        <div class="main-navigation-container__toggle-nav-icon"></div>
                    </button>
                    <button class="p--md f--white header-search__button--sm" id="js-search-toggle-sm" v-on:click="OnSearchToggle(!isSearchOpen);">
                        <svg class="icon icon-search f--white"><use xlink:href="/Images/icon-sprite.svg#icon-magnifying-glass"></use></svg>
                    </button>
                </div>
                <div class="primary-header-navigation ax-dropdown__panel--fullscreen-mobile" :class="{'primary-header-navigation--open': isMainNavOpen}">
                    <header class="ax-dropdown__fullscreen-header">
                        <p>Main Menu</p>
                        <button class="ax-dropdown__fullscreen-close-button" v-on:click="isMainNavOpen = false">
                            <ax-svg icon="plus" class="ax-dropdown__fullscreen-close-icon" width="22" height="22"></ax-svg>
                        </button>
                    </header>
                    <nav class="primary-header-navigation__nav">
                        <div class="primary-header-navigation__dropdown ax-dropdown" @click="ToggleNewMenu()">
                            <button class="primary-header-navigation__button primary-header-navigation__button--orange" ax-test-click="dashboard_NavBar_New_btn">
                                <div class="primary-header-navigation__icon-container">
                                    <svg class="primary-header-navigation__icon primary-header-navigation__icon-plus-circle">
                                        <use xlink:href="/Images/icon-sprite.svg#icon-plus-circle"></use>
                                    </svg>
                                </div>
                                <div class="primary-header-navigation__label">New</div>
                            </button>
                            <ul class="ax-dropdown__panel primary-header-navigation__dropdown-panel" :class="{'primary-header-navigation__dropdown-panel--open': isNewMenuOpen}">
                                <li>
                                    <a v-on:click="CreateTask()" target="_self" class="primary-header-navigation__link" ax-test-click="dashboard_NavBar_NewTask_link">Task</a>
                                </li>
                                    <li>
                                            <a href="/contacts/new" target="_self" class="primary-header-navigation__link" ax-test-click="dashboard_NavBar_Contact_link">Contact</a>

                                    </li>
                                    <li>
                                            <a href="/?module=CreateLead" target="_self" class="primary-header-navigation__link" ax-test-click="dashboard_NavBar_Lead_link">Lead</a>

                                    </li>
                                    <li>
                                            <a v-on:click="CreateReminder()" target="_self" class="primary-header-navigation__link" ax-test-click="dashboard_NavBar_NewReminder_link">Reminder</a>

                                    </li>
                            </ul>
                        </div>
                        <div class="primary-header-navigation__dropdown ax-dropdown" @click="ToggleRecentMenu()">
                            <button class="primary-header-navigation__button primary-header-navigation__button--orange" ax-test-click="dashboard_NavBar_Recent_btn">
                                <div class="primary-header-navigation__icon-container">
                                    <svg class="primary-header-navigation__icon primary-header-navigation__icon-arrow-circle">
                                        <use xlink:href="/Images/icon-sprite.svg#icon-arrow-circle"></use>
                                    </svg>
                                </div>
                                <div class="primary-header-navigation__label">Recent</div>
                            </button>
                            <ul class="ax-dropdown__panel primary-header-navigation__dropdown-panel" :class="{'primary-header-navigation__dropdown-panel--open': isRecentMenuOpen}">
                                    <li>
                                        <a href="/lead/new" target="_self" class="primary-header-navigation__link" ax-test-click="dashboard_NavBar_RecentItem1_link"><span ng-non-bindable v-pre>New Lead</span></a>
                                    </li>
                                    <li>
                                        <a href="/jobs/804e391d-4f14-4a53-8034-3d8144a4e56c" target="_self" class="primary-header-navigation__link" ax-test-click="dashboard_NavBar_RecentItem2_link"><span ng-non-bindable v-pre>Job: Brewer, John</span></a>
                                    </li>
                                    <li>
                                        <a href="/jobs/0f5ca77d-a133-4219-9834-567fe8ce30ae" target="_self" class="primary-header-navigation__link" ax-test-click="dashboard_NavBar_RecentItem3_link"><span ng-non-bindable v-pre>Job: Taylor, Joshua</span></a>
                                    </li>
                                    <li>
                                        <a href="/jobs/32235da0-a487-41be-bbbb-e49fd5bfff06" target="_self" class="primary-header-navigation__link" ax-test-click="dashboard_NavBar_RecentItem4_link"><span ng-non-bindable v-pre>Job: Guzman, Enrique and viviana</span></a>
                                    </li>
                                    <li>
                                        <a href="/jobs/?filters=currentMilestoneList:Invoiced" target="_self" class="primary-header-navigation__link" ax-test-click="dashboard_NavBar_RecentItem5_link"><span ng-non-bindable v-pre>Jobs - Invoiced</span></a>
                                    </li>
                                    <li>
                                        <a href="/jobs/e9f807c5-0395-4ad7-b149-ea9bfe1340ae" target="_self" class="primary-header-navigation__link" ax-test-click="dashboard_NavBar_RecentItem6_link"><span ng-non-bindable v-pre>Job: Samuel Pitre, Lara Hoad</span></a>
                                    </li>
                                    <li>
                                        <a href="/jobs/7c5669a1-e55f-4647-b9ca-54f2bf8a8119" target="_self" class="primary-header-navigation__link" ax-test-click="dashboard_NavBar_RecentItem7_link"><span ng-non-bindable v-pre>Job: Carter, Tommy </span></a>
                                    </li>
                                    <li>
                                        <a href="/jobs/" target="_self" class="primary-header-navigation__link" ax-test-click="dashboard_NavBar_RecentItem8_link"><span ng-non-bindable v-pre>Jobs</span></a>
                                    </li>
                                    <li>
                                        <a href="/jobs/?filters=currentMilestoneList:Approved" target="_self" class="primary-header-navigation__link" ax-test-click="dashboard_NavBar_RecentItem9_link"><span ng-non-bindable v-pre>Jobs - Approved</span></a>
                                    </li>
                                    <li>
                                        <a href="/jobs/aa40cc46-a95e-471b-8a0a-b857c6a3b26f" target="_self" class="primary-header-navigation__link" ax-test-click="dashboard_NavBar_RecentItem10_link"><span ng-non-bindable v-pre>Job: Livengood, Casey and Heather </span></a>
                                    </li>
                            </ul>
                        </div>

                            <div class='primary-header-navigation__dropdown ax-dropdown '>
                                    <a class="primary-header-navigation__button new-item" href="/?module=Dashboard" target="_self" ax-test-click="dashboard_NavBar_Dashboard_btn">
                                        <div class="primary-header-navigation__icon-container">
                                            <svg class="primary-header-navigation__icon primary-header-navigation__icon-odometer"><use xlink:href="/Images/icon-sprite.svg#icon-odometer"></use></svg>
                                        </div>
                                        <div class="primary-header-navigation__label">Dashboard</div>
                                    </a>
                                                            </div>
                            <div class='primary-header-navigation__dropdown ax-dropdown '>
                                    <button class="primary-header-navigation__button new-item" @click="ToggleMenuItem('fa43ce2e-5804-4ec1-a32c-d36a89177ea8')" ax-test-click="dashboard_NavBar_Contacts_btn">
                                        <div class="primary-header-navigation__icon-container">
                                            <svg class="primary-header-navigation__icon primary-header-navigation__icon-book"><use xlink:href="/Images/icon-sprite.svg#icon-book"></use></svg>
                                        </div>
                                        <div class="primary-header-navigation__label">Contacts</div>
                                    </button>
                                                                    <ul class="ax-dropdown__panel primary-header-navigation__dropdown-panel" :class="{'primary-header-navigation__dropdown-panel--open': isMainMenuOpen['fa43ce2e-5804-4ec1-a32c-d36a89177ea8']}">

                                            <li class='br--gray-dc br-b--xs'>
                                                    <a href="/contacts/new" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ContactsNewContact_link">New Contact <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/contacts?type=Customer" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ContactsCustomer_link">Customer <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class='br--gray-dc br-b--xs'>
                                                    <a href="/contacts?type=General%20Contact" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ContactsGeneralContact_link">General Contact <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/contacts" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ContactsAllContacts_link">All Contacts <span class='hide'>Coming Soon</span></a>

                                            </li>
                                                                            </ul>
                            </div>
                            <div class='primary-header-navigation__dropdown ax-dropdown '>
                                    <button class="primary-header-navigation__button new-item" @click="ToggleMenuItem('d135b8d6-7ec2-e011-9415-00155d003c17')" ax-test-click="dashboard_NavBar_Leads_btn">
                                        <div class="primary-header-navigation__icon-container">
                                            <svg class="primary-header-navigation__icon primary-header-navigation__icon-person"><use xlink:href="/Images/icon-sprite.svg#icon-person"></use></svg>
                                        </div>
                                        <div class="primary-header-navigation__label">Leads</div>
                                    </button>
                                                                    <ul class="ax-dropdown__panel primary-header-navigation__dropdown-panel" :class="{'primary-header-navigation__dropdown-panel--open': isMainMenuOpen['d135b8d6-7ec2-e011-9415-00155d003c17']}">

                                            <li class='br--gray-dc br-b--xs'>
                                                    <a href="/Lead/New" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_LeadsCreateLead_link">Create Lead <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/jobs/?filters=currentMilestoneList:Assigned" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_LeadsAssigned_link">Assigned <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/leads/?filters=currentMilestoneList:Unassigned" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_LeadsUnassigned_link">Unassigned <span class='hide'>Coming Soon</span></a>

                                            </li>
                                                                            </ul>
                            </div>
                            <div class='primary-header-navigation__dropdown ax-dropdown '>
                                    <button class="primary-header-navigation__button new-item" @click="ToggleMenuItem('53ff855d-81c2-e011-9415-00155d003c17')" ax-test-click="dashboard_NavBar_Jobs_btn">
                                        <div class="primary-header-navigation__icon-container">
                                            <svg class="primary-header-navigation__icon primary-header-navigation__icon-hammer"><use xlink:href="/Images/icon-sprite.svg#icon-hammer"></use></svg>
                                        </div>
                                        <div class="primary-header-navigation__label">Jobs</div>
                                    </button>
                                                                    <ul class="ax-dropdown__panel primary-header-navigation__dropdown-panel" :class="{'primary-header-navigation__dropdown-panel--open': isMainMenuOpen['53ff855d-81c2-e011-9415-00155d003c17']}">

                                            <li class=''>
                                                    <a href="/jobs/?filters=currentMilestoneList:Prospect" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_JobsProspects_link">Prospects <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/jobs/?filters=currentMilestoneList:Approved" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_JobsApproved_link">Approved <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/jobs/?filters=currentMilestoneList:Completed" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_JobsCompleted_link">Completed <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/jobs/?filters=currentMilestoneList:Invoiced" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_JobsInvoiced_link">Invoiced <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/jobs/?filters=currentMilestoneList:Closed" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_JobsClosed_link">Closed <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/jobs/?filters=currentMilestoneList:Dead" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_JobsCancelled_link">Cancelled <span class='hide'>Coming Soon</span></a>

                                            </li>
                                                                            </ul>
                            </div>
                            <div class='primary-header-navigation__dropdown ax-dropdown '>
                                    <button class="primary-header-navigation__button new-item" @click="ToggleMenuItem('f3d2df03-cc29-4ae4-99b0-8518ec6e3d25')" ax-test-click="dashboard_NavBar_Photos_btn">
                                        <div class="primary-header-navigation__icon-container">
                                            <svg class="primary-header-navigation__icon primary-header-navigation__icon-camera"><use xlink:href="/Images/icon-sprite.svg#icon-camera"></use></svg>
                                        </div>
                                        <div class="primary-header-navigation__label">Photos</div>
                                    </button>
                                                                    <ul class="ax-dropdown__panel primary-header-navigation__dropdown-panel" :class="{'primary-header-navigation__dropdown-panel--open': isMainMenuOpen['f3d2df03-cc29-4ae4-99b0-8518ec6e3d25']}">

                                            <li class=''>
                                                    <a href="/photos" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_PhotosJobPhotoActivity_link">Job Photo Activity <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/jobber?destination=jobalbum" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_PhotosJobPhotoAlbums_link">Job Photo Albums <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/jobber?destination=addphotos" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_PhotosAddJobPhotos_link">Add Job Photos <span class='hide'>Coming Soon</span></a>

                                            </li>
                                                                            </ul>
                            </div>
                            <div class='primary-header-navigation__dropdown ax-dropdown '>
                                    <button class="primary-header-navigation__button new-item" @click="ToggleMenuItem('fa89dba5-478c-414f-89af-d10ff3e000f0')" ax-test-click="dashboard_NavBar_Reports_btn">
                                        <div class="primary-header-navigation__icon-container">
                                            <svg class="primary-header-navigation__icon primary-header-navigation__icon-paper-text"><use xlink:href="/Images/icon-sprite.svg#icon-paper-text"></use></svg>
                                        </div>
                                        <div class="primary-header-navigation__label">Reports</div>
                                    </button>
                                                                    <ul class="ax-dropdown__panel primary-header-navigation__dropdown-panel" :class="{'primary-header-navigation__dropdown-panel--open': isMainMenuOpen['fa89dba5-478c-414f-89af-d10ff3e000f0']}">

                                            <li class=''>
                                                    <a href="/reports/basic/" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ReportsReportLibrary_link">Report Library <span class='hide'>Coming Soon</span></a>

                                                    <ul>
                                                            <li id="54221af3-7789-4617-a653-114c938ae8bd" class=''>
                                                                <a href="/reports/basic/sales" target="_self" class="primary-header-navigation__link primary-header-navigation__link--sub-item">Sales Report</a>
                                                            </li>
                                                            <li id="d441d42c-df0e-4bec-aa0f-d17dabcf5d37" class=''>
                                                                <a href="/reports/basic/job-expenses" target="_self" class="primary-header-navigation__link primary-header-navigation__link--sub-item">Job Expenses Report</a>
                                                            </li>
                                                            <li id="03950d0a-c0e1-4606-a9d4-56d95b919509" class=''>
                                                                <a href="/reports/basic/ar" target="_self" class="primary-header-navigation__link primary-header-navigation__link--sub-item">A/R Age Report </a>
                                                            </li>
                                                            <li id="0c7a4ffc-20d1-45ea-a8c3-11f2ce6f3eff" class=''>
                                                                <a href="/reports/basic/invoice-ar" target="_self" class="primary-header-navigation__link primary-header-navigation__link--sub-item">A/R Age Report (new)</a>
                                                            </li>
                                                            <li id="c00663e7-815e-45d5-9e78-50ea305a7fdd" class=''>
                                                                <a href="/reports/basic/invoices" target="_self" class="primary-header-navigation__link primary-header-navigation__link--sub-item">Invoice Report</a>
                                                            </li>
                                                            <li id="d7a9d9b1-259d-4482-9c5f-13a2d1c0ce24" class=''>
                                                                <a href="/reports/basic/contacts" target="_self" class="primary-header-navigation__link primary-header-navigation__link--sub-item">Contacts Report</a>
                                                            </li>
                                                            <li id="f88a5397-ae16-457c-8bbd-315de8f5ffa8" class=''>
                                                                <a href="/reports/basic/jobs" target="_self" class="primary-header-navigation__link primary-header-navigation__link--sub-item">Jobs Report</a>
                                                            </li>
                                                            <li id="05950b0b-9169-47b2-b699-9e8ebfcdbd63" class=''>
                                                                <a href="/reports/basic/leads" target="_self" class="primary-header-navigation__link primary-header-navigation__link--sub-item">Lead Status Report</a>
                                                            </li>
                                                            <li id="bf5abe5b-cb99-45cd-a830-cd9e5d671512" class=''>
                                                                <a href="/reports/basic/leadsources" target="_self" class="primary-header-navigation__link primary-header-navigation__link--sub-item">Lead Sources Report</a>
                                                            </li>
                                                            <li id="7284611b-88ec-46de-91b2-474e9e539799" class=''>
                                                                <a href="/reports/basic/profitability" target="_self" class="primary-header-navigation__link primary-header-navigation__link--sub-item">Job Profitability Report</a>
                                                            </li>
                                                            <li id="45af448a-8ab5-4545-a7f8-43442e05d832" class=''>
                                                                <a href="/reports/basic/payments-received" target="_self" class="primary-header-navigation__link primary-header-navigation__link--sub-item">Payments Received Report</a>
                                                            </li>
                                                    </ul>
                                            </li>
                                            <li class=''>
                                                    <a href="/reports/glossary" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ReportsReportGlossary_link">Report Glossary <span class='hide'>Coming Soon</span></a>

                                            </li>
                                                                                    <li>
                                                <a href="/accountsettings/addons/reportsplus?rpMarketing=true&utm_medium=reportsplus_marketing_headernav" target="_self" class="reports-plus-marketing-menu h--gray-ef" style="padding: 15px;">
                                                    <div class="reports-plus-marketing-menu__content">
                                                        <p class="reports-plus-marketing-menu__callout m-b--sm">Get more reports</p>
                                                        <svg class="reports-plus-marketing-menu__logo">
                                                            <use xlink:href="/Images/icon-sprite.svg#icon-reports-plus-prefilled"></use>
                                                        </svg>
                                                    </div>
                                                </a>
                                            </li>
                                    </ul>
                            </div>
                            <div class='primary-header-navigation__dropdown ax-dropdown '>
                                    <button class="primary-header-navigation__button new-item" @click="ToggleMenuItem('7f084bc4-e395-e011-9a7c-00155d003c0a')" ax-test-click="dashboard_NavBar_Tools_btn">
                                        <div class="primary-header-navigation__icon-container">
                                            <svg class="primary-header-navigation__icon primary-header-navigation__icon-wrench"><use xlink:href="/Images/icon-sprite.svg#icon-wrench"></use></svg>
                                        </div>
                                        <div class="primary-header-navigation__label">Tools</div>
                                    </button>
                                                                    <ul class="ax-dropdown__panel primary-header-navigation__dropdown-panel" :class="{'primary-header-navigation__dropdown-panel--open': isMainMenuOpen['7f084bc4-e395-e011-9a7c-00155d003c0a']}">

                                            <li class=''>
                                                    <a href="/calendar" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ToolsCalendar_link">Calendar <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/automation" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ToolsAutomationManager_link">Automation Manager <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/task-manager" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ToolsTaskManager_link">Task Manager <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/TemplateManager" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ToolsEstimate&amp;OrderTemplates_link">Estimate &amp; Order Templates <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class='br--gray-dc br-b--xs'>
                                                    <a href="/tools/email-templates" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ToolsEmailTemplates_link">Email Templates <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/CompanyLibraryManager" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ToolsCompanyLibraryManager_link">Company Library Manager <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/tools/laborchecklists" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ToolsChecklistManager_link">Checklist Manager <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/tools/labor-manager" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ToolsLaborManager_link">Labor Manager <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/tools/labor-documents" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ToolsLaborBusinessDocuments_link">Labor Business Documents <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/?module=Tools_ReassigningJobs" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ToolsReassignJobs_link">Reassign Jobs <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/company-documents" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ToolsCompanyDocuments_link">Company Documents <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/announcements" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ToolsAddCompanyAnnouncement_link">Add Company Announcement <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/tools/staffdirectory" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_ToolsStaffDirectory_link">Staff Directory <span class='hide'>Coming Soon</span></a>

                                            </li>
                                                                            </ul>
                            </div>
                            <div class='primary-header-navigation__dropdown ax-dropdown primary-header-navigation__dropdown--highlight-item'>
                                    <button class="primary-header-navigation__button new-item" @click="ToggleMenuItem('b6bad020-7249-42e3-976b-f079b6bc06c4')" ax-test-click="dashboard_NavBar_Market_btn">
                                        <div class="primary-header-navigation__icon-container">
                                            <svg class="primary-header-navigation__icon primary-header-navigation__app-connection-market"><use xlink:href="/Images/icon-sprite.svg#app-connection-market"></use></svg>
                                        </div>
                                            <span class="new-item__triangle"></span>
                                                <span class="f--white f--bold new-item__text">New</span>
                                        <div class="primary-header-navigation__label">Market</div>
                                    </button>
                                                                    <ul class="ax-dropdown__panel primary-header-navigation__dropdown-panel" :class="{'primary-header-navigation__dropdown-panel--open': isMainMenuOpen['b6bad020-7249-42e3-976b-f079b6bc06c4']}">

                                            <li class=''>
                                                    <a href="/market/addons" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_MarketAdd-Ons_link">Add-Ons <span class='hide'>Coming Soon</span></a>

                                            </li>
                                            <li class=''>
                                                    <a href="/market/app-connections" target="_self" class='primary-header-navigation__link' ax-test-click="dashboard_NavBar_MarketAppConnections_link">AppConnections <span class='hide'>Coming Soon</span></a>

                                            </li>
                                                                            </ul>
                            </div>

                        <div class="primary-header-navigation__dropdown ax-dropdown d-md-none" @click="ToggleMenuItem('Settings')">
                            <button class="primary-header-navigation__button">
                                <div class="primary-header-navigation__icon-container">
                                    <svg class="primary-header-navigation__icon primary-header-navigation__icon-cog">
                                        <use xlink:href="/Images/icon-sprite.svg#icon-cog"></use>
                                    </svg>
                                </div>
                                <div class="primary-header-navigation__label">Settings</div>
                            </button>
                            <ul class="ax-dropdown__panel primary-header-navigation__dropdown-panel" :class="{'primary-header-navigation__dropdown-panel--open': isMainMenuOpen['Settings']}">
                                <li>
                                    <a href="/profile/edit" target="_self" class="primary-header-navigation__link">Edit Profile</a>
                                </li>
                                        <li><a href="/manageusers/" target="_self" class="primary-header-navigation__link">Manage Your Team</a></li>
                                    <li><a href="/accountsettings/" target="_self" class="primary-header-navigation__link">Account Settings</a></li>
                            </ul>
                        </div>

                        <div class="primary-header-navigation__dropdown ax-dropdown d-md-none" @click="ToggleMenuItem('Help')">
                            <button class="primary-header-navigation__button">
                                <div class="primary-header-navigation__icon-container">
                                    <svg class="primary-header-navigation__icon primary-header-navigation__icon-question-mark-circle">
                                        <use xlink:href="/Images/icon-sprite.svg#icon-question-mark-circle"></use>
                                    </svg>
                                </div>
                                <div class="primary-header-navigation__label">Help</div>
                            </button>
                            <ul class="ax-dropdown__panel primary-header-navigation__dropdown-panel" :class="{'primary-header-navigation__dropdown-panel--open': isMainMenuOpen['Help']}">
                                <li>
                                    <a href="https://support.acculynx.com/" target="_blank" class="primary-header-navigation__link">Knowledge Base</a>
                                </li>
                                <li>
                                    <button class="primary-header-navigation__link" v-on:click="PopSubmitAnIdeaModal()">Submit an Idea</button>
                                </li>
                                <li>
                                    <button class="primary-header-navigation__link" v-on:click="PopSubmitTicketModal()">I Have a Problem</button>
                                </li>
                            </ul>
                        </div>

                        
                        <div class="primary-header-navigation__dropdown ax-dropdown d-md-none">
                            <a class="primary-header-navigation__button" href="/Authentication/SignOut" target="_self">
                                <div class="primary-header-navigation__icon-container">
                                    <svg class="primary-header-navigation__icon primary-header-navigation__icon-arrow-exiting">
                                        <use xlink:href="/Images/icon-sprite.svg#icon-arrow-exiting"></use>
                                    </svg>
                                </div>
                                <div class="primary-header-navigation__label">Sign Out</div>
                            </a>
                        </div>
                    </nav>
                </div>

                <div class="header-search flex flex-end-stretch flex-grow">
                    <ax-site-search v-click-to-close="{'callback': CloseSearch, 'include': ['js-search-toggle-sm', 'js-search-toggle-md'] }" v-show="isVueLoaded" :class="{'show-search-bar': isSearchOpen}" identity="js-site-search"></ax-site-search>

                    <!-- placeholder search -->
                    <section class="header-search__inner flex flex-grow bg--gray-ef" v-show="!isVueLoaded">
                        <div class="flex flex-grow header-search__AXTA">
                            <div class="form-v3-text">
                                <input type="search" class="form-v3-text__input" />
                                <label class="form-v3-text__label">Job #, Customer Name or Address</label>
                            </div>
                            <div class="p-x--lg">
                                <svg class="icon-search"><use xlink:href="/Images/icon-sprite.svg#icon-magnifying-glass"></use></svg>
                            </div>
                        </div>
                    </section>
                </div>
                <section class="d-none d-md-flex">
                    <div class="primary-header-navigation__dropdown">
                        <button class="primary-header-navigation__button header-search__button--md" id="js-search-toggle-md" v-on:click="OnSearchToggle(!isSearchOpen);">
                            <div class="primary-header-navigation__icon-container">
                                <svg class="primary-header-navigation__icon icon icon-search f--white"><use xlink:href="/Images/icon-sprite.svg#icon-magnifying-glass"></use></svg>
                            </div>
                            <div class="primary-header-navigation__label">Search</div>
                        </button>
                    </div>
                    <div class="primary-header-navigation__dropdown ax-dropdown">
                        <button class="primary-header-navigation__button primary-header-navigation__button--orange">
                            <div class="primary-header-navigation__icon-container">
                                <svg class="primary-header-navigation__icon header-help__icon-question-mark-circle"><use xlink:href="/Images/icon-sprite.svg#icon-question-mark-circle"></use></svg>
                            </div>
                            <div class="primary-header-navigation__label">Help</div>
                        </button>
                        <ul class="primary-header-navigation__dropdown-panel ax-dropdown__panel ax-dropdown__panel--flush-right">
                            <li>
                                <a href="https://support.acculynx.com/" target="_blank" class="primary-header-navigation__link">Knowledge Base</a>
                            </li>
                            <li>
                                <button class="primary-header-navigation__link" v-on:click="PopSubmitAnIdeaModal()">Submit an Idea</button>
                            </li>
                            <li>
                                <button class="primary-header-navigation__link" v-on:click="PopSubmitTicketModal()">I Have a Problem</button>
                            </li>
                        </ul>
                    </div>
                    <div class="primary-header-navigation__dropdown" id="myLauncher" onClick="openWidget()" style="display: none;">
                        <button class="primary-header-navigation__button primary-header-navigation__button--orange">
                            <div class="primary-header-navigation__icon-container">
                                <ax-svg icon="chat-bubble" class="primary-header-navigation__icon" width="18" height="18"></ax-svg>
                            </div>
                            <div class="primary-header-navigation__label">Chat</div>
                        </button>
                    </div>
                </section>
            </div>
        </div>

        <go-to-top></go-to-top>
        <offline-banner></offline-banner>
        <user-session-alert company-id="707968e7-0d10-4801-8305-13aff1daf8bf" session-id="yyipkxpwg43gixl3ci01anqp" company-name="Umbrella Claims &amp; Property Solutions" :is-admin='false'></user-session-alert>
    </ax-app>
</header>

<script src="https://static.alstatic.net/eventbus-1b18eb42c40cc2182b3f.bundle.js" crossorigin integrity='sha512-F7+fdcb+dS2bEOVFDIghGQNqU+BV/Szy00XCEa846Bp1zxsjwK1j4jyu18XFfkPs799Qm0sWlyaoXWnW9wgz+w=='></script>
<script src="https://static.alstatic.net/vendor-ckeditor-4b9a601d74742764aed3.bundle.js" crossorigin integrity='sha512-8QcGGlOC84CkiMFQFbuZHhvs02W46bwPVPJ+8zPmRCyR71Jz0FFhoNY2PO58RhJy5S68oUaI0uLpVVU7mgk7Og=='></script>
<script src="https://static.alstatic.net/mainheader-4b86468535a68ae2c43f.bundle.js" crossorigin type='module' integrity='sha512-yC8eaNUMD0g5oNzSujQZav43NP9iDprhSRwLGLPRz+yexd4Q3VOlYUhJboHn9uK9eu1EsD+2o9t/4Zt1/MmaUg=='></script>
<script type="text/javascript">
    window.onload = function () {
        if (document.getElementById("flashPlaceholder")) {
            document.getElementById("vue-header").onclick = function (event) {
                if (event) {
                    let path = event.path || (event.composedPath && event.composedPath());
                    if (path.some(p => p.localName == "button")) {
                        event.preventDefault();
                    }
                }
            }
        }
    }
</script>



<div id="main-content-wrapper" 
        ng-controller="NewLeadCtrl"
    >
    






<div ng-init="init('00000000-0000-0000-0000-000000000000', '2bde0f37-77ca-4733-9b4e-aaca2078a0fd', '707968e7-0d10-4801-8305-13aff1daf8bf')" ng-cloak>
    <div id="page-header-wrapper" scroll-calculator="true">
        <h1 class="page-header">
            {{isEditingLead ? "Edit Existing Lead" : "Create New Lead"}}
            <span class="location-text" ng-if="!isEditingLead"> for Umbrella Claims &amp; Property Solutions</span>
        </h1>
    </div>
        
    <form id="createNewLeadForm" class="form-in-field clearfix" leads-validators novalidate>
        <div class="centering-container">
            <fieldset class="main-info">
                <legend>Lead Information</legend>
            <div id="placeDiv"></div>
            <div id="results"></div>
                <div class="input-row stacked">
                    <div class="input-col stacked-on-mobile bs3-col-sm-6">
                        <label ax-test-read="lead-form__input-label--first-name" for="first-name">First Name</label>
                        <input ax-test-write="lead-form__input-text--first-name" type="text" data-name="First Name" data-type="text" name="first-name" id="first-name" ng-model="contact.FirstName" maxlength="50">
                    </div>
                    <div class="input-col bs3-col-sm-6">
                        <label ax-test-read="lead-form__input-label--last-name" for="last-name">Last Name</label>
                        <input ax-test-write="lead-form__input-text--last-name" duplicate-job-checker-v2 field-type="name" contact="contact" matches="nameMatches" match-types="matchTypes" type="text" data-name="Last Name" data-type="text" name="last-name" id="last-name" ng-model="contact.LastName" maxlength="50">
                    </div>
                </div>

                <div ng-if="nameMatches.length">
                    <job-matches field-type="name" matches="nameMatches" match-types="matchTypes" create-lead-from-match="createLeadFromMatch(jobId, matchTypes, resultType)"></job-matches>
                </div>

            <div class="input-row stacked">
                <div class="input-col bs3-col-sm-12">
                    <label ax-test-read="lead-form__input-label--company-name" for="company-name">Company Name</label>
                    <input ax-test-write="lead-form__input-text--company-name" duplicate-job-checker-v2 field-type="company" contact="contact" matches="companyMatches" match-types="matchTypes" type="text" data-name="Company Name" data-type="text" name="company-name" id="company-name" ng-model="contact.CompanyName" maxlength="100">
                </div>
            </div>

            <div ng-if="companyMatches.length">
                <job-matches field-type="company" matches="companyMatches" match-types="matchTypes" create-lead-from-match="createLeadFromMatch(jobId, matchTypes, resultType)"></job-matches>
            </div>

            <div class="input-row">
                <div class="input-col bs3-col-sm-12">
                    <label ax-test-read="lead-form__input-label--cross-reference" for="cross-reference">Cross Reference</label>
                    <input ax-test-write="lead-form__input-text--cross-reference" type="text" data-name="Cross Reference" data-type="text" name="cross-reference" id="cross-reference" ng-model="contact.CrossReference" maxlength="250">
                </div>
            </div>
            <div class="input-row">
                <div class="input-col stacked-on-mobile bs3-col-sm-4">
                    <div class="branded-select">
                        <label ax-test-read="lead-form__input-label--job-category" for="job-type">Job Category</label>
                        <select ax-test-click="lead-form__input-select--job-category" ng-model="jobCategory" id="job-type" data-type="select" data-name="Job Category" ng-options="category as category.Name for category in jobCategories | orderBy: ['Name']" ng-disabled="isLoadingFormData">
                            <option style="display: none" value=""></option>
                        </select>
                    </div>
                </div>
                <div class="input-col stacked-on-mobile bs3-col-sm-4">
                    <div class="branded-select">
                        <label ax-test-read="lead-form__input-label--work-type" for="work-type">Work Type</label>
                        <select ax-test-click="lead-form__input-select--work-type" ng-model="jobWorkType" id="work-type" data-type="select" data-name="Work Type" ng-options="type as type.Name for type in workTypes | orderBy: ['Name']" ng-disabled="isLoadingFormData">
                            <option style="display: none" value=""></option>
                        </select>
                    </div>
                </div>
                <div class="input-col bs3-col-sm-4">
                    <div class="dropdown form-dropdown branded-select multiselect">
                        <label ax-test-read="lead-form__input-label--trade-type" for="job-type">Trade Type</label>
                        <select ax-test-click="lead-form__input-multiselect--trade-type" ng-model="jobTrades" al-multiple-select data-options="trades" data-key="Name" data-type="multiselect" data-name="Trade Type" ng-disabled="isLoadingFormData"></select>
                    </div>
                </div>
            </div>
            <div class="input-row">
                <div class="input-col bs3-col-xs-12">
                    <div class="branded-select">
                        <label ax-test-read="lead-form__input-label--lead-source" for="lead-source">Lead Source</label>
                        <select ax-test-click="lead-form__input-select--lead-source" ng-model="JobDetail.LeadSourceID" id="lead-source" data-type="select" data-name="Source of Lead" ng-options="source.LeadSourceID as source.FullName for source in leadSources" ng-disabled="isLoadingFormData">
                            <option style="display: none" value=""></option>
                        </select>
                    </div>
                </div>
            </div>
            <div id="lead-phone-numbers" class="input-row" ng-class="{'stacked':phoneMatches.length}">
                <div class="" ng-repeat="phone in phones">
                    <div class="input-col stacked-on-mobile bs3-col-sm-6">
                        <label ax-test-read="lead-form__input-label--phone" for="phone-1">Phone</label>
                        <input ax-test-write="lead-form__input-tel--phone" phone-auto-tabber ui-mask="(999) 999-9999" ui-options="{clearOnBlur: false}" duplicate-job-checker-v2 field-type="phone" phone="phone" matches="phoneMatches" match-types="matchTypes" type="tel" name="phone-1" data-name="Phone" data-type="phone" ng-model="phone.Value" allow-invalid-value="{{isLoadingFormData}}" ng-blur="CheckOptInStatus(phone.Value)" ng-change="hideCheckbox(phone)" />
                        <button class="btn btn-text show-more-options" mobile-show-more>. . .</button>
                    </div>
                    <div class="bs3-col-sm-6 more-options">
                        <div class="input-col bs3-col-xs-4">
                            <label ax-test-read="lead-form__input-label--phone-ext" for="ext-1">Ext</label>
                            <input ax-test-write="lead-form__input-text--phone-ext" type="text" name="ext-1" ng-model="phone.Ext">
                        </div>
                        <div class="input-col bs3-col-xs-4">
                            <div class="branded-select">
                                <label ax-test-read="lead-form__input-label--phone-type" for="type-1">Type</label>
                                <select ax-test-click="lead-form__input-select--phone-type" ng-model="phone.Description" data-type="select" data-name="Phone Type">
                                    <option disabled selected value=""></option>
                                    <option value="home">Home</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="work">Work</option>
                                </select>
                            </div>
                        </div>
                        <div class="input-col bs3-col-xs-2 col-primary">
                            <label ax-test-read="lead-form__input-label--phone-primary" for="primary-phone">Primary</label>
                            <div class="branded-radio">
                                <input ax-test-read="lead-form__input-radio--phone-primary" ax-test-click="lead-form__input-radio--phone-primary" id="primary-phone-{{$index}}" type="radio" name="phone" ng-model="phone.IsDefault" ng-value="true" ng-change="newPhoneSelected($index)">
                                <label ax-test-read="lead-form__input-label--phone-primary-yes" for="primary-phone-{{$index}}"></label>
                            </div>
                        </div>
                        <div class="input-col bs3-col-xs-2">
                            <span class="clear-form-input-icon-wrapper" ng-show="$index > 0" ng-click="removePhone($index)">
                                <label ax-test-read="lead-form__input-label--phone-delete" class="delete-label">Delete</label>
                                <svg ax-test-read="lead-form__input-icon--phone-delete" ax-test-click="lead-form__input-icon--phone-delete" ax-test-hover="lead-form__input-icon--phone-delete" class="clear-form-input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30"><path d="M11.5 0c2.73 2.72 5.56 5.55 8.5 8.49c2.95-2.94 5.77-5.77 8.49-8.49c2.17 2.17 4.27 4.27 6.51 6.51 c-2.67 2.67-5.53 5.53-8.49 8.49c2.94 2.95 5.77 5.78 8.49 8.5c-2.17 2.17-4.27 4.27-6.51 6.51c-2.68-2.67-5.53-5.53-8.49-8.49 c-2.95 2.94-5.78 5.77-8.5 8.49c-2.17-2.17-4.27-4.27-6.51-6.5c2.67-2.67 5.53-5.53 8.49-8.49C10.54 12.05 7.72 9.22 5 6.5 C7.17 4.34 9.27 2.24 11.5 0z"></path></svg>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
            <div ng-if="phoneMatches.length">
                <job-matches field-type="phone" matches="phoneMatches" match-types="matchTypes" create-lead-from-match="createLeadFromMatch(jobId, matchTypes, resultType)"></job-matches>
            </div>
            <div class="input-row button-more-fields" ng-hide="phones.length == 3">
                <button ax-test-read="lead-form__button--add-phone" ax-test-click="lead-form__button--add-phone" id="add-phone" type="button" class="btn btn-text btn-add-more" ng-click="addPhone()">+ Add Another Phone</button>
            </div>
            <div id="lead-email-addresses" class="input-row" ng-class="{'stacked':emailMatches.length}">
                <div class="" ng-repeat="email in emails">
                    <div class="input-col stacked-on-mobile bs3-col-sm-10">
                        <label ax-test-read="lead-form__input-label--email" for="email-1">Email</label>
                        <input ax-test-write="lead-form__input-email--email" duplicate-job-checker-v2 field-type="email" email="email" matches="emailMatches" match-types="matchTypes" type="email" name="email-1" data-name="Email" data-type="email" id="email-1" ng-model="email.Value">
                        <button class="btn btn-text show-more-options" mobile-show-more>. . .</button>
                    </div>
                    <div class="bs3-col-sm-2 more-options">
                        <div class="input-col bs3-col-xs-6 col-primary">
                            <label ax-test-read="lead-form__input-label--email-primary" for="primary-email">Primary</label>
                            <div class="branded-radio">
                                <input ax-test-read="lead-form__input-radio--email-primary" ax-test-click="lead-form__input-radio--email-primary" id="primary-email-{{$index}}" type="radio" name="primary-email" ng-model="email.IsDefault" ng-value="true" ng-change="newEmailSelected($index)">
                                <label ax-test-read="lead-form__input-label--email-primary-yes" for="primary-email-{{$index}}"></label>
                            </div>
                        </div>
                        <div class="input-col bs3-col-xs-6">
                            <span class="clear-form-input-icon-wrapper" ng-show="$index > 0" ng-click="removeEmail($index)">
                                <label ax-test-read="lead-form__input-label--email-delete" class="delete-label">Delete</label>
                                <svg ax-test-read="lead-form__input-icon--email-delete" ax-test-click="lead-form__input-icon--email-delete" ax-test-hover="lead-form__input-icon--email-delete" class="clear-form-input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 30"><path d="M11.5 0c2.73 2.72 5.56 5.55 8.5 8.49c2.95-2.94 5.77-5.77 8.49-8.49c2.17 2.17 4.27 4.27 6.51 6.51 c-2.67 2.67-5.53 5.53-8.49 8.49c2.94 2.95 5.77 5.78 8.49 8.5c-2.17 2.17-4.27 4.27-6.51 6.51c-2.68-2.67-5.53-5.53-8.49-8.49 c-2.95 2.94-5.78 5.77-8.5 8.49c-2.17-2.17-4.27-4.27-6.51-6.5c2.67-2.67 5.53-5.53 8.49-8.49C10.54 12.05 7.72 9.22 5 6.5 C7.17 4.34 9.27 2.24 11.5 0z"></path></svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div ng-if="emailMatches.length">
                <job-matches field-type="email" matches="emailMatches" match-types="matchTypes" create-lead-from-match="createLeadFromMatch(jobId, matchTypes, resultType)"></job-matches>
            </div>
            <div class="input-row button-more-fields" ng-hide="emails.length == 3">
                <button ax-test-read="lead-form__button--add-email" ax-test-click="lead-form__button--add-email" id="add-email" type="button" class="btn btn-text btn-add-more" ng-click="addEmail()">+ Add Another Email</button>
            </div>
            <!--Enum: 1. Billing - 2. Shipping - 3. Location-->
            <div class="main-address-wrapper" details-updater>
                <div id="location-address-wrapper" class="address-container">
                    <header class="input-row">
                        <h4 class="bs3-col-xs-6">Location Address:</h4>
                    </header>
                    <div id="location-address-details" data-name="Location Address">
                        <div class="input-row stacked autocomplete-address-overlay">
                            <div class="input-col stacked-on-mobile bs3-col-sm-8">
                                <label ax-test-read="lead-form__input-label--location-address-street-one" for="street_number">Street<span class="required-star" ng-show="addressValidator['Location Address'].active">*</span></label>
                                <input ax-test-write="lead-form__input-text--location-address-street-one" duplicate-job-checker-v2 field-type="location" location-address="locationAddress" matches="addressMatches" match-types="matchTypes" autocomplete="nope" class="google-address-autocomplete" type="text" id="street_number" ng-disabled="isLoadingFormData" ng-model="locationAddress.Street" data-type="address" ng-required="addressValidator['Location Address'].active" placeholder="{{isLoadingFormData ? 'Loading' : ''}}"></input>
                                <ax-google-address-typeahead-results channel="createleads" address-type="location" on-item-select="fillInAddress(type, streetId, place)" results="locationResults" input-field-id="street_number" ng-model="locationAddress.Street"></ax-google-address-typeahead-results>
                            </div>
                            <div class="input-col bs3-col-sm-4">
                                <label ax-test-read="lead-form__input-label--location-address-street-two" for="route">Suite/Apt/Unit</label>
                                <input ax-test-write="lead-form__input-text--location-address-street-two" type="text" id="suite" ng-model="locationAddress.Street2" data-type="text"></input>
                            </div>
                        </div>
                        <div class="input-row" ng-class="{'stacked':addressMatches.length}">
                            <div class="input-col stacked-on-mobile bs3-col-sm-6">
                                <label ax-test-read="lead-form__input-label--location-address-city" for="locality">City<span class="required-star" ng-show="addressValidator['Location Address'].active">*</span></label>
                                <input ax-test-write="lead-form__input-text--location-address-city" type="text" id="locality" ng-model="locationAddress.City" data-type="text" ng-required="addressValidator['Location Address'].active"></input>
                            </div>
                            <div class="bs3-col-sm-6">
                                <div class="input-col bs3-col-xs-4">
                                    <div class="branded-select">
                                        <label ax-test-read="lead-form__input-label--location-address-state" for="administrative_area_level_1">State<span class="required-star" ng-show="addressValidator['Location Address'].active">*</span></label>
                                        <select ax-test-click="lead-form__input-select--location-address-state" ng-model="locationAddress.StateID" data-type="select" ng-required="addressValidator['Location Address'].active" ng-options="state.State.StateID as state.State.StateAbbreviation for state in states">
                                            <option style="display: none" value=""></option>
                                        </select>
                                    </div>
                                    
                                </div>
                                <div class="input-col bs3-col-xs-4">
                                    <label ax-test-read="lead-form__input-label--location-address-zip" for="postal_code">Zip<span class="required-star" ng-show="addressValidator['Location Address'].active">*</span></label>
                                    <input ax-test-write="lead-form__input-text--location-address-zip" type="text" id="postal_code" ng-model="locationAddress.Zip" data-type="text" ng-required="addressValidator['Location Address'].active"></input>
                                </div>
                                <div class="input-col bs3-col-xs-4">
                                    <div class="branded-select">
                                        <label ax-test-read="lead-form__input-label--location-address-country" for="country">Country</label>
                                        <select ax-test-click="lead-form__input-select--location-address-country" ng-model="locationAddress.CountryID" id="country" data-type="select" ng-options="country.Country.CountryID as country.Country.CountryCode for country in countries">
                                            <option style="display: none" value=""></option>
                                        </select>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ng-if="addressMatches.length">
                        <job-matches field-type="location" matches="addressMatches" match-types="matchTypes" create-lead-from-match="createLeadFromMatch(jobId, matchTypes, resultType)"></job-matches>
                    </div>
                </div>

                    <div id="location-image-wrapper" class="input-row">
                        <div ng-if="isAndroidDevice">
                            <span style="color: red;">Warning Android Users:</span> Using the camera to capture a photo may result in the web-page reloading. It is recommended to take a picture outside the site, save it, and then upload it from your device.
                        </div>
                        <h4 class="bs3-col-sm-12">Location Photo:</h4>
                        <div class="bs3-col-sm-6">
                            <span id="location-image-add" class="btn btn-secondary btn-block btn-file">
                                Add Image
                                <input type="file" image-previewer ng-file-select="onFileSelect($files)" accept="image/png, image/jpeg, image/heic, image/heif" />
                            </span>
                            <div id="location-image-container" class="bs3-col-xs-12"></div>
                            <div class="pull-right">
                                <button id="clear-image" class="btn btn-text" style="display: none;" ng-click="removeImage()">Remove Image</button>
                                <span id="location-image-change" class="btn btn-secondary btn-file">
                                    Change Image
                                    <input ng-file-select="onFileSelect($files)" type="file" image-previewer accept="image/png, image/jpeg, image/heic, image/heif" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div id="mailing-address-wrapper" ng-class="{'showing' : mailing.location == 'New Address'}" class="address-container">
                        <header class="input-row">
                            <h4 class="bs3-col-sm-12">Mailing Address:</h4>
                            <div class="bs3-col-sm-12">
                                <div id="mailing-filters" class="checkbox-label-wrapper same-as-wrapper">
                                    <div class="branded-select">
                                        <select id="mailing-select-filter" ng-disabled="isLoadingFormData" ng-model="mailing.location" value="location" data-wrapper="billing-address" ng-change="addressFilterChange('Mailing Address', mailing.location)">
                                            <option value="Location Address" selected>Same as Location</option>
                                            <option ng-disabled="billing.location == 'Mailing Address'" value="Billing Address">Same as Billing</option>
                                            <option>New Address</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div id="mailing-address-details" class="details" data-name="Mailing Address">
                            <div class="input-row stacked autocomplete-address-overlay">
                                <div class="input-col stacked-on-mobile bs3-col-sm-8">
                                    <label ax-test-read="lead-form__input-label--mailing-address-street-one" for="mailing_street_number">Street<span class="required-star" ng-show="addressValidator['Mailing Address'].active">*</span></label>
                                    <input ax-test-write="lead-form__input-text--mailing-address-street-one" class="google-address-autocomplete" type="text" id="mailing_street_number" ng-model="mailingAddress.Street" data-type="address" ng-required="addressValidator['Mailing Address'].active" placeholder="" autocomplete="off"></input>
                                <ax-google-address-typeahead-results channel="createleadmailingaddress" address-type="mailing" on-item-select="fillInAddress(type, streetId, place)" results="mailingResults" input-field-id="mailing_street_number" ng-model="mailingAddress.Street"></ax-google-address-typeahead-results>
                                </div>
                                <div class="input-col bs3-col-sm-4">
                                    <label ax-test-read="lead-form__input-label--mailing-address-street-two" for="mailing_route">Suite/Apt/Unit</label>
                                    <input ax-test-write="lead-form__input-text--mailing-address-street-two" type="text" id="mailing_suite" ng-model="mailingAddress.Street2" data-type="text"></input>
                                </div>
                            </div>
                            <div class="input-row">
                                <div class="input-col stacked-on-mobile bs3-col-sm-6">
                                    <label ax-test-read="lead-form__input-label--mailing-address-city" for="mailing_locality">City<span class="required-star" ng-show="addressValidator['Mailing Address'].active">*</span></label>
                                    <input ax-test-write="lead-form__input-text--mailing-address-city" type="text" id="mailing_locality" ng-model="mailingAddress.City" data-type="text" ng-required="addressValidator['Mailing Address'].active"></input>
                                </div>
                                <div class="bs3-col-sm-6">
                                    <div class="input-col bs3-col-xs-4">
                                        <div class="branded-select">
                                            <label ax-test-read="lead-form__input-label--mailing-address-state" for="mailing_administrative_area_level_1">State<span class="required-star" ng-show="addressValidator['Mailing Address'].active">*</span></label>
                                            <select ax-test-click="lead-form__input-select--mailing-address-state" ng-model="mailingAddress.StateID" data-type="select" ng-required="addressValidator['Mailing Address'].active" ng-options="state.State.StateID as state.State.StateAbbreviation for state in states">
                                                <option style="display: none" value=""></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="input-col bs3-col-xs-4">
                                        <label ax-test-read="lead-form__input-label--mailing-address-zip" for="mailing_postal_code">Zip<span class="required-star" ng-show="addressValidator['Mailing Address'].active">*</span></label>
                                        <input ax-test-write="lead-form__input-text--mailing-address-zip" type="text" id="mailing_postal_code" ng-model="mailingAddress.Zip" data-type="text" ng-required="addressValidator['Mailing Address'].active"></input>
                                    </div>
                                    <div class="input-col bs3-col-xs-4">
                                        <div class="branded-select">
                                            <label ax-test-read="lead-form__input-label--mailing-address-country" for="mailing_country">Country</label>
                                            <select ax-test-click="lead-form__input-select--mailing-address-country"  ng-model="mailingAddress.CountryID" data-type="select" ng-options="country.Country.CountryID as country.Country.CountryCode for country in countries">
                                                <option style="display: none" value=""></option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="billing-address-wrapper" ng-class="{'showing' : billing.location == 'New Address'}" class="address-container">
                        <header class="input-row">
                            <h4 class="bs3-col-sm-12">Billing Address:</h4>
                            <div class="bs3-col-sm-12">
                                <div id="billing-filters" class="checkbox-label-wrapper same-as-wrapper">
                                    <div class="branded-select">
                                        <select id="billing-select-filter" ng-disabled="isLoadingFormData" ng-model="billing.location" value="location" data-wrapper="billing-address" ng-change="addressFilterChange('Billing Address', billing.location)">
                                            <option value="Location Address" selected>Same as Location</option>
                                            <option value="Mailing Address" ng-disabled="mailing.location == 'Billing Address'">Same as Mailing</option>
                                            <option>New Address</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div id="billing-address-details" class="details" data-name="Billing Address">
                            <div class="input-row stacked autocomplete-address-overlay">
                                <div class="input-col stacked-on-mobile bs3-col-sm-8">
                                    <label ax-test-read="lead-form__input-label--billing-address-street-one" for="billing_street_number">Street<span class="required-star" ng-show="addressValidator['Billing Address'].active">*</span></label>
                                    <input ax-test-write="lead-form__input-text--billing-address-street-one" class="google-address-autocomplete" type="text" id="billing_street_number" ng-model="billingAddress.Street" data-type="address" ng-required="addressValidator['Billing Address'].active" placeholder="" autocomplete="off"></input>
                                <ax-google-address-typeahead-results channel="createleadbillingaddress" address-type="billing" on-item-select="fillInAddress(type, streetId, place)" results="billingResults" input-field-id="billing_street_number" ng-model="billingAddress.Street"></ax-google-address-typeahead-results>
                                </div>
                                <div class="input-col bs3-col-sm-4">
                                    <label ax-test-read="lead-form__input-label--billing-address-street-two" for="billing_route">Suite/Apt/Unit</label>
                                    <input ax-test-write="lead-form__input-text--billing-address-street-two" type="text" id="billing_suite" ng-model="billingAddress.Street2" data-type="text"></input>
                                </div>
                            </div>
                            <div class="input-row autocomplete-address-overlay">
                                <div class="input-col stacked-on-mobile bs3-col-sm-6">
                                    <label ax-test-read="lead-form__input-label--billing-address-city" for="billing_locality">City<span class="required-star" ng-show="addressValidator['Billing Address'].active">*</span></label>
                                    <input ax-test-write="lead-form__input-text--billing-address-city" type="text" id="billing_locality" ng-model="billingAddress.City" data-type="text" ng-required="addressValidator['Billing Address'].active"></input>
                                </div>
                                <div class="bs3-col-sm-6">
                                    <div class="input-col bs3-col-xs-4">
                                        <div class="branded-select">
                                            <label ax-test-read="lead-form__input-label--billing-address-state" for="billing_administrative_area_level_1">State<span class="required-star" ng-show="addressValidator['Billing Address'].active">*</span></label>
                                            <select ax-test-select="lead-form__input-select--billing-address-state" ng-model="billingAddress.StateID" data-type="select" ng-required="addressValidator['Billing Address'].active" ng-options="state.State.StateID as state.State.StateAbbreviation for state in states">
                                                <option style="display: none" value=""></option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="input-col bs3-col-xs-4">
                                        <label ax-test-read="lead-form__input-label--billing-address-zip" for="billing_postal_code">Zip<span class="required-star" ng-show="addressValidator['Billing Address'].active">*</span></label>
                                        <input ax-test-write="lead-form__input-text--billing-address-zip" type="text" id="billing_postal_code" ng-model="billingAddress.Zip" data-type="text" ng-required="addressValidator['Billing Address'].active"></input>
                                    </div>
                                    <div class="input-col bs3-col-xs-4">
                                        <div class="branded-select">
                                            <label ax-test-read="lead-form__input-label--billing-address-country" for="billing_country">Country</label>
                                            <select ax-test-select="lead-form__input-select--billing-address-country" ng-model="billingAddress.CountryID" data-type="select" ng-options="country.Country.CountryID as country.Country.CountryCode for country in countries">
                                                <option style="display: none" value=""></option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset ng-show="hasInsurance" id="insurance-information">
                <legend>
                    Insurance Information
                    <div id="toggle-insurance" class="branded-switch">
                        
                        <input type="checkbox" id="toggle-insurance-checkbox" class="switch-checkbox" ng-model="mobileInsuranceEnabled">
                        <label class="switch-label" for="toggle-insurance-checkbox">
                            <span class="switch-on">YES</span>
                            <span class="switch-knob"></span>
                            <span class="switch-off">NO</span>
                        </label>
                    </div>
                </legend>
                <div ng-class="{'hidden-xs' : !mobileInsuranceEnabled}">
                    <div class="input-row stacked">
                        <div class="input-col stacked-on-mobile bs3-col-sm-6">
                            <label ax-test-read="lead-form__input-label--insurance-company" for="insurance-company">Insurance Company</label>
                            <div class="branded-select">
                                <select ax-test-click="lead-form__input-select--insurance-company" data-insurance="true" ng-disabled="isLoadingFormData" ng-model="insuranceCompany" ng-change="selectedInsuranceCompany(insuranceCompany)" name="insurance-company" id="insurance-company" data-type="select" data-name="Insurance Company" ng-options="company as company.Name for company in insuranceCompanies | orderBy: ['Name']">
                                    <option style="display: none" value=""></option>
                                </select>
                            </div>
                        </div>
                        <div class="input-col bs3-col-sm-6 flex flex-start-center">
                            <div class="branded-checkbox">
                                <input ax-test-click="lead-form__input-checkbox--insurance-company-other" type="checkbox" id="show-insurance-company-other" ng-model="otherInsuranceCompanyEnabled" ng-change="toggleOtherCompanyName()" ng-disabled="!hasOtherInsurance">
                                <label ax-test-read="lead-form__input-label--insurance-company-other" class="checkbox-label" for="show-insurance-company-other">
                                    Insurance Company Not Listed
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="input-row stacked" ng-show="otherInsuranceCompanyEnabled">
                        <div class="input-col bs3-col-sm-12">
                            <label ax-test-read="lead-form__input-label--insurance-other" for="insurance-company-other">Other</label>
                            <input ax-test-write="lead-form__input-text--insurance-other" data-insurance="true" type="text" ng-disabled="!otherInsuranceCompanyEnabled" ng-model="JobDetail.InsuranceCompanyOtherName" name="insurance-company-other" id="insurance-company-other">
                        </div>
                    </div>
                    <div class="input-row stacked">
                        <div class="input-col stacked-on-mobile bs3-col-sm-6">
                            <label ax-test-read="lead-form__input-label--insurance-damage-location" for="damage-location">Damage Location</label>
                            <input ax-test-write="lead-form__input-text--insurance-damage-location" data-insurance="true" ng-model="JobDetail.DamageLocation" type="text" name="damage-location" id="damage-location" data-type="text" data-name="Damage Location">
                        </div>
                        <div class="input-col bs3-col-sm-6 datepicker-wrapper">
                            <label ax-test-read="lead-form__input-label--insurance-date-of-loss" for="date-of-loss">Date of Loss</label>
                            <div class="datepicker-wrapper">
                                <input ax-test-click="lead-form__input-datepicker--insurance-date-of-loss" readonly data-insurance="true" ax-datepicker-popup use-native-picker type="text" data-name="Date of Loss" name="date-of-loss" style="cursor: pointer; display: none;" class="form-control" ng-model="JobDetail.DateOfLoss" is-open="lossOpened" min-date="minDate" datepicker-options="dateOptions" ng-click="lossOpened = !lossOpened" datepicker-popup="dd-MMMM-yyyy" close-text="Close" placeholder="Date" />
                                <input ax-test-read="lead-form__input-text--insurance-date-of-loss" data-insurance="true" use-native-picker type="date" name="date-of-loss" data-name="Date of Loss" style="cursor: pointer; display: none;" class="form-control" ng-class="{'date-chosen' : JobDetail.DateOfLoss != null}" ng-model="JobDetail.DateOfLoss" placeholder="Date" />
                            </div>
                        </div>
                    </div>
                    <div class="input-row">
                        <div class="input-col stacked-on-mobile bs3-col-sm-6">
                            <label ax-test-read="lead-form__input-label--insurance-claim-filed" for="claim-filed">Claim Filed?</label>
                            <div class="bs3-col-xs-3">
                                <div class="branded-checkbox">
                                    <input ax-test-click="lead-form__input-checkbox--insurance-claim-filed-yes-date" data-insurance="true" type="checkbox" id="claim-filed-checkbox" class="switch-checkbox" data-name="Claim Filed" data-type="checkbox" ng-model="JobDetail.ClaimField">
                                    <label ax-test-read="lead-form__input-label--insurance-claim-filed-yes" class="checkbox-label" for="claim-filed-checkbox">
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div class="bs3-col-xs-9 datepicker-wrapper" ng-show="JobDetail.ClaimField">
                                <div class="datepicker-wrapper">
                                    <input ax-test-click="lead-form__input-datepicker--insurance-claim-filed-date" readonly data-insurance="true" ax-datepicker-popup use-native-picker type="text" name="claim-filed-date" style="cursor: pointer; display: none;" class="form-control" ng-model="JobDetail.ClaimFiledDate" is-open="claimFiledOpened" min-date="minDate" datepicker-options="dateOptions" ng-click="claimFiledOpened = !claimFiledOpened" datepicker-popup="dd-MMMM-yyyy" close-text="Close" placeholder="Date" />
                                    <input ax-test-read="lead-form__input-text--insurance-claim-filed-date" data-insurance="true" use-native-picker type="date" name="date-of-loss" style="cursor: pointer; display: none;" class="form-control" ng-class="{'date-chosen' : JobDetail.ClaimFiledDate != null}" ng-model="JobDetail.ClaimFiledDate" placeholder="Date">
                                </div>
                            </div>
                        </div>
                        <div class="input-col stacked-on-mobile bs3-col-sm-3">
                            <label ax-test-read="lead-form__input-label--insurance-claim-number" for="claim-number">Claim Number</label>
                            <input ax-test-write="lead-form__input-text--insurance-claim-number" data-insurance="true" ng-model="JobDetail.ClaimNumber" type="text" name="claim-number" id="claim-number" min="0" data-type="text" data-name="Claim Number">
                        </div>
                        <div class="input-col bs3-col-sm-3">
                            <label ax-test-read="lead-form__input-label--insurance-has-paperwork" for="has-paperwork">Has Paperwork?</label>
                            <div class="bs3-col-xs-6">
                                <div class="branded-checkbox">
                                    <input ax-test-click="lead-form__input-checkbox--insurance-has-paperwork-yes" data-insurance="true" type="checkbox" id="has-paperwork-checkbox" class="switch-checkbox" ng-model="JobDetail.HavePaperwork" />
                                    <label ax-test-read="lead-form__input-label--insurance-has-paperwork-yes" class="checkbox-label" for="has-paperwork-checkbox">
                                        Yes
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="input-row stacked">
                        <div class="input-col stacked-on-mobile bs3-col-sm-12">
                            <label ax-test-read="lead-form__input-label--insurance-adjuster-name" for="adjuster-name">Adjuster Name</label>
                            <input ax-test-write="lead-form__input-text--insurance-adjuster-name" data-insurance="true" ng-model="JobDetail.AdjusterName" type="text" name="adjuster-name" id="adjuster-name" data-type="text" data-name="Adjuster Name">
                        </div>
                    </div>
                    <div class="input-row stacked">
                        <div class="input-col stacked-on-mobile bs3-col-sm-6">
                            <label ax-test-read="lead-form__input-label--insurance-adjuster-phone" for="adjuster-phone">Adjuster Phone</label>
                            <input ax-test-write="lead-form__input-tel--insurance-adjuster-phone" data-insurance="true" ui-mask="(999) 999-9999" ui-options="{clearOnBlur: false}" ng-model="JobDetail.AdjusterPhone" type="tel" name="adjuster-phone" id="adjuster-phoner" data-type="phone" data-name="Adjuster Phone" allow-invalid-value="{{isLoadingFormData}}" ng-blur="CheckAdjusterPhoneOptInStatus(JobDetail.AdjusterPhone)" ng-change="hideCheckbox(JobDetail.AdjusterPhoneOpt)">
                        </div>
                        <div class="input-col stacked-on-mobile bs3-col-sm-3">
                            <label ax-test-read="lead-form__input-label--insurance-adjuster-ext" for="adjuster-ext">Adjuster Ext</label>
                            <input ax-test-write="lead-form__input-text--insurance-adjuster-ext" data-insurance="true" ng-model="JobDetail.AdjusterExt" type="text" name="adjuster-ext" id="adjuster-ext">
                        </div>
                        <div class="input-col bs3-col-sm-3">
                            <label ax-test-read="lead-form__input-label--insurance-adjuster-phone-type" for="adjuster-phone-type">Type</label>
                            <div class="branded-select">
                                <select ax-test-click="lead-form__input-select--insurance-adjuster-phone-type" data-insurance="true" ng-model="JobDetail.AdjusterPhoneType" name="adjuster-phone-type" id="adjuster-phone-type" data-type="select" data-name="Adjuster Phone Type">
                                    <option disabled selected value=""></option>
                                    <option value="home">Home</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="work">Work</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="input-row stacked">
                        <div class="input-col stacked-on-mobile bs3-col-sm-6">
                            <label ax-test-read="lead-form__input-label--insurance-adjuster-fax" for="adjuster-fax">Adjuster Fax</label>
                            <input ax-test-write="lead-form__input-tel--insurance-adjuster-fax" data-insurance="true" ng-model="JobDetail.AdjusterFax" ui-mask="(999) 999-9999" ui-options="{clearOnBlur: false}" type="tel" name="adjuster-fax" id="adjuster-fax" data-type="phone" data-name="Adjuster Fax" allow-invalid-value="{{isLoadingFormData}}">
                        </div>
                        <div class="input-col bs3-col-sm-6">
                            <label ax-test-read="lead-form__input-label--insurance-adjuster-email" for="adjuster-email">Adjuster Email</label>
                            <input ax-test-write="lead-form__input-email--insurance-adjuster-email" data-insurance="true" ng-model="JobDetail.AdjusterEmail" type="email" name="adjuster-email" id="adjuster-email" data-type="email" data-name="Adjuster Email">
                        </div>
                    </div>
                    <div class="input-row">
                        <div class="input-col stacked-on-mobile bs3-col-sm-6">
                            <label ax-test-read="lead-form__input-label--insurance-met-with-adjuster" for="met-with-adjuster">Met with Adjuster?</label>
                            <div class="bs3-col-xs-3">
                                <div class="branded-checkbox">
                                    <input ax-test-click="lead-form__input-checkbox--insurance-met-with-adjuster-yes" data-insurance="true" type="checkbox" id="met-with-adjuster-checkbox" class="switch-checkbox" ng-model="JobDetail.MetWithAdjuster" />
                                    <label ax-test-read="lead-form__input-label--insurance-met-with-adjuster-yes" class="checkbox-label" for="met-with-adjuster-checkbox">
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div class="bs3-col-xs-9 datepicker-wrapper" ng-show="JobDetail.MetWithAdjuster">
                                <div class="datepicker-wrapper">
                                    <input ax-test-click="lead-form__input-datepicker--insurance-met-with-adjuster-date" readonly data-insurance="true" ax-datepicker-popup data-type="text" data-name="Met with Adjuster Date" use-native-picker type="text" name="met-with-adjuster-date" style="cursor: pointer; display: none;" class="form-control" ng-model="JobDetail.MetWithAdjusterDate" is-open="metWithAdjustedOpened" min-date="minDate" datepicker-options="dateOptions" ng-click="metWithAdjustedOpened = !metWithAdjustedOpened" datepicker-popup="dd-MMMM-yyyy" close-text="Close" placeholder="Date" />
                                    <input ax-test-read="lead-form__input-text--insurance-met-with-adjuster-date" data-insurance="true" use-native-picker type="date" name="date-of-loss" style="cursor: pointer; display: none;" ng-class="{'date-chosen' : JobDetail.MetWithAdjusterDate != null}" class="form-control" ng-model="JobDetail.MetWithAdjusterDate" placeholder="Date" />
                                </div>
                            </div>
                        </div>
                        <div class="input-col bs3-col-sm-6">
                            <label ax-test-read="lead-form__input-label--insurance-claim-approved" for="claim-approved">Claim Approved?</label>
                            <div class="bs3-col-xs-3">
                                <div class="branded-checkbox">
                                    <input ax-test-click="lead-form__input-checkbox--insurance-claim-approved-yes" data-insurance="true" type="checkbox" id="claim-approved-checkbox" class="switch-checkbox" data-name="Claim Approved" data-type="checkbox" ng-model="JobDetail.ClaimApproved" />
                                    <label ax-test-read="lead-form__input-label--insurance-claim-approved-yes" class="checkbox-label" for="claim-approved-checkbox">
                                        Yes
                                    </label>
                                </div>
                            </div>
                            <div class="bs3-col-xs-9 datepicker-wrapper" ng-show="JobDetail.ClaimApproved">
                                <div class="datepicker-wrapper">
                                    <input ax-test-click="lead-form__input-datepicker--insurance-claim-approved-date" readonly data-insurance="true" ax-datepicker-popup use-native-picker type="text" name="claim-approved-date" style="cursor: pointer; display: none;" class="form-control" ng-model="JobDetail.ClaimApprovedDate" is-open="claimApprovedOpened" min-date="minDate" datepicker-options="dateOptions" ng-click="claimApprovedOpened = !claimApprovedOpened" datepicker-popup="dd-MMMM-yyyy" close-text="Close" placeholder="Date" />
                                    <input ax-test-read="lead-form__input-text--insurance-claim-approved-date" data-insurance="true" use-native-picker type="date" name="date-of-loss" style="cursor: pointer; display: none;" ng-class="{'date-chosen' : JobDetail.ClaimApprovedDate != null}" class="form-control" ng-model="JobDetail.ClaimApprovedDate" placeholder="Date" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </fieldset>

            <fieldset ng-hide="isLoadingFormData">
                <detail-pane data-appointment="true" data-stats="true" data-map="true" data-order="appointment,stats,map"></detail-pane>
            </fieldset>

            <div class="fixed-notes-positioning">
                <fieldset class="fixed-notes">
                        <div id="LeadIntelligenceLeadFormApp"></div>
                                                                <div class="f--16 m-b--md">
                            Priority level of this lead?
                        </div>
                        <div class="input-row padded auto-height" ng-click="toggleFauxdown()">
                            <div class="fauxdown flex-grow" ng-class="{'fauxdown--active': showPriorityFauxdown == true}" style="width: auto;">
                                <button class="fauxdown__closed-label f--16 f--gray-4d flex flex-start-center p--lg" style="border: 1px solid #ccc;" ax-click-to-close on-close="closeFauxdown()" container=".fauxdown">
                                    <span class="icon-priority--{{jobPriorityList[jobPriority].toLowerCase()}} m-r--md">
                                        <svg ng-if="jobPriority == 3" class="icon-priority--urgent m-r--sm">
                                            <use xlink:href="/Images/icon-sprite.svg#icon-exclamation-circle"></use>
                                        </svg>
                                    </span>
                                    <span class="f--16 f--gray-4d">{{jobPriorityList[jobPriority]}}</span>
                                </button>
                                <ul class="fauxdown__fancy-ul p-y--md">
                                    <li>
                                        <button class="fauxdown__option p-y--md p-x--lg flex" ng-click="setJobPriority(3)">
                                            <svg class="icon-priority--urgent m-r--md flex-noshrink">
                                                <use xlink:href="/Images/icon-sprite.svg#icon-exclamation-circle"></use>
                                            </svg>
                                            <span class="f--16 f--gray-4d">Urgent</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button class="fauxdown__option p-y--md p-x--lg flex" ng-click="setJobPriority(2)">
                                            <span class="icon-priority--high m-r--md flex-noshrink"></span>
                                            <span class="f--16 f--gray-4d">High</span>
                                        </button>
                                    </li>
                                    <li>
                                        <button class="fauxdown__option p-y--md p-x--lg flex" ng-click="setJobPriority(1)">
                                            <span class="icon-priority--normal m-r--md flex-noshrink"></span>
                                            <span class="f--16 f--gray-4d">Normal</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    <div class="input-row padded auto-height">
                        <div class="input-col bs3-col-xs-12">
                            <label ax-test-read="lead-form__input-label--notes" for="lead-notes">Notes</label>
                            <!--<textarea name="lead-notes" id="lead-notes" ng-model="JobDetail.ReasonForContact" maxlength="1000"></textarea>-->
                            <textarea ax-test-write="lead-form__input-textarea--notes" class="scrollbar-macosx scrolling-element" scrolling-element ax-auto-grow name="lead-notes" id="lead-notes" ng-model="JobDetail.ReasonForContact" maxlength="1000"></textarea>
                        </div>
                        <div class="note" ng-class="{'danger': JobDetail.ReasonForContact.length == 1000}">
                            {{1000 - JobDetail.ReasonForContact.length}} character<span ng-hide="JobDetail.ReasonForContact.length == 999">s</span> remaining.
                        </div>
                        <p class="note" style="clear: right;padding-bottom:35px; text-align: right;"><strong>Note: </strong>Additional information can be entered once a lead has been created.</p>
                    </div>
                </fieldset>
            </div>
        </div>

        <div class="submit-button-wrapper">
            <span class="bs3-col-xs-6 bs3-col-xs-offset-1" ng-if="isProcessingUpload()">
                <span class="saving-error">
                    Uploading location image, please wait&hellip;
                </span>
            </span>

            <span class="bs3-col-xs-2 bs3-col-xs-offset-5" ng-if="isSavingLead">
                <svg class="icon-loading" style="fill: #777; height: 40px;  width: 40px;">
                    <use xlink:href="/Images/icon-sprite.svg#icon-loading"></use>
                </svg>
            </span>
        </div>
        <div class="utility-footer utility-footer__align-left">
            <div class="footer-inner flex flex-end-stretch">
                <button ax-test-read="lead-form__button--save-new-lead" ax-test-click="lead-form__button--save-new-lead" ax-test-hover="lead-form__button--save-new-lead" class="button button-solid flex-pin-right" al-save-button saving-trigger="isSavingLead" saving-message="Saving..." ng-disabled="isProcessingUpload() || isSavingLead" ng-click="createLead($event)">
                    Save New Lead
                </button>
            </div>
        </div>
    </form>
    </div>
<div id="LeadChecklistModalApp"></div>
<div id="LeadIntelligenceLearnMoreModalDrawerApp"></div>

</div>

<div class="user-notification" user-notification ng-cloak></div>



<script src="https://static.alstatic.net/scriptbundle/jquerymvc-e8c2e4fe26f12094.js" crossorigin integrity='sha512-b77EeFohUg+mI9GhUcbItkuqEyGsaRihJ7z8IuSewuO80WGvnCN71ccLxARusSz0NFY/hsvcmHbrZ/st6ocDSw=='></script>
<script src="https://static.alstatic.net/scriptbundle/Bootstrap3-fbfc5931077f73f5.js" crossorigin integrity='sha512-Gmt81uOQxohn1a5OdNzd6pzJMmTwXJrDupXQ5sggg6wVRLIjYBwywuKfyO5dD8zFMHAIDP7aQN6VteZR2muheg=='></script>
<script src="https://static.alstatic.net/scriptbundle/Angular-74328689297486b0.js" crossorigin integrity='sha512-XJ+8bt4fH6dQkZNLZ69qlq+Wx/pjKUpwdlTlIXCTjwyk35p2fIIjPoq/T1beGFP4BL5/uJwDvKpvVZEuz9z2QQ=='></script>
<script>
    acculynx.angular.addDependency("ui.bootstrap");
    acculynx.angular.addDependency("ngResource");
</script>
<script src="https://static.alstatic.net/scriptbundle/HeaderMVC-c05c831ea01ad1bc.js" crossorigin integrity='sha512-S78ufB9nzX7bR1UASI+X+ee8csRl+Fiqx7FP+fukQ67599TouNdzgg3Kw4ZsQgUQ+OERH6FKr3cEvykdoMFD/A=='></script>
<script src="https://static.alstatic.net/vendor-vue-25d2007a674beec5d2d0.bundle.js" crossorigin integrity='sha512-7/T3PGQC/HTeuyo3ZqwtXyGxQW1KPSDbC80QBXYgtKvz+5vL/aAtmmArKodtw1Cpmfqwl/YSMm61VRcz7Nd8hw=='></script>
<script src="https://static.alstatic.net/vendor-core-e3914cace2d6773d520d.bundle.js" crossorigin integrity='sha512-7d+4s2MLqGmO8pwRI9Mf23/Vu5CTEJaHZHrEjJMQy6l02ZoYzslxLXLLHdh8wS8O1OFCXJ6E6MTc9ivgldaSPA=='></script>
<script src="https://static.alstatic.net/common-d599e8d7dac7f84e8164.bundle.js" crossorigin integrity='sha512-sRIobJAdTaqS74IR9crTmyO2Ey5amwewrKoUsSwu0IcG/d61rjjVOs408RHJWHBS+2PKxAxv8e+tBsdVB0Rguw=='></script>

<script>
    var acculynx = new (function (_acculynx) {
        _acculynx.maps = _acculynx.maps || {};

            _acculynx.maps.gmapsAuthentication = 'client=gme-exactlogixincdba';

        _acculynx.gdrive = _acculynx.gdrive  || {};

        _acculynx.gdrive.driveClientId = '503649229107-2bsi5a9726vsshujgu3qfa58dob14gns.apps.googleusercontent.com';
        _acculynx.gdrive.driveBrowserKey = 'AIzaSyD5ETIqYdyByphLZMfLX4SK3narrX-jBl0';

        _acculynx.dropbox = _acculynx.dropbox || {};
        _acculynx.dropbox.appKey = 'vvt9rs1amz5oysm';

        _acculynx.support = _acculynx.support || {};
        _acculynx.support.phone = '(608) 473-3800 Ext. 200';

        _acculynx.companyUser = {
            companyUserId: '2bde0f37-77ca-4733-9b4e-aaca2078a0fd',
            userId: '2c4293df-d186-4320-8b5a-ffca32c1e064',
        }

        return _acculynx;
    })(acculynx || {});
</script>



        <script src="https://static.alstatic.net/scriptbundle/NewLead-7925d03a540ae33c.js" crossorigin integrity='sha512-kfcvwrbx9tqacmJwG0cCXKxRd/FuTdWJmqeqaxtpMrTd5fsiSHx6uMa45Huq+QKRrXJPV4OLQiG+Ae2MxG5pRg=='></script>
        <script src="https://static.alstatic.net/leadchecklist-90f54dc9b65b87062422.bundle.js" crossorigin type='module' integrity='sha512-ctHadK3T4g0YzrbrYtWr9O6VXXYFlXYf6ZCmxnJCyIPRZVOmZU9i1TM5P/70xluGWtCoX+qbsbLwVcnGJ+V92g=='></script>
        <script src="https://static.alstatic.net/leadIntelligenceLeadFormApp-c28993e64478d79b23b7.bundle.js" crossorigin type='module' integrity='sha512-O6SLgLGXhLySSduxjLUc/DFYXX0dVmYfJRIautpol29e0XefuNtrPXF5pM7aHULAQ2Ldiyd7jryOos/PT5HZ5A=='></script>
        <script src="https://static.alstatic.net/leadintelligencelearnmoremodaldrawerapp-44337df960fa4ef1a7e7.bundle.js" crossorigin type='module' integrity='sha512-cF9C1gYDgd6sdiMbkqlYnlArU4m9ZZ7W+XiTjA6Vz0y+VggaaJi269aAhsvP7Q4GR76ULVMQfGD/durBYX3iXg=='></script>

        <script>
            acculynx.angular.addDependency("httpi");
            acculynx.angular.addDependency("ui.mask");
            acculynx.angular.addDependency("angularFileUpload")
            acculynx.angular.addDependency("jmdobry.angular-cache");
        </script>
    





    <script async src="https://www.googletagmanager.com/gtag/js?id=G-66DD677ZCG"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-66DD677ZCG');
    gtag('set', '&uid', '2c4293df-d186-4320-8b5a-ffca32c1e064');
    gtag('set', 'dimension1', '24203: Umbrella Claims &amp; Property Solutions')
    gtag('set', 'dimension2', 'CompanyAdministrator')
    gtag('set', 'dimension3', 'SC')

             gtag('event', 'pageview');
    </script>

<script async src="//cdn.headwayapp.co/widget.js"></script>




    <script type="text/javascript">
        window.AppcuesSettings = {
            enableURLDetection: true
        };
    </script>
    <script src="//fast.appcues.com/202655.js"></script>
    <script type="text/javascript">
    window.Appcues.identify('2c4293df-d186-4320-8b5a-ffca32c1e064',
        {
            companyUserId: '2bde0f37-77ca-4733-9b4e-aaca2078a0fd',
            role: 'CompanyAdministrator',
            name: 'James Causey',
            companyName: 'Umbrella Claims &amp; Property Solutions',
            email: 'umbrellacpsllp@gmail.com',
        }
    );

    window.Appcues.group('707968e7-0d10-4801-8305-13aff1daf8bf',
        {
            parentCompanyAccountID: 'ba548d9a-03a0-48cf-846d-236d5320cfbf',
            companyName: 'Umbrella Claims &amp; Property Solutions',
            isElite: 'False',
            isCompanyActive: 'True',
        }
    );
    </script>










<script>
        
        ChurnZero = window.ChurnZero || []; (function () { var cz = document.createElement('script'); cz.type = 'text/javascript'; cz.async = true; cz.src = '//analytics.churnzero.net/churnzero.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cz, s); s.parentNode.insertBefore(cz, s) })();

        
        try {
            ChurnZero.push(['setAppKey', 'KONhN2j18xKR-qY9cS7Z6HKRlMwbkt0yXwo828LoEMk']); // AppKey from ChurnZero
            ChurnZero.push(['setContact', '24203', 'umbrellacpsllp@gmail.com'])

            
        } catch (e) {
            if (window.TrackJS) {
                window.TrackJS.track('ChurnZero:' + e.message)
            }
        }
</script>





<script>
(function(apiKey){
    (function(p,e,n,d,o){var v,w,x,y,z;o=p[d]=p[d]||{};o._q=o._q||[];
    v=['initialize','identify','updateOptions','pageLoad','track'];for(w=0,x=v.length;w<x;++w)(function(m){
        o[m]=o[m]||function(){o._q[m===v[0]?'unshift':'push']([m].concat([].slice.call(arguments,0)));};})(v[w]);
        y=e.createElement(n);y.async=!0;y.src='https://pendocontent.acculynx.com/agent/static/'+apiKey+'/pendo.js';
        z=e.getElementsByTagName(n)[0];z.parentNode.insertBefore(y,z);})(window,document,'script','pendo');

    pendo.initialize({
        visitor: {
            id: "2c4293df-d186-4320-8b5a-ffca32c1e064",
                email: "umbrellacpsllp@gmail.com",
                            displayName: "James Causey",
                            role: "Company Administrator",
        },
        account: {
            id: 24203,
            accountName: "Umbrella Claims \u0026 Property Solutions - 24203",
            isActive: true,
            billingStatus: "Active",
            productType: "Pro",
            activeUsers: 3,
        }
    });
})('2fa6b78e-3cd1-4118-6af2-4cef2c42eed4');
</script>




    <!-- Start of acculynx Zendesk Widget script -->
    <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=edbaf082-f901-4df7-bd59-79f9f1baea99"></script>
    <script type="text/javascript">
    zE('webWidget', 'hide');
    const displayName = 'James Causey';
    const email = 'umbrellacpsllp@gmail.com';

    window.zESettings = {
        webWidget: {
            chat: {
                hideWhenOffline: true,
                tags: ['24203']
            },
            navigation: {
                popoutButton: {
                    enabled: false
                }
            }
        }
    };

    zE(function () {
        zE.identify({
            name: displayName,
            email: email
        });
    });

    zE('webWidget:on', 'chat:connected', function () {
        const isChatting = zE('webWidget:get', 'chat:isChatting');

        if (isChatting) {
            openWidget();
        }
    });

    zE('webWidget:on', 'chat:status', function (status) {
        if (status == 'online') {
            document.getElementById("myLauncher").style.display = "inherit";
        } else {
            document.getElementById("myLauncher").style.display = "none";
        }
    });

    zE('webWidget:on', 'chat:popout', function() {
        zE('webWidget', 'hide');
    });

    function openWidget() {
        zE('webWidget', 'show');
        zE('webWidget', 'open');
    };

    zE('webWidget:on', 'close', function () {
        zE('webWidget', 'hide');
    })
    </script>
    <!-- End of acculynx Zendesk Widget script -->


</body>
</html>
