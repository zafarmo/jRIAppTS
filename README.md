jRIAppTS With Generics
======

<b>RIA application framework for building LOB applications</b>
<br/>
This is a typescript version of the previous <a href="https://github.com/BBGONE/jRIApp" target="_blank">jRIApp framework</a>
You can watch video of the demo on <a href="http://youtu.be/m2lxFWhJghA" target="_blank">YouTube SPA</a>
This branch uses generics introduced in typescript. The primary goal of generics here is to reduce type castings and enhance productivity
with better intellisence and design time type checkings. 
The data service now can generate typescript classes from C# classes. This includes typed Dictionaries and Lists. 
See the DEMO project how it is implemented. (DEMODB.ts uses autogenerated code.)
<br/>
 <b>P.S.- Now i'm writing documentation for the framework. I hope i will finish this work soon.</b>
<br/>
jRIAppTS � is application framework for developing rich internet applications - RIA�s. It consists of two parts � the client and the server parts. The client part was written in typescript language. The server part was  written in C#  and the demo application was implemented in ASP.NET MVC (it can also be written in other languages, for example Ruby or Java, but you have to roll up your sleeves and prepare to write them). 
The Server part resembles Microsoft WCF RIA services, featuring data services which is consumed by the clients. 
The Client part resembles  Microsoft Silverlight client development, only it is based on HTML (not XAML), and uses typescript language for the coding.
The framework was designed primarily for creating data centric Line of Business (LOB) applications which will work natively in browsers without the need for plugins .
The framework supports wide range of essential features for creating LOB applications, such as, declarative use of data bindings, integration with the server side service, data templates, client and server side data validation, localization, authorization, and a set of GUI controls, like the datagrid, the stackpanel , the dataform and a lot of  utility code.
Unlike many other existing frameworks, which use MVC design pattern, the framework uses Model View View Model (MVVM) design pattern for creating applications. The use of data bindings and view models resembles Microsoft Silverlight data bindings style used in the XAML.

The framework was designed for gaining  maximum convenience and performance, and for this sake it works in browsers which support ECMA Script 5.1 level of javascript and has features like native property setters and getters.

The supported browsers are Internet Explorer 9 and above, Mozilla Firefox 4+, Google Chrome 13+, and Opera 11.6+. Because the framework is primarily designed for developing LOB applications, the exclusion of antique browsers does not harm the purpose, and improves framework�s performance and ease of use.

The framework is distinguished from other frameworks available on the market by its 
full stack implementation of the features required for building real world  LOB applications in HTML5.
It has the server side component - the data service. It has GUI controls that are aware of the events raised by data centric objects like the DbSet and the Entity. 

For the creation of data centric applications the framework has GUI controls for working with the server originated data, with editing support, and submitting changes to the server with the data passing through the data validation and authorization stages of the data processing, then returning autogenerated field values - such as primary keys, timestamp values to the client. The framework includes the ability to track changes (auditing) and do the error logging.

For this very purpose the framework contains a set of user controls such as: 
DataGrid � the control for displaying and editing of the data in the table form.  It supports databinding, row selection with keyboard keys, column sorting, data paging, a detail row, data templates, different column�s types (expander column, row selector column, actions column). For editing it can use�the builtin inline editor, and has the support for a popup editor which can be designed with the help of a data template. 
StackPanel - the control for displaying and editing of the data as a horizontal or vertical list with the help of a data template and the support for item selections with keyboard keys.
ListBox - the control integrates HTML select tag with the collection�s data for displaying options.
DataForm - the control for displaying and editing of the data item with the help of a data template.
DbContext � the control used as a data manager to store collections of data (DbSets) and to cache changes on the client for submitting them to the server backend.

It has also special element view registered by the name dynacontent, which helps to create templated content regions on a page. The templates in these regions are easily switchable. This feature enables to create real world single page applications.

This is just an overview of the main features, they and the other ones will be discussed in more details later in this user guide.

After minification jriapp.js has size about 290 KB. But it can be further gzipped, for it to reach the size of about 65 KB.
In my real world applications i use ASP.NET MVC 4 bundling feature. For desktop applications it will suffice.

You are welcome to use it in your applications.

<b>Latest changes:</b>

<p>2013-07-30   Bug fix in a dataform usage inside templates. Corrected data bindings in these cases.</p>
<p>2013-07-30   The DataService class enhancements.Now besides getting typescript like, for example, http://YOURSERVER/RIAppDemoService/GetTypeScript<br/>
The DataService now exposes two other methods to get XAML version of the metadata and C# implementation of the dataservice's methods.<br/>
 You can test them in the DEMO using<br/>
 http://YOURSERVER/RIAppDemoService/GetXAML<br/>
 http://YOURSERVER/RIAppDemoService/GetCSharp
</p>
<p>2013-08-31  Published generics version of the framework - <b>tested to work and to be compilable with 0.9.1.1 version of the compiler.</b></p>
<p>2013-09-07  Improved typed List and Dictionary code generation, to include properties' data types.</p>
<p>2013-09-09  List and Dictionary code modifications</p>
<p>2013-09-20  CSharp enums to typescript enums dataservice's code generation</p>
<p>2013-09-25  Bug fix in the datagrid</p>
<p>2013-10-19  Improvements in the code generation</p>
<p>2013-11-13  Changes in dataservice's query methods. Now, they don't accept GetDataInfo parameter as a method's argument!
It is accessible now through dataservice's CurrentQueryInfo property. See demo detaservice for example.</p>
<p>2013-11-14  Improvements in the dataservice's code. Now query methods and service methods can accept complex type arguments. Fixed bug in dataservice's authorizer class. Improved code generation.</p>
<p>2013-11-23  Updated jriappTS code to be compilable using typescript 0.95 beta compiler</p>
--
Maxim V. Tsapov<br/>
Moscow, Russian Federation<br/> 
<a href="https://plus.google.com/u/0/102838307743207067758/about?tab=wX" target="_blank">I'm on Google+</a>