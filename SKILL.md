---
name: VKU_diagram_skill
description: >-
  Bộ kỹ năng chuẩn hóa thiết kế, dựng hình và xuất sơ đồ UML (Activity Diagram, Use Case Diagram,
  Class Diagram & Database ERD) theo chuẩn đồ án/luận văn tốt nghiệp VKU và định dạng XML gốc của Draw.io.
  Đảm bảo 100% chuẩn in ấn A4 đơn sắc (trắng - xám - đen), đúng cú pháp phần mềm và hỗ trợ tạo link Draw.io chỉnh sửa tức thì.
---

# VKU Diagram Skill (Kỹ Năng Dựng Sơ Đồ Đồ Án & Luận Văn VKU)

Bộ kỹ năng toàn diện hướng dẫn và tự động hóa việc tạo 3 loại sơ đồ UML cốt lõi cho báo cáo thực tập, đồ án cơ sở, đồ án chuyên ngành và luận văn tốt nghiệp tại **Trường Đại học Công nghệ Thông tin & Truyền thông Việt - Hàn (VKU)**:
1. **Activity Diagram (Sơ đồ hoạt động)**: Hỗ trợ cả luồng đơn (Workflow) và luồng phân làn theo vai trò (Swimlanes / Partitions).
2. **Use Case Diagram (Sơ đồ trường hợp sử dụng)**: Chuẩn hóa ranh giới hệ thống (System Boundary), phân quyền bảo mật (Privacy Boundaries), quan hệ `<<include>>` và `<<extend>>`.
3. **Class Diagram & Database ERD (Sơ đồ lớp & Lược đồ CSDL)**: Định dạng bảng Draw.io 2 cột chuẩn gốc (Native Table), cột PK/FK có đường chia nét đứt, viền đáy PK nét liền, đường nối chân quạ (Crow's Foot) từ hàng đến hàng chính xác.

---

## 1. Chuẩn Màu Sắc In Ấn Luận Văn VKU (Monochrome / Grayscale Standard)

Khi in ấn luận văn hoặc nộp file PDF chấm đồ án, toàn bộ sơ đồ phải tuân thủ chuẩn **Đơn sắc (Trắng - Xám - Đen)** để hiển thị sắc nét trên giấy A4 trắng đen:
- **Nền tổng thể sơ đồ:** Trắng tuyệt đối (`#FFFFFF`).
- **Nền tiêu đề bảng / Header:** Xám nhạt cao cấp (`#F3F4F6` hoặc `#E5E7EB`).
- **Viền khung / Stroke:** Đen hoặc xám đậm (`#111827` hoặc `#374151`), độ dày nét `1.3` - `1.6`.
- **Màu chữ / Font Color:** Đen tuyền (`#111827`), font chữ không chân rõ nét (Helvetica, Arial) hoặc Times New Roman.
- **Tắt toàn bộ hiệu ứng đổ bóng (Drop Shadow) và màu sặc sỡ:** Không dùng xanh lá, cam, đỏ hay gradient.

---

## 2. Chuẩn Dựng Activity Diagram (Sơ Đồ Hoạt Động)

### A. Các thành phần chuẩn:
1. **Điểm bắt đầu (Start Node):** Vòng tròn đen đặc (`ellipse;fillColor=#111827;strokeColor=none;`).
2. **Điểm kết thúc (End Node):** Vòng tròn lồng (Bullseye):
```xml
<mxCell id="end_node" value="" style="ellipse;html=1;shape=endState;fillColor=#111827;strokeColor=#FFFFFF;strokeWidth=2;" vertex="1" parent="1">
  <mxGeometry x="200" y="500" width="30" height="30" as="geometry"/>
</mxCell>
```
3. **Trạng thái hành động (Action State):** Hộp chữ nhật bo góc tròn (`rounded=1;arcSize=20;fillColor=#FFFFFF;strokeColor=#111827;strokeWidth=1.4;`).
4. **Điểm rẽ nhánh điều kiện (Decision Diamond):** Hình thoi (`rhombus;fillColor=#FFFFFF;strokeColor=#111827;strokeWidth=1.4;`). Các nhánh đi ra phải có nhãn điều kiện đặt trong ngoặc vuông `[Điều kiện hợp lệ]`, `[Lỗi / Thất bại]`.
5. **Thanh đồng bộ song song (Fork / Join Bar):** Thanh ngang màu đen đặc (`shape=line;strokeWidth=4;strokeColor=#111827;`).
6. **Làn phân vai trò (Swimlane / Partition):**
```xml
<mxCell id="lane_1" value="Người dùng (User)" style="swimlane;startSize=28;fillColor=#F9FAFB;strokeColor=#374151;strokeWidth=1.2;fontStyle=1;align=center;" vertex="1" parent="1">
  <mxGeometry x="40" y="40" width="220" height="600" as="geometry"/>
</mxCell>
```

---

## 3. Chuẩn Dựng Use Case Diagram (Sơ Đồ Trường Hợp Sử Dụng)

### A. Cấu trúc chuẩn:
1. **Ranh giới hệ thống (System Boundary):** Dùng swimlane không xếp tầng (`collapsible=0;fillColor=#FFFFFF;strokeColor=#374151;strokeWidth=1.5;`).
2. **Tác nhân (Actor):** Khối người que chuẩn UML (`shape=umlActor;fillColor=#FFFFFF;strokeColor=#111827;strokeWidth=1.6;`).
   - Phía trái: Người dùng phổ thông (User / Member / Guest).
   - Phía phải: Quản trị viên (Admin / Team Leader / System).
3. **Use Case:** Hình elip trắng viền đen (`shape=ellipse;fillColor=#FFFFFF;strokeColor=#111827;strokeWidth=1.4;`).
4. **Quan hệ phụ thuộc:**
   - **Liên kết cơ bản (Association):** Đường liền nét (`strokeColor=#111827;endArrow=none;`).
   - **Bao hàm (`<<include>>`):** Đường nét đứt, mũi tên hở hướng tới Use Case con (`dashed=1;endArrow=open;strokeColor=#111827;`).
   - **Mở rộng (`<<extend>>`):** Đường nét đứt, mũi tên hở hướng ngược về Use Case cha (`dashed=1;endArrow=open;strokeColor=#111827;`).
5. **Phân vùng bảo mật (Privacy Boundary):** Tách bạch rõ rệt các tính năng công cộng (chỉ đọc số liệu tổng hợp) và tính năng quản trị nhạy cảm (truy cập PII, ghi đè cơ sở dữ liệu).

---

## 4. Chuẩn Dựng Class Diagram & Database ERD (Draw.io Native Table)

Đây là chuẩn cao cấp nhất của Draw.io, mô phỏng chính xác thư viện **Entity Relation** của Draw.io thay vì dùng hình khối giả lập.

### A. Khung bảng (Table Container):
```xml
<mxCell id="tbl_Name" value="tbl_Name" style="shape=table;startSize=26;container=1;collapsible=1;childLayout=tableLayout;fixedRows=1;rowLines=0;fontStyle=1;fontSize=12;fontColor=#111827;align=center;resizeLast=1;html=1;whiteSpace=wrap;fillColor=#F3F4F6;strokeColor=#374151;strokeWidth=1.5;" vertex="1" parent="1">
  <mxGeometry x="40" y="40" width="260" height="200" as="geometry"/>
</mxCell>
```

### B. Từng dòng dữ liệu (Table Row):
- Dòng chứa khóa chính cuối cùng (Last PK) thiết lập `bottom=1` để tạo đường kẻ ngang phân cách:
```xml
<mxCell id="tbl_Name_r0" value="" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=0;fillColor=none;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=1;html=1;" vertex="1" parent="tbl_Name">
  <mxGeometry y="26" width="260" height="22" as="geometry"/>
</mxCell>
```

### C. Cột bên trái (Key Column: PK / FK):
- Có đường kẻ dọc nét đứt bên phải (`right=1;dashed=1;`):
```xml
<mxCell id="tbl_Name_r0_k" value="PK" style="shape=partialRectangle;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=1;dashed=1;fontStyle=1;fontSize=11;fontColor=#111827;align=center;verticalAlign=middle;overflow=hidden;html=1;whiteSpace=wrap;strokeColor=#374151;" vertex="1" parent="tbl_Name_r0">
  <mxGeometry width="38" height="22" as="geometry"><mxRectangle width="38" height="22" as="alternateBounds"/></mxGeometry>
</mxCell>
```

### D. Cột bên phải (Field Name & Data Type):
```xml
<mxCell id="tbl_Name_r0_v" value="column_name data_type NOT NULL" style="shape=partialRectangle;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;align=left;spacingLeft=6;fontStyle=1;fontSize=11;fontColor=#111827;overflow=hidden;html=1;whiteSpace=wrap;" vertex="1" parent="tbl_Name_r0">
  <mxGeometry x="38" width="222" height="22" as="geometry"><mxRectangle width="222" height="22" as="alternateBounds"/></mxGeometry>
</mxCell>
```

### E. Đường kết nối Crow's Foot (Nối từ Row tới Row):
```xml
<mxCell id="edge_1" value="1..*" style="edgeStyle=entityRelationEdgeStyle;fontSize=10;fontColor=#4B5563;html=1;endArrow=ERzeroToMany;startArrow=ERmandOne;strokeColor=#111827;strokeWidth=1.3;" edge="1" source="tbl_A_r0" target="tbl_B_r1" parent="1">
  <mxGeometry relative="1" as="geometry"/>
</mxCell>
```
- `startArrow=ERmandOne`: 1 bắt buộc (`||`).
- `endArrow=ERzeroToMany`: 0 đến nhiều (`o{`).
- `endArrow=ERoneToMany`: 1 đến nhiều (`|{`).
- `endArrow=ERone`: Đúng 1 (`||`).

---

## 5. Hướng Dẫn Sử Dụng Bộ Script Sinh Tự Động

Trong thư mục `scripts/` có sẵn các tiện ích thực thi bằng Node.js:
- `drawio_url_helper.js`: Hàm nén chuỗi XML bằng `pako`/`zlib` (raw deflate) và Base64 URL Safe để tạo link mở Draw.io trực tiếp trên web mà không bị lỗi `URL Length Exceeded` hoặc `Buffer Error`.
- `generate_activity.js`: Script mẫu sinh Activity Diagram dạng phân làn hoặc quy trình đơn.
- `generate_usecase.js`: Script mẫu sinh Use Case Diagram với ranh giới bảo mật và tác nhân đa cấp.
- `generate_class_erd.js`: Script mẫu sinh sơ đồ thực thể bảng và quan hệ Crow's foot.
