"""Forms for playlist app."""

from wtforms import SelectField,StringField,FloatField,IntegerField
from flask_wtf import FlaskForm
from wtforms.validators import InputRequired, Length, NumberRange, URL, Optional

class PlaylistForm(FlaskForm):
    """Form for adding playlists."""

    name=StringField(
        "Playlist Name: ",
        validators=[InputRequired()],
        )
    
    desc=StringField(
        "Description: ",
        validators=[Optional()]
        )
    
    # playlist_id=IntegerField()

class SongForm(FlaskForm):
    """Form for adding songs."""

    name=StringField(
        "title: ",
        validators=[InputRequired()],
        )

    artist=StringField(
        "artist: ",
        validators=[InputRequired()]
        ,
        )

    # song_id=IntegerField("song_id")


# DO NOT MODIFY THIS FORM - EVERYTHING YOU NEED IS HERE
class NewSongForPlaylistForm(FlaskForm):
    """Form for adding a song to playlist."""

    song = SelectField('Song To Add', coerce=int)
