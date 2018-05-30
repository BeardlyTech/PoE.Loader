const cargoTables = [
    {id: 0, cargo_table: 'amulets', cargo_table_title: 'Amulets'},
    {id: 1, cargo_table: 'areas', cargo_table_title: 'Areas'},
    {id: 2, cargo_table: 'armours', cargo_table_title: 'Armours'},
    {id: 3, cargo_table: 'ascendancy_classes', cargo_table_title: 'Ascendancy Classes'},
    {id: 4, cargo_table: 'bestiary_components', cargo_table_title: 'Bestiary Components'},
    {id: 5, cargo_table: 'bestiary_recipe_components', cargo_table_title: 'Bestiary Recipe Components'},
    {id: 6, cargo_table: 'bestiary_recipes', cargo_table_title: 'Bestiary Recipes'},
    {id: 7, cargo_table: 'character_classes', cargo_table_title: 'Character Classes'},
    {id: 8, cargo_table: 'divination_cards', cargo_table_title: 'Divination Cards'},
    {id: 9, cargo_table: 'essences', cargo_table_title: 'Essences'},
    {id: 10, cargo_table: 'events', cargo_table_title: 'Events'},
    {id: 11, cargo_table: 'flasks', cargo_table_title: 'Flasks'},
    {id: 12, cargo_table: 'generation_weights', cargo_table_title: 'Generation Weights'},
    {id: 13, cargo_table: 'generic_stats', cargo_table_title: 'Generic Stats'},
    {id: 14, cargo_table: 'hideout_doodads', cargo_table_title: 'Hideout Doodads'},
    {id: 15, cargo_table: 'incursion_rooms', cargo_table_title: 'Incursion Rooms'},
    {id: 16, cargo_table: 'item_buffs', cargo_table_title: 'Item Buffs'},
    {id: 17, cargo_table: 'item_purchase_costs', cargo_table_title: 'Item Purchase Costs'},
    {id: 18, cargo_table: 'item_sell_prices', cargo_table_title: 'Item Sell Prices'},
    {id: 19, cargo_table: 'item_stats', cargo_table_title: 'Item Stats'},
    {id: 20, cargo_table: 'items', cargo_table_title: 'Items'},
    {id: 21, cargo_table: 'jewels', cargo_table_title: 'Jewels'},
    {id: 22, cargo_table: 'maps', cargo_table_title: 'Maps'},
    {id: 23, cargo_table: 'mod_sell_prices', cargo_table_title: 'Mod Sell Prices'},
    {id: 24, cargo_table: 'mod_stats', cargo_table_title: 'Mod Stats'},
    {id: 25, cargo_table: 'mods', cargo_table_title: 'Mods'},
    {id: 26, cargo_table: 'monster_resistances', cargo_table_title: 'Monster Resistances'},
    {id: 27, cargo_table: 'passive_skill_stats', cargo_table_title: 'Passive Skill Stats'},
    {id: 28, cargo_table: 'passive_skills', cargo_table_title: 'Passive Skills'},
    {id: 29, cargo_table: 'prophecies', cargo_table_title: 'Prophecies'},
    {id: 30, cargo_table: 'quest_rewards', cargo_table_title: 'Quest Rewards'},
    {id: 31, cargo_table: 'shields', cargo_table_title: 'Shields'},
    {id: 32, cargo_table: 'skill', cargo_table_title: 'Skill'},
    {id: 33, cargo_table: 'skill_gems', cargo_table_title: 'Skill Gems'},
    {id: 34, cargo_table: 'skill_levels', cargo_table_title: 'Skill Levels'},
    {id: 35, cargo_table: 'skill_stats_per_level', cargo_table_title: 'Skill Stats Per Level'},
    {id: 36, cargo_table: 'spawn_weights', cargo_table_title: 'Spawn Weights'},
    {id: 37, cargo_table: 'stackables', cargo_table_title: 'Stackables'},
    {id: 38, cargo_table: 'upgraded_from_groups', cargo_table_title: 'Upgraded From Groups'},
    {id: 39, cargo_table: 'upgraded_from_sets', cargo_table_title: 'Upgraded From Sets'},
    {id: 40, cargo_table: 'vendor_rewards', cargo_table_title: 'Vendor Rewards'},
    {id: 41, cargo_table: 'versions', cargo_table_title: 'Versions'},
    {id: 42, cargo_table: 'weapons', cargo_table_title: 'Weapons'},
]

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tblCargoTables').del()
    .then(function () {
      // Inserts seed entries
      return knex('tblCargoTables').insert(cargoTables);
    });
};
