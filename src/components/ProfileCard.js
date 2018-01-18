import React from 'react'

export const ProfileCard = (props) => {
  return (
    <div className="card">
            <a href={`mushers/${props.musher_id}`}>
    <div className="avatar">
      <img src={`http://percy.cholenasmart.com/sites/default/files/styles/mushers/public/${props.src}`} alt="Avatar" aria-label="Musher avatar" style={{ "width": "200" }} />
      </div>
      <div className="container">
        <h4>
          <b>
          {props.name}
          </b>
        </h4>
      </div>
          </a>
    </div>
  )
}