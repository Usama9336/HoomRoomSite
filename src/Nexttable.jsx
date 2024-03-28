import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData( fat, carbs, protein, srp, mrp,gst) {
  return { fat, carbs, protein,srp,mrp,gst };
}

const rows = [
  createData( '', '', '','₹ 99,999','₹ 99,999','₹ 99,999'),
];

export default function Nexttable() {
  return (
    <TableContainer component={Paper} style={{ maxHeight: 270, overflowY: 'auto' , maxWidth:850}} >
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead >
          <p className='text-[#404040] text-[
20.11px] font-bold ml-[0.8rem] mt-[0.6rem]'>HEADING</p>
          <TableRow>
          <TableCell>
            <p className='text-[13px] text-[#565656] font-bold' >SDP</p>
            
            </TableCell>
          <TableCell >
          <p className='ml-[-2rem] sm:ml-[-2.5rem] text-[13px] text-[#565656] font-bold' >NRP</p>
            
            </TableCell>
          <TableCell>
          <p className='text-[13px] text-[#565656] font-bold' >MRP</p>
            
            </TableCell>
          <TableCell>
          <p className='text-[13px] text-[#565656] font-bold' > SDP TO MRP</p>
            
            </TableCell>
            <TableCell >
            <p className='text-[13px] text-[#565656] font-bold' > SDP TO NRP</p>
             
              </TableCell>
            <TableCell >
            <p className='text-[13px] text-[#565656] font-bold' > MRP To NRP</p>
            
              </TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell>{row.fat}</TableCell>
              <TableCell><p className='ml-[-2rem] sm:ml-[-2.5rem]'>{row.carbs}</p></TableCell>
              <TableCell >{row.protein}</TableCell>
              <TableCell ><p className='bg-gradient-to-r from-[#83C44C] to-[#149C78] inline-block text-transparent bg-clip-text '>{row.srp}</p></TableCell>
              <TableCell >
              <p className='bg-gradient-to-r from-[#83C44C] to-[#149C78] inline-block text-transparent bg-clip-text '>{row.mrp}</p>
                
                </TableCell>
              <TableCell >
              <p className='bg-gradient-to-r from-[#83C44C] to-[#149C78] inline-block text-transparent bg-clip-text '>{row.gst}</p>
                
                </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
