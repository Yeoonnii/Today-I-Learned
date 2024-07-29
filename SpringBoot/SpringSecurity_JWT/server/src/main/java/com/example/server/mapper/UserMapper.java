package com.example.server.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.example.server.dto.UserAuth;
import com.example.server.dto.Users;

@Mapper
public interface UserMapper {
    
    // 회원 등록
    public int insert(Users user);

    // 회원 조회
    public Users select(int userNo);

    // 사용자 인증(로그인) - id
    public Users login(String username);

    // 회원 권한 등록
    public int insertAuth(UserAuth userAuth);

    // 회원 수정
    public int update(Users user);

    // 회원 삭제
    public int delete(String userId);
}
