package edu.poly.shop.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import edu.poly.shop.domain.Suppllier;

public interface SuppllierService  {

	void deleteAll();

	Suppllier getReferenceById(Long id);

	void delete(Suppllier entity);

	Suppllier getById(Long id);

	void deleteById(Long id);

	long count();

	Suppllier getOne(Long id);

	boolean existsById(Long id);

	Optional<Suppllier> findById(Long id);

	List<Suppllier> findAll();

	Page<Suppllier> findAll(Pageable pageable);

	List<Suppllier> findAll(Sort sort);

	<S extends Suppllier> S save(S entity);

}
