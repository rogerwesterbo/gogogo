import { lazy, useState } from 'react';

type FeedbackInputs = {
  name: string;
  email: string;
  message: string;
};
import PageContent from '../../shared/components/PageContent';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';

function About() {
  const { t } = useTranslation();

  const [feedback, setFeedback] = useState<FeedbackInputs>();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackInputs>();
  const onSubmit: SubmitHandler<FeedbackInputs> = (data: FeedbackInputs) => {
    if (data) {
      console.log(data);
      setFeedback(data);
    }
  };

  const handleReset = () => {
    console.log('reset');
    reset();
    setFeedback(undefined);
  };

  return (
    <PageContent title={t('nav.about')}>
      <div>
        <h2>{t('pages.about.title')}</h2>
        <div className="mt-5">
          <span>{t('pages.about.feedback.title')}</span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                  {t('pages.about.feedback.form.name')}
                </label>
                <div className="mt-2">
                  <input
                    {...register('name', {
                      required: true,
                      maxLength: 20,
                      pattern: /^[A-ZÆØÅa-zæøå ]+$/i,
                    })}
                    id="name"
                    name="name"
                    type="text"
                    placeholder={t('pages.about.feedback.form.namePlaceholder')}
                    className="block p-1 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                  {errors?.name?.type === 'required' && <p>This field is required</p>}
                  {errors?.name?.type === 'maxLength' && <p>First name cannot exceed 20 characters</p>}
                  {errors?.name?.type === 'pattern' && <p>Alphabetical characters only</p>}
                </div>
              </div>
            </div>

            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                  {t('pages.about.feedback.form.email')}
                </label>
                <div className="mt-2">
                  <input
                    {...register('email', {
                      required: true,
                    })}
                    id="email"
                    name="email"
                    type="email"
                    placeholder={t('pages.about.feedback.form.emailPlaceholder')}
                    className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                  {t('pages.about.feedback.form.message')}
                </label>
                <div className="mt-2">
                  <textarea
                    {...register('message', {
                      required: true,
                      maxLength: 500,
                      minLength: 10,
                    })}
                    placeholder={t('pages.about.feedback.form.messagePlaceholder')}
                    id="message"
                    name="message"
                    className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-5">
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t('pages.about.feedback.form.submit')}
              </button>
              <button
                onClick={handleReset}
                type="button"
                className="rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {t('pages.about.feedback.form.reset')}
              </button>
            </div>
          </form>
        </div>
        {(() => {
          if (feedback) {
            return <pre>{JSON.stringify(feedback)}</pre>;
          }
        })()}
        <div></div>
      </div>
    </PageContent>
  );
}

export default About;
export const AboutPage = lazy(() => import('./About'));
