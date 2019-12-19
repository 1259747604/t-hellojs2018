let data = [{ title: 'aa' }, { title: 'bb' }];

// 模拟接口
export default {
  'get /api/goods': function(req, res) {
    setTimeout(() => {
      res.json({ data, result: true });
    }, 1000);
  }
};
