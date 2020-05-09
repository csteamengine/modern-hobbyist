<?php

use App\Models\Image;
use App\Models\Profile;
use App\Models\ProfileImage;
use Illuminate\Database\Seeder;

class ProfilesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $firstProfile = Profile::create([
            'title' => 'First Profile',
            'name' => 'Charlie Steenhagen',
            'about_title' => 'Software Engineer, Web Developer, Maker',
            'short_about_description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis mi, elementum at cursus et, hendrerit ac lectus.',
            'about_page_content' => '
                <div class="row mt-3 mb-5">
                    <div class="col-10 m-auto">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida tristique euismod.
                            Proin vel convallis dui. Maecenas vitae ultrices lectus. Donec nulla felis, euismod vitae hendrerit
                            vel, aliquam eu metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse
                            platea dictumst. Nunc gravida sapien enim, eget finibus est pharetra quis. In non elementum nisi.
                            Phasellus feugiat, magna nec consequat vestibulum, massa neque dictum ante, id venenatis dolor
                            diam sed nisi. Duis ante neque, tristique vel orci id, ultrices convallis est. Aliquam non placerat
                            urna, ut vehicula elit. In porta leo massa, sed vulputate lacus ornare in. Praesent metus dui,
                            iaculis quis vehicula non, placerat sit amet ligula.
                        </p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col m-auto text-center">
                        <h2>Modern Hobbyist</h2>
                    </div>
                </div>
                <div class="row mt-5 mb-5">
                    <div class="col-12 col-sm-10 m-auto">
                        <div class="row">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida tristique euismod.
                                Proin vel convallis dui. Maecenas vitae ultrices lectus. Donec nulla felis, euismod vitae hendrerit
                                vel, aliquam eu metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse
                                platea dictumst. Nunc gravida sapien enim, eget finibus est pharetra quis. In non elementum nisi.
                                Phasellus feugiat, magna nec consequat vestibulum, massa neque dictum ante, id venenatis dolor
                                diam sed nisi. Duis ante neque, tristique vel orci id, ultrices convallis est. Aliquam non placerat
                                urna, ut vehicula elit. In porta leo massa, sed vulputate lacus ornare in. Praesent metus dui,
                                iaculis quis vehicula non, placerat sit amet ligula.
                            </p>
                        </div>
                    </div>
                </div>',
            'is_active' => true,
            'maintenance_mode_active' => false,
            'contact_form_active' => true,
            'resume_download_active' => true,
            'background_video_active' => true,
            'contact_email' => 'modhobbyist@gmail.com',
            'resume_file' => '/resumes/resume1.pdf',
            'background_video_file' => '/background_videos/CAD2.mp4',
            'image_id' => 1,
            'github_url' => 'www.test.com',
            'youtube_url' => 'www.test.com',
            'instagram_url' => 'www.test.com'
        ]);

        $secondProfile = Profile::create([
            'title' => 'Second Profile',
            'name' => 'Charlie Steenhagen',
            'about_title' => 'Software Engineer, Web Developer, Maker',
            'short_about_description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus turpis mi, elementum at cursus et, hendrerit ac lectus.',
            'about_page_content' => '
                <div class="row mt-3 mb-5">
                    <div class="col-10 m-auto">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida tristique euismod.
                            Proin vel convallis dui. Maecenas vitae ultrices lectus. Donec nulla felis, euismod vitae hendrerit
                            vel, aliquam eu metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse
                            platea dictumst. Nunc gravida sapien enim, eget finibus est pharetra quis. In non elementum nisi.
                            Phasellus feugiat, magna nec consequat vestibulum, massa neque dictum ante, id venenatis dolor
                            diam sed nisi. Duis ante neque, tristique vel orci id, ultrices convallis est. Aliquam non placerat
                            urna, ut vehicula elit. In porta leo massa, sed vulputate lacus ornare in. Praesent metus dui,
                            iaculis quis vehicula non, placerat sit amet ligula.
                        </p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col m-auto text-center">
                        <h2>Modern Hobbyist</h2>
                    </div>
                </div>
                <div class="row mt-5 mb-5">
                    <div class="col-12 col-sm-10 m-auto">
                        <div class="row">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque gravida tristique euismod.
                                Proin vel convallis dui. Maecenas vitae ultrices lectus. Donec nulla felis, euismod vitae hendrerit
                                vel, aliquam eu metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse
                                platea dictumst. Nunc gravida sapien enim, eget finibus est pharetra quis. In non elementum nisi.
                                Phasellus feugiat, magna nec consequat vestibulum, massa neque dictum ante, id venenatis dolor
                                diam sed nisi. Duis ante neque, tristique vel orci id, ultrices convallis est. Aliquam non placerat
                                urna, ut vehicula elit. In porta leo massa, sed vulputate lacus ornare in. Praesent metus dui,
                                iaculis quis vehicula non, placerat sit amet ligula.
                            </p>
                        </div>
                    </div>
                </div>',
            'is_active' => false,
            'maintenance_mode_active' => false,
            'contact_form_active' => true,
            'resume_download_active' => true,
            'background_video_active' => true,
            'contact_email' => 'modhobbyist@gmail.com',
            'resume_file' => '/resumes/resume2.pdf',
            'background_video_file' => '/background_videos/CAD-final.mp4',
            'image_id' => 1,
            'github_url' => 'www.test.com',
            'youtube_url' => 'www.test.com',
            'instagram_url' => 'www.test.com'
        ]);

        $firstImage = Image::create([
            'url' => env('APP_URL').'/storage/images/projects/0ff0oBXX1lT3FXWdLTpCFmaHoKW0p1WCHCILkkYr.jpeg',
            'small_url' => 'images/projects/0ff0oBXX1lT3FXWdLTpCFmaHoKW0p1WCHCILkkYr.jpeg',
            'color' => '000000',
        ]);

        $secondImage = Image::create([
            'url' => env('APP_URL').'/storage/images/projects/0HSr8Xf1UKf7T3xgx1YRYHFwEDe1cTFYdfrbTPYb.jpeg',
            'small_url' => 'images/projects/0HSr8Xf1UKf7T3xgx1YRYHFwEDe1cTFYdfrbTPYb.jpeg',
            'color' => '000000',
        ]);

        ProfileImage::create([
            'profile_id' => $firstProfile->id,
            'image_id' => $firstImage->id,
            'is_active' => true,
        ]);

        ProfileImage::create([
            'profile_id' => $secondProfile->id,
            'image_id' => $secondImage->id,
            'is_active' => true,
        ]);

    }
}
