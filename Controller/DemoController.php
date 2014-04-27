<?php

namespace StudioArtlan\SyngDemoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;

// these import the "@Route" and "@Template" annotations
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

class DemoController extends Controller
{

    /**
     * @Route("/product/{id}")
	 * @Route("/product/")
     * @Template()
	 * @Method({"POST", "GET"})
     */
    public function productAction($id = null)
    {
        return array('id' => $id);
    }


    /**
     * @Route("/")
	 * @Template()
     * @Method({"POST", "GET"})
     */
    public function indexAction()
    {
        return array( 'ngAppConfig' => $this->get('studioartlan.syng_config')->getNgAppConfig() );
    }

}
