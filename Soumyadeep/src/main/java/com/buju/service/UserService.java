package com.buju.service;

import com.buju.entity.User;

public interface UserService {

	public User saveUser(User user);

	public void removeSessionMessage();

}
