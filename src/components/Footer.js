import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="flex justify-between flex-wrap p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 other:justify-evenly">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{' '}
        <Link to="/" className="hover:underline">
          Cinemate™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://www.instagram.com/martinntuwa/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline me-4 md:me-6"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/martinntuwa/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline me-4 md:me-6"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCJ8NFJFJwFj448eIpe36mRg"
            target="_blank"
            rel="noreferrer"
            className="hover:underline me-4 md:me-6"
          >
            Youtube
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/martinntuwa"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            Twitter
          </a>
        </li>
      </ul>
    </footer>
  )
}
