import mongoose, { Document } from "mongoose";
export interface UserDocument extends Document {
    name: string;
    email: string;
    password: string;
    profilePicture: string | null;
    createdAt: Date;
    updatedAt: Date;
    comparePassword: (password: string) => Promise<boolean>;
    omitPassword: () => Omit<UserDocument, "password">;
}
declare const UserModel: mongoose.Model<UserDocument, {}, {}, {}, mongoose.Document<unknown, {}, UserDocument, {}, mongoose.DefaultSchemaOptions> & UserDocument & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, UserDocument>;
export default UserModel;
//# sourceMappingURL=user.model.d.ts.map