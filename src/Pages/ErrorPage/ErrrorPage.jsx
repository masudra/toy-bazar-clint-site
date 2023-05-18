
import { Link, useRouteError } from 'react-router-dom';
import logo from '../../../public/CodePen-404-Page.gif'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex justify-center p-8'>
            <div className='text-2xl '>
               
                <img className='w-2/3 ml-56 p-8' src={logo} alt="" />

                <div className='text-center'>
                    <h2 className=''>
                        <span className=''>Error</span> {status || 404}
                    </h2>
                    <p className=''>
                        {error?.message}
                    </p>
                    <Link className='bg-blue-300' to='/'>Back to homepage</Link>
                </div>
            </div>
        </section>
    )

};

export default ErrorPage;