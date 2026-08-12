import type { UpdateUserType } from "../validators/user.validator.js";
export declare const findByIdUserService: (userId: string) => Promise<Omit<import("../models/user.model.js").UserDocument, "password"> | undefined>;
export declare const updateUserService: (userId: string, body: UpdateUserType, profilePic?: Express.Multer.File) => Promise<Omit<import("../models/user.model.js").UserDocument, "password">>;
//# sourceMappingURL=user.service.d.ts.map