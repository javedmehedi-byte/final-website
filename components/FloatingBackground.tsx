'use client'

export default function FloatingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-teal-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Floating shapes */}
      <div className="absolute top-32 left-1/4 w-4 h-4 bg-blue-500/30 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
      <div className="absolute top-48 right-1/3 w-6 h-6 bg-teal-500/20 rounded-lg rotate-45 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-32 right-20 w-3 h-3 bg-blue-600/40 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
      <div className="absolute top-1/2 left-10 w-8 h-8 border-2 border-blue-400/20 rounded-full animate-pulse" style={{ animationDuration: '3.5s' }} />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3b82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  )
}
