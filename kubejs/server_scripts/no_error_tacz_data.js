TaCZServerEvents.gunDataLoad((event) => {
    const id = event.getId().toString();

    if (id === "immersive_armorer:double_shotgun_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_buckshot';
    json.bullet.damage = 54;
    json.bullet.extra_damage.armor_ignore = 0.2;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":10,"damage":54},{"distance":20,"damage":52},{"distance":30,"damage":34},{"distance":"infinite","damage":26}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:b93r_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 7.5;
    json.bullet.extra_damage.armor_ignore = 0.05;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":7.5},{"distance":35,"damage":6},{"distance":"infinite","damage":5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "create_armorer:rifle_assult_roller_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 33.5;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":35,"damage":43.5},{"distance":80,"damage":21},{"distance":"infinite","damage":18}];
    return event.setJson(JSON.stringify(json));
}


if (id === "tacz:spr15hb_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 42;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":42},{"distance":120,"damage":32.5},{"distance":"infinite","damage":20.5}];
    return event.setJson(JSON.stringify(json));
}


if (id === "create_armorer:sniper_semi_m1_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_sniper';
    json.bullet.damage = 44;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 3;
    json.bullet.extra_damage.damage_adjust = [{"distance":25,"damage":44},{"distance":50,"damage":43},{"distance":"infinite","damage":42}];
    return event.setJson(JSON.stringify(json));
}   

if (id === "immersive_armorer:short_smg_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 12.5;
    json.bullet.extra_damage.armor_ignore = 0.2;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":10,"damage":12.5},{"distance":20,"damage":8.5},{"distance":30,"damage":4.5},{"distance":"infinite","damage":3}];
    return event.setJson(JSON.stringify(json));
}

if (id === "immersive_armorer:dual_barrel_cannon_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'immersive_armorer:20mm';
    json.bullet.damage = 85;
    json.bullet.extra_damage.armor_ignore = 0.45;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":10,"damage":85.5},{"distance":20,"damage":82.5},{"distance":30,"damage":81.5},{"distance":"infinite","damage":80}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:timeless50_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 27;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":15,"damage":27},{"distance":30,"damage":22},{"distance":50,"damage":20},{"distance":"infinite","damage":18}];
    return event.setJson(JSON.stringify(json));
}

if (id === "immersive_armorer:plasma_gun_data") {
    const json = JSON.parse(event.getStdJson());
    json.bullet.damage = 195;
        json.bullet.explosion = {
        explode: true,
        damage: 75,
        radius: 2,
        knockback: true,
        destroy_block: true,
        delay: 30
    };
    json.bullet.extra_damage.armor_ignore = 1;
    json.bullet.extra_damage.head_shot_multiplier = 1.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":5,"damage":195.5},{"distance":10,"damage":175.5},{"distance":12,"damage":68.5},{"distance":30,"damage":64.5},{"distance":"infinite","damage":60}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:g36k_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 28.5;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":30,"damage":28.5},{"distance":60,"damage":26},{"distance":"infinite","damage":24}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:springfield1873_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'qkl:16mm';
    json.bullet.damage = 54;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.95;
    json.bullet.extra_damage.damage_adjust = [{"distance":60,"damage":54},{"distance":90,"damage":50},{"distance":120,"damage":44},{"distance":"infinite","damage":40}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:minigun_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 12.7;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 1.27;
    json.bullet.extra_damage.damage_adjust = [{"distance":30,"damage":12.7},{"distance":55,"damage":13},{"distance":"infinite","damage":11.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "tacz:ak47_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_rifle';
    json.bullet.damage = 31;
    json.bullet.extra_damage.armor_ignore = 0.15;
    json.bullet.extra_damage.head_shot_multiplier = 2.5;
    json.bullet.extra_damage.damage_adjust = [{"distance":25,"damage":31},{"distance":55,"damage":27},{"distance":"infinite","damage":24.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:overture_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 19;
    json.bullet.extra_damage.armor_ignore = 0.1;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":19},{"distance":72,"damage":18},{"distance":50,"damage":16.5},{"distance":"infinite","damage":16.5}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:overture_amnesty_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 35;
    json.bullet.extra_damage.armor_ignore = 0.20;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":35},{"distance":72,"damage":32},{"distance":50,"damage":30},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:overture_reliable_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 35;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":35},{"distance":72,"damage":32},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}


if (id === "cyber_armorer:overture_crash_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 37;
    json.bullet.extra_damage.armor_ignore = 0.25;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":37},{"distance":72,"damage":32},{"distance":50,"damage":30},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:overture_archangel_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 37.5;
    json.bullet.extra_damage.armor_ignore = 0.2;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":37.5},{"distance":72,"damage":32},{"distance":50,"damage":30},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}

if (id === "cyber_armorer:overture_rosco_data") {
    const json = JSON.parse(event.getStdJson());
    json.ammo = 'cyber_armorer:bullet_pistol';
    json.bullet.damage = 39.5;
    json.bullet.extra_damage.armor_ignore = 0.2;
    json.bullet.extra_damage.head_shot_multiplier = 3.75;
    json.bullet.extra_damage.damage_adjust = [{"distance":36,"damage":39.5},{"distance":72,"damage":32},{"distance":50,"damage":30},{"distance":"infinite","damage":30}];
    return event.setJson(JSON.stringify(json));
}

})