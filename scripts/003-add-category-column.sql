-- Add category column to wishlist_items if it doesn't exist
ALTER TABLE wishlist_items ADD COLUMN IF NOT EXISTS category VARCHAR(100);

-- Rename meli_url to product_url if meli_url exists
DO $$ 
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'wishlist_items' AND column_name = 'meli_url') THEN
    ALTER TABLE wishlist_items RENAME COLUMN meli_url TO product_url;
  END IF;
END $$;

-- Add product_url if it doesn't exist
ALTER TABLE wishlist_items ADD COLUMN IF NOT EXISTS product_url TEXT;

-- Add link_url column to link_clicks if it doesn't exist
ALTER TABLE link_clicks ADD COLUMN IF NOT EXISTS link_url TEXT;
