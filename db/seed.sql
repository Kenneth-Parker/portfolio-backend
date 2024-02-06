--db:seed

\c coats;


INSERT INTO locations (location_name, city, state, zip_code) VALUES
('Location 1', 'New York', 'NY', '10038'),
('Location 2', 'Bronx', 'NY', '10467'),
('Location 3', 'Brooklyn', 'NY', '11224');

INSERT INTO coats (name, brand, type, size, is_used, is_available, condition_rating, image_url, location_id) VALUES
('Winter Wonderland Coat', 'FashionElite', 'Winter Coat', 'Medium', true, true, 4, 'https://pngimg.com/d/coat_PNG3.png', 1),
('Cozy Comfort Jacket', 'SnugStyles', 'Jacket', 'Large', true, true, 4, 'https://pngimg.com/d/coat_PNG59.png', 2),
('Stylish Trench Coat', 'ChicTrends', 'Trench Coat', 'Small', false, true, 3, 'https://pngimg.com/d/coat_PNG28.png', 3),
('Classic Wool Peacoat', 'TimelessFashion', 'Peacoat', 'Medium', false, true, 4, 'https://www.pngall.com/wp-content/uploads/1/Coat-Transparent-Background.png', 1),
('Sporty Parka', 'OutdoorStyle', 'Parka', 'Large', true, true, 3, 'https://freepngimg.com/thumb/jacket/1-2-jacket-png-clipart.png', 2),
('Elegant Evening Coat', 'GlamourCouture', 'Evening Coat', 'Medium', false, true, 4, 'https://pngimg.com/d/coat_PNG11.png', 3),
('Casual Denim Jacket', 'EverydayDenim', 'Denim Jacket', 'Small', false, true, 2, 'https://static.wixstatic.com/media/741b96_607f2fe65e5c4b39bb2532a6a8723a7f~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/741b96_607f2fe65e5c4b39bb2532a6a8723a7f~mv2.png', 1),
('Adventurous Explorer Jacket', 'AdventureGear', 'Explorer Jacket', 'Large', true, true, 3, 'https://e7.pngegg.com/pngimages/807/1021/png-clipart-leather-jacket-flight-jacket-fashion-jacket-zipper-textile.png', 2),
('Chic Leather Moto Jacket', 'UrbanStyle', 'Leather Jacket', 'Medium', false, true, 5, 'https://w7.pngwing.com/pngs/578/800/png-transparent-leather-jacket-sleeve-jacket-textile-leather-black-thumbnail.png', 3),
('NEW 22 Wonderland Coat', 'NEW 22', 'NEW 22 Coat', 'NEW 22', true, true, 5, 'https://w7.pngwing.com/pngs/578/800/png-transparent-leather-jacket-sleeve-jacket-textile-leather-black-thumbnail.png', 3),
('NEW 22 Wonderland Coat', 'NEW 22', 'NEW 22 Coat', 'NEW 22', true, true, 5, 'https://pngimg.com/d/coat_PNG4.png', 3),
('All American', 'The North Face', 'Bubble', 'Lrg', true, true, 3, 'https://s7d1.scene7.com/is/image/TheNorthFaceBrand/cmyk_lp_02_novelty_mnt_jacket?$transparent-png$&wid=600', 2),
('All American lil', 'The North Face', 'Bubble', 'Medium', false, true, 5, 'https://s7d1.scene7.com/is/image/TheNorthFaceBrand/cmyk_lp_01_nuptse_jacket?$transparent-png$&wid=600', 3);



-- INSERT INTO coats (name, brand, type, size, is_used, is_available, condition_rating, image_url, location_id) VALUES
-- ('Winter Wonderland Coat', 'FashionElite', 'Winter Coat', 'Medium', true, true, 4, 'https://pngimg.com/d/coat_PNG3.png', 1),
-- ('Cozy Comfort Jacket', 'SnugStyles', 'Jacket', 'Large', true, true, 4, 'https://pngimg.com/d/coat_PNG59.png', 2),
-- ('Stylish Trench Coat', 'ChicTrends', 'Trench Coat', 'Small', false, true, 3, 'https://pngimg.com/d/coat_PNG28.png', 3),
-- ('Classic Wool Peacoat', 'TimelessFashion', 'Peacoat', 'Medium', false, true, 4, 'https://www.pngall.com/wp-content/uploads/1/Coat-Transparent-Background.png', 1),
-- ('Sporty Parka', 'OutdoorStyle', 'Parka', 'Large', true, true, 3, 'https://freepngimg.com/thumb/jacket/1-2-jacket-png-clipart.png', 2),
-- ('Elegant Evening Coat', 'GlamourCouture', 'Evening Coat', 'Medium', false, true, 4, 'https://pngimg.com/d/coat_PNG11.png', 3),
-- ('Casual Denim Jacket', 'EverydayDenim', 'Denim Jacket', 'Small', false, true, 2, 'https://static.wixstatic.com/media/741b96_607f2fe65e5c4b39bb2532a6a8723a7f~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/741b96_607f2fe65e5c4b39bb2532a6a8723a7f~mv2.png', 1),
-- ('Adventurous Explorer Jacket', 'AdventureGear', 'Explorer Jacket', 'Large', true, true, 3, 'https://e7.pngegg.com/pngimages/807/1021/png-clipart-leather-jacket-flight-jacket-fashion-jacket-zipper-textile.png', 2),
-- ('Chic Leather Moto Jacket', 'UrbanStyle', 'Leather Jacket', 'Medium', false, true, 5, 'https://w7.pngwing.com/pngs/578/800/png-transparent-leather-jacket-sleeve-jacket-textile-leather-black-thumbnail.png', 3)
-- ('NEW 22 Wonderland Coat', 'NEW 22', 'NEW 22 Coat', 'NEW 22', true, true, 5, 'https://w7.pngwing.com/pngs/578/800/png-transparent-leather-jacket-sleeve-jacket-textile-leather-black-thumbnail.png', 3),
-- ('NEW 22 Wonderland Coat', 'NEW 22', 'NEW 22 Coat', 'NEW 22', true, true, 5, 'https://pngimg.com/d/coat_PNG4.png', 3),
-- ('All American', 'The North Face', 'Bubble', 'Lrg', true, true, 3, 'https://s7d1.scene7.com/is/image/TheNorthFaceBrand/cmyk_lp_02_novelty_mnt_jacket?$transparent-png$&wid=600', 2),
-- ('All American lil', 'The North Face', 'Bubble', 'Medium', false, true, 5, 'https://s7d1.scene7.com/is/image/TheNorthFaceBrand/cmyk_lp_01_nuptse_jacket?$transparent-png$&wid=600', 3);


