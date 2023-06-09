import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Wrapper from '../../assets/wrappers/DashboardFormPage'
import FormRow from '../../components/FormRow'
import FormRowSelect from '../../components/FormRowSelect'
import {
  clearValues,
  createJob,
  editJob,
  handleChange,
} from '../../features/job/jobSlice'
import { useEffect } from 'react'

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job)
  const { user } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!position || !company || !jobLocation) {
      toast.error('please fill out all fields')
      return
    }

    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { position, company, jobLocation, jobType, status },
        })
      )
      return
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }))
  }

  const handleJobInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(handleChange({ name, value }))
  }

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }))
    }
  }, [])

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className='form-center'>
          {/* POSITION */}
          <FormRow
            type='text'
            name='position'
            labelText='Position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* COMPANY */}
          <FormRow
            type='text'
            name='company'
            labelText='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* JOB LOCATION */}
          <FormRow
            type='text'
            name='jobLocation'
            labelText='job location'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* STATUS */}
          <FormRowSelect
            labelText='status'
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* JOB TYPE */}
          <FormRowSelect
            labelText='job type'
            name='jobType'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  )
}
export default AddJob
