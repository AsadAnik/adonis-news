/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router';
import NewsController from '#controllers/news_controller';

/**
 * HOME ROUTE RESOURCES
 */
router.on('/').render('pages/home');

/**
 * ABOUT ROUTE RESOURCES
 */
router.get('/news/create', [NewsController, 'create']).as('news.create');
router.get('/news/:id', [NewsController,'show']).as('news.show');
router.put('/news/:id', [NewsController, 'update']).as('news.update');
router.post('/news', [NewsController,'store']).as('news.store');
router.get('/news', [NewsController, 'index']).as('news.index');

/**
 * ABOUT ROUTE RESOURCES
 */
router.on('/about').render('about');