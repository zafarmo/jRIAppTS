jRIAppTS With Generics
======

<b>a RIA framework for building Line of Buisiness (LOB) applications working in HTML5</b>
<br/>
This is a typescript version of the previous <a href="https://github.com/BBGONE/jRIApp" target="_blank">jRIApp framework</a>
You can watch video of the demo on <a href="http://youtu.be/m2lxFWhJghA" target="_blank">YouTube SPA</a>
This branch uses generics introduced in typescript. The primary goal of generics here is to reduce type castings and enhance productivity with better intellisence and design time type checkings. 
The data service now can generate typescript classes from C# classes. This includes typed Dictionaries and Lists. 
See the DEMO project how it is implemented. (DEMODB.ts uses autogenerated code.)
The documentation is ready now and you can read about the framework in more details.

jRIAppTS � is an application framework for developing rich internet applications - RIA�s. It consists of two parts � a client and a server parts. 
The client part was written in typescript language. The server part was  written in C#  and the demo application was implemented in ASP.NET MVC (it can also be written in other languages, for example Ruby or Java, but you have to roll up your sleeves and prepare to write them). 
The Server part resembles Microsoft WCF RIA services, featuring data services which is consumed by the clients. 
The Client part resembles  Microsoft Silverlight client development, only it is based on HTML (not XAML), and uses typescript language for coding.
The framework was designed primarily for creating data centric Line of Business (LOB) applications which will work natively in browsers without the need for plugins .
The framework supports a wide range of essential features for creating LOB applications, such as, declarative use of databindings, integration with a server side dataservice, datatemplates, client side and server side data validation, localization, authorization, and a set of UI controls, like the datagrid, the stackpanel , the dataform and a lot of  utility code.
Unlike many other existing frameworks, which use MVC design pattern, the framework uses Model View View Model (MVVM) design pattern for creating applications. 

The framework was designed for gaining  maximum convenience and performance, and for this sake it works in browsers which support ECMA Script 5.1 level of javascript.

Those browsers include Internet Explorer 9 and above, Mozilla Firefox 4+, Google Chrome 13+, and Opera 11.6+. Because the framework is primarily designed for developing LOB applications, the exclusion of antique browsers does not harm the purpose, and improves framework�s performance and ease of use.

The framework is distinguished from other frameworks available on the market by the
full stack implementation of the features required for building real world  LOB applications in HTML5. It allows the development in strongly typed environment either on the client or on the server.

The Data centric applications are created by using framework's wide range of UI controls.
It allows to work with the server originated data in a transparent and a safe way.

The framework contains a set of controls such as: 
A DataGrid � the control for displaying and editing the data in the table form.  It supports databinding, row selection with keyboard keys, sorting by column, data paging, a detail row, data templates, different column�s types (expander column, row selector column, actions column). For editing it can use�the built-in inline editor, and also has the support for a popup editor which uses a data template for its content display.<br/>
A StackPanel - the control for displaying and editing of the data as a horizontal or vertical list . It uses a data template for its items' display and also has the support for items' selections with the help of keyboard keys and the mouse.<br/>
A ListBox - the control which encapsulates the HTML select tag and attaches to it the logic to draw the data from the collection type datasource.<br/>
A DataForm - the control which bounds a datacontext to a region and allows to use datacontents inside of this region. It also provides for summary error display.<br/>
A DbContext � the control used as a data manager to store the data (DbSets) and to cache changes on the client for submitting them to the dataservice.<br/>

The framework also has a special element view registered by the name dynacontent, which helps to create content regions on the page using data templates. 
The templates in these regions are easily switchable. This feature enables to create single page applications.<br/>

After minification jriapp.js has size about 305 KB. But it can be further gzipped, for it to reach the size of about 69 KB.
In my real world applications i use an ASP.NET MVC 4 bundling feature.

You are welcome to use it in your applications.

<b>Latest changes:</b>
<p>2014-02-07 Implemented views transition animations. The demo was also updated.
P.S. don't forget to clear a browser cache. SPA uses AMD loading and this is a bitch. The browser caches old files.
</p>
<p>2014-02-05<br/>
1) core modules restructuring to remove mutual dependencies between modules - dynacontent, tabs are new modules. 
The datepicker and template modules now contain respective element views.<br/>
2) IEditable and ISubmittable interfaces moved from RIAPP.MOD.utils namespace to the RIAPP namespace. 
So, client side db interfaces needs to be regenerated again, because entities use these interfaces.<br/>
3) Update of the listbox control to correctly handle the situation when the datasource was assinged, and selectedValue was also assigned but the datasource is not filled with data.
 Now, the listbox correctly updates its UI in the situation, when the datasource is filled with the data some time later.<br/>
4) The demo was updated.<br/>
5) The docs were updated.
</p>
<p>2014-02-04 The demo updated to work with jquery 1.10.2, qtip was updated to the version 2. All typescript files were converted to utf-8.
DataGrid was updated. TabsElView was updated. jriapp.css file was updated.
</p>
<p>2014-02-03 jriappTS project now contains the strings used in the framework in a separate file. It contains a folder langs, which can include a different file for each language.
</p>
<p>2014-01-30 Code generation was updated. RIAppDemo project was updated. The SPADemo page now uses requireJS to load user modules.<br/>
Added a <b>spaAMD</b> typescript project which contains user modules only for the SPADemo page (single page application demo).<br/>
The demoTS typescript project contains user modules for all other demo pages.<br/>
</p>
<p>2014-01-28 Listbox control code update.</p>
<p>2014-01-26 Removed global's consts property (it was redundant). Internal code optimization. Docs update - much better fonts and readability.</p>
<p>2014-01-25 Added a new DebugLevel variable to RIAPP module (in order to set a debugging level in the framework). Fixed a bug with the DataView sorting.</p>
<p>2014-01-24 Fixed bug in the ListBox control. Added checks for valid (existing) property names in property change notifications. Updated the DEMO.</p>
<p>2014-01-23 Added the <b>ability to test databindings</b> on the page. For this purpose the global object has a new event handler adding method addOnUnResolvedBinding.
It registers an event handler which will be triggered when the path is not resolved. See the UserGuide.pdf for more info.<br/>
Updated the docs and the demo. 
</p>
--
Maxim V. Tsapov<br/> 
<a href="https://plus.google.com/u/0/+MaximT/posts" target="_blank">I'm on Google+</a>