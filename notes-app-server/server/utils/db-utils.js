import sql from 'mssql';
import * as config from '../etc/db_config.json';

export async function getNotes () {
    let pool = await sql.connect(config);
    let result = await pool.request()
        .query('select * from std_notes');
    sql.close();
	pool.close();
    return result;
};

export async function addNote(note) {
    let pool = await sql.connect(config);
    let result = await pool.request()
        .input('title', sql.NText, note.title)        
        .input('text', sql.NText, note.text)        
        .input('color', sql.NText, note.color)        
        .query('insert into std_notes (std_title, std_text, std_color) values (@title, @text, @color)');
    sql.close();
    pool.close();
    return result;
}

export async function removeNote(id) {
    let pool = await sql.connect(config);
    let result = await pool.request()
        .input('id', sql.NText, id.toString())        
        .query('delete from std_notes where std_id=@id');
    sql.close();
    pool.close();
    return result;
}
