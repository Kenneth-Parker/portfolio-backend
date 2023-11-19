--db:seed 

\c resources;

INSERT INTO resources (name, brand, type, price, is_favorite, rating, image_url) VALUES
('Winter Wonderland Coat', 'FashionElite', 'Winter Coat', 129.99, true, 4, 'https://example.com/winter-coat-image1.png'),
('Cozy Comfort Jacket', 'SnugStyles', 'Jacket', 79.99, true, 4, 'https://example.com/jacket-image1.png'),
('Stylish Trench Coat', 'ChicTrends', 'Trench Coat', 149.99, false, 3, 'https://example.com/trench-coat-image1.png'),
('Classic Wool Peacoat', 'TimelessFashion', 'Peacoat', 119.99, false, 4, 'https://example.com/peacoat-image1.png'),
('Sporty Parka', 'OutdoorStyle', 'Parka', 89.99, true, 3, 'https://example.com/parka-image1.png'),
('Elegant Evening Coat', 'GlamourCouture', 'Evening Coat', 199.99, false, 4, 'https://example.com/evening-coat-image1.png'),
('Casual Denim Jacket', 'EverydayDenim', 'Denim Jacket', 69.99, false, 2, 'https://example.com/denim-jacket-image1.png'),
('Adventurous Explorer Jacket', 'AdventureGear', 'Explorer Jacket', 109.99, true, 3, 'https://example.com/explorer-jacket-image1.png'),
('Chic Leather Moto Jacket', 'UrbanStyle', 'Leather Jacket', 139.99, false, 5,  'https://example.com/leather-jacket-image1.png');
