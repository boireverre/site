<%-- 
    Document   : header
    Created on : 19 mai 2012, 00:12:35
    Author     : midix
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>boire-un-verre.Fr</title>

        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="http://code.jquery.com/ui/1.8.18/themes/base/jquery-ui.css" media="all" />
        <link rel="stylesheet" href="http://static.jquery.com/ui/css/demo-docs-theme/ui.theme.css" media="all" />
        <link href="http://fonts.googleapis.com/css?family=Della+Respira" rel="stylesheet">
        <script src="js/script.js"></script>
        <script src="http://www.openlayers.org/api/OpenLayers.js"></script>
    </head>
    <body>
        <header id="connection">
            <div id="logo">
            </div>
        </header>
        <div id="connection-panel">
            <div id="connect">
                <form id="connection-form">
                    <table>
                        <tr>
                            <td colspan="2" class="connect-title">
                                Connexion
                            </td>
                            <td>
                                <label for="login">Identifiant : </label>
                            </td>
                            <td>
                                <input type="text" name="login"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="password">Mot de passe : </label>
                            </td>
                            <td>
                                <input type="password" name="password"/>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>

        <footer>
            <ul>
                <li><a href="annonceurs.jsp">Espace annonceurs</a></li>
                <li><a href="condition-generales.jsp">Conditions générales de vente</a></li>
                <li><a href="mentions.jsp">Mentions légales</a></li>
            </ul>
        </footer> 
    </body>
</html>

