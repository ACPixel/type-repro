export type Badge = {
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string | null;
    Url: string;
    Artist: string;
    unlocked_after: number;
    UnlockCondition: string;
    Name: string;
}