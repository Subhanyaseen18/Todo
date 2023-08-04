const Editdata = data => {
    const newData = firebase.map(item => {
      if (item.id === data.id) {
        return {
          ...item,
          note: data.editnotes,
          status: data.status,
        };
      }
      return item;
    });
    setfirebase(newData);
  };




  const handleDelete = data => {
    setfirebase(prevData => {
      const newData = prevData.filter(item => item.id !== data);
      return newData;
    });
  };
