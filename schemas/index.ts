/**
 * fileoverview: 이 파일은 모든 스키마를 한번에 불러오기 위한 파일입니다.
 * *스키마란? 데이터베이스에서 데이터를 저장하고 읽어오기 위한 틀을 정의한 것입니다.
 */

import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(1, {
    message: "Password must be at least 1 character.",
  }),
});
