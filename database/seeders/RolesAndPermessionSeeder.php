<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class RolesAndPermessionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        Permission::create(['name' => 'edit products']);
        Permission::create(['name' => 'delete products']);
        Permission::create(['name' => 'view products']);
        Permission::create(['name' => 'create products']);


        Permission::create(['name' => 'edit orders']);
        Permission::create(['name' => 'delete orders']);
        Permission::create(['name' => 'view orders']);
        Permission::create(['name' => 'create orders']);

        Permission::create(['name' => 'view users']);
        Permission::create(['name' => 'edit users']);

        $adminRole = Role::create(['name' => 'admin']);
        $adminRole->givePermissionTo([
            'edit products',
            'delete products',
            'view products',
            'create products',
            'edit orders',
            'delete orders',
        ]);

    }
}
