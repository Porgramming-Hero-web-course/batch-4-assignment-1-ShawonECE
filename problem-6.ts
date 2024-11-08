interface Profile {
    name: string;
    age: number;
    email: string;
};

const updateProfile = (profile: Profile, partial: Partial<Profile>): Profile => {
    for (const key in partial) {
        profile[key] = partial[key];
    }

    return profile;
};