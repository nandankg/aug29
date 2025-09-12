
ERROR in ./src/edit/isha/Edit PREVENTIVEMAINTENACE_CC_CCHS.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\isha\Edit PREVENTIVEMAINTENACE_CC_CCHS.jsx: Unexpected token (23:9)

  21 |   const dispatch = useDispatch();
  22 |   const location = useLocation();
> 23 |   const {;
     |          ^
  24 |   id
  25 |
  26 | } = location.state;
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parseBindingProperty (E:\AUG29\node_modules\@babel\parser\lib\index.js:7455:12)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11838:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:7385:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:3496:22)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:13411:21)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:3507:11)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13392:12)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseStatementListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12756:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:61)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseBlock (E:\AUG29\node_modules\@babel\parser\lib\index.js:13306:10)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:12110:24)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:63
    at FlowParserMixin.forwardNoArrowParamsConversionAt (E:\AUG29\node_modules\@babel\parser\lib\index.js:3099:16)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:12)
    at FlowParserMixin.parseArrowExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:12085:10)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:11695:12)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:3624:18)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11335:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)

ERROR in ./src/edit/isha/EditAfcPreventiveHalfYearly.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\isha\EditAfcPreventiveHalfYearly.jsx: Unexpected token (23:9)

  21 |   const dispatch = useDispatch();
  22 |   const location = useLocation();
> 23 |   const {;
     |          ^
  24 |   id
  25 |
  26 | } = location.state;
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parseBindingProperty (E:\AUG29\node_modules\@babel\parser\lib\index.js:7455:12)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11838:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:7385:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:3496:22)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:13411:21)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:3507:11)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13392:12)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseStatementListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12756:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:61)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseBlock (E:\AUG29\node_modules\@babel\parser\lib\index.js:13306:10)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:12110:24)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:63
    at FlowParserMixin.forwardNoArrowParamsConversionAt (E:\AUG29\node_modules\@babel\parser\lib\index.js:3099:16)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:12)
    at FlowParserMixin.parseArrowExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:12085:10)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:11695:12)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:3624:18)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11335:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)

ERROR in ./src/edit/isha/EditPMLOGBOOKMAAINLINE9.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\isha\EditPMLOGBOOKMAAINLINE9.jsx: Unexpected token (26:9)

  24 |   const dispatch = useDispatch();
  25 |   const location = useLocation();
> 26 |   const {;
     |          ^
  27 |   id
  28 |
  29 | } = location.state;
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parseBindingProperty (E:\AUG29\node_modules\@babel\parser\lib\index.js:7455:12)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11838:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:7385:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:3496:22)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:13411:21)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:3507:11)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13392:12)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseStatementListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12756:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:61)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseBlock (E:\AUG29\node_modules\@babel\parser\lib\index.js:13306:10)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:12110:24)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:63
    at FlowParserMixin.forwardNoArrowParamsConversionAt (E:\AUG29\node_modules\@babel\parser\lib\index.js:3099:16)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:12)
    at FlowParserMixin.parseArrowExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:12085:10)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:11695:12)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:3624:18)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11335:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)

ERROR in ./src/edit/pinki/EditAxleCounter.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\pinki\EditAxleCounter.jsx: Unexpected token (29:9)

  27 |   const navigate = useNavigate();
  28 |   const location = useLocation();
> 29 |   const {;
     |          ^
  30 |   id
  31 |
  32 | } = location.state || "";
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parseBindingProperty (E:\AUG29\node_modules\@babel\parser\lib\index.js:7455:12)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11838:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:7385:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:3496:22)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:13411:21)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:3507:11)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13392:12)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseStatementListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12756:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:61)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseBlock (E:\AUG29\node_modules\@babel\parser\lib\index.js:13306:10)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:12110:24)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:63
    at FlowParserMixin.forwardNoArrowParamsConversionAt (E:\AUG29\node_modules\@babel\parser\lib\index.js:3099:16)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:12)
    at FlowParserMixin.parseArrowExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:12085:10)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:11695:12)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:3624:18)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11335:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)

ERROR in ./src/edit/satya/EditAfcPreventive.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\satya\EditAfcPreventive.jsx: Unexpected token (34:9)

  32 |   const navigate = useNavigate();
  33 |   const location = useLocation();
> 34 |   const {;
     |          ^
  35 |   id
  36 |
  37 | } = location.state;
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parseBindingProperty (E:\AUG29\node_modules\@babel\parser\lib\index.js:7455:12)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11838:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:7385:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:3496:22)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:13411:21)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:3507:11)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13392:12)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseStatementListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12756:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:61)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseBlock (E:\AUG29\node_modules\@babel\parser\lib\index.js:13306:10)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:12110:24)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:63
    at FlowParserMixin.forwardNoArrowParamsConversionAt (E:\AUG29\node_modules\@babel\parser\lib\index.js:3099:16)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:12)
    at FlowParserMixin.parseArrowExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:12085:10)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:11695:12)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:3624:18)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11335:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)

ERROR in ./src/edit/satya/EditCabinetRecord.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\satya\EditCabinetRecord.jsx: Unexpected token (37:9)

  35 |   const navigate = useNavigate();
  36 |   const location = useLocation();
> 37 |   const {;
     |          ^
  38 |   id
  39 |
  40 | } = location.state;
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parseBindingProperty (E:\AUG29\node_modules\@babel\parser\lib\index.js:7455:12)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11838:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:7385:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:3496:22)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:13411:21)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:3507:11)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13392:12)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseStatementListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12756:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:61)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseBlock (E:\AUG29\node_modules\@babel\parser\lib\index.js:13306:10)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:12110:24)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:63
    at FlowParserMixin.forwardNoArrowParamsConversionAt (E:\AUG29\node_modules\@babel\parser\lib\index.js:3099:16)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:12)
    at FlowParserMixin.parseArrowExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:12085:10)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:11695:12)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:3624:18)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11335:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)

ERROR in ./src/edit/satya/EditPMList.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\satya\EditPMList.jsx: Unexpected token (28:9)

  26 |   const location = useLocation();
  27 |   const [date, setDate] = useState(new Date());
> 28 |   const {;
     |          ^
  29 |   id
  30 |
  31 | } = location.state;
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parseBindingProperty (E:\AUG29\node_modules\@babel\parser\lib\index.js:7455:12)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11838:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:7385:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:3496:22)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:13411:21)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:3507:11)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13392:12)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseStatementListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12756:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:61)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseBlock (E:\AUG29\node_modules\@babel\parser\lib\index.js:13306:10)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:12110:24)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:63
    at FlowParserMixin.forwardNoArrowParamsConversionAt (E:\AUG29\node_modules\@babel\parser\lib\index.js:3099:16)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:12)
    at FlowParserMixin.parseArrowExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:12085:10)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:11695:12)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:3624:18)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11335:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)

ERROR in ./src/edit/satya/EditPMMainline.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\satya\EditPMMainline.jsx: Unexpected token (23:9)

  21 |   const location = useLocation();
  22 |   const [date, setDate] = useState(new Date());
> 23 |   const {;
     |          ^
  24 |   id
  25 |
  26 | } = location.state;
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parseBindingProperty (E:\AUG29\node_modules\@babel\parser\lib\index.js:7455:12)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11838:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:7385:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:3496:22)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:13411:21)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:3507:11)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13392:12)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseStatementListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12756:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:61)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseBlock (E:\AUG29\node_modules\@babel\parser\lib\index.js:13306:10)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:12110:24)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:63
    at FlowParserMixin.forwardNoArrowParamsConversionAt (E:\AUG29\node_modules\@babel\parser\lib\index.js:3099:16)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:12)
    at FlowParserMixin.parseArrowExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:12085:10)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:11695:12)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:3624:18)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11335:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)

ERROR in ./src/edit/store/StationEarningEdit.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\store\StationEarningEdit.jsx: Unexpected token (40:11)

  38 |   const navigate = useNavigate();
  39 |     const location = useLocation();
> 40 |     const {;
     |            ^
  41 |   id
  42 |
  43 | } = location.state;
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parseBindingProperty (E:\AUG29\node_modules\@babel\parser\lib\index.js:7455:12)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11838:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:7385:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:3496:22)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:13411:21)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:3507:11)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13392:12)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseStatementListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12756:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:61)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseBlock (E:\AUG29\node_modules\@babel\parser\lib\index.js:13306:10)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:12110:24)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:63
    at FlowParserMixin.forwardNoArrowParamsConversionAt (E:\AUG29\node_modules\@babel\parser\lib\index.js:3099:16)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:12)
    at FlowParserMixin.parseArrowExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:12085:10)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:11695:12)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:3624:18)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11335:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)

ERROR in ./src/forms/store/BudgetAllotmentForm.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\forms\store\BudgetAllotmentForm.jsx: Unexpected token (32:44)

  30 | });
  31 |   const eloa = useSelector((state) => state.budgetallotment);
> 32 |   const [formData, setFormData] = useState({;
     |                                             ^
  33 |   budgetHead_id:"",
  34 |     budgetHead: "",
  35 |     budgetSubhead: "",
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseStatementListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12756:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:61)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseBlock (E:\AUG29\node_modules\@babel\parser\lib\index.js:13306:10)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:12110:24)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:63
    at FlowParserMixin.forwardNoArrowParamsConversionAt (E:\AUG29\node_modules\@babel\parser\lib\index.js:3099:16)

ERROR in ./src/forms/store/NightAfcGateDrill.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\forms\store\NightAfcGateDrill.jsx: Unexpected token (40:30)

  38 | }
  39 |   }, [AfcGateDrillList]);
> 40 |   const basicInitialValues = {;
     |                               ^
  41 |     sno: "sNo",
  42 |     date: "",
  43 |     station: "",
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseStatementListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12756:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:61)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseBlock (E:\AUG29\node_modules\@babel\parser\lib\index.js:13306:10)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:12110:24)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:63
    at FlowParserMixin.forwardNoArrowParamsConversionAt (E:\AUG29\node_modules\@babel\parser\lib\index.js:3099:16)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:12)
    at FlowParserMixin.parseArrowExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:12085:10)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:11695:12)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:3624:18)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11335:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)

ERROR in ./src/reducer/AfcPreventReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\AfcPreventReducer.jsx: Unexpected token (90:44)

  88 | });
  89 | });
> 90 | const AfcPreventChkformSlice = createSlice({;
     |                                             ^
  91 |   name: "data",
  92 |   initialState: {
  93 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/AuthReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\AuthReducer.jsx: Unexpected token (7:22)

   5 | import "react-toastify/dist/ReactToastify.css";
   6 |
>  7 | const initialState = {;
     |                       ^
   8 |   currentUser: undefined,
   9 |   loading: false,
  10 | };
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)
    at parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14535:38)
    at parser (E:\AUG29\node_modules\@babel\core\lib\parser\index.js:41:34)
    at parser.next (<anonymous>)
    at normalizeFile (E:\AUG29\node_modules\@babel\core\lib\transformation\normalize-file.js:64:37)
    at normalizeFile.next (<anonymous>)
    at run (E:\AUG29\node_modules\@babel\core\lib\transformation\index.js:21:50)
    at run.next (<anonymous>)
    at transform (E:\AUG29\node_modules\@babel\core\lib\transform.js:22:33)
    at transform.next (<anonymous>)
    at step (E:\AUG29\node_modules\gensync\index.js:261:32)
    at E:\AUG29\node_modules\gensync\index.js:273:13
    at async.call.result.err.err (E:\AUG29\node_modules\gensync\index.js:223:11)

ERROR in ./src/reducer/CentCompPreReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\CentCompPreReducer.jsx: Unexpected token (118:41)

  116 | }).then((res) => res.json());
  117 | });
> 118 | const CentCompPreRedSlice = createSlice({;
      |                                          ^
  119 |   name: "data",
  120 |   initialState: {
  121 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/ColorLightSignalMainlineReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\ColorLightSignalMainlineReducer.jsx: Unexpected token (108:41)

  106 | }).then((res) => res.json());
  107 | });
> 108 | const SignalMainlineSlice = createSlice({;
      |                                          ^
  109 |   name: "data",
  110 |   initialState: {
  111 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/ESPQuarterlyMaintananceSignalReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\ESPQuarterlyMaintananceSignalReducer.jsx: Unexpected token (104:51)

  102 | }).then((res) => res.json());
  103 | });
> 104 | const ESPQuarterlyMaintainanceSlice = createSlice({;
      |                                                    ^
  105 |   name: "data",
  106 |   initialState: {
  107 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/FirstAidRegisterReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\FirstAidRegisterReducer.jsx: Unexpected token (100:43)

   98 | }).then((res) => res.json());
   99 | });
> 100 | const FirstAidRegisterSlice = createSlice({;
      |                                            ^
  101 |   name: "data",
  102 |   initialState: {
  103 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/HonorariumRegReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\HonorariumRegReducer.jsx: Unexpected token (114:43)

  112 | }).then((res) => res.json());
  113 | });
> 114 | const honorariumRegRedSlice = createSlice({;
      |                                            ^
  115 |   name: "data",
  116 |   initialState: {
  117 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/IncidentAccidentRegReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\IncidentAccidentRegReducer.jsx: Unexpected token (110:41)

  108 | }).then((res) => res.json());
  109 | });
> 110 | const incidentAcdRegSlice = createSlice({;
      |                                          ^
  111 |   name: "data",
  112 |   initialState: {
  113 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/LatsVduDrillReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\LatsVduDrillReducer.jsx: Unexpected token (107:46)

  105 | }).then((res) => res.json());
  106 | });
> 107 | const LatsVduDrillReducerSlice = createSlice({;
      |                                               ^
  108 |   name: "data",
  109 |   initialState: {
  110 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/ListHonorariumReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\ListHonorariumReducer.jsx: Unexpected token (95:47)

  93 | }).then((res) => res.json());
  94 | });
> 95 | const ListhonorariumRegRedSlice = createSlice({;
     |                                                ^
  96 |   name: "data",
  97 |   initialState: {
  98 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/LoanRegisterReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\LoanRegisterReducer.jsx: Unexpected token (117:46)

  115 | }).then((res) => res.json());
  116 | });
> 117 | const LoanRegisterReducerSlice = createSlice({;
      |                                               ^
  118 |   name: "data",
  119 |   initialState: {
  120 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/OutstandRecRegReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\OutstandRecRegReducer.jsx: Unexpected token (122:41)

  120 | }).then((res) => res.json());
  121 | });
> 122 | const OutstandRecRegSlice = createSlice({;
      |                                          ^
  123 |   name: "data",
  124 |   initialState: {
  125 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/PoliceCtdRegReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\PoliceCtdRegReducer.jsx: Unexpected token (107:39)

  105 | }).then((res) => res.json());
  106 | });
> 107 | const PoliceCtdRegSlice = createSlice({;
      |                                        ^
  108 |   name: "data",
  109 |   initialState: {
  110 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/TER_Entry_Reducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\TER_Entry_Reducer.jsx: Unexpected token (108:46)

  106 | }).then((res) => res.json());
  107 | });
> 108 | const TER_Entry_Register_Slice = createSlice({;
      |                                               ^
  109 |   name: "data",
  110 |   initialState: {
  111 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/Update_Check_List_PM_occ_bcc_Red.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\Update_Check_List_PM_occ_bcc_Red.jsx: Unexpected token (94:56)

  92 | }).then((res) => res.json());
  93 | });
> 94 | const Update_Check_List_PM_occ_bcc_Slice = createSlice({;
     |                                                         ^
  95 |   name: "data",
  96 |   initialState: {
  97 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/akshra/AgentissueReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\akshra\AgentissueReducer.jsx: Unexpected token (101:32)

   99 | }).then((res) => res.json());
  100 | });
> 101 | const agentSlice = createSlice({;
      |                                 ^
  102 |   name: "data",
  103 |   initialState: {
  104 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/akshra/TsrrReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\akshra\TsrrReducer.jsx: Unexpected token (114:31)

  112 | }).then((res) => res.json());
  113 | });
> 114 | const tsrrSlice = createSlice({;
      |                                ^
  115 |   name: "data",
  116 |   initialState: {
  117 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/isha/IncidentAccidentRegReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\isha\IncidentAccidentRegReducer.jsx: Unexpected token (113:41)

  111 | }).then((res) => res.json());
  112 | });
> 113 | const incidentAcdRegSlice = createSlice({;
      |                                          ^
  114 |   name: "data",
  115 |   initialState: {
  116 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/satya/PMLogBookTVMReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\satya\PMLogBookTVMReducer.jsx: Unexpected token (121:39)

  119 | }).then((res) => res.json());
  120 | });
> 121 | const pmlogbookTVMSlice = createSlice({;
      |                                        ^
  122 |   name: "data",
  123 |   initialState: {
  124 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/reducer/satya/PMMainlineReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\satya\PMMainlineReducer.jsx: Unexpected token (132:37)

  130 |   ).then((res) => res.json());
  131 | });
> 132 | const pmmainlineSlice = createSlice({;
      |                                      ^
  133 |   name: "data",
  134 |   initialState: {
  135 |   loading: false,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parsePropertyDefinition (E:\AUG29\node_modules\@babel\parser\lib\index.js:11899:10)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11840:21)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11343:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12436:12)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseMaybeAssignAllowInOrVoidPattern (E:\AUG29\node_modules\@babel\parser\lib\index.js:12503:17)
    at FlowParserMixin.parseExprListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12185:18)
    at FlowParserMixin.parseCallExpressionArguments (E:\AUG29\node_modules\@babel\parser\lib\index.js:11256:22)
    at FlowParserMixin.parseCoverCallAndAsyncArrowHead (E:\AUG29\node_modules\@babel\parser\lib\index.js:11190:29)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:11124:19)
    at FlowParserMixin.parseSubscript (E:\AUG29\node_modules\@babel\parser\lib\index.js:3683:18)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11098:19)
    at FlowParserMixin.parseSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:3649:18)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11089:17)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)

ERROR in ./src/tables/store/StockMovementTokensview.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\tables\store\StockMovementTokensview.jsx: Unexpected token (35:9)

  33 |   const navigate = useNavigate();
  34 |   const location = useLocation();
> 35 |   const {;
     |          ^
  36 |   toPDF, targetRef
  37 |
  38 | } = usePDF({
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parseBindingProperty (E:\AUG29\node_modules\@babel\parser\lib\index.js:7455:12)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11838:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:7385:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:3496:22)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:13411:21)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:3507:11)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13392:12)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseStatementListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12756:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:61)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseBlock (E:\AUG29\node_modules\@babel\parser\lib\index.js:13306:10)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:12110:24)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:63
    at FlowParserMixin.forwardNoArrowParamsConversionAt (E:\AUG29\node_modules\@babel\parser\lib\index.js:3099:16)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:12)
    at FlowParserMixin.parseArrowExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:12085:10)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:11695:12)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:3624:18)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11335:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)

ERROR in ./src/tables/store/StockmovementcardsView.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\tables\store\StockmovementcardsView.jsx: Unexpected token (35:9)

  33 |   const navigate = useNavigate();
  34 |   const location = useLocation();
> 35 |   const {;
     |          ^
  36 |   toPDF, targetRef
  37 |
  38 | } = usePDF({
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parsePropertyName (E:\AUG29\node_modules\@babel\parser\lib\index.js:12034:18)
    at FlowParserMixin.parseBindingProperty (E:\AUG29\node_modules\@babel\parser\lib\index.js:7455:12)
    at FlowParserMixin.parseObjectLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:11838:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:7385:21)
    at FlowParserMixin.parseBindingAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:3496:22)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:13411:21)
    at FlowParserMixin.parseVarId (E:\AUG29\node_modules\@babel\parser\lib\index.js:3507:11)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13392:12)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseStatementListItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12756:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:61)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseBlock (E:\AUG29\node_modules\@babel\parser\lib\index.js:13306:10)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:12110:24)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:63
    at FlowParserMixin.forwardNoArrowParamsConversionAt (E:\AUG29\node_modules\@babel\parser\lib\index.js:3099:16)
    at FlowParserMixin.parseFunctionBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:2923:12)
    at FlowParserMixin.parseArrowExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:12085:10)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:11695:12)
    at FlowParserMixin.parseParenAndDistinguishExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:3624:18)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11335:23)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseMaybeAssignAllowIn (E:\AUG29\node_modules\@babel\parser\lib\index.js:10804:17)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13393:91)
    at FlowParserMixin.parseVarStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13239:10)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12860:23)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseModuleItem (E:\AUG29\node_modules\@babel\parser\lib\index.js:12753:17)
    at FlowParserMixin.parseBlockOrModuleBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13325:36)
    at FlowParserMixin.parseBlockBody (E:\AUG29\node_modules\@babel\parser\lib\index.js:13318:10)
    at FlowParserMixin.parseProgram (E:\AUG29\node_modules\@babel\parser\lib\index.js:12634:10)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:12624:25)
    at FlowParserMixin.parseTopLevel (E:\AUG29\node_modules\@babel\parser\lib\index.js:3718:28)

ERROR in [eslint]
src\component\EnhancedExcelExportComponent.jsx
  Line 151:21:  'XLSX' is not defined  no-undef
  Line 155:27:  'XLSX' is not defined  no-undef
  Line 203:25:  'XLSX' is not defined  no-undef

src\edit\isha\Edit PREVENTIVEMAINTENACE_CC_CCHS.jsx
  Line 23:9:  Parsing error: Unexpected token (23:9)

src\edit\isha\EditAfcPreventiveHalfYearly.jsx
  Line 23:9:  Parsing error: Unexpected token (23:9)

src\edit\isha\EditPMLOGBOOKMAAINLINE9.jsx
  Line 26:9:  Parsing error: Unexpected token (26:9)

src\edit\monika\DailycheckRegisterEdit.jsx
  Line 22:5:   'dispatch' is not defined  no-undef
  Line 196:5:  'dispatch' is not defined  no-undef

src\edit\pinki\EditAxleCounter.jsx
  Line 29:9:  Parsing error: Unexpected token (29:9)

src\edit\satya\EditAfcPreventive.jsx
  Line 34:9:  Parsing error: Unexpected token (34:9)

src\edit\satya\EditCabinetRecord.jsx
  Line 37:9:  Parsing error: Unexpected token (37:9)

src\edit\satya\EditPMList.jsx
  Line 28:9:  Parsing error: Unexpected token (28:9)

src\edit\satya\EditPMMainline.jsx
  Line 23:9:  Parsing error: Unexpected token (23:9)

src\edit\store\StationEarningEdit.jsx
  Line 40:11:  Parsing error: Unexpected token (40:11)

src\forms\store\BudgetAllotmentForm.jsx
  Line 32:44:  Parsing error: Unexpected token (32:44)

src\forms\store\NightAfcGateDrill.jsx
  Line 40:30:  Parsing error: Unexpected token (40:30)

src\list\akshra\Checklistafc.jsx
  Line 40:7:    'setItems' is not defined  no-undef
  Line 46:37:   'items' is not defined     no-undef
  Line 178:16:  'items' is not defined     no-undef

src\list\akshra\Pmloogbook_Newlist.jsx
  Line 40:7:   'setItems' is not defined  no-undef
  Line 46:37:  'items' is not defined     no-undef

src\list\chanchal\Pm_logbook_half_yearly_other_mainline_NewList.jsx
  Line 39:7:   'setItems' is not defined  no-undef
  Line 48:21:  'items' is not defined     no-undef

src\list\monika\DailyTelecomMainLists.js
  Line 35:7:   'setItems' is not defined  no-undef
  Line 44:21:  'items' is not defined     no-undef

src\list\monika\PmLogBookMainlineLists.js
  Line 38:7:   'setItems' is not defined  no-undef
  Line 47:21:  'items' is not defined     no-undef

src\reducer\AfcPreventReducer.jsx
  Line 90:44:  Parsing error: Unexpected token (90:44)

src\reducer\AuthReducer.jsx
  Line 7:22:  Parsing error: Unexpected token (7:22)

src\reducer\CentCompPreReducer.jsx
  Line 118:41:  Parsing error: Unexpected token (118:41)

src\reducer\ColorLightSignalMainlineReducer.jsx
  Line 108:41:  Parsing error: Unexpected token (108:41)

src\reducer\ESPQuarterlyMaintananceSignalReducer.jsx
  Line 104:51:  Parsing error: Unexpected token (104:51)

src\reducer\FirstAidRegisterReducer.jsx
  Line 100:43:  Parsing error: Unexpected token (100:43)

src\reducer\GatePassReducer.jsx
  Line 7:5:     'deprt' is not defined  no-undef
  Line 9:3:     'deprt' is not defined  no-undef
  Line 11:5:    'deprt' is not defined  no-undef
  Line 13:3:    'deprt' is not defined  no-undef
  Line 15:5:    'deprt' is not defined  no-undef
  Line 18:5:    'deprt' is not defined  no-undef
  Line 21:5:    'deprt' is not defined  no-undef
  Line 33:56:   'deprt' is not defined  no-undef
  Line 37:34:   'token' is not defined  no-undef
  Line 51:56:   'deprt' is not defined  no-undef
  Line 55:34:   'token' is not defined  no-undef
  Line 69:56:   'deprt' is not defined  no-undef
  Line 73:34:   'token' is not defined  no-undef
  Line 97:56:   'deprt' is not defined  no-undef
  Line 101:34:  'token' is not defined  no-undef

src\reducer\HonorariumRegReducer.jsx
  Line 114:43:  Parsing error: Unexpected token (114:43)

src\reducer\IncidentAccidentRegReducer.jsx
  Line 110:41:  Parsing error: Unexpected token (110:41)

src\reducer\LatsVduDrillReducer.jsx
  Line 107:46:  Parsing error: Unexpected token (107:46)

src\reducer\ListHonorariumReducer.jsx
  Line 95:47:  Parsing error: Unexpected token (95:47)

src\reducer\LoanRegisterReducer.jsx
  Line 117:46:  Parsing error: Unexpected token (117:46)

src\reducer\OutstandRecRegReducer.jsx
  Line 122:41:  Parsing error: Unexpected token (122:41)

src\reducer\PoliceCtdRegReducer.jsx
  Line 107:39:  Parsing error: Unexpected token (107:39)

src\reducer\TER_Entry_Reducer.jsx
  Line 108:46:  Parsing error: Unexpected token (108:46)

src\reducer\Update_Check_List_PM_occ_bcc_Red.jsx
  Line 94:56:  Parsing error: Unexpected token (94:56)

src\reducer\akshra\AgentissueReducer.jsx
  Line 101:32:  Parsing error: Unexpected token (101:32)

src\reducer\akshra\TsrrReducer.jsx
  Line 114:31:  Parsing error: Unexpected token (114:31)

src\reducer\isha\IncidentAccidentRegReducer.jsx
  Line 113:41:  Parsing error: Unexpected token (113:41)

src\reducer\satya\PMLogBookTVMReducer.jsx
  Line 121:39:  Parsing error: Unexpected token (121:39)

src\reducer\satya\PMMainlineReducer.jsx
  Line 132:37:  Parsing error: Unexpected token (132:37)

src\tables\store\StockMovementTokensview.jsx
  Line 35:9:  Parsing error: Unexpected token (35:9)

src\tables\store\StockmovementcardsView.jsx
  Line 35:9:  Parsing error: Unexpected token (35:9)

Search for the keywords to learn more about each error.

webpack compiled with 34 errors and 1 warning











