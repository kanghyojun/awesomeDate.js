var awesomeDate = {
  convertDate: function(t) {
    var hours = t.getHours();

    if(hours == 0) {
      hours = '오전 12'
    } else if (hours > 12) {
      hours = '오후 ' + (hours - 12); 
    } else {
      hours = '오전 ' + hours;
    }
    hours += '시';

    var date = { 
      'year': t.getFullYear() + '년',
      'month':  (t.getMonth() + 1) + '월',
      'day':  t.getDate() + '일',
      'hours': hours,
      'minutes': t.getMinutes() +'분'
    };

    return date;
  },
  dateJoin: function(converted) {
    var res = '';
    for(key in converted) {
      res += converted[key] + ' ';
    }
    return res;
  },
  time: function(t) {
    var diff = (new Date().getTime() - t.getTime()) / 1000,
        mDiff = diff / 60,
        hDiff = mDiff / 60,
        dDiff = hDiff / 24;

    var converted = this.convertDate(t);

    var date = this.dateJoin(converted);
   
    if(mDiff < 1) {
      date = '방금 전';
    } else if(hDiff < 1) {
      date = Math.floor(mDiff) + '분 전';
    } else if(dDiff < 1) {
      date = Math.floor(hDiff) + '시간 전';
    } else if(dDiff < 2) {
      date = '어제 ' + converted['hours']+ ' ' + converted['minutes'];
    } else if(dDiff < 7) {
      date = Math.floor(dDiff) + "일 전 " + converted['hours'] + converted['minutes'];
    }

    return date;
  },
  fullDate: function(t) {
    return this.dateJoin(this.convertDate(new Date(t)));
  }
};
