import { Migration } from '@mikro-orm/migrations';

export class Migration20210602175209 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `task` (`id` integer not null primary key autoincrement, `name` varchar not null, `description` varchar not null, `status` text check (`status` in (\'OPEN\', \'IN_PROGRESS\', \'DONE\')) not null);');
  }

}
