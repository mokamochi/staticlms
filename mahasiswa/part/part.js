$('.ix-navbar').html(`
<div class="ix-container">
  <div class="ix-navbar-brand">
    <a href="dashboard.html"><img src="../assets/img/logo.png" alt=""></a>
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
        <div class="btn btn-red btn-1x btn-round cursor-none" style="font-size:10px;line-height:23px;text-transform:uppercase;font-weight:bold">Student</div>
      </li>
      <li><a href="message.html"><i class="mdi mdi-center mdi-message-reply"></i></a></li>
      <li><a href="notification.html"><i class="mdi mdi-center mdi-bell"></i></a></li>
      <li class="ix-navbar-dropdown">
        <a><span><img src="../assets/img/pp.jpg" class="img-wrap" alt=""></span></a>
        <ul>
          <li class="ix-inter">
            <div>
              <b>Steven</b>
              <p>FIK / DKV <br> NIM. 1290312839</p>
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
<div class="copy-menu ix-inter">
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
`);

$('.ix-course-week--activity').html(`
<li class="activity" id="module-570773">
  <a href="my-course-view.html"> <i class="mdi mdi-arrow-left-circle-outline"></i> Back to Summary</a>
</li>
<li class="activity" id="module-570773">
  <a href="my-course-view-activity.html"> <i class="mdi mdi-comment-multiple"></i>Artikel <span class="completion-status selesai"><i class="mdi mdi-check-bold"></i></span></a>
</li>
<li class="activity" id="module-570773">
  <a href="my-course-view-activity-video.html"> <i class="mdi mdi-video"></i>Video 1<span class="completion-status selesai"><i class="mdi mdi-check-bold"></i></span></a>
</li>
<li class="activity" id="module-570773">
  <a href="my-course-view-activity-video2.html"> <i class="mdi mdi-video"></i>Video 2<span class="completion-status selesai"><i class="mdi mdi-check-bold"></i></span></a>
</li>
<li class="activity" id="module-570773">
  <a href="my-course-view-activity-forum.html"> <i class="mdi mdi-forum"></i>Forum <span class="completion-status selesai"><i class="mdi mdi-minus"></i></span></a>
</li>
<li class="activity" id="module-570773">
  <a href="my-course-view-activity-task.html"> <i class="mdi mdi-format-list-checks"></i>Tugas <span class="completion-status"><i class="mdi mdi-minus"></i></span></a>
</li>
`);