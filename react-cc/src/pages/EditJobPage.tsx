import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type Job = {
  id: number;
  title: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  company: {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
  };
};

const EditJobPage = ({ editJob }: any) => {
  const job = useLoaderData() as Job;

  const [title, setTitle] = useState<string>(job.title);
  const [type, setType] = useState<string>(job.type);
  const [location, setLocation] = useState<string>(job.location);
  const [description, setDescription] = useState<string>(job.description);
  const [salary, setSalary] = useState<string>(job.salary);
  const [companyName, setCompanyName] = useState<string>(job.company.name);
  const [companyDescription, setCompanyDescription] = useState<string>(
    job.company.description,
  );
  const [companyEmail, setCompanyEmail] = useState<string>(
    job.company.contactEmail,
  );
  const [companyPhone, setCompanyPhone] = useState<string>(
    job.company.contactPhone,
  );

  const navigate = useNavigate();

  const submitForm = (e: any) => {
    e.preventDefault();

    const updatedJob = {
      id: job.id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail: companyEmail,
        contactPhone: companyPhone,
      },
    };

    editJob(updatedJob);

    toast.success('Job edited successfully!');

    return navigate(`/job/${job.id}`);
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2">
                Job Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Job Listing Name
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows={4}
                placeholder="Add any job duties, expectations, requirements, etc"></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2">
                Salary
              </label>
              <select
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required>
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="Company Location"
                required
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2">
                Company Name
              </label>
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2">
                Company Description
              </label>
              <textarea
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows={4}
                placeholder="What does your company do?"></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2">
                Contact Email
              </label>
              <input
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2">
                Contact Phone
              </label>
              <input
                value={companyPhone}
                onChange={(e) => setCompanyPhone(e.target.value)}
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit">
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditJobPage;
