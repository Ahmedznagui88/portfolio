<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class MusicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $data = [
            [
                'title' => 'Json',
                'artist' => 'MedZnag',
                'cover' => '/img/red_ocean.avif',
                'duration' => '1:39',
                'file' => '/media/Nadine.mp3',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [

                'title' => 'N127',
                'artist' => 'GroundBeat',
                'cover' => '/img/black ocean.avif',
                'duration' => '4:06',
                'file' => '/media/N127.mp3',
                'created_at' => now(),
                'updated_at' => now(),
            ], 

            [
                'title' => 'Fort greene',
                'artist' => 'GroundBeat',
                'cover' => '/img/jazz street.avif',
                'duration' => '1:27',
                'file' => '/media/Ground Beat - Fort greene_MASTER_KS_44.1kHz_16bit.mp3',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'title' => 'Gaza',
                'artist' => 'MedZnag',
                'cover' => '/img/gaza.png',
                'duration' => '2:24',
                'file' => '/media/Gaza.mp3',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'title' => 'Broda',
                'artist' => 'GroundBeat',
                'cover' => '/img/Los Angeles 1.jpg',
                'duration' => '2:14',
                'file' => '/media/GroundBeat - Broda_MASTER_KS_44.1kHz_16bit.mp3',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'title' => 'Zina Blue',
                'artist' => 'MedZnag',
                'cover' => '/img/zina blue.avif',
                'duration' => '2:24',
                'file' => '/media/Medzang - Zina Blue _MASTEr_KS_44.1KHz_16bit.mp3',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            
            [
                'title' => 'Res',
                'artist' => 'MedZnag',
                'cover' => '/img/reggio.JPG',
                'duration' => '1:57',
                'file' => '/media/Parigi.mp3',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [

                'title' => 'Silence',
                'artist' => 'MedZnag',
                'cover' => '/img/silence.jpeg',
                'duration' => '1:39',
                'file' => '/media/Yez 1.mp3',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'title' => 'Free',
                'artist' => 'MedZnag',
                'cover' => '/img/insomnia.jpeg',
                'duration' => '1:17',
                'file' => '/media/Almeida.mp3',
                'created_at' => now(),
                'updated_at' => now(),
            ],

            [
                'title' => 'Berlin',
                'artist' => 'MedZnag',
                'cover' => '/img/berlin.jpeg',
                'duration' => '2:17',
                'file' => '/media/My neck.mp3',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ];
    
        DB::table('music')->insert($data);

    }
}
