import React, { useState } from "react";
import { HiOutlineTrash, HiPencil } from "react-icons/hi2";
import ShowDate from "./ShowDate";
import { useSWRConfig } from "swr";
import { bouncy } from "ldrs";
import toast from "react-hot-toast";

const VoucherListRow = ({
  voucher: { id, voucher_id, customer_name, customer_email, sale_date },
}) => {
  // console.log(voucher)
  bouncy.register();

  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteBtn = async () => {
    setIsDeleting(true);
    await fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
      method: "DELETE",
    });
    toast.success("Voucher Deleted Successfully");
    mutate(import.meta.env.VITE_API_URL + "/vouchers");
    // setIsDeleting(false);

    // console.log(id);
  };

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="px-6 py-4">{voucher_id}</td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {customer_name}
      </th>

      <td className="px-6 py-4">{customer_email}</td>

      <td className="px-6 py-4 text-end">
        <ShowDate timestamp={sale_date} />
      </td>
      <td className="px-6 py-4 text-end">
        <div className=" flex space-x-2 justify-end text-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={handleDeleteBtn}
              className="size-10 flex items-center justify-center text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-red-700 focus:text-red-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-red-500 dark:focus:text-white"
            >
              {isDeleting ? ( // Default values shown
                <l-bouncy size="20" speed="1.75" color="red"></l-bouncy>
              ) : (
                <HiOutlineTrash />
              )}
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default VoucherListRow;
