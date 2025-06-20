document.addEventListener('DOMContentLoaded', () => {
  // 빨간 원 숫자 증가 애니메이션
  document.addEventListener('DOMContentLoaded', () => {
    const redDot = document.querySelector('.dot-container.red');
    const plus = redDot.querySelector('.plus');
    const number = redDot.querySelector('.number');
  
    let hasAnimated = false;
  
    redDot.addEventListener('mouseenter', () => {
      if (hasAnimated) return;
      hasAnimated = true;
  
      let current = 0;
      const target = 594;
      const duration = 1000;
      const increment = target / (duration / 16);
  
      const animate = () => {
        current += increment;
        if (current < target) {
          number.textContent = `${Math.round(current)}%`;
          requestAnimationFrame(animate);
        } else {
          number.textContent = `${target}%`;
        }
      };
  
      animate();
    });
  });
  

  // 원인별 박스 클릭 시 설명 표시 + 애니메이션
  const boxes = document.querySelectorAll('.square-box');
  const descriptions = document.querySelectorAll('.desc-item');
  const labels = document.querySelectorAll('.label-group');

  boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
      const isActive = box.classList.contains('fixed');

      // 초기화: 모두 비활성화
      boxes.forEach(b => b.classList.remove('fixed'));
      descriptions.forEach(d => d.classList.remove('active'));
      labels.forEach(l => l.classList.remove('active'));

      // 다시 클릭한 게 아니라면 활성화
      if (!isActive) {
        box.classList.add('fixed');
        descriptions[index].classList.add('active');
        labels[index].classList.add('active');
      }
    });
  });
});