import axios from 'axios'

const REST_API_BASE_URL = "employee-management-system-production-e003.up.railway.app";

export const listEmployees = () =>{
    return axios.get(REST_API_BASE_URL);
}

export const createEmployee=(employee) =>axios.post(REST_API_BASE_URL,employee)

export const getEmployee=(employeeId)=>{
    return axios.get(REST_API_BASE_URL+'/'+employeeId);
}

export const updateEmployee=(employeeId,employee)=>{
    return axios.put(REST_API_BASE_URL+'/'+employeeId,employee);
}

export const deleteEmployee=(employeeId)=>{
    return axios.delete(REST_API_BASE_URL+'/'+employeeId);
}
