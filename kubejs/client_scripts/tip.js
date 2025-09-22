
const vehicles
  = [
    "nato_vehicle_voucher_iii",
    "nato_vehicle_voucher_iv",
    "nato_vehicle_voucher_v",
    "nato_vehicle_voucher_vi",
    "nato_vehicle_voucher_vii",
    "nato_vehicle_voucher_viii",
    "nato_vehicle_voucher_ix",
    "nato_vehicle_voucher_x",
    "nato_vehicle_voucher_xi",
    "cis_vehicle_voucher_iv",
    "cis_vehicle_voucher_v",
    "cis_vehicle_voucher_vi",
    "cis_vehicle_voucher_vii",
    "cis_vehicle_voucher_viii"
  ];


ItemEvents.tooltip(event => {

  vehicles.forEach(vehicle => {
    event.add([`fallout:${vehicle}`], "§b内含加密数据的u盘，可用与兑换载具")
  });
  event.add(['fallout:un_full_bounce'], "§b右键以清空战术背心，获得内部的武器与弹药")
  event.add(['fallout:un_armor_bounce'], "§b你接受的训练使你穿戴胸挂后持枪能对敌人开枪射击造成的增加15%。")
  event.add(['fallout:military_armor_bounce'], "§b久经沙场使你穿戴胸挂后持枪能对敌人开枪射击造成的伤害增加25%。")
  event.add(['fallout:heavy_armor_bounce'], "§b多次出生入死的经历使你穿戴胸挂后持枪能对敌人开枪射击造成的增加35%。")

  event.add(['fallout:radioactive_warding_bag'], "§b一种特殊防辐射布料制成的橙色密封袋，内部装有安全放射源。能释放令昆虫恐惧逃散的辐射波，但对人体完全无害。请勿拆解内部放射源。")

  event.add(['fallout:parasitic_skin'], "§5它看起来跟普通的§c画皮§5不一样，它仍然能§c说话§5并且§c保有理智§5 ")

  event.add(['fallout:forbidden_fruit'], "§4由鲜血血、金苹果与幽匿果汁在世界之底淬炼而成的完美结晶")
  event.add(['fallout:forbidden_fruit'], "§5经过古代机关净化的它，赐予你永恒的生命力而不再有副作用")
  event.add(['fallout:forbidden_fruit'], "§d现在，你已真正君临天下")

  event.add(['fallout:champion_destruction'], "§5暴烈的能量在血脉中奔涌，赋予你摧枯拉朽的破坏力")
  event.add(['fallout:champion_destruction'], "§5但这股力量也在灼烧你的躯体，削弱你的防御")

  event.add(['fallout:champion_haste'], "§5世界在你眼中变得缓慢，每一步都跨越惊人的距离")
  event.add(['fallout:champion_haste'], "§5但要当心，过快的速度可能让你付出沉重代价")

  event.add(['fallout:champion_suppression'], "§5你的肉体开始拒绝一切外界干涉，连最基本的生理需求都被抑制——不再需要饮水，不再畏惧寒暑。")
  event.add(['fallout:champion_suppression'], "§5但这份保护是残酷的等价交换：所有伤害降低50%，如同被无形的枷锁束缚。")

  event.add(['fallout:champion_vitality'], "§5你的血肉获得了近乎永动的活性，伤口转瞬愈合，生命力澎湃不息")
  event.add(['fallout:champion_vitality'], "§5但这狂暴的新陈代谢让你时刻饱受饥渴折磨，护甲在血肉蠕动下化为齑粉")
  event.add(['fallout:champion_vitality'], "§8（你能感受到每个细胞都在疯狂分裂重组）")

  event.add(['fallout:champion_domination'], "§5力量、速度、回复以及防御，异种力量的结晶在此刻结合。")
  event.add(['fallout:champion_domination'], "§5猎杀了如此多强大怪物的你，拥有了控制它们力量的权利。")
  event.add(['fallout:champion_domination'], "§5可惜，这终究是来自怪物的力量……")
})
