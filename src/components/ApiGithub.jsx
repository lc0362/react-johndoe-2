import React, { useState, useEffect } from 'react';

export default function ApiGithub() {
  const [users, setUsers] = useState({}); // Utilisez un objet vide au lieu d'un tableau pour initialiser

  const getUsers = async () => {
    try {
      const res = await fetch("https://api.github.com/users/github-john-doe");
      const json = await res.json();
      setUsers(json);
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
    }
  };

  useEffect(() => {
    getUsers(); // Appel de la fonction une fois lors du montage du composant
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card text-444" style={{ maxWidth: '30rem' }}>
        <h2 className="card-title pt-2">{users.name}</h2>
        {users.avatar_url && (
          <img src={users.avatar_url} className="card-img-top p-5" alt={`${users.login}'s avatar`} />
        )}
        <div className="card-body">
          <div className="card-text">
            <div><b>Login : {users.login} </b></div>
            <div><b>Bio :</b> {users.bio} </div>
            <div className="py-3"><b>URL du profil : <a href={users.html_url} target="_blank" rel="noopener noreferrer">{users.html_url}</a> </b></div>
            <div><b>Followers :</b> {users.followers} </div>
            <div><b>Créé le :</b> {users.created_at ? new Date(users.created_at).toLocaleDateString() : ''} </div>
            <div><b>Dernière mise à jour le :</b> {users.updated_at ? new Date(users.updated_at).toLocaleDateString() : ''}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
