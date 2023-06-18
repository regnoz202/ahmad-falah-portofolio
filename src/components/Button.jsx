import React from "react";
import Link from "next/link";

export default function Button(props) {
  return (
    <div className={props.class}>
      <Link href="https://github.com/regnoz202/react-mini-project" target="_blank">
        <button
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700"
        >
          {props.string}
        </button>
      </Link>
    </div>
  );
}
