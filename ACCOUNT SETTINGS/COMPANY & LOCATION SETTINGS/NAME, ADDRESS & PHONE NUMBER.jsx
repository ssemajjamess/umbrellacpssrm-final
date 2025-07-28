
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
    <title ng-init='title = "Account Settings"' ng-bind="title + ' &middot; AccuLynx'">Account Settings &middot; AccuLynx</title>
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
    
    <link href="https://static.alstatic.net/stylebundle/Addons-45e77a0ee89c7ae4.css" rel="stylesheet"/>
    <link href="https://static.alstatic.net/stylebundle/AccountSettings-45a27275ca03855b.css" rel="stylesheet"/>

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
        <ax-modal v-model="showSubmitAnIdeaModal" :component="submitAnIdeaModalView" :data="{'ViewAllIdeasURL': 'http://feedback.acculynx.com/forums/243621-general-feedback/?sso=yKNHDwZQdVXYO2TtEC5e8El1b6Oy1VlDCOhh%2f0Tr7R91OR2QJHXLAsQGiP%2fIUjymVANUIDPLiIQMWKpaZGN%2bAo0YyFRRzxcSJ7kkEtSlX47tpehNqxp22Cn%2b1lis4HuDLI6%2f1crq9vx4Lw%2fYx38waxOTOuZ%2b%2blNIpAzU%2fpD3bvl3tzscMT0UwinEYV6j3Y5Qz8pA3N79X4mu9LAHmXSTTQ%3d%3d'}"></ax-modal>
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



<div id="main-content-wrapper" >
    

<script>
    window.locationID = "707968e7-0d10-4801-8305-13aff1daf8bf";
    window.leadSources = null;
    window.isLite = "True";
    window.companyList =  null;
</script>




<div class="account-settings__parent f--sans" ng-cloak style="margin: 60px 10px;">
    <div id="AccountSettingsMenuVue">

</div>


    <!--Menu will go here-->
    <div id="AccountSettingsVue" data-bootstrap=''></div>
</div>

<!--Vue App-->
<div id="AddonApp" data-initialProps=''></div>

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



    <script src="https://static.alstatic.net/scriptbundle/Addons-66b4e688bd34a475.js" crossorigin integrity='sha512-GWYYbPbzm9Ja68TCv9Bw7XNGkQ2MLFFfTEq2b+ZSTT5EC12VFwM+Y89jab7lLxlWzFR2EY1P93hQ8NxJcEy4Yg=='></script>
    <script src="https://static.alstatic.net/scriptbundle/AXQuillEditor-6b47960c409864fa.js" crossorigin integrity='sha512-6ZbU+rraKy3BkXaswHoPwzPp+WCSbGHlpV+cZ7iFysiBroI6REGIROheucpeWNmcb81mcF7KRPkP63Axx2zHZw=='></script>
    <script src="https://static.alstatic.net/accountsettings-8ed5c17becf7406f386a.bundle.js" crossorigin integrity='sha512-KR5SQxGY/XuzCnREFa0WoDtiktvlI9lnW/gGMuQVuypM5M5hQhmmdK6nP7MW9B11oC4zgecAaySCObx+oDltyQ=='></script>
    <script src="https://static.alstatic.net/accountsettingsmenu-d811a8eaef0082d28885.bundle.js" crossorigin integrity='sha512-HNDYMOq6NXNT8jQVTAjI4UI4ckrGn/T6nQtqy+sph08mzag+SCxoBgkhjgLgAOjHb6dQ4OToEM2MqorHr1yAUQ=='></script>






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
