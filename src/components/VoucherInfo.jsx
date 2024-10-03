import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { dotSpinner } from "ldrs";
import toast from "react-hot-toast";
import SaleForm from "./SaleForm";
import VoucherTable from "./VoucherTable";
import useRecordStore from "../stores/useRecordStore";
import { useNavigate } from "react-router-dom";

const VoucherInfo = () => {
  const { records, resetRecords } = useRecordStore();

  const navigate = useNavigate();

  const total = records.reduce((a, b) => a + b.cost, 0);
  const tax = total * 0.07;
  const netTotal = total + tax;
  const handleInfo = async (data) => {
    setIsSending(true);
    const currentVoucher = { ...data, records, total, tax, netTotal };
    await fetch(import.meta.env.VITE_API_URL + "/vouchers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentVoucher),
    });
    toast.success("Voucher Created Successfully");
    setIsSending(false);
    resetRecords();
    reset();
    if (data.back_to_voucher_list) {
      navigate("/voucher");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  dotSpinner.register();
  const [isSending, setIsSending] = useState(false);

  // Utility function to generate a unique invoice number
  function generateInvoiceNumber() {
    // Get the current date
    const date = new Date();

    // Format the date as YYYYMMDD
    const formattedDate = date.toISOString().slice(0, 10).replace(/-/g, "");

    // Generate a random number between 1000 and 9999
    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    // Combine the formatted date and the random number
    const invoiceNumber = `INV-${formattedDate}-${randomNumber}`;

    return invoiceNumber;
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleInfo)} id="infoForm">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="mb-5">
            <label
              htmlFor="voucher_id"
              className={`block mb-2 text-sm font-medium ${
                errors.voucher_id ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Voucher ID
            </label>
            <input
              defaultValue={generateInvoiceNumber()}
              {...register("voucher_id", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              type="text"
              className={`bg-gray-50 border ${
                errors.voucher_id
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              } block text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            `}
              placeholder="Enter Voucher ID"
            />
            {errors.voucher_id?.type === "required" && (
              <p className=" text-red-500 text-sm mt-1">
                Voucher ID is required
              </p>
            )}
            {errors.voucher_id?.type === "minLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Voucher ID must be greater than 3 characters
              </p>
            )}
            {errors.voucher_id?.type === "maxLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Voucher ID must be less than 30 characters
              </p>
            )}
          </div>

          <div className="mb-5">
            <label
              className={`block mb-2 text-sm font-medium ${
                errors.customer_name ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Customer Name
            </label>
            <input
              {...register("customer_name", {
                required: true,
                minLength: 3,
                maxLength: 30,
              })}
              type="text"
              className={`bg-gray-50 border ${
                errors.customer_name
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              } block text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            `}
              placeholder="Enter Customer Name"
            />
            {errors.customer_name?.type === "required" && (
              <p className=" text-red-500 text-sm mt-1">
                Customer name is required
              </p>
            )}
            {errors.customer_name?.type === "minLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Customer name must be greater than 3 characters
              </p>
            )}
            {errors.customer_name?.type === "maxLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Customer name must be less than 30 characters
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              className={`block mb-2 text-sm font-medium ${
                errors.customer_email ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Customer Email
            </label>
            <input
              {...register("customer_email", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
              type="email"
              className={`bg-gray-50 border ${
                errors.customer_email
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              } block text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            `}
              placeholder="Enter Customer Email"
            />
            {errors.customer_email?.type === "required" && (
              <p className=" text-red-500 text-sm mt-1">
                Customer Email is required
              </p>
            )}
            {errors.customer_email?.type === "minLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Customer Email must be greater than 3 characters
              </p>
            )}
            {errors.customer_email?.type === "maxLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Customer Email must be less than 20 characters
              </p>
            )}
          </div>
          <div className="mb-5">
            <label
              className={`block mb-2 text-sm font-medium ${
                errors.sale_date ? "text-red-500" : "text-gray-900"
              } dark:text-white`}
            >
              Sale Date
            </label>
            <input
              defaultValue={new Date().toISOString().slice(0, 10)}
              {...register("sale_date", {
                required: true,
                minLength: 3,
                maxLength: 20,
              })}
              type="date"
              className={`bg-gray-50 border ${
                errors.sale_date
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500 "
                  : "border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
              } block text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            `}
              placeholder="Sale Date"
            />
            {errors.sale_date?.type === "required" && (
              <p className=" text-red-500 text-sm mt-1">
                Sale Date is required
              </p>
            )}
            {errors.sale_date?.type === "minLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Sale Date must be greater than 3 characters
              </p>
            )}
            {errors.sale_date?.type === "maxLength" && (
              <p className=" text-red-500 text-sm mt-1">
                Sale Date must be less than 20 characters
              </p>
            )}
          </div>
        </div>
      </form>

      <SaleForm />
      <VoucherTable />
      <div className="flex justify-end items-center gap-3">
        <div className="flex justify-center items-start">
          <div className="flex items-start h-5">
            <input
              {...register("back_to_voucher_list")}
              id="back_to_voucher_list"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="back_to_voucher_list"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Back to voucher List
          </label>
        </div>
        <div className="flex justify-center items-start">
          <div className="flex items-center h-5">
            <input
              {...register("all_correct")}
              form="infoForm"
              id="all-correct"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="all-correct"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Make sure all fields are correct!
          </label>
        </div>

        <button
          form="infoForm"
          type="submit"
          className="text-white inline-flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span>Confirm Voucher</span>
          {isSending && (
            <l-dot-spinner size="20" speed="0.9" color="white"></l-dot-spinner>
          )}
        </button>
      </div>
    </div>
  );
};

export default VoucherInfo;
