import type { HttpContext } from '@adonisjs/core/http';
import db from '@adonisjs/lucid/services/db';

export default class NewsController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    const news = await db.from('news').select('*');
    return view.render('pages/news/index', { news });
  }

  /**
   * Display form to create a new record
   */
  
  create({ view }: HttpContext) { 
    return view.render('pages/news/create');
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, response, session }: HttpContext) {
    const title = request.input('title');
    const content = request.input('content');

    await db.table('news').insert({ title, content });
    session.flash('success', 'News item created successfully');

    return response.redirect('/news');
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const news = await db.from('news').select('*').where('id', params.id);
    return view.render('pages/news/show', { newsDetails: news[0] });
  }

  /**
   * Edit individual record
   */
  // async edit({ params }: HttpContext) { }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const title = request.input('title');
    const content = request.input('content');
    await db.from('news').where('id', params.id).update({ title, content });
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    await db.from('news').where('id', params.id).del();
  }
}