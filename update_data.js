// update data from JSON
$(function () {
  let year = document.querySelectorAll(".year");
  let semester = document.querySelectorAll(".semester");
  let course_search = document.getElementById("course_search");
  let pre_selection = document.getElementById("pre_selection");
  let pre_selection_result = document.getElementById("pre_selection_result");
  let course_selection = document.querySelectorAll(".course_selection");
  let online_sign = document.getElementById("online_sign");
  let withdraw_date = document.getElementById("withdraw_date");
  let modify_date = document.querySelectorAll(".modify_date");
  let w1 = document.getElementById("w1");
  let course_selection_last_day = document.getElementById(
    "course_selection_last_day"
  );
  let fresheng = document.getElementById("fresheng");

  let ee_title = document.getElementById("ee_title");
  let ee_course_search = document.getElementById("ee_course_search");
  let ee_question = document.getElementById("ee_question");
  let ee_course_selection = document.getElementById("ee_course_selection");
  let ee_withdraw_date = document.getElementById("ee_withdraw_date");
  let ee_modify = document.getElementById("ee_modify");
  let ee_modify_note1 = document.getElementById("ee_modify_note1");
  let ee_modify_note2 = document.getElementById("ee_modify_note2");
  let ee_modify_note4 = document.getElementById("ee_modify_note4");
  let ee_questionNote = document.getElementById("ee_questionNote");
  let ee_functionName = document.querySelectorAll(".ee_functionName");

  $.ajax({
    //請求方式為get
    type: "GET",
    //json檔案位置
    url: "data.json",
    //返回資料格式為json
    dataType: "json",
    //請求成功完成後要執行的方法
    success: function (data) {
      year.forEach(function (item, i) {
        item.innerHTML = data["學年度"];
      });
      semester.forEach(function (item, i) {
        item.innerHTML = data["學期"];
      });
      course_selection.forEach(function (item, i) {
        item.innerHTML = data["網路加退選"];
      });
      modify_date.forEach(function (item, i) {
        item.innerHTML = data["選課更正"];
      });
      course_search.innerHTML = data["課程查詢"];
      pre_selection.innerHTML = data["網路預選"];
      pre_selection_result.innerHTML = data["公告預選"];
      pre_selection_hint.innerHTML = data["網路預選_hint"];
      online_sign.innerHTML = data["線上加簽"];
      withdraw_date.innerHTML = data["期中停修"];
      course_selection_last_day.innerHTML = data["網路加退選最後一天"];
      fresheng.innerHTML = data["大一英文上學期"];
      // fresheng.innerHTML = data["大一英文下學期"];

      //進修學院
      ee_functionName.forEach(function (item, i) {
        item.innerHTML = data["進院_功能編號"];
      });

      ee_title.innerHTML = data["進院_標題暑期"];
      //   ee_title.innerHTML = data["進院_標題下學期"];
      ee_course_search.innerHTML = data["進院_課程查詢"];
      ee_question.innerHTML = data["進院_教學問卷"];
      ee_questionNote.innerHTML = data["進院_教學意見反應問卷備註暑期"];
      // ee_questionNote.innerHTML = data["進院_教學意見反應問卷備註下學期"];
      ee_course_selection.innerHTML = data["進院_網路加退選"];
      ee_withdraw_date.innerHTML = data["進院_期中停修申請"];
      ee_modify.innerHTML = data["進院_逾期選課更正"];
      ee_modify_note1.innerHTML = data["進院_逾期選課更正說明1"];
      ee_modify_note2.innerHTML = data["進院_逾期選課更正說明2"];
      ee_modify_note4.innerHTML = data["進院_逾期選課更正說明4"];
    },
  });
});
