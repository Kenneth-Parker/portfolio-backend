--db:seed

\c resources;

-- Insert resources data
INSERT INTO resources (name, brand, type, size, is_used, condition_rating, image_url, location_id) VALUES
('Winter Wonderland Coat', 'FashionElite', 'Winter Coat', 'Medium', true, 4, 'https://example.com/winter-coat-image1.png', 1),
('Cozy Comfort Jacket', 'SnugStyles', 'Jacket', 'Large', true, 4, 'https://example.com/jacket-image1.png', 2),
('Stylish Trench Coat', 'ChicTrends', 'Trench Coat', 'Small', false, 3, 'https://example.com/trench-coat-image1.png', 3),
('Classic Wool Peacoat', 'TimelessFashion', 'Peacoat', 'Medium', false, 4, 'https://example.com/peacoat-image1.png', 1),
('Sporty Parka', 'OutdoorStyle', 'Parka', 'Large', true, 3, 'https://example.com/parka-image1.png', 2),
('Elegant Evening Coat', 'GlamourCouture', 'Evening Coat', 'Medium', false, 4, 'https://example.com/evening-coat-image1.png', 3),
('Casual Denim Jacket', 'EverydayDenim', 'Denim Jacket', 'Small', false, 2, 'https://example.com/denim-jacket-image1.png', 1),
('Adventurous Explorer Jacket', 'AdventureGear', 'Explorer Jacket', 'Large', true, 3, 'https://example.com/explorer-jacket-image1.png', 2),
('Chic Leather Moto Jacket', 'UrbanStyle', 'Leather Jacket', 'Medium', false, 5, 'https://example.com/leather-jacket-image1.png', 3);

-- Insert locations data
INSERT INTO locations (location_name, city, state, zip_code) VALUES
('Location 1', 'New York', 'NY', '10038'),
('Location 2', 'Bronx', 'NY', '10467'),
('Location 3', 'Brooklyn', 'NY', '11224');
