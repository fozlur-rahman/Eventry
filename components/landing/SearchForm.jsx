"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { debounce } from "lodash";

const SearchForm = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // Debounce the handleSearch function
    const debouncedSearch = debounce(handleSearch, 500); // Adjust debounce delay as needed

    function handleSearch(term) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set("query", term);
        } else {
            params.delete("query");
        }
        replace(`${pathname}?${params.toString()}`);
    }

    const onInputChange = (e) => {
        debouncedSearch(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                className="bg-[#27292F] border border-[#CCCCCC]/20 py-1 px-2 rounded-md"
                onChange={onInputChange}
                defaultValue={searchParams.get("query")?.toString()}
            />
        </div>
    );
};

export default SearchForm;
