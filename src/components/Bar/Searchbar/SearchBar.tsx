import { useState } from 'react'
import { Button } from 'components/Button/Button/Button'
import { Input } from 'components/Form/Input'
import { FiSearch } from 'react-icons/fi'

interface Props {
  data: {
    image: string
    title: string
    description: string
  }[];
  onSearch: unknown

}
export const SearchBar = ({ data, onSearch }: Partial<Props>) => {
  const [searchTerm, setSearchTerm] = useState('')
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {
    const filteredData = data?.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filteredData) {
      onSearch(filteredData);
    }
  };
  return (
    <>
      <div className="flex my-5 gap-4">
        <div className="rounded-3xl bg-rich-black">
          <Input
            placeholder
            name="buscar"
            notLabel
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <div className="rounded-full">
          <Button icon={<FiSearch />} onClick={handleSearch} />
        </div>
      </div>
    </>
  )
}
