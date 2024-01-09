import { Card } from '../components'
import { useFetch } from '../hooks/useFetch'
import { useTitle } from '../hooks/useTitle'

export const MovieList = ({ apiPath, title }) => {
  // API Fetch
  // const [movies, setMovies] = useState([])

  // Custom Hook
  const { data: movies } = useFetch(apiPath)

  // Add Page Title
  // useEffect(() => {
  //   document.title = `${title} | Cinemate`
  // })
  useTitle(title)

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map(movie => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  )
}
