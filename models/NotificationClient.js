let connection = require('../config/connection')

class NotificationClient {

	constructor(row) {
		this.row = row
	}
	/**
	 * Constante contenant la fictive Clée Primaire de la table
	 */
	static ID() {
		return 'code_notification'
	}
	/**
	 * Constante contenant le nom de la table actuelle
	 */
	static TABLE() {
		return 'NotificationClient'
	}

	get id () {
		return this.row.id
	}
	get codeNotification () {
		return this.row.code_notification
    }
    
    get titre () {
		return this.row.titre
    }

	get importance () {
		return this.row.importance
	}

	get lienWeb () {
		return this.row.lien_web
	}

	get dateRegister () {
		return this.row.date_register
	}

	static genCodeNotificationClient() {
		let min = 1000000000
		let max = 9999999999
		let text= "NotificationClient-"
		min = Math.ceil(min);
  		max = Math.floor(max);
  		let nb  = Math.floor(Math.random() * (max - min +1)) + min
  		let code = text+nb
  		return code
	}

	static create(content, cb) {
		let ID 		= NotificationClient.ID()
		let TABLE 	= NotificationClient.TABLE()
		let codeNotification 	= content.codeNotification
        let titre		= content.titre
        let importance		= content.importance
		let lienWeb	= content.lienWeb
		let dateRegister= new Date()
		let sql = 'INSERT INTO '+ TABLE +' SET '+ ID +' = ?, titre = ?, importance = ?,' 
		+' lien_web = ?, date_register = ?'
		connection.query(sql, [codeNotification, titre, importance, lienWeb, dateRegister],
			(err, result) => {
				if (err) throw err
				let msg = "NotificationClient bien ajouté"
				cb(msg)
			})

	}


	/**
	 * trouver une ligne de la table
	 * @param  {string}   field [Champ à viser]
	 * @param  {string or any}   value [valeur du champ à viser]
	 * @param  {Function} cb    [CallBack]
	 * @return {Object Array}         [ligne de la table]
	 */
	static findByOneField(field, value, cb) {
		let TABLE = NotificationClient.TABLE()
		let sql = 'SELECT * FROM '+ TABLE +' WHERE '+ field +' = ?'
		connection.query(sql, [value], 
			(err, rows) => {
				if (err) throw err
				cb(rows.map((row) => new NotificationClient(row)))
			})
	}

		/**
	 * trouver une ligne de la table
	 * @param  {string}   field1 [premier Champ à viser]
	 * @param  {string or any}   value1 [valeur du premier champ à viser]
	 * @param  {string}   field2 [second Champ à viser]
	 * @param  {string or any}   value2 [valeur du second champ à viser]
	 * @param  {Function} cb    [CallBack]
	 * @return {Object Array}         [ligne de la table]
	 */
	static findByTwoField(field1, value1, field2, value2, cb) {
		let TABLE = NotificationClient.TABLE()
		let sql = 'SELECT * FROM '+ TABLE +' WHERE '+ field1 +' = ? AND '+ field2 +' = ?'
		connection.query(sql, [value1, value2], 
			(err, rows) => {
				if (err) throw err
				cb(rows.map((row) => new NotificationClient(row)))
			})
	}

	/**
	 * remplacement d'une valeur d'un champ de la table
	 * @param  {string}   IdFieldValue [valeur de l'identifiant, Ex: code_...]
	 * @param  {string}   field   [champ a viser]
	 * @param  {string or any}   value   [valeur du champ à viser]
	 * @param  {Function} cb      [callback]
	 * @return {void}           [confirmation]
	 */
	static replaceByOneField (IdFieldValue, field, value, cb) {
		let TABLE = NotificationClient.TABLE()
		let ID = NotificationClient.ID()
		let sql = 'UPDATE '+ TABLE +' SET '+ field +' = ? WHERE '+ ID +' = ?'
		connection.query(sql, [value, IdFieldValue], 
			(err, results) => {
				if (err) throw err
				let msg = "mise à jour effectuée avec succès..."
				cb(msg)
			})
	}

	/**
	 * retourner tout le contenu de la table
	 * @param  {Function} cb [callback]
	 * @return {array}      [tableau contenant les lignes de la table]
	 */
	static all(cb) {
		let TABLE = NotificationClient.TABLE();
		connection.query('SELECT * FROM '+ TABLE +' ', (err, rows) => {
			if (err) throw err
			cb(rows.map((row) => new NotificationClient(row)))
		})
		//connection.end()
	}

	/**
	 * supprimer une ligne de la table
	 * @param  {Object}   row [Objet à viser]
	 * @param  {Function} cb  [CallBack]
	 * @return {void}       [confirmation]
	 */
	static remove(row, cb) {
		let codeNotificationClient = row.codeNotificationClient
		let TABLE = NotificationClient.TABLE()
		let ID = NotificationClient.ID()
		let sql = 'DELETE FROM '+ TABLE +' WHERE '+ ID +' = ?'
		connection.query(sql, [codeNotificationClient], (err, result) => {
			if (err) throw err
			let msg = "NotificationClient supprimé avec succès..."
			cb(msg)
		})
	}
}

module.exports = NotificationClient