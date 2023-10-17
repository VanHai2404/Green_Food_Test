package edu.poly.shop.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Supplliers")
public class Suppllier {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long suppllierId;
	@Column(name = "suppllier_name",length = 100,columnDefinition = "nvarchar(100) not null")
	private String name;
	@Column(name = "email",length = 100,columnDefinition = "nvarchar(100)")
	private String email;
	@Column(name = "phone",length = 20)
	private String phone;
	@Column(name = "Address",length = 100,columnDefinition = "nvarchar(100)")
	private String Address;

}
