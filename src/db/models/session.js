import { model, Schema } from 'mongoose';

const sessionSchema = new Schema(
  {
    refreshToken: { type: String, required: true },
    accessToken: { type: String, required: true },
    refreshTokenValidUntil: { type: String, required: true },
    accessTokenValidUntil: { type: String, required: true },
    userId: { type: Schema.ObjectId, required: true, unique: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Session = model('session', sessionSchema);
