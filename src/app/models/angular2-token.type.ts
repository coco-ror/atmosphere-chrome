export interface AuthData {
    accessToken:    string;
}

export interface UserData {
    name:           string;
    // image:          string;
    image_url:      string;
    id : number;
    user_data: string;
    station_url: string;
    user_votes: number;
    user_id: number;
    is_admin: boolean;
}

// Configuration Options

export interface UserType {
    name:           string;
    path:           string;
}

export interface OAuthPaths {
    github?:        string;
}
