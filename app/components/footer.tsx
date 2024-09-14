import Link from "next/link";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 flex justify-between items-center py-2 lg:py-4">
      <p className="text-neutral-600 dark:text-neutral-300 opacity-0 transition-fadein-up"
        style={{ animationDelay: `1000ms` }}>
        © {new Date().getFullYear()} - kimuradev.com
      </p>
      <ul className="flex items-center gap-4">
        <li className="opacity-0 transition-fadein-up"
          style={{ animationDelay: `1000ms` }}>
          <a href="mailto:kimuradev@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="32px" height="32px"><linearGradient id="6769YB8EDCGhMGPdL9zwWa" x1="15.072" x2="24.111" y1="13.624" y2="24.129" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e3e3e3" /><stop offset="1" stop-color="#e2e2e2" /></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWa)" d="M42.485,40H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8h36.969 C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z" /><linearGradient id="6769YB8EDCGhMGPdL9zwWb" x1="26.453" x2="36.17" y1="25.441" y2="37.643" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f5f5f5" /><stop offset=".03" stop-color="#eee" /><stop offset="1" stop-color="#eee" /></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWb)" d="M42.485,40H8l37-29v26.485C45,38.874,43.874,40,42.485,40z" /><linearGradient id="6769YB8EDCGhMGPdL9zwWc" x1="3" x2="45" y1="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d74a39" /><stop offset="1" stop-color="#c73d28" /></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWc)" d="M5.515,8H8v32H5.515C4.126,40,3,38.874,3,37.485V10.515C3,9.126,4.126,8,5.515,8z M42.485,8 H40v32h2.485C43.874,40,45,38.874,45,37.485V10.515C45,9.126,43.874,8,42.485,8z" /><linearGradient id="6769YB8EDCGhMGPdL9zwWd" x1="24" x2="24" y1="8" y2="38.181" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity=".15" /><stop offset="1" stop-opacity=".03" /></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWd)" d="M42.485,40H30.515L3,11.485v-0.969C3,9.126,4.126,8,5.515,8h36.969 C43.874,8,45,9.126,45,10.515v26.969C45,38.874,43.874,40,42.485,40z" /><linearGradient id="6769YB8EDCGhMGPdL9zwWe" x1="3" x2="45" y1="17.73" y2="17.73" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f5f5f5" /><stop offset="1" stop-color="#f5f5f5" /></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWe)" d="M43.822,13.101L24,27.459L4.178,13.101C3.438,12.565,3,11.707,3,10.793v-0.278 C3,9.126,4.126,8,5.515,8h36.969C43.874,8,45,9.126,45,10.515v0.278C45,11.707,44.562,12.565,43.822,13.101z" /><linearGradient id="6769YB8EDCGhMGPdL9zwWf" x1="24" x2="24" y1="8.446" y2="27.811" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e05141" /><stop offset="1" stop-color="#de4735" /></linearGradient><path fill="url(#6769YB8EDCGhMGPdL9zwWf)" d="M42.485,8h-0.3L24,21.172L5.815,8h-0.3C4.126,8,3,9.126,3,10.515v0.278 c0,0.914,0.438,1.772,1.178,2.308L24,27.459l19.822-14.358C44.562,12.565,45,11.707,45,10.793v-0.278C45,9.126,43.874,8,42.485,8z" /></svg>
          </a>
        </li>
        <li className="opacity-0 transition-fadein-up"
          style={{ animationDelay: `1100ms` }}>
          <Link href="https://www.linkedin.com/in/kimuradev/" rel="noopener noreferrer" target="_blank" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" width="30" height="30" focusable="false" fill="var(--linkedin-color)">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </Link>
        </li>
        <li className="opacity-0 transition-fadein-up"
          style={{ animationDelay: `1200ms` }}>
          <Link href="https://github.com/kimuradev" rel="noopener noreferrer" target="_blank">
            <svg height="30" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="30" data-view-component="true" fill="currentColor">
              <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
            </svg>
          </Link>
        </li>
      </ul>
    </footer>
  )
}
