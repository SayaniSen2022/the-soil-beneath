import {Link} from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const previousItem = items.length > 1 ? items[items.length - 2] : items[0];
  return (
    <>
    {/* Desktop */}
      <nav aria-label="Breadcrumb" className="hidden md:block mb-6 text-sm text-gray-500">
        <ol className="flex flex-wrap items-center">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={index}
                className="flex items-center"
              >
                {isLast ? (
                  <span className="font-medium text-gray-900">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href ?? "/"}
                    className="hover:text-green-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {!isLast && (
                  <span className="mx-2 text-gray-400 select-none">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    {/* Mobile */}
    <nav aria-label="Back" className="md:hidden mb-4">
      <Link
          to={previousItem.href ?? "/"}
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-green-700"
        >
          <FaChevronLeft className="text-xs" />
          <span>{previousItem.label}</span>
        </Link>
    </nav>
    </>
  );
};

export default Breadcrumbs;