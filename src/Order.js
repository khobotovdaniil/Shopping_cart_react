import React from 'react'

export default function({ onPrev, onChange, onNext, fields }){
	let isValid = fields.every(f => f.valid);

	return <div>
		<h1>Input data</h1>
		<hr/>
		<form>
		{ fields.map(field => (
			<div className="form-group" key={field.name}>
				<label>{field.label}</label>
				<input
					type="text" 
					className={`form-control ${field.value.length && !field.valid ? 'border border-danger' : ''}`}
					name={field.name}
					value={field.value}
					onChange={e => onChange(field.name, e.target.value.trim())}
				/>
			</div>
		)) }
		</form>
		<hr/>
		<button type="button" className="btn btn-warning" onClick={onPrev}>Back to cart</button>
		<button type="button" className="btn btn-success" onClick={onNext} disabled={!isValid}>Send</button>
	</div>;
}