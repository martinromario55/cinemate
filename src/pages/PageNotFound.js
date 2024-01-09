import { Link } from 'react-router-dom'

import { Button } from '../components'

import PageNotFoundImage from '../assets/404_page-not-found.webp'

export const PageNotFound = () => {
  // Add Page Title
  document.title = `Page Not Found | Cinemate`

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">
            404 Opps!
          </p>
          <img
            src={PageNotFoundImage}
            alt="404 Page Not Found"
            className="max-w-lg"
          />
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <Button>Back To Home</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
