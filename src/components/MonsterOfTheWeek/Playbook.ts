export interface Move {
    auto?: boolean;
    name: string;
    description: string;
}
export interface TagGroup {
    description: string;
    tags: string[];
    freeform?: boolean;
    freeformTag?: string;
}
export interface MoveGroup {
    description: string;
    moves: Move[];
}
export interface TagList {
    description: string;
    tagGroups: TagGroup[];
}
export interface Playbook {

}