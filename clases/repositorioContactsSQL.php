<?php

require_once("repositorioContacts.php");

class RepositorioContactsSQL extends repositorioContacts
{
  protected $conexion;

  public function __construct($conexion)
  {
    $this->conexion = $conexion;
  }

  public function saveInBDD($post)
  {

    if (is_object($post)) {
      $post = (array) $post;
    }

    $sql = "INSERT INTO contacts values(default, :name, :email, :phone, :comments, :origin, :utm_source, :utm_medium, :utm_campaign, :utm_content, :utm_term, :date)";
    $stmt = $this->conexion->prepare($sql);
    $stmt->bindValue(":name", $post['name'], PDO::PARAM_STR);
    $stmt->bindValue(":email", $post['email'], PDO::PARAM_STR);
    $stmt->bindValue(":phone", $post['phone'], PDO::PARAM_STR);
    $stmt->bindValue(":comments", $post['comments'], PDO::PARAM_STR);
    $stmt->bindValue(":origin", $post['origin'], PDO::PARAM_STR);
    $stmt->bindValue(":utm_source", $post['utm_source'], PDO::PARAM_STR);
    $stmt->bindValue(":utm_medium", $post['utm_medium'], PDO::PARAM_STR);
    $stmt->bindValue(":utm_campaign", $post['utm_campaign'], PDO::PARAM_STR);
    $stmt->bindValue(":utm_content", $post['utm_content'], PDO::PARAM_STR);
    $stmt->bindValue(":utm_term", $post['utm_term'], PDO::PARAM_STR);
    $stmt->bindValue(":date", date("F j, Y, g:i a"), PDO::PARAM_STR);

    $save = $stmt->execute();

    return $save;
  }
}
