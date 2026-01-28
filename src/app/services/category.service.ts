import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MainCategoriesResponse } from "../models/MainCategories";
import { Observable } from "rxjs";
import { CategoryTreeResponse } from "../models/CategoryTree";

@Injectable({ providedIn: 'root' })
export class CategoryService {

    constructor(private http: HttpClient) { }

    private baseUrl = 'https://ecomm.dotvik.com/v2kart/service/categories';

    getMainCategories():Observable<MainCategoriesResponse> {
        return this.http.get<MainCategoriesResponse>(`${this.baseUrl}/mainCategories`);
    }

    getCategoryTree(code: string):Observable<CategoryTreeResponse> {
        return this.http.get<CategoryTreeResponse>(`${this.baseUrl}/${code}/tree`);
    }
}