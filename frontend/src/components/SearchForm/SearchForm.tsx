import { ChangeEvent, FormEvent, useState } from 'react';
import operations from '../../redux/weather/weatherOperations';
import { SearchStyles } from './SearchStyles.styled';
import { PiSpinnerGap } from "react-icons/pi";
import { IoMdSearch } from "react-icons/io";
import { useAppDispatch } from '../../redux/hooks/hooks';
import { changeSortValue } from '../../redux/weather/weatherSlice';
import { SortValue } from 'types/types';


const SearchForm = () => {
    const [findText, setFindText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useAppDispatch();

    function onChange (e: ChangeEvent<HTMLInputElement>) {
        setFindText(e.target.value)
    }

    function onSortChange (e: ChangeEvent<HTMLSelectElement>) {
      dispatch(changeSortValue(e.target.value as SortValue))
    }

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true)
        await dispatch(operations.getWeatherByCity(findText))

        setIsLoading(false)
        setFindText('')
    }

  return <SearchStyles onSubmit={onSubmit}>
    <input type='text' onChange={onChange} value={findText} />
    <select  onChange={onSortChange}>
      <option value={SortValue.name}>Town</option>
      <option value={SortValue.time}>Last update</option>

    </select>
    <button disabled={!findText} type='submit'>{isLoading ?  <PiSpinnerGap className="spinner" size={20} /> : <IoMdSearch size={20}/>}</button>
  </SearchStyles>
}

export default SearchForm