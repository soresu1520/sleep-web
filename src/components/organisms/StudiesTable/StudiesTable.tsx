import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import WatchIcon from '@mui/icons-material/Watch';
import Button from '@mui/material/Button';
import { useSnackbar } from 'notistack';
import {
  getNewSelectedItems,
  isSelected,
  getRowsOnPage,
  getStudyUrl,
  formatDate,
} from './StudiesTable.utils';
import { StudiesTableProps, Order, TableData } from './StudiesTable.types';
import * as Styled from './StudiesTable.styled';
import DeleteDialog from '../../molecules/DeleteDialog/DeleteDialog';
import { deleteStudies } from '../../../firebase/firestoreUtils';

const StudiesTable = ({ tableData, handleDelete }: StudiesTableProps) => {
  const [selected, setSelected] = useState<TableData[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState<Order>('asc');
  const [visibleRows, setVisibleRows] = useState<TableData[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setVisibleRows(getRowsOnPage(tableData, page, rowsPerPage, order));
  }, [tableData]);

  const onSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelected(tableData);
      return;
    }
    setSelected([]);
  };

  const onSelectClick = (event: React.MouseEvent<unknown>, tableRow: TableData) => {
    const newSelected = getNewSelectedItems(selected, tableRow);
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
    setVisibleRows(getRowsOnPage(tableData, newPage, rowsPerPage, order));
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRowsPerPage = parseInt(event.target.value, 10);
    setRowsPerPage(newRowsPerPage);
    setPage(0);
    setVisibleRows(getRowsOnPage(tableData, 0, newRowsPerPage, order));
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  const onSortClick = () => {
    const isAsc = order === 'asc' ? 'desc' : 'asc';
    setOrder(isAsc);
    setVisibleRows(getRowsOnPage(tableData, page, rowsPerPage, isAsc));
  };

  const onDeleteClick = async () => {
    try {
      await deleteStudies(selected);
      handleDelete(selected);
      setSelected([]);
      setOpenDialog(false);
      enqueueSnackbar('Usunięto badania', {
        variant: 'success',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom',
        },
      });
    } catch {
      enqueueSnackbar('Wystąpił błąd', {
        variant: 'error',
        anchorOrigin: {
          horizontal: 'center',
          vertical: 'bottom',
        },
      });
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%' }}>
        <TableContainer>
          <Table size="medium">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={selected.length > 0 && selected.length < tableData.length}
                    checked={tableData.length > 0 && selected.length === tableData.length}
                    onChange={onSelectAllClick}
                  />
                </TableCell>
                <TableCell align="left" padding="normal" sortDirection={order}>
                  <TableSortLabel active direction={order} onClick={onSortClick}>
                    Data
                  </TableSortLabel>
                </TableCell>
                <TableCell padding="normal" colSpan={2}>
                  {selected.length > 0 && (
                    <Styled.IconsRow>
                      <Typography color="inherit" variant="subtitle1" component="div">
                        zaznaczono {selected.length}
                      </Typography>
                      <Tooltip title="Usuń">
                        <IconButton onClick={() => setOpenDialog(true)}>
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>
                    </Styled.IconsRow>
                  )}
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {visibleRows.map(row => {
                const isItemSelected = isSelected(selected, row);
                return (
                  <TableRow
                    hover
                    onClick={event => onSelectClick(event, row)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={formatDate(row.date)}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox color="primary" checked={isItemSelected} />
                    </TableCell>
                    <TableCell component="th" scope="row" padding="normal">
                      {formatDate(row.date)}
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title={row.diary ? 'Wypełniony dziennik snu' : 'Brak dziennika snu'}>
                        <FormatListBulletedIcon
                          sx={{ color: `${row.diary ? 'primary.main' : 'text.disabled'}` }}
                        />
                      </Tooltip>
                      <Tooltip
                        title={
                          row.smartwatch ? 'Dane ze smartwatcha' : 'Brak danych ze smartwatcha'
                        }
                      >
                        <WatchIcon
                          sx={{
                            color: `${row.smartwatch ? 'primary.main' : 'text.disabled'}`,
                            marginLeft: '0.7rem',
                          }}
                        />
                      </Tooltip>
                    </TableCell>
                    <TableCell align="right" sx={{ width: '20%' }}>
                      <Button
                        size="small"
                        variant="text"
                        onClick={() => navigate(getStudyUrl(row))}
                      >
                        Szczegóły
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={3} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Liczba wierszy na stronie:"
        />
      </Paper>
      <DeleteDialog
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
        handleClick={onDeleteClick}
        text="Usunięcie badań jest nieodwracalne"
        title={`Czy chcesz usunąć te badania (${selected.length})?`}
      />
    </Box>
  );
};

export default StudiesTable;
