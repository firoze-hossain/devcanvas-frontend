import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  linkText: string;
  linkHref: string;
}

export const AuthLayout = ({
  children,
  title,
  linkText,
  linkHref,
}: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {title}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {children}
          <div className="mt-6 text-center">
            <Link
              href={linkHref}
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              {linkText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
