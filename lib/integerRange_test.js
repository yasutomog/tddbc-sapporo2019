const assert = require("assert").strict;
const IntegerRange = require("./integerRange");

describe('整数閉区間クラスのテスト', () => {
  let integerRangeFrom3To8;
  beforeEach(() => {
    integerRangeFrom3To8 = new IntegerRange(3, 8);
  });
  describe('始点よりも終点が大きいとクラスの生成ができない確認', () => {
    test("空のオブジェクトを返すこと", () => {
      const inValidIntegerRange = new IntegerRange(8, 3);
      const len = Object.keys(inValidIntegerRange).length
      assert.equal(len, 0);
    });
  });
  describe('始点と終点が数値以外の場合クラスの生成ができない確認', () => {
    test("空のオブジェクトを返すこと", () => {
      const inValidIntegerRange = new IntegerRange('a', 'b');
      const len = Object.keys(inValidIntegerRange).length
      assert.equal(len, 0);
    });
  });
  describe('指定した整数が閉区間に含まれることを確認', () => {
    test("始点の値を渡した場合、trueを返すこと", () => {
      const ret = integerRangeFrom3To8.isInclude(3);
      assert.equal(ret, true);
    });

    test("終点の値を渡した場合、trueを返すこと", () => {
      const ret = integerRangeFrom3To8.isInclude(8);
      assert.equal(ret, true);
    });

    test("始点より小さい値を渡した場合、falseを返すこと", () => {
      const ret = integerRangeFrom3To8.isInclude(2);
      assert.equal(ret, false);
    });

    test("終点より大きい値を渡した場合、falseを返すこと", () => {
      const ret = integerRangeFrom3To8.isInclude(9);
      assert.equal(ret, false);
    });
  });
  describe('整数閉区間を文字列として出力できることを確認', () => {
    test("[始点,終点]の形式を返すこと", () => {
      const ret = integerRangeFrom3To8.format();
      assert.equal(ret, "[3,8]");
    });
  });
  describe('指定した閉区間と等価かどうか確認', () => {
    test("始点と終点が一致している場合、trueを返すこと", () => {
      const sameIntegerRange = new IntegerRange(3, 8);
      const ret = integerRangeFrom3To8.isSameRange(sameIntegerRange);
      assert.equal(ret, true);
    });
    test("始点と終点が一致していない場合、falseを返すこと", () => {
      const differentIntegerRange = new IntegerRange(8, 3);
      const ret = integerRangeFrom3To8.isSameRange(differentIntegerRange);
      assert.equal(ret, false);
    });
  });
});
