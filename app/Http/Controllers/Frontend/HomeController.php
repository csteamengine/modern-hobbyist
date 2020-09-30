<?php

namespace App\Http\Controllers\Frontend;

use App;
use App\Http\Controllers\Controller;
use App\Models\Job;
use App\Models\Project;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\ClientException;
use GuzzleHttp\Exception\RequestException;
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
        $projects = Project::orderBy('created_at', 'desc')->get();
        $jobs = Job::orderBy('started_at', 'desc')->take(3)->get();

        $statistics = new stdClass;

        if(!App::environment('testing')) {
            try {
                $client = new Client();
                $res = $client->get('https://www.googleapis.com/youtube/v3/channels?key=' . env('YOUTUBE_API_KEY') . '&part=statistics&id=' . env('YOUTUBE_CHANNEL_ID'));

                $statistics = json_decode($res->getBody()->getContents())->items[0]->statistics;
            } catch (RequestException $e) {
                $statistics->videoCount = 0;
            } catch (\Exception $e) {
                $statistics->videoCount = 0;
            }
        }else{
            $statistics->videoCount = 0;
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
