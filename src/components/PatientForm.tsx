
import { useForm } from "react-hook-form"
import Error from "./Error";
import { Patient, DraftPatient } from "../types";
import { usePatientStore } from "./store";

export default function PatientForm() {

  const { addPatient } = usePatientStore();

  const { register, handleSubmit, formState: { errors } } = useForm<DraftPatient>();

  const registerPatient = (data: DraftPatient) => {
    addPatient(data);
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patient Tracking</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add Patients Here and {''}
        <span className="text-indigo-600 font-bold">Manage Them</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Patient
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Patient Name"
            {...register('name', {
              required: 'This name field can not be empty',
            })}
          />
          {errors.name && (
            <Error>{errors.name?.message}</Error>
          )}


        </div>

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Owner
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Caretaker Name"
            {...register('caretaker', {
              required: 'Caretaker can not be empty'
            })}
          />
          {errors.caretaker && (
            <Error>{errors.caretaker?.message}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email Owner"
            {...register("email", {
              required: "Email can not be empty",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email not valid'
              }
            })}
          />
          {errors.email && (
            <Error>{errors.email?.message}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Consulting Date
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register('date', {
              required: 'Date can not be empty'
            })}
          />
          {errors.date && (
            <Error>{errors.date?.message}</Error>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder="Write here patients symptoms..."
            {...register('symptoms', {
              required: 'Symptoms can not be empty'
            })}
          ></textarea>
          {errors.symptoms && (
            <Error>{errors.symptoms?.message}</Error>
          )}
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value='Save'
        />
      </form>
    </div>
  )
}