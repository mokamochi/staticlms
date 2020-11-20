$('.ix-navbar').html(`
<div class="ix-container">
  <div class="ix-navbar-brand">
    <a href="#"><img src="../assets/img/logo.png" alt=""></a>
  </div>
  <div class="ix-navbar-menu">
    <ul class="satu">
      <li><a href="dashboard.html">Dashboard</a></li>
      <li><a href="my-course.html">My Course</a></li>
      <li><a href="my-drive.html">My Files</a></li>
      <li><a href="calendar.html">Calendar</a></li>
    </ul>
    <ul class="dua">
      <li class="ix-role-status">
        <div class="btn btn-red btn-1x btn-round cursor-none">Student</div>
      </li>
      <li><a href="#"><i class="mdi mdi-centered mdi-message-reply"></i></a></li>
      <li><a href="#"><i class="mdi mdi-centered mdi-bell"></i></a></li>
      <li class="ix-navbar-dropdown">
        <a><span><img src="../assets/img/pp.jpg" class="img-wrap" alt=""></span></a>
        <ul>
          <li>
            <div>
              <b>Adnan Rahmadi</b>
              <p>FIK / DKV <br> NIM. 1601174232</p>
            </div>
          </li>
          <li><a href="profile.html"><i class="mdi mdi-account"></i> Profile</a></li>
          <li><a href="grades.html"><i class="mdi mdi-star"></i> Grade</a></li>
          <li><a href="setting.html"><i class="mdi mdi-cog"></i> Setting</a></li>
          <li class="divider"></li>
          <li><a href="../login.html"><i class="mdi mdi-logout-variant"></i> Logout</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
`);

$('.ix-footer').html(`
<div class="copy-menu">
  <a href="#">About</a>
  <a href="#">F.A.Q</a>
  <a href="#">Terms of Service</a>
  <a href="#">Privacy Policy</a>
  <a href="#">Press Kit</a>
  <a href="#">Helpdesk</a>
  <div class="copyyear">
    Center for e-Learning &amp; Open Education Telkom University &copy; 2020
  </div>
</div>
`)