const fs = require('fs');
const { getDrawioUrl } = require('./drawio_url_helper');

function buildActivityXml(title, nodes, edges) {
  let xml = '<mxGraphModel dx="1200" dy="800" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1200" pageHeight="800">\n<root>\n<mxCell id="0"/>\n<mxCell id="1" parent="0"/>\n';
  
  // Title
  xml += `<mxCell id="title" value="${title}" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=16;fontStyle=1;fontColor=#111827;" vertex="1" parent="1">\n  <mxGeometry x="300" y="20" width="600" height="30" as="geometry"/>\n</mxCell>\n`;

  // Start Node
  xml += '<mxCell id="start" value="" style="ellipse;html=1;shape=startState;fillColor=#111827;strokeColor=none;" vertex="1" parent="1">\n  <mxGeometry x="400" y="80" width="30" height="30" as="geometry"/>\n</mxCell>\n';

  // Sample nodes
  xml += '<mxCell id="step1" value="Đăng nhập hệ thống" style="rounded=1;arcSize=20;whiteSpace=wrap;html=1;fillColor=#FFFFFF;strokeColor=#111827;strokeWidth=1.4;fontStyle=1;fontSize=12;fontColor=#111827;" vertex="1" parent="1">\n  <mxGeometry x="330" y="150" width="170" height="50" as="geometry"/>\n</mxCell>\n';
  xml += '<mxCell id="step2" value="Thực hiện thao tác nghiệp vụ" style="rounded=1;arcSize=20;whiteSpace=wrap;html=1;fillColor=#FFFFFF;strokeColor=#111827;strokeWidth=1.4;fontStyle=1;fontSize=12;fontColor=#111827;" vertex="1" parent="1">\n  <mxGeometry x="330" y="240" width="170" height="50" as="geometry"/>\n</mxCell>\n';

  // End Node
  xml += '<mxCell id="end" value="" style="ellipse;html=1;shape=endState;fillColor=#111827;strokeColor=#FFFFFF;strokeWidth=2;" vertex="1" parent="1">\n  <mxGeometry x="400" y="330" width="30" height="30" as="geometry"/>\n</mxCell>\n';

  // Edges
  xml += '<mxCell id="e1" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeColor=#111827;strokeWidth=1.4;endArrow=classic;" edge="1" source="start" target="step1" parent="1">\n  <mxGeometry relative="1" as="geometry"/>\n</mxCell>\n';
  xml += '<mxCell id="e2" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeColor=#111827;strokeWidth=1.4;endArrow=classic;" edge="1" source="step1" target="step2" parent="1">\n  <mxGeometry relative="1" as="geometry"/>\n</mxCell>\n';
  xml += '<mxCell id="e3" style="edgeStyle=orthogonalEdgeStyle;rounded=0;orthogonalLoop=1;jettySize=auto;html=1;strokeColor=#111827;strokeWidth=1.4;endArrow=classic;" edge="1" source="step2" target="end" parent="1">\n  <mxGeometry relative="1" as="geometry"/>\n</mxCell>\n';

  xml += '</root>\n</mxGraphModel>';
  return xml;
}

const xml = buildActivityXml('SƠ ĐỒ HOẠT ĐỘNG CHUẨN VKU');
console.log('Draw.io URL:', getDrawioUrl(xml));
