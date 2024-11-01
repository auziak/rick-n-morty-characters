import { Episode } from "../../entities"

type Props = {
  episodes: Episode[] | null
  selectedEpisode?: Episode | null
  setSelectedEpisode: (value: Episode) => void
}

export const EpisodesSelector = ({ episodes, selectedEpisode, setSelectedEpisode }: Props) => {
  return (
    <div className="input-group mb-3">
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setSelectedEpisode(episodes?.find(ep => String(ep.id) === e.target.value)!)
        }
        className="form-select"
        value={selectedEpisode?.id}
      >
        <option value="0">Not selected</option>
        {episodes?.map(episode => {
          return <option value={episode.id}>{episode.name}</option>
        })}
      </select>
    </div>
  )
}
