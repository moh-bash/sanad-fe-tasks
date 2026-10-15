import { Lottie } from "lottie-react";
import listLoader from "../assets/Task-loader.json"

function ListLoaderUi() {
  return (
    <Lottie
        src={listLoader}
        autoplay
        loop
        className="w-full"
    />
  )
}

export default ListLoaderUi;
