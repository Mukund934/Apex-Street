import { useState, useEffect } from 'react';

export interface ValidationRule {
  test: (value: string) => boolean;
  message: string;
}

export interface FieldConfig {
  required?: boolean;
  rules?: ValidationRule[];
}

export function useFormValidation(fields: Record<string, FieldConfig>) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouchedState] = useState<Record<string, boolean>>({});
  const [isValid, setIsValid] = useState(false);

  const validateField = (name: string, value: string): string => {
    const config = fields[name];
    if (!config) return '';

    if (config.required && (!value || value.trim() === '')) {
      return 'This field is required';
    }

    if (config.rules) {
      for (const rule of config.rules) {
        if (!rule.test(value)) {
          return rule.message;
        }
      }
    }

    return '';
  };

  const setValue = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const setTouched = (name: string) => {
    setTouchedState(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, values[name] || '');
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {};
    let hasErrors = false;

    Object.keys(fields).forEach(name => {
      const error = validateField(name, values[name] || '');
      newErrors[name] = error;
      if (error) hasErrors = true;
    });

    setErrors(newErrors);
    setTouchedState(Object.keys(fields).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
    
    return !hasErrors;
  };

  useEffect(() => {
    const hasAnyErrors = Object.values(errors).some(error => error !== '');
    const requiredFieldsFilled = Object.keys(fields).every(name => {
      const config = fields[name];
      if (!config.required) return true;
      return values[name] && values[name].trim() !== '';
    });

    setIsValid(!hasAnyErrors && requiredFieldsFilled);
  }, [errors, values, fields]);

  return {
    values,
    errors,
    touched,
    isValid,
    setValue,
    setTouched,
    validateAll,
    getFieldProps: (name: string) => ({
      value: values[name] || '',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => setValue(name, e.target.value),
      onBlur: () => setTouched(name),
      error: touched[name] ? errors[name] : '',
    })
  };
}