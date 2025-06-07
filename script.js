const customSelectWrapper = document.querySelector(".custom-select-wrapper");
const customSelectTrigger = document.querySelector(".custom-select-trigger");
const customOptions = document.querySelector(".custom-options");
const options = document.querySelectorAll(".custom-options .option");
const realSelect = document.getElementById("realSelect");
const selectedValueDisplay = document.getElementById("selectedValue");

// 初期表示の設定
const initialSelectedOption = realSelect.options[realSelect.selectedIndex];
customSelectTrigger.querySelector("span").textContent =
  initialSelectedOption.textContent;
selectedValueDisplay.textContent = initialSelectedOption.value;

// カスタムセレクトボックスのトリガーをクリックした時の処理
customSelectTrigger.addEventListener("click", () => {
  customSelectTrigger.classList.toggle("active");
  customOptions.classList.toggle("open");
});

// 各オプションをクリックした時の処理
options.forEach((option) => {
  option.addEventListener("click", () => {
    const value = option.dataset.value;
    const text = option.textContent;

    // 実際のselect要素の値を更新
    realSelect.value = value;

    // カスタムセレクトボックスの表示を更新
    customSelectTrigger.querySelector("span").textContent = text;
    selectedValueDisplay.textContent = value;

    // すべてのオプションから'selected'クラスを削除し、クリックされたものに追加
    options.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");

    // ドロップダウンを閉じる
    customSelectTrigger.classList.remove("active");
    customOptions.classList.remove("open");
  });
});

// ドロップダウンの外側をクリックしたら閉じる
document.addEventListener("click", (e) => {
  if (!customSelectWrapper.contains(e.target)) {
    customSelectTrigger.classList.remove("active");
    customOptions.classList.remove("open");
  }
});
