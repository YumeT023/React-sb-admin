import React, { ReactNode } from "react";

export interface Person {
    name: string;
    position: string;
    office: string;
    age: string;
    startDate: string;
    salary: string;
}

export interface ButtonType {
    id: string;
    type: string;
    icon: string;
    onClick?: () => void;
    Class?: string;
}

export interface TableHeaderType {
    onClick: (by: PersonKey, id: number) => void;
    Pkey: PersonKey;
    label: string;
    status: number;
    className?: string;
    id: number;
}

export interface TableLayoutType {
    entryData: Array<Person>;
    entry: number;
}

export interface CardType {
    extraClass?: string;
    children?: ReactNode;
}

export interface NavLinkCollapsedType {
    target?: string;
    controls?: string;
    hasIcon?: boolean;
    isCollapsed?: boolean;
    linkIcon?: string;
    extraClass?: string;
    href?: string;
    collapsedArrow?: string;
    children: React.ReactNode;
}

export type Nav = {
    href: string;
    label: string;
}

export type PersonKey = 'name' | 'position' | 'office' | 'age' | 'startDate' | 'salary';


export interface Pagination {
    patt: RegExp;
    entryPerPage: number;
    onClick: (pageId: number, entryOnPage: Array<Person>) => void;
    loadData: (sample: Array<Person>) => void
}