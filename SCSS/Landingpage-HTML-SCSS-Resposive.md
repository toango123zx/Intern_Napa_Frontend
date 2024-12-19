#Challenge: Responsive website
- Participants must ensure the layout is built accurately with respect to spacing, size, colors, fonts, and effects, matching the design in Figma

##Application Pages (The order in which the pages will be done)
- Home page

####Technologies Used
- HTML
- SCSS (Variables, Mixins, Nesting, @extend)
- BEM structured naming method


#####Link Design
- https://s.net.vemn/dR9h

Structute project
project/
│
├── index.html         # File HTML chính
├── scss/              # Thư mục SCSS
│   ├── base/          # SCSS cơ bản (reset, typography, variables, mixins)
│   │   ├── _reset.scss
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── _typography.scss
│   │
│   ├── layout/        # Định nghĩa layout chính (header, footer, grid, container)
│   │   ├── _header.scss
│   │   ├── _footer.scss
│   │   ├── _grid.scss
│   │   ├── _container.scss
│   │
│   └── main.scss      # File SCSS tổng hợp, dùng để import tất cả các file trên
│
├── css/               # Thư mục CSS biên dịch (output của SCSS)
│   └── main.css       # File CSS đã biên dịch
│
├── assets/            # Tài nguyên dự án
│   ├── images/        # Hình ảnh
│   ├── fonts/         # Font chữ
│   └── icons/         # Icon SVG hoặc PNG
└──