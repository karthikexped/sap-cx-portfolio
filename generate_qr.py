import qrcode

# The URL of your portfolio. 
# Change this to your live URL (e.g., GitHub Pages or Vercel) once deployed.
portfolio_url = "http://localhost:5173" 

qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=10,
    border=4,
)
qr.add_data(portfolio_url)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")
img.save("portfolio_qr.png")

print(f"QR code generated for {portfolio_url} and saved as portfolio_qr.png")
