import { CircleX, Search } from 'lucide-react';
import {useState} from 'react'
import { Input } from '../ui/input';

function People() {
     const [cancelButton, setCancelButton] = useState(false);
     const [payer, setPayer] = useState("");
     const [filteredPayer, setFilteredPayer] = useState([]);
     const [selectedPayer, setSelectedPayer] = useState([]);
    const peoplesList = [
      { id: 1, name: "Alex", tag: "Payer" },
      { id: 2, name: "Alan", tag: "Attendee" },
      { id: 3, name: "Alice", tag: "Payer" },
      { id: 4, name: "Bob", tag: "Attendee" },
      { id: 5, name: "Charlie", tag: "Payer" },
      { id: 6, name: "Daniel", tag: "Attendee" },
      { id: 7, name: "Eve", tag: "Payer" },
      { id: 8, name: "Frank", tag: "Attendee" },
      { id: 9, name: "Grace", tag: "Payer" },
      { id: 10, name: "Henry", tag: "Attendee" },
    ];
    const handleSearchPeople = (value) => {
      setPayer(value);
      setCancelButton(true);
      console.log(value);
      if (value.trim() === "") {
        setFilteredPayer([]);
      } else {
        const filter = peoplesList.filter((p) =>
          p.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        );
        setFilteredPayer(filter.slice(0, 5));
      }
    };

    const handleSelectName = (id) => {
      setSelectedPayer((prev) =>
        prev.includes(id) ? prev.filter((n) => n !== id) : [...prev, id]
      );
    };

    const displayNames =
      payer.trim() === ""
        ? peoplesList.filter((person) => selectedPayer.includes(person.id))
        : filteredPayer;
  return (
    <div className="w-60">
      <div className="relative  ">
        <Search
          size={12}
          className="absolute top-[32%] left-1 text-slate-500"
        />
        <Input
          placeholder="Search Payer or attendee name"
          value={payer}
          className="indent-2 outline-none w-[100%]"
          onChange={(e) => handleSearchPeople(e.target.value)}
        />
        {cancelButton && (
          <CircleX
            size={12}
            className="absolute top-[34%] right-1 text-slate-500"
            onClick={() => {
              setCancelButton(false);
              setPayer("");
            }}
          />
        )}
      </div>
      <ul className="mt-2">
        {displayNames.map((person) => (
          <li key={person.id} className="flex items-center gap-2 p-1">
            <label className="custom-checkbox">
              <Input
                type="checkbox"
                checked={selectedPayer.includes(person.id)}
                onChange={() => handleSelectName(person.id)}
                className="hidden"
              />
              <span
                className={`checkbox-span w-4 h-4 block ${
                  selectedPayer.includes(person.id)
                    ? "bg-black border-2 border-gray rounded-sm"
                    : "bg-white border-2 rounded-sm"
                }`}
              ></span>
            </label>
            <span>{person.name}</span>
            <span className="text-xs text-slate-500 bg-gray-100 p-1">
              {person.tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default People