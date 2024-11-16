import PatientDetails from './PatientDetails';
import { usePatientStore } from './store'

export default function PatientList() {
  const patients = usePatientStore((state) => state.patients);
  console.log(patients);

  return (
    <div className='md:w-1/2 lg:h-3/5 md:h-screen overflow-scroll'>
      {patients.length ?
        (
          <>
            <h2 className='font-black text-3xl text-center'>Patients List</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              Manage your {''}
              <span className='text-indigo-600 text-center font-bold'>patients and appointments</span>
            </p>
            {patients.map(patient => (
              <PatientDetails
                key={patient.id}
                patient={patient} />
            ))}
          </>
        )
        :
        (
          <>
            <h2 className='font-black text-3xl text-center'>There is no patients</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              Start adding some patients... {''}
              <span className='text-indigo-600 font-bold'>
                they will appear here...
              </span>
            </p>
          </>
        )}
    </div>
  )
}
