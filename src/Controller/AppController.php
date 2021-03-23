<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AppController extends AbstractController
{

  #[Route('/{entry}', name: 'app.entry')]
  public function app() : Response
  {
    return $this->render('base.html.twig');
  }

}