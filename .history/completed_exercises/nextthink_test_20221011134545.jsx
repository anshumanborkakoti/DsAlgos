import React from "react";
import { useState, useEffect, useRef } from "react";
import classnames from "classnames";
// you should import `lodash` as a whole module
import lodash from "lodash";
import axios from "axios";

const ITEMS_API_URL = "https://example.com/api/items";
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export default function Autocomplete({ onSelectItem }) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState();
  const inputRef = useRef();
  const onChange = lodash.debounce(() => {
    setItems([]);
    console.log(inputRef.current.value);
    setInput(inputRef.current.value);
  }, DEBOUNCE_DELAY);
  useEffect(() => {
    setIsLoading(true);
    setItems([]);
    axios
      .get(ITEMS_API_URL, {
        params: {
          q: input,
        },
      })
      .then(({ data }) => {
        setItems([...data]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        throw new Error(`Error! ${error}`); //handle better
      });
  }, [input, setItems, setIsLoading]);
  const itemsList = items.map((item, index) => {
    return (
      <div key={item + index} className="list-item" onSelectItem={onSelectItem}>
        {item}
      </div>
    );
  });
  const inputClasses = classnames("control", { "is-loading": isLoading });
  return (
    <div className="wrapper">
      <div className={inputClasses}>
        <input
          type="text"
          className="input"
          onChange={onChange}
          ref={inputRef}
        />
      </div>
      {items.length > 0 && <div className="list is-hoverable">{itemsList}</div>}
    </div>
  );
}
