package edu.poly.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import edu.poly.shop.domain.Suppllier;


@Repository
public interface SuppllierRepository extends JpaRepository<Suppllier, Long>{

}
