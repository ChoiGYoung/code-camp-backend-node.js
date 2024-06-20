import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

// import { KakaoStrategy } from 'passport-kakao'
// import { NaverStrategy } from 'passport-naver'

export class JwtAccessStrategy extends PassportStrategy(Strategy, 'access') {
  constructor() {
    super({
      //   jwtFromReques: (req) => {
      //     const temp = req.headers.Authorization; // Bearer akckljidjkc
      //     const accessToken = temp.toLowercase().replace('bearer ', '');
      //     return accessToken;
      //   },
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_ACCESS_SECRET,
    });
  }

  validate(payload) {
    console.log(payload); // { sub: alkdjiskd(유저ID) }

    return {
      id: payload.sub,
    };
  }
}
