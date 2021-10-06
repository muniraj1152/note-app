import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

import styles from './Notes.module.scss';
import {
  getNoteList,
  addNote,
  deleteNote,
  updateNote,
  getNotesByTitle,
} from '../../store/notes/actions';
import {
  getNotesSelector,
  getCategoryListSelector,
} from '../../store/notes/selectors';
import { INote } from '../../store/notes/types';
import EditIcon from '../../assets/icons/edit-icon.png';
import DeleteIcon from '../../assets/icons/delete-icon.svg';

export default function Notes() {
  const notesList = useSelector(getNotesSelector);
  const categoryList = useSelector(getCategoryListSelector);

  const noteInitialState: INote = {
    id: 0,
    title: '',
    category: '',
    description: '',
  };

  const [note, setNote] = useState(noteInitialState);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setNote((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNoteList());
  }, [dispatch]);

  /**
   * To create new note or update existing note
   */
  const saveNote = () => {
    if (!note.title || !note.category || !note.description) {
      alert('Please fill all fields');
      return;
    }
    if (note.id === 0) {
      dispatch(addNote(note));
    } else {
      dispatch(updateNote(note));
    }
    setIsOpen(false);
    setMoveToModalOpen(false);
    setNote(noteInitialState);
  };

  /**
   * Get notes list based on note title
   * @param event
   */
  const searchNote = (event: any) => {
    const searchValue = event.target.value;
    dispatch(getNotesByTitle(searchValue.toLowerCase()));
  };

  /**
   * Selected note deleted using id of note.
   */
  const onDeleteNote = (id: string) => {
    dispatch(deleteNote(id));
  };

  const onUpdateNote = (note: any) => {
    setNote(note);
    setIsOpen(true);
  };

  /**
   * Here we can able to move notes from one category to another category
   * @param event
   */
  const moveToAnotherCategory = (event: any) => {
    setNote({ ...note, category: event.target.value });
  };

  const [isOpen, setIsOpen] = React.useState(false);
  const [isMoveToModalOpen, setMoveToModalOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const hideMoveToModal = () => {
    setMoveToModalOpen(false);
  };

  return (
    <div className={`${styles.container} d-inline-block w-75 px-5`}>
      <div className="row justify-content-between mx-0 px-2">
        <label className={styles.mainTitle}>Notes</label>
        <button
          type="button"
          className={`btn ${styles.btnPrimaryLight} border-0`}
          onClick={openModal}
        >
          Add Note
        </button>
      </div>
      <div className="p-2">
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search note by title"
              onChange={searchNote}
            />
          </Form.Group>
        </Form>
      </div>

      {/* List of Notes content , every note display as card with specific title, description and category*/}
      <div className={styles.cardContainer}>
        {notesList &&
          notesList.map((note: any, index: any) => {
            return (
              <div className="card mx-2 mb-3" key={index}>
                <div className="card-body">
                  <h5 className="card-title">{note.title}</h5>
                  <div className="border-bottom mb-3">
                    Category - <span>{note.category}</span>
                  </div>
                  <label className="font-weight-bold text-secondary">
                    Description
                  </label>
                  <p className="card-text">{note.description}</p>
                  <div className="justify-content-end row">
                    <img
                      src={EditIcon}
                      className="cursor-pointer pr-3"
                      onClick={() => onUpdateNote(note)}
                    />
                    <img
                      src={DeleteIcon}
                      className="cursor-pointer pr-3"
                      onClick={() => onDeleteNote(note.id)}
                    />
                    <span
                      onClick={() => {
                        setMoveToModalOpen(true);
                        setNote(note);
                      }}
                    >
                      <button className="btn btn-secondary">Move to</button>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* Modal component consists of add new note and move to functionalities */}
      <div>
        <Modal show={isOpen} onHide={hideModal}>
          <Modal.Header>
            <Modal.Title>
              {note.id === 0 ? 'Add new Note' : 'Update Note'}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter title"
                  defaultValue={note.title}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Select category</Form.Label>
                <Form.Control
                  as="select"
                  name="category"
                  defaultValue={note.category}
                  onChange={handleChange}
                >
                  <option>Select any category</option>
                  {categoryList &&
                    categoryList.map((category: any, index: any) => {
                      return (
                        <option value={category} key={index}>
                          {category}
                        </option>
                      );
                    })}
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  rows={3}
                  defaultValue={note.description}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
            <div></div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal} className="btn btn-secondary">
              Cancel
            </button>
            <button className="btn btn-primary" onClick={saveNote}>
              Save
            </button>
          </Modal.Footer>
        </Modal>

        {/* Modal component for moving note from one category to another */}
        <Modal show={isMoveToModalOpen} onHide={hideMoveToModal}>
          <Modal.Header>
            <Modal.Title>Move to another category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Select category</Form.Label>
                <Form.Control
                  as="select"
                  name="category"
                  defaultValue={note.category}
                  onChange={moveToAnotherCategory}
                >
                  <option>Change category</option>
                  {categoryList &&
                    categoryList.map((category: any, index: any) => {
                      return (
                        <option value={category} key={index}>
                          {category}
                        </option>
                      );
                    })}
                </Form.Control>
              </Form.Group>
            </Form>
            <div></div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={hideMoveToModal} className="btn btn-secondary">
              Cancel
            </button>
            <button className="btn btn-primary" onClick={saveNote}>
              Save
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
