//* VARIANTS INTERFACES *//
interface AlertVariants {
  Success: React.FC<{ text: string }>;
  Error: React.FC<{ text: string }>;
}

export const Alert: AlertVariants = {
  Success: ({ text }) => (
    <div
      className="mb-4 flex items-center rounded-lg border border-green-300 bg-green-100 p-4 text-sm text-green-800 dark:border-green-800 dark:bg-gray-900 dark:text-green-400"
      role="alert"
    >
      <svg
        className="mr-3 inline h-4 w-4 flex-shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <div>
        <span className="font-medium">{text}</span>
      </div>
    </div>
  ),
  Error: ({ text }) => (
    <div
      className="mb-4 flex items-center rounded-lg border border-red-300 bg-red-100 p-4 text-sm text-red-800 dark:border-red-800 dark:bg-gray-900 dark:text-red-400"
      role="alert"
    >
      <svg
        className="mr-3 inline h-4 w-4 flex-shrink-0"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
      </svg>
      <div>
        <span className="font-medium">{text}</span>
      </div>
    </div>
  ),
};
