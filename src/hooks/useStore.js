import { useContext } from "react";
import StorageContext from './../contexts/storage';

export default function(...list) {
    let stores = useContext(StorageContext);
    return list.map(name => stores[name]);
}