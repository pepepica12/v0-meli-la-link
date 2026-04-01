-- Seed initial wishlist items
INSERT INTO wishlist_items (title, description, price, image_url, product_url, priority)
VALUES 
  ('Audifonos Inalambricos Gaming', 'Audifonos con sonido envolvente 7.1 y microfono para gaming', 1299.00, 'https://http2.mlstatic.com/D_NQ_NP_2X_911398-MLM51559383638_092022-F.webp', 'https://meli.la/2WHXTw6', 1),
  ('Teclado Mecanico RGB', 'Teclado gaming con switches mecanicos y retroiluminacion RGB personalizable', 899.00, 'https://http2.mlstatic.com/D_NQ_NP_2X_783902-MLM48659965498_122021-F.webp', 'https://meli.la/2WHXTw6', 2),
  ('Webcam Full HD 1080p', 'Camara web con microfono integrado perfecta para streaming y videollamadas', 649.00, 'https://http2.mlstatic.com/D_NQ_NP_2X_677652-MLM49472713795_032022-F.webp', 'https://meli.la/2WHXTw6', 3),
  ('Mouse Gaming Ergonomico', 'Mouse con sensor de alta precision 16000 DPI y luces RGB', 499.00, 'https://http2.mlstatic.com/D_NQ_NP_2X_770282-MLM50870199382_072022-F.webp', 'https://meli.la/2WHXTw6', 4)
ON CONFLICT DO NOTHING;
