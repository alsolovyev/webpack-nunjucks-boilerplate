import greeting from './libs/greeting'


/* The initial HTML document has been completely loaded and parsed */
document.addEventListener('DOMContentLoaded', () => {

})


/**
 * The whole page has been completely loaded, including
 * all dependent resources (stylesheets and images)
 */
window.addEventListener('load', () => {
  /** Greetings, Sire! */
  greeting({ name: 'janeRivas', email: 'solovyev.a@icloud.com' })
})
