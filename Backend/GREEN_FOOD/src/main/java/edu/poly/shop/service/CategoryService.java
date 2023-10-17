package edu.poly.shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;


import edu.poly.shop.domain.Category;

public interface CategoryService {

	void deleteAll();

	Category getById(Long id);

	void deleteById(Long id);

	long count();

	boolean existsById(Long id);

	Optional<Category> findById(Long id);

	List<Category> findAll();

	List<Category> findAll(Sort sort);

	<S extends Category> S save(S entity);

	Page<Category> findByNameContaining(String Name, Pageable pageable);

	List<Category> findByNameContaining(String Name);

	

}
