export function cloneParticipantBlock(originalParticipant, newIndex) {
    // 克隆传入的节点（true 表示深拷贝所有子节点）
    const clone = originalParticipant.cloneNode(true);
  
    // 更新标题文本，比如 "Participant 2", "Participant 3"…
    const pTag = clone.querySelector('p');
    if (pTag) {
      pTag.textContent = `Participant ${newIndex}`;
    }
  
    // 下列操作仅示范如何“重命名 ID 和 label 的 for 属性”，
    // 以防止页面出现重复 ID（这对可访问性/验证也有好处）。
    // 如果您不想改动也可以删除此块，只是要确保不会有冲突。
    const fnameInput = clone.querySelector('input[name="fname"]');
    const activityInput = clone.querySelector('input[name="activity"]');
    const feeInput = clone.querySelector('input[name="fee"]');
    const dateInput = clone.querySelector('input[name="date"]');
    if (fnameInput) {
      fnameInput.id = `fname_${newIndex}`;
      const label = clone.querySelector('label[for="fname"]');
      if (label) label.setAttribute('for', `fname_${newIndex}`);
      fnameInput.value = '';
    }
    if (activityInput) {
      activityInput.id = `activity_${newIndex}`;
      const label = clone.querySelector('label[for="activity"]');
      if (label) label.setAttribute('for', `activity_${newIndex}`);
      activityInput.value = '';
    }
    if (feeInput) {
      feeInput.id = `fee_${newIndex}`;
      const label = clone.querySelector('label[for="fee"]');
      if (label) label.setAttribute('for', `fee_${newIndex}`);
      feeInput.value = '';
    }
    if (dateInput) {
      dateInput.id = `date_${newIndex}`;
      const label = clone.querySelector('label[for="date"]');
      if (label) label.setAttribute('for', `date_${newIndex}`);
      dateInput.value = '';
    }
  
    // 重置下拉选择框
    const selectElem = clone.querySelector('select');
    if (selectElem) {
      selectElem.selectedIndex = 0; // 还原到占位选项
    }
  
    return clone;
  }