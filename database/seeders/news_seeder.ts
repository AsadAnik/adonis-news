import { BaseSeeder } from '@adonisjs/lucid/seeders';
import News from '#models/news';

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    // Clear existing data
    await News.query().delete();

    // Seed new data..
    await News.createMany([
      { title: 'News 1', content: 'Content 1', authorId: '1' },
      { title: 'News 2', content: 'Content 2', authorId: '1' },
      { title: 'News 3', content: 'Content 3', authorId: '1' },
    ]);
  }
}