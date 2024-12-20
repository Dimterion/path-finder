import Form from "next/form";
import { Search } from "lucide-react";
import SearchFormReset from "@/components/SearchFormReset";

export default function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search paths"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button
          type="submit"
          className="search-btn text-white"
          aria-label="Search button"
        >
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
}
