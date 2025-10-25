"use client";

import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Link,
  Chip,
} from "@nextui-org/react";

export default function CV() {
  return (
    <main className="flex flex-col items-center min-h-screen p-6 bg-gray-100">
      <Card className="max-w-4xl w-full shadow-lg p-6">
        <CardHeader className="flex flex-col items-center text-center">
          <h1 className="text-4xl font-bold text-primary mb-2">
            Hồ Hoàng Phúc
          </h1>
          <div className="text-sm text-gray-600 flex flex-wrap gap-2 justify-center">
            <Link href="mailto:hohoangphucjob@gmail.com" color="primary">
              hohoangphucjob@gmail.com
            </Link>
            |
            <Link href="tel:0327434821" color="primary">
              0327434821
            </Link>
            |
            <Link
              href="https://linkedin.com/in/your-linkedin"
              color="primary"
              target="_blank"
            >
              LinkedIn
            </Link>
            |
            <Link
              href="https://github.com/Minurte1"
              color="primary"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </CardHeader>

        <Divider className="my-4" />

        {/* Mục tiêu nghề nghiệp */}
        <CardBody>
          <h2 className="text-xl font-semibold text-primary mb-2">
            🎯 Mục tiêu nghề nghiệp
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Trong 1–2 năm tới, tôi hướng đến trở thành một Full-Stack Developer
            toàn diện, chuyên sâu về React.js, Next.js (frontend) và Node.js,
            Express.js, MySQL (backend). Mục tiêu là phát triển các ứng dụng web
            quy mô lớn, tối ưu hóa hiệu suất, bảo mật và kiến trúc hệ thống,
            đồng thời đóng góp vào các dự án công nghệ sáng tạo.
          </p>
        </CardBody>

        <Divider className="my-4" />

        {/* Học vấn */}
        <CardBody>
          <h2 className="text-xl font-semibold text-primary mb-2">
            🎓 Học vấn
          </h2>
          <p>
            <strong>Cử nhân Công nghệ Thông tin</strong> <br />
            Trường Đại học Trà Vinh | 2021 – 2025
          </p>
        </CardBody>

        <Divider className="my-4" />

        {/* Kỹ năng */}
        <CardBody>
          <h2 className="text-xl font-semibold text-primary mb-3">
            💡 Kỹ năng
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Ngôn ngữ lập trình:</strong> JavaScript, TypeScript,
                  PHP
                </li>
                <li>
                  <strong>Frontend:</strong> React.js, Next.js, React Native,
                  Redux.js, Material-UI, Bootstrap, SASS, SEO
                </li>
                <li>
                  <strong>Backend:</strong> Node.js, Express.js, REST APIs, JWT,
                  Socket.io
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>CSDL & ORM:</strong> MySQL, MongoDB, Prisma ORM
                </li>
                <li>
                  <strong>DevOps & Tools:</strong> Git, Docker, npm, Postman,
                  Swagger, Jira
                </li>
                <li>
                  <strong>Kỹ năng mềm:</strong> Teamwork, Communication, Time
                  Management, Problem Solving
                </li>
              </ul>
            </div>
          </div>
        </CardBody>

        <Divider className="my-4" />

        {/* Kinh nghiệm */}
        <CardBody>
          <h2 className="text-xl font-semibold text-primary mb-3">
            💼 Kinh nghiệm làm việc
          </h2>

          <div className="mb-5">
            <h3 className="font-bold">Remote Front-End Developer – BigCode</h3>
            <p className="text-gray-500 text-sm">03/2025 – 10/2025</p>
            <p>
              Phát triển nền tảng TMĐT{" "}
              <Link
                href="https://chothongminh.com"
                target="_blank"
                color="primary"
              >
                Chợ Thông Minh
              </Link>{" "}
              kết nối chợ truyền thống với người tiêu dùng.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>
                Xây dựng quy trình đặt hàng, giỏ hàng, thanh toán, theo dõi đơn.
              </li>
              <li>
                Xây dựng CMS (React.js, MUI): quản lý sản phẩm, giá, tồn kho.
              </li>
              <li>
                Xây dựng API Node.js + Express.js, triển khai microservices.
              </li>
              <li>Hệ thống phân quyền động (MySQL + JWT).</li>
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Công nghệ:</strong> Next.js, React, MUI, Node.js, Express,
              MongoDB, MySQL, JWT
            </p>
          </div>

          <div>
            <h3 className="font-bold">
              Full-Stack Developer Intern – VNPT Trà Vinh
            </h3>
            <p className="text-gray-500 text-sm">02/2025 – 03/2025</p>
            <p>
              Xây dựng hệ thống quản lý vận chuyển{" "}
              <strong>Chành Xe Management</strong>.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>
                Thiết kế dashboard quản trị với Next.js, React, MUI, PrimeReact.
              </li>
              <li>
                Phát triển API CRUD với Express.js + MySQL, tối ưu SQL và nghiệp
                vụ.
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Công nghệ:</strong> Next.js, React, MUI, Express, MySQL,
              JWT
            </p>
            <Link
              href="https://github.com/Minurte1/ChanhXe-Management"
              color="primary"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </CardBody>

        <Divider className="my-4" />

        {/* Dự án cá nhân */}
        <CardBody>
          <h2 className="text-xl font-semibold text-primary mb-3">
            🚀 Dự án cá nhân
          </h2>

          <div>
            <h3 className="font-bold">PhucShoe2 – E-Commerce Platform</h3>
            <p className="text-gray-500 text-sm">10/2024 – 01/2025</p>
            <p>
              Nền tảng TMĐT chuyên giày dép, cung cấp trải nghiệm mua sắm hiện
              đại, an toàn và responsive.
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>
                Tính năng: Bộ lọc, tìm kiếm, giỏ hàng, thanh toán (VNPAY, MoMo),
                real-time chat, React-Quill.
              </li>
              <li>
                Full-stack React.js + Node.js, bảo mật JWT, tối ưu UX với MUI.
              </li>
            </ul>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Công nghệ:</strong> React.js, Material-UI, Node.js,
              Express.js, MySQL, JWT
            </p>
            <Link
              href="https://github.com/Minurte1/CN_DA21TTA_HoHoangPhuc_Shoes"
              color="primary"
              target="_blank"
            >
              GitHub
            </Link>
          </div>
        </CardBody>
      </Card>
    </main>
  );
}
