class IntegerRange {
  constructor(lower, upper) {
    if ((isNumber(lower) && isNumber(upper)) && (lower < upper)) {
      this.lower = lower;
      this.upper = upper;
    }
  }

  isInclude(target) {
    if (this.lower <= target && this.upper >= target) {
      return true;
    }
    return false;
  }

  format() {
    return ["[", this.lower, ",", this.upper, "]"].join('');
  }

  isSameRange(target) {
    if (this.lower === target.lower && this.upper === target.upper) {
      return true;
    }
    return false;
  }
}

function isNumber(val) {
  var regex = new RegExp(/^[0-9]+$/);
  return regex.test(val);
}

module.exports = IntegerRange;
