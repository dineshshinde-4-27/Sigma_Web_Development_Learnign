/*childNode: it select all nodes of document including text and comment node also
textNode:  it basically that area  which comes after element  or
Ex ->  <div></div> ------This area is comes as text Node-------<div></div> 

CommentNode:  it refers to commented part of the DOM .

     document.body.childNodes


Children: it is used to get only html element of document

we can access element by index also:
document.body.children[0]
document.body.children[4]
document.body.children[3]


firstElementChild : it selects  first html element form the document.
document.body.firstElementChild

lastElementChild :  it selects last html element form the document 
document.body.firstElementChild.lastElementChild.style.backgroundColor="green"


firstChild  --> if their first child is not html element then also it select basically it is like child node it's element can be text node comment node and element node

same goes for also lastChild

parentElement : it selects the parent element of particular element.
 ex - document.body.firstElementChild.lastElementChild.parentElement


nextSibling : it  selects next sibling (the element who have same parent ) element  but it can be textNode, commentNode, elementNode.

previousSibling : it  selects previous sibling (the element who have same parent ) element  but it can be textNode, commentNode, elementNode.

To avoid  text node  and comment node  we can use ;
 
 nextElementSibling : it strictly select only next html sibling element .
  previousElementSibling : it strictly select only previous html sibling element . 
*/
