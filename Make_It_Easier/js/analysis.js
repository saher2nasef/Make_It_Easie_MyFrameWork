let KeyWords = {
  Margin: {
    mf: `MarginFull-`,
    ml: `MarginLeft-`,
    mr: `MarginRight-`,
    mt: `MarginTop-`,
    mb: `MarginBottom-`,
  },
  Padding: {
    pf: `PaddingFull-`,
    pl: `PaddingLeft-`,
    pr: `PaddingRight-`,
    pt: `PaddingTop-`,
    pb: `PaddingBottom-`,
  },
  Zindex: {
    z: `Zindex-`,
  },
  Position: {
    p: `Position-`,
    top: "PTop-",
    left: "PLeft-",
    right: "PRight-",
    bottom: "PBottom-",
  },
  Color: {
    c: `Color-`,
  },
  Background: {
    BgC: `BgC-`,
    BgI: `BgI-`,
    BgS: `BgS-`,
  },
  Border: {
    b: "BorderFull-",
    bb: "BorderBottom-",
    br: "BorderRight-",
    bl: "BorderLeft-",
    bt: "BorderTop-",
    bs: "BorderStyle-",
    bw: "BorderWidth-",
    bc: "BorderC-",
    bra: "BorderRadius-",
  },
  WidthAndHieght: {
    w: "Width-",
    h: "Height-",
  },
  Display: {
    d: "Display-",
  },
  Font: {
    FFa: "FontFamily-",
    FS: "FontSize-",
    FSt: "FontStyle-",
    FW: "FontWeight-",
  },
  Texts: {
    TA: "TextAlign-",
    TD: "TextDecoration-",
    TI: "TextIndent-",
    TO: "TextOverflow-",
    TT: "TextTransform-",
  },
  Tan: {
    TM: "Transform-",
    TN: "Transition-",
  },
  DisplauFlex: {
    fd: "FlexDirection-",
    fw: "FlexWrap-",
    ff: "FlexFlow-",
    fj: "JustifyContent-",
    fi: "AlignItems-",
    fc: "AlignContent-",
    fs: "AlignSelf-",
    fo: "Order-",
    fg: "FlexGrow-",
    fsh: "FlexShrink-",
    fb: "FlexBasis-",
  },
  Cursor: "Cursor-",
};

class analysis {
  constructor() {}
  analysis(ArrayClasses) {
    let properties = [];
    for (let i = 0; i < ArrayClasses.length; i++) {
      const element = ArrayClasses[i];
      if (element.includes(KeyWords.Margin.mf)) {
        let Value = element.substring(KeyWords.Margin.mf.length);
        Value = Value.replaceAll("-", "px ");
        if (isNaN(Value.substring(Value.length - 2)) === false) {
          Value += "px";
        }
        if (isNaN(Value) === false) {
          properties.push(`margin:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`margin:${Value};`);
        }
      } else if (element.includes(KeyWords.Margin.ml)) {
        let Value = element.substring(KeyWords.Margin.ml.length);
        if (isNaN(Value) === false) {
          properties.push(`margin-left:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`margin-left:${Value};`);
        }
      } else if (element.includes(KeyWords.Margin.mr)) {
        let Value = element.substring(KeyWords.Margin.mr.length);
        if (isNaN(Value) === false) {
          properties.push(`margin-right:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`margin-right:${Value};`);
        }
      } else if (element.includes(KeyWords.Margin.mt)) {
        let Value = element.substring(KeyWords.Margin.mt.length);
        if (isNaN(Value) === false) {
          properties.push(`margin-top:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`margin-top:${Value};`);
        }
      } else if (element.includes(KeyWords.Margin.mb)) {
        let Value = element.substring(KeyWords.Margin.mb.length);
        if (isNaN(Value) === false) {
          properties.push(`margin-bottom:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`margin-bottom:${Value};`);
        }
      } else if (element.includes(KeyWords.Padding.pf)) {
        let Value = element.substring(KeyWords.Padding.pf.length);
        Value = Value.replaceAll("-", "px ");

        if (isNaN(Value.substring(Value.length - 2)) === false) {
          Value += "px";
        }
        if (isNaN(Value) === false) {
          properties.push(`padding:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`padding:${Value};`);
        }
      } else if (element.includes(KeyWords.Padding.pl)) {
        let Value = element.substring(KeyWords.Padding.pl.length);
        if (isNaN(Value) === false) {
          properties.push(`padding-left:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`padding-left:${Value};`);
        }
      } else if (element.includes(KeyWords.Padding.pr)) {
        let Value = element.substring(KeyWords.Padding.pr.length);
        if (isNaN(Value) === false) {
          properties.push(`padding-right:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`padding-right:${Value};`);
        }
      } else if (element.includes(KeyWords.Padding.pt)) {
        let Value = element.substring(KeyWords.Padding.pt.length);
        if (isNaN(Value) === false) {
          properties.push(`padding-top:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`padding-top:${Value};`);
        }
      } else if (element.includes(KeyWords.Padding.pb)) {
        let Value = element.substring(KeyWords.Padding.pb.length);
        if (isNaN(Value) === false) {
          properties.push(`padding-bottom:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`padding-bottom:${Value};`);
        }
      } else if (element.includes(KeyWords.Zindex.z)) {
        let Value = element.substring(KeyWords.Zindex.z.length);
        properties.push(`z-index:${Value};`);
      } else if (element.includes(KeyWords.Position.p)) {
        let Value = element.substring(KeyWords.Position.p.length);
        properties.push(`position:${Value};`);
      } else if (element.includes(KeyWords.Color.c)) {
        let Value = element.substring(KeyWords.Color.c.length);
        properties.push(`color:${Value};`);
      } else if (element.includes(KeyWords.Background.BgC)) {
        let Value = element.substring(KeyWords.Background.BgC.length);
        properties.push(`background-color:${Value};`);
      } else if (element.includes(KeyWords.Background.BgI)) {
        let Value = element.substring(KeyWords.Background.BgI.length);
        properties.push(`background-image:${Value};`);
      } else if (element.includes(KeyWords.Background.BgS)) {
        let Value = element.substring(KeyWords.Background.BgS.length);
        properties.push(`background-size:${Value};`);
      } else if (element.includes(KeyWords.Border.b)) {
        let Value = element.substring(KeyWords.Border.b.length).split("-");
        Value[0] += "px";
        Value = Value.join(" ");
        properties.push(`border:${Value};`);
      } else if (element.includes(KeyWords.Border.bb)) {
        let Value = element.substring(KeyWords.Border.bb.length).split("-");
        Value[0] += "px";
        Value = Value.join(" ");
        properties.push(`border-bottom:${Value};`);
      } else if (element.includes(KeyWords.Border.bt)) {
        let Value = element.substring(KeyWords.Border.bt.length).split("-");
        Value[0] += "px";
        Value = Value.join(" ");
        properties.push(`border-top:${Value};`);
      } else if (element.includes(KeyWords.Border.br)) {
        let Value = element.substring(KeyWords.Border.br.length).split("-");
        Value[0] += "px";
        Value = Value.join(" ");
        properties.push(`border-right:${Value};`);
      } else if (element.includes(KeyWords.Border.bl)) {
        let Value = element.substring(KeyWords.Border.bl.length).split("-");
        Value[0] += "px";
        Value = Value.join(" ");
        properties.push(`border-left:${Value};`);
      } else if (element.includes(KeyWords.Border.bw)) {
        let Value = element.substring(KeyWords.Border.bw.length);
        if (isNaN(Value) === false) {
          properties.push(`border-width:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`border-width:${Value};`);
        }
      } else if (element.includes(KeyWords.Border.bs)) {
        let Value = element.substring(KeyWords.Border.bs.length);
        properties.push(`border-style:${Value};`);
      } else if (element.includes(KeyWords.Border.bc)) {
        let Value = element.substring(KeyWords.Border.bc.length);
        properties.push(`border-color:${Value};`);
      } else if (element.includes(KeyWords.Border.bra)) {
        let Value = element.substring(KeyWords.Border.bra.length);
        if (isNaN(Value) === false) {
          properties.push(`border-radius:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`border-radius:${Value};`);
        }
      } else if (element.includes(KeyWords.Position.top)) {
        let Value = element.substring(KeyWords.Position.top.length);
        if (isNaN(Value) === false) {
          properties.push(`top:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`top:${Value};`);
        }
      } else if (element.includes(KeyWords.Position.left)) {
        let Value = element.substring(KeyWords.Position.left.length);
        if (isNaN(Value) === false) {
          properties.push(`left:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`left:${Value};`);
        }
      } else if (element.includes(KeyWords.Position.right)) {
        let Value = element.substring(KeyWords.Position.right.length);
        if (isNaN(Value) === false) {
          properties.push(`right:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`right:${Value};`);
        }
      } else if (element.includes(KeyWords.Position.bottom)) {
        let Value = element.substring(KeyWords.Position.bottom.length);
        if (isNaN(Value) === false) {
          properties.push(`bottom:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`bottom:${Value};`);
        }
      } else if (element.includes(KeyWords.WidthAndHieght.w)) {
        let Value = element.substring(KeyWords.WidthAndHieght.w.length);
        if (isNaN(Value) === false) {
          properties.push(`width:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`width:${Value};`);
        }
      } else if (element.includes(KeyWords.WidthAndHieght.h)) {
        let Value = element.substring(KeyWords.WidthAndHieght.h.length);
        if (isNaN(Value) === false) {
          properties.push(`height:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`height:${Value};`);
        }
      } else if (element.includes(KeyWords.Display.d)) {
        let Value = element.substring(KeyWords.Display.d.length);
        properties.push(`display:${Value};`);
      } else if (element.includes(KeyWords.Font.FFa)) {
        let Value = element.substring(KeyWords.Font.FFa.length);
        properties.push(`font-family:${Value};`);
      } else if (element.includes(KeyWords.Font.FS)) {
        let Value = element.substring(KeyWords.Font.FS.length);
        if (isNaN(Value) === false) {
          properties.push(`font-size:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`font-size:${Value};`);
        }
      } else if (element.includes(KeyWords.Font.FW)) {
        let Value = element.substring(KeyWords.Font.FW.length);
        properties.push(`font-weight:${Value};`);
      } else if (element.includes(KeyWords.Font.FSt)) {
        let Value = element.substring(KeyWords.Font.FSt.length);
        properties.push(`font-style:${Value};`);
      } else if (element.includes(KeyWords.Texts.TA)) {
        let Value = element.substring(KeyWords.Texts.TA.length);
        properties.push(`text-align:${Value};`);
      } else if (element.includes(KeyWords.Texts.TD)) {
        let Value = element.substring(KeyWords.Texts.TD.length);
        properties.push(`text-decoration:${Value};`);
      } else if (element.includes(KeyWords.Texts.TI)) {
        let Value = element.substring(KeyWords.Texts.TI.length);
        if (isNaN(Value) === false) {
          properties.push(`text-indent:${Value}px;`);
        } else if (isNaN(Value) === true) {
          properties.push(`text-indent:${Value};`);
        }
      } else if (element.includes(KeyWords.Texts.TO)) {
        let Value = element.substring(KeyWords.Texts.TO.length);
        properties.push(`text-overflow:${Value};`);
      } else if (element.includes(KeyWords.Texts.TT)) {
        let Value = element.substring(KeyWords.Texts.TT.length);
        properties.push(`text-transform:${Value};`);
      } else if (element.includes(KeyWords.DisplauFlex.fd)) {
        let Value = element.substring(KeyWords.DisplauFlex.fd.length);
        properties.push(`flex-direction:${Value};`);
      } else if (element.includes(KeyWords.DisplauFlex.fw)) {
        let Value = element.substring(KeyWords.DisplauFlex.fw.length);
        properties.push(`flex-wrap:${Value};`);
      } else if (element.includes(KeyWords.DisplauFlex.ff)) {
        let Value = element.substring(KeyWords.DisplauFlex.ff.length);
        properties.push(`flex-flow:${Value};`);
      } else if (element.includes(KeyWords.DisplauFlex.fj)) {
        let Value = element.substring(KeyWords.DisplauFlex.fj.length);
        properties.push(`justify-content:${Value};`);
      } else if (element.includes(KeyWords.DisplauFlex.fi)) {
        let Value = element.substring(KeyWords.DisplauFlex.fi.length);
        properties.push(`align-items:${Value};`);
      } else if (element.includes(KeyWords.DisplauFlex.fc)) {
        let Value = element.substring(KeyWords.DisplauFlex.fc.length);
        properties.push(`align-content:${Value};`);
      } else if (element.includes(KeyWords.DisplauFlex.fs)) {
        let Value = element.substring(KeyWords.DisplauFlex.fs.length);
        properties.push(`align-self:${Value};`);
      } else if (element.includes(KeyWords.DisplauFlex.fo)) {
        let Value = element.substring(KeyWords.DisplauFlex.fo.length);
        properties.push(`order:${Value};`);
      } else if (element.includes(KeyWords.DisplauFlex.fg)) {
        let Value = element.substring(KeyWords.DisplauFlex.fg.length);
        properties.push(`flex-grow:${Value};`);
      } else if (element.includes(KeyWords.DisplauFlex.fsh)) {
        let Value = element.substring(KeyWords.DisplauFlex.fsh.length);
        properties.push(`flex-shrink:${Value};`);
      } else if (element.includes(KeyWords.DisplauFlex.fb)) {
        let Value = element.substring(KeyWords.DisplauFlex.fb.length);
        properties.push(`flex-basis:${Value};`);
      } else if (element.includes(KeyWords.Cursor)) {
        let Value = element.substring(KeyWords.Cursor.length);
        properties.push(`cursor:${Value};`);
      }
    }
    return properties;
  }
}
export default analysis;
