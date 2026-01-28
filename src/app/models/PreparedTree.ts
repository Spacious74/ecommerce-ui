import { ChildCategory } from "./CategoryTree";

export interface PreparedTree {
    id: number;
    parentId: number;
    categoryName: string;
    urlKey: string;
    position: number;
    children : ChildCategory[]
}