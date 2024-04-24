<template>
  <main class="home-page">
    <div class="banner bg-dark-pink app-shadow">
      <div class="welcome-text">
        <h2>Good Day, Dr. Albert!</h2>
        <p>Today is April 25, 2024, 11:22 pm. Have a nice day!</p>
      </div>
      <div class="welcome-img">
        <img src="/img/vet_male_doctor.png" alt="male vet doctor" />
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
        <div class="card-banner sub-shadow d-flex mb-15">
          <img src="/img/cat_icon.png" alt="Cat icon" class="card-img" />
          <div class="annoucement-info">
            <p class="title">Be Our Voice.</p>
            <p class="message">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tincidunt dui est, non sollicitudin neque semper sit amet.
            </p>
          </div>
        </div>
        <div class="card-banner sub-shadow d-flex mb-15">
          <img src="/img/cat_icon.png" alt="Cat icon" class="card-img" />
          <div class="annoucement-info">
            <p class="title">Be Our Voice.</p>
            <p class="message">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tincidunt dui est, non sollicitudin neque semper sit amet.
            </p>
          </div>
        </div>
        <div class="card-banner sub-shadow d-flex">
          <img src="/img/cat_icon.png" alt="Cat icon" class="card-img" />
          <div class="annoucement-info">
            <p class="title">Be Our Voice.</p>
            <p class="message">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              tincidunt dui est, non sollicitudin neque semper sit amet.
            </p>
          </div>
        </div>
      </div>
      <div class="card app-shadow">
        <div class="sub-header">
          <p class="subtitle">MY CALENDAR</p>
          <button class="btn btn-see-all">SEE ALL</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.banner {
  display: flex;
  padding: 20px;
  border-radius: 20px;
  margin-bottom: 30px;

  .welcome-text {
    margin: auto;
    margin-left: 0;
  }

  .welcome-img {
    margin: -1.25rem 0;

    img {
      width: 300px;
    }
  }
}

.cards {
  display: flex;
  margin: auto;

  .card {
    padding: 20px;
    border-radius: 20px;
    border: none;
    width: 100%;

    p.subtitle,
    .btn-see-all {
      font-size: 14px;
      font-weight: 600;
      color: #a6a6a6;
      margin-bottom: 0.5rem;
    }

    .btn-see-all {
      padding: 0;
    }

    h2.number {
      font-size: 32px;
      font-weight: 600;
      color: black;
      margin: 0;
    }

    h4.subject {
      font-size: 16px;
      font-weight: 600;
      color: black;
      margin: 0;
    }

    p.badge {
      font-size: 14px;
      font-weight: 600;
      padding: 5px 10px;
      border-radius: 8px;
      width: fit-content;
      margin-top: 10px;
      margin-bottom: 0;

      &.badge-error {
        color: #ff6060;
        background: #ffd0d0;
      }

      &.badge-success {
        color: #4cbc6b;
        background: #cef2d8;
      }
    }

    .sub-header {
      display: flex;
      margin-bottom: 0.5rem;

      .subtitle,
      .btn-see-all {
        margin: auto;
      }

      .subtitle {
        margin-left: 0;
      }

      .btn-see-all {
        margin-right: 0;
      }
    }

    .card-banner {
      padding: 15px;
      border-radius: 15px;

      .card-img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        border: 0.5px solid rgba(149, 31, 80, 0.5);
        margin-right: 15px;
      }

      .annoucement-info {
        .title {
          font-size: 14px;
          font-weight: 600;
          margin: 0;
        }

        .message {
          font-size: 12px;
          margin: 0;
        }
      }
    }
  }

  .mr-card {
    margin-right: 20px;
  }

  &.mb-30 {
    margin-bottom: 30px;
  }

  .mb-15 {
    margin-bottom: 15px;
  }
}
</style>
