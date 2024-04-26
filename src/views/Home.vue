<template>
  <main class="main-page home-page">
    <div class="banner bg-dark-pink app-shadow">
      <div class="welcome-text">
        <h2>Good Day, Dr. {{ doctorOne.name }}</h2>
        <p>
          Today is {{ moment(new Date()).format("MMM D, YYYY, HH:mm") }}. Have a
          nice day!
        </p>
      </div>
      <div class="welcome-img" v-if="doctorOne.gender == 'M'">
        <img src="/img/vet_male_doctor.png" alt="male vet doctor" />
      </div>
      <div class="welcome-img" v-else="doctorOne.gender == 'F'">
        <img src="/img/vet_female_doctor.png" alt="male vet doctor" />
      </div>
    </div>
    <div class="cards mb-30">
      <div class="card app-shadow mr-card">
        <p class="subtitle">OFFLINE</p>
        <h2 class="number">25</h2>
        <h4 class="subject">SCHEDULED PATIENTS</h4>
        <p class="badge badge-error">-10% THAN AVERAGE</p>
      </div>
      <div class="card app-shadow mr-card">
        <p class="subtitle">ONLINE</p>
        <h2 class="number">25</h2>
        <h4 class="subject">ONLINE CONSULATION</h4>
        <p class="badge badge-success">+10% THAN AVERAGE</p>
      </div>
      <div class="card app-shadow">
        <p class="subtitle">EMERGENCY</p>
        <h2 class="number">25</h2>
        <h4 class="subject">EMERGENCY</h4>
        <p class="badge badge-success">+0% THAN AVERAGE</p>
      </div>
    </div>
    <div class="cards">
      <div class="card app-shadow mr-card">
        <div class="sub-header">
          <p class="subtitle">ANNOUNCEMENTS</p>
          <button class="btn btn-see-all">SEE ALL</button>
        </div>
        <div v-for="annoucement in Announcements.slice(0, 3)">
          <div
            class="card-banner sub-shadow d-flex mb-15"
            v-if="
              annoucement.type == doctorOne.type || annoucement.type == 'all'
            "
          >
            <span class="icon-button card-img"
              ><i :class="`bi ` + annoucement.icon"></i
            ></span>
            <div class="annoucement-info">
              <p class="title">{{ annoucement.title }}</p>
              <p class="message">
                {{ annoucement.message }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="card app-shadow">
        <div class="sub-header">
          <p class="subtitle">MY CALENDAR</p>
          <button class="btn btn-see-all">SEE ALL</button>
        </div>
        <div v-for="cal in Calendar.slice(0, 3)">
          <div
            class="card-banner sub-shadow d-flex mb-15"
            v-if="cal.d_id == doctorOne.id"
          >
            <div class="cal-date">
              <h4>25</h4>
              <p>APR</p>
            </div>
            <div class="calendar-info">
              <p class="title">{{ cal.title }}</p>
              <p class="message">
                {{ cal.time }} <br />
                {{ cal.about }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Announcements from "../assets/json/announcements.json";
import Accounts from "../assets/json/accounts.json";
import Calendar from "../assets/json/calendar.json";
import moment from "moment";

// sample
const doctorOne = Accounts[0];

console.log();
//const moment = require("moment");
</script>
