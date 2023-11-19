--db:seed 

\c resources;

INSERT INTO resources (name, brand, type, size, is_used, condition_rating, image_url) VALUES
('Winter Wonderland Coat', 'FashionElite', 'Winter Coat', 'Medium', true, 4, 'https://example.com/winter-coat-image1.png'),
('Cozy Comfort Jacket', 'SnugStyles', 'Jacket', 'Large', true, 4, 'https://example.com/jacket-image1.png'),
('Stylish Trench Coat', 'ChicTrends', 'Trench Coat', 'Small', false, 3, 'https://example.com/trench-coat-image1.png'),
('Classic Wool Peacoat', 'TimelessFashion', 'Peacoat', 'Medium', false, 4, 'https://example.com/peacoat-image1.png'),
('Sporty Parka', 'OutdoorStyle', 'Parka', 'Large', true, 3, 'https://example.com/parka-image1.png'),
('Elegant Evening Coat', 'GlamourCouture', 'Evening Coat', 'Medium', false, 4, 'https://example.com/evening-coat-image1.png'),
('Casual Denim Jacket', 'EverydayDenim', 'Denim Jacket', 'Small', false, 2, 'https://example.com/denim-jacket-image1.png'),
('Adventurous Explorer Jacket', 'AdventureGear', 'Explorer Jacket', 'Large', true, 3, 'https://example.com/explorer-jacket-image1.png'),
('Chic Leather Moto Jacket', 'UrbanStyle', 'Leather Jacket', 'Medium', false, 5, 'https://example.com/leather-jacket-image1.png');
