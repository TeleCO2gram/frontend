import { Data } from "@angular/router";

export interface Message {
    id: number;
    type: string;
    date: string;
    weight: number;
    user_id: number;
}