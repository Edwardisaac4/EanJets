export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border-subtle bg-bg-secondary py-12"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-start gap-8">
          {/* Address */}
          <div className="flex items-start gap-3">
            {/* Location Icon */}
            <svg
              className="w-5 h-5 mt-0.5 shrink-0 text-text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <div>
              <p className="text-sm font-semibold text-text-primary">
                EAN Jet Center
              </p>
              <p className="text-xs text-text-secondary leading-relaxed mt-1">
                Murtala Muhammed International Airport,
                <br />
                FAAN Terminal, Ikeja, Lagos
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            {/* Phone Icon */}
            <svg
              className="w-5 h-5 shrink-0 text-text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <a
              href="tel:+2340122789860"
              className="text-xs text-text-secondary hover:text-text-primary transition-colors"
            >
              +234 01 227 8960
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} EAN Aviation. All rights reserved.
          </p>
          <img
            src="/assets/EAN Logo White.png"
            alt="EAN Jets"
            className="h-5 opacity-40"
          />
        </div>
      </div>
    </footer>
  );
}
