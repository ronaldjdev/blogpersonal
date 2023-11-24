import { Button } from 'components/Button/Button/Button'
import { Input } from 'components/Form/Input'
import { FiSearch } from 'react-icons/fi'

export const SearchBar = () => {
  return (
    <>
      <div className="flex my-5 gap-4">
        <div className="rounded-3xl bg-rich-black">
          <Input placeholder name="buscar" notLabel />
        </div>
        <div className="rounded-full">
          <Button icon={<FiSearch />} />
        </div>
      </div>
    </>
  )
}
