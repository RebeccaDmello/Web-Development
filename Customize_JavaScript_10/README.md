Using JavaSript to create a customizable output

In these project, the generated output is based on the input provided by the user. For example, if the user selects small size than the image will be displayed in small size. 
All these changes are performed using JavaScript i.e the CSS properties are set using JavaScript such as setAttribute function which sets attributes of the targetted element.

```ruby
if(imgRadio == "banana_split") {
        document.getElementById("figid").innerText = "Yummy Banana Split";
        document.getElementById("imgDisplay").setAttribute('src', 'images/banana_split.jpg');
}
```

![Capture2](https://user-images.githubusercontent.com/32956051/104037071-133bfd00-5189-11eb-80fd-03aa66c6b5ca.PNG)
![Capture3](https://user-images.githubusercontent.com/32956051/104037076-146d2a00-5189-11eb-816a-940530bec3d1.PNG)
![Capture](https://user-images.githubusercontent.com/32956051/104037079-146d2a00-5189-11eb-9dff-562bec90f295.PNG)
