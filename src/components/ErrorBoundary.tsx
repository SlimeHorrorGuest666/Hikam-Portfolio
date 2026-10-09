import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#101418] text-[#e0e3e8] flex flex-col items-center justify-center p-6 text-center font-sans">
          <div className="max-w-md bg-[#181c20] border border-[#ffb4ab]/30 rounded-xl p-6 shadow-2xl flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ffb4ab]/10 flex items-center justify-center text-[#ffb4ab]">
              <span className="material-symbols-outlined text-[28px]">error</span>
            </div>
            <h2 className="text-xl font-bold text-white tracking-tight">System Diagnostic Alert</h2>
            <p className="text-sm text-[#b9cbbc]">
              An unexpected error occurred while rendering the interface.
            </p>
            {this.state.error && (
              <pre className="w-full text-left bg-[#101418] p-3 rounded text-xs font-mono text-[#ffb4ab] overflow-x-auto">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.hash = 'skills-and-tech-stack';
                window.location.reload();
              }}
              className="px-4 py-2 bg-[#00ff9d] text-[#00391f] font-semibold text-sm rounded-lg hover:shadow-[0_0_15px_rgba(0,255,157,0.4)] transition-all cursor-pointer"
            >
              Reboot App Session
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
