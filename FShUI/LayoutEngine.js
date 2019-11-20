(function()
{
 "use strict";
 var Global,FsRootDll,Library,StringId,GuidId,Dict,WebSharper,Obj,Monads,State,CEBuilder,Operators,Result,Builder,Operators$1,Depend,DependBuilder,Operators$2,String,ParseO,LibraryJS,View,Var,ListModel,REGEX,Hoverable,Hoverable$1,ResizeObserver,WebComponent,WcTabStrip,WcTabStripT,WcSplitter,WcSplitterT,AppFrameworkTemplate,AppFramework,PlgElemName,PlugInName,PlugInVar,PlugInView,PlugInDoc,PlugInAction,PlugInQuery,PlugIn,PlugInBuilder,Fun,P,Val,AAttr,Extract0,ListModelData,LM,LMX,StartAppFramework,LayoutEngine,LayoutEngineModule,Measures,Syntax,RefType,Layout,NewLY,P$1,SC$1,LayoutEngine_GeneratedPrintf,LayoutEngine_Templates,GeneratedPrintf,IntelliFactory,Runtime,Enumerator,Result$1,Arrays,List,Operators$3,Strings,Seq,Utils,Slice,Char,Unchecked,CancellationTokenSource,Concurrency,console,UI,View$1,Var$1,Collections,FSharpSet,FromView,Doc,DomUtility,AttrModule,AttrProxy,Var$2,Node,Client,Templates,Reflect,Object,Lazy,Templating,Runtime$1,Server,ProviderBuilder,Handler,TemplateInstance,ListModel$1,System,Guid,FSharpMap,Math,Dictionary,MatchFailureException,DateUtil,Numeric,Attrs,Date;
 Global=self;
 FsRootDll=Global.FsRootDll=Global.FsRootDll||{};
 Library=FsRootDll.Library=FsRootDll.Library||{};
 StringId=Library.StringId=Library.StringId||{};
 GuidId=Library.GuidId=Library.GuidId||{};
 Dict=Library.Dict=Library.Dict||{};
 WebSharper=Global.WebSharper;
 Obj=WebSharper&&WebSharper.Obj;
 Monads=Library.Monads=Library.Monads||{};
 State=Monads.State=Monads.State||{};
 CEBuilder=State.CEBuilder=State.CEBuilder||{};
 Operators=State.Operators=State.Operators||{};
 Result=Monads.Result=Monads.Result||{};
 Builder=Result.Builder=Result.Builder||{};
 Operators$1=Result.Operators=Result.Operators||{};
 Depend=Monads.Depend=Monads.Depend||{};
 DependBuilder=Depend.DependBuilder=Depend.DependBuilder||{};
 Operators$2=Depend.Operators=Depend.Operators||{};
 String=Library.String=Library.String||{};
 ParseO=Library.ParseO=Library.ParseO||{};
 LibraryJS=FsRootDll.LibraryJS=FsRootDll.LibraryJS||{};
 View=LibraryJS.View=LibraryJS.View||{};
 Var=LibraryJS.Var=LibraryJS.Var||{};
 ListModel=LibraryJS.ListModel=LibraryJS.ListModel||{};
 REGEX=LibraryJS.REGEX=LibraryJS.REGEX||{};
 Hoverable=LibraryJS.Hoverable=LibraryJS.Hoverable||{};
 Hoverable$1=Hoverable.Hoverable=Hoverable.Hoverable||{};
 ResizeObserver=LibraryJS.ResizeObserver=LibraryJS.ResizeObserver||{};
 WebComponent=LibraryJS.WebComponent=LibraryJS.WebComponent||{};
 WcTabStrip=WebComponent.WcTabStrip=WebComponent.WcTabStrip||{};
 WcTabStripT=WcTabStrip.WcTabStripT=WcTabStrip.WcTabStripT||{};
 WcSplitter=WebComponent.WcSplitter=WebComponent.WcSplitter||{};
 WcSplitterT=WcSplitter.WcSplitterT=WcSplitter.WcSplitterT||{};
 AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate=LibraryJS.AppFrameworkTemplate||{};
 AppFramework=LibraryJS.AppFramework=LibraryJS.AppFramework||{};
 PlgElemName=AppFramework.PlgElemName=AppFramework.PlgElemName||{};
 PlugInName=AppFramework.PlugInName=AppFramework.PlugInName||{};
 PlugInVar=AppFramework.PlugInVar=AppFramework.PlugInVar||{};
 PlugInView=AppFramework.PlugInView=AppFramework.PlugInView||{};
 PlugInDoc=AppFramework.PlugInDoc=AppFramework.PlugInDoc||{};
 PlugInAction=AppFramework.PlugInAction=AppFramework.PlugInAction||{};
 PlugInQuery=AppFramework.PlugInQuery=AppFramework.PlugInQuery||{};
 PlugIn=AppFramework.PlugIn=AppFramework.PlugIn||{};
 PlugInBuilder=AppFramework.PlugInBuilder=AppFramework.PlugInBuilder||{};
 Fun=AppFramework.Fun=AppFramework.Fun||{};
 P=AppFramework.P=AppFramework.P||{};
 Val=AppFramework.Val=AppFramework.Val||{};
 AAttr=AppFramework.AAttr=AppFramework.AAttr||{};
 Extract0=AppFramework.Extract0=AppFramework.Extract0||{};
 ListModelData=AppFramework.ListModelData=AppFramework.ListModelData||{};
 LM=LibraryJS.LM=LibraryJS.LM||{};
 LMX=LibraryJS.LMX=LibraryJS.LMX||{};
 StartAppFramework=LibraryJS.StartAppFramework=LibraryJS.StartAppFramework||{};
 LayoutEngine=LibraryJS.LayoutEngine=LibraryJS.LayoutEngine||{};
 LayoutEngineModule=LibraryJS.LayoutEngineModule=LibraryJS.LayoutEngineModule||{};
 Measures=LayoutEngineModule.Measures=LayoutEngineModule.Measures||{};
 Syntax=LayoutEngineModule.Syntax=LayoutEngineModule.Syntax||{};
 RefType=Syntax.RefType=Syntax.RefType||{};
 Layout=LayoutEngineModule.Layout=LayoutEngineModule.Layout||{};
 NewLY=LibraryJS.NewLY=LibraryJS.NewLY||{};
 P$1=NewLY.P=NewLY.P||{};
 SC$1=Global.StartupCode$LayoutEngine$LayoutEngine=Global.StartupCode$LayoutEngine$LayoutEngine||{};
 LayoutEngine_GeneratedPrintf=Global.LayoutEngine_GeneratedPrintf=Global.LayoutEngine_GeneratedPrintf||{};
 LayoutEngine_Templates=Global.LayoutEngine_Templates=Global.LayoutEngine_Templates||{};
 GeneratedPrintf=Global.GeneratedPrintf=Global.GeneratedPrintf||{};
 IntelliFactory=Global.IntelliFactory;
 Runtime=IntelliFactory&&IntelliFactory.Runtime;
 Enumerator=WebSharper&&WebSharper.Enumerator;
 Result$1=WebSharper&&WebSharper.Result;
 Arrays=WebSharper&&WebSharper.Arrays;
 List=WebSharper&&WebSharper.List;
 Operators$3=WebSharper&&WebSharper.Operators;
 Strings=WebSharper&&WebSharper.Strings;
 Seq=WebSharper&&WebSharper.Seq;
 Utils=WebSharper&&WebSharper.Utils;
 Slice=WebSharper&&WebSharper.Slice;
 Char=WebSharper&&WebSharper.Char;
 Unchecked=WebSharper&&WebSharper.Unchecked;
 CancellationTokenSource=WebSharper&&WebSharper.CancellationTokenSource;
 Concurrency=WebSharper&&WebSharper.Concurrency;
 console=Global.console;
 UI=WebSharper&&WebSharper.UI;
 View$1=UI&&UI.View;
 Var$1=UI&&UI.Var;
 Collections=WebSharper&&WebSharper.Collections;
 FSharpSet=Collections&&Collections.FSharpSet;
 FromView=UI&&UI.FromView;
 Doc=UI&&UI.Doc;
 DomUtility=UI&&UI.DomUtility;
 AttrModule=UI&&UI.AttrModule;
 AttrProxy=UI&&UI.AttrProxy;
 Var$2=UI&&UI.Var$1;
 Node=Global.Node;
 Client=UI&&UI.Client;
 Templates=Client&&Client.Templates;
 Reflect=Global.Reflect;
 Object=Global.Object;
 Lazy=WebSharper&&WebSharper.Lazy;
 Templating=UI&&UI.Templating;
 Runtime$1=Templating&&Templating.Runtime;
 Server=Runtime$1&&Runtime$1.Server;
 ProviderBuilder=Server&&Server.ProviderBuilder;
 Handler=Server&&Server.Handler;
 TemplateInstance=Server&&Server.TemplateInstance;
 ListModel$1=UI&&UI.ListModel;
 System=Global.System;
 Guid=System&&System.Guid;
 FSharpMap=Collections&&Collections.FSharpMap;
 Math=Global.Math;
 Dictionary=Collections&&Collections.Dictionary;
 MatchFailureException=WebSharper&&WebSharper.MatchFailureException;
 DateUtil=WebSharper&&WebSharper.DateUtil;
 Numeric=WebSharper&&WebSharper.Numeric;
 Attrs=UI&&UI.Attrs;
 Date=Global.Date;
 StringId=Library.StringId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,StringId);
 GuidId=Library.GuidId=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,GuidId);
 Dict.add=function(key,v,dict)
 {
  if(dict.ContainsKey(key))
   dict.set_Item(key,v);
  else
   dict.Add(key,v);
 };
 CEBuilder=State.CEBuilder=Runtime.Class({
  Delay:function(f)
  {
   return f();
  },
  Return:function(v)
  {
   return function(s)
   {
    return State.rtn(v,s);
   };
  },
  Bind:function(m,f)
  {
   return function(s)
   {
    return State.bind(f,m,s);
   };
  }
 },Obj,CEBuilder);
 CEBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },CEBuilder);
 Operators.op_BarGreaterGreater=function(ma,f)
 {
  return(State.map(f))(ma);
 };
 Operators.op_GreaterGreaterEquals=function(ma,f)
 {
  return function(s)
  {
   return State.bind(f,ma,s);
  };
 };
 State.state=function()
 {
  SC$1.$cctor();
  return SC$1.state;
 };
 State.map=function(f)
 {
  var f$1;
  f$1=function(x)
  {
   var $1;
   $1=f(x);
   return function($2)
   {
    return State.rtn($1,$2);
   };
  };
  return(Runtime.Curried3(State.bind))(f$1);
 };
 State.bind=function(f,ma,s1)
 {
  var p;
  p=ma(s1);
  return(f(p[1]))(p[0]);
 };
 State.rtn=function(v,s)
 {
  return[s,v];
 };
 Builder=Result.Builder=Runtime.Class({
  For:function(sequence,body)
  {
   var $this;
   $this=this;
   return this.Using(Enumerator.Get(sequence),function(_enum)
   {
    return $this.While(function()
    {
     return _enum.MoveNext();
    },$this.Delay(function()
    {
     return body(_enum.Current());
    }));
   });
  },
  While:function(guard,body)
  {
   function whileLoop(guard$1,body$1)
   {
    return guard$1()?Result$1.Bind(function()
    {
     return whileLoop(guard$1,body$1);
    },body$1()):Result.rtn();
   }
   return whileLoop(guard,body);
  },
  Using:function(disposable,body)
  {
   try
   {
    return body(disposable);
   }
   finally
   {
    disposable.Dispose();
   }
  },
  TryFinally:function(body,compensation)
  {
   try
   {
    return body();
   }
   finally
   {
    compensation();
   }
  },
  TryWith:function(body,handler)
  {
   try
   {
    return body();
   }
   catch(e)
   {
    return handler(e);
   }
  },
  Run:function(f)
  {
   return Result$1.Bind(f,{
    $:0,
    $0:null
   });
  },
  Combine:function(a,b)
  {
   return Result$1.Bind(b,a);
  },
  Delay:Global.id,
  Zero:function()
  {
   return Result.rtn();
  },
  Bind:function(w,r)
  {
   return Result$1.Bind(r,w);
  },
  ReturnFrom:Global.id,
  Return:function(x)
  {
   return Result.rtn(x);
  }
 },Obj,Builder);
 Builder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },Builder);
 Operators$1.result=function()
 {
  SC$1.$cctor();
  return SC$1.result$1;
 };
 Operators$1.rtn=function(v)
 {
  return Result.rtn(v);
 };
 Operators$1.op_GreaterEqualsGreater=function(f,g,v)
 {
  return Operators$1.op_GreaterGreaterEquals(f(v),g);
 };
 Operators$1.op_RightShift=function(f,g,v)
 {
  return Operators$1.op_BarGreaterGreater(f(v),g);
 };
 Operators$1.op_GreaterGreaterEquals=function(v,f)
 {
  return Result$1.Bind(f,v);
 };
 Operators$1.op_BarGreaterGreater=function(v,f)
 {
  return Result$1.Map(f,v);
 };
 Result.result=function()
 {
  SC$1.$cctor();
  return SC$1.result;
 };
 Result.sequenceSeq=function(sq)
 {
  return Result.traverseSeq(Global.id,sq);
 };
 Result.traverseSeq=function(f,sq)
 {
  return Result$1.Map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return Result.op_GreaterGreaterEquals(f(head),function(h)
   {
    return Result.op_GreaterGreaterEquals(tail,function(t)
    {
     return Result.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),Result.rtn(List.T.Empty)));
 };
 Result.op_GreaterGreaterEquals=function(r,f)
 {
  return Result$1.Bind(f,r);
 };
 Result.absorbO=function(f,vOR)
 {
  return Result$1.Bind(function(v)
  {
   return Result.ofOption(f,v);
  },vOR);
 };
 Result.insertO=function(vRO)
 {
  var o;
  o=vRO==null?null:{
   $:1,
   $0:Result$1.Map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },vRO.$0)
  };
  return o==null?{
   $:0,
   $0:null
  }:o.$0;
 };
 Result.ofOption=function(f,vO)
 {
  var o;
  o=vO==null?null:{
   $:1,
   $0:{
    $:0,
    $0:vO.$0
   }
  };
  return o==null?function(x)
  {
   return Library.Error(f(x));
  }():o.$0;
 };
 Result.get=function(r)
 {
  return Result.defaultWith(function(x)
  {
   return Operators$3.FailWith(Global.String(x));
  },r);
 };
 Result.iter=function(fE,f,r)
 {
  Result.defaultWith(fE,Result$1.Map(f,r));
 };
 Result.failIfFalse=function(m,v)
 {
  return!v?Library.Error(m):{
   $:0,
   $0:null
  };
 };
 Result.failIfTrue=function(m,v)
 {
  return v?Library.Error(m):{
   $:0,
   $0:null
  };
 };
 Result.defaultValue=function(d,r)
 {
  return r.$==1?d:r.$0;
 };
 Result.defaultWith=function(f,r)
 {
  return r.$==1?f(r.$0):r.$0;
 };
 Result.toOption=function(r)
 {
  return r.$==0?{
   $:1,
   $0:r.$0
  }:null;
 };
 Result.flatten=function(r)
 {
  return Result$1.Bind(Global.id,r);
 };
 Result.join=function(r)
 {
  return Result$1.Bind(Global.id,r);
 };
 Result.rtn=function(a)
 {
  return{
   $:0,
   $0:a
  };
 };
 Result.errorf=function(fmt)
 {
  return fmt(Library.Error);
 };
 DependBuilder=Depend.DependBuilder=Runtime.Class({
  Delay:function(f)
  {
   return f();
  },
  Return:function(v)
  {
   return Depend.rtn(v);
  },
  Bind:function(m,f)
  {
   return Depend.bind(f,m);
  }
 },Obj,DependBuilder);
 DependBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },DependBuilder);
 Operators$2.op_GreaterMultiplyGreater=function(g,mf)
 {
  var b;
  b=Operators$2.depend();
  return b.Delay(function()
  {
   return b.Bind(mf,function(a)
   {
    return b.Return(function(x)
    {
     return a(g(x));
    });
   });
  });
 };
 Operators$2.op_LessMultiplyGreater=function(mf,mp)
 {
  return Depend.apply(mf,mp);
 };
 Operators$2.op_GreaterEqualsMultiply=function(mp,mf)
 {
  return Depend.apply(mf,mp);
 };
 Operators$2.op_BarMultiplyGreater=function(p,mf)
 {
  return Depend.apply(mf,(Operators$2.rtn())(p));
 };
 Operators$2.op_BarGreaterGreater=function(ma,f)
 {
  return(Depend.map(f))(ma);
 };
 Operators$2.op_GreaterGreaterEquals=function(ma,f)
 {
  return Depend.bind(f,ma);
 };
 Operators$2.depend=function()
 {
  SC$1.$cctor();
  return SC$1.depend$1;
 };
 Operators$2.rtn=function()
 {
  SC$1.$cctor();
  return SC$1.rtn;
 };
 Depend.toString=function(dep)
 {
  return Strings.concat("\n",Seq.sort(Seq.distinct(Seq.map(function(a)
  {
   var $1,$2;
   return(a.$==0?($2=a.$0,$2!=null&&$2.$==1)?($1=[a.$1,a.$0.$0[0],a.$0.$0[1]],true):($1=a,false):($1=a,false))?(((Runtime.Curried3(function($3,$4,$5)
   {
    return $3(Strings.PadRight(Utils.toSafe($4),50)+" "+Utils.prettyPrint($5));
   }))(Global.id))($1[1]))($1[2]):Global.String($1);
  },Depend.getDependencies(dep)))));
 };
 Depend.getDependencies=function(dep)
 {
  return List.rev(List.filter(function(a)
  {
   return a.$==0?a.$0!=null:true;
  },function(lst,dep$1)
  {
   var $1,lst2,k,v,k$1;
   while(true)
    {
     lst2=new List.T({
      $:1,
      $0:dep$1,
      $1:lst
     });
     if(dep$1.$==1)
      return lst2;
     else
      if($1=dep$1.$0,$1!=null&&$1.$==1)
       {
        k=dep$1.$1;
        v=dep$1.$0.$0[1];
        lst=lst2;
        dep$1=k(v);
       }
      else
       {
        k$1=dep$1.$1;
        lst=lst2;
        dep$1=k$1(void 0);
       }
    }
  }(List.T.Empty,dep)));
 };
 Depend.depend=function()
 {
  SC$1.$cctor();
  return SC$1.depend;
 };
 Depend.resolver=function(lst,depend)
 {
  function resolve(a)
  {
   var $1,k,nm,o,o$1;
   function f(t)
   {
    return t[0];
   }
   function g(y)
   {
    return nm===y;
   }
   return a.$==1?a.$0:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],resolve((o=(o$1=Seq.tryFind(function(x)
   {
    return g(f(x));
   },lst),o$1==null?null:{
    $:1,
    $0:k(o$1.$0[1])
   }),o==null?k(a.$0.$0[1]):o.$0)))):resolve(a.$1(void 0));
  }
  return resolve(depend);
 };
 Depend.replacerDef=function(lst,depend)
 {
  function replace(a)
  {
   var $1,k,nm,o,o$1,$2,f;
   function p(a$1,a$2)
   {
    return a$2[0]===nm;
   }
   return a.$==1?{
    $:1,
    $0:a.$0
   }:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],(o=(o$1=Seq.tryFind(function($3)
   {
    return p($3[0],$3[1]);
   },lst),o$1==null?null:{
    $:1,
    $0:($2=o$1.$0,{
     $:0,
     $0:{
      $:1,
      $0:[$2[0],$2[1][1]]
     },
     $1:function(x)
     {
      return replace(k(x));
     }
    })
   }),o==null?{
    $:0,
    $0:{
     $:1,
     $0:[nm,a.$0.$0[1]]
    },
    $1:function(x)
    {
     return replace(k(x));
    }
   }:o.$0))):{
    $:0,
    $0:null,
    $1:(f=a.$1,function(x)
    {
     return replace(f(x));
    })
   };
  }
  return replace(depend);
 };
 Depend.replacer=function(lst,depend)
 {
  function replace(a)
  {
   var $1,k,nm,o,o$1,f;
   function f$1(t)
   {
    return t[0];
   }
   function g(y)
   {
    return nm===y;
   }
   return a.$==1?{
    $:1,
    $0:a.$0
   }:($1=a.$0,$1!=null&&$1.$==1)?(k=a.$1,(nm=a.$0.$0[0],(o=(o$1=Seq.tryFind(function(x)
   {
    return g(f$1(x));
   },lst),o$1==null?null:{
    $:1,
    $0:{
     $:0,
     $0:{
      $:1,
      $0:[nm,o$1.$0[1]]
     },
     $1:function(x)
     {
      return replace(k(x));
     }
    }
   }),o==null?{
    $:0,
    $0:{
     $:1,
     $0:[nm,a.$0.$0[1]]
    },
    $1:function(x)
    {
     return replace(k(x));
    }
   }:o.$0))):{
    $:0,
    $0:null,
    $1:(f=a.$1,function(x)
    {
     return replace(f(x));
    })
   };
  }
  return replace(depend);
 };
 Depend.apply=function(fR,vR)
 {
  return Depend.bind(function(b)
  {
   return(Depend.map(b))(vR);
  },fR);
 };
 Depend.map=function(f)
 {
  var f$1;
  f$1=function(x)
  {
   return Depend.rtn(f(x));
  };
  return function(p)
  {
   return Depend.bind(f$1,p);
  };
 };
 Depend.rtn=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 Depend.bind=function(f,pa)
 {
  function bindR(a)
  {
   var v,k;
   return a.$==1?(v=a.$0,{
    $:0,
    $0:null,
    $1:function()
    {
     return f(v);
    }
   }):(k=a.$1,{
    $:0,
    $0:a.$0,
    $1:function(p)
    {
     return bindR(k(p));
    }
   });
  }
  return bindR(pa);
 };
 Depend.dependByName=function(nm,defF,kf)
 {
  return{
   $:0,
   $0:{
    $:1,
    $0:[nm,defF]
   },
   $1:function(f)
   {
    return{
     $:1,
     $0:kf(f)
    };
   }
  };
 };
 String.thousands=function(n)
 {
  var v,r,s;
  v=Global.String(n);
  r=v.length%3;
  s=r===0?3:r;
  return Strings.concat(",",List.ofSeq(Seq.delay(function()
  {
   return Seq.append([Slice.string(v,{
    $:1,
    $0:0
   },{
    $:1,
    $0:s-1
   })],Seq.delay(function()
   {
    return Seq.map(function(i)
    {
     return Slice.string(v,{
      $:1,
      $0:i*3+s
     },{
      $:1,
      $0:i*3+s+2
     });
    },Operators$3.range(0,((v.length-s)/3>>0)-1));
   }));
  })));
 };
 String.EndsWith=function(ends,s)
 {
  return Strings.EndsWith(s,ends)?{
   $:1,
   $0:Slice.string(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:s.length-ends.length-1
   })
  }:null;
 };
 String.StartsWith=function(start,s)
 {
  return Strings.StartsWith(s,start)?{
   $:1,
   $0:Slice.string(s,{
    $:1,
    $0:start.length
   },null)
  }:null;
 };
 String.skipLastLine=function()
 {
  SC$1.$cctor();
  return SC$1.skipLastLine;
 };
 String.indentStr=function(i)
 {
  function f(s)
  {
   return String.indent(i,s);
  }
  function g(s)
  {
   return Strings.concat("\n",s);
  }
  return function(x)
  {
   return g(f(x));
  };
 };
 String.unindentStr=function()
 {
  SC$1.$cctor();
  return SC$1.unindentStr;
 };
 String.indent=function(n,s)
 {
  var x,x$1;
  x=Strings.SplitChars(s,["\n"],0);
  return Seq.map((x$1=Strings.replicate(n," "),function(y)
  {
   return x$1+y;
  }),x);
 };
 String.unindent=function(s)
 {
  var lines,n,o,o$1;
  lines=Strings.SplitChars(s,["\n"],0);
  n=(o=Seq.tryFindIndex(function(y)
  {
   return" "!==y;
  },(o$1=Seq.tryFind(function(l)
  {
   return Strings.Trim(l)!=="";
  },lines),o$1==null?"":o$1.$0)),o==null?0:o.$0);
  return Seq.filter(function(s$1)
  {
   return!Strings.StartsWith(s$1,"# 1 ");
  },Seq.map(function(l)
  {
   return l.length<=n?"":l.substring(n);
  },lines));
 };
 String.skipFirstLine=function(txt)
 {
  var i;
  i=txt.indexOf("\n");
  return i<0?"":Slice.string(txt,{
   $:1,
   $0:i+1
  },null);
 };
 String.append=function(a,b)
 {
  return a+b;
 };
 String.trim=function(s)
 {
  return Strings.Trim(s);
 };
 String.contains=function(sub,whole)
 {
  return whole.indexOf(sub)!=-1;
 };
 String.delimitedO=function(op,cl,txt)
 {
  var o,$1,bef,o$1,$2;
  o=String.splitInTwoO(op,txt);
  return o==null?null:($1=o.$0,(bef=$1[0],(o$1=String.splitInTwoO(cl,$1[1]),o$1==null?null:{
   $:1,
   $0:($2=o$1.$0,[bef,$2[0],$2[1]])
  })));
 };
 String.splitInTwoO=function(spl,txt)
 {
  var i;
  i=txt.indexOf(spl);
  return i===-1?null:{
   $:1,
   $0:[Library["String.Left"](txt,i),txt.substring(i+spl.length)]
  };
 };
 String.splitByChar=function(c,s)
 {
  return Strings.SplitChars(s,[c],0);
 };
 ParseO.Guid=function()
 {
  SC$1.$cctor();
  return SC$1["|Guid|_|"];
 };
 ParseO.Double=function()
 {
  SC$1.$cctor();
  return SC$1["|Double|_|"];
 };
 ParseO.Single=function()
 {
  SC$1.$cctor();
  return SC$1["|Single|_|"];
 };
 ParseO.Int64=function()
 {
  SC$1.$cctor();
  return SC$1["|Int64|_|"];
 };
 ParseO.Int=function()
 {
  SC$1.$cctor();
  return SC$1["|Int|_|"];
 };
 ParseO.Date=function()
 {
  SC$1.$cctor();
  return SC$1["|Date|_|"];
 };
 ParseO.parseGuidO=function()
 {
  SC$1.$cctor();
  return SC$1.parseGuidO;
 };
 ParseO.parseDoubleO=function()
 {
  SC$1.$cctor();
  return SC$1.parseDoubleO;
 };
 ParseO.parseSingleO=function()
 {
  SC$1.$cctor();
  return SC$1.parseSingleO;
 };
 ParseO.parseInt64O=function()
 {
  SC$1.$cctor();
  return SC$1.parseInt64O;
 };
 ParseO.parseIntO=function()
 {
  SC$1.$cctor();
  return SC$1.parseIntO;
 };
 ParseO.parseDateO=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO;
 };
 ParseO.parseDateO2=function()
 {
  SC$1.$cctor();
  return SC$1.parseDateO2;
 };
 ParseO.tryParseWith=function(tryParseFunc)
 {
  function g($1,$2)
  {
   return $1?{
    $:1,
    $0:$2
   }:null;
  }
  return function(x)
  {
   return g.apply(null,tryParseFunc(x));
  };
 };
 Library["String.get_toUnderscore"]=function(_this,u)
 {
  return Arrays.ofSeq(Seq.collect(Global.id,Seq.mapi(function(i,c)
  {
   return i>0&&Char.IsUpper(c)?List.ofArray(["_",c]):List.ofArray([c]);
  },_this))).join("");
 };
 Library["String.Right"]=function(_this,n)
 {
  var a,b;
  return Library["String.Substring2"](_this,(a=0,(b=_this.length-n,Unchecked.Compare(a,b)===1?a:b)),_this.length);
 };
 Library["String.Left"]=function(_this,n)
 {
  return n<0?Library["String.Substring2"](_this,0,_this.length+n):Library["String.Substring2"](_this,0,n);
 };
 Library["String.Substring2"]=function(_this,from,n)
 {
  var from$1,b;
  while(true)
   {
    if(n<=0)
     return"";
    else
     if(from>=_this.length)
      return"";
     else
      if(from<0)
       {
        from$1=from;
        from=0;
        n=n+from$1;
       }
      else
       return Strings.Substring(_this,from,(b=_this.length-from,Unchecked.Compare(n,b)===-1?n:b));
   }
 };
 Library.delayed=function(delay,doF)
 {
  var cancellationTokenSourceO;
  cancellationTokenSourceO=[null];
  return function(parm)
  {
   var o,b;
   o=cancellationTokenSourceO[0];
   o==null?void 0:o.$0.Cancel$1();
   cancellationTokenSourceO[0]={
    $:1,
    $0:new CancellationTokenSource.New()
   };
   Concurrency.Start((b=null,Concurrency.Delay(function()
   {
    return Concurrency.Bind(Concurrency.Sleep(delay),function()
    {
     doF(parm);
     return Concurrency.Zero();
    });
   })),{
    $:1,
    $0:cancellationTokenSourceO[0].$0
   });
  };
 };
 Library.print=function(v)
 {
  if(typeof v=="string")
   ((function($1)
   {
    return function($2)
    {
     return $1(Utils.toSafe($2));
    };
   }(function(s)
   {
    console.log(s);
   }))(v));
  else
   ((function($1)
   {
    return function($2)
    {
     return $1(Utils.prettyPrint($2));
    };
   }(function(s)
   {
    console.log(s);
   }))(v));
 };
 Library.Error=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 View.sequenceListApp=function(list)
 {
  return View.traverseListApp(Global.id,list);
 };
 View.traverseListApp=function(f,list)
 {
  function cons(head,tail)
  {
   return new List.T({
    $:1,
    $0:head,
    $1:tail
   });
  }
  return List.foldBack(function(head,tail)
  {
   return View.op_LessMultiplyGreater(View.op_LessMultiplyGreater(View.rtn(function($1)
   {
    return function($2)
    {
     return cons($1,$2);
    };
   }),f(head)),tail);
  },list,View.rtn(List.T.Empty));
 };
 View.op_LessMultiplyGreater=function(a,a$1)
 {
  return View$1.Apply(a,a$1);
 };
 View.sequenceSeq=function(sq)
 {
  return View.traverseSeq(Global.id,sq);
 };
 View.traverseSeq=function(f,sq)
 {
  return View.map(Global.id,Arrays.foldBack(function(head,tail)
  {
   return View.op_GreaterGreaterEquals(f(head),function(h)
   {
    return View.op_GreaterGreaterEquals(tail,function(t)
    {
     return View.rtn(new List.T({
      $:1,
      $0:h,
      $1:t
     }));
    });
   });
  },Arrays.ofSeq(sq),View.rtn(List.T.Empty)));
 };
 View.op_GreaterGreaterEquals=function(v,f)
 {
  return View.bind(f,v);
 };
 View.rtn=function(a)
 {
  return View$1.Const(a);
 };
 View.map=function(a,a$1)
 {
  return View$1.Map(a,a$1);
 };
 View.bind=function(a,a$1)
 {
  return View$1.Bind(a,a$1);
 };
 View.insertWO=function(a)
 {
  return a==null?View$1.Const(null):View$1.Map(function(a$1)
  {
   return{
    $:1,
    $0:a$1
   };
  },a.$0);
 };
 Var.lensView=function(get,update,view0,_var)
 {
  var id,view,$1;
  id=Var.freshId();
  view=View$1.Map2(function(v)
  {
   return get(v);
  },_var.get_View(),view0);
  $1=new UI.Var({
   Get:function()
   {
    return get(_var.Get());
   },
   Set:function(v)
   {
    return _var.Update(function(t)
    {
     return update(t,v);
    });
   },
   SetFinal:function(v)
   {
    return this.Set(v);
   },
   Update:function(f)
   {
    return _var.Update(function(t)
    {
     return update(t,f(get(t)));
    });
   },
   UpdateMaybe:function(f)
   {
    return _var.UpdateMaybe(function(t)
    {
     var x;
     x=f(get(t));
     return x==null?null:{
      $:1,
      $0:update(t,x.$0)
     };
    });
   },
   get_View:function()
   {
    return view;
   },
   get_Id:function()
   {
    return id;
   }
  });
  Var$1.New.call($1);
  return $1;
 };
 Var.freshId=function()
 {
  Var.set_counter(Var.counter()+1);
  return"varuid"+Global.String(Var.counter());
 };
 Var.counter=function()
 {
  SC$1.$cctor();
  return SC$1.counter;
 };
 Var.set_counter=function($1)
 {
  SC$1.$cctor();
  SC$1.counter=$1;
 };
 ListModel.MapLens=function(predO,f,m)
 {
  function get(k,v)
  {
   return f(k,m.Lens(k));
  }
  function a(vms,pred)
  {
   return Arrays.filter(pred,vms);
  }
  return predO!=null&&predO.$==1?View$1.MapSeqCachedViewBy(m.key,get,(((Runtime.Curried3(View$1.Map2))(a))(m["var"].get_View()))(predO.$0)):View$1.MapSeqCachedViewBy(m.key,get,m["var"].get_View());
 };
 ListModel.refreshLM=function(lm,elems)
 {
  var keys;
  lm.AppendMany(elems);
  keys=new FSharpSet.New(Seq.map(lm.key,elems));
  Seq.iter(function(e)
  {
   if(!keys.Contains(lm.key(e)))
    lm.RemoveByKey(lm.key(e));
  },Seq.cache(lm));
 };
 ListModel.currentLens=function(def,curr,model)
 {
  return ListModel["currentLensUpd'"](def,curr,function(v)
  {
   model.UpdateBy(function()
   {
    return model.TryFindByKey(model.key(v))==null?null:{
     $:1,
     $0:v
    };
   },model.key(v));
  },model);
 };
 ListModel["currentLensUpd'"]=function(def,curr,upd,model)
 {
  return new FromView.New(View$1.Map2(function(_mdl,kO)
  {
   var o;
   o=kO==null?null:model.TryFindByKey(kO.$0);
   return o==null?def:o.$0;
  },model.v,curr),upd);
 };
 ListModel.currentLensUpd=function(def,curr,upd,model)
 {
  var f;
  function b(a)
  {
   return model.TryFindByKey(a);
  }
  function g(o)
  {
   return o==null?def:o.$0;
  }
  return Var.lensView((f=function(o)
  {
   return o==null?null:b(o.$0);
  },function(x)
  {
   return g(f(x));
  }),function(kO,v)
  {
   var a;
   a=upd(v);
   kO==null?void 0:a(kO.$0);
   return kO;
  },model.v,curr);
 };
 ListModel.lensDef=function(def,k,m)
 {
  function get(o)
  {
   return o==null?def:o.$0;
  }
  return ListModel["lensIntoO'"](m,get,function()
  {
   return Global.id;
  },k,View$1.Map(get,m.TryFindByKeyAsView(k)));
 };
 ListModel.docLensMapViewO=function(def,mapView,f,m)
 {
  function get(k,v)
  {
   return f(k,ListModel["lensIntoO'"](m,function(o)
   {
    return o==null?def:o.$0;
   },function()
   {
    return Global.id;
   },k,v));
  }
  return Doc.ConvertSeqBy(m.key,function($1)
  {
   return function($2)
   {
    return get($1,$2);
   };
  },View$1.Map(mapView,m.v));
 };
 ListModel.docLensMapView=function(mapView,f,m)
 {
  function get(k,v)
  {
   return f(k,ListModel["lensInto'"](m,Global.id,function()
   {
    return Global.id;
   },k,v));
  }
  return Doc.ConvertSeqBy(m.key,function($1)
  {
   return function($2)
   {
    return get($1,$2);
   };
  },View$1.Map(mapView,m.v));
 };
 ListModel["lensIntoO'"]=function(m,get,update,key,view)
 {
  var id,$1;
  id=Var.freshId();
  $1=new Var$1({
   Get:function()
   {
    return get(m.TryFindByKey(key));
   },
   Set:function(v)
   {
    return m.UpdateBy(function(i)
    {
     return{
      $:1,
      $0:(update(i))(v)
     };
    },key);
   },
   Update:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x;
     return{
      $:1,
      $0:(x=f(get({
       $:1,
       $0:i
      })),(update(i))(x))
     };
    },key);
   },
   UpdateMaybe:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x,m$1;
     x=f(get({
      $:1,
      $0:i
     }));
     m$1=update(i);
     return x==null?null:{
      $:1,
      $0:m$1(x.$0)
     };
    },key);
   },
   SetFinal:function(v)
   {
    return this.Set(v);
   },
   get_View:function()
   {
    return view;
   },
   get_Id:function()
   {
    return id;
   }
  });
  Var$1.New.call($1);
  return $1;
 };
 ListModel["lensInto'"]=function(m,get,update,key,view)
 {
  var id,$1;
  id=Var.freshId();
  $1=new Var$1({
   Get:function()
   {
    return get(m.FindByKey(key));
   },
   Set:function(v)
   {
    return m.UpdateBy(function(i)
    {
     return{
      $:1,
      $0:(update(i))(v)
     };
    },key);
   },
   Update:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x;
     return{
      $:1,
      $0:(x=f(get(i)),(update(i))(x))
     };
    },key);
   },
   UpdateMaybe:function(f)
   {
    return m.UpdateBy(function(i)
    {
     var x,m$1;
     x=f(get(i));
     m$1=update(i);
     return x==null?null:{
      $:1,
      $0:m$1(x.$0)
     };
    },key);
   },
   SetFinal:function(v)
   {
    return this.Set(v);
   },
   get_View:function()
   {
    return view;
   },
   get_Id:function()
   {
    return id;
   }
  });
  Var$1.New.call($1);
  return $1;
 };
 REGEX.Identifier=function(a)
 {
  var $1,a$1,t;
  return(a$1=LibraryJS.REGEX$1("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{
   $:1,
   $0:$1
  }:null;
 };
 REGEX.getEndWord=function(line,ch)
 {
  var a,t;
  a=LibraryJS.REGEX$1("^([a-zA-Z_]\\w*)","g",line.substring(ch));
  return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):"":"";
 };
 REGEX.getStartWord=function(line,ch)
 {
  var a,t;
  a=LibraryJS.REGEX$1("([a-zA-Z_]\\w*)$","g",Strings.Substring(line,0,ch));
  return a!=null&&a.$==1?(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1)?Arrays.get(a.$0,0):"":"";
 };
 Hoverable$1=Hoverable.Hoverable=Runtime.Class({
  Content:function(e)
  {
   return e.on("mouseenter",function()
   {
    return DomUtility.AddClass(e.elt,"hovering");
   }).on("mouseleave",function()
   {
    return DomUtility.RemoveClass(e.elt,"hovering");
   });
  },
  Content$1:function(ds)
  {
   return Doc.Element("div",this.get_Attributes(),ds);
  },
  get_Attributes:function()
  {
   var $this,view;
   $this=this;
   return List.ofArray([(view=View$1.Const("hovering"),AttrModule.DynamicPred("class",this.hover.get_View(),view)),AttrProxy.HandlerImpl("mouseenter",function()
   {
    return function()
    {
     return $this.hover.Set(true);
    };
   }),AttrProxy.HandlerImpl("mouseleave",function()
   {
    return function()
    {
     return $this.hover.Set(false);
    };
   })]);
  }
 },null,Hoverable$1);
 Hoverable$1.get_Demo=function()
 {
  return Hoverable$1.New$1().Content(Doc.Element("div",[AttrProxy.Create("style","flex-flow: column;")],[Doc.TextNode("Hover over me!")]));
 };
 Hoverable$1.Content$752$81=Runtime.Curried3(function(e,$1,$2)
 {
  return DomUtility.RemoveClass(e.elt,"hovering");
 });
 Hoverable$1.get_Attributes$748$69=Runtime.Curried3(function(_this,$1,$2)
 {
  return _this.hover.Set(false);
 });
 Hoverable$1.get_Attributes$747$69=Runtime.Curried3(function(_this,$1,$2)
 {
  return _this.hover.Set(true);
 });
 Hoverable$1.New$1=function()
 {
  return Hoverable$1.New(Var$2.Create$1(false));
 };
 Hoverable$1.New=function(hover)
 {
  return new Hoverable$1({
   hover:hover
  });
 };
 Hoverable.hoverable=function(e)
 {
  return Hoverable$1.New$1().Content(e);
 };
 ResizeObserver.addResizeObserver=function(f,el)
 {
  var r,ro,changed,b;
  try
  {
   r=!(!Global.ResizeObserver);
  }
  catch(e)
  {
   r=false;
  }
  if(r)
   {
    ro=new Global.ResizeObserver(f);
    ResizeObserver.set_observers(new List.T({
     $:1,
     $0:ro,
     $1:ResizeObserver.observers()
    }));
    ro.observe(el);
   }
  else
   {
    changed=ResizeObserver.dimsChanged(el);
    Concurrency.Start((b=null,Concurrency.Delay(function()
    {
     return Concurrency.While(function()
     {
      return el.isConnected;
     },Concurrency.Delay(function()
     {
      return Concurrency.Bind(Concurrency.Sleep(110),function()
      {
       return changed()?(f(),Concurrency.Zero()):Concurrency.Zero();
      });
     }));
    })),null);
   }
 };
 ResizeObserver.dimsChanged=function(el)
 {
  var dims;
  dims=[el.getBoundingClientRect()];
  return function()
  {
   var ndims;
   ndims=el.getBoundingClientRect();
   return Unchecked.Equals(ResizeObserver.domRect2Tuple(dims[0]),ResizeObserver.domRect2Tuple(ndims))?false:(dims[0]=ndims,true);
  };
 };
 ResizeObserver.domRect2Tuple=function(r)
 {
  return[r.top,r.left,r.width,r.height];
 };
 ResizeObserver.observers=function()
 {
  SC$1.$cctor();
  return SC$1.observers;
 };
 ResizeObserver.set_observers=function($1)
 {
  SC$1.$cctor();
  SC$1.observers=$1;
 };
 WcTabStripT=WcTabStrip.WcTabStripT=Runtime.Class({
  connectedCallback:function()
  {
   var $this,el,shadowRoot,elsh;
   function addTab()
   {
    var a,top,tabs;
    top=!el.hasAttribute("bottom");
    tabs=List.ofSeq(Seq.delay(function()
    {
     return Seq.collect(function(i)
     {
      var node;
      node=el.childNodes[i-1];
      return Unchecked.Equals(node.nodeType,Node.ELEMENT_NODE)?[[node.hasAttribute("tabname")?node.getAttribute("tabname"):(function($1)
      {
       return function($2)
       {
        return $1("Tab "+Global.String($2));
       };
      }(Global.id))(i),node]]:[];
     },Operators$3.range(1,el.childNodes.length));
    }));
    while(elsh.childNodes.length>0)
     elsh.removeChild(elsh.lastChild);
    a=WcTabStrip.tabStrip($this.selected,top,true,tabs,Doc.Element("slot",List.T.Empty,List.T.Empty));
    Templates.LoadLocalTemplates("");
    Doc.Run(elsh,a);
   }
   $this=this;
   !this.added?(el=this,shadowRoot=el.attachShadow({
    mode:"open"
   }),elsh=self.document.createElement("div"),shadowRoot.appendChild(elsh),addTab(),el.addEventListener("DOMSubtreeModified",Library.delayed(50,addTab)),this.added=true):void 0;
  }
 },Obj,WcTabStripT);
 WcTabStripT.Constructor=function()
 {
  var _this,r;
  _this=(r=Reflect.construct(self.HTMLElement,[],this.__proto__.constructor),r);
  self.FsRootDll.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New.call(_this);
  return _this;
 };
 WcTabStripT.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.added=false;
  this.selected=Var$2.Create$1(1);
  (function($1)
  {
   return $1("WcTabStripT initializer");
  }(function(s)
  {
   console.log(s);
  }));
 },WcTabStripT);
 WcTabStrip.init=function()
 {
  SC$1.$cctor();
  return SC$1.init;
 };
 WcTabStrip.tabStrip$896$64=function(i,selected)
 {
  return function()
  {
   return function()
   {
    return selected.Set(i+1);
   };
  };
 };
 WcTabStrip.tabStrip=function(selected,top,horizontal,tabs,content)
 {
  var strip;
  strip=Doc.Element("div",[AttrProxy.Create("class",(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("tab-strip "+Utils.toSafe($2)+" "+Utils.toSafe($3));
  }))(Global.id))(top?"top":"bottom"))(horizontal?"horizontal":"vertical"))],List.ofSeq(Seq.delay(function()
  {
   return Seq.collect(function(m)
   {
    var i;
    i=m[0];
    return[Hoverable$1.New$1().Content(Doc.Element("div",[AttrModule.Dynamic("class",View$1.Map(function(sel)
    {
     return"tab"+(sel===i+1?" selected":"");
    },selected.get_View())),AttrProxy.Create("draggable","true"),AttrProxy.HandlerImpl("click",function()
    {
     return function()
     {
      return selected.Set(i+1);
     };
    })],[Doc.TextNode(m[1][0])]))];
   },Seq.indexed(tabs));
  })));
  return Doc.Element("div",[AttrProxy.Create("class","tab-panel")],List.ofSeq(Seq.delay(function()
  {
   return Seq.append(top?[strip]:[],Seq.delay(function()
   {
    return Seq.append([Doc.Element("div",[AttrProxy.Create("class","tab-content")],[content])],Seq.delay(function()
    {
     return Seq.append(!top?[strip]:[],Seq.delay(function()
     {
      return Seq.append([Doc.Element("style",List.T.Empty,List.ofArray([Doc.TextNode(WcTabStrip.css())]))],Seq.delay(function()
      {
       return[Doc.Element("style",List.T.Empty,List.ofArray([Doc.TextView(View$1.Map(function($1)
       {
        return function($2)
        {
         return $1("\r\n                                              ::slotted(*              ) { display: none }\r\n                                              ::slotted(*:nth-child("+Global.String($2)+")) { display: grid }\r\n                                           ");
        };
       }(Global.id),selected.get_View()))]))];
      }));
     }));
    }));
   }));
  })));
 };
 WcTabStrip.css=function()
 {
  SC$1.$cctor();
  return SC$1.css;
 };
 WcSplitterT=WcSplitter.WcSplitterT=Runtime.Class({
  connectedCallback:function()
  {
   var el,shadowRoot,elsh,minV,maxV,value,first,vertical,size,padding,gap,dragging,startP,start,domElem,a;
   function sizeCalc(sh)
   {
    var p,pt,pb,r;
    p=vertical?["padding-left","padding-right","grid-column-gap"]:["padding-top","padding-bottom","grid-row-gap"];
    pt=Global.parseFloat("0"+Global.jQuery(sh.parentElement.parentElement).css(p[0]));
    pb=Global.parseFloat("0"+Global.jQuery(sh.parentElement.parentElement).css(p[1]));
    gap.Set(Global.parseFloat("0"+Global.jQuery(sh.parentElement.parentElement).css(p[2])));
    padding[0]=pt+pb;
    r=el.getBoundingClientRect();
    return vertical?first?[r.width,r.height]:[-r.width,r.height]:first?[r.height,r.width]:[-r.height,r.width];
   }
   function mouseCoord(ev)
   {
    return vertical?ev.clientX:ev.clientY;
   }
   function drag(ev)
   {
    var v,b;
    v=(mouseCoord(ev)-start[0])*100/size[0][0]+startP[0];
    value.Set((b=Unchecked.Compare(minV,v)===1?minV:v,Unchecked.Compare(maxV,b)===-1?maxV:b));
   }
   function finishDragging()
   {
    if(dragging[0])
     {
      dragging[0]=false;
      self.removeEventListener("mousemove",drag,false);
      self.removeEventListener("mouseup",finishDragging,false);
     }
   }
   function startDragging(ev)
   {
    var o,o$1;
    if(!dragging[0])
     {
      dragging[0]=true;
      startP[0]=value.Get();
      start[0]=mouseCoord(ev);
      size[0]=(o=(o$1=domElem[0],o$1==null?null:{
       $:1,
       $0:sizeCalc(o$1.$0)
      }),o==null?[100,500]:o.$0);
      self.addEventListener("mousemove",drag,false);
      self.addEventListener("mouseup",finishDragging,false);
      ev.preventDefault();
     }
   }
   function partSizes(sz,gap$1,pad,spl)
   {
    return[(sz-gap$1-pad)*spl/100,(sz-gap$1-pad)*(100-spl)/100];
   }
   function styleSections(p1,p2)
   {
    return(((((Runtime.Curried(function($1,$2,$3,$4,$5)
    {
     return $1(" "+$2.toFixed(2)+"px "+$3.toFixed(2)+"px ; "+Utils.toSafe($4)+" : "+$5.toFixed(2)+"px; ");
    },5))(Global.id))(p1))(p2))(vertical?"height":"width"))(size[0][1]);
   }
   function recalc()
   {
    var o;
    o=domElem[0];
    o==null?void 0:size[0]=sizeCalc(o.$0);
    value.Set(value.Get());
   }
   if(!this.added)
    {
     el=this;
     shadowRoot=el.attachShadow({
      mode:"open"
     });
     elsh=self.document.createElement("div");
     minV=el.hasAttribute("min")?Global.parseFloat(el.getAttribute("min")):4;
     maxV=el.hasAttribute("max")?Global.parseFloat(el.getAttribute("max")):96;
     value=Var$2.Create$1(el.hasAttribute("value")?Global.parseFloat(el.getAttribute("value")):50);
     first=!el.hasAttribute("second");
     vertical=el.hasAttribute("vertical");
     size=[[0,0]];
     padding=[0];
     gap=Var$2.Create$1(0);
     dragging=[false];
     startP=[0];
     start=[0];
     domElem=[null];
     a=(((((vertical?WcSplitter.layoutVertical():WcSplitter.layoutHorizontal())(View$1.Map(function(spl)
     {
      var x;
      x=partSizes(size[0][0],gap.Get(),padding[0],spl);
      return styleSections.apply(null,x);
     },value.get_View())))(function()
     {
      ResizeObserver.addResizeObserver(recalc,el);
      recalc();
     }))(function(sp)
     {
      domElem[0]={
       $:1,
       $0:sp
      };
      recalc();
     }))(function(me)
     {
      startDragging(me);
     }))(View$1.Map(function($1)
     {
      return function($2)
      {
       return $1(Utils.prettyPrint($2)+"px");
      };
     }(Global.id),gap.get_View()));
     Templates.LoadLocalTemplates("");
     Doc.Run(elsh,a);
     shadowRoot.appendChild(elsh.firstChild);
     this.added=true;
    }
  }
 },Obj,WcSplitterT);
 WcSplitterT.Constructor=function()
 {
  var _this,r;
  _this=(r=Reflect.construct(self.HTMLElement,[],this.__proto__.constructor),r);
  self.FsRootDll.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New.call(_this);
  return _this;
 };
 WcSplitterT.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
  this.added=false;
  (function($1)
  {
   return $1("WcSplitterT initializer");
  }(function(s)
  {
   console.log(s);
  }));
 },WcSplitterT);
 WcSplitter.init=function(layoutH,layoutV)
 {
  var o;
  o=new WcSplitterT.New();
  WcSplitter.set_layoutHorizontal(layoutH);
  WcSplitter.set_layoutVertical(layoutV);
  WebComponent.defineWebComponent("wcomp-splitter",WcSplitterT.Constructor,self.FsRootDll.LibraryJS.WebComponent.WcSplitter.WcSplitterT.New);
 };
 WcSplitter.layoutVertical=function()
 {
  SC$1.$cctor();
  return SC$1.layoutVertical;
 };
 WcSplitter.set_layoutVertical=function($1)
 {
  SC$1.$cctor();
  SC$1.layoutVertical=$1;
 };
 WcSplitter.layoutHorizontal=function()
 {
  SC$1.$cctor();
  return SC$1.layoutHorizontal;
 };
 WcSplitter.set_layoutHorizontal=function($1)
 {
  SC$1.$cctor();
  SC$1.layoutHorizontal=$1;
 };
 WebComponent.defineWebComponent=function(_nm,_o,_c)
 {
  try
  {
   console.log("defineWebComponent: "+_nm);
   Object.setPrototypeOf(_c.prototype,self.HTMLElement.prototype);
   Object.setPrototypeOf(_c,self.HTMLElement);
   Object.setPrototypeOf(_o.prototype,_c.prototype);
   self.customElements.define(_nm,_o);
  }
  catch(m)
  {
   (function($1)
   {
    return $1("Failed to define WebComponent. Not supported.");
   }(function(s)
   {
    console.log(s);
   }));
  }
 };
 AppFrameworkTemplate.html=function()
 {
  SC$1.$cctor();
  return SC$1.html;
 };
 PlgElemName=AppFramework.PlgElemName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,PlgElemName);
 PlugInName=AppFramework.PlugInName=Runtime.Class({
  get_Id:function()
  {
   return this.$0;
  }
 },null,PlugInName);
 PlugInVar.New=function(varName,varVar)
 {
  return{
   varName:varName,
   varVar:varVar
  };
 };
 PlugInView.New=function(viwName,viwView)
 {
  return{
   viwName:viwName,
   viwView:viwView
  };
 };
 PlugInDoc.New=function(docName,docDoc)
 {
  return{
   docName:docName,
   docDoc:docDoc
  };
 };
 PlugInAction.New=function(actName,actFunction,actEnabled)
 {
  return{
   actName:actName,
   actFunction:actFunction,
   actEnabled:actEnabled
  };
 };
 PlugInQuery.New=function(qryName,qryFunction)
 {
  return{
   qryName:qryName,
   qryFunction:qryFunction
  };
 };
 PlugIn.New=function(plgName,plgVars,plgViews,plgDocs,plgActions,plgQueries)
 {
  return{
   plgName:plgName,
   plgVars:plgVars,
   plgViews:plgViews,
   plgDocs:plgDocs,
   plgActions:plgActions,
   plgQueries:plgQueries
  };
 };
 PlugInBuilder=AppFramework.PlugInBuilder=Runtime.Class({
  Merge:function(plg,prefix,p2)
  {
   plg.plgVars.AppendMany(Seq.map(function(v)
   {
    return PlugInVar.New(new PlgElemName({
     $:0,
     $0:prefix+v.varName.get_Id()
    }),v.varVar);
   },p2.plgVars));
   plg.plgViews.AppendMany(Seq.map(function(w)
   {
    return PlugInView.New(new PlgElemName({
     $:0,
     $0:prefix+w.viwName.get_Id()
    }),w.viwView);
   },p2.plgViews));
   plg.plgDocs.AppendMany(Seq.map(function(d)
   {
    return PlugInDoc.New(new PlgElemName({
     $:0,
     $0:prefix+d.docName.get_Id()
    }),d.docDoc);
   },p2.plgDocs));
   plg.plgActions.AppendMany(Seq.map(function(a)
   {
    return PlugInAction.New(new PlgElemName({
     $:0,
     $0:prefix+a.actName.get_Id()
    }),a.actFunction,a.actEnabled);
   },p2.plgActions));
   plg.plgQueries.AppendMany(Seq.map(function(q)
   {
    return PlugInQuery.New(new PlgElemName({
     $:0,
     $0:prefix+q.qryName.get_Id()
    }),q.qryFunction);
   },p2.plgQueries));
   return plg;
  },
  AddViw:function(plg,name,viw)
  {
   plg.plgViews.Append(AppFramework.newViw(new PlgElemName({
    $:0,
    $0:name
   }),viw));
   return plg;
  },
  AddActO:function(plg,name,actO)
  {
   actO==null?void 0:plg.plgActions.Append(AppFramework.newAct(new PlgElemName({
    $:0,
    $0:name
   }),actO.$0));
   return plg;
  },
  AddAct2:function(plg,name,act,p1,p2)
  {
   plg.plgActions.Append(AppFramework.newActF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:2,
    $0:act,
    $1:p1,
    $2:p2
   }));
   return plg;
  },
  AddAct1:function(plg,name,act,p1)
  {
   plg.plgActions.Append(AppFramework.newActF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:1,
    $0:act,
    $1:p1
   }));
   return plg;
  },
  AddAct:function(plg,name,act)
  {
   plg.plgActions.Append(AppFramework.newAct(new PlgElemName({
    $:0,
    $0:name
   }),act));
   return plg;
  },
  AddQry:function(plg,name,qry)
  {
   plg.plgQueries.Append(AppFramework.newQry(new PlgElemName({
    $:0,
    $0:name
   }),qry));
   return plg;
  },
  AddDoc5:function(plg,name,doc,a,b,c,d,e)
  {
   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:5,
    $0:doc,
    $1:a,
    $2:b,
    $3:c,
    $4:d,
    $5:e
   }));
   return plg;
  },
  AddDoc4:function(plg,name,doc,a,b,c,d)
  {
   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:4,
    $0:doc,
    $1:a,
    $2:b,
    $3:c,
    $4:d
   }));
   return plg;
  },
  AddDoc3:function(plg,name,doc,a,b,c)
  {
   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:3,
    $0:doc,
    $1:a,
    $2:b,
    $3:c
   }));
   return plg;
  },
  AddDoc2:function(plg,name,doc,p1,p2)
  {
   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:2,
    $0:doc,
    $1:p1,
    $2:p2
   }));
   return plg;
  },
  AddDoc1:function(plg,name,doc,p1)
  {
   plg.plgDocs.Append(AppFramework.newDocF(new PlgElemName({
    $:0,
    $0:name
   }),{
    $:1,
    $0:doc,
    $1:p1
   }));
   return plg;
  },
  AddDoc:function(plg,name,doc)
  {
   plg.plgDocs.Append(AppFramework.newDoc(new PlgElemName({
    $:0,
    $0:name
   }),doc));
   return plg;
  },
  AddVar:function(plg,name,_var)
  {
   plg.plgVars.Append(AppFramework.newVar(new PlgElemName({
    $:0,
    $0:name
   }),_var));
   return plg;
  },
  Name:function(plg,name)
  {
   return PlugIn.New(new PlugInName({
    $:0,
    $0:name
   }),plg.plgVars,plg.plgViews,plg.plgDocs,plg.plgActions,plg.plgQueries);
  },
  For:function(coll,func)
  {
   var ie;
   ie=Enumerator.Get(coll);
   while(ie.MoveNext())
    func(ie.Current());
  },
  Yield:function()
  {
   return this.Zero();
  },
  Zero:function()
  {
   var i;
   i=AppFramework.defaultPlugIn();
   return PlugIn.New(new PlugInName({
    $:0,
    $0:"Main"
   }),i.plgVars,i.plgViews,i.plgDocs,i.plgActions,i.plgQueries);
  }
 },Obj,PlugInBuilder);
 PlugInBuilder.New=Runtime.Ctor(function()
 {
  Obj.New.call(this);
 },PlugInBuilder);
 Fun.New=function(f,p)
 {
  return{
   f:f,
   p:p
  };
 };
 P.New=function(r)
 {
  return{
   r:r
  };
 };
 Val.textAtt=function()
 {
  SC$1.$cctor();
  return SC$1.textAtt;
 };
 Val.textDoc=function(a)
 {
  return a.$==0?Doc.TextView(a.$0):Doc.TextNode(a.$0);
 };
 Val.addAtt=function(a,atts)
 {
  return atts.$==0?function($1)
  {
   return $1("addAtt for VView not implemented");
  }(Operators$3.FailWith):{
   $:1,
   $0:Seq.append(atts.$0,[a])
  };
 };
 Val.addDoc=function(d,docs)
 {
  return docs.$==0?{
   $:1,
   $0:[Doc.BindView(Doc.Concat,docs.$0),d]
  }:{
   $:1,
   $0:Seq.append(docs.$0,[d])
  };
 };
 Val.toView=function(a)
 {
  return a.$==0?a.$0:View$1.Const(a.$0);
 };
 Val.sequenceListApp=function(list)
 {
  return Val.traverseListApp(Global.id,list);
 };
 Val.traverseListApp=function(f,list)
 {
  function cons(head,tail)
  {
   return new List.T({
    $:1,
    $0:head,
    $1:tail
   });
  }
  return List.foldBack(function(head,tail)
  {
   return((Val.op_LessMultiplyGreater())(((Val.op_LessMultiplyGreater())(Val.rtn(function($1)
   {
    return function($2)
    {
     return cons($1,$2);
    };
   })))(f(head))))(tail);
  },list,Val.rtn(List.T.Empty));
 };
 Val.op_LessMultiplyGreater=function()
 {
  SC$1.$cctor();
  return SC$1.op_LessMultiplyGreater;
 };
 Val.apply=function(fv,vv)
 {
  return fv.$==0?vv.$==1?{
   $:0,
   $0:View$1.Apply(fv.$0,View$1.Const(vv.$0))
  }:{
   $:0,
   $0:View$1.Apply(fv.$0,vv.$0)
  }:vv.$==0?{
   $:0,
   $0:View$1.Apply(View$1.Const(fv.$0),vv.$0)
  }:{
   $:1,
   $0:fv.$0(vv.$0)
  };
 };
 Val.rtn=function(a)
 {
  return{
   $:1,
   $0:a
  };
 };
 Val.map=function(f,a)
 {
  return a.$==0?{
   $:0,
   $0:View$1.Map(f,a.$0)
  }:{
   $:1,
   $0:f(a.$0)
  };
 };
 AAttr.AEmpty={
  $:3
 };
 Extract0.extractTextD=function()
 {
  SC$1.$cctor();
  return SC$1.extractTextD;
 };
 Extract0.extractAtsD=function()
 {
  SC$1.$cctor();
  return SC$1.extractAtsD;
 };
 Extract0.getTextValD=function()
 {
  SC$1.$cctor();
  return SC$1.getTextValD;
 };
 Extract0.getTextValFromSeqD=function()
 {
  SC$1.$cctor();
  return SC$1.getTextValFromSeqD;
 };
 Extract0.extractDocD=function()
 {
  SC$1.$cctor();
  return SC$1.extractDocD;
 };
 Extract0.getDocFromTextTypesD=function()
 {
  SC$1.$cctor();
  return SC$1.getDocFromTextTypesD;
 };
 Extract0.getTextActViewFromReferenceD=function()
 {
  SC$1.$cctor();
  return SC$1.getTextActViewFromReferenceD;
 };
 Extract0.getDocFromReferenceD=function()
 {
  SC$1.$cctor();
  return SC$1.getDocFromReferenceD;
 };
 Extract0.getTextData=function(txt)
 {
  var o,o$1,$1;
  o=(o$1=String.delimitedO("@{","}",txt),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,Extract0.getOneTextData($1[0],$1[1],$1[2]))
  });
  return o==null?List.ofArray([{
   $:0,
   $0:txt
  }]):o.$0;
 };
 Extract0.getOneTextData=function(bef,name,aft)
 {
  return(bef===""?Global.id:function(ls)
  {
   return new List.T({
    $:1,
    $0:{
     $:0,
     $0:bef
    },
    $1:ls
   });
  })(new List.T({
   $:1,
   $0:{
    $:1,
    $0:name
   },
   $1:aft===""?List.T.Empty:Extract0.getTextData(aft)
  }));
 };
 Extract0.getTextActViewFromReference=function(ref)
 {
  return View$1.Const({
   $:0,
   $0:(function($1)
   {
    return function($2)
    {
     return $1("getTextActViewFromReference not implemented: @{"+Utils.toSafe($2)+"}");
    };
   }(Global.id))(ref)
  });
 };
 Extract0.getDocFromReference=function(ref)
 {
  return Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1("getDocFromReference not implemented: @{"+Utils.toSafe($2)+"}");
   };
  }(Global.id))(ref));
 };
 ListModelData=AppFramework.ListModelData=Runtime.Class({
  get_CurrentV:function()
  {
   var $this;
   $this=this;
   return new FromView.New(this.get_CurrentW(),function(v)
   {
    var m;
    m=$this.selV.Get();
    m!=null&&m.$==1?$this.elems.ContainsKey(m.$0)?$this.elems.Append(v):void 0:void 0;
   });
  },
  get_CurrentW:function()
  {
   var f,g,v,f$1,m,o;
   return View$1.Map((f=function(o$1)
   {
    return o$1==null?null:Global.id(o$1.$0);
   },(g=(v=this.def,function(o$1)
   {
    return o$1==null?v:o$1.$0;
   }),function(x)
   {
    return g(f(x));
   })),View$1.Bind((f$1=(m=(o=this.elems,function(a)
   {
    return o.TryFindByKeyAsView(a);
   }),function(o$1)
   {
    return o$1==null?null:{
     $:1,
     $0:m(o$1.$0)
    };
   }),function(x)
   {
    return View.insertWO(f$1(x));
   }),this.selV.get_View()));
  },
  PlugIn:function(selectorLens)
  {
   var $this,b,f;
   function g(v)
   {
   }
   $this=this;
   b=AppFramework.plugin();
   return b.AddAct(b.AddAct(b.AddVar(b.AddDoc(b.Yield(),"list",Lazy.Create(function()
   {
    return $this.doc;
   })),"sel",selectorLens(this.selV)),"add",(f=this.add,function(x)
   {
    return g(f(x));
   })),"del",this.delCur);
  }
 },null,ListModelData);
 ListModelData.New=function(elems,doc,selV,add,delCur,def)
 {
  return new ListModelData({
   elems:elems,
   doc:doc,
   selV:selV,
   add:add,
   delCur:delCur,
   def:def
  });
 };
 AppFramework.concatMainDocs=function(plugins)
 {
  return Doc.Concat(Seq.choose(function(a)
  {
   return a.docDoc.$==0?{
    $:1,
    $0:a.docDoc.$0.f()
   }:null;
  },Seq.choose(function(plg)
  {
   return Seq.tryHead(plg.plgDocs);
  },plugins)));
 };
 AppFramework.op_Dereference=function(v)
 {
  return P.New((Operators$2.rtn())({
   $:1,
   $0:v
  }));
 };
 AppFramework.addPlugIn=function(p)
 {
  AppFramework.plugIns().Append(p);
 };
 AppFramework.getMainDoc=function()
 {
  SC$1.$cctor();
  return SC$1.getMainDoc;
 };
 AppFramework.select=function()
 {
  SC$1.$cctor();
  return SC$1.select;
 };
 AppFramework.trigAct=function()
 {
  SC$1.$cctor();
  return SC$1.trigAct;
 };
 AppFramework.setVar=function(varN,value)
 {
  var o,t;
  o=(t=(AppFramework.splitName(AppFramework.defPlugInName()))(varN),AppFramework.tryGetVar(t[0],t[1]));
  o==null?void 0:o.$0.varVar.Set(value);
 };
 AppFramework.htmlDoc=function()
 {
  SC$1.$cctor();
  return SC$1.htmlDoc;
 };
 AppFramework.textArea=function()
 {
  SC$1.$cctor();
  return SC$1.textArea;
 };
 AppFramework.input=function()
 {
  SC$1.$cctor();
  return SC$1.input;
 };
 AppFramework.inputLabel=function()
 {
  SC$1.$cctor();
  return SC$1.inputLabel;
 };
 AppFramework.inputFile$2181$67=Runtime.Curried3(function(act,el,$1)
 {
  return AppFramework.callFunction(el,null,act.actFunction);
 });
 AppFramework.inputFile$2180$67=Runtime.Curried3(function($1,el,$2)
 {
  el.value="";
 });
 AppFramework.inputFile=function(attrs,labelName,actName)
 {
  var o,o$1,t,act;
  o=(o$1=(t=(AppFramework.splitName(AppFramework.defPlugInName()))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:(act=o$1.$0,Doc.Element("div",AppFramework.getAttrs(AppFramework.defPlugInName(),attrs),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-btn")],[Doc.Element("label",[AttrProxy.Create("class","btn")],[Doc.TextNode(labelName),Doc.Element("input",[AttrProxy.Create("class","form-control"),AttrProxy.Create("type","file"),AttrModule.Style("display","none"),AttrProxy.HandlerImpl("click",function(el)
   {
    return function()
    {
     el.value="";
    };
   }),AttrProxy.HandlerImpl("change",function(el)
   {
    return function()
    {
     return AppFramework.callFunction(el,null,act.actFunction);
    };
   })],[])])])])]))
  });
  return o==null?AppFramework.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Action not found "+Utils.toSafe($2));
   };
  }(Global.id))(actName)):o.$0;
 };
 AppFramework.docWithVar=function(f,_var)
 {
  var g,t;
  function f$1(o)
  {
   return o==null?null:{
    $:1,
    $0:f(o.$0)
   };
  }
  function d()
  {
   return AppFramework.errDoc((function($1)
   {
    return function($2)
    {
     return $1("Var not found "+Utils.toSafe($2));
    };
   }(Global.id))(_var));
  }
  return Doc.BindView((g=function(o)
  {
   return o==null?d():o.$0;
  },function(x)
  {
   return g(f$1(x));
  }),(t=AppFramework.getParmRef(_var),AppFramework.tryGetVoVW(t[0],t[1])));
 };
 AppFramework.depWithExtracts=function(f)
 {
  var b;
  return AppFramework.runDef((b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(AppFramework.extractAtsD(),function(a)
   {
    return b.Bind(AppFramework.extractDocD(),function(a$1)
    {
     return b.Bind(AppFramework.extractTextD(),function(a$2)
     {
      return b.Return(f(a,a$1,a$2));
     });
    });
   });
  })));
 };
 AppFramework.getParmRef=function(_var)
 {
  var x,o,o$1,$1,b;
  x=(o=(o$1=String.delimitedO("@{","}",_var),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,($1[0],b=$1[1],$1[2],b))
  }),o==null?_var:o.$0);
  return(AppFramework.splitName(AppFramework.defPlugInName()))(x);
 };
 AppFramework.runDef=function(d)
 {
  return AppFramework.run(AppFramework.defPlugInName(),d);
 };
 AppFramework.defPlugInName=function()
 {
  SC$1.$cctor();
  return SC$1.defPlugInName;
 };
 AppFramework.extractAttD=function()
 {
  SC$1.$cctor();
  return SC$1.extractAttD;
 };
 AppFramework.extractAtsD=function()
 {
  SC$1.$cctor();
  return SC$1.extractAtsD$1;
 };
 AppFramework.extractDocD=function()
 {
  SC$1.$cctor();
  return SC$1.extractDocD$1;
 };
 AppFramework.extractTextD=function()
 {
  SC$1.$cctor();
  return SC$1.extractTextD$1;
 };
 AppFramework.run=function(pin,d)
 {
  var x,b;
  x=(b=Operators$2.depend(),b.Delay(function()
  {
   return b.Bind(AppFramework.getDocD(),function(a)
   {
    return b.Bind(AppFramework.getTextActViewD(),function(a$1)
    {
     return b.Return(Depend.resolver(List.ofArray([["getDocFromReference",a],["getTextActViewFromReference",a$1],["currentPlugInName",pin]]),d));
    });
   });
  }));
  return Depend.resolver(List.ofArray([["currentPlugInName",pin]]),x);
 };
 AppFramework.errDocf=function(fmt)
 {
  return fmt(AppFramework.errDoc);
 };
 AppFramework.errDoc=function(txt)
 {
  return Doc.Element("div",[],[Doc.TextNode(txt)]);
 };
 AppFramework.getTextActViewD=function()
 {
  SC$1.$cctor();
  return SC$1.getTextActViewD;
 };
 AppFramework.getDocD=function()
 {
  SC$1.$cctor();
  return SC$1.getDocD;
 };
 AppFramework.currentPlugInNameD=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInNameD;
 };
 AppFramework.currentPlugInNameDef=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInNameDef;
 };
 AppFramework.valToAttr=function(atn,a)
 {
  return a.$==0?AttrModule.Dynamic(atn,a.$0):AttrProxy.Create(atn,a.$0);
 };
 AppFramework.valToStyle=function(atn,a)
 {
  return a.$==0?AttrModule.DynamicStyle(atn,a.$0):AttrModule.Style(atn,a.$0);
 };
 AppFramework.choiceToString=function(a)
 {
  return a.$==1?(function($1)
  {
   return function($2)
   {
    return $1("@{"+Utils.prettyPrint($2)+"}");
   };
  }(Global.id))(a.$0):a.$0;
 };
 AppFramework.makeAViewDocL=function(f)
 {
  return Lazy.Create(function()
  {
   return AppFramework.makeAViewDoc(f);
  });
 };
 AppFramework.makeAViewDoc=function(f)
 {
  return Doc.BindView(function()
  {
   return f();
  },AppFramework.baseView());
 };
 AppFramework.baseView=function()
 {
  SC$1.$cctor();
  return SC$1.baseView;
 };
 AppFramework.mainX=function()
 {
  SC$1.$cctor();
  return SC$1.mainX;
 };
 AppFramework.a11V=function()
 {
  SC$1.$cctor();
  return SC$1.a11V;
 };
 AppFramework.add1=function(a)
 {
  return a+1;
 };
 AppFramework.unwrapBindWrap=function(f,pv)
 {
  return P.New(Operators$2.op_BarGreaterGreater(pv.r,f));
 };
 AppFramework.bindWrap=function(f,pv)
 {
  return P.New(Operators$2.op_GreaterGreaterEquals(pv,function(v)
  {
   return f(v).r;
  }));
 };
 AppFramework.getAttrs=function(lytNm,attrs)
 {
  return List.ofSeq(Seq.delay(function()
  {
   return Seq.append(Seq.choose(function(a)
   {
    var $1,value,value$1,name;
    function s(el,a$1)
    {
     var act;
     return a$1.$==1?(act=a$1.$0,el.addEventListener(Strings.Trim(name),function(ev)
     {
      return AppFramework.callFunction(el,ev,act.actFunction);
     },false)):el.setAttribute(Strings.Trim(name),Strings.Trim(a$1.$0));
    }
    return!Unchecked.Equals(a,null)&&a.length===2&&(value=Arrays.get(a,1),Strings.Trim(Arrays.get(a,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a,1),(name=Arrays.get(a,0),{
     $:1,
     $0:AttrModule.DynamicCustom(function($2)
     {
      return function($3)
      {
       return s($2,$3);
      };
     },AppFramework.getTextData(lytNm,Strings.Trim(value$1)))
    })):null;
   },Seq.map(function(s)
   {
    return String.splitByChar("=",s);
   },String.splitByChar(";",attrs))),Seq.delay(function()
   {
    return Seq.choose(function(a)
    {
     var $1,value,value$1,name,x;
     return!Unchecked.Equals(a,null)&&a.length===2&&(value=Arrays.get(a,1),Strings.Trim(Arrays.get(a,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a,1),(name=Arrays.get(a,0),{
      $:1,
      $0:(x=View$1.Map(function(a$1)
      {
       return a$1.$==1?(function($2)
       {
        return function($3)
        {
         return $2("@{"+Utils.toSafe($3)+"}");
        };
       }(Global.id))(a$1.$0.actName.get_Id()):Strings.Trim(a$1.$0);
      },AppFramework.getTextData(lytNm,Strings.Trim(value$1))),AttrModule.DynamicStyle(Strings.Trim(name),x))
     })):null;
    },Seq.map(function(s)
    {
     return String.splitByChar(":",s);
    },String.splitByChar(";",attrs)));
   }));
  }));
 };
 AppFramework.getTextData=function(lytNm,txt)
 {
  var o,o$1,$1,bef;
  o=(o$1=String.delimitedO("@{","}",txt),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,(bef=$1[0],AppFramework.getOneTextData(lytNm,$1[1],bef,$1[2])))
  });
  return o==null?View$1.Const({
   $:0,
   $0:txt
  }):o.$0;
 };
 AppFramework.getOneTextData=function(lytNm,name,bef,aft)
 {
  var p,plg,n;
  p=(AppFramework.splitName(lytNm))(name);
  plg=p[0];
  n=p[1];
  return View$1.Bind(function(a)
  {
   return a==null?View$1.Bind(function(a$1)
   {
    var txt;
    return a$1==null?View$1.Const({
     $:0,
     $0:((((Runtime.Curried(function($1,$2,$3,$4)
     {
      return $1(Utils.toSafe($2)+" @{Missing "+Utils.toSafe($3)+"}"+Utils.toSafe($4));
     },4))(Global.id))(bef))(name))(aft)
    }):(txt=a$1.$0,View$1.Bind(function(a$2)
    {
     return a$2.$==1?View$1.Const({
      $:0,
      $0:(function($1)
      {
       return function($2)
       {
        return $1("Unexpected Action @{"+Utils.toSafe($2)+"}");
       };
      }(Global.id))(a$2.$0.actName.get_Id())
     }):View$1.Const({
      $:0,
      $0:bef+txt+a$2.$0
     });
    },AppFramework.getTextData(lytNm,aft)));
   },AppFramework.tryGetWoWW(plg,n)):View$1.Const({
    $:1,
    $0:a.$0
   });
  },AppFramework.tryGetActW(plg,n));
 };
 AppFramework.tryGetWoW=function(plgName,viwName)
 {
  var o,o$1,o$2;
  o=(o$1=AppFramework.tryGetViw(plgName,viwName),o$1==null?null:{
   $:1,
   $0:{
    $:1,
    $0:o$1.$0.viwView
   }
  });
  return o==null?(o$2=AppFramework.tryGetVar(plgName,viwName),o$2==null?null:{
   $:1,
   $0:o$2.$0.varVar.get_View()
  }):o.$0;
 };
 AppFramework.tryGetVoV=function(plgName,varName)
 {
  var o,o$1,o$2;
  o=(o$1=AppFramework.tryGetVar(plgName,varName),o$1==null?null:{
   $:1,
   $0:{
    $:1,
    $0:o$1.$0.varVar
   }
  });
  return o==null?(o$2=AppFramework.tryGetViw(plgName,varName),o$2==null?null:{
   $:1,
   $0:new FromView.New(o$2.$0.viwView,Global.ignore)
  }):o.$0;
 };
 AppFramework.tryGetDoc=function(plgName,docName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgDocs.TryFindByKey(docName);
 };
 AppFramework.tryGetQry=function(plgName,qryName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgQueries.TryFindByKey(qryName);
 };
 AppFramework.tryGetAct=function(plgName,actName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgActions.TryFindByKey(actName);
 };
 AppFramework.tryGetViw=function(plgName,viwName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgViews.TryFindByKey(viwName);
 };
 AppFramework.tryGetVar=function(plgName,varName)
 {
  var o;
  o=AppFramework.tryGetPlugIn(plgName);
  return o==null?null:o.$0.plgVars.TryFindByKey(varName);
 };
 AppFramework.tryGetPlugIn=function(plgName)
 {
  return AppFramework.plugIns().TryFindByKey(plgName);
 };
 AppFramework.tryGetWoWW=function(plgName,viwName)
 {
  return View$1.Bind(function(a)
  {
   return a==null?View$1.Bind(function(a$1)
   {
    return a$1==null?View$1.Const(null):View$1.Map(function(a$2)
    {
     return{
      $:1,
      $0:a$2
     };
    },a$1.$0.varVar.get_View());
   },AppFramework.tryGetVarW(plgName,viwName)):View$1.Map(function(a$1)
   {
    return{
     $:1,
     $0:a$1
    };
   },a.$0.viwView);
  },AppFramework.tryGetViwW(plgName,viwName));
 };
 AppFramework.tryGetVoVW=function(plgName,varName)
 {
  return View$1.Bind(function(a)
  {
   return a==null?View$1.Map(function(a$1)
   {
    return a$1==null?null:{
     $:1,
     $0:new FromView.New(a$1.$0.viwView,Global.ignore)
    };
   },AppFramework.tryGetViwW(plgName,varName)):View$1.Const({
    $:1,
    $0:a.$0.varVar
   });
  },AppFramework.tryGetVarW(plgName,varName));
 };
 AppFramework.tryGetDocW=function(plgName,docName)
 {
  return View$1.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgDocs.TryFindByKeyAsView(docName):View$1.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.tryGetQryW=function(plgName,qryName)
 {
  return View$1.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgQueries.TryFindByKeyAsView(qryName):View$1.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.tryGetActW=function(plgName,actName)
 {
  return View$1.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgActions.TryFindByKeyAsView(actName):View$1.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.tryGetViwW=function(plgName,viwName)
 {
  return View$1.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgViews.TryFindByKeyAsView(viwName):View$1.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.tryGetVarW=function(plgName,varName)
 {
  return View$1.Bind(function(a)
  {
   return a!=null&&a.$==1?a.$0.plgVars.TryFindByKeyAsView(varName):View$1.Const(null);
  },AppFramework.tryGetPlugInW(plgName));
 };
 AppFramework.tryGetPlugInW=function(plgName)
 {
  return AppFramework.plugIns().TryFindByKeyAsView(plgName);
 };
 AppFramework.plugin=function()
 {
  SC$1.$cctor();
  return SC$1.plugin;
 };
 AppFramework.newDocF=function(name,docF)
 {
  return PlugInDoc.New(name,docF);
 };
 AppFramework.newActF=function(name,fncF)
 {
  return PlugInAction.New(name,fncF,View$1.Const(true));
 };
 AppFramework.newAct=function(name,fnc)
 {
  return PlugInAction.New(name,{
   $:0,
   $0:fnc
  },View$1.Const(true));
 };
 AppFramework.newQry=function(name,qry)
 {
  return PlugInQuery.New(name,qry);
 };
 AppFramework.newDoc=function(name,doc)
 {
  return PlugInDoc.New(name,{
   $:0,
   $0:doc
  });
 };
 AppFramework.newViw=function(name,viw)
 {
  return PlugInView.New(name,viw);
 };
 AppFramework.newVar=function(name,_var)
 {
  return PlugInVar.New(name,_var);
 };
 AppFramework.vertical$1681$39=function(mouseDown)
 {
  return function(te)
  {
   mouseDown(te.Event);
  };
 };
 AppFramework.vertical$1680$39=Global.id;
 AppFramework.vertical$1679$39=Global.id;
 AppFramework.vertical=function(partSizes,afterRender,afterRenderSp,mouseDown,gap)
 {
  var b,t,p,i;
  return(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"partsizes",
   $1:partSizes
  }).WithHole({
   $:7,
   $0:"afterrender",
   $1:afterRender
  }).WithHole({
   $:7,
   $0:"afterrendersp",
   $1:afterRenderSp
  }),t.WithHole(Handler.EventQ2(t.k,"mousedown",function()
  {
   return t.i;
  },function(te)
  {
   mouseDown(te.Event);
  }))).WithHole({
   $:2,
   $0:"gap",
   $1:gap
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.wcompsplitterver(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFramework.horizontal$1673$39=function(mouseDown)
 {
  return function(te)
  {
   mouseDown(te.Event);
  };
 };
 AppFramework.horizontal$1672$39=Global.id;
 AppFramework.horizontal$1671$39=Global.id;
 AppFramework.horizontal=function(partSizes,afterRender,afterRenderSp,mouseDown,gap)
 {
  var b,t,p,i;
  return(b=(t=ProviderBuilder.Make().WithHole({
   $:2,
   $0:"partsizes",
   $1:partSizes
  }).WithHole({
   $:7,
   $0:"afterrender",
   $1:afterRender
  }).WithHole({
   $:7,
   $0:"afterrendersp",
   $1:afterRenderSp
  }),t.WithHole(Handler.EventQ2(t.k,"mousedown",function()
  {
   return t.i;
  },function(te)
  {
   mouseDown(te.Event);
  }))).WithHole({
   $:2,
   $0:"gap",
   $1:gap
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.wcompsplitterhor(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFramework.mainDoc$1662$42=function()
 {
  return function()
  {
   AppFramework.mainDocV().Set("AppFramework.AppFwkClient");
  };
 };
 AppFramework.mainDoc=function()
 {
  var b,M,t,M$1,p,i;
  return(b=(M=AppFramework.getMainClientDoc(),(t=(M$1=AppFramework.mainDocV().get_View(),ProviderBuilder.Make().WithHole({
   $:2,
   $0:"maindoc",
   $1:M$1
  })),t.WithHole(Handler.EventQ2(t.k,"goclient",function()
  {
   return t.i;
  },function()
  {
   AppFramework.mainDocV().Set("AppFramework.AppFwkClient");
  }))).WithHole({
   $:0,
   $0:"mainclient",
   $1:M
  })),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.appframework(p[0])),(b.i=i,i)))).get_Doc();
 };
 AppFramework.getMainClientDoc=function()
 {
  var x;
  return Doc.EmbedView((x=AppFramework.plugIns().v,View$1.Map2(function(mainDoc,plgs)
  {
   var x$1,v;
   x$1=Seq.tryPick(function(plg)
   {
    var o;
    o=Seq.tryFind(function(doc)
    {
     return plg.plgName.get_Id()===mainDoc||plg.plgName.get_Id()+"."+doc.docName.get_Id()===mainDoc;
    },plg.plgDocs);
    return o==null?null:{
     $:1,
     $0:AppFramework.getLazyDoc(o.$0)
    };
   },plgs);
   v=AppFramework.AppFwkClient().f();
   return x$1==null?v:x$1.$0;
  },AppFramework.mainDocV().get_View(),x)));
 };
 AppFramework.getLazyDoc=function(doc)
 {
  var m;
  m=doc.docDoc;
  return m.$==0?m.$0.f():Doc.Element("div",[],[Doc.TextNode((function($1)
  {
   return function($2)
   {
    return $1("Doc with parameters not allowed here: "+GeneratedPrintf.p($2));
   };
  }(Global.id))(doc))]);
 };
 AppFramework.AppFwkClient=function()
 {
  SC$1.$cctor();
  return SC$1.AppFwkClient;
 };
 AppFramework.renderQueries$1626$39=function(qry)
 {
  return function()
  {
   Global.alert(qry.qryFunction(null));
  };
 };
 AppFramework.renderQueries=function()
 {
  function a(plg,qry)
  {
   return[plg.plgName,qry.qryName];
  }
  function a$1(plg,qry)
  {
   var b,t,N,p,i;
   return(b=(t=(N=qry.qryName.get_Id(),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })),t.WithHole(Handler.EventQ2(t.k,"select",function()
   {
    return t.i;
   },function()
   {
    Global.alert(qry.qryFunction(null));
   }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View$1.Map(function(plg)
  {
   return Seq.map(function(v)
   {
    return[plg,v];
   },plg.plgQueries);
  },AppFramework.currentPlugInW()));
 };
 AppFramework.renderActions$1615$51=function(act)
 {
  return function(ev)
  {
   AppFramework.callFunction(ev,null,act.actFunction);
  };
 };
 AppFramework.renderActions$1611$51=function(act)
 {
  return function(ev)
  {
   AppFramework.callFunction(ev,null,act.actFunction);
  };
 };
 AppFramework.renderActions=function()
 {
  function a(plg,act)
  {
   return[plg.plgName,act.actName];
  }
  function a$1(plg,act)
  {
   var parms,m,x,x$1;
   parms=(m=act.actFunction,m.$==1?(x=Strings.concat(", ",List.ofArray([m.$1])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x)):m.$==2?(x$1=Strings.concat(", ",List.ofArray([m.$1,m.$2])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$1)):"");
   return Doc.EmbedView(View$1.Map(function(a$2)
   {
    var b,t,N,p,i,b$1,t$1,N$1,p$1,i$1;
    return a$2?(b=(t=(N=act.actName.get_Id()+parms,ProviderBuilder.Make().WithHole({
     $:1,
     $0:"name",
     $1:N
    })),t.WithHole(Handler.EventQ2(t.k,"click",function()
    {
     return t.i;
    },function(ev)
    {
     AppFramework.callFunction(ev,null,act.actFunction);
    }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.action(p[0])),(b.i=i,i)))).get_Doc():(b$1=(t$1=(N$1=act.actName.get_Id(),ProviderBuilder.Make().WithHole({
     $:1,
     $0:"name",
     $1:N$1
    })),t$1.WithHole(Handler.EventQ2(t$1.k,"click",function()
    {
     return t$1.i;
    },function(ev)
    {
     AppFramework.callFunction(ev,null,act.actFunction);
    }))),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],LayoutEngine_Templates.actiondisabled(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
   },act.actEnabled));
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View$1.Map(function(plg)
  {
   return Seq.map(function(v)
   {
    return[plg,v];
   },plg.plgActions);
  },AppFramework.currentPlugInW()));
 };
 AppFramework.callFunction=function(p1,p2,actF)
 {
  if(actF.$==1)
   actF.$0(p1);
  else
   if(actF.$==2)
    (actF.$0(p1))(p2);
   else
    actF.$0();
 };
 AppFramework.renderDocs$1589$39=function(doc)
 {
  return function()
  {
   View$1.Get(function(plg)
   {
    var a;
    a=plg.plgName.get_Id()+"."+doc.docName.get_Id();
    AppFramework.mainDocV().Set(a);
   },AppFramework.currentPlugInW());
  };
 };
 AppFramework.renderDocs=function()
 {
  function a(plg,doc)
  {
   return[plg.plgName,doc.docName];
  }
  function a$1(plg,doc)
  {
   var parms,m,x,x$1,x$2,x$3,x$4,b,t,N,p,i;
   parms=(m=doc.docDoc,m.$==1?(x=Strings.concat(", ",List.ofArray([m.$1])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x)):m.$==2?(x$1=Strings.concat(", ",List.ofArray([m.$1,m.$2])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$1)):m.$==3?(x$2=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$2)):m.$==4?(x$3=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3,m.$4])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$3)):m.$==5?(x$4=Strings.concat(", ",List.ofArray([m.$1,m.$2,m.$3,m.$4,m.$5])),(function($1)
   {
    return function($2)
    {
     return $1("("+Utils.toSafe($2)+")");
    };
   }(Global.id))(x$4)):"");
   return(b=(t=(N=doc.docName.get_Id()+parms,ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })),t.WithHole(Handler.EventQ2(t.k,"select",function()
   {
    return t.i;
   },function()
   {
    View$1.Get(function(plg$1)
    {
     var a$2;
     a$2=plg$1.plgName.get_Id()+"."+doc.docName.get_Id();
     AppFramework.mainDocV().Set(a$2);
    },AppFramework.currentPlugInW());
   }))),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View$1.Map(function(plg)
  {
   return Seq.map(function(v)
   {
    return[plg,v];
   },plg.plgDocs);
  },AppFramework.currentPlugInW()));
 };
 AppFramework.renderViews=function()
 {
  function a(plg,viw)
  {
   return[plg.plgName,viw.viwName];
  }
  function a$1(plg,viw)
  {
   var b,N,p,i;
   return(b=(N=viw.viwName.get_Id(),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })).WithHole({
    $:2,
    $0:"value",
    $1:viw.viwView
   }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.namevalue(p[0])),(b.i=i,i)))).get_Doc();
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View$1.Map(function(plg)
  {
   return Seq.map(function(v)
   {
    return[plg,v];
   },plg.plgViews);
  },AppFramework.currentPlugInW()));
 };
 AppFramework.renderVars=function()
 {
  function a(plg,_var)
  {
   return[plg.plgName,_var.varName];
  }
  function a$1(plg,_var)
  {
   var b,N,p,i;
   return(b=(N=_var.varName.get_Id(),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })).WithHole({
    $:8,
    $0:"value",
    $1:_var.varVar
   }),(p=Handler.CompleteHoles(b.k,b.h,[["value",0]]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.namevalueinput(p[0])),(b.i=i,i)))).get_Doc();
  }
  return Doc.ConvertBy(function($1)
  {
   return a($1[0],$1[1]);
  },function($1)
  {
   return a$1($1[0],$1[1]);
  },View$1.Map(function(plg)
  {
   return Seq.map(function(v)
   {
    return[plg,v];
   },plg.plgVars);
  },AppFramework.currentPlugInW()));
 };
 AppFramework.renderPlugIns$1551$35=function(name)
 {
  return function()
  {
   AppFramework.selectionPlugInO().Set({
    $:1,
    $0:name
   });
  };
 };
 AppFramework.renderPlugIns=function()
 {
  return Doc.Flatten(AppFramework.plugIns().MapLens(function($1)
  {
   var b,t,N,p,i;
   return(b=(t=(N=$1.get_Id(),ProviderBuilder.Make().WithHole({
    $:1,
    $0:"name",
    $1:N
   })),t.WithHole(Handler.EventQ2(t.k,"select",function()
   {
    return t.i;
   },function()
   {
    AppFramework.selectionPlugInO().Set({
     $:1,
     $0:$1
    });
   }))).WithHole({
    $:2,
    $0:"selected",
    $1:View$1.Map(function($2)
    {
     return Unchecked.Equals($2,{
      $:1,
      $0:$1
     })?"selected":"";
    },AppFramework.selectionPlugInO().get_View())
   }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.tile(p[0])),(b.i=i,i)))).get_Doc();
  }));
 };
 AppFramework.currentPlugInV=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInV;
 };
 AppFramework.currentPlugInW=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInW;
 };
 AppFramework.selectionPlugInO=function()
 {
  SC$1.$cctor();
  return SC$1.selectionPlugInO;
 };
 AppFramework.splitName=function(lytNm)
 {
  function f(s)
  {
   return String.splitByChar(".",s);
  }
  function g(a)
  {
   return Arrays.length(a)===1?[lytNm,new PlgElemName({
    $:0,
    $0:Strings.Trim(Arrays.get(a,0))
   })]:[new PlugInName({
    $:0,
    $0:Strings.Trim(Arrays.get(a,0))
   }),new PlgElemName({
    $:0,
    $0:Strings.Trim(Arrays.get(a,1))
   })];
  }
  return function(x)
  {
   return g(f(x));
  };
 };
 AppFramework.defaultPlugIn=function()
 {
  return PlugIn.New(new PlugInName({
   $:0,
   $0:""
  }),new ListModel$1.New$1(function(_var)
  {
   return _var.varName;
  }),new ListModel$1.New$1(function(viw)
  {
   return viw.viwName;
  }),new ListModel$1.New$1(function(doc)
  {
   return doc.docName;
  }),new ListModel$1.New$1(function(act)
  {
   return act.actName;
  }),new ListModel$1.New$1(function(qry)
  {
   return qry.qryName;
  }));
 };
 AppFramework.TemplateFileName=function()
 {
  SC$1.$cctor();
  return SC$1.TemplateFileName;
 };
 AppFramework.mainDocV=function()
 {
  SC$1.$cctor();
  return SC$1.mainDocV;
 };
 AppFramework.plugIns=function()
 {
  SC$1.$cctor();
  return SC$1.plugIns;
 };
 LM.addElements=function(li,elems)
 {
  li.elems.AppendMany(elems);
 };
 LM.getDoc=function(keyF,def,newF,predWO,elUI)
 {
  return LM.getDocFor(ListModel$1.Create(keyF,List.T.Empty),def,newF,predWO,elUI);
 };
 LM.getDocFor=function(elements,def,newF,predWO,elUI)
 {
  var keyF,selected0,selectedV,b,result,elUIF;
  function f(a)
  {
   var $1;
   return a!=null&&a.$==1&&(elements.ContainsKey(a.$0)&&($1=a.$0,true))?{
    $:1,
    $0:$1
   }:null;
  }
  function g(v)
  {
   if(!Unchecked.Equals(selected0.Get(),v))
    selected0.Set(v);
  }
  function _delete(k,u)
  {
   selectedV.Set(null);
   return elements.RemoveByKey(k);
  }
  keyF=elements.key;
  selected0=Var$2.Create$1(null);
  selectedV=new FromView.New((b=View$1.get_Do(),View$1.Bind(function(a)
  {
   var sel;
   return a!=null&&a.$==1?(sel=a.$0,View$1.Bind(function(a$1)
   {
    return!a$1?View$1.Const(null):View$1.Const({
     $:1,
     $0:sel
    });
   },elements.ContainsKeyAsView(sel))):View$1.Const(null);
  },selected0.get_View())),function(x)
  {
   return g(f(x));
  });
  result=ListModelData.New(elements,Doc.get_Empty(),selectedV,function()
  {
   var n;
   n=newF();
   elements.Append(n);
   selectedV.Set({
    $:1,
    $0:keyF(n)
   });
   return n;
  },function()
  {
   var o;
   o=selectedV.Get();
   o==null?void 0:_delete(o.$0,null);
  },def);
  elUIF=elUI(result);
  return ListModelData.New(result.elems,Doc.Convert(Global.id,ListModel.MapLens(predWO,function(k,v)
  {
   return(elUIF(View$1.Const({
    $:1,
    $0:k
   })))(v);
  },elements)),result.selV,result.add,result.delCur,result.def);
 };
 LMX.addElements=function(li,elems)
 {
  Seq.iter(function(v)
  {
   li.elems.Append([(li.add())[0],v]);
  },elems);
 };
 LMX.getDocGuidId=function(def,newElem,elemUI)
 {
  var x;
  function e(a,b,v)
  {
   return LMX.elemUI2(elemUI,a,b,v);
  }
  x=LMX.addNewO(newElem,new GuidId({
   $:0,
   $0:Guid.NewGuid()
  }),function()
  {
   return new GuidId({
    $:0,
    $0:Guid.NewGuid()
   });
  });
  return LM.getDoc(function(t)
  {
   return t[0];
  },[new GuidId({
   $:0,
   $0:"00000000-0000-0000-0000-000000000000"
  }),def],x,null,Runtime.Curried3(e));
 };
 LMX.getDocGuid=function(def,newElem,elemUI)
 {
  function e(a,b,v)
  {
   return LMX.elemUI2(elemUI,a,b,v);
  }
  return LM.getDoc(function(t)
  {
   return t[0];
  },["00000000-0000-0000-0000-000000000000",def],LMX.addNewO(newElem,Guid.NewGuid(),function()
  {
   return Guid.NewGuid();
  }),null,Runtime.Curried3(e));
 };
 LMX.getDocInt=function(def,newElem,elemUI)
 {
  function e(a,b,v)
  {
   return LMX.elemUI2(elemUI,a,b,v);
  }
  return LM.getDoc(function(t)
  {
   return t[0];
  },[-1,def],LMX.addNewO(newElem,0,function(y)
  {
   return 1+y;
  }),null,Runtime.Curried3(e));
 };
 LMX.elemUI2=function(elemUI,a,b,v)
 {
  function a$1(i,nv)
  {
   return[i,nv];
  }
  return elemUI(a,b,Var$2.Lens(v,function(t)
  {
   return t[1];
  },function($1,$2)
  {
   return(function($3)
   {
    var $4;
    $4=$3[0];
    return function($5)
    {
     return a$1($4,$5);
    };
   }($1))($2);
  }));
 };
 LMX.addNewO=function(newF,firstKey,nextKey)
 {
  var k;
  k=firstKey;
  return function()
  {
   var e;
   e=[k,newF()];
   k=nextKey(k);
   return e;
  };
 };
 StartAppFramework.startWith=function(html)
 {
  var x;
  x=StartAppFramework.startWithHtmlD();
  (Depend.resolver(List.ofArray([["AppFrameworkTemplate.html",AppFrameworkTemplate.html()+html]]),x))();
 };
 StartAppFramework.startWithHtmlD=function()
 {
  SC$1.$cctor();
  return SC$1.startWithHtmlD;
 };
 StartAppFramework.htmlD=function()
 {
  SC$1.$cctor();
  return SC$1.htmlD;
 };
 LayoutEngine.New=function(lytName,lytDefinition)
 {
  return{
   lytName:lytName,
   lytDefinition:lytDefinition
  };
 };
 Measures=LayoutEngineModule.Measures=Runtime.Class({
  toString:function()
  {
   return this.$==1?((((Runtime.Curried(function($1,$2,$3,$4)
   {
    return $1(Global.String($2)+"-"+Global.String($3)+"-"+Global.String($4));
   },4))(Global.id))(Operators$3.toInt(this.$0)))(Operators$3.toInt(this.$1)))(Operators$3.toInt(this.$2)):Global.String(Operators$3.toInt(this.$1?this.$0:-this.$0));
  }
 },null,Measures);
 RefType.RPlg={
  $:4
 };
 RefType.RAct={
  $:3
 };
 RefType.RViw={
  $:2
 };
 RefType.RVar={
  $:1
 };
 RefType.RDoc={
  $:0
 };
 Syntax.createEntryO2=function(lytNm,refs)
 {
  function addR(nm,en)
  {
   return refs.ContainsKey(nm)?((Result.errorf(Runtime.Curried3(function($1,$2,$3)
   {
    return $1("Already exists "+Utils.toSafe($2)+" : "+LayoutEngine_GeneratedPrintf.p$3($3)+" ");
   })))(nm))(en):(refs.Add(nm,en),{
    $:0,
    $0:null
   });
  }
  function ok(nm,en)
  {
   return Result$1.Map(function()
   {
    return[nm,en];
   },addR(nm,en));
  }
  function ko(msg,line)
  {
   return Result$1.Bind(function()
   {
    return{
     $:1,
     $0:msg
    };
   },addR(Seq.head(Strings.SplitChars(line,[" ","\u0009"],1)),{
    $:0,
    $0:{
     $:6,
     $0:{
      $:0,
      $0:"div",
      $1:{
       $:0,
       $0:List.T.Empty
      },
      $2:List.ofArray([{
       $:0,
       $0:List.ofArray([{
        $:0,
        $0:msg
       }])
      }])
     }
    }
   }));
  }
  function getRef(nm)
  {
   try
   {
    return refs.get_Item(nm);
   }
   catch(e)
   {
    return(function($1)
    {
     return function($2)
     {
      return $1("Could not find reference to "+Utils.toSafe($2));
     };
    }(Operators$3.FailWith))(nm);
   }
  }
  function getType(rf)
  {
   var entry,nm,ly,$1,a,m,pg,nmm;
   if(rf.$==1)
    {
     nm=rf.$1;
     ly=rf.$0;
     try
     {
      a=getRef(ly);
      if(a.$==5)
       try
       {
        $1=a.$0.$0.get_Item(nm);
       }
       catch(e)
       {
        $1=(((Runtime.Curried3(function($2,$3,$4)
        {
         return $2("Could not find reference to "+Utils.toSafe($3)+"."+Utils.toSafe($4));
        }))(Operators$3.FailWith))(ly))(nm);
       }
      else
       $1=(function($2)
       {
        return function($3)
        {
         return $2("PlugIn not registered: "+LayoutEngine_GeneratedPrintf.p($3));
        };
       }(Operators$3.FailWith))(rf);
      return[$1,null];
     }
     catch(e$1)
     {
      m=AppFramework.tryGetPlugIn(new PlugInName({
       $:0,
       $0:ly
      }));
      return m!=null&&m.$==1?(pg=m.$0,nmm=new PlgElemName({
       $:0,
       $0:nm
      }),[pg.plgDocs.ContainsKey(nmm)?RefType.RDoc:pg.plgActions.ContainsKey(nmm)?RefType.RAct:pg.plgVars.ContainsKey(nmm)?RefType.RVar:pg.plgViews.ContainsKey(nmm)?RefType.RViw:(((Runtime.Curried3(function($2,$3,$4)
      {
       return $2("Could not find reference to "+Utils.toSafe($3)+"."+Utils.toSafe($4));
      }))(Operators$3.FailWith))(ly))(nm),null]):Operators$3.FailWith(e$1.message);
     }
    }
   else
    {
     entry=getRef(rf.$0);
     return[entry.$==1?RefType.RAct:entry.$==2?RefType.RVar:entry.$==3?RefType.RViw:entry.$==4?RefType.RViw:entry.$==6?RefType.RPlg:entry.$==5?(function($2)
     {
      return function($3)
      {
       return $2("PlugIn should not be referenced by itself: "+LayoutEngine_GeneratedPrintf.p($3));
      };
     }(Operators$3.FailWith))(rf):RefType.RDoc,{
      $:1,
      $0:entry
     }];
    }
  }
  return function(line)
  {
   var $1,a;
   try
   {
    $1=(a=Syntax.createEntryO(getType,lytNm,line),a==null?ko((function($2)
    {
     return function($3)
     {
      return $2("Line not matched!: "+Utils.toSafe($3));
     };
    }(Global.id))(line),line):ok(a.$0.$0,a.$0.$1));
   }
   catch(e)
   {
    $1=ko(e.message,line);
   }
   return{
    $:1,
    $0:$1
   };
  };
 };
 Syntax.createEntryO=function(getType,lytNm,line)
 {
  var m,$1,a,a$1,$2,a$2,a$3,$3,a$4,a$5,$4,a$6,a$7,$5,a$8,a$9,$6,a$10,a$11,a$12,a$13,$7,a$14,a$15,a$16,a$17,$8,a$18,a$19,a$20,a$21,$9,a$22,a$23,a$24,$10,a$25,a$26,a$27,$11,a$28,a$29,$12,a$30,$13,a$31,a$32,a$33,$14,a$34,a$35,$15,a$36,a$37,$16,a$38,a$39,$17,a$40,a$41,a$42,$18,a$43,a$44,a$45,a$46;
  function Rt(a$47)
  {
   var a$48,itr;
   a$48=Syntax.R(a$47);
   return a$48!=null&&a$48.$==1?(itr=a$48.$0,{
    $:1,
    $0:[getType(itr),itr]
   }):null;
  }
  function DocRf(a$47)
  {
   var $19,a$48;
   return(a$48=Rt(a$47),a$48!=null&&a$48.$==1&&(a$48.$0[0][0].$==0&&($19=a$48.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$19
    }
   }:null;
  }
  function VarRf(a$47)
  {
   var $19,a$48;
   return(a$48=Rt(a$47),a$48!=null&&a$48.$==1&&(a$48.$0[0][0].$==1&&($19=a$48.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$19
    }
   }:null;
  }
  function ViwRf(a$47)
  {
   var $19,a$48;
   return(a$48=Rt(a$47),a$48!=null&&a$48.$==1&&(a$48.$0[0][0].$==2&&($19=a$48.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$19
    }
   }:null;
  }
  function ActRf(a$47)
  {
   var $19,a$48;
   return(a$48=Rt(a$47),a$48!=null&&a$48.$==1&&(a$48.$0[0][0].$==3&&($19=a$48.$0[1],true)))?{
    $:1,
    $0:{
     $:0,
     $0:$19
    }
   }:null;
  }
  function PlgRf(a$47)
  {
   var $19,a$48,$20;
   return(a$48=Rt(a$47),a$48!=null&&a$48.$==1&&(a$48.$0[0][0].$==4&&(($20=a$48.$0[0][1],$20!=null&&$20.$==1)&&(a$48.$0[0][1].$0.$==6&&($19=[a$48.$0[0][1].$0.$0,a$48.$0[1]],true)))))?{
    $:1,
    $0:$19[0]
   }:null;
  }
  function Name(a$47)
  {
   var $19,a$48;
   return(a$48=Syntax.R(a$47),a$48!=null&&a$48.$==1&&(a$48.$0.$==0&&($19=a$48.$0.$0,true)))?{
    $:1,
    $0:$19
   }:null;
  }
  function NamU(a$47)
  {
   var $19,a$48;
   return(a$48=Name(a$47),a$48!=null&&a$48.$==1&&(Strings.StartsWith(a$48.$0,"_")&&($19=a$48.$0,true)))?{
    $:1,
    $0:$19
   }:null;
  }
  function Tr(a$47)
  {
   var a$48,a$49,a$50;
   a$48=VarRf(a$47);
   return a$48!=null&&a$48.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$48.$0
    }
   }:(a$49=ViwRf(a$47),a$49!=null&&a$49.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$49.$0
    }
   }:(a$50=ActRf(a$47),a$50!=null&&a$50.$==1?{
    $:1,
    $0:{
     $:3,
     $0:a$50.$0
    }
   }:null));
  }
  function Indi(txt)
  {
   var m$1;
   m$1=String.delimitedO("@{","}",txt);
   return m$1!=null&&m$1.$==1?{
    $:1,
    $0:[m$1.$0[0],{
     $:1,
     $0:m$1.$0[1]
    },m$1.$0[2]]
   }:null;
  }
  function Tx(txt)
  {
   var $19,a$47,a$48,aft,bef,tl,a$49,$20;
   return(a$47=Indi(txt),a$47!=null&&a$47.$==1&&(a$48=Tr(a$47.$0[1]),a$48!=null&&a$48.$==1&&($19=[a$47.$0[2],a$47.$0[0],a$48.$0],true)))?(aft=$19[0],(bef=$19[1],(tl=bef===""?List.ofArray([$19[2]]):List.ofArray([{
    $:0,
    $0:bef
   },$19[2]]),aft===""?{
    $:1,
    $0:tl
   }:(a$49=Tx(aft),a$49!=null&&a$49.$==1?{
    $:1,
    $0:List.append(tl,a$49.$0)
   }:null)))):($20=Indi(txt),$20!=null&&$20.$==1)?null:{
    $:1,
    $0:List.ofArray([{
     $:0,
     $0:txt
    }])
   };
  }
  function ActI(txt)
  {
   var $19,a$47,a$48;
   return(a$47=Indi(txt),a$47!=null&&a$47.$==1&&(a$48=ActRf(a$47.$0[1]),a$48!=null&&a$48.$==1&&(Strings.Trim(a$47.$0[0])===""&&Strings.Trim(a$47.$0[2])===""&&($19=[a$47.$0[2],a$48.$0,a$47.$0[0]],true))))?{
    $:1,
    $0:$19[1]
   }:null;
  }
  function QTx(a$47)
  {
   var $19,a$48;
   return a$47.$==0&&(a$48=Tx(a$47.$0),a$48!=null&&a$48.$==1&&($19=a$48.$0,true))?{
    $:1,
    $0:$19
   }:null;
  }
  function At(a$47)
  {
   return a$47.$==0?{
    $:1,
    $0:Arrays.ofSeq(Seq.choose(function(a$48)
    {
     var m$1,$19,a$49,$20,a$50,m$2,$21,a$51;
     m$1=Strings.SplitChars(Strings.Trim(a$48),["="],0);
     return!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$49=ActI(Arrays.get(m$1,1)),a$49!=null&&a$49.$==1&&($19=[a$49.$0,Arrays.get(m$1,0)],true))?{
      $:1,
      $0:{
       $:2,
       $0:Strings.Trim($19[1]),
       $1:$19[0]
      }
     }:!Unchecked.Equals(m$1,null)&&m$1.length===2&&(a$50=Tx(Arrays.get(m$1,1)),a$50!=null&&a$50.$==1&&($20=[Arrays.get(m$1,0),a$50.$0],true))?{
      $:1,
      $0:{
       $:1,
       $0:Strings.Trim($20[0]),
       $1:$20[1]
      }
     }:(m$2=Strings.SplitChars(Strings.Trim(a$48),[":"],0),!Unchecked.Equals(m$2,null)&&m$2.length===2&&(a$51=Tx(Arrays.get(m$2,1)),a$51!=null&&a$51.$==1&&($21=[Arrays.get(m$2,0),a$51.$0],true))?{
      $:1,
      $0:{
       $:0,
       $0:Strings.Trim($21[0]),
       $1:$21[1]
      }
     }:(function($22)
     {
      return function($23)
      {
       return $22("Attributes should be like: \"name=val\" or \"name:val\" and separated by ';' : "+Utils.toSafe($23));
      };
     }(Operators$3.FailWith))(a$48));
    },Seq.filter(function(v)
    {
     return Strings.Trim(v)!=="";
    },Strings.SplitChars(Strings.Trim(a$47.$0),[";"],0))))
   }:null;
  }
  function Pr(a$47)
  {
   var a$48,a$49,a$50,a$51,a$52;
   a$48=QTx(a$47);
   return a$48!=null&&a$48.$==1?{
    $:1,
    $0:{
     $:0,
     $0:a$48.$0
    }
   }:(a$49=DocRf(a$47),a$49!=null&&a$49.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$49.$0
    }
   }:(a$50=VarRf(a$47),a$50!=null&&a$50.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$50.$0
    }
   }:(a$51=ViwRf(a$47),a$51!=null&&a$51.$==1?{
    $:1,
    $0:{
     $:3,
     $0:a$51.$0
    }
   }:(a$52=ActRf(a$47),a$52!=null&&a$52.$==1?{
    $:1,
    $0:{
     $:4,
     $0:a$52.$0
    }
   }:null))));
  }
  function Prs(a$47)
  {
   var $19,a$48,a$49;
   switch(a$47.$==1?(a$48=Pr(a$47.$0),a$48!=null&&a$48.$==1?(a$49=Prs(a$47.$1),a$49!=null&&a$49.$==1?($19=[a$48.$0,a$49.$0],1):2):2):0)
   {
    case 0:
     return{
      $:1,
      $0:List.T.Empty
     };
    case 1:
     return{
      $:1,
      $0:new List.T({
       $:1,
       $0:$19[0],
       $1:$19[1]
      })
     };
    case 2:
     return null;
   }
  }
  function Nd(a$47)
  {
   var a$48,a$49,a$50,a$51;
   a$48=QTx(a$47);
   return a$48!=null&&a$48.$==1?{
    $:1,
    $0:{
     $:0,
     $0:a$48.$0
    }
   }:(a$49=DocRf(a$47),a$49!=null&&a$49.$==1?{
    $:1,
    $0:{
     $:1,
     $0:a$49.$0
    }
   }:(a$50=VarRf(a$47),a$50!=null&&a$50.$==1?{
    $:1,
    $0:{
     $:2,
     $0:a$50.$0
    }
   }:(a$51=ViwRf(a$47),a$51!=null&&a$51.$==1?{
    $:1,
    $0:{
     $:3,
     $0:a$51.$0
    }
   }:null)));
  }
  function Nds(a$47)
  {
   var $19,a$48,a$49;
   switch(a$47.$==1?(a$48=Nd(a$47.$0),a$48!=null&&a$48.$==1?(a$49=Nds(a$47.$1),a$49!=null&&a$49.$==1?($19=[a$48.$0,a$49.$0],1):2):2):0)
   {
    case 0:
     return{
      $:1,
      $0:List.T.Empty
     };
    case 1:
     return{
      $:1,
      $0:new List.T({
       $:1,
       $0:$19[0],
       $1:$19[1]
      })
     };
    case 2:
     return null;
   }
  }
  function Pgs(a$47)
  {
   var $19,a$48,a$49;
   switch(a$47.$==1?(a$48=PlgRf(a$47.$0),a$48!=null&&a$48.$==1?(a$49=Pgs(a$47.$1),a$49!=null&&a$49.$==1?($19=[a$48.$0,a$49.$0],1):2):2):0)
   {
    case 0:
     return{
      $:1,
      $0:List.T.Empty
     };
    case 1:
     return{
      $:1,
      $0:new List.T({
       $:1,
       $0:$19[0],
       $1:$19[1]
      })
     };
    case 2:
     return null;
   }
  }
  m=LayoutEngineModule.splitTokens(line);
  return m.$==1&&(a=Name(m.$0),a!=null&&a.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==0&&(a$1=Pgs(m.$1.$1),a$1!=null&&a$1.$==1&&($1=[a$1.$0,a.$0],true)))))?Syntax.entryPlg($1[1],{
   $:0,
   $0:new FSharpMap.New($1[0])
  }):m.$==1&&(a$2=NamU(m.$0),a$2!=null&&a$2.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$3=Name(m.$1.$1.$0),a$3!=null&&a$3.$==1&&(m.$1.$1.$1.$==0&&($2=[a$2.$0,a$3.$0],true)))))))?Syntax.entryRef($2[0],$2[1],RefType.RDoc):m.$==1&&(a$4=NamU(m.$0),a$4!=null&&a$4.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$5=Name(m.$1.$1.$0),a$5!=null&&a$5.$==1&&(m.$1.$1.$1.$==0&&($3=[a$4.$0,a$5.$0],true)))))))?Syntax.entryRef($3[0],$3[1],RefType.RVar):m.$==1&&(a$6=NamU(m.$0),a$6!=null&&a$6.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$7=Name(m.$1.$1.$0),a$7!=null&&a$7.$==1&&(m.$1.$1.$1.$==0&&($4=[a$6.$0,a$7.$0],true)))))))?Syntax.entryRef($4[0],$4[1],RefType.RViw):m.$==1&&(a$8=NamU(m.$0),a$8!=null&&a$8.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==5&&(m.$1.$1.$==1&&(a$9=Name(m.$1.$1.$0),a$9!=null&&a$9.$==1&&(m.$1.$1.$1.$==0&&($5=[a$8.$0,a$9.$0],true)))))))?Syntax.entryRef($5[0],$5[1],RefType.RAct):m.$==1&&(a$10=Name(m.$0),a$10!=null&&a$10.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$11=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$11!=null&&a$11.$==1&&(m.$1.$1.$1.$==1&&(a$12=DocRf(m.$1.$1.$1.$0),a$12!=null&&a$12.$==1&&(m.$1.$1.$1.$1.$==1&&(a$13=DocRf(m.$1.$1.$1.$1.$0),a$13!=null&&a$13.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($6=[a$12.$0,a$11.$0,a$10.$0,a$13.$0],true)))))))))))?Syntax.entryDoc($6[2],{
   $:0,
   $0:{
    $:0,
    $0:true,
    $1:$6[1],
    $2:$6[0],
    $3:$6[3]
   }
  }):m.$==1&&(a$14=Name(m.$0),a$14!=null&&a$14.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$15=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$15!=null&&a$15.$==1&&(m.$1.$1.$1.$==1&&(a$16=DocRf(m.$1.$1.$1.$0),a$16!=null&&a$16.$==1&&(m.$1.$1.$1.$1.$==1&&(a$17=DocRf(m.$1.$1.$1.$1.$0),a$17!=null&&a$17.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($7=[a$16.$0,a$15.$0,a$14.$0,a$17.$0],true)))))))))))?Syntax.entryDoc($7[2],{
   $:0,
   $0:{
    $:0,
    $0:false,
    $1:$7[1],
    $2:$7[0],
    $3:$7[3]
   }
  }):m.$==1&&(a$18=Name(m.$0),a$18!=null&&a$18.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$19=ActRf(m.$1.$1.$0),a$19!=null&&a$19.$==1&&(m.$1.$1.$1.$==1&&(a$20=At(m.$1.$1.$1.$0),a$20!=null&&a$20.$==1&&(m.$1.$1.$1.$1.$==1&&(a$21=QTx(m.$1.$1.$1.$1.$0),a$21!=null&&a$21.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($8=[a$19.$0,a$20.$0,a$18.$0,a$21.$0],true)))))))))))?Syntax.entryDoc($8[2],{
   $:1,
   $0:{
    $:0,
    $0:$8[0],
    $1:$8[1],
    $2:$8[3]
   }
  }):m.$==1&&(a$22=Name(m.$0),a$22!=null&&a$22.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$23=VarRf(m.$1.$1.$0),a$23!=null&&a$23.$==1&&(m.$1.$1.$1.$==1&&(a$24=At(m.$1.$1.$1.$0),a$24!=null&&a$24.$==1&&(m.$1.$1.$1.$1.$==0&&($9=[a$24.$0,a$22.$0,a$23.$0],true)))))))))?Syntax.entryDoc($9[1],{
   $:2,
   $0:{
    $:0,
    $0:$9[2],
    $1:$9[0]
   }
  }):m.$==1&&(a$25=Name(m.$0),a$25!=null&&a$25.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==3&&(m.$1.$1.$==1&&(a$26=VarRf(m.$1.$1.$0),a$26!=null&&a$26.$==1&&(m.$1.$1.$1.$==1&&(a$27=At(m.$1.$1.$1.$0),a$27!=null&&a$27.$==1&&(m.$1.$1.$1.$1.$==0&&($10=[a$27.$0,a$25.$0,a$26.$0],true)))))))))?Syntax.entryDoc($10[1],{
   $:3,
   $0:{
    $:0,
    $0:$10[2],
    $1:$10[0]
   }
  }):m.$==1&&(a$28=Name(m.$0),a$28!=null&&a$28.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$29=(a$30=QTx(m.$1.$1.$0),a$30!=null&&a$30.$==1&&(a$30.$0.$==1&&(a$30.$0.$0.$==0&&(a$30.$0.$1.$==0&&($12=a$30.$0.$0.$0,true)))))?{
   $:1,
   $0:$12
  }:null,a$29!=null&&a$29.$==1&&(m.$1.$1.$1.$==0&&($11=[a$28.$0,a$29.$0],true)))))))?Syntax.entryVar($11[0],{
   $:0,
   $0:Strings.Trim($11[1])
  }):m.$==1&&(a$31=Name(m.$0),a$31!=null&&a$31.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$32=DocRf(m.$1.$1.$0),a$32!=null&&a$32.$==1&&(a$33=Prs(m.$1.$1.$1),a$33!=null&&a$33.$==1&&($13=[a$32.$0,a$31.$0,a$33.$0],true)))))))?Syntax.entryDoc($13[1],{
   $:4,
   $0:{
    $:0,
    $0:$13[0],
    $1:$13[2]
   }
  }):m.$==1&&(a$34=Name(m.$0),a$34!=null&&a$34.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==2&&(a$35=Prs(m.$1.$1),a$35!=null&&a$35.$==1&&($14=[a$34.$0,a$35.$0],true)))))?Syntax.entryView($14[0],{
   $:0,
   $0:$14[1]
  }):m.$==1&&(a$36=Name(m.$0),a$36!=null&&a$36.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==3&&(a$37=Prs(m.$1.$1),a$37!=null&&a$37.$==1&&($15=[a$36.$0,a$37.$0],true)))))?Syntax.entryVJS($15[0],{
   $:0,
   $0:$15[1]
  }):m.$==1&&(a$38=Name(m.$0),a$38!=null&&a$38.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==4&&(a$39=Nds(m.$1.$1),a$39!=null&&a$39.$==1&&($16=[a$38.$0,a$39.$0],true)))))?Syntax.entryDoc($16[0],{
   $:5,
   $0:{
    $:0,
    $0:$16[1]
   }
  }):m.$==1&&(a$40=Name(m.$0),a$40!=null&&a$40.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==5&&(m.$1.$1.$==1&&(a$41=ActRf(m.$1.$1.$0),a$41!=null&&a$41.$==1&&(a$42=Prs(m.$1.$1.$1),a$42!=null&&a$42.$==1&&($17=[a$41.$0,a$40.$0,a$42.$0],true)))))))?Syntax.entryAct($17[1],{
   $:0,
   $0:$17[0],
   $1:$17[2]
  }):m.$==1&&(a$43=Name(m.$0),a$43!=null&&a$43.$==1&&(m.$1.$==1&&(a$44=LayoutEngineModule.Vertical(m.$1.$0),a$44.$==5&&(m.$1.$1.$==1&&(a$45=Pr(m.$1.$1.$0),a$45!=null&&a$45.$==1&&(a$46=Nds(m.$1.$1.$1),a$46!=null&&a$46.$==1&&($18=[a$45.$0,a$44.$0,a$43.$0,a$46.$0],true)))))))?Syntax.entryDoc($18[2],{
   $:6,
   $0:{
    $:0,
    $0:$18[1],
    $1:$18[0],
    $2:$18[3]
   }
  }):null;
 };
 Syntax.R=function(a)
 {
  var a$1,m,n;
  a$1=LayoutEngineModule.Identifier(a);
  return a$1!=null&&a$1.$==1?(m=Strings.SplitChars(a$1.$0,["."],0),!Unchecked.Equals(m,null)&&m.length===1?{
   $:1,
   $0:{
    $:0,
    $0:Arrays.get(m,0)
   }
  }:!Unchecked.Equals(m,null)&&m.length===2?(n=Arrays.get(m,1),{
   $:1,
   $0:{
    $:1,
    $0:Arrays.get(m,0),
    $1:n
   }
  }):null):null;
 };
 Syntax.entryRef=function(n,e,e$1)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:6,
    $0:[e,e$1]
   })
  };
 };
 Syntax.entryPlg=function(n,p)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:5,
    $0:p
   })
  };
 };
 Syntax.entryVar=function(n,v)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:2,
    $0:v
   })
  };
 };
 Syntax.entryVJS=function(n,w)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:4,
    $0:w
   })
  };
 };
 Syntax.entryView=function(n,w)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:3,
    $0:w
   })
  };
 };
 Syntax.entryAct=function(n,a)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:1,
    $0:a
   })
  };
 };
 Syntax.entryDoc=function(n,d)
 {
  return{
   $:1,
   $0:Syntax.entryDef(n,{
    $:0,
    $0:d
   })
  };
 };
 Syntax.entryDef=function(n,e)
 {
  return{
   $:0,
   $0:n,
   $1:e
  };
 };
 Syntax.pairOfDocs=function(lytNm,docs)
 {
  var dsW;
  dsW=View$1.Map(function(a)
  {
   var $1;
   return a.$==1&&(a.$1.$==1&&(a.$1.$1.$==0&&($1=[a.$0,a.$1.$0],true)))?[$1[0],$1[1]]:[AppFramework.errDoc((function($2)
   {
    return function($3)
    {
     return $2("splitter expects exactly 2 elements "+Utils.printList(function($4)
     {
      return LayoutEngine_GeneratedPrintf.p$27($4);
     },$3));
    };
   }(Global.id))(docs)),AppFramework.errDoc("part 2")];
  },View$1.Map(function()
  {
   return LayoutEngineModule.getAllDocs(lytNm,docs);
  },LayoutEngineModule.currentViewTriggger()));
  return[Doc.EmbedView(View$1.Map(function(t)
  {
   return t[0];
  },dsW)),Doc.EmbedView(View$1.Map(function(t)
  {
   return t[1];
  },dsW))];
 };
 Layout.createLayoutDefinitions=function(nameBase,node)
 {
  var dir,meas,p,name1,def1,p$1,name2,def2,t,t$1;
  return node.$==1?(dir=node.$0.$0,(meas=node.$0.$1,(p=Layout.createLayoutDefinitions(nameBase+"_1",node.$0.$2),(name1=p[0],(def1=p[1],(p$1=Layout.createLayoutDefinitions(nameBase+"_2",node.$0.$3),(name2=p$1[0],(def2=p$1[1],[nameBase,Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.append([Strings.concat(" ",List.ofArray([nameBase,dir?"vertical":"horizontal",Global.String(meas),name1,name2]))],Seq.delay(function()
   {
    return Seq.append(def1,Seq.delay(function()
    {
     return def2;
    }));
   }));
  }))])))))))):(t=node.$0,!Unchecked.Equals(t,null)&&t.length===0)?["___",[]]:(t$1=node.$0,!Unchecked.Equals(t$1,null)&&t$1.length===1)?[Arrays.get(node.$0,0),[]]:[nameBase,[nameBase+" div \"\" "+Strings.concat(" ",node.$0)]];
 };
 Layout.extractNodes=function(lyt)
 {
  var m,m$1;
  function checkSplitter(dir,m$2,one,two)
  {
   var $1,$2,$3,t,t$1,t$2;
   $1=Layout.extractNodes(one);
   $2=Layout.extractNodes(two);
   return($1.$==0?(t=$1.$0,!Unchecked.Equals(t,null)&&t.length===0)?($3=$2,true):$2.$==0?(t$1=$2.$0,!Unchecked.Equals(t$1,null)&&t$1.length===0)?($3=$1,true):($3=[$1,$2],false):($3=[$1,$2],false):$2.$==0?(t$2=$2.$0,!Unchecked.Equals(t$2,null)&&t$2.length===0)?($3=$1,true):($3=[$1,$2],false):($3=[$1,$2],false))?$3:{
    $:1,
    $0:{
     $:0,
     $0:dir,
     $1:m$2,
     $2:$3[0],
     $3:$3[1]
    }
   };
  }
  m=Layout.horizontalSplit(lyt);
  return m!=null&&m.$==1?checkSplitter(false,m.$0[2],m.$0[0],m.$0[1]):(m$1=Layout.verticalSplit(lyt),m$1!=null&&m$1.$==1?checkSplitter(true,m$1.$0[2],m$1.$0[0],m$1.$0[1]):{
   $:0,
   $0:Layout.cleanSpaces(lyt)
  });
 };
 Layout.cleanSpaces=function(lyt)
 {
  return Arrays.filter(function(a)
  {
   var $1;
   return!($1=(ParseO.Int())(a),$1!=null&&$1.$==1);
  },Strings.SplitStrings(Strings.concat(" ",lyt),[" "],1));
 };
 Layout.verticalSplit=function(lyt)
 {
  var lines,o,o$1,o$2,i,$1,l,r,x,v;
  function c(i$1,l$1)
  {
   var $2,a,t;
   return(a=LibraryJS.REGEX$1("^ *\\|+ *$","",l$1),a!=null&&a.$==1&&(t=a.$0,!Unchecked.Equals(t,null)&&t.length===1))?{
    $:1,
    $0:[i$1,l$1.indexOf("|")]
   }:null;
  }
  function g(y)
  {
   return Unchecked.Equals(null,y);
  }
  function g$1(y)
  {
   return Unchecked.Equals(null,y);
  }
  lines=Layout.transpose(lyt);
  o=(o$1=(o$2=Seq.tryHead(Seq.sortBy(function(t)
  {
   return t[1];
  },Seq.choose(function($2)
  {
   return c($2[0],$2[1]);
  },Seq.indexed(lines)))),o$2==null?null:{
   $:1,
   $0:o$2.$0[0]
  }),o$1==null?null:{
   $:1,
   $0:(i=o$1.$0,[Layout.transpose(Slice.array(lines,null,{
    $:1,
    $0:i-1
   })),Layout.transpose(Slice.array(lines,{
    $:1,
    $0:i+1
   },null))])
  });
  return o==null?null:{
   $:1,
   $0:($1=o.$0,(l=$1[0],(r=$1[1],[Arrays.filter(function(x$1)
   {
    return g(Layout.extractMeasuresO(x$1));
   },l),Arrays.filter(function(x$1)
   {
    return g$1(Layout.extractMeasuresO(x$1));
   },r),(x=Seq.tryHead(Seq.delay(function()
   {
    return Seq.append(Seq.choose(Layout.extractMeasuresO,l),Seq.delay(function()
    {
     return Seq.map(function(a)
     {
      return a.$==0?a.$1?new Measures({
       $:0,
       $0:a.$0,
       $1:false
      }):a:a;
     },Seq.choose(Layout.extractMeasuresO,r));
    }));
   })),(v=new Measures({
    $:1,
    $0:5,
    $1:50,
    $2:95
   }),x==null?v:x.$0))])))
  };
 };
 Layout.transpose=function(lines)
 {
  var max;
  max=Seq.max(Seq.map(function(l)
  {
   return l.length;
  },lines));
  return Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.map(function(i)
   {
    return Arrays.ofSeq(Seq.delay(function()
    {
     return Seq.map(function(l)
     {
      return l.length>i?l[i]:" ";
     },lines);
    })).join("");
   },Operators$3.range(0,max-1));
  }));
 };
 Layout.horizontalSplit=function(lines)
 {
  var o,o$1,$1,i,ms;
  function c(i$1,l)
  {
   var a,x,o$2,v;
   a=LibraryJS.REGEX$1("^ *--+([ ^v0-9]*)-* *$","",l);
   return a!=null&&a.$==1?{
    $:1,
    $0:[[i$1,(x=(o$2=Seq.tryItem(1,a.$0),o$2==null?null:Layout.extractMeasuresO(Strings.Replace(Strings.Replace(o$2.$0,"^",""),"v","-"))),(v=new Measures({
     $:1,
     $0:5,
     $1:50,
     $2:95
    }),x==null?v:x.$0))],l.indexOf("-")]
   }:null;
  }
  o=(o$1=Seq.tryHead(Seq.sortBy(function(t)
  {
   return t[1];
  },Seq.choose(function($2)
  {
   return c($2[0],$2[1]);
  },Seq.indexed(lines)))),o$1==null?null:{
   $:1,
   $0:o$1.$0[0]
  });
  return o==null?null:{
   $:1,
   $0:($1=o.$0,(i=$1[0],(ms=$1[1],[Slice.array(lines,null,{
    $:1,
    $0:i-1
   }),Slice.array(lines,{
    $:1,
    $0:i+1
   },null),ms])))
  };
 };
 Layout.extractMeasuresO=function(m)
 {
  var m$1,$1,a,$2,a$1,a$2,a$3;
  m$1=Strings.SplitChars(m,[" "],1);
  return!Unchecked.Equals(m$1,null)&&m$1.length===1&&(a=(ParseO.Int())(Arrays.get(m$1,0)),a!=null&&a.$==1&&($1=a.$0,true))?{
   $:1,
   $0:new Measures({
    $:0,
    $0:Math.abs($1),
    $1:$1>=0
   })
  }:!Unchecked.Equals(m$1,null)&&m$1.length===3&&(a$1=(ParseO.Int())(Arrays.get(m$1,0)),a$1!=null&&a$1.$==1&&(a$2=(ParseO.Int())(Arrays.get(m$1,1)),a$2!=null&&a$2.$==1&&(a$3=(ParseO.Int())(Arrays.get(m$1,2)),a$3!=null&&a$3.$==1&&($2=[a$3.$0,a$1.$0,a$2.$0],true))))?{
   $:1,
   $0:new Measures({
    $:1,
    $0:$2[1],
    $1:$2[2],
    $2:$2[0]
   })
  }:null;
 };
 LayoutEngineModule.addNewLayout=function(name,layout)
 {
  var x,x$1;
  LayoutEngineModule.addLayout((x=(x$1=!Unchecked.Equals(layout,null)?layout:"\r\n            split horizontal 0-50-100 AppFramework.AppFwkClient Hello\r\n            Hello h1 \"color:blue; class=btn-primary\" \"How are you today?\" Ask\r\n            Ask Doc InputLabel \"placeholder=Type you answer here...\" \"Answer:\" AppFramework.mainDocV  \r\n            ",(String.unindentStr())(x$1)),LayoutEngineModule.newLyt(!Unchecked.Equals(layout,null)?name:new PlugInName({
   $:0,
   $0:"Lyt_"+Strings.Replace(Global.String(Guid.NewGuid()),"-","")
  }),x)));
 };
 LayoutEngineModule.newLyt=function(name,lyt)
 {
  return LayoutEngine.New(name,Var$2.Create$1(lyt));
 };
 LayoutEngineModule.addLayout=function(lyt)
 {
  View$1.Sink(function(txt)
  {
   var x;
   LayoutEngineModule.set_currentViewTriggger(View$1.Map2(function($1,$2)
   {
    return $1+$2;
   },lyt.lytDefinition.get_View(),AppFramework.mainDocV().get_View()));
   LayoutEngineModule.refreshEntries(lyt.lytName,(x=(LayoutEngineModule.createEntries(lyt.lytName))(txt),Seq.append(List.ofArray([{
    $:0,
    $0:AppFramework.newVar(new PlgElemName({
     $:0,
     $0:"Layout"
    }),lyt.lytDefinition)
   }]),x)));
  },lyt.lytDefinition.get_View());
 };
 LayoutEngineModule.refreshEntries=function(lytN,entries)
 {
  var plg,m,plg$1,i;
  plg=(m=AppFramework.tryGetPlugIn(lytN),m==null?(plg$1=(i=AppFramework.defaultPlugIn(),PlugIn.New(lytN,i.plgVars,i.plgViews,i.plgDocs,i.plgActions,i.plgQueries)),(AppFramework.addPlugIn(plg$1),plg$1)):m.$0);
  ListModel.refreshLM(plg.plgVars,Arrays.ofSeq(Seq.delay(function()
  {
   return LayoutEngineModule.getVarEntries(entries);
  })));
  ListModel.refreshLM(plg.plgViews,Arrays.ofSeq(Seq.delay(function()
  {
   return LayoutEngineModule.getViewEntries(entries);
  })));
  ListModel.refreshLM(plg.plgActions,Arrays.ofSeq(Seq.delay(function()
  {
   return LayoutEngineModule.getActionEntries(entries);
  })));
  ListModel.refreshLM(plg.plgQueries,Arrays.ofSeq(Seq.delay(function()
  {
   return LayoutEngineModule.getQueryEntries(entries);
  })));
  ListModel.refreshLM(plg.plgDocs,Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.append(LayoutEngineModule.getDocEntries(entries),Seq.delay(function()
   {
    return Seq.append([AppFramework.newDocF(new PlgElemName({
     $:0,
     $0:"InputFile"
    }),{
     $:4,
     $0:Runtime.Curried(LayoutEngineModule.inputFile,4,[lytN]),
     $1:"attrs",
     $2:"Label",
     $3:"Action",
     $4:"[Doc]"
    })],Seq.delay(function()
    {
     return Seq.append([AppFramework.newDocF(new PlgElemName({
      $:0,
      $0:"InputLabel"
     }),{
      $:3,
      $0:Runtime.Curried(LayoutEngineModule.inputLabel,3,[lytN]),
      $1:"attrs",
      $2:"Label",
      $3:"Var"
     })],Seq.delay(function()
     {
      return[AppFramework.newDocF(new PlgElemName({
       $:0,
       $0:"none"
      }),{
       $:1,
       $0:LayoutEngineModule.none,
       $1:"x"
      })];
     }));
    }));
   }));
  })));
 };
 LayoutEngineModule.none=function(x)
 {
  return Doc.Element("span",[],[]);
 };
 LayoutEngineModule.inputLabel=function(lytNm,attrs,labelName,varName)
 {
  var o,o$1,t;
  o=(o$1=(t=((LayoutEngineModule.splitName())(lytNm))(varName),AppFramework.tryGetVar(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:Doc.Element("div",LayoutEngineModule.getAttrs(lytNm,{
    $:0,
    $0:attrs
   }),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[LayoutEngineModule.getText(lytNm,{
    $:0,
    $0:labelName
   })]),Doc.Input([AttrProxy.Create("class","form-control")],o$1.$0.varVar)])])
  });
  return o==null?AppFramework.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Var not found "+Utils.toSafe($2));
   };
  }(Global.id))(varName)):o.$0;
 };
 LayoutEngineModule.inputFile$3459$67=Runtime.Curried3(function(act,el,$1)
 {
  return AppFramework.callFunction(el,null,act.actFunction);
 });
 LayoutEngineModule.inputFile$3458$67=Runtime.Curried3(function($1,el,$2)
 {
  el.value="";
 });
 LayoutEngineModule.inputFile=function(lytNm,attrs,labelName,actName,doc)
 {
  var o,o$1,t,act;
  o=(o$1=(t=((LayoutEngineModule.splitName())(lytNm))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
   $:1,
   $0:(act=o$1.$0,Doc.Element("div",LayoutEngineModule.getAttrs(lytNm,{
    $:0,
    $0:attrs
   }),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-btn")],[Doc.Element("label",[AttrProxy.Create("class","btn")],[LayoutEngineModule.getText(lytNm,{
    $:0,
    $0:labelName
   }),Doc.Element("input",[AttrProxy.Create("class","form-control"),AttrProxy.Create("type","file"),AttrModule.Style("display","none"),AttrProxy.HandlerImpl("click",function(el)
   {
    return function()
    {
     el.value="";
    };
   }),AttrProxy.HandlerImpl("change",function(el)
   {
    return function()
    {
     return AppFramework.callFunction(el,null,act.actFunction);
    };
   })],[])])]),doc!==""?LayoutEngineModule.singleDoc(lytNm,List.ofArray([{
    $:1,
    $0:doc
   }])):Doc.get_Empty()])]))
  });
  return o==null?AppFramework.errDoc((function($1)
  {
   return function($2)
   {
    return $1("Action not found "+Utils.toSafe($2));
   };
  }(Global.id))(actName)):o.$0;
 };
 LayoutEngineModule.getQueryEntries=function(entries)
 {
  function f(t)
  {
   return t[1];
  }
  return Seq.map(function(x)
  {
   return Seq.last(f(x));
  },Seq.groupBy(function(v)
  {
   return v.qryName;
  },Seq.choose(function(a)
  {
   return a.$==4?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getActionEntries=function(entries)
 {
  function f(t)
  {
   return t[1];
  }
  return Seq.map(function(x)
  {
   return Seq.last(f(x));
  },Seq.groupBy(function(v)
  {
   return v.actName;
  },Seq.choose(function(a)
  {
   return a.$==3?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getViewEntries=function(entries)
 {
  function f(t)
  {
   return t[1];
  }
  return Seq.map(function(x)
  {
   return Seq.last(f(x));
  },Seq.groupBy(function(v)
  {
   return v.viwName;
  },Seq.choose(function(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getVarEntries=function(entries)
 {
  function f(t)
  {
   return t[1];
  }
  return Seq.map(function(x)
  {
   return Seq.last(f(x));
  },Seq.groupBy(function(v)
  {
   return v.varName;
  },Seq.choose(function(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getDocEntries=function(entries)
 {
  function f(t)
  {
   return t[1];
  }
  return Seq.map(function(x)
  {
   return Seq.last(f(x));
  },Seq.groupBy(function(d)
  {
   return d.docName;
  },Seq.choose(function(a)
  {
   return a.$==2?{
    $:1,
    $0:a.$0
   }:null;
  },entries)));
 };
 LayoutEngineModule.getText=function(lytNm,txtName)
 {
  var a,id,p,plg,nm,o,o$1,o$2,o$3;
  a=LayoutEngineModule.Identifier(txtName);
  return a!=null&&a.$==1?(id=a.$0,(p=((LayoutEngineModule.splitName())(lytNm))(id),(plg=p[0],(nm=p[1],(o=(o$1=AppFramework.tryGetViw(plg,nm),o$1==null?null:{
   $:1,
   $0:Doc.TextView(o$1.$0.viwView)
  }),o==null?(o$2=(o$3=AppFramework.tryGetVar(plg,nm),o$3==null?null:{
   $:1,
   $0:Doc.TextView(o$3.$0.varVar.get_View())
  }),o$2==null?Doc.TextNode(id):o$2.$0):o.$0))))):Doc.TextNode(LayoutEngineModule.S(txtName));
 };
 LayoutEngineModule.createEntries=function(lytNm)
 {
  function f(l)
  {
   return LayoutEngineModule.createEntryO(lytNm,l);
  }
  return function(t)
  {
   return LayoutEngineModule.processText(f,t);
  };
 };
 LayoutEngineModule.parseEntries=function(lytNm,txt)
 {
  return LayoutEngineModule.processText(Syntax.createEntryO2(lytNm,new Dictionary.New$5()),txt);
 };
 LayoutEngineModule.processText=function(f,txt)
 {
  return LayoutEngineModule.processLines(f,Strings.SplitChars(txt,["\n","\r"],1));
 };
 LayoutEngineModule.processLines=function(f,ls)
 {
  function processLinesR(ls$1)
  {
   var m,l,m$1,$1,a,p,p$1,rest,docs,p$2,names,ls$2;
   m=Seq.tryHead(ls$1);
   return m!=null&&m.$==1?(l=m.$0,(m$1=LayoutEngineModule.splitTokens(l),m$1.$==1&&(a=LayoutEngineModule.Identifier(m$1.$0),a!=null&&a.$==1&&(m$1.$1.$==1&&(LayoutEngineModule.Vertical(m$1.$1.$0).$==2&&(m$1.$1.$1.$==0&&($1=a.$0,true)))))?(p=LayoutEngineModule.getExtraLines(function(l$1)
   {
    return Strings.StartsWith(Strings.Trim(l$1),"|");
   },ls$1),processLinesR((Layout.createLayoutDefinitions($1,Layout.extractNodes(p[0])))[1].concat(p[1]))):m$1.$==0?processLinesR(Slice.array(ls$1,{
    $:1,
    $0:1
   },null)):(p$1=LayoutEngineModule.getExtraLines(function(l$1)
   {
    return Strings.StartsWith(Strings.Trim(l$1),":");
   },ls$1),(rest=p$1[1],(docs=p$1[0],Arrays.length(docs)>0?(p$2=LayoutEngineModule.createLines(Seq.nth(0,Strings.SplitChars(l,[" "],1)),1,[],[],1,docs),(names=p$2[0],(ls$2=p$2[1],processLinesR(Arrays.ofSeq(Seq.delay(function()
   {
    return Seq.append(ls$2,Seq.delay(function()
    {
     return Seq.append([l+" "+Strings.concat(" ",names)],Seq.delay(function()
     {
      return rest;
     }));
    }));
   })))))):Arrays.ofSeq(Seq.delay(function()
   {
    var m$2;
    return Seq.append((m$2=f(l),m$2!=null&&m$2.$==1?[m$2.$0]:[]),Seq.delay(function()
    {
     return processLinesR(rest);
    }));
   }))))))):[];
  }
  return processLinesR(ls);
 };
 LayoutEngineModule.createLines=function(baseName,n,names,lines,i,ls)
 {
  var prefix,prefix2,m,a,l,p,name,p$1,childrenLines,childNames;
  prefix=Strings.replicate(n,":");
  prefix2=":"+prefix;
  m=Seq.tryHead(ls);
  return m!=null&&m.$==1?(a=String.StartsWith(prefix,Strings.Trim(m.$0)),a!=null&&a.$==1?(l=a.$0,(p=LayoutEngineModule.getExtraLines(function(l$1)
  {
   return Strings.StartsWith(Strings.Trim(l$1),prefix2);
  },ls),(name=(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("_"+Utils.toSafe($2)+"_"+Global.String($3));
  }))(Global.id))(baseName))(i),(p$1=LayoutEngineModule.createLines(name,n+1,[],[],1,p[0]),(childrenLines=p$1[1],(childNames=p$1[0],LayoutEngineModule.createLines(baseName,n,Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.append(names,Seq.delay(function()
   {
    return[name];
   }));
  })),Arrays.ofSeq(Seq.delay(function()
  {
   return Seq.append(lines,Seq.delay(function()
   {
    return Seq.append(childrenLines,Seq.delay(function()
    {
     return[name+" "+l+" "+Strings.concat(" ",childNames)];
    }));
   }));
  })),i+1,p[1]))))))):[names,lines]):[names,lines];
 };
 LayoutEngineModule.getExtraLines=function(pred,ls)
 {
  var i,x,o,v;
  i=(x=(o=Seq.tryFindIndex(function(l)
  {
   return Strings.Trim(l)!==""&&!pred(l);
  },Seq.skip(1,ls)),o==null?null:{
   $:1,
   $0:1+o.$0
  }),(v=Arrays.length(ls),x==null?v:x.$0));
  return[Slice.array(ls,{
   $:1,
   $0:1
  },{
   $:1,
   $0:i-1
  }),Slice.array(ls,{
   $:1,
   $0:i
  },null)];
 };
 LayoutEngineModule.createEntryO=function(lytNm,line)
 {
  var m,$1,a,a$1,name,$2,a$2,a$3,name$1,$3,a$4,a$5,name$2,$4,a$6,a$7,name$3,$5,a$8,a$9,name$4,$6,a$10,name$5,$7,a$11,name$6,$8,a$12,name$7,$9,a$13,name$8,$10,a$14,name$9,$11,a$15,a$16,name$10,$12,a$17,a$18,name$11;
  try
  {
   m=LayoutEngineModule.splitTokens(line);
   return m.$==1&&(a=LayoutEngineModule.Identifier(m.$0),a!=null&&a.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==0&&(m.$1.$1.$==1&&(a$1=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$1!=null&&a$1.$==1&&($1=[m.$1.$1.$1,a$1.$0,a.$0],true))))))?(name=$1[2],LayoutEngineModule.entryDoc(new PlgElemName({
    $:0,
    $0:name
   }),(LayoutEngineModule.createSplitterM())([lytNm,name,true,$1[1],$1[0]]))):m.$==1&&(a$2=LayoutEngineModule.Identifier(m.$0),a$2!=null&&a$2.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$3=LayoutEngineModule.Measures$1(m.$1.$1.$0),a$3!=null&&a$3.$==1&&($2=[m.$1.$1.$1,a$3.$0,a$2.$0],true))))))?(name$1=$2[2],LayoutEngineModule.entryDoc(new PlgElemName({
    $:0,
    $0:name$1
   }),(LayoutEngineModule.createSplitterM())([lytNm,name$1,false,$2[1],$2[0]]))):m.$==1&&(a$4=LayoutEngineModule.Identifier(m.$0),a$4!=null&&a$4.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==1&&(m.$1.$1.$==1&&(a$5=LayoutEngineModule.Identifier(m.$1.$1.$0),a$5!=null&&a$5.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$1.$==0&&($3=[a$5.$0,m.$1.$1.$1.$0,a$4.$0,m.$1.$1.$1.$1.$0],true)))))))))?(name$2=$3[2],LayoutEngineModule.entryDoc(new PlgElemName({
    $:0,
    $0:name$2
   }),(LayoutEngineModule.createButtonM())([lytNm,name$2,$3[0],$3[1],$3[3]]))):m.$==1&&(a$6=LayoutEngineModule.Identifier(m.$0),a$6!=null&&a$6.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==2&&(m.$1.$1.$==1&&(a$7=LayoutEngineModule.Identifier(m.$1.$1.$0),a$7!=null&&a$7.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==0&&($4=[m.$1.$1.$1.$0,a$6.$0,a$7.$0],true))))))))?(name$3=$4[1],LayoutEngineModule.entryDoc(new PlgElemName({
    $:0,
    $0:name$3
   }),(LayoutEngineModule.createInputM())([lytNm,name$3,$4[2],$4[0]]))):m.$==1&&(a$8=LayoutEngineModule.Identifier(m.$0),a$8!=null&&a$8.$==1&&(m.$1.$==1&&(LayoutEngineModule.PlugIn(m.$1.$0).$==3&&(m.$1.$1.$==1&&(a$9=LayoutEngineModule.Identifier(m.$1.$1.$0),a$9!=null&&a$9.$==1&&(m.$1.$1.$1.$==1&&(m.$1.$1.$1.$1.$==0&&($5=[m.$1.$1.$1.$0,a$8.$0,a$9.$0],true))))))))?(name$4=$5[1],LayoutEngineModule.entryDoc(new PlgElemName({
    $:0,
    $0:name$4
   }),(LayoutEngineModule.createTextAreaM())([lytNm,name$4,$5[2],$5[0]]))):m.$==1&&(a$10=LayoutEngineModule.Identifier(m.$0),a$10!=null&&a$10.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==0&&(m.$1.$1.$==1&&(m.$1.$1.$1.$==0&&($6=[a$10.$0,LayoutEngineModule.S(m.$1.$1.$0)],true))))))?(name$5=$6[0],LayoutEngineModule.entryVar(new PlgElemName({
    $:0,
    $0:name$5
   }),(LayoutEngineModule.createVarM())([lytNm,name$5,$6[1]]))):m.$==1&&(a$11=LayoutEngineModule.Identifier(m.$0),a$11!=null&&a$11.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==1&&(m.$1.$1.$==1&&($7=[LayoutEngineModule.S(m.$1.$1.$0),a$11.$0,m.$1.$1.$1],true)))))?(name$6=$7[1],LayoutEngineModule.entryDoc(new PlgElemName({
    $:0,
    $0:name$6
   }),(LayoutEngineModule.createDocM())([lytNm,name$6,$7[0],$7[2]]))):m.$==1&&(a$12=LayoutEngineModule.Identifier(m.$0),a$12!=null&&a$12.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==2&&($8=[a$12.$0,m.$1.$1],true))))?(name$7=$8[0],LayoutEngineModule.entryView(new PlgElemName({
    $:0,
    $0:name$7
   }),(LayoutEngineModule.createViewM())([lytNm,name$7,$8[1]]))):m.$==1&&(a$13=LayoutEngineModule.Identifier(m.$0),a$13!=null&&a$13.$==1&&(m.$1.$==1&&(LayoutEngineModule.Vertical(m.$1.$0).$==4&&(m.$1.$1.$==1&&(m.$1.$1.$1.$==1&&($9=[m.$1.$1.$1.$0,m.$1.$1.$1.$1,a$13.$0,LayoutEngineModule.S(m.$1.$1.$0)],true))))))?(name$8=$9[2],LayoutEngineModule.entryDoc(new PlgElemName({
    $:0,
    $0:name$8
   }),(LayoutEngineModule.createTemplateM())([lytNm,name$8,$9[3],$9[0],$9[1]]))):m.$==1&&(a$14=LayoutEngineModule.Identifier(m.$0),a$14!=null&&a$14.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==4&&($10=[m.$1.$1,a$14.$0],true))))?(name$9=$10[1],LayoutEngineModule.entryDoc(new PlgElemName({
    $:0,
    $0:name$9
   }),(LayoutEngineModule.createConcatM())([lytNm,name$9,$10[0]]))):m.$==1&&(a$15=LayoutEngineModule.Identifier(m.$0),a$15!=null&&a$15.$==1&&(m.$1.$==1&&(LayoutEngineModule.Var(m.$1.$0).$==5&&(m.$1.$1.$==1&&(a$16=LayoutEngineModule.Identifier(m.$1.$1.$0),a$16!=null&&a$16.$==1&&($11=[a$16.$0,a$15.$0,m.$1.$1.$1],true))))))?(name$10=$11[1],LayoutEngineModule.entryAct(new PlgElemName({
    $:0,
    $0:name$10
   }),(LayoutEngineModule.createActionM())([lytNm,name$10,$11[0],$11[2]]))):m.$==1&&(a$17=LayoutEngineModule.Identifier(m.$0),a$17!=null&&a$17.$==1&&(m.$1.$==1&&(a$18=LayoutEngineModule.Vertical(m.$1.$0),a$18.$==5&&(m.$1.$1.$==1&&($12=[m.$1.$1.$0,m.$1.$1.$1,a$18.$0,a$17.$0],true)))))?(name$11=$12[3],LayoutEngineModule.entryDoc(new PlgElemName({
    $:0,
    $0:name$11
   }),(LayoutEngineModule.createElementM())([lytNm,name$11,$12[2],$12[0],$12[1]]))):null;
  }
  catch(e)
  {
   return null;
  }
 };
 LayoutEngineModule.entryAct=function(n,a)
 {
  return{
   $:1,
   $0:{
    $:3,
    $0:AppFramework.newActF(n,a)
   }
  };
 };
 LayoutEngineModule.entryView=function(n,w)
 {
  return{
   $:1,
   $0:{
    $:1,
    $0:AppFramework.newViw(n,w)
   }
  };
 };
 LayoutEngineModule.entryVar=function(n,v)
 {
  return{
   $:1,
   $0:{
    $:0,
    $0:AppFramework.newVar(n,v)
   }
  };
 };
 LayoutEngineModule.entryDoc=function(n,doc)
 {
  return{
   $:1,
   $0:{
    $:2,
    $0:AppFramework.newDoc(n,Lazy.Create(function()
    {
     return doc;
    }))
   }
  };
 };
 LayoutEngineModule.createActionM=function()
 {
  SC$1.$cctor();
  return SC$1.createActionM;
 };
 LayoutEngineModule.createViewM=function()
 {
  SC$1.$cctor();
  return SC$1.createViewM;
 };
 LayoutEngineModule.createVarM=function()
 {
  SC$1.$cctor();
  return SC$1.createVarM;
 };
 LayoutEngineModule.createConcatM=function()
 {
  SC$1.$cctor();
  return SC$1.createConcatM;
 };
 LayoutEngineModule.createTemplateM=function()
 {
  SC$1.$cctor();
  return SC$1.createTemplateM;
 };
 LayoutEngineModule.createDocM=function()
 {
  SC$1.$cctor();
  return SC$1.createDocM;
 };
 LayoutEngineModule.createElementM=function()
 {
  SC$1.$cctor();
  return SC$1.createElementM;
 };
 LayoutEngineModule.createTextAreaM=function()
 {
  SC$1.$cctor();
  return SC$1.createTextAreaM;
 };
 LayoutEngineModule.createInputM=function()
 {
  SC$1.$cctor();
  return SC$1.createInputM;
 };
 LayoutEngineModule.createButtonM=function()
 {
  SC$1.$cctor();
  return SC$1.createButtonM;
 };
 LayoutEngineModule.createSplitterM=function()
 {
  SC$1.$cctor();
  return SC$1.createSplitterM;
 };
 LayoutEngineModule.createView=function(lytNm,viwName,parms)
 {
  return View$1.Bind(function()
  {
   var f;
   function m(a)
   {
    return a.$==1?(function($1)
    {
     return function($2)
     {
      return $1(GeneratedPrintf.p$1($2));
     };
    }(Global.id))(a.$0):a.$0;
   }
   try
   {
    return View$1.Map(function(ar)
    {
     try
     {
      return!Unchecked.Equals(ar,null)&&ar.length===0?"No JS function specified":!Unchecked.Equals(ar,null)&&ar.length===1?Global.String(Global["eval"](Arrays.get(ar,0))):Global.String(Global["eval"](Arrays.get(ar,0)).apply(null,Slice.array(ar,{
       $:1,
       $0:1
      },null)));
     }
     catch(e)
     {
      return e.message;
     }
    },View$1.Map((f=function(s)
    {
     return Seq.map(m,s);
    },function(x)
    {
     return Arrays.ofSeq(f(x));
    }),View.traverseSeq(function(t)
    {
     return LayoutEngineModule.getTextToken(lytNm,t);
    },parms)));
   }
   catch(e)
   {
    return View$1.Const(e.message);
   }
  },LayoutEngineModule.currentViewTriggger());
 };
 LayoutEngineModule.findJSEntry=function(fname)
 {
  return Seq.fold(function(oO,nm)
  {
   var o;
   return oO==null?null:(o=oO.$0,!o[nm]?null:{
    $:1,
    $0:o[nm]
   });
  },{
   $:1,
   $0:Global
  },String.splitByChar(".",fname));
 };
 LayoutEngineModule.createVar=function(lytNm,varName,v)
 {
  return Var$2.Create$1(v);
 };
 LayoutEngineModule.createConcat=function(lytNm,name,docs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   return Doc.Concat(LayoutEngineModule.getAllDocs(lytNm,docs));
  });
 };
 LayoutEngineModule.createAction=function(lytNm,name,actName,parms)
 {
  var o,t,$1,$2,o$1,act,$3,f,t1,f$1,t1$1,t2,f$2,t1$2;
  o$1=(t=((LayoutEngineModule.splitName())(lytNm))(actName),AppFramework.tryGetAct(t[0],t[1]));
  if(o$1==null)
   o=null;
  else
   {
    act=o$1.$0;
    if(parms.$===0)
     $1=act.actFunction;
    else
     {
      $3=act.actFunction;
      switch($3.$==1?parms.$==1?parms.$1.$==0?($2=[$3.$0,parms.$0],0):3:3:$3.$==2?parms.$==1?parms.$1.$==0?($2=[$3.$0,$3.$2,parms.$0],2):parms.$1.$1.$==0?($2=[$3.$0,parms.$0,parms.$1.$0],1):3:3:3)
      {
       case 0:
        $1=(f=$2[0],(t1=$2[1],{
         $:0,
         $0:function()
         {
          LayoutEngineModule.getParamText(lytNm,t1,f);
         }
        }));
        break;
       case 1:
        $1=(f$1=$2[0],(t1$1=$2[1],(t2=$2[2],{
         $:0,
         $0:function()
         {
          LayoutEngineModule.getParamText(lytNm,t1$1,function(p1)
          {
           LayoutEngineModule.getParamText(lytNm,t2,f$1(p1));
          });
         }
        })));
        break;
       case 2:
        $1=(f$2=$2[0],(t1$2=$2[2],{
         $:1,
         $0:function(p2)
         {
          LayoutEngineModule.getParamText(lytNm,t1$2,function(p1)
          {
           (f$2(p1))(p2);
          });
         },
         $1:$2[1]
        }));
        break;
       case 3:
        $1={
         $:0,
         $0:function()
         {
          ((((Runtime.Curried(function($4,$5,$6,$7)
          {
           return $4("Parameters do not coincide for Action "+Utils.toSafe($5)+" "+Utils.printList(function($8)
           {
            return LayoutEngine_GeneratedPrintf.p$27($8);
           },$6)+" "+GeneratedPrintf.p$1($7));
          },4))(function(s)
          {
           console.log(s);
          }))(actName))(parms))(act);
         }
        };
        break;
      }
     }
    o={
     $:1,
     $0:$1
    };
   }
  return o==null?{
   $:0,
   $0:function()
   {
    ((function($4)
    {
     return function($5)
     {
      return $4("Action Not Found "+Utils.toSafe($5));
     };
    }(function(s)
    {
     console.log(s);
    }))(actName));
   }
  }:o.$0;
 };
 LayoutEngineModule.getParamText=function(lytNm,token,f)
 {
  View$1.Get(function(a)
  {
   if(a.$==1)
    f(a.$0);
   else
    f(a.$0);
  },LayoutEngineModule.getTextToken(lytNm,token));
 };
 LayoutEngineModule.createTemplate=function(lytNm,name,tempName,attrs,holes)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var $1,o,attrs$1,x,x$1,s;
   attrs$1=LayoutEngineModule.getAttrs(lytNm,attrs);
   Templates.LoadLocalTemplates("local");
   function m($2,$3)
   {
    var a,a$1,id,o$1,o$2,o$3,t,o$4,t$1,a$2,txt;
    a=LayoutEngineModule.S($2);
    a$1=LayoutEngineModule.Identifier($3);
    return a$1!=null&&a$1.$==1?(id=a$1.$0,o$1=(o$2=(o$3=(t=((LayoutEngineModule.splitName())(lytNm))(id),AppFramework.tryGetDoc(t[0],t[1])),o$3==null?null:{
     $:1,
     $0:{
      $:0,
      $0:a.toLowerCase(),
      $1:(LayoutEngineModule.getDocF(List.T.Empty,o$3.$0))[0]
     }
    }),o$2==null?(o$4=(t$1=((LayoutEngineModule.splitName())(lytNm))(id),AppFramework.tryGetVar(t$1[0],t$1[1])),o$4==null?null:{
     $:1,
     $0:{
      $:8,
      $0:a.toLowerCase(),
      $1:o$4.$0.varVar
     }
    }):o$2),o$1==null?{
     $:0,
     $0:a.toLowerCase(),
     $1:AppFramework.errDoc((function($4)
     {
      return function($5)
      {
       return $4("Missing element: "+Utils.toSafe($5));
      };
     }(Global.id))(id))
    }:o$1.$0):(a$2=LayoutEngineModule.S($2),txt=LayoutEngineModule.S($3),{
     $:0,
     $0:a$2.toLowerCase(),
     $1:AppFramework.errDoc((function($4)
     {
      return function($5)
      {
       return $4("Not implemented: "+Utils.toSafe($5));
      };
     }(Global.id))(txt))
    });
   }
   function p(i,a)
   {
    return i%2===0;
   }
   try
   {
    o={
     $:1,
     $0:(x=(x$1=Seq.map(function($2)
     {
      return m($2[0],$2[1]);
     },Seq.map(function(t)
     {
      return t[1];
     },Seq.filter(function($2)
     {
      return p($2[0],$2[1]);
     },Seq.indexed(Seq.pairwise(holes))))),(Seq.isEmpty(attrs$1)?Global.id:(s=[{
      $:3,
      $0:"attrs",
      $1:AttrProxy.Concat(attrs$1)
     }],function(s$1)
     {
      return Seq.append(s,s$1);
     }))(x$1)),Templates.NamedTemplate("local",{
      $:1,
      $0:tempName.toLowerCase()
     },x))
    };
   }
   catch(m$1)
   {
    o=null;
   }
   return o==null?AppFramework.errDoc((function($2)
   {
    return function($3)
    {
     return $2("Missing template: "+Utils.toSafe($3));
    };
   }(Global.id))(tempName)):o.$0;
  });
 };
 LayoutEngineModule.createDoc=function(lytNm,name,docName,parms)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var o,o$1,t;
   o=(o$1=(t=((LayoutEngineModule.splitName())(lytNm))(docName),AppFramework.tryGetDoc(t[0],t[1])),o$1==null?null:{
    $:1,
    $0:LayoutEngineModule.getDocFinal(parms,o$1.$0)
   });
   return o==null?AppFramework.errDoc((function($1)
   {
    return function($2)
    {
     return $1("Missing doc: "+Utils.toSafe($2));
    };
   }(Global.id))(docName)):o.$0;
  });
 };
 LayoutEngineModule.createTextArea=function(lytNm,name,varName,attrs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var t;
   return Doc.BindView(function(a)
   {
    return a==null?AppFramework.errDoc((function($1)
    {
     return function($2)
     {
      return $1("Missing var: "+Utils.toSafe($2));
     };
    }(Global.id))(varName)):Doc.InputArea(LayoutEngineModule.getAttrs(lytNm,attrs),a.$0);
   },(t=((LayoutEngineModule.splitName())(lytNm))(varName),AppFramework.tryGetVoVW(t[0],t[1])));
  });
 };
 LayoutEngineModule.createInput=function(lytNm,name,varName,attrs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var t;
   return Doc.BindView(function(a)
   {
    return a==null?AppFramework.errDoc((function($1)
    {
     return function($2)
     {
      return $1("Missing var: "+Utils.toSafe($2));
     };
    }(Global.id))(varName)):Doc.Input(LayoutEngineModule.getAttrs(lytNm,attrs),a.$0);
   },(t=((LayoutEngineModule.splitName())(lytNm))(varName),AppFramework.tryGetVoVW(t[0],t[1])));
  });
 };
 LayoutEngineModule.createButton=function(lytNm,name,actName,attrs,a)
 {
  var text;
  text=LayoutEngineModule.S(a);
  return LayoutEngineModule.turnToView(function()
  {
   var x,o,o$1,t,$1;
   function m(act,u)
   {
    return AppFramework.callFunction(null,null,act.actFunction);
   }
   x=(o=(o$1=(t=((LayoutEngineModule.splitName())(lytNm))(actName),AppFramework.tryGetAct(t[0],t[1])),o$1==null?null:{
    $:1,
    $0:($1=o$1.$0,function($2)
    {
     return m($1,$2);
    })
   }),o==null?Global.ignore:o.$0);
   return Doc.Button(text,LayoutEngineModule.getAttrs(lytNm,attrs),x);
  });
 };
 LayoutEngineModule.createElement=function(lytNm,name,element,attrs,docs)
 {
  return LayoutEngineModule.turnToView(function()
  {
   var x;
   x=[Doc.Concat(LayoutEngineModule.getAllDocs(lytNm,docs))];
   return Doc.Element(element,LayoutEngineModule.getAttrs(lytNm,attrs),x);
  });
 };
 LayoutEngineModule.createSplitter=function(lytNm,name,vertical,measures,docs)
 {
  var p;
  p=LayoutEngineModule.pairOfDocs(lytNm,docs);
  return measures.$==1?LayoutEngineModule.variableSplitter(vertical,measures.$0,measures.$1,measures.$2,p[0],p[1]):LayoutEngineModule.fixedSplitter(vertical,measures.$0,measures.$1,p[0],p[1]);
 };
 LayoutEngineModule.singleDoc=function(lytNm,docs)
 {
  return Doc.EmbedView(View$1.Map(function(a)
  {
   var $1;
   return a.$==1&&(a.$1.$==0&&($1=a.$0,true))?$1:AppFramework.errDoc((function($2)
   {
    return function($3)
    {
     return $2("expected exactly 1 element "+Utils.printList(function($4)
     {
      return LayoutEngine_GeneratedPrintf.p$27($4);
     },$3));
    };
   }(Global.id))(docs));
  },View$1.Map(function()
  {
   return LayoutEngineModule.getAllDocs(lytNm,docs);
  },LayoutEngineModule.currentViewTriggger())));
 };
 LayoutEngineModule.pairOfDocs=function(lytNm,docs)
 {
  var dsW;
  dsW=View$1.Map(function(a)
  {
   var $1;
   return a.$==1&&(a.$1.$==1&&(a.$1.$1.$==0&&($1=[a.$0,a.$1.$0],true)))?[$1[0],$1[1]]:[AppFramework.errDoc((function($2)
   {
    return function($3)
    {
     return $2("splitter expects exactly 2 elements "+Utils.printList(function($4)
     {
      return LayoutEngine_GeneratedPrintf.p$27($4);
     },$3));
    };
   }(Global.id))(docs)),AppFramework.errDoc("part 2")];
  },View$1.Map(function()
  {
   return LayoutEngineModule.getAllDocs(lytNm,docs);
  },LayoutEngineModule.currentViewTriggger()));
  return[Doc.EmbedView(View$1.Map(function(t)
  {
   return t[0];
  },dsW)),Doc.EmbedView(View$1.Map(function(t)
  {
   return t[1];
  },dsW))];
 };
 LayoutEngineModule.getDocs_=function(lytNm,docs)
 {
  var m;
  return docs.$==0?List.T.Empty:(m=LayoutEngineModule.getOneDoc(lytNm,docs),new List.T({
   $:1,
   $0:m[0],
   $1:LayoutEngineModule.getDocs_(lytNm,m[1])
  }));
 };
 LayoutEngineModule.getOneDoc=function(lytNm,docs)
 {
  var $1,a,id,parms,p,plg,nm,o,o$1,o$2,o$3,v;
  return docs.$==1&&(a=LayoutEngineModule.Identifier(docs.$0),a!=null&&a.$==1&&($1=[a.$0,docs.$1],true))?(id=$1[0],(parms=$1[1],(p=((LayoutEngineModule.splitName())(lytNm))(id),(plg=p[0],(nm=p[1],(o=(o$1=AppFramework.tryGetDoc(plg,nm),o$1==null?null:{
   $:1,
   $0:LayoutEngineModule.getDocF(parms,o$1.$0)
  }),o==null?(o$2=(o$3=AppFramework.tryGetWoW(plg,nm),o$3==null?null:{
   $:1,
   $0:[Doc.TextView(o$3.$0),parms]
  }),o$2==null?[AppFramework.errDoc((v=(function($2)
  {
   return function($3)
   {
    return $2("Missing doc: "+Utils.toSafe($3));
   };
  }(Global.id))(id),(Library.print(v),v))),parms]:o$2.$0):o.$0)))))):docs.$==0?[Doc.get_Empty(),List.T.Empty]:[Doc.TextView(View$1.Map(function(a$1)
  {
   return a$1.$==1?(function($2)
   {
    return function($3)
    {
     return $2("Unexpected action: "+Utils.toSafe($3));
    };
   }(Global.id))(a$1.$0.actName.get_Id()):a$1.$0;
  },LayoutEngineModule.getTextData(lytNm,LayoutEngineModule.S(docs.$0)))),docs.$1];
 };
 LayoutEngineModule.getAllDocs=function(lytNm,tokens)
 {
  return tokens.$==1?new List.T({
   $:1,
   $0:LayoutEngineModule.getADoc(lytNm,tokens.$0),
   $1:LayoutEngineModule.getAllDocs(lytNm,tokens.$1)
  }):List.T.Empty;
 };
 LayoutEngineModule.getADoc=function(lytNm,token)
 {
  var a,di,p,plg,nm;
  a=LayoutEngineModule.Identifier(token);
  return a!=null&&a.$==1?(di=a.$0,(p=((LayoutEngineModule.splitName())(lytNm))(di),(plg=p[0],(nm=p[1],Doc.BindView(function(a$1)
  {
   return a$1==null?Doc.BindView(function(a$2)
   {
    var v;
    return a$2==null?AppFramework.errDoc((v=(function($1)
    {
     return function($2)
     {
      return $1("Missing doc: "+Utils.toSafe($2));
     };
    }(Global.id))(di),(Library.print(v),v))):Doc.TextNode(a$2.$0);
   },AppFramework.tryGetWoWW(plg,nm)):(LayoutEngineModule.getDocF(List.T.Empty,a$1.$0))[0];
  },AppFramework.tryGetDocW(plg,nm)))))):Doc.TextView(View$1.Map(function(a$1)
  {
   return a$1.$==1?(function($1)
   {
    return function($2)
    {
     return $1("Unexpected action: "+Utils.toSafe($2));
    };
   }(Global.id))(a$1.$0.actName.get_Id()):a$1.$0;
  },LayoutEngineModule.getTextData(lytNm,LayoutEngineModule.S(token))));
 };
 LayoutEngineModule.turnToView=function(f)
 {
  return Doc.EmbedView(View$1.Map(f,LayoutEngineModule.currentViewTriggger()));
 };
 LayoutEngineModule.currentViewTriggger=function()
 {
  SC$1.$cctor();
  return SC$1.currentViewTriggger;
 };
 LayoutEngineModule.set_currentViewTriggger=function($1)
 {
  SC$1.$cctor();
  SC$1.currentViewTriggger=$1;
 };
 LayoutEngineModule.getDocFinal=function(parms,doc)
 {
  var m;
  m=LayoutEngineModule.getDocF(parms,doc);
  return m[1].$==0?m[0]:AppFramework.errDoc((((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Too many parameters "+GeneratedPrintf.p($2)+" "+Utils.printList(function($4)
   {
    return LayoutEngine_GeneratedPrintf.p$27($4);
   },$3));
  }))(Global.id))(doc))(parms));
 };
 LayoutEngineModule.getDocF=function(parms,doc)
 {
  var $1,$2,a,a$1,a$2,a$3,a$4,a$5,a$6,a$7,a$8,a$9;
  $2=doc.docDoc;
  switch($2.$==1?parms.$==1?($1=[$2.$0,LayoutEngineModule.S(parms.$0),parms.$1],1):6:$2.$==2?parms.$==1?(a=LayoutEngineModule.S(parms.$0),parms.$1.$==1?($1=[$2.$0,a,LayoutEngineModule.S(parms.$1.$0),parms.$1.$1],2):6):6:$2.$==3?parms.$==1?(a$1=LayoutEngineModule.S(parms.$0),parms.$1.$==1?(a$2=LayoutEngineModule.S(parms.$1.$0),parms.$1.$1.$==1?($1=[$2.$0,a$1,a$2,LayoutEngineModule.S(parms.$1.$1.$0),parms.$1.$1.$1],3):6):6):6:$2.$==4?parms.$==1?(a$3=LayoutEngineModule.S(parms.$0),parms.$1.$==1?(a$4=LayoutEngineModule.S(parms.$1.$0),parms.$1.$1.$==1?(a$5=LayoutEngineModule.S(parms.$1.$1.$0),parms.$1.$1.$1.$==1?($1=[$2.$0,a$3,a$4,a$5,LayoutEngineModule.S(parms.$1.$1.$1.$0),parms.$1.$1.$1.$1],4):6):6):6):6:$2.$==5?parms.$==1?(a$6=LayoutEngineModule.S(parms.$0),parms.$1.$==1?(a$7=LayoutEngineModule.S(parms.$1.$0),parms.$1.$1.$==1?(a$8=LayoutEngineModule.S(parms.$1.$1.$0),parms.$1.$1.$1.$==1?(a$9=LayoutEngineModule.S(parms.$1.$1.$1.$0),parms.$1.$1.$1.$1.$==1?($1=[$2.$0,a$6,a$7,a$8,a$9,LayoutEngineModule.S(parms.$1.$1.$1.$1.$0),parms.$1.$1.$1.$1.$1],5):6):6):6):6):6:($1=[$2.$0,parms],0))
  {
   case 0:
    return[$1[0].f(),$1[1]];
   case 1:
    return[$1[0]($1[1]),$1[2]];
   case 2:
    return[($1[0]($1[1]))($1[2]),$1[3]];
   case 3:
    return[(($1[0]($1[1]))($1[2]))($1[3]),$1[4]];
   case 4:
    return[((($1[0]($1[1]))($1[2]))($1[3]))($1[4]),$1[5]];
   case 5:
    return[(((($1[0]($1[1]))($1[2]))($1[3]))($1[4]))($1[5]),$1[6]];
   case 6:
    return[Doc.Element("div",[],[Doc.TextNode((((Runtime.Curried3(function($3,$4,$5)
    {
     return $3("Parameters do not coincide with definition "+GeneratedPrintf.p($4)+" - "+Utils.printList(function($6)
     {
      return LayoutEngine_GeneratedPrintf.p$27($6);
     },$5));
    }))(Global.id))(doc))(parms))]),List.T.Empty];
  }
 };
 LayoutEngineModule.getAttrs=function(lytNm,a)
 {
  var attrs;
  attrs=LayoutEngineModule.S(a);
  return List.ofSeq(Seq.delay(function()
  {
   return Seq.append(Seq.choose(function(a$1)
   {
    var $1,value,value$1,name;
    function s(el,a$2)
    {
     var act;
     return a$2.$==1?(act=a$2.$0,el.addEventListener(Strings.Trim(name),function(ev)
     {
      return AppFramework.callFunction(el,ev,act.actFunction);
     },false)):el.setAttribute(Strings.Trim(name),Strings.Trim(a$2.$0));
    }
    return!Unchecked.Equals(a$1,null)&&a$1.length===2&&(value=Arrays.get(a$1,1),Strings.Trim(Arrays.get(a$1,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a$1,1),(name=Arrays.get(a$1,0),{
     $:1,
     $0:AttrModule.DynamicCustom(function($2)
     {
      return function($3)
      {
       return s($2,$3);
      };
     },LayoutEngineModule.getTextData(lytNm,Strings.Trim(value$1)))
    })):null;
   },Seq.map(function(s)
   {
    return String.splitByChar("=",s);
   },String.splitByChar(";",attrs))),Seq.delay(function()
   {
    return Seq.choose(function(a$1)
    {
     var $1,value,value$1,name,x;
     return!Unchecked.Equals(a$1,null)&&a$1.length===2&&(value=Arrays.get(a$1,1),Strings.Trim(Arrays.get(a$1,0))!==""&&Strings.Trim(value)!=="")?(value$1=Arrays.get(a$1,1),(name=Arrays.get(a$1,0),{
      $:1,
      $0:(x=View$1.Map(function(a$2)
      {
       return a$2.$==1?(function($2)
       {
        return function($3)
        {
         return $2("@{"+Utils.toSafe($3)+"}");
        };
       }(Global.id))(a$2.$0.actName.get_Id()):Strings.Trim(a$2.$0);
      },LayoutEngineModule.getTextData(lytNm,Strings.Trim(value$1))),AttrModule.DynamicStyle(Strings.Trim(name),x))
     })):null;
    },Seq.map(function(s)
    {
     return String.splitByChar(":",s);
    },String.splitByChar(";",attrs)));
   }));
  }));
 };
 LayoutEngineModule.getTextToken=function(lytNm,token)
 {
  return token.$==0?LayoutEngineModule.getTextData(lytNm,token.$0):LayoutEngineModule.getOneTextData(lytNm,token.$0,"","");
 };
 LayoutEngineModule.getTextData=function(lytNm,txt)
 {
  var o,o$1,$1,bef;
  o=(o$1=String.delimitedO("@{","}",txt),o$1==null?null:{
   $:1,
   $0:($1=o$1.$0,(bef=$1[0],LayoutEngineModule.getOneTextData(lytNm,$1[1],bef,$1[2])))
  });
  return o==null?View$1.Const({
   $:0,
   $0:txt
  }):o.$0;
 };
 LayoutEngineModule.getOneTextData=function(lytNm,name,bef,aft)
 {
  var p,plg,n;
  p=((LayoutEngineModule.splitName())(lytNm))(name);
  plg=p[0];
  n=p[1];
  return View$1.Bind(function(a)
  {
   return a==null?View$1.Bind(function(a$1)
   {
    var txt;
    return a$1==null?View$1.Const({
     $:0,
     $0:((((Runtime.Curried(function($1,$2,$3,$4)
     {
      return $1(Utils.toSafe($2)+" @{Missing "+Utils.toSafe($3)+"}"+Utils.toSafe($4));
     },4))(Global.id))(bef))(name))(aft)
    }):(txt=a$1.$0,View$1.Bind(function(a$2)
    {
     return a$2.$==1?View$1.Const({
      $:0,
      $0:(function($1)
      {
       return function($2)
       {
        return $1("Unexpected Action @{"+Utils.toSafe($2)+"}");
       };
      }(Global.id))(a$2.$0.actName.get_Id())
     }):View$1.Const({
      $:0,
      $0:bef+txt+a$2.$0
     });
    },LayoutEngineModule.getTextData(lytNm,aft)));
   },AppFramework.tryGetWoWW(plg,n)):View$1.Const({
    $:1,
    $0:a.$0
   });
  },AppFramework.tryGetActW(plg,n));
 };
 LayoutEngineModule.splitName=function()
 {
  SC$1.$cctor();
  return SC$1.splitName;
 };
 LayoutEngineModule.splitTokens=function(line)
 {
  return LayoutEngineModule.doubleQuote(List.ofSeq(Seq.collect(Global.id,Seq.mapi(function(i,s)
  {
   var t;
   return i%2===1?[{
    $:0,
    $0:s
   }]:s===""?[{
    $:0,
    $0:"\""
   }]:(t=Strings.Trim(s),t===""?[]:Arrays.map(function(a)
   {
    return{
     $:1,
     $0:a
    };
   },Strings.SplitChars(t,[" "],1)));
  },String.splitByChar("\"",line)))));
 };
 LayoutEngineModule.doubleQuote=function(a)
 {
  var $1,$2,$3;
  switch(a.$==1?a.$0.$==1?Strings.StartsWith(a.$0.$0,"//")?($1=a.$0.$0,1):2:2:0)
  {
   case 0:
    return List.T.Empty;
   case 1:
    return List.T.Empty;
   case 2:
    switch(a.$==1?a.$0.$==0?a.$1.$==1?a.$1.$0.$==0?a.$1.$0.$0==="\""?a.$1.$1.$==0?($3=a.$0.$0,1):a.$1.$1.$0.$==0?($3=[a.$1.$1.$1,a.$0.$0,a.$1.$1.$0.$0],0):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):($3=[a.$0,a.$1],2):3)
    {
     case 0:
      $2=LayoutEngineModule.doubleQuote(new List.T({
       $:1,
       $0:{
        $:0,
        $0:$3[1]+"\""+$3[2]
       },
       $1:$3[0]
      }));
      break;
     case 1:
      $2=List.ofArray([{
       $:0,
       $0:$3
      }]);
      break;
     case 2:
      $2=new List.T({
       $:1,
       $0:$3[0],
       $1:LayoutEngineModule.doubleQuote($3[1])
      });
      break;
     case 3:
      throw new MatchFailureException.New("D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\LayoutEngine\\src\\LayoutEngine.fs",2606,38);
    }
    return $2;
  }
 };
 LayoutEngineModule.variableSplitter=function(vertical,min,value,max,doc1,doc2)
 {
  return Doc.Element("wcomp-splitter",List.ofSeq(Seq.delay(function()
  {
   return Seq.append(vertical?[AttrProxy.Create("vertical","")]:[],Seq.delay(function()
   {
    return Seq.append([AttrProxy.Create("min",Global.String(min))],Seq.delay(function()
    {
     return Seq.append([AttrProxy.Create("value",Global.String(value))],Seq.delay(function()
     {
      return[AttrProxy.Create("max",Global.String(max))];
     }));
    }));
   }));
  })),List.ofArray([doc1,doc2]));
 };
 LayoutEngineModule.fixedSplitter=function(vertical,pixel,first,doc1,doc2)
 {
  var sizes,b,p,i,b$1,p$1,i$1;
  sizes=(((first?Runtime.Curried3(function($1,$2,$3)
  {
   return $1($2.toFixed(6)+"px calc(100% - "+$3.toFixed(6)+"px)");
  }):Runtime.Curried3(function($1,$2,$3)
  {
   return $1("calc(100% - "+$2.toFixed(6)+"px) "+$3.toFixed(6)+"px");
  }))(Global.id))(pixel))(pixel);
  return vertical?(b=ProviderBuilder.Make().WithHole({
   $:1,
   $0:"partsizes",
   $1:sizes
  }).WithHole({
   $:0,
   $0:"first",
   $1:doc1
  }).WithHole({
   $:0,
   $0:"second",
   $1:doc2
  }),(p=Handler.CompleteHoles(b.k,b.h,[]),(i=new TemplateInstance.New(p[1],LayoutEngine_Templates.fixedsplitterver(p[0])),(b.i=i,i)))).get_Doc():(b$1=ProviderBuilder.Make().WithHole({
   $:1,
   $0:"partsizes",
   $1:sizes
  }).WithHole({
   $:0,
   $0:"first",
   $1:doc1
  }).WithHole({
   $:0,
   $0:"second",
   $1:doc2
  }),(p$1=Handler.CompleteHoles(b$1.k,b$1.h,[]),(i$1=new TemplateInstance.New(p$1[1],LayoutEngine_Templates.fixedsplitterhor(p$1[0])),(b$1.i=i$1,i$1)))).get_Doc();
 };
 LayoutEngineModule.Measures$1=function(a)
 {
  var a$1,$1,a$2,$2,a$3,$3,a$4,a$5,a$6;
  return a.$==1?(a$1=String.splitByChar("-",a.$0),!Unchecked.Equals(a$1,null)&&a$1.length===1&&(a$2=(ParseO.Double())(Arrays.get(a$1,0)),a$2!=null&&a$2.$==1&&($1=a$2.$0,true))?{
   $:1,
   $0:new Measures({
    $:0,
    $0:$1,
    $1:true
   })
  }:!Unchecked.Equals(a$1,null)&&a$1.length===2&&(Arrays.get(a$1,0)===""&&(a$3=(ParseO.Double())(Arrays.get(a$1,1)),a$3!=null&&a$3.$==1&&($2=a$3.$0,true)))?{
   $:1,
   $0:new Measures({
    $:0,
    $0:$2,
    $1:false
   })
  }:!Unchecked.Equals(a$1,null)&&a$1.length===3&&(a$4=(ParseO.Double())(Arrays.get(a$1,0)),a$4!=null&&a$4.$==1&&(a$5=(ParseO.Double())(Arrays.get(a$1,1)),a$5!=null&&a$5.$==1&&(a$6=(ParseO.Double())(Arrays.get(a$1,2)),a$6!=null&&a$6.$==1&&($3=[a$6.$0,a$4.$0,a$5.$0],true))))?{
   $:1,
   $0:new Measures({
    $:1,
    $0:$3[1],
    $1:$3[2],
    $2:$3[0]
   })
  }:null):null;
 };
 LayoutEngineModule.Var=function(a)
 {
  var $1,$2,$3,$4,$5,$6;
  return a.$==1&&(a.$0==="Var"&&($1=a.$0,true))?{
   $:0,
   $0:null
  }:a.$==1&&(a.$0==="Doc"&&($2=a.$0,true))?{
   $:1,
   $0:null
  }:a.$==1&&(a.$0==="View"&&($3=a.$0,true))?{
   $:2,
   $0:null
  }:a.$==1&&(a.$0==="ViewJS"&&($4=a.$0,true))?{
   $:3,
   $0:null
  }:a.$==1&&(a.$0==="Docs"&&($5=a.$0,true))?{
   $:4,
   $0:null
  }:a.$==1&&(a.$0==="Action"&&($6=a.$0,true))?{
   $:5,
   $0:null
  }:{
   $:6,
   $0:null
  };
 };
 LayoutEngineModule.PlugIn=function(a)
 {
  var $1,$2,$3,$4,$5;
  return a.$==1&&(a.$0==="PlugIn"&&($1=a.$0,true))?{
   $:0,
   $0:null
  }:a.$==1&&(a.$0==="Button"&&($2=a.$0,true))?{
   $:1,
   $0:null
  }:a.$==1&&(a.$0==="input"&&($3=a.$0,true))?{
   $:2,
   $0:null
  }:a.$==1&&(a.$0==="textarea"&&($4=a.$0,true))?{
   $:3,
   $0:null
  }:a.$==1&&(a.$0==="select"&&($5=a.$0,true))?{
   $:4,
   $0:null
  }:{
   $:5,
   $0:null
  };
 };
 LayoutEngineModule.Vertical=function(a)
 {
  var $1,$2,$3,$4,$5,a$1;
  return a.$==1&&(a.$0==="vertical"&&($1=a.$0,true))?{
   $:0,
   $0:null
  }:a.$==1&&(a.$0==="horizontal"&&($2=a.$0,true))?{
   $:1,
   $0:null
  }:a.$==1&&(a.$0==="layout"&&($3=a.$0,true))?{
   $:2,
   $0:null
  }:a.$==1&&(a.$0==="grid"&&($4=a.$0,true))?{
   $:3,
   $0:null
  }:a.$==1&&(a.$0==="template"&&($5=a.$0,true))?{
   $:4,
   $0:null
  }:(a$1=LayoutEngineModule.Identifier(a),a$1!=null&&a$1.$==1?{
   $:5,
   $0:a$1.$0
  }:{
   $:6,
   $0:null
  });
 };
 LayoutEngineModule.I=function(a)
 {
  var a$1;
  a$1=LayoutEngineModule.Identifier(a);
  return a$1!=null&&a$1.$==1?{
   $:1,
   $0:a$1.$0
  }:null;
 };
 LayoutEngineModule.Identifier=function(a)
 {
  var $1,a$1,t;
  return a.$==1&&(a$1=LibraryJS.REGEX$1("^[$a-zA-Z_][0-9a-zA-Z_\\.\\-$]*$","",a.$0),a$1!=null&&a$1.$==1&&((t=a$1.$0,!Unchecked.Equals(t,null)&&t.length===1)&&($1=Arrays.get(a$1.$0,0),true)))?{
   $:1,
   $0:$1
  }:null;
 };
 LayoutEngineModule.S=function(a)
 {
  return a.$==1?a.$0:a.$0;
 };
 P$1.run=function(pin,p)
 {
  return AppFramework.run(pin,p.r);
 };
 NewLY.addLayout=function(name,content)
 {
  NewLY.addNewLayout(LayoutEngineModule.newLyt(new PlugInName({
   $:0,
   $0:name
  }),content));
 };
 NewLY.addNewLayout=function(lyt)
 {
  var parseW,l,errorsW,f,defsW,f$1,g,entries,g$1,l$1;
  function c(a)
  {
   return a.$==1?{
    $:1,
    $0:a.$0
   }:null;
  }
  function g$2(s)
  {
   return Strings.concat("\n",s);
  }
  function c$1(a)
  {
   return a.$==0?{
    $:1,
    $0:a.$0
   }:null;
  }
  function f$2(s)
  {
   return Seq.append(entries,s);
  }
  parseW=View$1.Map((l=lyt.lytName,function(t)
  {
   return LayoutEngineModule.parseEntries(l,t);
  }),lyt.lytDefinition.get_View());
  errorsW=View$1.Map((f=function(s)
  {
   return Seq.choose(c,s);
  },function(x)
  {
   return g$2(f(x));
  }),parseW);
  defsW=View$1.Map((f$1=function(s)
  {
   return Seq.choose(c$1,s);
  },(g=NewLY.generateEntries(lyt.lytName),function(x)
  {
   return g(f$1(x));
  })),parseW);
  entries=List.ofArray([{
   $:0,
   $0:AppFramework.newVar(new PlgElemName({
    $:0,
    $0:"Layout"
   }),lyt.lytDefinition)
  },{
   $:1,
   $0:AppFramework.newViw(new PlgElemName({
    $:0,
    $0:"ParseMsgs"
   }),errorsW)
  }]);
  View$1.Sink((g$1=(l$1=lyt.lytName,function(e)
  {
   LayoutEngineModule.refreshEntries(l$1,e);
  }),function(x)
  {
   return g$1(f$2(x));
  }),defsW);
 };
 NewLY.parseNewLayout=function(lytN)
 {
  var f,g,g$1;
  function f$1(t)
  {
   return LayoutEngineModule.parseEntries(lytN,t);
  }
  function c(a)
  {
   return a.$==1?(Library.print(a.$0),null):{
    $:1,
    $0:a.$0
   };
  }
  f=(g=function(s)
  {
   return Seq.choose(c,s);
  },function(x)
  {
   return g(f$1(x));
  });
  g$1=NewLY.generateEntries(lytN);
  return function(x)
  {
   return g$1(f(x));
  };
 };
 NewLY.generateEntries=function(lytN)
 {
  function c($1,$2)
  {
   var x,x$1,x$2,x$3,x$4,x$5,x$6,x$7,x$8,x$9,x$10;
   return $2.$==0?$2.$0.$==1?{
    $:1,
    $0:{
     $:2,
     $0:(x=(NewLY.defButtonM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2]),AppFramework.newDoc(new PlgElemName({
      $:0,
      $0:$1
     }),x))
    }
   }:$2.$0.$==2?{
    $:1,
    $0:{
     $:2,
     $0:(x$1=(NewLY.defInputM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDoc(new PlgElemName({
      $:0,
      $0:$1
     }),x$1))
    }
   }:$2.$0.$==3?{
    $:1,
    $0:{
     $:2,
     $0:(x$2=(NewLY.defTextAreaM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDoc(new PlgElemName({
      $:0,
      $0:$1
     }),x$2))
    }
   }:$2.$0.$==5?{
    $:1,
    $0:{
     $:2,
     $0:(x$3=(NewLY.defConcatM())([lytN,$1,$2.$0.$0.$0]),AppFramework.newDoc(new PlgElemName({
      $:0,
      $0:$1
     }),x$3))
    }
   }:$2.$0.$==6?{
    $:1,
    $0:{
     $:2,
     $0:(x$4=(NewLY.defElementM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2]),AppFramework.newDoc(new PlgElemName({
      $:0,
      $0:$1
     }),x$4))
    }
   }:$2.$0.$==4?{
    $:1,
    $0:{
     $:2,
     $0:(x$5=(NewLY.defDocFM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1]),AppFramework.newDocF(new PlgElemName({
      $:0,
      $0:$1
     }),x$5))
    }
   }:{
    $:1,
    $0:{
     $:2,
     $0:(x$6=(NewLY.defSplitterM())([lytN,$1,$2.$0.$0.$0,$2.$0.$0.$1,$2.$0.$0.$2,$2.$0.$0.$3]),AppFramework.newDoc(new PlgElemName({
      $:0,
      $0:$1
     }),x$6))
    }
   }:$2.$==1?{
    $:1,
    $0:{
     $:3,
     $0:(x$7=(NewLY.defActionM())([lytN,$1,$2.$0.$0,$2.$0.$1]),AppFramework.newActF(new PlgElemName({
      $:0,
      $0:$1
     }),x$7))
    }
   }:$2.$==3?{
    $:1,
    $0:{
     $:1,
     $0:(x$8=(NewLY.defViewM())([lytN,$1,$2.$0.$0]),AppFramework.newViw(new PlgElemName({
      $:0,
      $0:$1
     }),x$8))
    }
   }:$2.$==4?{
    $:1,
    $0:{
     $:1,
     $0:(x$9=(NewLY.defViewJSM())([lytN,$1,$2.$0.$0]),AppFramework.newViw(new PlgElemName({
      $:0,
      $0:$1
     }),x$9))
    }
   }:$2.$==6?null:$2.$==5?null:{
    $:1,
    $0:{
     $:0,
     $0:(x$10=NewLY.defVarM(lytN,$1,$2.$0.$0),AppFramework.newVar(new PlgElemName({
      $:0,
      $0:$1
     }),x$10))
    }
   };
  }
  return function(s)
  {
   return Seq.choose(function($1)
   {
    return c($1[0],$1[1]);
   },s);
  };
 };
 NewLY.defSplitterM=function()
 {
  SC$1.$cctor();
  return SC$1.defSplitterM;
 };
 NewLY.defViewJSM=function()
 {
  SC$1.$cctor();
  return SC$1.defViewJSM;
 };
 NewLY.defViewM=function()
 {
  SC$1.$cctor();
  return SC$1.defViewM;
 };
 NewLY.defConcatM=function()
 {
  SC$1.$cctor();
  return SC$1.defConcatM;
 };
 NewLY.defElementM=function()
 {
  SC$1.$cctor();
  return SC$1.defElementM;
 };
 NewLY.defTextAreaM=function()
 {
  SC$1.$cctor();
  return SC$1.defTextAreaM;
 };
 NewLY.defInputM=function()
 {
  SC$1.$cctor();
  return SC$1.defInputM;
 };
 NewLY.defButtonM=function()
 {
  SC$1.$cctor();
  return SC$1.defButtonM;
 };
 NewLY.defActionM=function()
 {
  SC$1.$cctor();
  return SC$1.defActionM;
 };
 NewLY.defDocFM=function()
 {
  SC$1.$cctor();
  return SC$1.defDocFM;
 };
 NewLY.defVarM=function(l,n,i)
 {
  var v;
  v=(NewLY.defVarM0())([l,n,NewLY.initVal()]);
  v.Get()===NewLY.initVal()?v.Set(i):void 0;
  return v;
 };
 NewLY.defVarM0=function()
 {
  SC$1.$cctor();
  return SC$1.defVarM0;
 };
 NewLY.initVal=function()
 {
  SC$1.$cctor();
  return SC$1.initVal;
 };
 NewLY.defSplitter=function(lytN,n,v,m,a,a$1)
 {
  var l,r,b;
  l=a.$0;
  r=a$1.$0;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(Extract0.getDocFromTextTypesD(),function(a$2)
   {
    return b.Return(Lazy.Create(function()
    {
     function getDoc(d)
     {
      return AppFramework.makeAViewDoc(function()
      {
       return a$2(List.ofArray([NewLY.itemRefToTextType(d)]));
      });
     }
     return m.$==1?LayoutEngineModule.variableSplitter(v,m.$0,m.$1,m.$2,getDoc(l),getDoc(r)):LayoutEngineModule.fixedSplitter(v,m.$0,m.$1,getDoc(l),getDoc(r));
    }));
   });
  })));
 };
 NewLY.defButton=function(lytN,n,ac,attrs,tx)
 {
  return Lazy.Create(function()
  {
   return AppFramework.errDocf(function($1)
   {
    return $1("Button deprecated use button \"click=@{Action}\"");
   });
  });
 };
 NewLY.defDocF=function(lytN,n,a,ds)
 {
  var dc,b;
  dc=a.$0;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.currentPlugInNameD(),function(a$1)
   {
    return b.Bind(NewLY.getParam2D(),function(a$2)
    {
     var o,o$1,t,x;
     function passParm($1,$2)
     {
      var a$3,f1;
      return $2.$==1?$1.$==1?(a$3=$2.$0,(f1=$1.$0,{
       $:0,
       $0:Lazy.Create(function()
       {
        return f1(a$2(a$3));
       })
      })):$1.$==2?passParm({
       $:1,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2
      },$2.$1):$1.$==3?passParm({
       $:2,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3
      },$2.$1):$1.$==4?passParm({
       $:3,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3,
       $3:$1.$4
      },$2.$1):$1.$==5?passParm({
       $:4,
       $0:$1.$0(a$2($2.$0)),
       $1:$1.$2,
       $2:$1.$3,
       $3:$1.$4,
       $4:$1.$5
      },$2.$1):{
       $:0,
       $0:$1.$0
      }:$1;
     }
     return b.Return((o=(o$1=(t=(x=NewLY.itemRefToString(dc),((LayoutEngineModule.splitName())(a$1))(x)),AppFramework.tryGetDoc(t[0],t[1])),o$1==null?null:{
      $:1,
      $0:passParm(o$1.$0.docDoc,ds)
     }),o==null?{
      $:0,
      $0:Lazy.Create(function()
      {
       return AppFramework.errDoc((function($1)
       {
        return function($2)
        {
         return $1("Missing doc: "+LayoutEngine_GeneratedPrintf.p($2));
        };
       }(Global.id))(dc));
      })
     }:o.$0));
    });
   });
  })));
 };
 NewLY.defConcat=function(lytN,n,docs)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.nodeRefToDocD(),function(a)
   {
    return b.Return(AppFramework.makeAViewDocL(function()
    {
     return Doc.Concat(Seq.map(a,docs));
    }));
   });
  })));
 };
 NewLY.defElement=function(lytN,n,elem,attrs,docs)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.nodeRefToDocD(),function(a)
   {
    return b.Bind(AppFramework.extractAtsD(),function(a$1)
    {
     return b.Bind(NewLY.getParam2D(),function(a$2)
     {
      return b.Return(AppFramework.makeAViewDocL(function()
      {
       return Doc.Element(elem,a$1(a$2(attrs)),Seq.map(a,docs));
      }));
     });
    });
   });
  })));
 };
 NewLY.defTextArea=function(lytN,n,v,attrs)
 {
  return Lazy.Create(function()
  {
   return AppFramework.errDocf(function($1)
   {
    return $1("TextArea deprecated use AF.TextArea");
   });
  });
 };
 NewLY.defInput=function(lytN,n,v,attrs)
 {
  return Lazy.Create(function()
  {
   return AppFramework.errDocf(function($1)
   {
    return $1("input deprecated use AF.Input");
   });
  });
 };
 NewLY.defViewJS=function(lytN,n,ps)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.currentPlugInNameD(),function()
   {
    return b.Bind(NewLY.getParamD(),function(a)
    {
     return b.Return(View$1.Bind(function()
     {
      try
      {
       return View$1.Map(function(ar)
       {
        try
        {
         return!Unchecked.Equals(ar,null)&&ar.length===0?"No JS function specified":!Unchecked.Equals(ar,null)&&ar.length===1?Global.String(Global["eval"](Arrays.get(ar,0))):Global.String(Global["eval"](Arrays.get(ar,0)).apply(null,Slice.array(ar,{
          $:1,
          $0:1
         },null)));
        }
        catch(e)
        {
         return e.message;
        }
       },View$1.Map(Arrays.ofSeq,View.traverseSeq(a,ps)));
      }
      catch(e)
      {
       return View$1.Const(e.message);
      }
     },AppFramework.baseView()));
    });
   });
  })));
 };
 NewLY.defView=function(lytN,n,ps)
 {
  var b;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.currentPlugInNameD(),function()
   {
    return b.Bind(NewLY.getParam2D(),function(a)
    {
     return b.Bind(AppFramework.extractTextD(),function(a$1)
     {
      return b.Return(View$1.Bind(function()
      {
       function g(s)
       {
        return Strings.concat("",s);
       }
       return View$1.Map(function(x)
       {
        return g(Arrays.ofSeq(x));
       },View.traverseSeq(function(x)
       {
        return a$1(a(x));
       },ps));
      },AppFramework.baseView()));
     });
    });
   });
  })));
 };
 NewLY.defAction=function(lytN,n,a,ps)
 {
  var ac,b;
  ac=a.$0;
  return AppFramework.run(lytN,(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(NewLY.currentPlugInNameD(),function(a$1)
   {
    return b.Bind(NewLY.getParamTextD(),function(a$2)
    {
     var o,t,$1,$2,r,o$1,act,$3,f,t1,f$1,t1$1,t2,f$2,t1$2;
     r=NewLY.itemRefToString(ac);
     o$1=(t=(AppFramework.splitName(a$1))(r),AppFramework.tryGetAct(t[0],t[1]));
     if(o$1==null)
      o=null;
     else
      {
       act=o$1.$0;
       if(ps.$===0)
        $1=act.actFunction;
       else
        {
         $3=act.actFunction;
         switch($3.$==1?ps.$==1?ps.$1.$==0?($2=[$3.$0,ps.$0],0):3:3:$3.$==2?ps.$==1?ps.$1.$==0?($2=[$3.$0,$3.$2,ps.$0],2):ps.$1.$1.$==0?($2=[$3.$0,ps.$0,ps.$1.$0],1):3:3:3)
         {
          case 0:
           $1=(f=$2[0],(t1=$2[1],{
            $:0,
            $0:function()
            {
             (a$2(t1))(f);
            }
           }));
           break;
          case 1:
           $1=(f$1=$2[0],(t1$1=$2[1],(t2=$2[2],{
            $:0,
            $0:function()
            {
             (a$2(t1$1))(function(p1)
             {
              (a$2(t2))(f$1(p1));
             });
            }
           })));
           break;
          case 2:
           $1=(f$2=$2[0],(t1$2=$2[2],{
            $:1,
            $0:function(p2)
            {
             (a$2(t1$2))(function(p1)
             {
              (f$2(p1))(p2);
             });
            },
            $1:$2[1]
           }));
           break;
          case 3:
           $1={
            $:0,
            $0:function()
            {
             ((((Runtime.Curried(function($4,$5,$6,$7)
             {
              return $4("Parameters do not coincide for Action "+Utils.toSafe($5)+" "+Utils.printList(function($8)
              {
               return LayoutEngine_GeneratedPrintf.p$17($8);
              },$6)+" "+GeneratedPrintf.p$1($7));
             },4))(function(s)
             {
              console.log(s);
             }))(r))(ps))(act);
            }
           };
           break;
         }
        }
       o={
        $:1,
        $0:$1
       };
      }
     return b.Return(o==null?{
      $:0,
      $0:function()
      {
       ((function($4)
       {
        return function($5)
        {
         return $4("Action Not Found "+Utils.toSafe($5));
        };
       }(function(s)
       {
        console.log(s);
       }))(r));
      }
     }:o.$0);
    });
   });
  })));
 };
 NewLY.defVar=function(lytN,n,v)
 {
  return Var$2.Create$1(v);
 };
 NewLY.getParamTextD=function()
 {
  SC$1.$cctor();
  return SC$1.getParamTextD;
 };
 NewLY.getParam2D=function()
 {
  SC$1.$cctor();
  return SC$1.getParam2D;
 };
 NewLY.itemRefToAbsolute=function(lyt)
 {
  function f(a)
  {
   return a.$==1?[a.$0,a.$1]:[lyt,a.$0];
  }
  function g(a,b)
  {
   return(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Utils.toSafe($2)+"."+Utils.toSafe($3));
   }))(Global.id))(a))(b);
  }
  return function(x)
  {
   return g.apply(null,f(x));
  };
 };
 NewLY.getParamD=function()
 {
  SC$1.$cctor();
  return SC$1.getParamD;
 };
 NewLY.varRefToVarD=function()
 {
  SC$1.$cctor();
  return SC$1.varRefToVarD;
 };
 NewLY.nodeRefToDocD=function()
 {
  SC$1.$cctor();
  return SC$1.nodeRefToDocD;
 };
 NewLY.ActRVs=function(a)
 {
  return List.ofArray([{
   $:1,
   $0:{
    $:0,
    $0:a.$0
   }
  }]);
 };
 NewLY.textValToTextType=function(a)
 {
  var $1;
  return(a.$==3?($1=a.$0.$0,false):a.$==4?($1=a.$0.$0,false):a.$==1?($1=a.$0.$0,false):a.$==2?($1=a.$0.$0,false):true)?{
   $:0,
   $0:a.$0
  }:NewLY.itemRefToTextType($1);
 };
 NewLY.itemRefToString=function(a)
 {
  return a.$==1?(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1(Utils.toSafe($2)+"."+Utils.toSafe($3));
  }))(Global.id))(a.$0))(a.$1):a.$0;
 };
 NewLY.itemRefToTextType=function(a)
 {
  return a.$==1?{
   $:1,
   $0:(((Runtime.Curried3(function($1,$2,$3)
   {
    return $1(Utils.toSafe($2)+"."+Utils.toSafe($3));
   }))(Global.id))(a.$0))(a.$1)
  }:{
   $:1,
   $0:a.$0
  };
 };
 NewLY.callDocPFn=function(pin,pf)
 {
  var f;
  f=P$1.run(pin,pf);
  return AppFramework.makeAViewDoc(function()
  {
   var m;
   m=f.f.$==0?f.p.$==1?{
    $:0,
    $0:View$1.Apply(f.f.$0,View$1.Const(f.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(f.f.$0,f.p.$0)
   }:f.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(f.f.$0),f.p.$0)
   }:{
    $:1,
    $0:f.f.$0(f.p.$0)
   };
   return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
  });
 };
 NewLY.split2=function()
 {
  SC$1.$cctor();
  return SC$1.split2;
 };
 NewLY.split=function()
 {
  SC$1.$cctor();
  return SC$1.split;
 };
 NewLY.appFwk=function()
 {
  SC$1.$cctor();
  return SC$1.appFwk;
 };
 NewLY.main2=function()
 {
  SC$1.$cctor();
  return SC$1.main2;
 };
 NewLY.main=function()
 {
  SC$1.$cctor();
  return SC$1.main;
 };
 NewLY.main1=function()
 {
  SC$1.$cctor();
  return SC$1.main1;
 };
 NewLY.main0=function()
 {
  SC$1.$cctor();
  return SC$1.main0;
 };
 NewLY.aString=function()
 {
  SC$1.$cctor();
  return SC$1.aString;
 };
 NewLY.sayHello=function()
 {
  SC$1.$cctor();
  return SC$1.sayHello;
 };
 NewLY.now=function()
 {
  SC$1.$cctor();
  return SC$1.now;
 };
 NewLY.enterName=function()
 {
  SC$1.$cctor();
  return SC$1.enterName;
 };
 NewLY.checkName=function(n)
 {
  return n===Slice.string("World",{
   $:1,
   $0:0
  },{
   $:1,
   $0:n.length-1
  })||n.length<=1?"<---- Please enter your name":"";
 };
 NewLY.name=function()
 {
  SC$1.$cctor();
  return SC$1.name;
 };
 NewLY.currentPlugInNameD=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInNameD$1;
 };
 NewLY.currentPlugInNameDef=function()
 {
  SC$1.$cctor();
  return SC$1.currentPlugInNameDef$1;
 };
 NewLY.pb=function()
 {
  SC$1.$cctor();
  return SC$1.pb;
 };
 NewLY.pa=function()
 {
  SC$1.$cctor();
  return SC$1.pa;
 };
 NewLY.aV=function()
 {
  SC$1.$cctor();
  return SC$1.aV;
 };
 NewLY.concat=function(a,b)
 {
  return(((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("Concat("+Global.String($2)+", "+$3.toFixed(6)+")");
  }))(Global.id))(a))(b);
 };
 LibraryJS.rexEmail=function()
 {
  SC$1.$cctor();
  return SC$1.rexEmail;
 };
 LibraryJS.rexGuid=function()
 {
  SC$1.$cctor();
  return SC$1.rexGuid;
 };
 LibraryJS.REGEX$1=function(expr,opt,value)
 {
  var m;
  return value===null?null:(m=(new Global.String(value)).match(new Global.RegExp(expr,opt)),Unchecked.Equals(m,null)?null:!Unchecked.Equals(m,null)&&m.length===0?null:{
   $:1,
   $0:m
  });
 };
 SC$1.$cctor=function()
 {
  var f,g,x,b,b$1,b$2,b$3,b$4,b$5,b$6,b$7,a,b$8,a$1,b$9,b$10,p,cache,getOrAdd,p$1,cache$1,getOrAdd$1,p$2,cache$2,getOrAdd$2,p$3,cache$3,getOrAdd$3,p$4,cache$4,getOrAdd$4,p$5,cache$5,getOrAdd$5,p$6,cache$6,getOrAdd$6,p$7,cache$7,getOrAdd$7,p$8,cache$8,getOrAdd$8,p$9,cache$9,getOrAdd$9,p$10,cache$10,getOrAdd$10,o,pf,p$11,pf$1,p$12,sayHello_0,c,vf,a$2,vf$1,c$1,vf$2,pc,pf$2,p$13,p$14,pc$1,vf$3,p$15,c$2,c$3,c$4,c$5,c$6,c$7,c$8,c$9,c$10,vf$4,c$11,vf$5,c$12,vf$6,pc$2,vf$7,p$16,b$11,b$12,b$13,b$14,b$15,p$17,cache$11,getOrAdd$11,p$18,cache$12,getOrAdd$12,p$19,cache$13,getOrAdd$13,p$20,cache$14,getOrAdd$14,p$21,cache$15,getOrAdd$15,p$22,cache$16,getOrAdd$16,p$23,cache$17,getOrAdd$17,p$24,cache$18,getOrAdd$18,p$25,cache$19,getOrAdd$19,p$26,cache$20,getOrAdd$20,p$27,cache$21,getOrAdd$21;
  SC$1.$cctor=Global.ignore;
  function g$1(s)
  {
   return Strings.concat("\n",s);
  }
  function f$1(s)
  {
   return String.splitByChar("\n",s);
  }
  function g$2(s)
  {
   var a$4,b$16;
   return Slice.array(s,{
    $:1,
    $0:0
   },{
    $:1,
    $0:(a$4=0,(b$16=Arrays.length(s)-2,Unchecked.Compare(a$4,b$16)===1?a$4:b$16))
   });
  }
  function g$3(s)
  {
   return Strings.concat("\n",s);
  }
  function f$2(s)
  {
   return s+"T00:00:00";
  }
  function a$3(a$4)
  {
   var f$6;
   function b$16(a$5)
   {
    return AppFramework.plugIns().TryFindByKey(a$5);
   }
   function g$4(o$1)
   {
    return o$1==null?AppFramework.defaultPlugIn():o$1.$0;
   }
   f$6=function(o$1)
   {
    return o$1==null?null:b$16(o$1.$0);
   };
   return function(x$1)
   {
    return g$4(f$6(x$1));
   };
  }
  function f$3(extractAts,extractDoc)
  {
   return function(attrs)
   {
    return function(labelName)
    {
     function f$6(_var)
     {
      return Doc.Element("div",extractAts(attrs),[Doc.Element("div",[AttrProxy.Create("class","input-group")],[Doc.Element("span",[AttrProxy.Create("class","input-group-addon")],[extractDoc(labelName)]),Doc.Input([AttrProxy.Create("class","form-control")],_var)])]);
     }
     return function(v)
     {
      return AppFramework.docWithVar(f$6,v);
     };
    };
   };
  }
  function f$4(extractAts,attrs)
  {
   var f$6,a$4;
   f$6=(a$4=extractAts(attrs),function(a$5)
   {
    return Doc.Input(a$4,a$5);
   });
   return function(v)
   {
    return AppFramework.docWithVar(f$6,v);
   };
  }
  function f$5(extractAts,attrs)
  {
   var f$6,a$4;
   f$6=(a$4=extractAts(attrs),function(a$5)
   {
    return Doc.InputArea(a$4,a$5);
   });
   return function(v)
   {
    return AppFramework.docWithVar(f$6,v);
   };
  }
  function checkO(v)
  {
   var res;
   res=null;
   return cache.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store(v,res)
  {
   cache.set_Item(v,res);
   return res;
  }
  function getOrAdd$22(p$28,f$6)
  {
   var o$1;
   o$1=checkO(p$28);
   return o$1==null?store(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$1(v)
  {
   var res;
   res=null;
   return cache$1.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$1(v,res)
  {
   cache$1.set_Item(v,res);
   return res;
  }
  function getOrAdd$23(p$28,f$6)
  {
   var o$1;
   o$1=checkO$1(p$28);
   return o$1==null?store$1(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$2(v)
  {
   var res;
   res=null;
   return cache$2.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$2(v,res)
  {
   cache$2.set_Item(v,res);
   return res;
  }
  function getOrAdd$24(p$28,f$6)
  {
   var o$1;
   o$1=checkO$2(p$28);
   return o$1==null?store$2(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$3(v)
  {
   var res;
   res=null;
   return cache$3.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$3(v,res)
  {
   cache$3.set_Item(v,res);
   return res;
  }
  function getOrAdd$25(p$28,f$6)
  {
   var o$1;
   o$1=checkO$3(p$28);
   return o$1==null?store$3(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$4(v)
  {
   var res;
   res=null;
   return cache$4.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$4(v,res)
  {
   cache$4.set_Item(v,res);
   return res;
  }
  function getOrAdd$26(p$28,f$6)
  {
   var o$1;
   o$1=checkO$4(p$28);
   return o$1==null?store$4(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$5(v)
  {
   var res;
   res=null;
   return cache$5.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$5(v,res)
  {
   cache$5.set_Item(v,res);
   return res;
  }
  function getOrAdd$27(p$28,f$6)
  {
   var o$1;
   o$1=checkO$5(p$28);
   return o$1==null?store$5(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$6(v)
  {
   var res;
   res=null;
   return cache$6.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$6(v,res)
  {
   cache$6.set_Item(v,res);
   return res;
  }
  function getOrAdd$28(p$28,f$6)
  {
   var o$1;
   o$1=checkO$6(p$28);
   return o$1==null?store$6(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$7(v)
  {
   var res;
   res=null;
   return cache$7.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$7(v,res)
  {
   cache$7.set_Item(v,res);
   return res;
  }
  function getOrAdd$29(p$28,f$6)
  {
   var o$1;
   o$1=checkO$7(p$28);
   return o$1==null?store$7(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$8(v)
  {
   var res;
   res=null;
   return cache$8.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$8(v,res)
  {
   cache$8.set_Item(v,res);
   return res;
  }
  function getOrAdd$30(p$28,f$6)
  {
   var o$1;
   o$1=checkO$8(p$28);
   return o$1==null?store$8(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$9(v)
  {
   var res;
   res=null;
   return cache$9.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$9(v,res)
  {
   cache$9.set_Item(v,res);
   return res;
  }
  function getOrAdd$31(p$28,f$6)
  {
   var o$1;
   o$1=checkO$9(p$28);
   return o$1==null?store$9(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$10(v)
  {
   var res;
   res=null;
   return cache$10.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$10(v,res)
  {
   cache$10.set_Item(v,res);
   return res;
  }
  function getOrAdd$32(p$28,f$6)
  {
   var o$1;
   o$1=checkO$10(p$28);
   return o$1==null?store$10(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$11(v)
  {
   var res;
   res=null;
   return cache$11.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$11(v,res)
  {
   cache$11.set_Item(v,res);
   return res;
  }
  function getOrAdd$33(p$28,f$6)
  {
   var o$1;
   o$1=checkO$11(p$28);
   return o$1==null?store$11(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$12(v)
  {
   var res;
   res=null;
   return cache$12.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$12(v,res)
  {
   cache$12.set_Item(v,res);
   return res;
  }
  function getOrAdd$34(p$28,f$6)
  {
   var o$1;
   o$1=checkO$12(p$28);
   return o$1==null?store$12(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$13(v)
  {
   var res;
   res=null;
   return cache$13.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$13(v,res)
  {
   cache$13.set_Item(v,res);
   return res;
  }
  function getOrAdd$35(p$28,f$6)
  {
   var o$1;
   o$1=checkO$13(p$28);
   return o$1==null?store$13(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$14(v)
  {
   var res;
   res=null;
   return cache$14.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$14(v,res)
  {
   cache$14.set_Item(v,res);
   return res;
  }
  function getOrAdd$36(p$28,f$6)
  {
   var o$1;
   o$1=checkO$14(p$28);
   return o$1==null?store$14(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$15(v)
  {
   var res;
   res=null;
   return cache$15.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$15(v,res)
  {
   cache$15.set_Item(v,res);
   return res;
  }
  function getOrAdd$37(p$28,f$6)
  {
   var o$1;
   o$1=checkO$15(p$28);
   return o$1==null?store$15(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$16(v)
  {
   var res;
   res=null;
   return cache$16.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$16(v,res)
  {
   cache$16.set_Item(v,res);
   return res;
  }
  function getOrAdd$38(p$28,f$6)
  {
   var o$1;
   o$1=checkO$16(p$28);
   return o$1==null?store$16(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$17(v)
  {
   var res;
   res=null;
   return cache$17.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$17(v,res)
  {
   cache$17.set_Item(v,res);
   return res;
  }
  function getOrAdd$39(p$28,f$6)
  {
   var o$1;
   o$1=checkO$17(p$28);
   return o$1==null?store$17(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$18(v)
  {
   var res;
   res=null;
   return cache$18.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$18(v,res)
  {
   cache$18.set_Item(v,res);
   return res;
  }
  function getOrAdd$40(p$28,f$6)
  {
   var o$1;
   o$1=checkO$18(p$28);
   return o$1==null?store$18(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$19(v)
  {
   var res;
   res=null;
   return cache$19.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$19(v,res)
  {
   cache$19.set_Item(v,res);
   return res;
  }
  function getOrAdd$41(p$28,f$6)
  {
   var o$1;
   o$1=checkO$19(p$28);
   return o$1==null?store$19(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$20(v)
  {
   var res;
   res=null;
   return cache$20.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$20(v,res)
  {
   cache$20.set_Item(v,res);
   return res;
  }
  function getOrAdd$42(p$28,f$6)
  {
   var o$1;
   o$1=checkO$20(p$28);
   return o$1==null?store$20(p$28,f$6(p$28)):o$1.$0;
  }
  function checkO$21(v)
  {
   var res;
   res=null;
   return cache$21.TryGetValue(v,{
    get:function()
    {
     return res;
    },
    set:function(v$1)
    {
     res=v$1;
    }
   })?{
    $:1,
    $0:res
   }:null;
  }
  function store$21(v,res)
  {
   cache$21.set_Item(v,res);
   return res;
  }
  function getOrAdd$43(p$28,f$6)
  {
   var o$1;
   o$1=checkO$21(p$28);
   return o$1==null?store$21(p$28,f$6(p$28)):o$1.$0;
  }
  SC$1.state=new CEBuilder.New();
  SC$1.result=new Builder.New();
  SC$1.result$1=Result.result();
  SC$1.depend=new DependBuilder.New();
  SC$1.rtn=Depend.rtn;
  SC$1.depend$1=Depend.depend();
  SC$1.unindentStr=function(x$1)
  {
   return g$1(String.unindent(x$1));
  };
  SC$1.skipLastLine=(f=function(x$1)
  {
   return g$2(f$1(x$1));
  },function(x$1)
  {
   return g$3(f(x$1));
  });
  SC$1.parseDateO2=(g=ParseO.tryParseWith(function(a$4)
  {
   var o$1,m;
   o$1=0;
   return[(m=DateUtil.TryParse(a$4),m!=null&&m.$==1&&(o$1=m.$0,true)),o$1];
  }),function(x$1)
  {
   return g(f$2(x$1));
  });
  SC$1.parseDateO=ParseO.tryParseWith(function(a$4)
  {
   var o$1,m;
   o$1=0;
   return[(m=DateUtil.TryParse(a$4),m!=null&&m.$==1&&(o$1=m.$0,true)),o$1];
  });
  SC$1.parseIntO=ParseO.tryParseWith(function(a$4)
  {
   var o$1;
   o$1=0;
   return[Numeric.TryParseInt32(a$4,{
    get:function()
    {
     return o$1;
    },
    set:function(v)
    {
     o$1=v;
    }
   }),o$1];
  });
  SC$1.parseInt64O=ParseO.tryParseWith(function(a$4)
  {
   var o$1;
   o$1=0;
   return[Numeric.TryParseInt64(a$4,{
    get:function()
    {
     return o$1;
    },
    set:function(v)
    {
     o$1=v;
    }
   }),o$1];
  });
  SC$1.parseSingleO=ParseO.tryParseWith(function(a$4)
  {
   var o$1,$1;
   o$1=0;
   return[($1=Global.Number(a$4),Global.isNaN($1)?false:(o$1=$1,true)),o$1];
  });
  SC$1.parseDoubleO=ParseO.tryParseWith(function(a$4)
  {
   var o$1,$1;
   o$1=0;
   return[($1=Global.Number(a$4),Global.isNaN($1)?false:(o$1=$1,true)),o$1];
  });
  SC$1.parseGuidO=ParseO.tryParseWith(function(a$4)
  {
   var o$1;
   o$1=null;
   return[Guid.TryParse(a$4,{
    get:function()
    {
     return o$1;
    },
    set:function(v)
    {
     o$1=v;
    }
   }),o$1];
  });
  SC$1["|Date|_|"]=ParseO.parseDateO();
  SC$1["|Int|_|"]=ParseO.parseIntO();
  SC$1["|Int64|_|"]=ParseO.parseInt64O();
  SC$1["|Single|_|"]=ParseO.parseSingleO();
  SC$1["|Double|_|"]=ParseO.parseDoubleO();
  SC$1["|Guid|_|"]=ParseO.parseGuidO();
  SC$1.counter=1;
  SC$1.rexGuid="([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})";
  SC$1.rexEmail="(([^<>()\\[\\]\\\\.,;:\\s@\"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*";
  SC$1.observers=List.T.Empty;
  SC$1.css="\r\n                .tab-panel {\r\n                 overflow  : hidden   ;\r\n                 display   : flex     ;\r\n                 flex-flow : column   ;\r\n                 background: lightgray;\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                }\r\n                .tab-content {\r\n                 flex      : 1 1     ;\r\n                 overflow  : auto    ;\r\n                 position  : relative;\r\n                }\r\n                .tab-children {\r\n                 height    : 100%    ;\r\n                 width     : 100%    ;\r\n                 position  : absolute;\r\n                 display   : grid    ;\r\n                }\r\n                .tab-strip {\r\n                 padding   : 0pt     ;\r\n                 flex      : 0 0     ;\r\n                }\r\n                .tab {\r\n                 border     : 0.2pt solid transparent;\r\n                 padding    : 0pt 4pt;\r\n                 display    : inline-block;\r\n                 font-family: sans-serif;\r\n                 font-weight: 200;\r\n                 font-size  : small;\r\n                 color      : #666;\r\n                 cursor     : pointer;\r\n                }\r\n                .top>.tab {\r\n                 border-radius: 2pt 2pt 0pt 0pt;\r\n                 border-bottom-width: 0pt;\r\n                 vertical-align: bottom;\r\n                }\r\n                .bottom>.tab {\r\n                 border-top-width: 0pt;\r\n                 border-radius: 0pt 0pt 2pt 2pt;\r\n                 vertical-align: top;\r\n                }\r\n                .horizontal>.tab:not(:first-child) {\r\n                 border-left-width: 0pt;\r\n                }\r\n                .tab.hovering {\r\n                 background: red;\r\n                }\r\n                .tab.selected {\r\n                 background: white;\r\n                 border-left-width: 0.2pt;\r\n                 color: black;\r\n                 font-weight: 500;\r\n                 border-color: black;\r\n                }\r\n                .horizontal>.tab.selected {\r\n                 border-left-width: 0.2pt;\r\n                }\r\n                ::slotted(*              ) { \r\n                 width : 100%;\r\n                 height: 100%;\r\n                }\r\n                        ";
  SC$1.init=Lazy.Create(function()
  {
   var o$1;
   o$1=new WcTabStripT.New();
   WebComponent.defineWebComponent("wcomp-tabstrip",WcTabStripT.Constructor,self.FsRootDll.LibraryJS.WebComponent.WcTabStrip.WcTabStripT.New);
  });
  SC$1.layoutHorizontal=Runtime.Curried(function($1,$2,$3,$4,$5)
  {
   return Doc.get_Empty();
  },5);
  SC$1.layoutVertical=Runtime.Curried(function($1,$2,$3,$4,$5)
  {
   return Doc.get_Empty();
  },5);
  SC$1.html="\r\n            <div style=\"display:none\" >\r\n                <div links>\r\n                    <link href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\" type=\"text/css\" rel=\"stylesheet\">\r\n                    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"  type=\"text/javascript\"></script>\r\n                </div>\r\n                <div ws-template=\"AppFramework\" style=\"height: calc(100vh - 4px); width: calc(100vw - 4px) \" class=\"relative\" >\r\n                    <div ws-hole=\"MainClient\"></div>\r\n                    <div class=\"AppFrameworkGo\"><button ws-onclick=\"GoClient\">${MainDoc}</button></div>\r\n                </div>\r\n                <style>\r\n                    .AppFrameworkGo {\r\n                        max-width: 2px;\r\n                        max-height: 2px;\r\n                        z-index: 4000;\r\n                        overflow: hidden;\r\n                        position: fixed;\r\n                        top: 0px;\r\n                        left: 0px;\r\n                    }\r\n                </style>\r\n                <div ws-template=\"FixedSplitterVer\" \r\n                    style=\"display: grid; \r\n                           grid-gap: 0px; \r\n                           box-sizing: border-box; \r\n                           height: 100%;\r\n                           width : 100%;\r\n                           grid-template-areas: 'one two'; \r\n                           grid-template-rows   :100%; \r\n                           overflow: hidden; \r\n                           grid-template-columns: ${PartSizes}\"  >\r\n                   <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n                   <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"FixedSplitterHor\" \r\n               style=\"display: grid; \r\n                      grid-gap: 0px; \r\n                      box-sizing: border-box; \r\n                      height: 100%;\r\n                      width : 100%;\r\n                      grid-template-areas: 'one' 'two'; \r\n                      grid-template-columns:100%; \r\n                      overflow: hidden; \r\n                      grid-template-rows   : ${PartSizes}\"  >\r\n              <div ws-hole=\"First\"  style=\"grid-area: one; \" class=\"relative\" ></div>\r\n              <div ws-hole=\"Second\" style=\"grid-area: two; \" class=\"relative\" ></div>\r\n                </div>               \r\n                <div ws-template=\"WCompSplitterHor\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid;\r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one' 'two'; \r\n                            grid-template-columns:100%; \r\n                            overflow: hidden; \r\n                            grid-template-rows   : ${PartSizes}\" \r\n                     >\r\n                     <slot></slot>\r\n                    <slot name=\"splitter\">  <div style=\"grid-row:2; grid-column:1 / 1 ; cursor: row-resize; z-index: 3; background-color: #eef ; height: ${Gap}; margin-top :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-row:2; grid-column:1 / 1 ; \r\n                            cursor: row-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            height: ${Gap}; \r\n                            margin-top :-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>        \r\n                <div ws-template=\"WCompSplitterVer\" \r\n                     ws-onafterrender=\"AfterRender\"\r\n                     style=\"display: grid; \r\n                            grid-gap: 5px; \r\n                            box-sizing: border-box; \r\n                            grid-template-areas: 'one two'; \r\n                            grid-template-rows   :100%; \r\n                            overflow: hidden; \r\n                            grid-template-columns: ${PartSizes}\"  >\r\n                    <slot></slot>\r\n                    <slot name=\"splitter\"> <div style=\"grid-column:2; grid-row:1 / 1 ; cursor: col-resize; z-index: 3; background-color: #eef ; width: ${Gap}; margin-left :-${Gap}\" ws-onmousedown=\"MouseDown\" ws-onafterrender=\"AfterRenderSp\" ></div> </slot>\r\n                    <style>\r\n                        ::slotted(*) {\r\n                            display: grid;\r\n                            height : 100%;\r\n                            width  : 100%;\r\n                            overflow: hidden;\r\n                        }\r\n                        ::slotted(*:nth-child(2)) {\r\n                            grid-area: two;\r\n                        }\r\n                        ::slotted(*[slot=\"splitter\"]) {\r\n                            grid-column:2; grid-row:1 / 1\r\n                            cursor: column-resize; \r\n                            z-index: 3; \r\n                            background-color: #eef ; \r\n                            width: ${Gap}; \r\n                            margin-left:-${Gap}\r\n                        }\r\n                    </style>\r\n                </div>\r\n                <div ws-template=\"AppFwkClient\" >\r\n                    <ws-FixedSplitterHor>\r\n                        <PartSizes>55px calc(100% - 55px)</PartSizes>\r\n                        <First>\r\n                            <span style=\"display: grid;\r\n                                  grid-template-columns: 30% 20% 20% 10%;\r\n                                  grid-gap: 25px;\r\n                                \">\r\n                                <div class=\"mainTitle\">AppFramework</div>\r\n                            </span>\r\n                        </First>\r\n                        <Second>\r\n                                <ws-FixedSplitterVer>\r\n                                    <PartSizes>calc(100% - 150px) 150px</PartSizes>\r\n                                    <First>\r\n                                        <wcomp-splitter vertical value=\"18\" max=\"100\">\r\n                                            <div><div ws-hole=\"PlugIns\" style=\"overflow:auto\" >\r\n                                                <div ws-template=\"Tile\">\r\n                                                    <div draggable=\"true\" class=\"code-editor-list-tile ${Predecessor} ${Selected}\" \r\n                                                    ws-ondrag=\"Drag\"\r\n                                                    ws-ondragover=\"DragOver\"\r\n                                                    ws-ondrop=\"Drop\"\r\n                                                   >\r\n                                                   <span class=\"node ${Parent} ${ErrorMsg}\" title=\"expand\" ws-onclick=\"ToggleCollapse\"></span>\r\n                                                   <div  class=\"code-editor-list-text\" style=\"text-indent:${Indent}em; white-space: pre\" ws-onclick=\"Select\" ws-onafterrender=\"AfterRender\" >${Name}</div>\r\n                                                   <span class=\"predecessor\" title=\"toggle predecessor\" ws-onclick=\"TogglePred\">X</span>\r\n                                               </div>\r\n                                       \r\n                                                </div>\r\n                                            </div></div>\r\n                                            <wcomp-splitter vertical value=\"100\" min=\"30\" max=\"100\">\r\n                                                <ws-FixedSplitterHor>\r\n                                                    <PartSizes>32px calc(100% - 32px)</PartSizes>\r\n                                                    <First>\r\n                                                        <div>\r\n                                                            <div class=\"input-group\">\r\n                                                                <span class=\"input-group-addon\">name:</span>\r\n                                                                <span class=\"input-group-addon\">${PlugInName}</span>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </First>\r\n                                                    <Second>\r\n                                                        <div style=\"overflow:auto\">\r\n                                                            <div>\r\n                                                                <div>Docs:</div>\r\n                                                                <div ws-hole=\"Docs\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Views:</div>\r\n                                                                <div ws-hole=\"Views\" style=\"overflow:auto\" >\r\n                                                                    <div ws-template=\"NameValue\" class=\"input-group\">\r\n                                                                        <span class=\"input-group-addon\">${Name}:</span>\r\n                                                                        <span class=\"input-group-addon\">${Value}</span>\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Queries:</div>\r\n                                                                <div ws-hole=\"Queries\" style=\"overflow:auto\" ></div>\r\n                                                            </div>\r\n                                                            <div>\r\n                                                                <div>Vars:</div>\r\n                                                                <div ws-hole=\"Vars\" style=\"overflow:auto\" >\r\n                                                                    <div ws-template=\"NameValueInput\" class=\"input-group\">\r\n                                                                        <span class=\"input-group-addon\">${Name}:</span>\r\n                                                                        <textarea class=\"form-control\" id=\"\" placeholder=\"Value...\" ws-var=\"Value\" spellcheck=\"false\">\r\n                                                                    </div>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n                                                    </Second>\r\n                                                </ws-FixedSplitterHor>\r\n                                                <wcomp-tabstrip >\r\n                                                    <div tabname=\"Properties\">\r\n                                                        <div>\r\n                                                            <table style=\"border-spacing:0px\">\r\n                                                                <thead>\r\n                                                                    <th style=\"width: 30%  \">Name</th>\r\n                                                                    <th style=\"width: 70% \">Value</th>\r\n                                                                </thead>\r\n                                                                <tbody ws-hole=\"Properties\" ws-children-template=\"Property\">\r\n                                                                    <tr ws-onclick=\"Select\" style=\"margin-bottom: 2px\" class=\"level  \">\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <input ws-var=\"Name\" type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Property...\">\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div>\r\n                                                                                <textarea ws-var=\"Value\" class=\"form-control\" id=\"\" placeholder=\"Value...\"></textarea>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                        <td class=\"level-item\">\r\n                                                                            <div style=\" cursor: pointer \" title=\"remove\">\r\n                                                                                <button ws-onclick=\"Remove\" class=\"delete is-small\">x</button>\r\n                                                                            </div>\r\n                                                                        </td>\r\n                                                                    </tr>\r\n                                                                </tbody>\r\n                                                            </table>\r\n                                                            <button ws-onclick=\"AddProperty\" class=\"add is-small\">add ...</button>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </wcomp-tabstrip>\r\n                                            </wcomp-splitter>\r\n                                        </wcomp-splitter>\r\n                                    </First>\r\n                                    <Second>\r\n                                        <div style=\"\r\n                                            overflow: hidden;\r\n                                            display: grid;\r\n                                            grid-template-columns: 100%;\r\n                                            grid-template-rows: repeat(15, calc(100% / 15));\r\n                                            bxackground-color: #eee;\r\n                                            box-sizing: border-box;\r\n                                            padding : 5px;\r\n                                            grid-gap: 5px;\r\n                                            margin-right: 21px;\r\n                                       \"  class=\"absolute\" ws-hole=\"Actions\" >\r\n                                            <button ws-template=\"Action\"         ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\"          >${Name}</button>\r\n                                            <button ws-template=\"ActionDisabled\" ws-onclick=\"Click\" class=\"btn\" type=\"button\" id=\"\" disabled >${Name}</button>\r\n                                        </div>\r\n                                    </Second>\r\n                                </ws-FixedSplitterVer>\r\n                        </Second>\r\n                    </ws-FixedSplitterHor>\r\n                </div>\r\n                <style style=\"display: none\">\r\n                        .Hidden     { display   : none         }\r\n                        table th,table td { padding:0 5px 0 5px; text-overflow: ellipsis }\r\n                        td input.form-control { \r\n                            padding    : 0px; \r\n                            font-family: monospace;\r\n                            font-size  :   small;\r\n                            margin-top :   0px;\r\n                            margin-left: -2px;\r\n                            width      : 100%\r\n                        }\r\n                        td select {\r\n                            font-size : smaller;\r\n                            max-width : 8ch;\r\n                        }\r\n                        textarea {\r\n                           resize : vertical;\r\n                        }\r\n                        .tab-content {\r\n                            overflow: hidden\r\n                        }\r\n                        .tab-children {\r\n                            position:relative;\r\n                        }\r\n                        .tab-children>div>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        .relative {\r\n                            position:relative;\r\n                        }\r\n                        .relative>* {\r\n                            position:absolute;\r\n                            height: 100%;\r\n                            width:  100%;\r\n                            display: grid;\r\n                        }\r\n                        table.table-striped    tbody tr:nth-child(even) { background: #EEE  }\r\n                        table.table-striped    tbody tr:nth-child(odd ) { background: #FFF  }\r\n                        table.table-striped    tbody input              { background: transparent; border: none}\r\n                        table.table-striped    tbody select             { background: transparent; border: none}\r\n                        table.table-nonstriped tbody tr:nth-child(even) { background: inherit }\r\n                        table.table-nonstriped tbody tr:nth-child(odd ) { background: inherit }\r\n                        table.table            tbody tr.hover           { border    : solid thin transparent; } \r\n                        table.table            tbody tr.hover:hover     { border    : solid thin blue     ; } \r\n                        table.table            tbody th:hover           { background: gray; cursor: pointer }\r\n                        table.table            tbody tr.hover:hover>td  { border-top: solid thin blue     ; \r\n                                                                   border-bottom: solid thin blue     ; } \r\n                        table.table            tbody tr.selected { background   : #b9eeff             ; }\r\n                        table.table            tbody tr.formula.selected { background: #20f7f7             ; }\r\n                        thead { color: gray }\r\n                        h3 { \r\n                            color: gray;\r\n                            line-height: 1em;\r\n                        }\r\n                        button       { border: solid thin transparent ; border-radius: 3px; }\r\n                        button:hover { border: solid thin blue }\r\n                        .indenter { position  : absolute; \r\n                                    top:0px; bottom:0px; left:0px; \r\n                                    background: white; color:white;\r\n                                    border-right: gray thin dotted;\r\n                                    }\r\n                        body {\r\n                            color      : #333;\r\n                            font-size  : small;\r\n                            font-family: monospace;\r\n                            line-height: 1.2;\r\n                        }\r\n                        .mainTitle {  \r\n                            font-size: 48px;\r\n                            font-weight: 500;\r\n                            color: gray;\r\n                            margin-top: -12px;\r\n                        }\r\n                        .CodeMirror {\r\n                            height: 100%;\r\n                        }\r\n                        \r\n                      \r\n                        body { margin: 0px }     \r\n                             \r\n                        div textarea {\r\n                            font-family     : monospace;\r\n                        }\r\n                        .code-editor-list-tile {\r\n                            white-space     : nowrap; \r\n                            border-style    : solid none none;\r\n                            border-color    : white;\r\n                            border-width    : 1px;\r\n                            background-color: #D8D8D8;\r\n                            display         : flex;\r\n                        }\r\n                        .code-editor-list-text{\r\n                            padding         : 1px 10px 1px 5px;\r\n                            overflow        : hidden;\r\n                            text-overflow   : ellipsis;\r\n                            white-space     : nowrap;\r\n                            flex            : 1;\r\n                        }\r\n                        \r\n                        .code-editor-list-tile span.node.ErrorMsg {\r\n                            background-color: red\r\n                        }\r\n                        .code-editor-list-tile span.node.expanded::before {\r\n                            content: \"-\"\r\n                        }\r\n                        .code-editor-list-tile span.node.collapsed::before {\r\n                            content: \"+\"\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor {\r\n                            font-weight     : bold;\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.indirect-predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        .code-editor-list-tile.included-predecessor {\r\n                            color           : chocolate;\r\n                        }\r\n                        .code-editor-list-tile.selected {\r\n                            background-color: #77F;\r\n                            color           : white;\r\n                        }\r\n                        .code-editor-list-tile.codeSnippet {\r\n                            text-decoration: underline\r\n                        }\r\n                        .code-editor-list-tile:hover {\r\n                            background      : lightgray;\r\n                        }\r\n                        .code-editor-list-tile.selected:hover {\r\n                            background      : blue;\r\n                        }\r\n                        .code-editor-list-tile>.predecessor {\r\n                            font-weight     : bold;\r\n                            border-style    : inset;\r\n                            border-width    : 1px;\r\n                            text-align      : center;\r\n                            color           : transparent;\r\n                        }\r\n                        .code-editor-list-tile.direct-predecessor>.predecessor {\r\n                            color           : blue;\r\n                        }\r\n                        \r\n                        .CodeMirror { height: 100%; }\r\n                        \r\n                        .node {\r\n                            background-color: white; \r\n                            width           : 2ch; \r\n                            color           : #A03; \r\n                            font-weight     : bold; \r\n                            text-align      : center;\r\n                            font-family     : arial;\r\n                        }\r\n                        .Warning { text-decoration: underline lightblue } \r\n                        .Error   { text-decoration: underline red       } \r\n                        \r\n                    </style>\r\n            </div>\r\n            ";
  SC$1.plugIns=new ListModel$1.New$1(function(plg)
  {
   return plg.plgName;
  });
  SC$1.mainDocV=Var$2.Create$1("AppFramework.AppFwkClient");
  SC$1.TemplateFileName="D:\\Abe\\CIPHERWorkspace\\FSharpStation\\projects\\LayoutEngine\\website\\AppFramework.html";
  SC$1.selectionPlugInO=Var$2.Create$1({
   $:1,
   $0:new PlugInName({
    $:0,
    $0:"AppFramework"
   })
  });
  SC$1.currentPlugInW=(x=AppFramework.selectionPlugInO().get_View(),View$1.Map2(function($1,$2)
  {
   return(a$3($1))($2);
  },AppFramework.plugIns().v,x));
  SC$1.currentPlugInV=new FromView.New(AppFramework.currentPlugInW(),function(a$4)
  {
   AppFramework.plugIns().Append(a$4);
  });
  SC$1.AppFwkClient=Lazy.Create(function()
  {
   var b$16,Q,A,D,V,V$1,P$2,p$28,i;
   return(b$16=(Q=AppFramework.renderQueries(),(A=AppFramework.renderActions(),(D=AppFramework.renderDocs(),(V=AppFramework.renderViews(),(V$1=AppFramework.renderVars(),(P$2=AppFramework.renderPlugIns(),ProviderBuilder.Make().WithHole({
    $:0,
    $0:"plugins",
    $1:P$2
   })).WithHole({
    $:2,
    $0:"pluginname",
    $1:View$1.Map(function($1)
    {
     return $1.plgName.get_Id();
    },AppFramework.currentPlugInW())
   }).WithHole({
    $:0,
    $0:"vars",
    $1:V$1
   })).WithHole({
    $:0,
    $0:"views",
    $1:V
   })).WithHole({
    $:0,
    $0:"docs",
    $1:D
   })).WithHole({
    $:0,
    $0:"actions",
    $1:A
   })).WithHole({
    $:0,
    $0:"queries",
    $1:Q
   })),(p$28=Handler.CompleteHoles(b$16.k,b$16.h,[]),(i=new TemplateInstance.New(p$28[1],LayoutEngine_Templates.appfwkclient(p$28[0])),(b$16.i=i,i)))).get_Doc();
  });
  SC$1.plugin=new PlugInBuilder.New();
  SC$1.a11V=Var$2.Create$1(11);
  SC$1.mainX={
   $:0,
   $0:AppFramework.a11V().get_View()
  };
  SC$1.baseView=AppFramework.mainDocV().get_View();
  SC$1.op_LessMultiplyGreater=function(f$6)
  {
   return function(v)
   {
    return Val.apply(f$6,v);
   };
  };
  SC$1.textAtt=function($1)
  {
   return function()
   {
    return $1("textAtt not implemented");
   };
  }(Operators$3.FailWith);
  SC$1.getDocFromReferenceD=Depend.dependByName("getDocFromReference",Extract0.getDocFromReference,Global.id);
  SC$1.getTextActViewFromReferenceD=Depend.dependByName("getTextActViewFromReference",Extract0.getTextActViewFromReference,Global.id);
  SC$1.getDocFromTextTypesD=(b=Depend.depend(),b.Delay(function()
  {
   return b.Bind(Extract0.getDocFromReferenceD(),function(a$4)
   {
    var f$6;
    function m(a$5)
    {
     return a$5.$==1?a$4(a$5.$0):Doc.TextNode(a$5.$0);
    }
    return b.Return((f$6=function(l)
    {
     return List.map(m,l);
    },function(x$1)
    {
     return Doc.Concat(f$6(x$1));
    }));
   });
  }));
  SC$1.extractDocD=(b$1=Depend.depend(),b$1.Delay(function()
  {
   return b$1.Bind(Extract0.getDocFromTextTypesD(),function(a$4)
   {
    return b$1.Return(function(x$1)
    {
     return a$4(Extract0.getTextData(x$1));
    });
   });
  }));
  SC$1.getTextValFromSeqD=(b$2=Depend.depend(),b$2.Delay(function()
  {
   return b$2.Bind(Extract0.getTextActViewFromReferenceD(),function(a$4)
   {
    var f$6,g$4,f$7;
    function f$8(a$5)
    {
     var r;
     return a$5.$==1?(r=a$5.$0,{
      $:0,
      $0:View$1.Map(function(a$6)
      {
       return a$6.$==1?(function($1)
       {
        return function($2)
        {
         return $1("@{"+Utils.toSafe($2)+"}");
        };
       }(Global.id))(r):a$6.$0;
      },a$4(r))
     }):{
      $:1,
      $0:a$5.$0
     };
    }
    return b$2.Return((f$6=function(l)
    {
     return Val.traverseListApp(f$8,l);
    },(g$4=(f$7={
     $:1,
     $0:function(s)
     {
      return Strings.concat("",s);
     }
    },function(v)
    {
     return Val.apply(f$7,v);
    }),function(x$1)
    {
     return g$4(f$6(x$1));
    })));
   });
  }));
  SC$1.getTextValD=Operators$2.op_GreaterMultiplyGreater(Extract0.getTextData,Extract0.getTextValFromSeqD());
  SC$1.extractAtsD=(b$3=Depend.depend(),b$3.Delay(function()
  {
   return b$3.Bind(Extract0.getTextValD(),function(a$4)
   {
    return b$3.Bind(Extract0.getTextActViewFromReferenceD(),function(a$5)
    {
     return b$3.Return(function(txt)
     {
      var a$6,m;
      function parseAttr(t)
      {
       var m$1,sty,m$2,atv,atn,m$3,$1;
       m$1=Strings.SplitChars(t,[":"],0);
       return!Unchecked.Equals(m$1,null)&&m$1.length===2?(sty=Arrays.get(m$1,1),{
        $:0,
        $0:Arrays.get(m$1,0),
        $1:sty
       }):(m$2=Arrays.map(Strings.Trim,Strings.SplitChars(t,["="],0)),!Unchecked.Equals(m$2,null)&&m$2.length===2?(atv=Arrays.get(m$2,1),(atn=Arrays.get(m$2,0),(m$3=Extract0.getTextData(atv),m$3.$==1&&(m$3.$0.$==1&&(m$3.$1.$==0&&($1=m$3.$0.$0,true)))?{
        $:2,
        $0:atn,
        $1:$1
       }:{
        $:1,
        $0:atn,
        $1:atv
       }))):!Unchecked.Equals(m$2,null)&&m$2.length===1?{
        $:1,
        $0:Arrays.get(m$2,0),
        $1:""
       }:AAttr.AEmpty);
      }
      function splitAttrs(txt$1)
      {
       return Seq.filter(function(y)
       {
        return""!==y;
       },Seq.map(Strings.Trim,Strings.SplitChars(txt$1,[";"],0)));
      }
      function addedListeners(el)
      {
       var v;
       v=el.addedListeners;
       return!v?[]:v;
      }
      function setCustomAttr(atn,el,a$7)
      {
       var act;
       function listener(ev)
       {
        AppFramework.callFunction(el,ev,act.actFunction);
       }
       return a$7.$==1?(act=a$7.$0,(el.addEventListener(atn,listener,false),void(el.addedListeners=addedListeners(el).concat([[atn,listener]])))):el.setAttribute(atn,Strings.Trim(a$7.$0));
      }
      function viewAttr(atn)
      {
       function s$1($1,$2)
       {
        return setCustomAttr(atn,$1,$2);
       }
       return function(v)
       {
        return AttrModule.DynamicCustom(function($1)
        {
         return function($2)
         {
          return s$1($1,$2);
         };
        },v);
       };
      }
      function constAttr(a$7)
      {
       var x$1;
       return a$7.$==1?AppFramework.valToAttr(a$7.$0,a$4(a$7.$1)):a$7.$==2?(x$1=a$5(a$7.$1),(viewAttr(a$7.$0))(x$1)):a$7.$==3?Attrs.EmptyAttr():AppFramework.valToStyle(a$7.$0,a$4(a$7.$1));
      }
      function s(el,sq)
      {
       var f$6,styles,atts,attsNow,names,i,e,nm,i$1,e$1,f$7,a$7,i$2,$1,f$8,i$3,e$2;
       function m$1(t)
       {
        return t[0];
       }
       function g$5(a$8)
       {
        return new FSharpSet.New(a$8);
       }
       styles=Seq.choose(function(a$8)
       {
        return a$8.$==0?{
         $:1,
         $0:a$8.$0+":"+a$8.$1
        }:null;
       },sq);
       atts=Arrays.ofSeq(Seq.delay(function()
       {
        return Seq.append(!Seq.isEmpty(styles)?[["style",Strings.concat(";",styles)]]:[],Seq.delay(function()
        {
         return Seq.choose(function(a$8)
         {
          return a$8.$==1?{
           $:1,
           $0:[a$8.$0,a$8.$1]
          }:a$8.$==2?{
           $:1,
           $0:[a$8.$0,a$8.$1]
          }:a$8.$==3?null:null;
         },sq);
        }));
       }));
       attsNow=List.ofSeq(Seq.delay(function()
       {
        return Seq.map(function(i$4)
        {
         return[el.attributes.item(i$4).name,el.attributes.item(i$4).value];
        },List.ofSeq(Operators$3.range(0,el.attributes.length-1)));
       }));
       names=(f$6=function(s$1)
       {
        return Seq.map(m$1,s$1);
       },function(x$1)
       {
        return g$5(f$6(x$1));
       });
       i=FSharpSet.op_Subtraction(names(attsNow),names(atts));
       e=Enumerator.Get(i);
       try
       {
        while(e.MoveNext())
         {
          nm=e.Current();
          el.attributes.removeNamedItem(nm);
         }
       }
       finally
       {
        if(typeof e=="object"&&"Dispose"in e)
         e.Dispose();
       }
       i$1=FSharpSet.op_Subtraction(new FSharpSet.New(atts),new FSharpSet.New(attsNow));
       e$1=Enumerator.Get(i$1);
       try
       {
        while(e$1.MoveNext())
         {
          f$7=e$1.Current();
          el.setAttribute(f$7[0],f$7[1]);
         }
       }
       finally
       {
        if(typeof e$1=="object"&&"Dispose"in e$1)
         e$1.Dispose();
       }
       a$7=addedListeners(el);
       for(i$2=0,$1=a$7.length-1;i$2<=$1;i$2++){
        f$8=Arrays.get(a$7,i$2);
        el.removeEventListener(f$8[0],f$8[1]);
       }
       i$3=Seq.choose(function(a$8)
       {
        return a$8.$==2?{
         $:1,
         $0:[a$8.$0,a$8.$1]
        }:null;
       },sq);
       e$2=Enumerator.Get(i$3);
       try
       {
        while(e$2.MoveNext())
         (function()
         {
          var f$9,$2;
          f$9=e$2.Current();
          return View$1.Get(($2=f$9[0],function($3)
          {
           return setCustomAttr($2,el,$3);
          }),a$5(f$9[1]));
         }());
        return;
       }
       finally
       {
        if(typeof e$2=="object"&&"Dispose"in e$2)
         e$2.Dispose();
       }
      }
      function g$4(s$1)
      {
       return Seq.map(parseAttr,s$1);
      }
      a$6=Arrays.ofSeq(splitAttrs(txt));
      return!Unchecked.Equals(a$6,null)&&a$6.length===1?[(m=a$4(Arrays.get(a$6,0)),m.$==0?AttrModule.DynamicCustom(function($1)
      {
       return function($2)
       {
        return s($1,$2);
       };
      },View$1.Map(function(x$1)
      {
       return g$4(splitAttrs(x$1));
      },m.$0)):constAttr(parseAttr(m.$0)))]:Seq.map(function(x$1)
      {
       return constAttr(parseAttr(x$1));
      },a$6);
     });
    });
   });
  }));
  SC$1.extractTextD=(b$4=Depend.depend(),b$4.Delay(function()
  {
   return b$4.Bind(Extract0.getTextValD(),function(a$4)
   {
    return b$4.Return(function(x$1)
    {
     return Val.toView(a$4(x$1));
    });
   });
  }));
  SC$1.currentPlugInNameDef=new PlugInName({
   $:0,
   $0:"NewLYx"
  });
  SC$1.currentPlugInNameD=Depend.dependByName("currentPlugInName",AppFramework.currentPlugInNameDef(),Global.id);
  SC$1.getDocD=(b$5=Depend.depend(),b$5.Delay(function()
  {
   return b$5.Bind(AppFramework.currentPlugInNameD(),function(a$4)
   {
    return b$5.Return(function(r)
    {
     var p$28,pName,oName;
     p$28=(AppFramework.splitName(a$4))(r);
     pName=p$28[0];
     oName=p$28[1];
     return Doc.BindView(function(docO)
     {
      var o$1;
      function d()
      {
       return(function($1)
       {
        return function($2)
        {
         return $1("Reference not found @{"+Utils.toSafe($2)+"}");
        };
       }(Global.id))(r);
      }
      o$1=docO==null?null:{
       $:1,
       $0:AppFramework.getLazyDoc(docO.$0)
      };
      return o$1==null?Doc.TextView(View$1.Map(function(o$2)
      {
       return o$2==null?d():o$2.$0;
      },AppFramework.tryGetWoWW(pName,oName))):o$1.$0;
     },AppFramework.tryGetDocW(pName,oName));
    });
   });
  }));
  SC$1.getTextActViewD=(b$6=Depend.depend(),b$6.Delay(function()
  {
   return b$6.Bind(AppFramework.currentPlugInNameD(),function(a$4)
   {
    return b$6.Return(function(r)
    {
     var p$28,pName,oName;
     p$28=(AppFramework.splitName(a$4))(r);
     pName=p$28[0];
     oName=p$28[1];
     return View$1.Bind(function(a$5)
     {
      function d()
      {
       return(function($1)
       {
        return function($2)
        {
         return $1("Text Reference not found @{"+Utils.toSafe($2)+"}");
        };
       }(Global.id))(r);
      }
      return a$5==null?View$1.Map(function(a$6)
      {
       return{
        $:0,
        $0:a$6
       };
      },View$1.Map(function(o$1)
      {
       return o$1==null?d():o$1.$0;
      },AppFramework.tryGetWoWW(pName,oName))):View$1.Const({
       $:1,
       $0:a$5.$0
      });
     },AppFramework.tryGetActW(pName,oName));
    });
   });
  }));
  SC$1.extractTextD$1=Extract0.extractTextD();
  SC$1.extractDocD$1=Extract0.extractDocD();
  SC$1.extractAtsD$1=Extract0.extractAtsD();
  SC$1.extractAttD=(b$7=Operators$2.depend(),b$7.Delay(function()
  {
   return b$7.Bind(AppFramework.extractAtsD(),function(a$4)
   {
    return b$7.Return(function(p$28)
    {
     return AttrProxy.Concat(a$4(p$28));
    });
   });
  }));
  SC$1.defPlugInName=new PlugInName({
   $:0,
   $0:"AppFramework"
  });
  SC$1.inputLabel=AppFramework.depWithExtracts(function($1,$2,$3)
  {
   return f$3.apply(null,[$1,$2,$3]);
  });
  SC$1.input=AppFramework.depWithExtracts(function($1)
  {
   return function($2)
   {
    return f$4($1,$2);
   };
  });
  SC$1.textArea=AppFramework.depWithExtracts(function($1)
  {
   return function($2)
   {
    return f$5($1,$2);
   };
  });
  SC$1.htmlDoc=AppFramework.depWithExtracts(function($1,$2,extractText)
  {
   return function(html)
   {
    return Doc.BindView(Doc.Verbatim,extractText(html));
   };
  });
  SC$1.trigAct=AppFramework.depWithExtracts(function($1,$2,extractText)
  {
   return function(trigger)
   {
    return function(actN)
    {
     var v,prior;
     return Doc.TextView(View$1.Map(function()
     {
      var o$1,t;
      o$1=(t=AppFramework.getParmRef(actN),AppFramework.tryGetAct(t[0],t[1]));
      o$1==null?void 0:AppFramework.callFunction(null,null,o$1.$0.actFunction);
      return"";
     },(v=extractText(trigger),(prior=[Var$2.Create$1(null)],(View$1.Sink(function(v$1)
     {
      if(!Unchecked.Equals(prior[0].Get(),v$1))
       prior[0].Set(v$1);
     },v),prior[0].get_View())))));
    };
   };
  });
  SC$1.select=AppFramework.depWithExtracts(function(extractAts,$1,extractText)
  {
   return Runtime.Curried3(function(attrs,none,vals)
   {
    function f$6(_var)
    {
     var valsW,varO;
     valsW=View$1.Map(function($2)
     {
      return List.ofSeq(Strings.SplitChars($2,[";"],0));
     },extractText(vals));
     varO=new FromView.New(View$1.Map2(function($2,$3)
     {
      return Seq.contains(Strings.Trim($2),$3)?{
       $:1,
       $0:Strings.Trim($2)
      }:null;
     },_var.get_View(),valsW),function(a$4)
     {
      var s;
      if(a$4!=null&&a$4.$==1)
       {
        s=a$4.$0;
        View$1.Get(function(vs)
        {
         if(Seq.contains(s,vs))
          _var.Set(s);
        },valsW);
       }
      else
       _var.Set("");
     });
     return Doc.SelectDynOptional(extractAts(attrs),none,Global.id,valsW,varO);
    }
    return function(v)
    {
     return AppFramework.docWithVar(f$6,v);
    };
   });
  });
  a=(b$8=AppFramework.plugin(),b$8.AddAct(b$8.AddDoc(b$8.AddVar(b$8.Name(b$8.Yield(),"AppFramework"),"mainDocV",AppFramework.mainDocV()),"AppFwkClient",AppFramework.AppFwkClient()),"Hello",function()
  {
   self.alert("Hello!");
  }));
  AppFramework.plugIns().Append(a);
  a$1=(b$9=AppFramework.plugin(),b$9.AddQry(b$9.AddAct(b$9.AddAct2(b$9.AddDoc3(b$9.AddDoc3(b$9.AddDoc4(b$9.AddDoc2(b$9.AddDoc2(b$9.AddDoc2(b$9.AddDoc1(b$9.Name(b$9.Yield(),"AF"),"HtmlDoc",AppFramework.htmlDoc(),"Html"),"TrigAction",AppFramework.trigAct(),"Trigger","Action"),"Input",AppFramework.input(),"Attrs","Var"),"TextArea",AppFramework.textArea(),"Attrs","Var"),"Select",AppFramework.select(),"Attrs","None","Vals","Var"),"InputFile",Runtime.Curried3(AppFramework.inputFile),"Attrs","Label","Action"),"InputLabel",AppFramework.inputLabel(),"Attrs","Label","Var"),"SetVar",function(v)
  {
   return function(v$1)
   {
    return AppFramework.setVar(v,v$1);
   };
  },"Var","Value"),"Hello",function()
  {
   self.alert("Hello!");
  }),"getDocNames",function()
  {
   return Arrays.ofSeq(Seq.collect(function(plg)
   {
    return Seq.map(function(doc)
    {
     return plg.plgName.get_Id()+"."+doc.docName.get_Id();
    },plg.plgDocs);
   },(AppFramework.plugIns())["var"].Get()));
  }));
  AppFramework.plugIns().Append(a$1);
  SC$1.getMainDoc=Lazy.Create(function()
  {
   WcSplitter.init(Runtime.Curried(AppFramework.horizontal,5),Runtime.Curried(AppFramework.vertical,5));
   WcTabStrip.init().f();
   return AppFramework.mainDoc();
  });
  SC$1.htmlD=Depend.dependByName("AppFrameworkTemplate.html",AppFrameworkTemplate.html(),Global.id);
  SC$1.startWithHtmlD=(b$10=Depend.depend(),b$10.Delay(function()
  {
   return b$10.Bind(StartAppFramework.htmlD(),function(a$4)
   {
    return b$10.Return(function()
    {
     var d,x$1,a$5;
     d=self.document.createElement("div");
     self.document.body.appendChild(d);
     d.outerHTML=a$4;
     x$1=AppFramework.getMainDoc().f();
     a$5=self.document.body;
     Templates.LoadLocalTemplates("");
     Doc.RunAppend(a$5,x$1);
    });
   });
  }));
  SC$1.splitName=AppFramework.splitName;
  SC$1.currentViewTriggger=AppFramework.mainDocV().get_View();
  SC$1.createSplitterM=(p=(cache=new Dictionary.New$5(),[[checkO,function($1)
  {
   return function($2)
   {
    return getOrAdd$22($1,$2);
   };
  }],function()
  {
   cache.Clear();
  }]),(getOrAdd=p[0][1],[function(p$28)
  {
   return(getOrAdd(p$28))(function($1)
   {
    return LayoutEngineModule.createSplitter($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p[1]]))[0];
  SC$1.createButtonM=(p$1=(cache$1=new Dictionary.New$5(),[[checkO$1,function($1)
  {
   return function($2)
   {
    return getOrAdd$23($1,$2);
   };
  }],function()
  {
   cache$1.Clear();
  }]),(getOrAdd$1=p$1[0][1],[function(p$28)
  {
   return(getOrAdd$1(p$28))(function($1)
   {
    return LayoutEngineModule.createButton($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$1[1]]))[0];
  SC$1.createInputM=(p$2=(cache$2=new Dictionary.New$5(),[[checkO$2,function($1)
  {
   return function($2)
   {
    return getOrAdd$24($1,$2);
   };
  }],function()
  {
   cache$2.Clear();
  }]),(getOrAdd$2=p$2[0][1],[function(p$28)
  {
   return(getOrAdd$2(p$28))(function($1)
   {
    return LayoutEngineModule.createInput($1[0],$1[1],$1[2],$1[3]);
   });
  },p$2[1]]))[0];
  SC$1.createTextAreaM=(p$3=(cache$3=new Dictionary.New$5(),[[checkO$3,function($1)
  {
   return function($2)
   {
    return getOrAdd$25($1,$2);
   };
  }],function()
  {
   cache$3.Clear();
  }]),(getOrAdd$3=p$3[0][1],[function(p$28)
  {
   return(getOrAdd$3(p$28))(function($1)
   {
    return LayoutEngineModule.createTextArea($1[0],$1[1],$1[2],$1[3]);
   });
  },p$3[1]]))[0];
  SC$1.createElementM=(p$4=(cache$4=new Dictionary.New$5(),[[checkO$4,function($1)
  {
   return function($2)
   {
    return getOrAdd$26($1,$2);
   };
  }],function()
  {
   cache$4.Clear();
  }]),(getOrAdd$4=p$4[0][1],[function(p$28)
  {
   return(getOrAdd$4(p$28))(function($1)
   {
    return LayoutEngineModule.createElement($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$4[1]]))[0];
  SC$1.createDocM=(p$5=(cache$5=new Dictionary.New$5(),[[checkO$5,function($1)
  {
   return function($2)
   {
    return getOrAdd$27($1,$2);
   };
  }],function()
  {
   cache$5.Clear();
  }]),(getOrAdd$5=p$5[0][1],[function(p$28)
  {
   return(getOrAdd$5(p$28))(function($1)
   {
    return LayoutEngineModule.createDoc($1[0],$1[1],$1[2],$1[3]);
   });
  },p$5[1]]))[0];
  SC$1.createTemplateM=(p$6=(cache$6=new Dictionary.New$5(),[[checkO$6,function($1)
  {
   return function($2)
   {
    return getOrAdd$28($1,$2);
   };
  }],function()
  {
   cache$6.Clear();
  }]),(getOrAdd$6=p$6[0][1],[function(p$28)
  {
   return(getOrAdd$6(p$28))(function($1)
   {
    return LayoutEngineModule.createTemplate($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$6[1]]))[0];
  SC$1.createConcatM=(p$7=(cache$7=new Dictionary.New$5(),[[checkO$7,function($1)
  {
   return function($2)
   {
    return getOrAdd$29($1,$2);
   };
  }],function()
  {
   cache$7.Clear();
  }]),(getOrAdd$7=p$7[0][1],[function(p$28)
  {
   return(getOrAdd$7(p$28))(function($1)
   {
    return LayoutEngineModule.createConcat($1[0],$1[1],$1[2]);
   });
  },p$7[1]]))[0];
  SC$1.createVarM=(p$8=(cache$8=new Dictionary.New$5(),[[checkO$8,function($1)
  {
   return function($2)
   {
    return getOrAdd$30($1,$2);
   };
  }],function()
  {
   cache$8.Clear();
  }]),(getOrAdd$8=p$8[0][1],[function(p$28)
  {
   return(getOrAdd$8(p$28))(function($1)
   {
    return LayoutEngineModule.createVar($1[0],$1[1],$1[2]);
   });
  },p$8[1]]))[0];
  SC$1.createViewM=(p$9=(cache$9=new Dictionary.New$5(),[[checkO$9,function($1)
  {
   return function($2)
   {
    return getOrAdd$31($1,$2);
   };
  }],function()
  {
   cache$9.Clear();
  }]),(getOrAdd$9=p$9[0][1],[function(p$28)
  {
   return(getOrAdd$9(p$28))(function($1)
   {
    return LayoutEngineModule.createView($1[0],$1[1],$1[2]);
   });
  },p$9[1]]))[0];
  SC$1.createActionM=(p$10=(cache$10=new Dictionary.New$5(),[[checkO$10,function($1)
  {
   return function($2)
   {
    return getOrAdd$32($1,$2);
   };
  }],function()
  {
   cache$10.Clear();
  }]),(getOrAdd$10=p$10[0][1],[function(p$28)
  {
   return(getOrAdd$10(p$28))(function($1)
   {
    return LayoutEngineModule.createAction($1[0],$1[1],$1[2],$1[3]);
   });
  },p$10[1]]))[0];
  o=AppFramework.tryGetPlugIn(AppFramework.defPlugInName());
  o==null?void 0:o.$0.plgActions.Append(AppFramework.newActF(new PlgElemName({
   $:0,
   $0:"AddLayout"
  }),{
   $:2,
   $0:function(n)
   {
    return function(l)
    {
     return LayoutEngineModule.addNewLayout(n,l);
    };
   },
   $1:"[Name]",
   $2:"[Layout]"
  }));
  SC$1.aV=Var$2.Create$1(4);
  SC$1.pa=NewLY.aV().get_View();
  SC$1.pb=6.2;
  SC$1.currentPlugInNameDef$1=new PlugInName({
   $:0,
   $0:"NewLYx"
  });
  SC$1.currentPlugInNameD$1=Depend.dependByName("currentPlugInName",NewLY.currentPlugInNameDef(),Global.id);
  SC$1.name=Var$2.Create$1("World");
  SC$1.enterName=(pf=AppFramework.op_Dereference(NewLY.checkName),(p$11={
   $:0,
   $0:NewLY.name().get_View()
  },P.New(Operators$2.op_BarGreaterGreater(pf.r,function(f$6)
  {
   return Fun.New(f$6,p$11);
  }))));
  SC$1.now=(pf$1=AppFramework.op_Dereference(function()
  {
   var n;
   n=new Global.Date(Date.now());
   return n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)+" "+("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)+":"+("00"+n.getMilliseconds()).slice(-3);
  }),(p$12={
   $:0,
   $0:NewLY.name().get_View()
  },P.New(Operators$2.op_BarGreaterGreater(pf$1.r,function(f$6)
  {
   return Fun.New(f$6,p$12);
  }))));
  SC$1.sayHello=(sayHello_0=(c=(vf=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(extractDoc)
  {
   var p$28;
   p$28={
    $:1,
    $0:[extractDoc("Hello @{name}!")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf.r,function(f$6)
   {
    return Fun.New(f$6,p$28);
   }));
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
     $:0,
     $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(aF.f.$0,aF.p.$0)
    }:aF.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
    }:{
     $:1,
     $0:aF.f.$0(aF.p.$0)
    }),c$13.p));
   },c);
  },NewLY.enterName().r)),(a$2=(vf$1=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(extractDoc)
  {
   var p$28;
   p$28={
    $:1,
    $0:[extractDoc("How are you?")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$1.r,function(f$6)
   {
    return Fun.New(f$6,p$28);
   }));
  },AppFramework.extractDocD())),(c$1=(vf$2=AppFramework.op_Dereference(Doc.Concat),AppFramework.bindWrap(function(aF)
  {
   var p$28;
   p$28={
    $:1,
    $0:[AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
     }:{
      $:0,
      $0:View$1.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    })]
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$2.r,function(f$6)
   {
    return Fun.New(f$6,p$28);
   }));
  },sayHello_0.r)),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
     }:{
      $:0,
      $0:View$1.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    }),c$13.p));
   },c$1);
  },a$2.r))));
  SC$1.aString=Var$2.Lens(NewLY.aV(),Global.String,function(a$4,v)
  {
   return Operators$3.toInt(Global.Number(v));
  });
  SC$1.main0=(pc=(pf$2=AppFramework.op_Dereference(function(a$4)
  {
   return function(b$16)
   {
    return NewLY.concat(a$4,b$16);
   };
  }),(p$13={
   $:0,
   $0:NewLY.aV().get_View()
  },P.New(Operators$2.op_BarGreaterGreater(pf$2.r,function(f$6)
  {
   return Fun.New(f$6,p$13);
  })))),(p$14={
   $:1,
   $0:3.2
  },P.New(Operators$2.op_BarGreaterGreater(pc.r,function(c$13)
  {
   return Fun.New(c$13.f.$==0?c$13.p.$==1?{
    $:0,
    $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(c$13.f.$0,c$13.p.$0)
   }:c$13.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)
   }:{
    $:1,
    $0:c$13.f.$0(c$13.p.$0)
   },p$14);
  }))));
  SC$1.main1=(pc$1=(vf$3=AppFramework.op_Dereference((Runtime.Curried3(function($1,$2,$3)
  {
   return $1("result = "+Utils.toSafe($2)+" "+Utils.toSafe($3));
  }))(Global.id)),AppFramework.bindWrap(function(aF)
  {
   var p$28;
   p$28=aF.f.$==0?aF.p.$==1?{
    $:0,
    $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(aF.f.$0,aF.p.$0)
   }:aF.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
   }:{
    $:1,
    $0:aF.f.$0(aF.p.$0)
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$3.r,function(f$6)
   {
    return Fun.New(f$6,p$28);
   }));
  },NewLY.main0().r)),(p$15={
   $:1,
   $0:"main0"
  },P.New(Operators$2.op_BarGreaterGreater(pc$1.r,function(c$13)
  {
   return Fun.New(c$13.f.$==0?c$13.p.$==1?{
    $:0,
    $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(c$13.f.$0,c$13.p.$0)
   }:c$13.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)
   }:{
    $:1,
    $0:c$13.f.$0(c$13.p.$0)
   },p$15);
  }))));
  SC$1.main=(c$2=(c$3=(c$4=(c$5=(c$6=(c$7=(c$8=(c$9=(c$10=(vf$4=AppFramework.op_Dereference((Runtime.Curried3(Doc.Element))("h3")),AppFramework.bindWrap(function(extractAts)
  {
   var p$28;
   p$28={
    $:1,
    $0:extractAts("color:@{name}; background:red; click=@{AppFramework.Hello}")
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$4.r,function(f$6)
   {
    return Fun.New(f$6,p$28);
   }));
  },AppFramework.extractAtsD())),AppFramework.bindWrap(function(extractDoc)
  {
   var p$28;
   p$28={
    $:1,
    $0:[extractDoc("MAIN:")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(c$10.r,function(c$13)
   {
    return Fun.New(c$13.f.$==0?c$13.p.$==1?{
     $:0,
     $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(c$13.f.$0,c$13.p.$0)
    }:c$13.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)
    }:{
     $:1,
     $0:c$13.f.$0(c$13.p.$0)
    },p$28);
   }));
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
     $:0,
     $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(aF.f.$0,aF.p.$0)
    }:aF.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
    }:{
     $:1,
     $0:aF.f.$0(aF.p.$0)
    }),c$13.p));
   },c$9);
  },NewLY.main1().r)),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(Val.textDoc(aF.f.$==0?aF.p.$==1?{
     $:0,
     $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(aF.f.$0,aF.p.$0)
    }:aF.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
    }:{
     $:1,
     $0:aF.f.$0(aF.p.$0)
    }),c$13.p));
   },c$8);
  },NewLY.main1().r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(extractDoc(":"),c$13.p));
   },c$7);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
     }:{
      $:0,
      $0:View$1.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    }),c$13.p));
   },c$6);
  },NewLY.sayHello().r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(extractDoc(":"),c$13.p));
   },c$5);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(extractDoc(" Más >> "),c$13.p));
   },c$4);
  },AppFramework.extractDocD())),AppFramework.bindWrap(function(aF)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
     }:{
      $:0,
      $0:View$1.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    }),c$13.p));
   },c$3);
  },NewLY.sayHello().r)),AppFramework.bindWrap(function(extractDoc)
  {
   return AppFramework.unwrapBindWrap(function(c$13)
   {
    return Fun.New(c$13.f,Val.addDoc(extractDoc(" <<"),c$13.p));
   },c$2);
  },AppFramework.extractDocD()));
  SC$1.main2=AppFramework.makeAViewDoc(function()
  {
   return Doc.Element("h4",[AttrModule.Dynamic("style",View$1.Map(function($1)
   {
    return"color:"+$1;
   },NewLY.name().get_View()))],[Doc.TextNode("MAIN2:"),Doc.TextView(NewLY.name().get_View())]);
  });
  SC$1.appFwk=(c$11=(vf$5=AppFramework.op_Dereference((Runtime.Curried3(Doc.Element))("div")),AppFramework.bindWrap(function(extractAts)
  {
   var p$28;
   p$28={
    $:1,
    $0:extractAts("color:@{name}")
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$5.r,function(f$6)
   {
    return Fun.New(f$6,p$28);
   }));
  },AppFramework.extractAtsD())),AppFramework.bindWrap(function(extractDoc)
  {
   var p$28;
   p$28={
    $:1,
    $0:[extractDoc("@{AppFramework.AppFwkClient}")]
   };
   return P.New(Operators$2.op_BarGreaterGreater(c$11.r,function(c$13)
   {
    return Fun.New(c$13.f.$==0?c$13.p.$==1?{
     $:0,
     $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(c$13.f.$0,c$13.p.$0)
    }:c$13.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)
    }:{
     $:1,
     $0:c$13.f.$0(c$13.p.$0)
    },p$28);
   }));
  },AppFramework.extractDocD()));
  SC$1.split=(c$12=(vf$6=AppFramework.op_Dereference(Runtime.Curried(LayoutEngineModule.variableSplitter,2,[false,0,50,100])),AppFramework.bindWrap(function(aF)
  {
   var p$28;
   p$28={
    $:1,
    $0:AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
     }:{
      $:0,
      $0:View$1.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    })
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$6.r,function(f$6)
   {
    return Fun.New(f$6,p$28);
   }));
  },NewLY.appFwk().r)),AppFramework.bindWrap(function(aF)
  {
   var p$28;
   p$28={
    $:1,
    $0:AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
     }:{
      $:0,
      $0:View$1.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    })
   };
   return P.New(Operators$2.op_BarGreaterGreater(c$12.r,function(c$13)
   {
    return Fun.New(c$13.f.$==0?c$13.p.$==1?{
     $:0,
     $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))
    }:{
     $:0,
     $0:View$1.Apply(c$13.f.$0,c$13.p.$0)
    }:c$13.p.$==0?{
     $:0,
     $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)
    }:{
     $:1,
     $0:c$13.f.$0(c$13.p.$0)
    },p$28);
   }));
  },NewLY.main().r));
  SC$1.split2=(pc$2=(vf$7=AppFramework.op_Dereference(Runtime.Curried(LayoutEngineModule.variableSplitter,2,[false,0,50,100])),AppFramework.bindWrap(function(aF)
  {
   var p$28;
   p$28={
    $:1,
    $0:AppFramework.makeAViewDoc(function()
    {
     var m;
     m=aF.f.$==0?aF.p.$==1?{
      $:0,
      $0:View$1.Apply(aF.f.$0,View$1.Const(aF.p.$0))
     }:{
      $:0,
      $0:View$1.Apply(aF.f.$0,aF.p.$0)
     }:aF.p.$==0?{
      $:0,
      $0:View$1.Apply(View$1.Const(aF.f.$0),aF.p.$0)
     }:{
      $:1,
      $0:aF.f.$0(aF.p.$0)
     };
     return m.$==0?Doc.BindView(Global.id,m.$0):m.$0;
    })
   };
   return P.New(Operators$2.op_BarGreaterGreater(vf$7.r,function(f$6)
   {
    return Fun.New(f$6,p$28);
   }));
  },NewLY.appFwk().r)),(p$16={
   $:1,
   $0:NewLY.main2()
  },P.New(Operators$2.op_BarGreaterGreater(pc$2.r,function(c$13)
  {
   return Fun.New(c$13.f.$==0?c$13.p.$==1?{
    $:0,
    $0:View$1.Apply(c$13.f.$0,View$1.Const(c$13.p.$0))
   }:{
    $:0,
    $0:View$1.Apply(c$13.f.$0,c$13.p.$0)
   }:c$13.p.$==0?{
    $:0,
    $0:View$1.Apply(View$1.Const(c$13.f.$0),c$13.p.$0)
   }:{
    $:1,
    $0:c$13.f.$0(c$13.p.$0)
   },p$16);
  }))));
  SC$1.nodeRefToDocD=(b$11=Depend.depend(),b$11.Delay(function()
  {
   return b$11.Bind(Extract0.getDocFromTextTypesD(),function(a$4)
   {
    function f$6(a$5)
    {
     var $1;
     return(a$5.$==1?($1=a$5.$0.$0,false):a$5.$==2?($1=a$5.$0.$0,false):a$5.$==3?($1=a$5.$0.$0,false):true)?List.map(NewLY.textValToTextType,a$5.$0):List.ofArray([NewLY.itemRefToTextType($1)]);
    }
    return b$11.Return(function(x$1)
    {
     return a$4(f$6(x$1));
    });
   });
  }));
  SC$1.varRefToVarD=(b$12=Depend.depend(),b$12.Delay(function()
  {
   return b$12.Bind(NewLY.currentPlugInNameD(),function(a$4)
   {
    return b$12.Return(function(a$5)
    {
     var r,o$1,o$2,t;
     r=NewLY.itemRefToString(a$5.$0);
     o$1=(o$2=(t=(AppFramework.splitName(a$4))(r),AppFramework.tryGetVar(t[0],t[1])),o$2==null?null:{
      $:1,
      $0:o$2.$0.varVar
     });
     return o$1==null?new FromView.New(View$1.Const((function($1)
     {
      return function($2)
      {
       return $1("Could not find var "+Utils.toSafe($2));
      };
     }(Global.id))(r)),Global.ignore):o$1.$0;
    });
   });
  }));
  SC$1.getParamD=(b$13=Depend.depend(),b$13.Delay(function()
  {
   return b$13.Bind(NewLY.currentPlugInNameD(),function(a$4)
   {
    return b$13.Bind(Extract0.getTextValFromSeqD(),function(a$5)
    {
     return b$13.Return(function(p$28)
     {
      var refToSplit,g$4,r,f$6,m,g$5,t,r$1,f$7,m$1,g$6,g$7,t$1,r$2,f$8,m$2,g$8,g$9,t$2,r$3,f$9,m$3,g$10,t$3;
      function f$10(d$4)
      {
       return d$4.docDoc;
      }
      function d()
      {
       return(function($1)
       {
        return function($2)
        {
         return $1("missing ref Doc "+LayoutEngine_GeneratedPrintf.p($2));
        };
       }(Global.id))(r);
      }
      function f$11(v)
      {
       return v.varVar.get_View();
      }
      function d$1()
      {
       return View$1.Const((function($1)
       {
        return function($2)
        {
         return $1("missing ref Var "+LayoutEngine_GeneratedPrintf.p($2));
        };
       }(Global.id))(r$1));
      }
      function f$12(v)
      {
       return v.viwView;
      }
      function d$2()
      {
       return View$1.Const((function($1)
       {
        return function($2)
        {
         return $1("missing ref View "+LayoutEngine_GeneratedPrintf.p($2));
        };
       }(Global.id))(r$2));
      }
      function f$13(v)
      {
       return v.actFunction;
      }
      function d$3()
      {
       return(function($1)
       {
        return function($2)
        {
         return $1("missing ref Action "+LayoutEngine_GeneratedPrintf.p($2));
        };
       }(Global.id))(r$3);
      }
      refToSplit=(g$4=AppFramework.splitName(a$4),function(x$1)
      {
       return g$4(NewLY.itemRefToString(x$1));
      });
      return p$28.$==1?(r=p$28.$0.$0,View$1.Map((f$6=(m=function(x$1)
      {
       var v;
       v=f$10(x$1);
       return v;
      },function(o$1)
      {
       return o$1==null?null:{
        $:1,
        $0:m(o$1.$0)
       };
      }),(g$5=function(o$1)
      {
       return o$1==null?d():o$1.$0;
      },function(x$1)
      {
       return g$5(f$6(x$1));
      })),(t=refToSplit(r),AppFramework.tryGetDocW(t[0],t[1])))):p$28.$==2?(r$1=p$28.$0.$0,View$1.Bind((f$7=(m$1=(g$6=function(a$6)
      {
       return View$1.Map(Global.id,a$6);
      },function(x$1)
      {
       return g$6(f$11(x$1));
      }),function(o$1)
      {
       return o$1==null?null:{
        $:1,
        $0:m$1(o$1.$0)
       };
      }),(g$7=function(o$1)
      {
       return o$1==null?d$1():o$1.$0;
      },function(x$1)
      {
       return g$7(f$7(x$1));
      })),(t$1=refToSplit(r$1),AppFramework.tryGetVarW(t$1[0],t$1[1])))):p$28.$==3?(r$2=p$28.$0.$0,View$1.Bind((f$8=(m$2=(g$8=function(a$6)
      {
       return View$1.Map(Global.id,a$6);
      },function(x$1)
      {
       return g$8(f$12(x$1));
      }),function(o$1)
      {
       return o$1==null?null:{
        $:1,
        $0:m$2(o$1.$0)
       };
      }),(g$9=function(o$1)
      {
       return o$1==null?d$2():o$1.$0;
      },function(x$1)
      {
       return g$9(f$8(x$1));
      })),(t$2=refToSplit(r$2),AppFramework.tryGetViwW(t$2[0],t$2[1])))):p$28.$==4?(r$3=p$28.$0.$0,View$1.Map((f$9=(m$3=function(x$1)
      {
       var v;
       v=f$13(x$1);
       return v;
      },function(o$1)
      {
       return o$1==null?null:{
        $:1,
        $0:m$3(o$1.$0)
       };
      }),(g$10=function(o$1)
      {
       return o$1==null?d$3():o$1.$0;
      },function(x$1)
      {
       return g$10(f$9(x$1));
      })),(t$3=refToSplit(r$3),AppFramework.tryGetActW(t$3[0],t$3[1])))):View$1.Map(Global.id,Val.toView(a$5(List.map(NewLY.textValToTextType,p$28.$0))));
     });
    });
   });
  }));
  SC$1.getParam2D=(b$14=Depend.depend(),b$14.Delay(function()
  {
   return b$14.Bind(NewLY.currentPlugInNameD(),function(a$4)
   {
    return b$14.Bind(Extract0.getTextValFromSeqD(),function()
    {
     return b$14.Return(function(p$28)
     {
      var toAbs,f$6,g$4,$1;
      toAbs=(f$6=NewLY.itemRefToAbsolute(a$4.get_Id()),(g$4=function($2)
      {
       return function($3)
       {
        return $2("@{"+Utils.toSafe($3)+"}");
       };
      }(Global.id),function(x$1)
      {
       return g$4(f$6(x$1));
      }));
      return(p$28.$==3?($1=p$28.$0.$0,false):p$28.$==1?($1=p$28.$0.$0,false):p$28.$==2?($1=p$28.$0.$0,false):p$28.$==4?($1=p$28.$0.$0,false):true)?Strings.concat("",Seq.map(function(a$5)
      {
       var $2;
       return(a$5.$==1?($2=a$5.$0.$0,false):a$5.$==3?($2=a$5.$0.$0,false):a$5.$==4?($2=a$5.$0.$0,false):a$5.$==2?($2=a$5.$0.$0,false):true)?a$5.$0:toAbs($2);
      },p$28.$0)):toAbs($1);
     });
    });
   });
  }));
  SC$1.getParamTextD=(b$15=Depend.depend(),b$15.Delay(function()
  {
   return b$15.Bind(NewLY.currentPlugInNameD(),function(a$4)
   {
    return b$15.Bind(Extract0.getTextValFromSeqD(),function(a$5)
    {
     return b$15.Return(function(p$28)
     {
      return function(f$6)
      {
       var refToSplit,g$4,o$1,t,o$2,t$1,o$3,t$2,o$4,t$3;
       refToSplit=(g$4=AppFramework.splitName(a$4),function(x$1)
       {
        return g$4(NewLY.itemRefToString(x$1));
       });
       return p$28.$==1?(o$1=(t=refToSplit(p$28.$0.$0),AppFramework.tryGetDoc(t[0],t[1])),o$1==null?null:f$6(o$1.$0.docDoc)):p$28.$==2?(o$2=(t$1=refToSplit(p$28.$0.$0),AppFramework.tryGetVar(t$1[0],t$1[1])),o$2==null?null:View$1.Get(function(x$1)
       {
        return f$6(Global.id(x$1));
       },o$2.$0.varVar.get_View())):p$28.$==3?(o$3=(t$2=refToSplit(p$28.$0.$0),AppFramework.tryGetViw(t$2[0],t$2[1])),o$3==null?null:View$1.Get(function(x$1)
       {
        return f$6(Global.id(x$1));
       },o$3.$0.viwView)):p$28.$==4?(o$4=(t$3=refToSplit(p$28.$0.$0),AppFramework.tryGetAct(t$3[0],t$3[1])),o$4==null?null:f$6(o$4.$0.actFunction)):View$1.Get(function(x$1)
       {
        return f$6(Global.id(x$1));
       },Val.toView(a$5(List.map(NewLY.textValToTextType,p$28.$0))));
      };
     });
    });
   });
  }));
  SC$1.initVal="-<InitValue>-";
  SC$1.defVarM0=(p$17=(cache$11=new Dictionary.New$5(),[[checkO$11,function($1)
  {
   return function($2)
   {
    return getOrAdd$33($1,$2);
   };
  }],function()
  {
   cache$11.Clear();
  }]),(getOrAdd$11=p$17[0][1],[function(p$28)
  {
   return(getOrAdd$11(p$28))(function($1)
   {
    return NewLY.defVar($1[0],$1[1],$1[2]);
   });
  },p$17[1]]))[0];
  SC$1.defDocFM=(p$18=(cache$12=new Dictionary.New$5(),[[checkO$12,function($1)
  {
   return function($2)
   {
    return getOrAdd$34($1,$2);
   };
  }],function()
  {
   cache$12.Clear();
  }]),(getOrAdd$12=p$18[0][1],[function(p$28)
  {
   return(getOrAdd$12(p$28))(function($1)
   {
    return NewLY.defDocF($1[0],$1[1],$1[2],$1[3]);
   });
  },p$18[1]]))[0];
  SC$1.defActionM=(p$19=(cache$13=new Dictionary.New$5(),[[checkO$13,function($1)
  {
   return function($2)
   {
    return getOrAdd$35($1,$2);
   };
  }],function()
  {
   cache$13.Clear();
  }]),(getOrAdd$13=p$19[0][1],[function(p$28)
  {
   return(getOrAdd$13(p$28))(function($1)
   {
    return NewLY.defAction($1[0],$1[1],$1[2],$1[3]);
   });
  },p$19[1]]))[0];
  SC$1.defButtonM=(p$20=(cache$14=new Dictionary.New$5(),[[checkO$14,function($1)
  {
   return function($2)
   {
    return getOrAdd$36($1,$2);
   };
  }],function()
  {
   cache$14.Clear();
  }]),(getOrAdd$14=p$20[0][1],[function(p$28)
  {
   return(getOrAdd$14(p$28))(function($1)
   {
    return NewLY.defButton($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$20[1]]))[0];
  SC$1.defInputM=(p$21=(cache$15=new Dictionary.New$5(),[[checkO$15,function($1)
  {
   return function($2)
   {
    return getOrAdd$37($1,$2);
   };
  }],function()
  {
   cache$15.Clear();
  }]),(getOrAdd$15=p$21[0][1],[function(p$28)
  {
   return(getOrAdd$15(p$28))(function($1)
   {
    return NewLY.defInput($1[0],$1[1],$1[2],$1[3]);
   });
  },p$21[1]]))[0];
  SC$1.defTextAreaM=(p$22=(cache$16=new Dictionary.New$5(),[[checkO$16,function($1)
  {
   return function($2)
   {
    return getOrAdd$38($1,$2);
   };
  }],function()
  {
   cache$16.Clear();
  }]),(getOrAdd$16=p$22[0][1],[function(p$28)
  {
   return(getOrAdd$16(p$28))(function($1)
   {
    return NewLY.defTextArea($1[0],$1[1],$1[2],$1[3]);
   });
  },p$22[1]]))[0];
  SC$1.defElementM=(p$23=(cache$17=new Dictionary.New$5(),[[checkO$17,function($1)
  {
   return function($2)
   {
    return getOrAdd$39($1,$2);
   };
  }],function()
  {
   cache$17.Clear();
  }]),(getOrAdd$17=p$23[0][1],[function(p$28)
  {
   return(getOrAdd$17(p$28))(function($1)
   {
    return NewLY.defElement($1[0],$1[1],$1[2],$1[3],$1[4]);
   });
  },p$23[1]]))[0];
  SC$1.defConcatM=(p$24=(cache$18=new Dictionary.New$5(),[[checkO$18,function($1)
  {
   return function($2)
   {
    return getOrAdd$40($1,$2);
   };
  }],function()
  {
   cache$18.Clear();
  }]),(getOrAdd$18=p$24[0][1],[function(p$28)
  {
   return(getOrAdd$18(p$28))(function($1)
   {
    return NewLY.defConcat($1[0],$1[1],$1[2]);
   });
  },p$24[1]]))[0];
  SC$1.defViewM=(p$25=(cache$19=new Dictionary.New$5(),[[checkO$19,function($1)
  {
   return function($2)
   {
    return getOrAdd$41($1,$2);
   };
  }],function()
  {
   cache$19.Clear();
  }]),(getOrAdd$19=p$25[0][1],[function(p$28)
  {
   return(getOrAdd$19(p$28))(function($1)
   {
    return NewLY.defView($1[0],$1[1],$1[2]);
   });
  },p$25[1]]))[0];
  SC$1.defViewJSM=(p$26=(cache$20=new Dictionary.New$5(),[[checkO$20,function($1)
  {
   return function($2)
   {
    return getOrAdd$42($1,$2);
   };
  }],function()
  {
   cache$20.Clear();
  }]),(getOrAdd$20=p$26[0][1],[function(p$28)
  {
   return(getOrAdd$20(p$28))(function($1)
   {
    return NewLY.defViewJS($1[0],$1[1],$1[2]);
   });
  },p$26[1]]))[0];
  SC$1.defSplitterM=(p$27=(cache$21=new Dictionary.New$5(),[[checkO$21,function($1)
  {
   return function($2)
   {
    return getOrAdd$43($1,$2);
   };
  }],function()
  {
   cache$21.Clear();
  }]),(getOrAdd$21=p$27[0][1],[function(p$28)
  {
   return(getOrAdd$21(p$28))(function($1)
   {
    return NewLY.defSplitter($1[0],$1[1],$1[2],$1[3],$1[4],$1[5]);
   });
  },p$27[1]]))[0];
 };
 LayoutEngine_GeneratedPrintf.p=function($1)
 {
  return $1.$==1?"FullRef ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")":"LocalRef "+Utils.prettyPrint($1.$0);
 };
 LayoutEngine_Templates.wcompsplitterver=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"wcompsplitterver"
  },h):void 0;
 };
 LayoutEngine_Templates.wcompsplitterhor=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"wcompsplitterhor"
  },h):void 0;
 };
 LayoutEngine_Templates.appframework=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"appframework"
  },h):void 0;
 };
 LayoutEngine_GeneratedPrintf.p$2=function($1)
 {
  return $1.$==5?"FunDoc5 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+", "+Utils.prettyPrint($1.$4)+", "+Utils.prettyPrint($1.$5)+")":$1.$==4?"FunDoc4 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+", "+Utils.prettyPrint($1.$4)+")":$1.$==3?"FunDoc3 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+", "+Utils.prettyPrint($1.$3)+")":$1.$==2?"FunDoc2 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":$1.$==1?"FunDoc1 (<fun>, "+Utils.prettyPrint($1.$1)+")":"LazyDoc "+Utils.prettyPrint($1.$0);
 };
 GeneratedPrintf.p=function($1)
 {
  return"{"+("docName = "+LayoutEngine_GeneratedPrintf.p$1($1.docName))+"; "+("docDoc = "+LayoutEngine_GeneratedPrintf.p$2($1.docDoc))+"}";
 };
 LayoutEngine_GeneratedPrintf.p$1=function($1)
 {
  return"PlgElemName "+Utils.prettyPrint($1.$0);
 };
 LayoutEngine_Templates.tile=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"tile"
  },h):void 0;
 };
 LayoutEngine_Templates.actiondisabled=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"actiondisabled"
  },h):void 0;
 };
 LayoutEngine_Templates.action=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"action"
  },h):void 0;
 };
 LayoutEngine_Templates.namevalue=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"namevalue"
  },h):void 0;
 };
 LayoutEngine_Templates.namevalueinput=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"namevalueinput"
  },h):void 0;
 };
 LayoutEngine_GeneratedPrintf.p$26=function($1)
 {
  return $1.$==4?"RPlg":$1.$==3?"RAct":$1.$==2?"RViw":$1.$==1?"RVar":"RDoc";
 };
 LayoutEngine_GeneratedPrintf.p$3=function($1)
 {
  return $1.$==6?"EnPlgRef "+("("+Utils.prettyPrint($1.$0[0])+", "+LayoutEngine_GeneratedPrintf.p$26($1.$0[1])+")"):$1.$==5?"EnPlgDef "+LayoutEngine_GeneratedPrintf.p$25($1.$0):$1.$==4?"EnVJSDef "+LayoutEngine_GeneratedPrintf.p$24($1.$0):$1.$==3?"EnViwDef "+LayoutEngine_GeneratedPrintf.p$23($1.$0):$1.$==2?"EnVarDef "+LayoutEngine_GeneratedPrintf.p$22($1.$0):$1.$==1?"EnActDef "+LayoutEngine_GeneratedPrintf.p$21($1.$0):"EnDocDef "+LayoutEngine_GeneratedPrintf.p$4($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$25=function($1)
 {
  return"PlgDef "+Utils.prettyPrint($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$24=function($1)
 {
  return"VJSDef "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$17($2);
  },$1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$23=function($1)
 {
  return"ViwDef "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$17($2);
  },$1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$22=function($1)
 {
  return"VarDef "+Utils.prettyPrint($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$21=function($1)
 {
  return"ActDef ("+LayoutEngine_GeneratedPrintf.p$9($1.$0)+", "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$17($2);
  },$1.$1)+")";
 };
 LayoutEngine_GeneratedPrintf.p$4=function($1)
 {
  return $1.$==6?"DcElement "+LayoutEngine_GeneratedPrintf.p$20($1.$0):$1.$==5?"DcConcat "+LayoutEngine_GeneratedPrintf.p$18($1.$0):$1.$==4?"DcDocF "+LayoutEngine_GeneratedPrintf.p$16($1.$0):$1.$==3?"DcTextArea "+LayoutEngine_GeneratedPrintf.p$15($1.$0):$1.$==2?"DcInput "+LayoutEngine_GeneratedPrintf.p$14($1.$0):$1.$==1?"DcButton "+LayoutEngine_GeneratedPrintf.p$8($1.$0):"DcSplitter "+LayoutEngine_GeneratedPrintf.p$5($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$20=function($1)
 {
  return"ElementDef ("+Utils.prettyPrint($1.$0)+", "+LayoutEngine_GeneratedPrintf.p$17($1.$1)+", "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$19($2);
  },$1.$2)+")";
 };
 LayoutEngine_GeneratedPrintf.p$18=function($1)
 {
  return"ConcatDef "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$19($2);
  },$1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$19=function($1)
 {
  return $1.$==3?"NdViwRef "+LayoutEngine_GeneratedPrintf.p$13($1.$0):$1.$==2?"NdVarRef "+LayoutEngine_GeneratedPrintf.p$12($1.$0):$1.$==1?"NdDocRef "+LayoutEngine_GeneratedPrintf.p$7($1.$0):"NdTextValL "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$11($2);
  },$1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$16=function($1)
 {
  return"DocFDef ("+LayoutEngine_GeneratedPrintf.p$7($1.$0)+", "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$17($2);
  },$1.$1)+")";
 };
 LayoutEngine_GeneratedPrintf.p$17=function($1)
 {
  return $1.$==4?"PrActRef "+LayoutEngine_GeneratedPrintf.p$9($1.$0):$1.$==3?"PrViwRef "+LayoutEngine_GeneratedPrintf.p$13($1.$0):$1.$==2?"PrVarRef "+LayoutEngine_GeneratedPrintf.p$12($1.$0):$1.$==1?"PrDocRef "+LayoutEngine_GeneratedPrintf.p$7($1.$0):"PrTextValL "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$11($2);
  },$1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$15=function($1)
 {
  return"TextAreaDef ("+LayoutEngine_GeneratedPrintf.p$12($1.$0)+", "+Utils.printArray(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$10($2);
  },$1.$1)+")";
 };
 LayoutEngine_GeneratedPrintf.p$14=function($1)
 {
  return"InputDef ("+LayoutEngine_GeneratedPrintf.p$12($1.$0)+", "+Utils.printArray(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$10($2);
  },$1.$1)+")";
 };
 LayoutEngine_GeneratedPrintf.p$8=function($1)
 {
  return"ButtonDef ("+LayoutEngine_GeneratedPrintf.p$9($1.$0)+", "+Utils.printArray(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$10($2);
  },$1.$1)+", "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$11($2);
  },$1.$2)+")";
 };
 LayoutEngine_GeneratedPrintf.p$10=function($1)
 {
  return $1.$==2?"AtAct ("+Utils.prettyPrint($1.$0)+", "+LayoutEngine_GeneratedPrintf.p$9($1.$1)+")":$1.$==1?"AtAttr ("+Utils.prettyPrint($1.$0)+", "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$11($2);
  },$1.$1)+")":"AtStyle ("+Utils.prettyPrint($1.$0)+", "+Utils.printList(function($2)
  {
   return LayoutEngine_GeneratedPrintf.p$11($2);
  },$1.$1)+")";
 };
 LayoutEngine_GeneratedPrintf.p$11=function($1)
 {
  return $1.$==4?"TvDocRef "+LayoutEngine_GeneratedPrintf.p$7($1.$0):$1.$==3?"TvActRef "+LayoutEngine_GeneratedPrintf.p$9($1.$0):$1.$==2?"TvViwRef "+LayoutEngine_GeneratedPrintf.p$13($1.$0):$1.$==1?"TvVarRef "+LayoutEngine_GeneratedPrintf.p$12($1.$0):"TvConst "+Utils.prettyPrint($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$13=function($1)
 {
  return"ViwRef "+LayoutEngine_GeneratedPrintf.p($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$12=function($1)
 {
  return"VarRef "+LayoutEngine_GeneratedPrintf.p($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$9=function($1)
 {
  return"ActRef "+LayoutEngine_GeneratedPrintf.p($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$5=function($1)
 {
  return"SplitterDef ("+Utils.prettyPrint($1.$0)+", "+LayoutEngine_GeneratedPrintf.p$6($1.$1)+", "+LayoutEngine_GeneratedPrintf.p$7($1.$2)+", "+LayoutEngine_GeneratedPrintf.p$7($1.$3)+")";
 };
 LayoutEngine_GeneratedPrintf.p$7=function($1)
 {
  return"DocRef "+LayoutEngine_GeneratedPrintf.p($1.$0);
 };
 LayoutEngine_GeneratedPrintf.p$6=function($1)
 {
  return $1.$==1?"Variable ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":"Fixed ("+Utils.prettyPrint($1.$0)+", "+Utils.prettyPrint($1.$1)+")";
 };
 LayoutEngine_GeneratedPrintf.p$27=function($1)
 {
  return $1.$==1?"UnQuoted "+Utils.prettyPrint($1.$0):"Quoted "+Utils.prettyPrint($1.$0);
 };
 GeneratedPrintf.p$1=function($1)
 {
  return"{"+("actName = "+LayoutEngine_GeneratedPrintf.p$1($1.actName))+"; "+("actFunction = "+LayoutEngine_GeneratedPrintf.p$28($1.actFunction))+"; "+("actEnabled = "+LayoutEngine_GeneratedPrintf.p$29($1.actEnabled))+"}";
 };
 LayoutEngine_GeneratedPrintf.p$29=function($1)
 {
  return"View <fun>";
 };
 LayoutEngine_GeneratedPrintf.p$28=function($1)
 {
  return $1.$==2?"FunAct2 (<fun>, "+Utils.prettyPrint($1.$1)+", "+Utils.prettyPrint($1.$2)+")":$1.$==1?"FunAct1 (<fun>, "+Utils.prettyPrint($1.$1)+")":"FunAct0 <fun>";
 };
 LayoutEngine_Templates.fixedsplitterhor=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"fixedsplitterhor"
  },h):void 0;
 };
 LayoutEngine_Templates.fixedsplitterver=function(h)
 {
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"fixedsplitterver"
  },h):void 0;
 };
 LayoutEngine_Templates.appfwkclient=function(h)
 {
  LayoutEngine_Templates.fixedsplitterhor();
  LayoutEngine_Templates.fixedsplitterver();
  Templates.LoadLocalTemplates("appframework");
  return h?Templates.NamedTemplate("appframework",{
   $:1,
   $0:"appfwkclient"
  },h):void 0;
 };
}());