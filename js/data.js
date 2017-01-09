/**
 * Created by zhangrxiang on 2016/12/26.
 */

var data = {
    "concepts":"This page discusses some general concepts that will be useful as you begin to explore Drupal.",
    "Profile":"which may have fields like Name, Job Title, Department, Email, Phone Number",
    "taxonomy":" Entity types are used to store and display data, which can be nodes (content), comments, taxonomy terms, user profiles or something custom developed.",
    "represent":"A user is a type of entity which represents a real-world website user",
    "Module":"Core modules are those included with the main download of Drupal. These can be turned on or off without downloading additional components. Examples include Blog, Book, Poll, or Taxonomy.Contributed modules are downloaded from the Modules download section of drupal.org, and installed within your Drupal installation. Examples include Panels, Views or Metatag.Custom modules are modules you write yourself. This requires a thorough understanding of Drupal, PHP programming, and Drupal's API.",
    "Regions ":"Pages on your Drupal site are laid out in Regions. ",
    "Blocks ":"Blocks are discrete chunks of information that are displayed in the regions of your site's pages.",
    "Menus":"The Main menu is built by site administrators and displayed automatically in the page header of many themes (and if not, you can enable their blocks to display them).Management is the administration menu, and is presented in the Admin toolbar.Navigation is a catch-all menu that usually contains links supplied by modules on your site.User menu contains links to the User account and the logout link.",
    "separate":"The Theme layer is separate from the data layer, the functionality extension layer (module) and Core",
    "particular":"Drupal allows each module to define paths that the module will be responsible for, and when you choose to visit a particular path Drupal asks the module what should be displayed on the page.",
    "Bootstrap":"The bootstrap is the CPU (central processing unit) of Drupal",
    "Permissions":"Permissions can be set to control what users have access to view and/or edit particular areas of a site.",
    "pertain-to":"These permissions pertain to registered users (i.e.: administrators, content editors, site members) and non-registered users. ",
    "consider":"Every visitor to your site, whether they have an account and log in or visit the site anonymously, is considered a user to Drupal. Every user also has a numeric user ID special to the type of user.",
    "Anonymous":"If user is not logged in then user is consider as Anonymous user having user ID 0. Otherwise Drupal site visitor has a user id greater then 0. User ID 1 is reserved for Administrator. This is also called master Administrator.",
    "assign":"These users are assigned a user ID when they register for the website.",
    "associate":"Other information can also be associated with users by modules",
    "individual":"In some cases, like for your own computer or for some FTP logins, these \"users\" are individual people. ",
    "compatible":"MySQL and PostgreSQL are the best supported database programs compatible with Drupal.",
    "privilege":"so when you set up a new Drupal site, you (or your web hosting company) create a database user with full privileges and then give the user name and password to the Drupal installation so that Drupal will have full control over the database",
    "prompt":"so when you set up a new Drupal site, you (or your web hosting company) create a database user with full privileges and then give the user name and password to the Drupal installation so that Drupal will have full control over the database",
    "responsibility":"User/1 shouldn't be associated with an individual person, but rather with the person or persons who have the responsibility for keeping software up-to-date on your site.",
    "awkward":"That is so because it is awkward when responsibility for site maintenance done as User/1 needs to change to a new person if the original User/1 wrote content that still needs to be associated with him/her.",
    "navigate":"Other users on your site can be assigned permissions via roles. To do this, you first need to create a role by navigating to people --> permissions --> role.",
    "certain":" Finally, you will grant certain users on your site your new role, which will mean that when those users are logged in, Drupal will let them do the actions you gave that role permission to do.",
    "process":"use this process to add a new or existing field with different field types (such as Image, Tags field etc.) to the user profile:",
    "Alternatively":"(Alternatively, use the direct path in the URL: /admin/config/people/accounts/fields).",
    "various":"In Drupal, each item of content is called a node, and each node belongs to a single content type, which defines various default settings for nodes of that type, such as whether the node is published automatically and whether comments are permitted. ",
    "frequently":"Articles are generally used for information that is updated more frequently and often cross-referenced and categorized (such as news items or resources).",
    "Forum":"A Forum topic defines a topic for a forum discussion; people can reply to the topic by using comments. Forum nodes are organized into subject areas via a Taxonomy (list of categories).",
    "poll":"A poll is a question with a set of possible responses. Once created, a poll automatically provides a simple running count of the number of votes received for each response.",
    "organize":"First, content types lets you organize your site more efficiently. ",
    "parses":"The API module parses documentation and code in PHP files, and it expects documentation to be in a format similar to other code/documentation parsing systems such as PHPDoc, JavaDoc, etc.",
    "originally-evolved":"It was originally based on Doxygen, but it has evolved into something that has its own set of tags and a lot of Drupal-specific functionality.",
    "treats ":"The API module treats files with the following extensions as PHP: .php, .module, .inc, .install, .engine., .theme, .profile, and .test.",
    "In-code":"In-code comment lines starting with // and comment blocks starting with /* are not recognized as docblocks.",
    "normally":"Docblocks normally have * at the beginning of each line, and the API module strips these out when formatting the documentation (see example above).",
    "summary":"The first paragraph of a docblock is known as the summary.",
    "automatically":"The API module automatically turns the names of functions, classes, etc. that it recognizes in documentation text into links to the documentation of those items.",
    "related ":"This section contains standards related to all API docblocks.",
    "General":"General considerations for API module parsing"


};
