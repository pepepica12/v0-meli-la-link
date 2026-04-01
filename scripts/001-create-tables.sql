-- Create click analytics table
CREATE TABLE IF NOT EXISTS link_clicks (
  id SERIAL PRIMARY KEY,
  link_id VARCHAR(100) NOT NULL,
  link_name VARCHAR(255) NOT NULL,
  clicked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_agent TEXT,
  referrer TEXT
);

-- Create wishlist items table
CREATE TABLE IF NOT EXISTS wishlist_items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  image_url TEXT,
  meli_url TEXT,
  priority INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample wishlist items
INSERT INTO wishlist_items (title, description, price, image_url, meli_url, priority) VALUES
('PlayStation 5', 'Consola de videojuegos de ultima generacion', 12999.00, 'https://http2.mlstatic.com/D_NQ_NP_773243-MLA49127512702_022022-O.webp', 'https://meli.la/2WHXTw6', 1),
('AirPods Pro 2', 'Audifonos inalambricos con cancelacion de ruido', 4999.00, 'https://http2.mlstatic.com/D_NQ_NP_660902-MLA74070246148_012024-O.webp', 'https://meli.la/2WHXTw6', 2),
('Nintendo Switch OLED', 'Consola portatil con pantalla OLED', 7499.00, 'https://http2.mlstatic.com/D_NQ_NP_909379-MLM52310798593_112022-O.webp', 'https://meli.la/2WHXTw6', 3),
('Kindle Paperwhite', 'Lector de libros electronicos', 2899.00, 'https://http2.mlstatic.com/D_NQ_NP_774004-MLU74010019329_012024-O.webp', 'https://meli.la/2WHXTw6', 4),
('Mochila para Laptop', 'Mochila resistente al agua para laptop 15 pulgadas', 899.00, 'https://http2.mlstatic.com/D_NQ_NP_607450-MLM53652970605_022023-O.webp', 'https://meli.la/2WHXTw6', 5);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_link_clicks_link_id ON link_clicks(link_id);
CREATE INDEX IF NOT EXISTS idx_link_clicks_clicked_at ON link_clicks(clicked_at);
CREATE INDEX IF NOT EXISTS idx_wishlist_priority ON wishlist_items(priority);
