"""Models for Playlist app."""

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine, ForeignKey, Column, String, Integer,Text
db = SQLAlchemy()


class Playlist(db.Model):
    """Playlist."""
    __tablename__ = "playlists"

    id = Column("playlist_id", Integer, primary_key=True, autoincrement=True)
    name = Column("name", Text, nullable=False)
    description = Column("desciption", Text) 


class Song(db.Model):
    """Song."""
    __tablename__ = "songs"

    id = Column("song_id", Integer, primary_key=True)
    title = Column("title", Text)
    artist = Column("artist", Text)


class PlaylistSong(db.Model):
    """Mapping of a playlist to a song."""
    __tablename__ = "playlists_songs"

    id = Column("id", Integer, primary_key=True)
    playlist_id = Column(Integer, ForeignKey('playlists.id'))
    song_id = Column(Integer, ForeignKey('songs.id'))

# DO NOT MODIFY THIS FUNCTION
def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)
