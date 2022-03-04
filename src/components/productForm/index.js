import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import { createProducts } from '../../toolkitStore/products';

import './productForm.scss';

function ProductForm() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [values, setValues] = useState({});

  const dispatch = useDispatch();

  function handleChange(e) {
    e.persist();
    setValues(values => ({ ...values, [e.target.name]: e.target.value }))
  };

  function handleSubmit(e) {
    e.preventDefault();
    let rqstObj = { ...values }
    dispatch(createProducts(rqstObj, 1));
  }

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modal-styling'>
          <form onSubmit={handleSubmit}>
            <label>
              Category:
              <select onChange={handleChange}
                name='category'
                defaultValue={'food'}
                required={true}
                placeholder='Pick a Category'>
                <option value='food'>Food</option>
                <option value='stuff'>Stuff</option>
              </select>
            </label>
            <label>
              Name:
              <input
                type='text'
                name='name'
                onChange={handleChange}
                placeholder='Product Name'
                required={true} />
            </label>
            <label>
              Description:
              <input
                type='text'
                name='description'
                onChange={handleChange}
                placeholder='Brief Description'
                required={true} />
            </label>
            <label>
              Price:
              <input
                type='number'
                name='price'
                onChange={handleChange}
                min={0}
                placeholder='Product Price'
                required={true} />
            </label>
            <label>
              Inventory:
              <input
                type='number'
                name='inventory'
                onChange={handleChange}
                min={0}
                placeholder='Product Inventory'
                required={true} />
            </label>
            <Button type='submit'>Submit</Button>
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default ProductForm;



//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }