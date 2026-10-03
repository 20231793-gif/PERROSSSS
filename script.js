/* Interacciones extraídas del archivo generado por Stitch */

// Toast del carrito
function triggerToast(productName) {
  const toast = document.getElementById('cart-toast');
  const subtext = document.getElementById('toast-subtext');

  if (productName) {
    subtext.textContent = productName + ' se guardó en tu compra.';
  }

  toast.classList.remove('translate-y-32', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-32', 'opacity-0');
  }, 3200);
}


// 1. QUIZ DE RECOMENDACIÓN
const quizState = {
  age: 'puppy',
  size: 'medium',
  activity: 'medium',
  need: 'digest'
};

const quizOptions = document.querySelectorAll('.quiz-btn');

quizOptions.forEach(btn => {
  btn.addEventListener('click', () => {
    const type = btn.getAttribute('data-quiz');
    const val = btn.getAttribute('data-val');

    quizState[type] = val;

    const parent = btn.parentElement;

    parent.querySelectorAll('.quiz-btn').forEach(b => {
      b.classList.remove(
        'active',
        'bg-surface-container-high',
        'border-2',
        'border-primary-container'
      );

      b.classList.add('bg-surface-container');
    });

    btn.classList.add(
      'active',
      'bg-surface-container-high',
      'border-2',
      'border-primary-container'
    );

    btn.classList.remove('bg-surface-container');

    updateQuizRecommendation();
  });
});


function updateQuizRecommendation() {
  const title = document.getElementById('quiz-rec-title');
  const sub = document.getElementById('quiz-rec-subtitle');
  const price = document.getElementById('quiz-rec-price');
  const img = document.getElementById('quiz-rec-image');

  if (quizState.age === 'puppy') {

    title.textContent =
      'Receta Salmón & Calabaza Cachorros';

    sub.textContent =
      'Rico en DHA y ácidos grasos Omega 3 para un crecimiento cognitivo y articular óptimo en sus primeros meses.';

    price.textContent = '$28.50';

    img.src =
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBlf95TclGCPp8KCoML6dVJSEQ_iG7mJciKMfWn09QQ91NohSP71IpeVK1bYchdSe8AuMFXwe_Qgh52vQY-ww773vc6B7kAgx3TpOfN3nu0gb_hPt-0Ukjpw0RgDalIv1fk_yyo2jeHcu68Ms1D1Fqj-rRd0-K0hKOVIR2gqxYsIYEKo21WiDO5ley90R3v5Fc-nLlMMsk2XUgeCTSvt1Zs1ro-3KM9SSoTdEb-G874enKjyzzmZC1E';

  } else if (
    quizState.age === 'senior' ||
    quizState.need === 'weight'
  ) {

    title.textContent =
      'Fórmula Senior & Articulaciones Protegidas';

    sub.textContent =
      'Carne magra de pavo con condroprotectores, glucosamina y cúrcuma antiinflamatoria para cuidar su paso.';

    price.textContent = '$29.90';

    img.src =
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDjYa4lNtCTQvHwT_WRbUkppbcun0ExM7xl9Wv3yI13DeP1fpCZFTQ02dPHD91nmil_M8be2GjryVLDcMrL-EFts8LDp7_LWqkUWv1DCmy2ezdh3YXqvPUheMJMygdqBRUaOamelOFekiL1KVwOofNXdlLsEm9aX2kjqJyojja6dfNw5Hjw8zcFfV3qpNYsNqGeGYJUhXRaxuuGnfS3QbQE9FdAqL0kin5r2cIA2t8Uimicpe_Vlru6';

  } else {

    title.textContent =
      'Festín Campestre Pollo de Granja & Arándanos';

    sub.textContent =
      'Energía natural limpia con 70% de carne magra de ave de libre pastoreo, manzana verde y fibra probiótica.';

    price.textContent = '$24.90';

    img.src =
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAlARVr5Q3x-pN_LOarLdj0_8q3tRUb3vyC6kEpxezHYUN2ydkL1jZCwBwGkD03ikabzOySg_e6sqdNPwkVwhdo-bqTXALCCG8FRX2P9x8o9uAWGH7TQqrXjqVwRL_rS09qYmO8HR1nyaiGhdGbdzKysKM_Fyc8P7qotSxXcwg-VHAMIY3toO0511IDbVAstPi6XpCKm6QLBTLtg3i4vxFdGViJg02iib_wBsmpyO3ipR8DjLEw6KMc';
  }
}


// 2. PRODUCTOS: TAMAÑO Y CANTIDAD
function updateProductTier(prodId, tier, basePrice, btn) {

  const parent = btn.parentElement;

  parent.querySelectorAll('.tier-btn').forEach(b => {
    b.classList.remove(
      'active',
      'bg-primary-fixed',
      'text-on-primary-fixed'
    );

    b.classList.add(
      'bg-surface-container',
      'text-on-surface'
    );
  });

  btn.classList.add(
    'active',
    'bg-primary-fixed',
    'text-on-primary-fixed'
  );

  btn.classList.remove(
    'bg-surface-container',
    'text-on-surface'
  );

  const qtySpan =
    document.getElementById('qty-' + prodId);

  const qty =
    parseInt(qtySpan.textContent, 10);

  const priceEl =
    document.getElementById('price-' + prodId);

  priceEl.setAttribute(
    'data-base',
    basePrice
  );

  priceEl.textContent =
    '$' + (basePrice * qty).toFixed(2);
}


function adjustQty(qtyId, delta) {

  const span =
    document.getElementById(qtyId);

  let cur =
    parseInt(span.textContent, 10);

  cur =
    Math.max(1, cur + delta);

  span.textContent =
    cur;

  const prodId =
    qtyId.replace('qty-', '');

  const priceEl =
    document.getElementById('price-' + prodId);

  const base =
    parseFloat(
      priceEl.getAttribute('data-base')
    ) ||
    (
      prodId === 'p1'
        ? 28.50
        : prodId === 'p2'
          ? 24.90
          : 29.90
    );

  priceEl.textContent =
    '$' + (base * cur).toFixed(2);
}


// 3. SLIDER ANTES / DESPUÉS
const container =
  document.getElementById(
    'before-after-container'
  );

const divider =
  document.getElementById(
    'slider-divider'
  );

let isDragging = false;


function setSliderPosition(x) {

  const rect =
    container.getBoundingClientRect();

  let pos =
    (x - rect.left) / rect.width;

  pos =
    Math.max(
      0.05,
      Math.min(0.95, pos)
    );

  divider.style.left =
    (pos * 100) + '%';
}


if (container) {

  container.addEventListener(
    'mousedown',
    e => {
      isDragging = true;
      setSliderPosition(e.clientX);
    }
  );

  window.addEventListener(
    'mouseup',
    () => {
      isDragging = false;
    }
  );

  window.addEventListener(
    'mousemove',
    e => {
      if (!isDragging) return;

      setSliderPosition(
        e.clientX
      );
    }
  );

  container.addEventListener(
    'touchstart',
    e => {
      isDragging = true;

      setSliderPosition(
        e.touches[0].clientX
      );
    }
  );

  window.addEventListener(
    'touchend',
    () => {
      isDragging = false;
    }
  );

  window.addEventListener(
    'touchmove',
    e => {
      if (!isDragging) return;

      setSliderPosition(
        e.touches[0].clientX
      );
    }
  );
}


// 4. CALCULADORA DE PORCIONES
let calcStageMultiplier = 1.0;
let calcActMultiplier = 1.0;


function setCalcStage(stage, btn) {

  const parent =
    document.getElementById(
      'calc-stage-group'
    );

  parent
    .querySelectorAll(
      '.calc-stage-btn'
    )
    .forEach(b => {

      b.classList.remove(
        'active',
        'bg-primary-container',
        'text-on-primary-container'
      );

      b.classList.add(
        'bg-surface-container',
        'text-on-surface'
      );
    });

  btn.classList.add(
    'active',
    'bg-primary-container',
    'text-on-primary-container'
  );

  btn.classList.remove(
    'bg-surface-container',
    'text-on-surface'
  );

  if (stage === 'puppy') {
    calcStageMultiplier = 1.25;

  } else if (stage === 'senior') {
    calcStageMultiplier = 0.85;

  } else {
    calcStageMultiplier = 1.0;
  }

  recalculatePortions();
}


function setCalcAct(factor, btn) {

  const parent =
    document.getElementById(
      'calc-act-group'
    );

  parent
    .querySelectorAll(
      '.calc-act-btn'
    )
    .forEach(b => {

      b.classList.remove(
        'active',
        'bg-primary-container',
        'text-on-primary-container'
      );

      b.classList.add(
        'bg-surface-container',
        'text-on-surface'
      );
    });

  btn.classList.add(
    'active',
    'bg-primary-container',
    'text-on-primary-container'
  );

  btn.classList.remove(
    'bg-surface-container',
    'text-on-surface'
  );

  calcActMultiplier =
    factor;

  recalculatePortions();
}


function recalculatePortions() {

  const weight =
    parseFloat(
      document.getElementById(
        'weight-slider'
      ).value
    );

  document.getElementById(
    'weight-val'
  ).textContent = weight;

  const baseGrams =
    Math.round(
      Math.pow(weight, 0.75) *
      28 *
      calcStageMultiplier *
      calcActMultiplier
    );

  document.getElementById(
    'calc-grams'
  ).textContent =
    baseGrams + ' g';

  const days =
    Math.round(
      5000 / baseGrams
    );

  document.getElementById(
    'calc-days'
  ).textContent =
    days + ' días';

  const costPerDay =
    (
      (48 / 5000) *
      baseGrams
    ).toFixed(2);

  document.getElementById(
    'calc-cost'
  ).textContent =
    '$' + costPerDay + ' / día';
}


// 5. FRECUENCIA DE SUSCRIPCIÓN
function setSubsFreq(btn) {

  const parent =
    document.getElementById(
      'subs-freq-group'
    );

  parent
    .querySelectorAll(
      '.subs-freq-btn'
    )
    .forEach(b => {

      b.classList.remove(
        'active',
        'bg-secondary',
        'text-on-secondary'
      );

      b.classList.add(
        'bg-surface-container-lowest',
        'text-on-surface'
      );
    });

  btn.classList.add(
    'active',
    'bg-secondary',
    'text-on-secondary'
  );

  btn.classList.remove(
    'bg-surface-container-lowest',
    'text-on-surface'
  );
}


// 6. TESTIMONIOS
let currentTestimonialIndex = 0;

function nextTestimonial() {
  triggerToast(
    'Opinión de cliente'
  );
}

function prevTestimonial() {
  triggerToast(
    'Opinión de cliente'
  );
}


// 7. NEWSLETTER
function handleNewsletterSubmit(e) {

  e.preventDefault();

  document
    .getElementById(
      'newsletter-form'
    )
    .classList
    .add('hidden');

  document
    .getElementById(
      'newsletter-success'
    )
    .classList
    .remove('hidden');
}