import React from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
// Pages
// import HomePage from "pages/Home"
import SignInPage from "pages/auth/SignIn"
import SignUpPage from "pages/auth/SignUp"
import SignOutPage from "pages/auth/SignOut"
import VerifyPage from "pages/auth/Verify"
import NotFoundPage from "pages/NotFound"
import SetUp from "pages/SetUp"
import ConversationsPage from "pages/chat/Conversations"
import MessagesPage from "pages/chat/Messages"
import NewChatPage from "pages/chat/New"
import SettingsPage from "pages/Settings"

const Routes = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/" component={HomePage} /> */}
      <Redirect exact path="/" to="/chat" />
      <Route path="/sign-in" component={SignInPage} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/set-up" component={SetUp} />
      <Route path="/sign-out" component={SignOutPage} />
      <Route path="/chat/new" component={NewChatPage} />
      <Route path="/chat/:id" component={MessagesPage} />
      <Route path="/chat" component={ConversationsPage} />
      <Route path="/settings" component={SettingsPage} />
      <Route path="/verify/:id" component={VerifyPage} />
      {/* <Route component={NotFoundPage} /> */}
      <Redirect to="/chat" />
    </Switch>
  </BrowserRouter>
)

export default Routes
