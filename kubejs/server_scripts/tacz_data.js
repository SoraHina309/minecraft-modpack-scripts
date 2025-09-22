TaCZServerEvents.gunDataLoad((event) => {
    const id = event.getId().toString();
    //机动军械师
if (id === "create_armorer:mg_platemag_flywheel_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 34;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":35,"damage":34},{"distance":80,"damage":32},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}

if (id === "create_armorer:pistol_auto_stress_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 7;
    json.bullet.extra_damage.armor_ignore = 0.0;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":7},{"distance":35,"damage":6},{"distance":"infinite","damage":5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "create_armorer:pistol_revolver_torque_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 18;
    json.bullet.extra_damage.armor_ignore = 0.05;
    json.bullet.extra_damage.head_shot_multiplier = 3.0;
    json.bullet.extra_damage.damage_adjust = [{"distance":25,"damage":18},{"distance":50,"damage":17},{"distance":"infinite","damage":16}];
    return event.setJson(JSON.stringify(json));
}

if (id === "create_armorer:rifle_assult_crane_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 34;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":35,"damage":34},{"distance":80,"damage":31},{"distance":"infinite","damage":28}];
    return event.setJson(JSON.stringify(json));
}

if (id === "create_armorer:shotgun_db_stone_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 44;
    json.bullet.extra_damage.armor_ignore = 0.00;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":7,"damage":44},{"distance":15,"damage":42},{"distance":"infinite","damage":34}];
    return event.setJson(JSON.stringify(json));
}

if (id === "create_armorer:shotgun_pump_bearing_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 44;
    json.bullet.extra_damage.armor_ignore = 0;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":10,"damage":44},{"distance":20,"damage":40},{"distance":"infinite","damage":32}];
    return event.setJson(JSON.stringify(json));
}

if (id === "create_armorer:smg_auto_crank_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 9.5;
    json.bullet.extra_damage.armor_ignore = 0.0;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":30,"damage":9.5},{"distance":55,"damage":8},{"distance":"infinite","damage":6}];
    return event.setJson(JSON.stringify(json));
}

if (id === "create_armorer:sniper_semi_clockwork_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 44;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 3;
    json.bullet.extra_damage.damage_adjust = [{"distance":25,"damage":44},{"distance":50,"damage":43},{"distance":"infinite","damage":42}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:ef46_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'immersive_armorer:chemical';
    json.bullet.damage = 8;
    json.bullet.extra_damage.armor_ignore = 0.5;
    json.bullet.extra_damage.head_shot_multiplier = 2.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":10,"damage":8},{"distance":"infinite","damage":7.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:f_faust_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'tacz:40mm';
    json.bullet.damage = 200;
        json.bullet.explosion = {
        explode: true,
        damage: 75,
        radius: 3,
        knockback: true,
        destroy_block: true,
        delay: 30
    };
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:handgun_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'tacz:9mm';
    json.bullet.damage = 6;
    json.bullet.extra_damage.armor_ignore = 0.2;
    json.bullet.extra_damage.head_shot_multiplier = 3.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":20,"damage":6},{"distance":45,"damage":5},{"distance":"infinite","damage":4}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:kolibri_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 1;
    json.bullet.extra_damage.armor_ignore = 0;
    json.bullet.extra_damage.head_shot_multiplier = 4;
    json.bullet.extra_damage.damage_adjust = [{"distance":10,"damage":1},{"distance":15,"damage":0.75},{"distance":20,"damage":0.5},{"distance":25,"damage":0.25},{"distance":"infinite","damage":0}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:lewis_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 39.5;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":30,"damage":39.5},{"distance":60,"damage":36},{"distance":"infinite","damage":32}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:m1916_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 39.5;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":40,"damage":39.5},{"distance":60,"damage":35.5},{"distance":80,"damage":32.5},{"distance":"infinite","damage":29}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:man_m95_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 67;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.95;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":67},{"distance":90,"damage":65},{"distance":120,"damage":62},{"distance":"infinite","damage":60}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:m1903a3_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 68.5;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 3.00;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":68.5},{"distance":90,"damage":66},{"distance":120,"damage":64},{"distance":"infinite","damage":62}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:cbr11sp_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 68;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 3.00;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":68},{"distance":90,"damage":65},{"distance":120,"damage":62},{"distance":"infinite","damage":60}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:cbr11_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 57;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.85;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":57},{"distance":90,"damage":50},{"distance":120,"damage":44},{"distance":"infinite","damage":40}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:cbr11r_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 66;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.85;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":66},{"distance":90,"damage":64},{"distance":120,"damage":62},{"distance":"infinite","damage":59}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:cbr9_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'qkl:16mm';
    json.bullet.damage = 55;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":55},{"distance":90,"damage":50},{"distance":120,"damage":44},{"distance":"infinite","damage":40}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:cbr11c_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 67;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.65;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":67},{"distance":90,"damage":65},{"distance":120,"damage":61},{"distance":"infinite","damage":59}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:liu_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 67;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.85;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":67},{"distance":30,"damage":65.5},{"distance":45,"damage":62},{"distance":56,"damage":61},{"distance":65,"damage":60},{"distance":75,"damage":59},{"distance": "infinite", "damage": 58.5}];
    json.fire_mode_adjust.burst = {
          "damage": -26.5,
          "rpm": 240,
          "speed": 0,
          "knockback": -0.1,
          "armor_ignore": 0,
          "head_shot_multiplier": -0.5,
          "aim_inaccuracy": 0.15,
          "other_inaccuracy": 0
     }
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:mg0815_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 45;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":20,"damage":45},{"distance":75,"damage":40},{"distance":120,"damage":37.5},{"distance":"infinite","damage":32}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:chauchat_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 37;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":20,"damage":37},{"distance":75,"damage":36},{"distance":120,"damage":35.5},{"distance":"infinite","damage":32}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:mhgl_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'tacz:40mm';
    json.bullet.damage = 25;
    json.bullet.explosion = {
        explode: true,
        damage: 150,
        radius: 4,
        knockback: true,
        destroy_block: true,
        delay: 30
    };

    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:model10_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 58;
    json.bullet.extra_damage.armor_ignore = 0.05;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":24,"damage":58},{"distance":48,"damage":48},{"distance":"infinite","damage":38}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:sjogren_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 53;
    json.bullet.extra_damage.armor_ignore = 0;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":24,"damage":53},{"distance":48,"damage":48},{"distance":"infinite","damage":38}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:obrez_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 35;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":10,"damage":30},{"distance":20,"damage":26},{"distance":50,"damage":20},{"distance":"infinite","damage":12}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:rsc1917_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 40;
    json.bullet.extra_damage.armor_ignore = 0.5;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":80,"damage":37.5},{"distance":120,"damage":35},{"distance":"infinite","damage":32.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:smg0818_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 10.5;
    json.bullet.extra_damage.armor_ignore = 0.0;
    json.bullet.extra_damage.head_shot_multiplier = 3.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":12,"damage":10.5},{"distance":25,"damage":6.5},{"distance":34,"damage":4},{"distance":"infinite","damage":3}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:sw_model3_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 28.5;
    json.bullet.extra_damage.armor_ignore = 0.0;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":28.5},{"distance":20,"damage":15},{"distance":40,"damage":12.5},{"distance":"infinite","damage":5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:syringe_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 19;


    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:tg1918_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 140;
    json.bullet.extra_damage.armor_ignore = 1.0;
    json.bullet.extra_damage.head_shot_multiplier = 3.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":75,"damage":140},{"distance":150,"damage":125},{"distance":"infinite","damage":120}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:at50_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 88;
    json.bullet.extra_damage.armor_ignore = 0.53;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":75,"damage":88},{"distance":150,"damage":85},{"distance":"infinite","damage":75}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:trapdoor_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'tacz:338';
    json.bullet.damage = 46;
    json.bullet.extra_damage.armor_ignore = 0.6;
    json.bullet.extra_damage.head_shot_multiplier = 1.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":20,"damage":42},{"distance":60,"damage":46},{"distance":70,"damage":40},{"distance":100,"damage":30},{"distance":"infinite","damage":25}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:vg15_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 25.5;
    json.bullet.extra_damage.armor_ignore = 0.1;
    json.bullet.extra_damage.head_shot_multiplier = 2.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":20,"damage":25.5},{"distance":35,"damage":20},{"distance":50,"damage":18.5},{"distance":"infinite","damage":16}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:vp1915_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 17.5;
    json.bullet.extra_damage.armor_ignore = 0.0;
    json.bullet.extra_damage.head_shot_multiplier = 3.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":18,"damage":17.5},{"distance":40,"damage":10},{"distance":65,"damage":6.5},{"distance":"infinite","damage":4.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "bf1:wex_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'immersive_armorer:chemical';
    json.bullet.damage = 9;
    json.bullet.extra_damage.armor_ignore = 0.75;
    json.bullet.extra_damage.head_shot_multiplier = 2.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":10,"damage":9},{"distance":"infinite","damage":8.6}];
    return event.setJson(JSON.stringify(json));
}
//巧克力人
if (id === "qkl:1871_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'qkl:16mm';
    json.bullet.damage = 35; 
    json.bullet.extra_damage.armor_ignore = 0.10;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":35},{"distance":25,"damage":33},{"distance":35,"damage":31},{"distance":45,"damage":29},{"distance":"infinite","damage":27}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:1897_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 57; 
    json.bullet.extra_damage.armor_ignore = 0;
    json.bullet.extra_damage.head_shot_multiplier = 2.4;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":57},{"distance":25,"damage":52},{"distance":35,"damage":30},{"distance":45,"damage":20},{"distance":"infinite","damage":10}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:1912_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 7.5; 
    json.bullet.extra_damage.armor_ignore = 0.0;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":6.5},{"distance":35,"damage":5},{"distance":"infinite","damage":3.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:1912p16_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 7.5; 
    json.bullet.extra_damage.armor_ignore = 0.0;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":6.5},{"distance":35,"damage":5},{"distance":"infinite","damage":3.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:clf10_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'qkl:16mm';
    json.bullet.damage = 78; 
    json.bullet.extra_damage.armor_ignore = 0;
    json.bullet.extra_damage.head_shot_multiplier = 2.2;
    json.bullet.extra_damage.damage_adject = [{"distance":9,"damage":78},{"distance":28,"damage":32},{"distance":38,"damage":28},{"distance":"infinite","damage":20}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:csg19_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 14; 
    json.bullet.extra_damage.armor_ignore = 0.12;
    json.bullet.extra_damage.head_shot_multiplier = 3.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":8,"damage":14},{"distance":15,"damage":12},{"distance":20,"damage":10},{"distance":35,"damage":8},{"distance":45,"damage":6},{"distance":50,"damage":5},{"distance":"infinite","damage":4}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:fk15_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'qkl:16mm';
    json.bullet.damage = 65; 
    json.bullet.extra_damage.armor_ignore = 0.0;
    json.bullet.extra_damage.head_shot_multiplier = 2.00;
    json.bullet.extra_damage.damage_adjust = [{"distance":10,"damage":65},{"distance":50,"damage":59},{"distance":150,"damage":49},{"distance":"infinite","damage":38}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:hy88_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 66; 
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.85;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":66},{"distance":30,"damage":62},{"distance":45,"damage":60},{"distance":56,"damage":59},{"distance":65,"damage":58},{"distance":75,"damage":57},{"distance":"infinite","damage":56}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:lmg31_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 35.5; 
    json.bullet.extra_damage.armor_ignore = 0.4;
    json.bullet.extra_damage.head_shot_multiplier = 1.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":5,"damage":35.5},{"distance":8,"damage":34},{"distance":20,"damage":32},{"distance":30,"damage":30},{"distance":40,"damage":29},{"distance":"infinite","damage":27.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:mu73_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 39.5; 
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":39.5},{"distance":30,"damage":36.5},{"distance":60,"damage":34.5},{"distance":"infinite","damage":32}]
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:mu73m_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 39.5; 
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":39.5},{"distance":30,"damage":36.5},{"distance":60,"damage":34.5},{"distance":"infinite","damage":32}]
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:mua73_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 38.5; 
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":3,"damage":38.5},{"distance":35.5,"damage":35},{"distance":60,"damage":33},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}

if (id === "qkl:rmg_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 39.5; 
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":39.5},{"distance":30,"damage":36.5},{"distance":60,"damage":34.5},{"distance":"infinite","damage":32}];
    return event.setJson(JSON.stringify(json));
}
//沉浸军械师
if (id === "immersive_armorer:assult_rifle_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 47; 
    json.bullet.extra_damage.armor_ignore = 0.4;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":30,"damage":47},{"distance":60,"damage":45},{"distance":"infinite","damage":40}];
    return event.setJson(JSON.stringify(json));
}

if (id === "immersive_armorer:chemical_thrower_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'immersive_armorer:chemical';
    json.bullet.damage = 19; 
    json.bullet.extra_damage.armor_ignore = 0.5;
    json.bullet.extra_damage.head_shot_multiplier = 2;
    json.bullet.extra_damage.damage_adjust = [{"distance":30,"damage":19},{"distance":"infinite","damage":7}];
    return event.setJson(JSON.stringify(json));
}

if (id === "immersive_armorer:pistol_9mm_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 35; 
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.0;
    json.bullet.extra_damage.damage_adjust = [{"distance":20,"damage":35},{"distance":45,"damage":30},{"distance":"infinite","damage":20}];
    return event.setJson(JSON.stringify(json));
}

if (id === "immersive_armorer:pump_shotgun_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 59; 
    json.bullet.extra_damage.armor_ignore = 0.0;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":10,"damage":59},{"distance":20,"damage":42},{"distance":30,"damage":24},{"distance":"infinite","damage":16}];
    return event.setJson(JSON.stringify(json));
}

if (id === "immersive_armorer:railgun_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'immersive_armorer:cut_steel_rod';
    json.bullet.damage = 125; 
    json.bullet.extra_damage.armor_ignore = 1.0;
    json.bullet.extra_damage.head_shot_multiplier = 3;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":125},{"distance":120,"damage":120},{"distance":"infinite","damage":115}];
    return event.setJson(JSON.stringify(json));
}

if (id === "immersive_armorer:revolver_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 19.5; 
    json.bullet.extra_damage.armor_ignore = 0.1;
    json.bullet.extra_damage.head_shot_multiplier = 3;
    json.bullet.extra_damage.damage_adjust = [{"distance":20,"damage":19.5},{"distance":40,"damage":16.5},{"distance":"infinite","damage":12}];
    return event.setJson(JSON.stringify(json));
}

if (id === "immersive_armorer:standard_rail_pistol_mk1_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'immersive_armorer:stream_capacitor'; 
    json.bullet.damage = 14; 
    json.bullet.extra_damage.armor_ignore = 0.2;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":10,"damage":14},{"distance":20,"damage":12},{"distance":30,"damage":10},{"distance":"infinite","damage":8}];
    return event.setJson(JSON.stringify(json));
}

if (id === "immersive_armorer:standard_rail_pistol_mk2_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'immersive_armorer:stream_capacitor'; 
    json.bullet.damage = 15.5;
    json.bullet.extra_damage.armor_ignore = 0.2;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":10,"damage":15.5},{"distance":20,"damage":12},{"distance":30,"damage":10.5},{"distance":"infinite","damage":8}];
    return event.setJson(JSON.stringify(json));
}

if (id === "immersive_armorer:standard_rail_pistol_mk3_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'immersive_armorer:stream_capacitor'; 
    json.bullet.damage = 12.5; 
    json.bullet.extra_damage.armor_ignore = 0.2;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":10,"damage":12.5},{"distance":20,"damage":8.5},{"distance":30,"damage":4.5},{"distance":"infinite","damage":3}];
    return event.setJson(JSON.stringify(json));
}

if (id === "immersive_armorer:standard_rail_pistol_mk4_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'immersive_armorer:high_power_capacitor';
    json.bullet.damage = 40.5; 
    json.bullet.extra_damage.armor_ignore = 0.2;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":10,"damage":40.5},{"distance":20,"damage":36},{"distance":30,"damage":32},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}

if (id === "immersive_armorer:standard_rail_smg_mk1_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'immersive_armorer:stream_capacitor'; 
    json.bullet.damage = 20; 
    json.bullet.extra_damage.armor_ignore = 0.2;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":20,"damage":20},{"distance":40,"damage":16.5},{"distance":"infinite","damage":10}];
    return event.setJson(JSON.stringify(json));
}
//TACZ

if (id === "tacz:aa12_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 52; 
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 2.33;
    json.bullet.extra_damage.damage_adjust = [{"distance":5,"damage":52},{"distance":10,"damage":45},{"distance":15,"damage":38},{"distance":25,"damage":20},{"distance":"infinite","damage":15}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:ai_awp_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 72; 
    json.bullet.extra_damage.armor_ignore = 0.35;
    json.bullet.extra_damage.head_shot_multiplier = 3;
    json.bullet.extra_damage.damage_adjust = [{"distance":80,"damage":72},{"distance":160,"damage":70},{"distance":"infinite","damage":68}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:aug_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 28; 
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":28,"damage":28},{"distance":65,"damage":26},{"distance":"infinite","damage":25}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:cz75_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 7.5; 
    json.bullet.extra_damage.armor_ignore = 0.05;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":7.5},{"distance":35,"damage":6},{"distance":"infinite","damage":5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:db_long_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 57; 
    json.bullet.extra_damage.armor_ignore = 0.00;
    json.bullet.extra_damage.head_shot_multiplier = 2.2;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":57},{"distance":24,"damage":45},{"distance":"infinite","damage":25}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:db_short_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 54; 
    json.bullet.extra_damage.armor_ignore = 0.00;
    json.bullet.extra_damage.head_shot_multiplier = 2.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":5,"damage":54},{"distance":9,"damage":44},{"distance":"infinite","damage":22}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:deagle_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 25; 
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":25},{"distance":30,"damage":22},{"distance":50,"damage":20},{"distance":"infinite","damage":18}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:deagle_golden_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 20; 
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.8;
    json.bullet.extra_damage.damage_adjust = [{"distance":18,"damage":20},{"distance":36,"damage":18},{"distance":55,"damage":15},{"distance":"infinite","damage":12}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:glock_17_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 8.5; 
    json.bullet.extra_damage.armor_ignore = 0.05;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":20,"damage":8.5},{"distance":45,"damage":7},{"distance":"infinite","damage":5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:hk_g3_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 33; 
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":35,"damage":33},{"distance":80,"damage":29},{"distance":"infinite","damage":27.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:hk_mp5a5_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 15; 
    json.bullet.extra_damage.armor_ignore = 0.05;
    json.bullet.extra_damage.head_shot_multiplier = 3.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":18,"damage":15},{"distance":40,"damage":12},{"distance":65,"damage":10},{"distance":"infinite","damage":8.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:hk416d_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 28.5; 
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":30,"damage":28.5},{"distance":60,"damage":26},{"distance":"infinite","damage":24}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:m4a1_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 27.5; 
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":25,"damage":27.5},{"distance":60,"damage":25.5},{"distance":"infinite","damage":24.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:m16a1_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 28; 
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":30,"damage":28},{"distance":70,"damage":26},{"distance":"infinite","damage":25}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:m16a4_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 29; 
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":35,"damage":29},{"distance":70,"damage":25.5},{"distance":"infinite","damage":23.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:m107_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 90; 
    json.bullet.extra_damage.armor_ignore = 0.5;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":65,"damage":90},{"distance":120,"damage":88},{"distance":"infinite","damage":85}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:m95_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 135; 
    json.bullet.extra_damage.armor_ignore = 0.85;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":65,"damage":135},{"distance":120,"damage":115},{"distance":"infinite","damage":95}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:m249_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 26; 
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":35,"damage":26},{"distance":80,"damage":24.5},{"distance":"infinite","damage":22.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:m320_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'tacz:40mm';
    json.bullet.damage = 25; 
    json.bullet.explosion = {
        explode: true,
        damage: 150,
        radius: 4,
        knockback: true,
        destroy_block: true,
        delay: 30
    };
    json.bullet.extra_damage.armor_ignore = 0.0;
    json.bullet.extra_damage.head_shot_multiplier = 1.0;
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:m700_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 70;
    json.bullet.extra_damage.armor_ignore = 0.50;
    json.bullet.extra_damage.head_shot_multiplier = 2.8;
    json.bullet.extra_damage.damage_adjust = [{"distance":40,"damage":70},{"distance":80,"damage":68},{"distance":150,"damage":65},{"distance":"infinite","damage":62}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:m870_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 60;
    json.bullet.extra_damage.armor_ignore = 0.00;
    json.bullet.extra_damage.head_shot_multiplier = 3.33;
    json.bullet.extra_damage.damage_adjust = [{"distance":18,"damage":60},{"distance":32,"damage":57},{"distance":"infinite","damage":58}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:m1911_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 7.5;
    json.bullet.extra_damage.armor_ignore = 0.0;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":18,"damage":7.5},{"distance":40,"damage":7},{"distance":"infinite","damage":5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:mk14_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 47;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":47},{"distance":120,"damage":45.5},{"distance":"infinite","damage":40.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:p90_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 15.5;
    json.bullet.extra_damage.armor_ignore = 0.05;
    json.bullet.extra_damage.head_shot_multiplier = 3.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":14,"damage":15.5},{"distance":36,"damage":14.5},{"distance":50,"damage":12},{"distance":"infinite","damage":3}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:p320_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 12.5;
    json.bullet.extra_damage.armor_ignore = 0.05;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":20,"damage":12.5},{"distance":50,"damage":10},{"distance":"infinite","damage":8}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:qbz_95_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 28.5;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":25,"damage":28.5},{"distance":45,"damage":26},{"distance":"infinite","damage":24.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:rpg7_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'tacz:rpg_rocket';
    json.bullet.damage = 450;
    json.bullet.explosion = {
        explode: true,
        damage: 250,
        radius: 3,
        knockback: true,
        destroy_block: true,
        delay: 30
    };
    json.bullet.extra_damage.armor_ignore = 1.0;
    json.bullet.extra_damage.head_shot_multiplier = 1;
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:rpk_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 27;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":30,"damage":27},{"distance":60,"damage":25},{"distance":"infinite","damage":23}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:scar_h_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 45;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":35,"damage":45},{"distance":85,"damage":40},{"distance":"infinite","damage":38}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:scar_l_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 28.5;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adject = [{"distance":30,"damage":28.5},{"distance":70,"damage":26},{"distance":"infinite","damage":25}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:sks_tactical_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 42;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 3.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":55,"damage":42},{"distance":110,"damage":40},{"distance":"infinite","damage":37}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:type_81_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 29;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":25,"damage":29},{"distance":55,"damage":27},{"distance":"infinite","damage":24.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:ump45_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 15;
    json.bullet.extra_damage.armor_ignore = 0.05;
    json.bullet.extra_damage.head_shot_multiplier = 3.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":30,"damage":15},{"distance":55,"damage":13},{"distance":"infinite","damage":11.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:uzi_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 6.5;
    json.bullet.extra_damage.armor_ignore = 0.05;
    json.bullet.extra_damage.head_shot_multiplier = 3.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":24,"damage":6.5},{"distance":50,"damage":5.5},{"distance":"infinite","damage":4}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:vector45_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 15.5;
    json.bullet.extra_damage.armor_ignore = 0.05;
    json.bullet.extra_damage.head_shot_multiplier = 3.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":15.5},{"distance":36,"damage":12.5},{"distance":50,"damage":10.5},{"distance":"infinite","damage":10.5}];
    return event.setJson(JSON.stringify(json));
}
//赛博军械师

if (id === "cyber_armorer:3516_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 40;
    json.bullet.extra_damage.armor_ignore = 0.27;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":40},{"distance":72,"damage":35},{"distance":50,"damage":30},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:ajax_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 37;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 2.65;
    json.bullet.extra_damage.damage_adjust = [{"distance":46,"damage":37},{"distance":92,"damage":35},{"distance":"infinite","damage":32}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:ajax_moron_labe_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 40;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 2.65;
    json.bullet.extra_damage.damage_adjust = [{"distance":46,"damage":40},{"distance":92,"damage":37},{"distance":"infinite","damage":35}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:ajax_pit_bull_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 40;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 2.65;
    json.bullet.extra_damage.damage_adjust = [{"distance":46,"damage":40},{"distance":92,"damage":38},{"distance":"infinite","damage":35}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:carnage_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 82;
    json.bullet.extra_damage.armor_ignore = 0.3;
    json.bullet.extra_damage.head_shot_multiplier = 2.33;
    json.bullet.extra_damage.damage_adjust = [{"distance":12,"damage":82},{"distance":24,"damage":52},{"distance":"infinite","damage":32}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:carnage_guts_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 92;
    json.bullet.extra_damage.armor_ignore = 0.75;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":12,"damage":92},{"distance":24,"damage":62},{"distance":"infinite","damage":42}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:copperhead_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 34;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":33,"damage":34},{"distance":66,"damage":32},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:copperhead_psalm_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 25;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":33,"damage":40},{"distance":66,"damage":37},{"distance":"infinite","damage":35}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:g58_dian_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol_smart';
    json.bullet.damage = 12.5;
    json.bullet.extra_damage.armor_ignore = 0.10;
    json.bullet.extra_damage.head_shot_multiplier = 2.15;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":12.5},{"distance":90,"damage":10.5},{"distance":"infinite","damage":9}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:g58_dian_yinglong_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol_smart';
    json.bullet.damage = 15;
    json.bullet.extra_damage.armor_ignore = 0.1;
    json.bullet.extra_damage.head_shot_multiplier = 2.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":15},{"distance":90,"damage":13},{"distance":"infinite","damage":12}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:grad_05_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 210;
    json.bullet.extra_damage.armor_ignore = 0.85;
    json.bullet.extra_damage.head_shot_multiplier = 3;
    json.bullet.extra_damage.damage_adjust = [{"distance":40,"damage":210},{"distance":80,"damage":205},{"distance":"infinite","damage":202}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:grad_borzaya_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 240;
    json.bullet.extra_damage.armor_ignore = 0.95;
    json.bullet.extra_damage.head_shot_multiplier = 3;
    json.bullet.extra_damage.damage_adjust = [{"distance":90,"damage":240},{"distance":180,"damage":230},{"distance":"infinite","damage":220}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:grad_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 240;
    json.bullet.extra_damage.armor_ignore = 0.95;
    json.bullet.extra_damage.head_shot_multiplier = 3;
    json.bullet.extra_damage.damage_adjust = [{"distance":90,"damage":240},{"distance":180,"damage":230},{"distance":"infinite","damage":220}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:grad_overwatch_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 250;
    json.bullet.extra_damage.armor_ignore = 0.99;
    json.bullet.extra_damage.head_shot_multiplier = 3;
    json.bullet.extra_damage.damage_adjust = [{"distance":90,"damage":250},{"distance":180,"damage":240},{"distance":"infinite","damage":225}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:grad_sparky_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 280;
    json.bullet.extra_damage.armor_ignore = 1;
    json.bullet.extra_damage.head_shot_multiplier = 3;
    json.bullet.extra_damage.damage_adjust = [{"distance":83,"damage":280},{"distance":166,"damage":275},{"distance":"infinite","damage":272}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:m2038_bloody_maria_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 82;
    json.bullet.extra_damage.armor_ignore = 0.45;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":12,"damage":82},{"distance":24,"damage":57},{"distance":"infinite","damage":52}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:m2038_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 82;
    json.bullet.extra_damage.armor_ignore = 0.3;
    json.bullet.extra_damage.head_shot_multiplier = 1.33;
    json.bullet.extra_damage.damage_adjust = [{"distance":12,"damage":82},{"distance":28,"damage":49},{"distance":"infinite","damage":43}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:m2038_the_headsman_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 84;
    json.bullet.extra_damage.armor_ignore = 0.5;
    json.bullet.extra_damage.head_shot_multiplier = 2.33;
    json.bullet.extra_damage.damage_adjust = [{"distance":12,"damage":84},{"distance":52,"damage":48},{"distance":"infinite","damage":44}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:mantis_blade_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:melee';
    json.bullet.damage = 48;
    json.bullet.extra_damage.armor_ignore = 0;
    json.bullet.extra_damage.head_shot_multiplier = 1;
    json.bullet.extra_damage.damage_adjust = [{"distance":5,"damage":48},{"distance":"infinite","damage":0}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:mantis_blade_maxtac_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:melee';
    json.bullet.damage = 58;
    json.bullet.extra_damage.armor_ignore = 0;
    json.bullet.extra_damage.head_shot_multiplier = 1;
    json.bullet.extra_damage.damage_adjust = [{"distance":5.5,"damage":58},{"distance":"infinite","damage":0}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:saratoga_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 15.5;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 3.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":24,"damage":15.5},{"distance":48,"damage":13.5},{"distance":"infinite","damage":12}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:saratoga_fenrir_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 16.5;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":24,"damage":16.5},{"distance":48,"damage":14},{"distance":"infinite","damage":12}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:saratoga_problem_solver_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 17;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 3.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":24,"damage":17},{"distance":48,"damage":15},{"distance":"infinite","damage":14}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:unity_cheetah_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 13;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":13},{"distance":72,"damage":12},{"distance":"infinite","damage":10.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:unity_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 11;
    json.bullet.extra_damage.armor_ignore = 0.1;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":11},{"distance":72,"damage":10},{"distance":"infinite","damage":9}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:unity_her_majesty_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 13;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":13},{"distance":72,"damage":12},{"distance":"infinite","damage":10}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:yukimura_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol_smart';
    json.bullet.damage = 9;
    json.bullet.extra_damage.armor_ignore = 0.10;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":9},{"distance":90,"damage":8},{"distance":"infinite","damage":7}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:yukimura_genjiroh_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol_smart';
    json.bullet.damage = 11;
    json.bullet.extra_damage.armor_ignore = 0.1;
    json.bullet.extra_damage.head_shot_multiplier = 2.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":72,"damage":11},{"distance":96,"damage":10},{"distance":"infinite","damage":8}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:yukimura_skippy_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol_smart';
    json.bullet.damage = 10.5;
    json.bullet.extra_damage.armor_ignore = 0.1;
    json.bullet.extra_damage.head_shot_multiplier = 2.25;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":10.5},{"distance":90,"damage":8.5},{"distance":"infinite","damage":7.5}];
    return event.setJson(JSON.stringify(json));
}

})