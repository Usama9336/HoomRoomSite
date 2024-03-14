import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData( calories, fat, carbs, protein, srp, mrp,gst,range) {
  return {  calories, fat, carbs, protein,srp,mrp,gst,range };
}

const rows = [
  createData( 159, 6.0, 24, 4.0,'₹ 99,999','₹ 99,999','₹ 99,999','₹ 99,999'),
  createData( 159, 6.0, 24, 4.0,'₹ 99,999','₹ 99,999','₹ 99,999','₹ 99,999'),
  createData( 159, 6.0, 24, 4.0,'₹ 99,999','₹ 99,999','₹ 99,999','₹ 99,999'),
  createData( 159, 6.0, 24, 4.0,'₹ 99,999','₹ 99,999','₹ 99,999','₹ 99,999'),
  createData( 159, 6.0, 24, 4.0,'₹ 99,999','₹ 99,999','₹ 99,999','₹ 99,999'),
  createData( 159, 6.0, 24, 4.0,'₹ 99,999','₹ 99,999','₹ 99,999','₹ 99,999'),
];

export default function Nexttable() {
  return (
    <TableContainer component={Paper} style={{ maxHeight: 280, overflowY: 'auto' }} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
          <TableCell>
            <p className='text-[13px] text-[#565656] font-bold'> Code</p>
            </TableCell>
          <TableCell>
            <p className='text-[13px] text-[#565656] font-bold' >SDP</p>
            
            </TableCell>
          <TableCell>
          <p className='text-[13px] text-[#565656] font-bold' >NRP</p>
            
            </TableCell>
          <TableCell>
          <p className='text-[13px] text-[#565656] font-bold' >MRP</p>
            
            </TableCell>
          <TableCell>
          <p className='text-[13px] text-[#565656] font-bold' > SDP Incl GST</p>
            
            </TableCell>
            <TableCell >
            <p className='text-[13px] text-[#565656] font-bold' > Diff SDP & NRP Inc GST</p>
             
              </TableCell>
            <TableCell >
            <p className='text-[13px] text-[#565656] font-bold' >  Diff SDP & MRP Inc GST</p>
            
              </TableCell>
            <TableCell >
            <p className='text-[13px] text-[#565656] font-bold' > Range Code</p>
              </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell >{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell >{row.protein}</TableCell>
              <TableCell ><p className='bg-gradient-to-r from-[#83C44C] to-[#149C78] inline-block text-transparent bg-clip-text '>{row.srp}</p></TableCell>
              <TableCell >
              <p className='bg-gradient-to-r from-[#83C44C] to-[#149C78] inline-block text-transparent bg-clip-text '>{row.mrp}</p>
                
                </TableCell>
              <TableCell >
              <p className='bg-gradient-to-r from-[#83C44C] to-[#149C78] inline-block text-transparent bg-clip-text '>{row.gst}</p>
                
                </TableCell>
              <TableCell >
              <p className='bg-gradient-to-r from-[#83C44C] to-[#149C78] inline-block text-transparent bg-clip-text '>{row.range}</p>
                
                
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
