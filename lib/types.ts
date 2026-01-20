export type Region = 'Kanto' | 'Kinki' | 'Hokkaido' | 'Kyushu' | 'Chubu' | 'Tohoku' | 'Chugoku' | 'Shikoku'; // Extended regions | 'Kinki' | 'Chugoku' | 'Shikoku' | 'Kyushu';

export interface Location {
    name: string;
    address: string;
    lat: number;
    lng: number;
    region: Region;
}

export interface Exhibition {
    id: string;
    title: string;
    school: string;
    schoolType: 'University' | 'Vocational'; // Added schoolType
    department: string; // e.g., "Graphic Design", "Oil Painting"
    startDate: string; // ISO 8601
    endDate: string; // ISO 8601
    location: Location;
    description: string;
    imageUrl: string;
    officialUrl?: string;
    tags: string[];
}
