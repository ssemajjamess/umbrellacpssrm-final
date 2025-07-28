
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
    <title ng-init='title = "Dashboard"' ng-bind="title + ' &middot; AccuLynx'">Dashboard &middot; AccuLynx</title>
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
    
    <link href="https://static.alstatic.net/stylebundle/Dashboard-1d4d291896c92954.css" rel="stylesheet"/>

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
        <ax-modal v-model="showSubmitAnIdeaModal" :component="submitAnIdeaModalView" :data="{'ViewAllIdeasURL': 'http://feedback.acculynx.com/forums/243621-general-feedback/?sso=yKNHDwZQdVXYO2TtEC5e8El1b6Oy1VlDCOhh%2f0Tr7R91OR2QJHXLAsQGiP%2fIUjymVANUIDPLiIQMWKpaZGN%2bAo0YyFRRzxcSJ7kkEtSlX47tpehNqxp22Cn%2b1lis4HuDLI6%2f1crq9vx4Lw%2fYx38waxOTOuZ%2b%2blNIpAzU%2fpD3bvn3Scb%2bYfOzDyhjHlbEcr7AptWMDJx7r3x8nMzxz4F5OQ%3d%3d'}"></ax-modal>
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
    ng-controller="DashboardController"
>
    







<div id="page-header-wrapper" scroll-calculator="true">
    <h1 class="page-header">Dashboard</h1>
    <button id="toggle-activity-feed" class="btn btn-text visible-xs" transition-timeout="#activity-feed" data-transition="300" data-fullscreen="true">
        
        Activity Feed
    </button>
</div>

















<div class="main clearfix">
    <div id="widgets" class="dashboard-widget-container" >

        <section ng-cloak id="milestone-pipeline" class="dashboard-widget">

            <header class="flex flex-between-center bg--gray-f8 p--md br-t--sm br--blue">
                <h2 class="f--light f--sans f--20" ax-test-readText="dashboard_Pipeline_Header_txt">Current Pipeline</h2>
                <div ng-if="!PipelineFailed" ax-test-readText="dashboard_Pipeline_ActiveJobsCount_txt">Active Jobs: {{TotalActiveJobCount}}</div>
            </header>
            <div ng-progress="currentPipelineProgress"></div>
            <div class="bg--white p-y--xxxl p-x--lg" ng-cloak ng-if="PipelineFailed">
                <div class="flex flex-col flex-center-center m-y--xl">
                    <p class="f--16 f--sans f--gray-9d m-b--lg f--center">Looks like your Current Pipeline failed to load.  😥</p>
                    <button class="f--14 f--semi f--sans button-v3--sm flex flex-center-center button-v3--solid-blue" ng-click="loadCurrentPipeline()">
                        <span>Try Again?</span>
                    </button>
                </div>
            </div>

            <div class="bg--white p-x--lg" style="height:167px;" ng-cloak ng-if="PipelineLoading"></div>

            <div class="widget-body clearfix" ng-if="!PipelineFailed && !PipelineLoading">
                <ul id="milestone-list" class="clearfix" ng-hide="!PipelineLoading && TotalActiveJobCount == 0">
                    <li class="milestone">
                        <a class="dashboard-button" href="/jobs/?filters=currentMilestoneList:Assigned" ax-test-click="dashboard_Pipeline_LeadButton_btn">
                            <svg class="icon icon-milestone-lead"><use xlink:href="/Images/icon-sprite.svg#icon-milestone-lead"></use></svg>
                            <div class="count" ax-test-readText="dashboard_Pipeline_LeadCount_txt">{{PipelineLoading ? "- -" : LeadData.totalCount}}</div>
                            <div class="dollar-amount" ax-test-readText="dashboard_Pipeline_LeadDollarAmount_txt">- -</div>
                        </a>
                    </li>
                    <li class="milestone">
                        <a class="dashboard-button" href="/jobs/?filters=currentMilestoneList:Prospect" ax-test-click="dashboard_Pipeline_ProspectButton_btn">
                            <svg class="icon icon-milestone-prospect"><use xlink:href="/Images/icon-sprite.svg#icon-milestone-prospect"></use></svg>
                            <div class="count" ax-test-readText="dashboard_Pipeline_ProspectCount_txt">{{PipelineLoading ? "- -" : ProspectData.totalCount}}</div>
                            <div class="dollar-amount" ax-test-readText="dashboard_Pipeline_ProspectDollarAmount_txt"><responsivemoney value="{{ProspectData.totalSales}}" /></div>
                        </a>
                    </li>
                    <li class="milestone">
                        <a class="dashboard-button" href="/jobs/?filters=currentMilestoneList:Approved" ax-test-click="dashboard_Pipeline_ApprovedButton_btn">
                            <svg class="icon icon-milestone-approved"><use xlink:href="/Images/icon-sprite.svg#icon-milestone-approved"></use></svg>
                            <div class="count" ax-test-readText="dashboard_Pipeline_ApprovedCount_txt">{{PipelineLoading ? "- -" : ApprovedData.totalCount}}</div>
                            <div class="dollar-amount" ax-test-readText="dashboard_Pipeline_ApprovedDollarAmount_txt"><responsivemoney value="{{ApprovedData.totalSales}}" /></div>
                        </a>
                    </li>
                    <li class="milestone">
                        <a class="dashboard-button" href="/jobs/?filters=currentMilestoneList:Completed" ax-test-click="dashboard_Pipeline_CompletedButton_btn">
                            <svg class="icon icon-milestone-completed"><use xlink:href="/Images/icon-sprite.svg#icon-milestone-completed"></use></svg>
                            <div class="count" ax-test-readText="dashboard_Pipeline_CompletedCount_txt">{{PipelineLoading ? "- -" : CompletedData.totalCount}}</div>
                            <div class="dollar-amount" ax-test-readText="dashboard_Pipeline_CompletedDollarAmount_txt"><responsivemoney value="{{CompletedData.totalSales}}" /></div>
                        </a>
                    </li>
                    <li class="milestone">
                        <a class="dashboard-button" href="/jobs/?filters=currentMilestoneList:Invoiced" ax-test-click="dashboard_Pipeline_InvoicedButton_btn">
                            <svg class="icon icon-milestone-invoiced"><use xlink:href="/Images/icon-sprite.svg#icon-milestone-invoiced"></use></svg>
                            <div class="count" ax-test-readText="dashboard_Pipeline_InvoicedCount_txt">{{PipelineLoading ? "- -" : InvoicedData.totalCount}}</div>
                            <div class="dollar-amount" ax-test-readText="dashboard_Pipeline_InvoicedDollarAmount_txt"><responsivemoney value="{{InvoicedData.totalSales}}" /></div>
                        </a>
                    </li>
                </ul>

                <div id="no-jobs-in-pipeline" class="clearfix" ng-cloak ng-if="!PipelineLoading && !PipelineFailed && TotalActiveJobCount == 0">
                    <div class="text">
                        <p>No Jobs. <a href="/lead/new/">Create your first Lead &raquo;</a></p>
                        <h3>What is the Current Pipeline?</h3>
                        <p>Track all active jobs through each milestone. Check the number of jobs and revenue they&nbsp;generate.</p>
                    </div>
                    <img ng-src="/Images/dashboard/empty-state-pipeline.png" alt="" />
                </div>
            </div>
        </section>

            <div class="split-width-widget">
                <section class="dashboard-widget">
                    <header class="bg--gray-f8 p--md br-t--sm br--blue flex flex-between-center" style="height: 46px;">
                        <h2 class="f--light f--sans f--20" ax-test-readText="dashboard_PaymentsFinancing_Header_txt">AccuPay</h2>
                            <button ng-click="startEnablePayment(true)" class="button-v3--xs button-v3--text-blue flex flex-center-center f--14" ax-test-click="dashboard_PaymentsFinancing_EnablePaymentsProc_btn">
                                <svg class="f--blue m-r--md" width="22" height="18"><use xlink:href="/Images/icon-sprite.svg#icon-credit-check-checkmark"></use></svg>
                                Enable Add-on
                            </button>
                    </header>
                    <div class="widget-body p--md flex flex-between-center" style="height: 58px;">
                        <div class="flex flex-start-start">
                                <p class="f--gray-77">
                                    Process credit card and ACH payments.
                                </p>
                                                    </div>
                    </div>
                </section>
                <section class="dashboard-widget">
                    <header class="bg--gray-f8 p--md br-t--sm br--blue flex flex-between-center" style="height: 46px;">
                                                    <div class="flex flex-between-center flex-100">
                                <div class="flex">
                                    <h2 class="f--light f--sans f--20" ax-test-readText="dashboard_PaymentsFinancing_Header_txt">AccuFi</h2>
                                    <button class="acorn__learn-more button-v3--xs button-v3--text-blue flex flex-center-center f--14 m-l--sm">
                                        Learn More
                                    </button>
                                </div>
                                    <button ng-click="startPaymentCalculator()" class="acorn__calculator button-v3--xs button-v3--text-blue flex flex-center-center f--14 m-l--sm">
                                        <svg class="f--blue m-r--xs" width="22" height="18"><use xlink:href="/Images/icon-sprite.svg#icon-calculator"></use></svg>
                                        Payment Calculator
                                    </button>
                            </div>
                        
                    </header>
                    <div class="widget-body p--md flex flex-between-center" style="height: 58px;">
                        <div class="flex flex-start-center">
                                <button ng-click="startFinancing()" class="button-v3--sm button-v3--solid-blue flex flex-center-center m-x--sm heap__acorn-dashboard--offer" ax-test-click="dashboard_PaymentsFinancing_OfferFinancing_btn">
                                    <svg class="f--white m-r--md" width="22" height="18"><use xlink:href="/Images/icon-sprite.svg#icon-dollar-columns"></use></svg>
                                    Offer Financing
                                </button>
                                                    </div>
                                                    <img src="/Images/svg/Sprites/Addons/acorn-logomark.svg" alt="Acorn Logo" height="20" width="20" />
                    </div>
                </section>
            </div>

        <div id="action-items">
            <div id="vue-dashboard-action-items" data-bootstrap='{"canViewNotRecordedInvoices":false,"canViewOverdueInvoices":false,"hasRecentPhotosActivity":true,"hasWorksheetFeature":true,"showApprovedCwNotRecorded":false,"showLeadsSubmittedForProspect":true,"showMeasurementOrderRequests":false,"showPaymentDisputes":false,"showPaymentRequests":false,"showStatusApprovals":false,"showTrackSignatures":false,"showInvoiceNotRecordedV2":false}'></div>

            <section class="dashboard-widget">
                <div>
                    <p class="order-action__title" ax-test-readText="dashboard_OrderMeasurements_Header_txt">Order Measurements</p>
                    <div class="row">
                        <!--We always show eagleview-->
                        <div class="col-lg-6 col-xl-5">
                            <button ng-click="startNewMeasurement('ed212569-c8ef-4a5d-9851-f1c64e4db475')" class="order-action__action-item" ax-test-click="dashboard_OrderMeasurements_EagleView_btn">
                                <div class="order-action__icon-container">
                                    <img src="/Images/svg/Sprites/AddOns/eagleview-logo.svg" alt="EagleView" class="order-action__icon" />
                                </div>
                                <span>EagleView</span>
                            </button>
                            <ax-quick-measurement-button ng-if="newMeasurementID == 'ed212569-c8ef-4a5d-9851-f1c64e4db475'" on-close="cancelNewMeasurement()" provider-id="newMeasurementID"></ax-quick-measurement-button>
                        </div>
                                                                                                                            <div class="col-lg-6 col-xl-5">
                                <button ng-click="showGeospanMarketingModal()" class="order-action__action-item" ax-test-click="dashboard_OrderMeasurements_GeospanMarketing_btn">
                                    <div class="order-action__icon-container">
                                        <img width="50" height="50" src="/Images/svg/Sprites/Addons/geospan-square-logo.svg" />
                                    </div>
                                    <span>Geospan</span>
                                </button>
                            </div>
                    </div>
                </div>
                <div>
                </div>
            </section>
        </div>

            <section id="sales-leaderboard" class="dashboard-widget" ng-cloak>
                <header class="flex flex-between-center bg--gray-f8 p--md br-t--sm br--blue">
                    <h2 class="f--light f--sans f--20" ax-test-readText="dashboard_Leaderboard_Header_txt">Leaderboard</h2>
                    <div ng-if="!salesLeaderBoardFailed">
                        <span class="leaderboard-button" ng-class="{'active':activeLeaderBoard == 'Week'}" ng-click="setActiveLeaderBoard('Week')" ax-test-click="dashboard_Leaderboard_Week_link">Week</span> |
                        <span class="leaderboard-button" ng-class="{'active':activeLeaderBoard == 'Month'}" ng-click="setActiveLeaderBoard('Month')" ax-test-click="dashboard_Leaderboard_Month_link">Month</span> |
                        <span class="leaderboard-button" ng-class="{'active':activeLeaderBoard == 'YTD'}" ng-click="setActiveLeaderBoard('YTD')" ax-test-click="dashboard_Leaderboard_YTD_link">YTD</span> |
                        <span class="leaderboard-button" ng-class="{'active':activeLeaderBoard == 'Custom'}" ng-click="setActiveLeaderBoard('Custom')" ax-test-click="dashboard_Leaderboard_Custom_link">Custom</span>
                    </div>
                </header>
                <div class="bg--white p-y--xxl p-x--lg" ng-cloak ng-if="salesLeaderBoardFailed">
                    <div class="flex flex-col flex-center-center">
                        <p class="f--16 f--sans f--gray-9d m-b--lg f--center">Looks like the your Leaderboard failed to load.  😥</p>
                        <button ng-click="loadSalesLeaderBoard('Month')" class="f--14 f--semi f--sans button-v3--sm flex flex-center-center button-v3--solid-blue">
                            <span>Try Again?</span>
                        </button>
                    </div>
                </div>

                <div ng-progress="leaderboardProgress"></div>
                <div class="widget-body clearfix" ng-if="!salesLeaderBoardFailed">
                    <div class="datepicker-outer clearfix" ng-if="activeLeaderBoard == 'Custom'">
                        <div class="date-start-end-wrapper">
                            <div class="datepicker-wrapper">
                                <input use-native-picker type="text" style="cursor: pointer; display: none;" class="form-control" ng-model="LeaderBoard.LeaderBoardStartDate" is-open="startDateOpened" min-date="minDate" datepicker-options="dateOptions" ng-click="startDateOpened = !startDateOpened" datepicker-popup="dd-MMMM-yyyy" close-text="Close" placeholder="Start Date" ax-test-click="dashboard_CustomStartDate_datePicker" />
                                <input use-native-picker type="date" style="cursor: pointer; display: none;" class="form-control" ng-model="LeaderBoard.LeaderBoardStartDate" min-date="minDate" ng-click="startDateOpened = !startDateOpened" close-text="Close" placeholder="Start Date" ax-test-click="dashboard_CustomStartDate_datePicker" />
                            </div>
                            <div class="to">to</div>
                        </div>
                        <div class="date-start-end-wrapper">
                            <div class="datepicker-wrapper">
                                <input use-native-picker type="text" style="cursor: pointer; display: none;" class="form-control" ng-model="LeaderBoard.LeaderBoardEndDate" is-open="endDateOpened" min-date="minDate" datepicker-options="dateOptions" ng-click="endDateOpened = !endDateOpened" datepicker-popup="dd-MMMM-yyyy" close-text="Close" placeholder="End Date" ax-test-click="dashboard_Leaderboard_CustomEndDate_datePicker" />
                                <input use-native-picker type="date" style="cursor: pointer; display: none;" class="form-control" ng-model="LeaderBoard.LeaderBoardEndDate" min-date="minDate" ng-click="endDateOpened = !endDateOpened" close-text="Close" placeholder="End Date" ax-test-click="dashboard_Leaderboard_CustomEndDate_datePicker" />
                            </div>
                            <button class="btn btn-go" ng-click="LoadCustomLeaderBoard()" ax-test-click="dashboard_Leaderboard_Custom_GoButton_btn">Go</button>
                        </div>
                    </div>
                    <div id="no-users-in-leaderboard" class="clearfix" ng-if="!salesLeaderBoardLoading && LeaderBoard.length == 0">
                        <div class="text">
                            <p>
                                No sales information for
                                <span ng-show="activeLeaderBoard=='Week'">the week.</span>
                                <span ng-show="activeLeaderBoard=='Month'">{{currentDate | date: 'MMMM'}}.</span>
                                <span ng-show="activeLeaderBoard=='YTD'">the year</span>
                                <span ng-show="activeLeaderBoard=='Custom'">the custom range you selected.</span>
                            </p>
                            <h3>What is the Sales Leaderboard?</h3>
                            <p>See who has sold the most work for the week, month, year, or a custom date range.</p>
                            <p>Who&rsquo;s gonna lead the sales in <em>your</em> company?</p>
                        </div>
                        <img ng-src="/Images/dashboard/empty-state-leaderboard.png" alt="" />
                    </div>
                    <div class="sales-leader clearfix" ng-repeat="user in LeaderBoard">
                        <div class="sales-meta" ax-test-readText="dashboard_Leaderboard_Custom_name{{user.position}}_txt">
                            <div class="position">{{user.position}}</div>
                            <div ng-if="(user.profilePictureUrl != '' && user.profilePictureUrl != null)" class="avatar" style="background-image:url({{user.profilePictureUrl}}NewSmall.png)">
                            </div>
                            <div ng-if="(user.profilePictureUrl == '' || user.profilePictureUrl == null)" class="avatar">
                                <span><p class="user-initials" al-initials="{{user.repName}}"></p></span>
                            </div>
                            <div class="name">{{user.repName}}</div>
                        </div>
                        <div class="sales-total-amount" ax-test-readText="dashboard_Leaderboard_Custom_SalesAmount{{user.position}}_txt">
                            <responsivemoney value="{{user.totalSaleAmount}}" />
                            
                        </div>
                        <div class="bar-constraint">
                            <div class="bar" ng-class="{'active': 1 == user.position}" style="width:{{user.Width}}%"></div>
                        </div>
                    </div>
                </div>
            </section>
        <div class="split-width-widget">
            <section id="work-schedule" class="dashboard-widget" lazy-scroll-load data-callback="lazyLoadModules()">
                <header class="flex flex-between-center bg--gray-f8 p--md br-t--sm br--blue">
                    <h2 class="f--light f--sans f--20" ax-test-readText="dashboard_WorkSchedule_Header_txt">Work Schedule</h2>
                </header>
                <div class="bg--white p-y--xxxl p-x--lg" ng-cloak ng-if="WorkScheduleFailed">
                    <div class="flex flex-col flex-center-center m-y-md">
                        <p class="f--16 f--sans f--gray-9d m-b--lg f--center">Looks like your Work Schedule failed to load.  😥</p>
                        <button ng-click="loadWorkShedule()" class="f--14 f--semi f--sans button-v3--sm flex flex-center-center button-v3--solid-blue">
                            <span>Try Again?</span>
                        </button>
                    </div>
                </div>
                <div ng-progress="workScheduleProgress"></div>
                <div class="widget-body" ng-cloak ng-if="!WorkScheduleFailed">
                    <ul id="schedule-period-list" class="clearfix">
                        <li ng-click="gotoWorkflow('completedYesterday')" class="schedule-period" ax-test-click="dashboard_WorkSchedule_CompletedYesterday_li">
                            <p>Completed <br />Yesterday</p>
                            <div class="job-count orange">
                                <p class="count" ax-test-readText="dashboard_WorkSchedule_CompletedYesterdayCount_txt">{{CompletedYesterdayCount}}</p>
                            </div>
                        </li>
                        <li ng-click="gotoWorkflow('workingToday')" class="schedule-period" ax-test-click="dashboard_WorkSchedule_WorkingOnToday_li">
                            <p>Working <br />on Today</p>
                            <div class="job-count green">
                                <p class="count" ax-test-readText="dashboard_WorkSchedule_WorkingOnTodayCount_txt">{{WorkingOnTodayCount}}</p>
                            </div>
                        </li>
                        <li ng-click="gotoWorkflow('scheduledToStart')" class="schedule-period" ax-test-click="dashboard_WorkSchedule_30DayOutlook_li">
                            <p>30 Day <br />Outlook</p>
                            <div class="job-count blue">
                                <p class="count" ax-test-readText="dashboard_WorkSchedule_30DayOutlookCount_txt">{{ReadyToStartCount}}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section id="vue-dashboard-accounts-receivable"></section>
        </div>
        <section id="job-activity-count" class="dashboard-widget">
            <header class="flex flex-between-center bg--gray-f8 p--md br-t--sm br--blue">
                <h2 class="f--light f--sans f--20" ax-test-readText="dashboard_ActivityCountLast30_Header_txt">Activity Count: Last 30 Days</h2>
            </header>
            <div ng-cloak class="bg--white p-y--xxl p-x--lg" ng-if="ActivityCountFailed">
                <div class="flex flex-col flex-center-center m-y-md">
                    <p class="f--16 f--sans f--gray-9d m-b--lg f--center">Looks like your Activity Count failed to load.  😥</p>
                    <button ng-click="loadActivityCount()" class="f--14 f--semi f--sans button-v3--sm flex flex-center-center button-v3--solid-blue">
                        <span>Try Again?</span>
                    </button>
                </div>
            </div>
            <div ng-progress="activityCountProgress"></div>
            <div class="widget-body" ng-cloak ng-if="!ActivityCountFailed">
                <ul id="job-activity-list" class="clearfix">
                    <li class="activity">
                        <div class="box">
                            <p ax-test-readText="dashboard_ActivityCountLast30_NewLeads_txt">New<br />Leads</p>
                            <p class="count" ax-test-readText="dashboard_ActivityCountLast30_NewLeadsCount_txt">{{NewLeadCount}}</p>
                        </div>
                    </li>
                    <li class="activity">
                        <div class="box">
                            <p ax-test-readText="dashboard_ActivityCountLast30_JobsApproved_txt">Jobs<br />Approved</p>
                            <p class="count" ax-test-readText="dashboard_ActivityCountLast30_JobsApprovedCount_txt">{{JobsApprovedCount}}</p>
                        </div>
                    </li>
                    <li class="activity">
                        <div class="box">
                            <p ax-test-readText="dashboard_ActivityCountLast30_JobsCompleted_txt">Jobs<br />Completed</p>
                            <p class="count" axtest-readText="dashboard_ActivityCountLast30_JobsCompletedCount_txt">{{JobsCompletedCount}}</p>
                        </div>
                    </li>
                    <li class="activity">
                        <div class="box">
                            <p ax-test-readText="dashboard_ActivityCountLast30_MoneyCollected_txt">Money<br />Collected</p>
                            <p class="count" ax-test-readText="dashboard_ActivityCountLast30_MoneyCollectedCount_txt"><responsivemoney value="{{MoneyCollected}}" /></p>
                        </div>
                    </li>
                    <li class="activity">
                        <div class="box">
                            <p ax-test-readText="dashboard_ActivityCountLast30_JobsInvoices_txt">Jobs<br />Invoiced</p>
                            <p class="count" ax-test-readText="dashboard_ActivityCountLast30_JobsInvoicesCount_txt">{{JobsInvoicedCount}}</p>
                        </div>
                    </li>
                    <li class="activity">
                        <div class="box">
                            <p ax-test-readText="dashboard_ActivityCountLast30_JobsClosed_txt">Jobs<br />Closed</p>
                            <p class="count" ax-test-readText="dashboard_ActivityCountLast30_JobsClosedCount_txt">{{JobsClosedCount}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
    <aside id="activity-feed" class="dashboard-widget" ng-class="{'open': activityActive}">
        <header class="flex flex-between-center bg--gray-f8 p--md br-t--sm br--blue">
            <h2 class="f--light f--sans f--20" ax-test-readText="dashboard_ActivityFeed_Header_txt">Activity Feed</h2>
            <button id="close-activity-feed" class="btn btn-close" transition-timeout="#activity-feed" data-transition="300" data-fullscreen="true"></button>
        </header>
        <div ng-cloak ng-if="ActivityFeedFailed" class="bg--white p-y--xxxl p-x--xl">
            <div class="flex flex-col flex-center-center m-y-md">
                <p class="f--16 f--sans f--gray-9d m-b--lg f--center">Looks like your Activity Feed failed to load. 😥</p>
                <button ng-click="ReLoadFeed()" class="f--14 f--semi f--sans button-v3--sm flex flex-center-center button-v3--solid-blue">
                    <span>Try Again?</span>
                </button>
            </div>
        </div>
        <div ng-show="!ActivityFeedFailed" id="activity-feed-body" class="widget-body" ng-cloak>
            <div class="reload-feed-wrapper" ng-show="!ActivityFeedFailed && ActivityFeedNewItems > 0" ng-click="ReLoadFeed()" scroll-back-up="#activity-list-scroll">
                <a class="btn btn-secondary btn-block">
                    View {{ActivityFeedNewItems}} new Item<span ng-if="ActivityFeedNewItems > 1">s</span>
                </a>
            </div>

            <div id="no-activities-in-feed" class="clearfix" ng-if="ActivityFeedItems.length == 0 && ReloadingFeed == false && ActivityFeedNoMoreResults == true">
                <div class="text">
                    <p>No company activity.</p>
                    <h3>What is the Activity Feed?</h3>
                    <p>Get the pulse of your company by viewing a real-time feed of activities, which include:</p>
                    <ul>
                        <li>New Leads</li>
                        <li>Job Status changes</li>
                        <li>Job Messages</li>
                        <li>Jobs Sold</li>
                    </ul>
                </div>
                <img ng-src="/Images/dashboard/empty-state-activity-feed.png" alt="" />
            </div>

            <div id="activity-list-scroll" scrolling-element class="scrollbar-macosx scrolling-element" al-infinite-scroll='nextActivityFeed()' al-infinite-scroll-disabled='busy' al-infinite-scroll-distance='700' ng-show="ActivityFeedItems.length > 0">

                <ul id="activity-list">
                    <li class="activity clearfix" ng-class="{'activity__callout': feedItem.Value.Milestone == 3}" ng-repeat="feedItem in ActivityFeedItems" ng-switch on="feedItem.ItemType" ax-test-readText="dashboard_ActivityFeed_Item_txt">
                        <div ng-switch-when="0">
                            <!-- Milestone Change -->
                            <div class="left">
                                <div ng-if="feedItem.Value.Milestone == 3 && (feedItem.Value.ProfilePictureUrl != '' && feedItem.Value.ProfilePictureUrl != null)" class="activity-avatar" style="background-image:url({{feedItem.Value.ProfilePictureUrl}}NewSmall.png)" ax-test-captureImage="dashboard_ActivityFeed_ActivityIcon_img"></div>
                                <div ng-if="feedItem.Value.Milestone == 3 && (feedItem.Value.ProfilePictureUrl == '' || feedItem.Value.ProfilePictureUrl == null)" class="activity-avatar" ax-test-captureImage="dashboard_ActivityFeed_ActivityIcon_img">
                                    <p class="user-initials" al-initials="{{feedItem.Value.SalesPersonName}}"></p>
                                </div>
                                <div ng-if="feedItem.Value.Milestone != 3">
                                    <svg class="activity-icon icon-milestone-{{feedItem.Value.MilestoneName|lowercase}}" ax-test-captureImage="dashboard_ActivityFeed_ActivityIcon_img"><use xlink:href="" ng-xlink-href="/Images/icon-sprite.svg#icon-milestone-{{feedItem.Value.MilestoneName|lowercase}}"></use></svg>
                                </div>
                                <div class="activity-time-stamp" ax-test-readText="dashboard_ActivityFeed_ActivityTimeStamp_txt">{{::resolveTimeFrom(feedItem.Date, false)}}</div>
                            </div>
                            <div class="right">
                                <header class="activity-header">
                                    <span class="activity-type" ax-test-readText="dashboard_ActivityFeed_ActivityType_txt">{{getFeedItemTitle(feedItem)}}: </span>
                                    <span class="activity-creator" ax-test-readText="dashboard_ActivityFeed_ActivityCreator_txt">{{feedItem.Value.SalesPersonName}}</span>
                                </header>
                                <div class="activity-job-info" ng-if="feedItem.JobName != null">
                                    <a ng-href="{{getJobUrl(feedItem)}}" ax-test-click="dashboard_ActivityFeed_ActivityJobInfo_link">{{feedItem.JobName}}</a>
                                </div>
                                <div ng-if="(feedItem.Value.Milestone == 3 || feedItem.Value.Milestone == 2) && feedItem.Value.Total > 0" class="activity-amount">{{feedItem.Value.Total | currency}}</div>
                                <div ng-if="(feedItem.Value.Milestone == 1 || (feedItem.Value.Milestone == 2 && $scope.isLeadMilestoneDisabled == true)) && feedItem.Value.LeadSource != null" class="activity-leadsource" ax-test-readText="dashboard_ActivityFeed_LeadSource_txt">Source: {{feedItem.Value.LeadSource}}</div>
                                <div ng-if="(feedItem.Value.Milestone == 1 || (feedItem.Value.Milestone == 2 && $scope.isLeadMilestoneDisabled == true)) && feedItem.Value.JobCategory != null" class="activity-jobcategory" ax-test-readText="dashboard_ActivityFeed_JobCategory_txt">Category: {{feedItem.Value.JobCategory}}</div>
                            </div>
                        </div>
                        <div ng-switch-when="1">
                            <!-- Comment Change -->
                            <div class="left">
                                
                                <div ng-if="feedItem.Value.CompanyUser.User.ProfilePicture != '' && feedItem.Value.CompanyUser.User.ProfilePicture != null" class="activity-avatar" style="background-image:url({{feedItem.Value.CompanyUser.User.ProfilePicture}}NewSmall.png)"></div>
                                <div ng-if="feedItem.Value.CompanyUser.User.ProfilePicture == '' || feedItem.Value.CompanyUser.User.ProfilePicture == null" class="activity-avatar">
                                    <p class="user-initials" ng-if="!feedItem.Value.CompanyUser.Initials" al-initials="{{feedItem.ActivityCreatorDisplayName}}"></p>
                                    <p class="user-initials" ng-if="feedItem.Value.CompanyUser.Initials">{{feedItem.Value.CompanyUser.Initials}}</p>
                                </div>
                                <div class="activity-time-stamp" ax-test-readText="dashboard_ActivityFeed_ActivityTimeStamp_txt">{{::resolveTimeFrom(feedItem.Value.CreatedDate, false)}}</div>
                            </div>
                            <div class="right">
                                <header class="activity-header">
                                    <span class="activity-type" ax-test-readText="dashboard_ActivityFeed_ActivityType_txt">Comment by: </span>
                                    <span class="activity-creator" ax-test-readText="dashboard_ActivityFeed_ActivityCreator_txt">{{ ::feedItem.ActivityCreatorDisplayName }}</span>
                                </header>
                                <div class="activity-job-info">
                                        <a ng-href="{{getJobMessageUrl(feedItem, true)}}" ax-test-click="dashboard_ActivityFeed_ActivityJobInfo_link">{{::feedItem.JobName}}</a>
                                </div>
                                <div class="activity-message-type" ng-if="feedItem.Value.Tags.length > 0">- {{::feedItem.Value.Tags.join(', ')}}</div>
                                <p class="activity-message" data-dd-collapse-text="250" ng-bind-html="feedItem.Value.Message" ax-test-readText="dashboard_ActivityFeed_ActivityMessage_txt"></p>
                                <p ng-show="feedItem.Value.PushNotifications.length > 0"><strong>Sent to: </strong><span ng-repeat="notification in feedItem.Value.PushNotifications">{{::notification.CompanyUser.DisplayName}}<span ng-show="!$last">, </span></span></p>
                                <div class="comment-meta" ng-init="setAttachmentTypes(feedItem.Value)">
                                    <div class="attachment-preview" ng-if="feedItem.Value.Attachments && feedItem.Value.Attachments.length > 0">
                                        
                                        <div class="photos clearfix">
                                            <div class="photo" ng-repeat="attachment in feedItem.Value.Photos">
                                                <img ax-photoswipe selector=".dashboardpwsptemplate" simple-attachments="feedItem.Value.Photos" index="$index" uses-sidebar="false" ng-src="{{attachment.FileURL}}/w_50,h_50/" />
                                            </div>
                                        </div>
                                        <ul class="documents">
                                            <li class="document" ng-repeat="attachment in feedItem.Value.Documents">
                                                <a class="file-name" ng-href="{{GetDownloadLink(attachment)}}" target="_blank">
                                                    <svg class="icon icon-paper-outline">
                                                        <use xlink:href="/Images/icon-sprite.svg#icon-paper-outline"></use>
                                                    </svg>
                                                    {{attachment.Name}}<span ng-show="!attachment.HasExtension">{{attachment.Extension}}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="show-more-replies" ng-show="showMoreCount(feedItem) > 0">
                                    <button class="btn btn-text" ng-click="showAll(feedItem)">Show More Replies ({{showMoreCount(feedItem)}})</button>
                                </div>
                                <div class="message-replies" ng-hide="feedItem.Value.JobMessages1.length == 0">
                                    <ul class="message-replies-list">
                                        <li class="message-reply" ng-repeat="childMessage in feedItem.Value.JobMessages1" ng-show="childMessage.show == true">
                                            <div class="preview-message clearfix">
                                                <div class="left">
                                                    <div ng-if="childMessage.CompanyUser.User.ProfilePicture != '' && childMessage.CompanyUser.User.ProfilePicture != null" class="activity-avatar" style="background-image:url({{childMessage.CompanyUser.User.ProfilePicture}}NewSmall.png)"></div>
                                                    <div ng-if="childMessage.CompanyUser.User.ProfilePicture == '' || childMessage.CompanyUser.User.ProfilePicture == null" class="activity-avatar">
                                                        <p class="user-initials" al-initials="{{GetChildMessageCreatorDisplayName(childMessage)}}"></p>
                                                    </div>
                                                    <div class="message-time">{{::resolveTimeFrom(childMessage.CreatedDate, false)}}</div>
                                                </div>
                                                <div class="right">
                                                    <p class="message-by">{{GetChildMessageCreatorDisplayName(childMessage)}}</p>
                                                    <p class="message-body" ng-bind-html="childMessage.Message"></p>
                                                    <p ng-show="childMessage.PushNotifications.length > 0"><strong>Sent to: </strong><span ng-repeat="notification in childMessage.PushNotifications">{{::notification.CompanyUser.DisplayName}}<span ng-show="!$last">, </span></span></p>
                                                    <div class="comment-meta" ng-init="setAttachmentTypes(childMessage)">
                                                        <div class="attachment-preview" ng-if="childMessage.Attachments && childMessage.Attachments.length > 0">
                                                            <label class="attachment-title">Attachments:</label>
                                                            <div class="photos clearfix">
                                                                <div class="photo" ng-repeat="attachment in childMessage.Photos">
                                                                    <img ax-photoswipe selector=".dashboardpwsptemplate" simple-attachments="childMessage.Photos" index="$index" uses-sidebar="false" ng-src="{{attachment.FileURL}}/w_50,h_50/" />
                                                                </div>
                                                            </div>
                                                            <ul class="documents">
                                                                <li class="document" ng-repeat="attachment in childMessage.Documents">
                                                                    <a class="file-name" ng-href="{{GetDownloadLink(attachment)}}" target="_blank">
                                                                        <svg class="icon icon-paper-outline">
                                                                            <use xlink:href="/Images/icon-sprite.svg#icon-paper-outline"></use>
                                                                        </svg>
                                                                        {{attachment.Name}}<span ng-show="!attachment.HasExtension">{{attachment.Extension}}</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <span class="flex flex-center-center" ng-cloak ng-show="ActivityFeedNoMoreResults == false && ActivityFeedBusy == true">
                    <svg class="icon-loading" style="fill: #777;">
                        <use xlink:href="/Images/icon-sprite.svg#icon-loading"></use>
                    </svg>
                </span>
            </div>
            <span class="flex flex-center-center reloading-feed__icon-loading" ng-cloak ng-if="ReloadingFeed">
                <svg class="icon-loading" style="fill: #777;">
                    <use xlink:href="/Images/icon-sprite.svg#icon-loading"></use>
                </svg>
            </span>
        </div>
    </aside>
    <ax-photoswipe-template selector="dashboardpwsptemplate" uses-sidebar="false"></ax-photoswipe-template>
    
</div>


<div class="overlay" ng-show="takePaymentPermissionModal" ng-cloak>
    <div class="overlay__content overlay__content--sm">
        <div class="flex flex-col flex-grow">
            <header class="overlay__header">
                <h2 class="overlay__heading flex flex-center-center">Payment Processing</h2>
            </header>
            <div class="overlay__body f--16">
                <p class="f--bold m-b--md">Sorry, the Payment Processing add-on is not enabled.</p>
                <p class="m-b--xxl">The Payment Processing add-on must be enabled by an account administrator before any payments can be processed.</p>

                <p class="f--bold m-b--md">Why enable this add-on?</p>
                <ul class="bullet-list p-l--xl">
                    <li class="m-b--md">Take credit card and ACH payments</li>
                    <li class="m-b--md">Process a payments instantly or request via email</li>
                    <li class="m-b--md">Get a payment website with your company’s branding</li>
                    <li class="m-b--md">Track payment requests</li>
                    <li class="m-b--md">Processed payments automatically post to the Worksheet and Quickbooks (if integrated with QuickBooks)</li>
                </ul>
            </div>
            <footer class="overlay__footer flex flex-between-center">
                <button class="button-v3--sm button-v3--text-blue" ng-click="takePaymentPermissionModal = false" tabindex="-1">Cancel</button>
                <button class="button-v3--sm button-v3--solid-blue" ng-click="takePaymentPermissionModal = false" tabindex="-1">Close</button>
            </footer>
        </div>
    </div>
</div>

<div class="overlay" ng-show="enablePaymentPermissionModal" ng-cloak>
    <div class="overlay__content overlay__content--sm">
        <div class="flex flex-col flex-grow">
            <header class="overlay__header">
                <h2 class="overlay__heading flex flex-center-center">Payment Processing</h2>
            </header>
            <div class="overlay__body f--16">
                <p class="f--bold f--red m-b--md">Sorry, you do not have permissions to process a payment.</p>
                <p>Please ask your account administrator to change the add-on permissions.</p>
            </div>
            <footer class="overlay__footer flex flex-between-center">
                <button class="button-v3--sm button-v3--text-blue" ng-click="enablePaymentPermissionModal = false" tabindex="-1">Cancel</button>
                <button class="button-v3--sm button-v3--solid-blue" ng-click="enablePaymentPermissionModal = false" tabindex="-1">Close</button>
            </footer>
        </div>
    </div>
</div>

<div class="overlay" ng-show="takeFinancingPermissionModal" ng-cloak>
    <div class="overlay__content overlay__content--sm">
        <div class="flex flex-col flex-grow">
            <header class="overlay__header">
                <h2 class="overlay__heading flex flex-center-center">Financing</h2>
            </header>
            <div class="overlay__body f--16">
                <p class="f--bold m-b--md">Sorry, the Financing add-on is not enabled.</p>
                <p class="m-b--xxl">The Financing add-on must be enabled by an account administrator before any payments can be processed.</p>

                <p class="f--bold m-b--md">Why enable this add-on?</p>
                <ul class="bullet-list p-l--xl">
                    <li class="m-b--md">Close more deals by offering credit to your customers</li>
                    <li class="m-b--md">Get paid sooner</li>
                    <li class="m-b--md">Hand-pick which financing options you wish to offer your customers</li>
                </ul>
            </div>
            <footer class="overlay__footer flex flex-between-center">
                <button class="button-v3--sm button-v3--text-blue" ng-click="takeFinancingPermissionModal = false" tabindex="-1">Cancel</button>
                <button class="button-v3--sm button-v3--solid-blue" ng-click="takeFinancingPermissionModal = false" tabindex="-1">Close</button>
            </footer>
        </div>
    </div>
</div>





    <div class="overlay" ng-show="enableAdminSmartDocsModal" ng-cloak style="z-index: 2039;">
        <!-- 2039 so this modal is behind the welcome modal -->
        <div class="overlay__content overlay__content--md">
            <div class="flex flex-col flex-grow">
                <header class="overlay__header">
                    <h1 class="f--42 f--bold f--center m-t--xl m-b--xl">
                        Try Smart(er) Docs for Free
                    </h1>
                    <button class="overlay__close-button" ng-click="enableAdminSmartDocsModal = false">
                        <svg class="overlay__close-icon">
                            <use xlink:href="Images/icon-sprite.svg#icon-plus" />
                        </svg>
                    </button>
                </header>
                <div class="overlay__body" style="padding: 20px 40px;">
                    <div class="f--light f--18">
                        <p class="m-b--lg f--bold f--24">
                            Beautifully designed documents, impressive sales presentations, and more in just a few clicks.
                        </p>
                        <div class="flex flex-center-center">
                            <div class="m-b--lg">
                                Save time and impress customers with our most popular add-on. Smart(er) Docs makes it easier than ever to create and manage company documents without the hassle.

                            </div>
                            <div>
                                <svg class="m-y--xl" width="100%" height="65">
                                    <use xlink:href="/Images/icon-sprite.svg#icon-smartdocs-prefilled"></use>
                                </svg>
                            </div>
                        </div>

                        <ul class="bullet-list m-b--xl p-l--xl">
                            <li>Customize documents and assemble packets in seconds</li>
                            <li>Present or share proposals on the fly</li>
                            <li>Set automated signature reminders and expirations on any document</li>
                        </ul>
                        <p>
                            Note: Account administrators must enable the add-on to use it
                            for free until 7/31/2025.
                        </p>
                    </div>
                </div>
                <footer class="overlay__footer flex flex-between-center">
                    <div class="branded-checkbox">
                        <input id="dont-show-modal" type="checkbox" ng-model="dontShowAdminSmartDocsModalSetting.ValueString" ng-change="updateAdminSmartDocsFreeTrialModalSetting()">
                        <label for="dont-show-modal" style="font-size: 16px; background-size: 20px; padding-left: 28px;">Don't show again</label>
                    </div>
                    <button class="button-v3--sm button-v3--solid-blue" ng-click="startEnableSmartDocs()" tabindex="-1">Enable Add-On</button>
                </footer>
            </div>
        </div>
    </div>



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



    <script src="https://static.alstatic.net/scriptbundle/Dashboard-793420704845d1ab.js" crossorigin integrity='sha512-L8K1t63FTlj5H8p5slexSbxXSA4AbF7cm2NbBDat8EO4+BYqKZ2r+Cqc8DFbRVz7HN8H1yfHl5xBvBDZ06u6Kw=='></script>
    <script src="https://static.alstatic.net/dashboard-3fdf897d6c6c43beb60c.bundle.js" crossorigin integrity='sha512-qbBTK5HyKIdGRgYeu/LJNhCLhG267lWnhd5DvIhCj0hCDhMtVILPiD1iCLAB0vosShpTCrPXoxaJ47+MK5HrQw=='></script>

    <script>
        acculynx.angular.addDependency("ngCookies");
        acculynx.angular.addDependency("ngProgress");
        acculynx.angular.addDependency("emguo.poller");
        acculynx.angular.addDependency("ngSanitize");
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
