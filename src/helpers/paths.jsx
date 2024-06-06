export const paths = {
  login: "/login",
  home: "/",

  // client
  client: "/client",
  submit: "/client/submit",
  openClient: "/client/open",
  inprogressClient: "/client/inprogress",
  resovledClient: "/client/resolved",
  profileClient: "/client/profile",

  // agents
  agent: "/agent",
  agentBucket: "/agent/bucket",
  agentReopen: "/agent/reopen",
  agentAssigned: "/agent/assigned",
  agentHandover: "/agent/handover",
  agentPickTickets: "/agent/my-picks",
  // agentOpenTicketDetail: (id = id) => `agent/ticket/:${id}`

  // admin
  admin: "/admin",
  category: "/admin/category",
}


// /agent/ticket/:id