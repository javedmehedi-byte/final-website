"use client";
import { useMemo, useState } from 'react';

export type Course = {
  name: string;
  fee: string;
  seats: number;
  level: string; // "Bachelor's" | 'Diploma'
  duration: string;
  slug?: string;
  internship?: string;
};

export default function CoursesTabs({ courses }: { courses: Course[] }) {
  const [tab, setTab] = useState<'all' | 'bachelors' | 'diploma'>('all');

  const filtered = useMemo(() => {
    if (tab === 'bachelors') return courses.filter(c => /bachelor/i.test(c.level));
    if (tab === 'diploma') return courses.filter(c => /diploma/i.test(c.level));
    return courses;
  }, [tab, courses]);

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Segmented control */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 p-1 shadow-sm">
          <button
            className={
              'px-5 py-2 rounded-full text-sm font-medium transition-colors ' +
              (tab === 'all'
                ? 'bg-white text-blue-600 shadow border border-blue-200'
                : 'text-gray-700 hover:text-blue-600')
            }
            onClick={() => setTab('all')}
            type="button"
          >
            All Courses
          </button>
          <button
            className={
              'px-5 py-2 rounded-full text-sm font-medium transition-colors ' +
              (tab === 'bachelors'
                ? 'bg-white text-blue-600 shadow border border-blue-200'
                : 'text-gray-700 hover:text-blue-600')
            }
            onClick={() => setTab('bachelors')}
            type="button"
          >
            Bachelor's Programs
          </button>
          <button
            className={
              'px-5 py-2 rounded-full text-sm font-medium transition-colors ' +
              (tab === 'diploma'
                ? 'bg-white text-blue-600 shadow border border-blue-200'
                : 'text-gray-700 hover:text-blue-600')
            }
            onClick={() => setTab('diploma')}
            type="button"
          >
            Diploma Programs
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {filtered.map((c, i) => {
          const gradients = [
            'from-indigo-600 via-violet-600 to-fuchsia-600',
            'from-emerald-500 via-teal-500 to-cyan-600',
            'from-amber-400 via-orange-500 to-red-500',
            'from-sky-600 via-blue-600 to-indigo-700',
            'from-pink-500 via-rose-500 to-red-500',
            'from-purple-600 via-fuchsia-600 to-pink-600'
          ];
          const g = gradients[i % gradients.length];
          return (
            <div
              key={c.name}
              className={`group relative rounded-3xl p-6 flex flex-col text-white shadow-[0_18px_40px_-12px_rgba(0,0,0,0.55)] bg-gradient-to-br ${g} overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_55px_-15px_rgba(0,0,0,0.65)]`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.25),transparent_65%)]" />
              <div className="relative mb-4 space-y-2">
                <h3 className="text-lg font-semibold tracking-tight drop-shadow-sm">{c.name}</h3>
                <div className="text-[13px] md:text-sm text-white/90 flex flex-wrap gap-x-3 gap-y-2">
                  <span className="inline-flex items-center gap-1 font-semibold">{c.fee}</span>
                  <span className="opacity-80">{c.seats} seats</span>
                  <span className="opacity-80">{c.level}</span>
                  <span className="opacity-80">{c.duration}</span>
                  {c.internship && <span className="opacity-80">{c.internship}</span>}
                </div>
              </div>
              <p className="relative text-white/90 text-sm leading-relaxed mb-6 font-medium">
                Comprehensive curriculum with lab access, clinical exposure, and expert mentorship.
              </p>
              <div className="mt-auto flex gap-3 relative">
                <a
                  href={c.slug ? `/courses/${c.slug}` : '/contact'}
                  className="inline-block bg-white/15 hover:bg-white/25 text-white px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm ring-1 ring-white/30 transition-colors"
                >
                  View Details
                </a>
                <a
                  href="/apply"
                  className="inline-block bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold shadow hover:bg-gray-50 transition-colors"
                >
                  Apply
                </a>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
