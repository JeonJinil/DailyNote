package com.sweetwith.dailynote.service.user;

import com.sweetwith.dailynote.domain.user.User;
import com.sweetwith.dailynote.domain.user.UserRepository;
import com.sweetwith.dailynote.web.dto.UserJoinRequestDto;
import com.sweetwith.dailynote.web.dto.UserResponseDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import javax.validation.ConstraintViolationException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Long registerUser(UserJoinRequestDto userJoinRequestDto) {
        User user = new User(userJoinRequestDto);
        try {
            return userRepository.save(user).getId();
        } catch (DataIntegrityViolationException e) {
            logger.error("registerUser error - loginId : {}", userJoinRequestDto.getLoginId(), e);
            throw new RuntimeException("정보를 다시 확인해주세요");
        }
    }

    public User loginUser(String loginId, String loginPw){
        return userRepository.findUserByLoginIdAndLoginPw(loginId,loginPw).get();
    }

    public UserResponseDto getUserDetail(Long id) {
        Optional<User> user = userRepository.findById(id);

        return new UserResponseDto(user.get());
    }

    public void modifyUser(Long id, String loginPw) {
        userRepository.updateLoginPw(id, loginPw);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

}

