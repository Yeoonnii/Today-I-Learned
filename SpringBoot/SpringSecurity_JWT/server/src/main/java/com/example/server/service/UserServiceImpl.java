package com.example.server.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.server.dto.UserAuth;
import com.example.server.dto.Users;
import com.example.server.mapper.UserMapper;

import jakarta.servlet.http.HttpServletRequest;

public class UserServiceImpl implements UserService {

    private static String R_USER = "ROLE_USER";

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public int insert(Users user) {
        // 비밀번호 암호화
        String userPw = user.getUserPw();
        String encodedPw = passwordEncoder.encode(userPw);
        user.setUserPw(encodedPw);

        // 회원 등록
        int result = userMapper.insert(user);

        // 권한 등록
        if( result > 0 ){
            UserAuth userAuth = new UserAuth();
            userAuth.setAuth( user.getUserId() );
            userAuth.setAuth(R_USER);
            result = userMapper.insertAuth(userAuth);
        }

        return result;
    }

    @Override
    public Users select(int userNo) {
        return userMapper.select(userNo);
    }

    @Override
    public void login(Users user, HttpServletRequest request) {

    }

    @Override
    public int update(Users user) {
        // 비밀번호 암호화
        String userPw = user.getUserPw();
        String encodedPw = passwordEncoder.encode(userPw);
        user.setUserPw(encodedPw);

        int result = userMapper.update(user);

        return result;
    }

    @Override
    public int delete(String userId) {
        return userMapper.delete(userId);
    }
    
}
