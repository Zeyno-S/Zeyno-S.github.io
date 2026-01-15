
class Move {
  constructor(name, dmg, type, pp) {
    this.name = name;
    this.dmg = dmg;
    this.type = type;
    this.pp = pp;
  }

  use() {
    if (this.pp <= 0) {
      console.warn(`${this.name} has no PP left!`);
      return false;
    }
    this.pp -= 1;
    return true;
  }
}

class Pokemon {
  constructor(id, name, type, moves = [], hp = 0, weak = [], strong = [], img = '') {
    this.id = id;
    this.name = name;
    this.type = type;
    this.moves = moves;
    this.hp = hp;
    this.weak = Array.isArray(weak) ? weak : [];
    this.strong = Array.isArray(strong) ? strong : [];
    this.img = img;
  }

  attack(move, target) {
    if (!move || !target) return;
    if (!move.use()) return;
    let dmg = Number(move.dmg) || 0;
    if (target.weak && target.weak.includes(move.type)) dmg *= 1.8;
    else if (target.strong && target.strong.includes(move.type)) dmg *= 0.7;
    dmg = Math.max(0, Math.round(dmg));
    target.receive_dmg(dmg);
  }

  receive_dmg(dmg) {
    if (dmg >= this.hp) {
      this.hp = 0;
      console.log(`${this.name} has fainted`);
    } else {
      this.hp -= dmg;
      console.log(`${this.name} took ${dmg} damage and has ${this.hp} HP left`);
    }
  }

  render_card() {
    const holder = document.getElementById('pk-holder');
    if (!holder) {
      console.warn('Add <div id="pk-holder"></div> to your HTML.');
      return;
    }

    const card = document.createElement('div');
    card.className = 'pk-card';
    card.setAttribute('pk-id', String(this.id));

    const header = document.createElement('div');
    header.className = 'pk-card__header';
    header.textContent = this.name;
    card.appendChild(header);

    const img = document.createElement('img');
    img.className = 'pk-card__img';
    img.src = this.img || ''; 
    img.alt = `${this.name} image`;
    card.appendChild(img);

    const meta = document.createElement('div');
    meta.className = 'pk-card__meta';
    meta.innerHTML = `<div><strong>Type:</strong> ${this.type}</div><div><strong>HP:</strong> ${this.hp}</div>`;
    card.appendChild(meta);

    holder.appendChild(card);
    this.cardElement = card;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const tndr_shck = new Move('Thunder Shock', 30, 'electric', 10);
  const tack = new Move('Tackle', 10, 'normal', 20);
  const wtr_gn = new Move('Water Gun', 25, 'water', 15);

  const pikachu = new Pokemon(
    1,
    'Pikachu',
    'electric',
    [tack, tndr_shck],
    60,
    ['Ground', 'Rock'],
    ['Water', 'Flying'],
    'pkchu.jpeg' 
  );

  const squirtle = new Pokemon(
    2,
    'Squirtle',
    'water',
    [tack, wtr_gn],
    50,
    ['Electric', 'Grass'],
    ['Fire', 'Rock', 'Ground'],
    'sq.jpeg' 
  );

  const charz = new Pokemon(
    2,
    'Charz',
    'fire',
    [tack, wtr_gn],
    50,
    ['Electric', 'Grass'],
    ['Fire', 'Rock', 'Ground'],
    'ch.png' 
  );

    const empt = new Pokemon(
    0,
    'styling',
    'nothing',
    [],
    0,
    [],
    [],
    '' 
  );

  pikachu.render_card();
  charz.render_card();
  squirtle.render_card();
  empt.render_card();
});