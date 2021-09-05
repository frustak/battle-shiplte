export namespace Schema {
    export type Token = {
        access_token: string
        token_type: string
        user: User
    }

    export type User = {
        id: number
        username: string
    }

    export type Lobby = {
        id: number
        uuid: string
        host: User
        players: User[]
        has_started: boolean
        is_full: boolean
    }
}
