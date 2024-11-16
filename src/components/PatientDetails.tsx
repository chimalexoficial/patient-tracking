import { Patient } from '../types'
import PatientDetailItem from './PatientDetailItem'

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailsProps) {
    return (
        <div className='mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl'>

            <PatientDetailItem
                label="ID Number:"
                data={patient.id} />

            <PatientDetailItem
                label="Name:"
                data={patient.name} />

            <PatientDetailItem
                label="Caretaker:"
                data={patient.caretaker} />

            <PatientDetailItem
                label="Email:"
                data={patient.email} />

            <PatientDetailItem
                label="Consulting date:"
                data={patient.date.toString()} />

            <PatientDetailItem
                label="Symptoms:"
                data={patient.symptoms} />


        </div>
    )
}
