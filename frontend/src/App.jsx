import React from 'react';

const MR_REVIEWS = [
  {
    id: 1,
    title: "Add user authentication endpoint",
    repo: "backend-core-service",
    status: "Changes Requested",
    issuesCount: 6,
    severity: "2 Critical · 3 High · 1 Medium",
    timeAgo: "2 minutes ago",
  },
  {
    id: 2,
    title: "Refactor payment processing module",
    repo: "billing-system",
    status: "Approved",
    issuesCount: 1,
    severity: "0 Critical · 0 High · 1 Low",
    timeAgo: "15 minutes ago",
  },
  {
    id: 3,
    title: "Fix N+1 query in user profile load",
    repo: "web-frontend",
    status: "Approved",
    issuesCount: 0,
    severity: "No issues",
    timeAgo: "1 hour ago",
  },
  {
    id: 4,
    title: "Update dependency versions for security",
    repo: "auth-gateway",
    status: "Changes Requested",
    issuesCount: 3,
    severity: "1 Critical · 2 Medium",
    timeAgo: "3 hours ago",
  }
];

function App() {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white font-sans selection:bg-purple-500/30">
      
      {/* Navigation */}
      <nav className="border-b border-purple-500/20 bg-[#151525]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                PR Review Buddy
              </h1>
            </div>
            <div className="hidden md:block h-5 w-px bg-purple-500/20"></div>
            <p className="hidden md:block text-sm text-indigo-200/70 font-medium">
              AI-powered code reviews for every Merge Request
            </p>
          </div>
          <div className="flex items-center">
            <span className="inline-flex flex-row items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse border border-emerald-300"></span>
              Agent Active
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Stats Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#1a1a2e] rounded-xl border border-indigo-500/20 p-6 shadow-[0_0_40px_rgba(79,70,229,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-indigo-200/60 text-xs font-bold uppercase tracking-[0.2em] mb-3">Total Reviews</h3>
            <p className="text-5xl font-light text-white tracking-tight">24</p>
          </div>
          <div className="bg-[#1a1a2e] rounded-xl border border-purple-500/20 p-6 shadow-[0_0_40px_rgba(168,85,247,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-purple-200/60 text-xs font-bold uppercase tracking-[0.2em] mb-3">Issues Caught</h3>
            <p className="text-5xl font-light text-white tracking-tight">87</p>
          </div>
          <div className="bg-[#1a1a2e] rounded-xl border border-blue-500/20 p-6 shadow-[0_0_40px_rgba(59,130,246,0.05)] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-blue-200/60 text-xs font-bold uppercase tracking-[0.2em] mb-3">Avg Review Time</h3>
            <p className="text-5xl font-light text-white tracking-tight">12s</p>
          </div>
        </section>

        {/* Activity Feed */}
        <section>
          <div className="flex items-center justify-between mb-6 pt-4 border-t border-indigo-500/10">
            <h2 className="text-xl flex items-center gap-2 font-medium text-white/90">
              Recent Activity
            </h2>
          </div>
          <div className="space-y-4">
            {MR_REVIEWS.map((mr) => (
              <div key={mr.id} className="bg-[#151525] rounded-xl border border-white/5 p-5 hover:border-purple-500/30 transition-colors shadow-sm cursor-default hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] group flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-indigo-50 text-base lg:text-lg tracking-tight group-hover:text-purple-300 transition-colors">{mr.title}</h3>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs leading-4 font-bold uppercase tracking-wider border ${mr.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]' : 'bg-rose-500/10 text-rose-400 border-rose-500/20 shadow-[0_0_10px_rgba(244,63,94,0.1)]'}`}>
                      {mr.status}
                    </span>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-indigo-200/60">
                    <div className="flex items-center gap-1.5 font-medium">
                      <svg className="w-4 h-4 text-indigo-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                      {mr.repo}
                    </div>
                    {mr.issuesCount > 0 ? (
                      <div className="flex items-center gap-1.5 text-rose-300/90 font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        {mr.issuesCount} issues found
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-emerald-300/90 font-medium">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        0 issues found
                      </div>
                    )}
                    <span className="text-white/20 hidden sm:inline">•</span>
                    <div className="font-mono text-xs text-indigo-300/50 bg-indigo-500/5 px-2 py-0.5 rounded backdrop-blur">
                      {mr.severity}
                    </div>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-between sm:flex-col sm:items-end gap-3 sm:w-36 shrink-0">
                  <span className="text-xs text-indigo-200/40 uppercase tracking-widest">{mr.timeAgo}</span>
                  <button className="px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 text-sm font-semibold tracking-wide rounded-lg border border-indigo-500/20 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500/40 hover:text-white hover:border-indigo-400/40 w-full sm:w-auto text-center group-hover:bg-indigo-500/20 shadow-md">
                    View Review
                  </button>
                </div>

              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
