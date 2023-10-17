package edu.poly.shop.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import edu.poly.shop.domain.Suppllier;
import edu.poly.shop.repository.SuppllierRepository;
import edu.poly.shop.service.SuppllierService;
@Service
public class SuppllierServiceImpl implements SuppllierService{
	@Autowired
	SuppllierRepository repository;

	@Override
	public <S extends Suppllier> S save(S entity) {
		return repository.save(entity);
	}

	@Override
	public List<Suppllier> findAll(Sort sort) {
		return repository.findAll(sort);
	}

	@Override
	public Page<Suppllier> findAll(Pageable pageable) {
		return repository.findAll(pageable);
	}

	@Override
	public List<Suppllier> findAll() {
		return repository.findAll();
	}

	@Override
	public Optional<Suppllier> findById(Long id) {
		return repository.findById(id);
	}

	@Override
	public boolean existsById(Long id) {
		return repository.existsById(id);
	}

	@Override
	public Suppllier getOne(Long id) {
		return repository.getOne(id);
	}

	@Override
	public long count() {
		return repository.count();
	}

	@Override
	public void deleteById(Long id) {
		repository.deleteById(id);
	}

	@Override
	public Suppllier getById(Long id) {
		return repository.getById(id);
	}

	@Override
	public void delete(Suppllier entity) {
		repository.delete(entity);
	}

	@Override
	public Suppllier getReferenceById(Long id) {
		return repository.getReferenceById(id);
	}

	@Override
	public void deleteAll() {
		repository.deleteAll();
	}
	

}
