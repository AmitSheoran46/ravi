import React from "react";
import logo from "../images/svg/Logo.svg";
import search from "../images/svg/search.svg";
import bell from "../images/svg/bell.svg";
import union from "../images/svg/Union.svg";
import boxs from "../images/svg/4box.svg";
import profile from "../images/svg/profile.svg";
import Accordion from "react-bootstrap/Accordion";
import dottball from "../images/svg/dottball.svg";
import mail from "../images/svg/email.svg";
import user from "../images/svg/user.svg";
import roundball from "../images/svg/roundball.svg";
import folder from "../images/svg/folder.svg";
import flash from "../images/svg/flash.svg";
import dotts from "../images/svg/3dotts.svg";
import chart from "../images/png/LineChart.png";
import setting from "../images/svg/setting.svg";
import exit from "../images/svg/exit.svg";
import internet from "../images/svg/internet.svg";
import zeppline from "../images/svg/zeplin.svg";
import figma from "../images/svg/figma.svg";
import meta from "../images/svg/meta-1.svg";
import angular from "../images/svg/angular_icon.svg";
import vue from "../images/svg/vue-9.svg";

function Header() {
  return (
    <>
      <header className="bg_clr">
        <section className="container-fluid d-flex">
          <section className="w-20 bg-white p-3 height border_right d-flex flex-column justify-content-between d-none d-lg-flex">
            <div className="">
              <a href="#">
                <img src={logo} alt="logo" />
              </a>

              <h1 className="ff_inter fs_xsm gray_clr fw-semibold mt-5">
                D A S H B O A R D
              </h1>
              <div className="mt-4">
                <Accordion defaultActiveKey="0" flush className="w-95">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="d-flex align-items-center mb-0">
                        <img src={dottball} alt="dashboard" />
                        <h3 className="ff_inter fw-semibold fs_sm blk_clr ms-3 mb-0">
                          Dashboard
                        </h3>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body className="d-flex flex-column">
                      <a
                        href="#"
                        className="ff_inter fw-semibold fs_sm dgray_clr blk_hover_clr ms-3 mb-3"
                      >
                        Analytics
                      </a>
                      <a
                        href="#"
                        className="ff_inter fw-semibold fs_sm dgray_clr blk_hover_clr ms-3 mb-3"
                      >
                        Finance
                      </a>
                      <a
                        href="#"
                        className="ff_inter fw-semibold fs_sm dgray_clr blk_hover_clr ms-3 mb-3"
                      >
                        Job Board
                      </a>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <div className="d-flex align-items-center mb-0">
                        <img src={mail} alt="mail" />
                        <h3 className="ff_inter fw-semibold fs_sm blk_clr ms-3 mb-0">
                          Messages
                        </h3>
                      </div>
                    </Accordion.Header>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <div className="d-flex align-items-center mb-0">
                        <img src={user} alt="user" />
                        <h3 className="ff_inter fw-semibold fs_sm blk_clr ms-3 mb-0">
                          Friends
                        </h3>
                      </div>
                    </Accordion.Header>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <div className="d-flex align-items-center mb-0">
                        <img src={boxs} alt="Apps" />
                        <h3 className="ff_inter fw-semibold fs_sm blk_clr ms-3 mb-0">
                          Apps
                        </h3>
                      </div>
                    </Accordion.Header>
                  </Accordion.Item>
                </Accordion>
                <p className="ff_inter fw-semibold dgray_clr mb-3 mt-5">
                  P A G E S
                </p>
                <Accordion defaultActiveKey="0" flush className="w-95">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <div className="d-flex align-items-center mb-0">
                        <img src={roundball} alt="help" />
                        <h3 className="ff_inter fw-semibold fs_sm blk_clr ms-3 mb-0">
                          Help Center
                        </h3>
                      </div>
                    </Accordion.Header>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <div className="d-flex align-items-center mb-0">
                        <img src={folder} alt="file" />
                        <h3 className="ff_inter fw-semibold fs_sm blk_clr ms-3 mb-0">
                          File Manager
                        </h3>
                      </div>
                    </Accordion.Header>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div>
              <div className="d-flex justify-content-between p-4 border_top">
                <a href="#">
                  <img src={setting} alt="setting" />
                </a>
                <a href="#">
                  <img src={exit} alt="exit" />
                </a>
                <a href="#">
                  <img src={internet} alt="internet" />
                </a>
              </div>
            </div>
          </section>
          <section className="w-lg-80">
            <div className="px-2 border_bottom bg-white d-flex justify-content-between py-3">
              <div className="d-flex d-lg-none">
                <a href="#">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <form className="col-7 d-flex align-items-center search_bar">
                <img src={search} alt="search" className="cursor ms-3" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="border-0 ms-3 w-100"
                />
              </form>
              <div className="col-2 d-flex justify-content-between align-items-center">
                <a href="#">
                  <img src={bell} alt="notification" />
                </a>
                <a href="#">
                  <img src={union} alt="union" />
                </a>
                <a href="#">
                  <img src={boxs} alt="4box" />
                </a>
                <a href="#">
                  <img src={profile} alt="profile" />
                </a>
              </div>
            </div>
            <div className="bg_clr d-flex flex-column align-items-center">
              <div className="bg_black mt-4 p-4 w-95 d-flex justify-content-between align-items-center">
                <div className="ms-2">
                  <h2 className="ff_inter fs_xxl fw-semibold text-white">
                    Unlock premium stats
                  </h2>
                  <p className="text-white ff_inter fw-normal fs_sm mb-0">
                    Get up to 10TB of storage for a limited time
                  </p>
                </div>
                <button className="bg-white upgrade_btn">
                  <img src={flash} alt="flash" /> Upgrade
                </button>
              </div>
              <div className="row w-95 py-4">
                <div className="col-3 ps-0">
                  <div className="bg-white box p-3">
                    <h3 className="ff_inter fw-normal fs_md gray_clr">
                      Revenue
                    </h3>
                    <p className="ff_inter fw-semibold fs_xl">$56,945</p>
                    <div className="mt-4 d-flex align-items-center">
                      <span className="ff_inter fw-normal fs_xsm green_clr p-1 prcnt_bg">
                        +45%
                      </span>
                      <span className="ff_inter fw-semibold fs_xsm gray_clr text-nowrap ms-2">
                        From 4.6%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="bg-white box p-3">
                    <h3 className="ff_inter fw-normal fs_md gray_clr">Users</h3>
                    <p className="ff_inter fw-semibold fs_xl">76.8%</p>
                    <div className="mt-4 d-flex align-items-center">
                      <span className="ff_inter fw-normal fs_xsm red_clr p-1 prcnt_bg2">
                        -1.7%
                      </span>
                      <span className="ff_inter fw-semibold fs_xsm gray_clr text-nowrap ms-2">
                        From 4.6%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <div className="bg-white box p-3">
                    <h3 className="ff_inter fw-normal fs_md gray_clr">
                      New Signups
                    </h3>
                    <p className="ff_inter fw-semibold fs_xl">116</p>
                    <div className="mt-4 d-flex align-items-center">
                      <span className="ff_inter fw-normal fs_xsm p-1 prcnt_bg3">
                        0.00
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-3 pe-0">
                  <div className="bg-white box p-3">
                    <h3 className="ff_inter fw-normal fs_md gray_clr">
                      Retention
                    </h3>
                    <p className="ff_inter fw-semibold fs_xl">12.67%</p>
                    <div className="mt-4 d-flex align-items-center">
                      <span className="ff_inter fw-normal fs_xsm green_clr p-1 prcnt_bg">
                        +0.6%
                      </span>
                      <span className="ff_inter fw-semibold fs_xsm gray_clr text-nowrap ms-2">
                        From 4.6%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-95 bg-white box1">
                <div className="d-flex justify-content-between px-3 py-3 border-bottom">
                  <h4 className="ff_inter fw-semibold fs_lg m-0">
                    Performance
                  </h4>
                  <img src={dotts} alt="dotts" />
                </div>
                <div className="row mx-3 justify-content-end">
                  <div className="col-1 py-3 d-flex flex-column justify-content-between">
                    <p className="ff_inter fw-normal fs_sm gray_clr mt-3">
                      400
                    </p>
                    <p className="ff_inter fw-normal fs_sm gray_clr mt-3">
                      300
                    </p>
                    <p className="ff_inter fw-normal fs_sm gray_clr mt-3">
                      200
                    </p>
                    <p className="ff_inter fw-normal fs_sm gray_clr mt-3">
                      100
                    </p>
                    <p className="ff_inter fw-normal fs_sm gray_clr mt-3">0</p>
                  </div>
                  <div className="col-11 py-4">
                    <img src={chart} alt="chart" className="w-100" />
                  </div>
                  <div className="col-11 d-flex justify-content-between">
                    <p className="ff_inter fw-normal fs_sm gray_clr">Sun</p>
                    <p className="ff_inter fw-normal fs_sm gray_clr">Mon</p>
                    <p className="ff_inter fw-normal fs_sm gray_clr">Tue</p>
                    <p className="ff_inter fw-normal fs_sm gray_clr">Wed</p>
                    <p className="ff_inter fw-normal fs_sm gray_clr">Thu</p>
                    <p className="ff_inter fw-normal fs_sm gray_clr">Fri</p>
                    <p className="ff_inter fw-normal fs_sm gray_clr">Sat</p>
                  </div>
                  <div className="d-flex justify-content-center py-3">
                    <p className="ff_inter fw-normal fs_sm dgray_clr dott position-relative">
                      Instagram
                    </p>
                    <p className="ff_inter fw-normal fs_sm dgray_clr dott1 position-relative ms-5 ">
                      Facebook
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-95 my-4 bg-white box1">
                <div className="d-flex justify-content-between px-3 py-3 border-bottom">
                  <h4 className="ff_inter fw-semibold fs_lg m-0">
                    Installed apps
                  </h4>
                  <img src={dotts} alt="dotts" />
                </div>
                <div className="border-bottom">
                  <div className="row justify-content-between px-3 py-3">
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      Source
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      Amount
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      Status
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      User ID
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      Joined
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      Group
                    </span>
                  </div>
                </div>
                <div className="border-bottom">
                  <div className="row justify-content-between px-3 py-3 cursor">
                    <div className="col-2 d-flex">
                      <img src={zeppline} alt="zeppline" />
                      <span className="ff_inter fw-semibold fs_sm ms-3">
                        Zepplin
                      </span>
                    </div>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      686.00
                    </span>
                    <span className="col-2">
                      <span className="ff_inter fw-normal fs_sm green_clr status_bg">
                        Active
                      </span>
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      114423
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      October
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      Design
                    </span>
                  </div>
                </div>
                <div className="border-bottom">
                  <div className="row justify-content-between px-3 py-3 cursor">
                    <div className="col-2 d-flex">
                      <img src={figma} alt="figma" className="ms-2" />
                      <span className="ff_inter fw-semibold fs_sm ms-4">
                        Figma
                      </span>
                    </div>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      864.00
                    </span>
                    <span className="col-2">
                      <span className="ff_inter fw-normal fs_sm orange_clr status_bg1">
                        Pending
                      </span>
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      76223
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      June
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      Finance
                    </span>
                  </div>
                </div>
                <div className="border-bottom">
                  <div className="row justify-content-between px-3 py-3 cursor">
                    <div className="col-2 d-flex">
                      <img src={meta} alt="meta" />
                      <span className="ff_inter fw-semibold fs_sm ms-3">
                        Meta
                      </span>
                    </div>
                    <span className="ff_inter col-2 px_200 fw-normal fs_sm gray_clr">
                      176.00
                    </span>
                    <span className="col-2">
                      <span className="ff_inter fw-normal fs_sm dgray_clr status_bg2">
                        Cancelled
                      </span>
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      89453
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      March
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      Coding
                    </span>
                  </div>
                </div>
                <div className="border-bottom">
                  <div className="row justify-content-between px-3 py-3 cursor">
                    <div className="col-2 d-flex">
                      <img src={angular} alt="angular" className="ms-2" />
                      <span className="ff_inter fw-semibold fs_sm ms-3">
                        Angular
                      </span>
                    </div>
                    <span className="ff_inter col-2 px_200 fw-normal fs_sm gray_clr">
                      49.00
                    </span>
                    <span className=" col-2">
                      <span className="ff_inter fw-normal fs_sm green_clr status_bg">
                        Active
                      </span>
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      11467
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      February
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      Marketing
                    </span>
                  </div>
                </div>
                <div className="border-bottom">
                  <div className="row justify-content-between px-3 py-3 cursor">
                    <div className=" col-2 d-flex">
                      <img src={vue} alt="vue" className="ms-2" />
                      <span className="ff_inter fw-semibold fs_sm ms-3">
                        Vue
                      </span>
                    </div>
                    <span className="ff_inter  col-2 fw-normal fs_sm gray_clr">
                      999.00
                    </span>
                    <span className=" col-2">
                      <span className="ff_inter fw-normal fs_sm green_clr status_bg">
                        Active
                      </span>
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      67385
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      October
                    </span>
                    <span className="ff_inter col-2 fw-normal fs_sm gray_clr">
                      Finance
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </header>
    </>
  );
}

export default Header;
