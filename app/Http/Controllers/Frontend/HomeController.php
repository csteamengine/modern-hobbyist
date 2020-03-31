<?php

namespace App\Http\Controllers\Frontend;

use App;
use App\Http\Controllers\Controller;
use App\Models\Job;
use App\Models\Project;
use GuzzleHttp\Client;
use Illuminate\Contracts\View\Factory;
use Illuminate\View\View;
use stdClass;

/**
 * Class HomeController.
 */
class HomeController extends Controller
{
    /**
     * @return View
     */
    public function index()
    {
        $projects = Project::all()->take(10);
        $jobs = Job::all()->take(3);

        $statistics = new stdClass;
        $statistics->videoCount = 0;

        //TODO find a way to test this API call without exposing the API key in GitHub
        if(!App::environment('testing')) {
            $client = new Client();
            $res = $client->get('https://www.googleapis.com/youtube/v3/channels?key=' . env('YOUTUBE_API_KEY') . '&part=statistics&id=' . env('YOUTUBE_CHANNEL_ID'));

            if ($res->getStatusCode() == 200) {
                $statistics = json_decode($res->getBody()->getContents())->items[0]->statistics;
            }
        }

        return view('frontend.index')->withProjects($projects)->withJobs($jobs)->with(['videoCount' => $statistics->videoCount]);
    }

    /**
     * @return Factory|View
     */
    public function about(){
        return view('frontend.about');
    }
}
