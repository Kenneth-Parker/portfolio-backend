--db:seed

\c resources;

-- Insert resources data
INSERT INTO resources (name, brand, type, size, is_used, is_available, condition_rating, image_url, location_id) VALUES
('Winter Wonderland Coat', 'FashionElite', 'Winter Coat', 'Medium', true, true, 4, 'https://pngimg.com/d/coat_PNG3.png', 1),
('Cozy Comfort Jacket', 'SnugStyles', 'Jacket', 'Large', true, true, 4, 'https://pngimg.com/d/coat_PNG59.png', 2),
('Stylish Trench Coat', 'ChicTrends', 'Trench Coat', 'Small', false, true, 3, 'https://pngimg.com/d/coat_PNG28.png', 3),
('Classic Wool Peacoat', 'TimelessFashion', 'Peacoat', 'Medium', false, true, 4, 'https://www.pngall.com/wp-content/uploads/1/Coat-Transparent-Background.png', 1),
('Sporty Parka', 'OutdoorStyle', 'Parka', 'Large', true, true, 3, 'https://freepngimg.com/thumb/jacket/1-2-jacket-png-clipart.png', 2),
('Elegant Evening Coat', 'GlamourCouture', 'Evening Coat', 'Medium', false, true, 4, 'https://pngimg.com/d/coat_PNG11.png', 3),
('Casual Denim Jacket', 'EverydayDenim', 'Denim Jacket', 'Small', false, true, 2, 'https://assets.stickpng.com/images/585680404f6ae202fedf26f0.png', 1),
('Adventurous Explorer Jacket', 'AdventureGear', 'Explorer Jacket', 'Large', true, true, 3, 'https://e7.pngegg.com/pngimages/807/1021/png-clipart-leather-jacket-flight-jacket-fashion-jacket-zipper-textile.png', 2),
('Chic Leather Moto Jacket', 'UrbanStyle', 'Leather Jacket', 'Medium', false, true, 5, 'https://w7.pngwing.com/pngs/578/800/png-transparent-leather-jacket-sleeve-jacket-textile-leather-black-thumbnail.png', 3);

-- Insert locations data
INSERT INTO locations (location_name, city, state, zip_code) VALUES
('Location 1', 'New York', 'NY', '10038'),
('Location 2', 'Bronx', 'NY', '10467'),
('Location 3', 'Brooklyn', 'NY', '11224');
