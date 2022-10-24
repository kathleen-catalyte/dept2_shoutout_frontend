import { MapIcon, UsersIcon } from "@heroicons/react/24/outline";
import { ArrowSmallLeftIcon } from "@heroicons/react/24/solid";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import Router from "next/router";
import { useState } from "react";
import { FullProfile } from "src/interfaces/profile";
import { Shoutout } from "src/interfaces/shoutout";
import useSWR from "swr";

import fetch from "@/lib/fetch";

import Logout from "../logout/logout";
import ProfilePicture from "../profile-picture";
import ShoutoutComp from "../shoutouts/shoutoutcomp";
import styles from "./profile.module.css";

const UserProfile = (id: any) => {
  const { data, error } = useSWR(`/api/profile/${Object.values(id)[0]}`, fetch);
  const profileData = data as unknown as FullProfile;
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: any, newTabIndex: number) => {
    setTabIndex(newTabIndex);
  };
  const BackToHome = () => {
    Router.push("/");
  };
  const given = (shoutoutsGiven: Shoutout[]) => {
    const length = shoutoutsGiven.length;
    return "Given" + "(" + length + ")";
  };
  const recieved = (shoutoutsReceived: Shoutout[]) => {
    const length = shoutoutsReceived.length;
    return "Recieved" + "(" + length + ")";
  };

  if (error) return <p>Something went wrong.</p>;
  //Here we might reroute depending on team thoughts
  if (typeof profileData == "undefined") return <p>Hang tight...</p>;
  if (profileData.statusCode) return <p>Unauthorized.</p>;
  return (
      <div>
          <Logout />
      <div className={styles.profilePageContainer}>
        <p
          data-testid="back"
          className={styles.backButton}
          onClick={BackToHome}
        >
          <a className={styles.hoverbutton}>
            <ArrowSmallLeftIcon className={styles.arrowIcon} />
            <span className={styles.backToShoutOut}>Back to shoutouts</span>
          </a>
        </p>
        <div className={styles.profilePicture}>
          {profileData.image192 ? (
            <div className={styles.picture}>
              <ProfilePicture picture={profileData.image192} />{" "}
            </div>
          ) : null}

          <a className={styles.name}>@{profileData.name}</a>
        </div>
        <div className={styles.shoutoutsContainer}>
          <Box>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              sx={{
                "& .MuiTabs-indicator": { backgroundColor: "#9873FF" },
                "& .MuiTab-root": { color: "#808080", height: "1px" },
                "& .Mui-selected": { color: "white" },
                "& .MuiButtonBase-root": {
                  fontSize: "12px",
                  fontWeight: "400",
                },
                borderBottom: "1px solid #6B6A6A",
              }}
            >
              <Tab
                label={
                  profileData.shoutoutsReceived
                    ? recieved(profileData.shoutoutsReceived)
                    : "Recieved(0)"
                }
              />
              <Tab
                label={
                  profileData.shoutoutsGiven
                    ? given(profileData.shoutoutsGiven)
                    : "Given(0)"
                }
              />
            </Tabs>
          </Box>
          <Box sx={{ paddingTop: "28px" }} className={styles.shoutout}>
            {tabIndex === 0 &&
              profileData.shoutoutsReceived.map((shoutout, idx) => {
                //replace this with the shoutout container
                return <ShoutoutComp shoutout={shoutout} key={idx} />;
              })}
            {tabIndex === 1 &&
              profileData.shoutoutsGiven.map((shoutout, idx) => {
                //replace this with the shoutout container
                return <ShoutoutComp shoutout={shoutout} key={idx} />;
              })}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
