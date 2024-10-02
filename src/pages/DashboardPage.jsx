import React from "react";
import Container from "../components/Container";
import ModuleBtn from "../components/ModuleBtn";
import { HiCircleStack } from "react-icons/hi2";
import { HiComputerDesktop } from "react-icons/hi2";
import { HiMiniClipboardDocumentList } from "react-icons/hi2";


const DashboardPage = () => {
  return (
    <section className=" mt-3">
      <Container>
          
        <div className=" grid grid-cols-1 md:grid-cols-3 grid-rows-3 gap-5">
          <div className=" col-span-1 row-span-1">
            <ModuleBtn
              name={"Product Module"}
              icon={<HiCircleStack className=" size-14" />}
              
              url={"/product"}
            />
          </div>
          <div className=" col-span-1 row-span-1">
            <ModuleBtn
              name={"Sale Module"}
              icon={<HiComputerDesktop className=" size-14" />}
              url={"/sale"}
            />
          </div>
          <div className=" col-span-1 row-span-1">
            <ModuleBtn
              name={"Voucher Module"}
              icon={<HiMiniClipboardDocumentList className=" size-14" />}
              url={"/voucher"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DashboardPage;
