import * as React from 'react'
import {useState} from 'react'
// import classNames from 'classnames'

import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardActions from '@mui/material/CardActions'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import ModalConfirm from './ModalConfirm'


const CustomerCard = ({
    id,
    name, 
    lastname, 
    email, 
    avatar,
    className,
    onRemoveCustomer,
    onEditCustomer
}) => {

  const [open, setOpen] = useState(false)

  const handleRemoveCustomer = () => {
    setOpen(!open)
  }

  const handleConfirmModal = (id) => {
    onRemoveCustomer(id)
    handleRemoveCustomer()
  }

  const handleEditCustomer = (id) => {
    onEditCustomer(id)
  }
  return (
  <>
    <Card className={className} sx={{ maxWidth: 345, marginTop: 5 }}>
      <CardHeader
        avatar={
          <Avatar src={avatar} aria-label="recipe">
            
          </Avatar>
        }
        
        title={`${name} ${lastname}`}
        subheader={email}
      />
      
      <CardActions disableSpacing>
        <IconButton onClick={() => handleEditCustomer(id)} sx={{ marginRight: 1}} aria-label="add to favorites">
          <EditIcon  />
        </IconButton>
        <IconButton onClick={() => handleRemoveCustomer()} aria-label="share">
          <DeleteIcon />
        </IconButton>
        
      </CardActions>
    
    </Card>
    <ModalConfirm 
      open={open} 
      onClose={handleRemoveCustomer}
      onConfirm={() => handleConfirmModal(id)}
      
      title="Deseja realmente excluir o cliente?"
      message="O cliente será excluído do banco de dados."
    />
  </>
  )
}

export default CustomerCard