const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let stars = [];
let mouseX = 0;
let mouseY = 0;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createStars();
}

function createStars() {
  const count = Math.floor(
    (window.innerWidth * window.innerHeight) / 6500
  );

  stars = [];

  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 1.6 + 0.3,
      speed: Math.random() * 0.22 + 0.04,
      alpha: Math.random() * 0.7 + 0.2
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    star.y -= star.speed;

    if (star.y < -5) {
      star.y = canvas.height + 5;
      star.x = Math.random() * canvas.width;
    }

    const offsetX =
      (mouseX - canvas.width / 2) * star.size * 0.002;

    const offsetY =
      (mouseY - canvas.height / 2) * star.size * 0.002;

    ctx.beginPath();

    ctx.arc(
      star.x + offsetX,
      star.y + offsetY,
      star.size,
      0,
      Math.PI * 2
    );

    ctx.fillStyle =
      `rgba(255,255,255,${star.alpha})`;

    ctx.fill();
  });

  requestAnimationFrame(drawStars);
}

window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", (event) => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

resizeCanvas();
drawStars();

const menuButton =
  document.getElementById("menuButton");

const navLinks =
  document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const timelineData = [
  {
    year: "2018",
    date: "2018.08.29",
    title: "暑期汇演",
    songs: "温柔"
  },
  {
    year: "2018",
    date: "2018.11.23",
    title: "秋日幻想曲",
    songs: "梦想起航 · 3.6.5 · 我管你 · 小幸运 · Lollipop · 年轻的战场"
  },
  {
    year: "2018",
    date: "2018.12.29",
    title: "第一页",
    songs: "快乐崇拜 · 放学后 · 青春修炼手册 · 街舞少年"
  },
  {
    year: "2019",
    date: "2019.05.04",
    title: "第25小时",
    songs: "少年说 · IOIO · 去流浪 · 飘向北方 · 快乐环岛 · 骑士宣言 · 年轻的战场"
  },
  {
    year: "2019",
    date: "2019.10.19",
    title: "单向放映厅",
    songs: "我的未来式 · 跨时代 · My Little Princess · 凑热闹 · 杀破狼 · Capture · 信仰"
  },
  {
    year: "2020",
    date: "2020.01.11",
    title: "重逢",
    songs: "Journey · 十二月的奇迹 · 街舞少年"
  },
  {
    year: "2020",
    date: "2020.04.29",
    title: "想见你的倒计时",
    songs: "爱你 · 那个男人"
  },
  {
    year: "2020",
    date: "2020.11.07",
    title: "圈",
    songs: "I Believe · Funky Show · 温柔 · Maria · 庆功酒 · Thanks · 杀手"
  },
  {
    year: "2021",
    date: "2021.04.05",
    title: "少年 On Fire 第二季",
    songs: "刀马旦 · 为你我受冷风吹"
  },
  {
    year: "2021",
    date: "2021.05",
    title: "五月粉丝见面会",
    songs: "四面楚歌 · 母系社会"
  },
  {
    year: "2021",
    date: "2021.07.31",
    title: "迷宫",
    songs: "倔强 · 不死鸟 · Me You · 北极星的眼泪 · 顶天立地 · 火力全开 · 年轻的战场"
  },
  {
    year: "2022",
    date: "2022.01.24",
    title: "未完成的约定",
    songs: "Hello · 长大 · 傻瓜 · 烈火战马 · 笨小孩的道歉信"
  },
  {
    year: "2022",
    date: "2022.08.19",
    title: "陆",
    songs: "年轻的战场 · Better Now · 写给他们的信 · 将军话 · Bad Boy · 恶童 · 盛夏光年 · 灵魂冲浪"
  },
  {
    year: "2023",
    date: "2023.01.15",
    title: "瞬间",
    songs: "青春修炼手册 · 我们的时光 · Gee · Ring Ring Ring · 日日夜夜 · 流浪记 · Bang Bang"
  },
  {
    year: "2023",
    date: "2023.04.15",
    title: "蝴蝶效应",
    songs: "想见你想见你想见你 · 长大 · 人鱼的眼泪 · 一起长大吧笨蛋 · 你的微笑 · CALL ME BABY · 不完美小孩"
  },
  {
    year: "2023",
    date: "2023.07.22 — 07.23",
    title: "生于火焰",
    songs: "逆战 · 少年郎 · Suit & Tie · 波斯猫 · 花花公子 · 危险派对 · 三国恋 · 不死鸟"
  },
  {
    year: "2023",
    date: "2023.08.12 — 08.13",
    title: "让我们不顾一切",
    songs: "黑暗骑士 · 派对动物 · 花房姑娘 · 连名带姓 · Butter Fly · 跨时代 · 火力全开 · 灵魂冲浪"
  },
  {
    year: "2023",
    date: "2023.11.29",
    title: "齿轮",
    songs: "成长继续转动"
  },
  {
    year: "2024",
    date: "2024.02.03 — 02.04",
    title: "盛放",
    songs: "新的舞台阶段"
  },
  {
    year: "2024",
    date: "2024.08.25 — 08.26",
    title: "登陆时刻",
    songs: "成长轨迹的新起点"
  }
];

const timeline =
  document.getElementById("timeline");

timelineData.forEach((item) => {
  const timelineItem =
    document.createElement("article");

  timelineItem.className = "timeline-item";

  timelineItem.innerHTML = `
    <div class="timeline-year">
      ${item.year}
    </div>

    <div class="timeline-card">
      <h3>${item.title}</h3>

      <div class="timeline-date">
        ${item.date}
      </div>

      <div class="timeline-songs">
        ${item.songs}
      </div>
    </div>
  `;

  timeline.appendChild(timelineItem);
});

const cards =
  document.querySelectorAll(
    ".timeline-item, .stage-card, .video-card"
  );

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.12
  }
);

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition =
    "opacity 0.7s ease, transform 0.7s ease";

  observer.observe(card);
});
