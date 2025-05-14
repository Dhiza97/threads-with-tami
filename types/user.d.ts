export type TUserModel = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    likedPosts: string[];
    comments: number;
    createdAt: Date;
}

export type TUserLogin = {
    email: string;
    password: string;
}

export type TUserRegister = {
    name: string;
    email: string;
    password: string;
}