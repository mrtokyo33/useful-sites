import styles from './FontsItem.module.css'

function FontsItem({ font, isSelected, onClick, handleDelete }) {
  const isDefault = font.isDefault;

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    handleDelete(font.id);
  };

  return (
    <div 
      className={`${styles.FontsItem} ${isSelected ? styles.selected : ''}`} 
      onClick={onClick}
    >
      <h1 style={{ fontFamily: font.family }}>
        {font.name}
      </h1>

      {!isDefault && (
        <button 
          type="button" 
          className={styles.deleteButton} 
          onClick={handleDeleteClick}
        >
          <i className="fas fa-trash"></i>
        </button>
      )}
    </div>
  );
}

export default FontsItem;
