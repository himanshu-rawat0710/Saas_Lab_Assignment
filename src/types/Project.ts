
export interface KickStarterProjectType {
    "s.no": number,
    "amt.pledged": number,
    "blurb": string
    "by": string
    "country": string
    "currency": string
    "end.time": string
    "location": string
    "percentage.funded": number,
    "num.backers": string
    "state": string
    "title": string
    "type": string
    "url": string
}

// src/constants/SortingFields.ts

export enum SORT_FIELDS {
    S_NO = 's_no',
    PERCENTAGE_FUNDED = 'percentage_funded',
    PLEDGED = 'pledged',
}

export enum SORT_ORDER {
    ASC = 'asc',
    DESC = 'desc',
}