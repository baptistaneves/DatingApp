import { Photo } from '../_models/photo';

export interface Member
{
    id: number;
    username: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    dateOfBirth: Date;
    created: Date;
    lastActive: Date;
    gender: string;
    introduction: string;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
}