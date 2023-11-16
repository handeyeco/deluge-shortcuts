import { useSearchParams } from "react-router-dom";
import { toggleSubstring } from "../util/helpers";

function useSearch() {
  let [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") || "";

  function setSearch(next) {
    const copy = { ...searchParams };

    if (next) {
      copy.q = next;
    } else {
      delete copy.q;
    }

    setSearchParams(copy);
  }

  function toggleCommand(command) {
    setSearch(toggleSubstring(q, command));
  }

  return {
    search: q,
    setSearch,
    toggleCommand,
  };
}

export default useSearch;
