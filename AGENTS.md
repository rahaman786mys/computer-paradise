# Project Info
Stack: Vanilla HTML/CSS/JS
Pages: index.html, about.html, buy.html, sell.html, contact.html
Shared files: script.js, styles.css
Data: localStorage (cp_laptops_data, cp_cart, cp_user, cp_laptop_images, cp_deleted_laptops, cp_orders, cp_coupons, cp_wishlist, cp_repairs)
Admin: double-click logo, Google auth (primary) or password Mysore@123 (fallback)
- Google Client ID & admin emails configured in script.js (GOOGLE_CLIENT_ID, ADMIN_EMAILS)
- If no Google Client ID set, falls back to password prompt

## Admin Panel
- Tabs: All, My Listings, Add New, Deleted, Inventory, Sales, Customers, Repairs
- switchAdminTab index: list=0, mylistings=1, add=2, deleted=3, inventory=4, sales=5, customers=6, repairs=7
- Inventory dashboard with profit/margin color coding (green>=30%, orange>=15%, red<15%)
- Sales dashboard with bar chart (14 days), summary cards, export CSV
- Customers page with purchase history, invoice modal
- Repairs tracking with status workflow (pending→in-progress→completed→delivered)
- Form fields: afBrand, afName, afScreen, afGen, afProcessor, afRam, afStorage, afMrp, afPrice, afPurchasePrice, afUnits, afOs, afDeviceType, afCondition, afBadge, afSpecialSpec, afFeatured, afPriority, afPhotos
- Bulk CSV import (columns: brand,name,processor,ram,storage,mrp,price,purchasePrice,units,os,deviceType,condition)

## Features
- QR codes (CP######) via qrserver API, scan redirect to buy.html with Windows overlay
- Compare (2-3 laptops side-by-side table)
- Wishlist (heart icon ♥/♡ persisted in cp_wishlist)
- WhatsApp checkout with full pricing breakdown
- Invoice/receipt modal with print
- Featured star toggle with priority ordering
- Deleted laptop archive with relist option
- Export inventory & sales to CSV
- Wire/boot animation on card hover (disabled in admin overlay)
- Billing: walk-in/direct sale recording with auto WhatsApp + SMS to buyer, stock deduction
