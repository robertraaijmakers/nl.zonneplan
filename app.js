const Homey = require('homey');

class MyZonneplanApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('MyZonneplanApp has been initialized');
  }

  async activate(email) {
    console.log('email value ',email)
  const res =  await fetch('https://app-api.zonneplan.nl/auth/request', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      referrerPolicy: "no-referrer",
      credentials: "include",
      body: JSON.stringify({ email: email }),
    });
    const resp = await res.json();
    console.log(resp)
  }

}

module.exports = MyZonneplanApp;