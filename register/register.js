import { cloneParticipantBlock } from './Templates.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const addBtn = document.getElementById('add');
  const summarySection = document.getElementById('summary');
  const participantsFieldset = document.querySelector('.participants');
  const firstParticipantDiv = document.querySelector('.participant1');

  // 1) 如果 localStorage 中有存储的汇总信息，说明刚提交过，这里直接显示汇总并隐藏表单
  const storedData = localStorage.getItem('submissionData');
  if (storedData) {
    // 解析出我们之前保存的 “summaryHTML”
    const { summaryHTML } = JSON.parse(storedData);

    // 隐藏表单，展示汇总结果
    form.style.display = 'none';
    summarySection.innerHTML = summaryHTML;

    // 清理存储，避免刷新多次显示
    localStorage.removeItem('submissionData');
    return; // 不再执行后面的表单逻辑
  }

  // 2) 尚未提交过 -> 正常显示表单，并进行动态添加参与者的逻辑
  let participantCount = 1;

  addBtn.addEventListener('click', () => {
    participantCount++;
    // 调用 Templates.js 提供的函数，克隆一个新表单块
    const newParticipantDiv = cloneParticipantBlock(firstParticipantDiv, participantCount);
    // 插入到 "Add Participant" 按钮之前
    participantsFieldset.insertBefore(newParticipantDiv, addBtn);
  });

  // 3) 监听表单的提交事件
  form.addEventListener('submit', (e) => {
    // 注意：这里不调用 e.preventDefault()，提交完成后会触发页面刷新

    // 先收集数据：统计各参与者的费用合计 (Fee) 与家长姓名 (Adult Name)
    const allParticipants = document.querySelectorAll('.participant1');
    let totalFee = 0;
    const participantList = [];

    allParticipants.forEach((participantDiv, index) => {
      const fname = participantDiv.querySelector('input[name="fname"]')?.value.trim() || '';
      const feeVal = participantDiv.querySelector('input[name="fee"]')?.value.trim() || '0';
      const feeNum = parseFloat(feeVal) || 0;
      totalFee += feeNum;

      participantList.push({ index: index + 1, name: fname, fee: feeNum });
    });

    // 获取 Household / Adult Primary Contact 部分的姓名
    const adultName = document.getElementById('adult_name')?.value.trim() || '(未填写)';

    // 生成汇总 HTML
    let summaryHTML = `<h2>Registration Summary</h2>`;
    summaryHTML += `<p><strong>Adult Name:</strong> ${adultName}</p>`;
    summaryHTML += `<p><strong>Total Fee:</strong> $${totalFee.toFixed(2)}</p>`;

    summaryHTML += `<h3>Participants:</h3>`;
    participantList.forEach((p) => {
      summaryHTML += `
        <p>
          <strong>Participant ${p.index}:</strong> 
          Name = ${p.name || '(未填写)'}, 
          Fee = $${p.fee.toFixed(2)}
        </p>
      `;
    });

    // 将汇总结果保存到 localStorage，以便页面刷新后读取
    localStorage.setItem(
      'submissionData',
      JSON.stringify({ summaryHTML })
    );

    // 让浏览器继续提交行为 -> 刷新后会在上方 “storedData” 检查并显示汇总
  });
});