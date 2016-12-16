module.exports = {
  test: function (actualValue, expectedValue) {
    if (Array.isArray(expectedValue)) {
      if (this.checkArrayEquality(expectedValue, actualValue) === false) {
        console.log(`  \u00D7 test failed: expected [${expectedValue}] but got [${actualValue}] instead`)
      } else if (this.checkArrayEquality(expectedValue, actualValue) === true) {
        console.log(`  \u2713 TEST PASSED!: expected [${expectedValue}] and got [${actualValue}]`)
      }
    } else {
      if (expectedValue !== actualValue) {
        console.log(`  \u00D7 test failed: expected ${expectedValue} but got ${actualValue} instead`)
      } else if (expectedValue === actualValue) {
        console.log(`  \u2713 TEST PASSED!: expected ${expectedValue} and got ${actualValue}`)
      }
    }
  },

  checkArrayEquality: function (arr1, arr2) {
    var isEqual = false
    if (arr1.length === arr2.length) {
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false
        } else {
          isEqual = true
        }
      }
    } else {
      return false
    }
    return isEqual
  }

}
