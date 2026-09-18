const fs = require('fs');
const { getDrawioUrl } = require('./drawio_url_helper');

function createTable(id, title, x, y, width, rows) {
  let xml = '';
  const rowHeight = 22;
  const headerHeight = 26;
  const totalHeight = headerHeight + rows.length * rowHeight;
  
  xml += `<mxCell id="${id}" value="${title}" style="shape=table;startSize=${headerHeight};container=1;collapsible=1;childLayout=tableLayout;fixedRows=1;rowLines=0;fontStyle=1;fontSize=12;fontColor=#111827;align=center;resizeLast=1;html=1;whiteSpace=wrap;fillColor=#F3F4F6;strokeColor=#374151;strokeWidth=1.5;" vertex="1" parent="1">\n`;
  xml += `  <mxGeometry x="${x}" y="${y}" width="${width}" height="${totalHeight}" as="geometry"/>\n`;
  xml += `</mxCell>\n`;
  
  rows.forEach((r, idx) => {
    const rowId = `${id}_r${idx}`;
    const isLastPk = r.isLastPk ? 1 : 0;
    xml += `  <mxCell id="${rowId}" value="" style="shape=tableRow;horizontal=0;startSize=0;swimlaneHead=0;swimlaneBody=0;fillColor=none;collapsible=0;dropTarget=0;points=[[0,0.5],[1,0.5]];portConstraint=eastwest;top=0;left=0;right=0;bottom=${isLastPk};html=1;" vertex="1" parent="${id}">\n`;
    xml += `    <mxGeometry y="${headerHeight + idx * rowHeight}" width="${width}" height="${rowHeight}" as="geometry"/>\n`;
    xml += `  </mxCell>\n`;
    
    xml += `  <mxCell id="${rowId}_k" value="${r.key || ''}" style="shape=partialRectangle;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=1;dashed=1;fontStyle=${r.key ? 1 : 0};fontSize=11;fontColor=#111827;align=center;verticalAlign=middle;overflow=hidden;html=1;whiteSpace=wrap;strokeColor=#374151;" vertex="1" parent="${rowId}">\n`;
    xml += `    <mxGeometry width="38" height="${rowHeight}" as="geometry"><mxRectangle width="38" height="${rowHeight}" as="alternateBounds"/></mxGeometry>\n`;
    xml += `  </mxCell>\n`;
    
    xml += `  <mxCell id="${rowId}_v" value="${r.val}" style="shape=partialRectangle;connectable=0;fillColor=none;top=0;left=0;bottom=0;right=0;align=left;spacingLeft=6;fontStyle=${r.bold ? 1 : 0};fontSize=11;fontColor=#111827;overflow=hidden;html=1;whiteSpace=wrap;" vertex="1" parent="${rowId}">\n`;
    xml += `    <mxGeometry x="38" width="${width - 38}" height="${rowHeight}" as="geometry"><mxRectangle width="${width - 38}" height="${rowHeight}" as="alternateBounds"/></mxGeometry>\n`;
    xml += `  </mxCell>\n`;
  });
  return xml;
}

function createCrowEdge(id, sourceRowId, targetRowId, label = '') {
  return `<mxCell id="${id}" value="${label}" style="edgeStyle=entityRelationEdgeStyle;fontSize=10;fontColor=#4B5563;html=1;endArrow=ERzeroToMany;startArrow=ERmandOne;strokeColor=#111827;strokeWidth=1.3;" edge="1" source="${sourceRowId}" target="${targetRowId}" parent="1">\n  <mxGeometry relative="1" as="geometry"/>\n</mxCell>\n`;
}

module.exports = { createTable, createCrowEdge };
