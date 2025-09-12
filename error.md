Compiled with problems:
×
ERROR in ./src/component/TableStructureList.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\component\TableStructureList.jsx: Unexpected token (96:2)

  94 |       </div>
  95 |     </div>
> 96 |   );
     |   ^
  97 | };
  98 | TableStructureList.propTypes = {
  99 |   columns: PropTypes.arrayOf(
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/edit/isha/Edit PREVENTIVEMAINTENACE_CC_CCHS.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\isha\Edit PREVENTIVEMAINTENACE_CC_CCHS.jsx: 'import' and 'export' may only appear at the top level. (585:0)

  583 |   );
  584 | };
> 585 | export default EditPREVENTIVEMAINTENACE_CC_CCHS;
      | ^
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12880:18)
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
ERROR in ./src/edit/isha/EditAfcPreventiveHalfYearly.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\isha\EditAfcPreventiveHalfYearly.jsx: 'import' and 'export' may only appear at the top level. (606:0)

  604 |   );
  605 | };
> 606 | export default EditAfcPreventive;
      | ^
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12880:18)
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
ERROR in ./src/edit/isha/EditPMLOGBOOKMAAINLINE9.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\isha\EditPMLOGBOOKMAAINLINE9.jsx: 'import' and 'export' may only appear at the top level. (479:0)

  477 |   );
  478 | };
> 479 | export default EditPMLOGBOOKMAINLINE9;
      | ^
  480 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12880:18)
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
ERROR in ./src/edit/pinki/EditAxleCounter.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\pinki\EditAxleCounter.jsx: Missing initializer in destructuring declaration. (25:7)

  23 |     dispatch(fetchData());
  24 |     setItems(axlecounter.data.data);
> 25 |   }, []);
     |        ^
  26 |   useEffect(() => {
  27 |     if(axlecounter.data && axlecounter.data.data){
  28 |       setItems(axlecounter.data.data);
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.parseVar (E:\AUG29\node_modules\@babel\parser\lib\index.js:13396:16)
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
ERROR in ./src/edit/satya/EditAfcPreventive.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\satya\EditAfcPreventive.jsx: 'import' and 'export' may only appear at the top level. (552:0)

  550 |   );
  551 | };
> 552 | export default EditAfcPreventive;
      | ^
  553 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12880:18)
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
ERROR in ./src/edit/satya/EditCabinetRecord.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\satya\EditCabinetRecord.jsx: 'import' and 'export' may only appear at the top level. (406:0)

  404 |   );
  405 | };
> 406 | export default EditCabinetRecord;
      | ^
  407 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12880:18)
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
ERROR in ./src/edit/satya/EditPMList.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\satya\EditPMList.jsx: 'import' and 'export' may only appear at the top level. (482:0)

  480 |   );
  481 | };
> 482 | export default EditPMList;
      | ^
  483 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12880:18)
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
ERROR in ./src/edit/satya/EditPMMainline.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\satya\EditPMMainline.jsx: 'import' and 'export' may only appear at the top level. (746:0)

  744 |   );
  745 | };
> 746 | export default EditPMMainline;
      | ^
  747 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12880:18)
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
ERROR in ./src/edit/store/StationEarningEdit.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\edit\store\StationEarningEdit.jsx: Missing semicolon. (45:10)

  43 | //   const [formData, setFormData] = useState({
  44 |     update_id: id,
> 45 |       date: fd.date,
     |           ^
  46 |       stationName: fd.stationName,
  47 |       cashFareBox: fd.cashFareBox,
  48 |       souvenirSale: fd.souvenirSale,
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.semicolon (E:\AUG29\node_modules\@babel\parser\lib\index.js:6926:10)
    at FlowParserMixin.parseExpressionStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13294:10)
    at FlowParserMixin.parseExpressionStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:2971:18)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12908:19)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:12776:17)
    at FlowParserMixin.parseStatementLike (E:\AUG29\node_modules\@babel\parser\lib\index.js:2949:24)
    at FlowParserMixin.parseStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:12769:17)
    at FlowParserMixin.parseLabeledStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13287:95)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12906:19)
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
    at FlowParserMixin.parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14501:10)
    at parse (E:\AUG29\node_modules\@babel\parser\lib\index.js:14535:38)
ERROR in ./src/forms/store/BudgetAllotmentForm.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\forms\store\BudgetAllotmentForm.jsx: 'return' outside of function. (153:2)

  151 |     // navigate(`/list/expenditure-budget-register`);
  152 |   };
> 153 |   return (
      |   ^
  154 |     <div className="container">
  155 |       <h1>Finance Department</h1>
  156 |       <h3 className="form-heading">Budget Allotment</h3>
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.parseReturnStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13145:12)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12807:21)
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
ERROR in ./src/forms/store/NightAfcGateDrill.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\forms\store\NightAfcGateDrill.jsx: 'return' outside of function. (52:2)

  50 |     // navigate("/list/occ-afc-gate-drill");
  51 |   };
> 52 |   return (
     |   ^
  53 |     <>
  54 |       <div className="container">
  55 |         <div role="presentation " className="bredcrumbs">
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.parseReturnStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13145:12)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12807:21)
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
ERROR in ./src/reducer/AfcPreventReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\AfcPreventReducer.jsx: Unexpected token (144:0)

  142 |     });
  143 |   },
> 144 | });
      | ^
  145 | export const { addAfcPreventlist } = AfcPreventChkformSlice.actions;
  146 | export default AfcPreventChkformSlice.reducer;
  147 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/AuthReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\AuthReducer.jsx: Unexpected token (37:0)

  35 |     }).then((res) => res.json());
  36 |   }
> 37 | );
     | ^
  38 | export const formlist = createAsyncThunk("auth/formlist", async () => {
  39 |   const token = localStorage.getItem("accessToken");
  40 |   return fetch("https://tprosysit.com/upmrc/public/api/master/form/list", {
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:4797:20)
    at FlowParserMixin.parseExprSubscripts (E:\AUG29\node_modules\@babel\parser\lib\index.js:11085:23)
    at FlowParserMixin.parseUpdate (E:\AUG29\node_modules\@babel\parser\lib\index.js:11070:21)
    at FlowParserMixin.parseMaybeUnary (E:\AUG29\node_modules\@babel\parser\lib\index.js:11050:23)
    at FlowParserMixin.parseMaybeUnaryOrPrivate (E:\AUG29\node_modules\@babel\parser\lib\index.js:10903:61)
    at FlowParserMixin.parseExprOps (E:\AUG29\node_modules\@babel\parser\lib\index.js:10908:23)
    at FlowParserMixin.parseMaybeConditional (E:\AUG29\node_modules\@babel\parser\lib\index.js:10885:23)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:10835:21)
    at FlowParserMixin.parseMaybeAssign (E:\AUG29\node_modules\@babel\parser\lib\index.js:3582:18)
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
SyntaxError: E:\AUG29\src\reducer\CentCompPreReducer.jsx: Unexpected token (174:0)

  172 |     });
  173 |   },
> 174 | });
      | ^
  175 | export const { addcentcomp } = CentCompPreRedSlice.actions;
  176 | export default CentCompPreRedSlice.reducer;
  177 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/ColorLightSignalMainlineReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\ColorLightSignalMainlineReducer.jsx: Unexpected token (167:0)

  165 |     });
  166 |   },
> 167 | });
      | ^
  168 | export const { addsignalmainline } = SignalMainlineSlice.actions;
  169 | export default SignalMainlineSlice.reducer;
  170 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/ESPQuarterlyMaintananceSignalReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\ESPQuarterlyMaintananceSignalReducer.jsx: Unexpected token (163:0)

  161 |     });
  162 |   },
> 163 | });
      | ^
  164 | export const { addESP } = ESPQuarterlyMaintainanceSlice.actions;
  165 | export default ESPQuarterlyMaintainanceSlice.reducer;
  166 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/FirstAidRegisterReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\FirstAidRegisterReducer.jsx: Unexpected token (155:0)

  153 |     });
  154 |   },
> 155 | });
      | ^
  156 | export const { addFirstaid } = FirstAidRegisterSlice.actions;
  157 | export default FirstAidRegisterSlice.reducer;
  158 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/HonorariumRegReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\HonorariumRegReducer.jsx: Unexpected token (169:0)

  167 |     });
  168 |   },
> 169 | });
      | ^
  170 | export const { addhonoriumrud } = honorariumRegRedSlice.actions;
  171 | export default honorariumRegRedSlice.reducer;
  172 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/IncidentAccidentRegReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\IncidentAccidentRegReducer.jsx: Unexpected token (165:0)

  163 |     });
  164 |   },
> 165 | });
      | ^
  166 | export const { addInciAcdRegReducer } = incidentAcdRegSlice.actions;
  167 | export default incidentAcdRegSlice.reducer;
  168 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/LatsVduDrillReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\LatsVduDrillReducer.jsx: Unexpected token (164:0)

  162 |     });
  163 |   },
> 164 | });
      | ^
  165 | export const { addlatsvdudrill } = LatsVduDrillReducerSlice.actions;
  166 | export default LatsVduDrillReducerSlice.reducer;
  167 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/ListHonorariumReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\ListHonorariumReducer.jsx: Unexpected token (150:0)

  148 |     });
  149 |   },
> 150 | });
      | ^
  151 | export const { addlisthonoriumrud } = ListhonorariumRegRedSlice.actions;
  152 | export default ListhonorariumRegRedSlice.reducer;
  153 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/LoanRegisterReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\LoanRegisterReducer.jsx: Unexpected token (170:0)

  168 |     });
  169 |   },
> 170 | });
      | ^
  171 | export const { addloanregrud } = LoanRegisterReducerSlice.actions;
  172 | export default LoanRegisterReducerSlice.reducer;
  173 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/OutstandRecRegReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\OutstandRecRegReducer.jsx: Unexpected token (177:0)

  175 |     });
  176 |   },
> 177 | });
      | ^
  178 | export const { addOutstandRecRegRed } = OutstandRecRegSlice.actions;
  179 | export default OutstandRecRegSlice.reducer;
  180 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/PoliceCtdRegReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\PoliceCtdRegReducer.jsx: Unexpected token (162:0)

  160 |     });
  161 |   },
> 162 | });
      | ^
  163 | export const { addpolicectdreg } = PoliceCtdRegSlice.actions;
  164 | export default PoliceCtdRegSlice.reducer;
  165 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/TER_Entry_Reducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\TER_Entry_Reducer.jsx: Unexpected token (163:0)

  161 |     });
  162 |   },
> 163 | });
      | ^
  164 | export const { addTEREntry } = TER_Entry_Register_Slice.actions;
  165 | export default TER_Entry_Register_Slice.reducer;
  166 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/Update_Check_List_PM_occ_bcc_Red.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\Update_Check_List_PM_occ_bcc_Red.jsx: Unexpected token (149:0)

  147 |     });
  148 |   },
> 149 | });
      | ^
  150 | export const { addUpdatePMOccBcc } = Update_Check_List_PM_occ_bcc_Slice.actions;
  151 | export default Update_Check_List_PM_occ_bcc_Slice.reducer;
  152 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/akshra/AgentissueReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\akshra\AgentissueReducer.jsx: Unexpected token (125:0)

  123 |     });
  124 |   },
> 125 | });
      | ^
  126 | export const { addAgent } = agentSlice.actions;
  127 | export default agentSlice.reducer;
  128 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/akshra/TsrrReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\akshra\TsrrReducer.jsx: Unexpected token (168:0)

  166 |     });
  167 |   },
> 168 | });
      | ^
  169 | export const { addTsrreg } = tsrrSlice.actions;
  170 | export default tsrrSlice.reducer;
  171 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/isha/IncidentAccidentRegReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\isha\IncidentAccidentRegReducer.jsx: Unexpected token (164:0)

  162 |     });
  163 |   },
> 164 | });
      | ^
  165 | export const { addInciAcdRegReducer } = incidentAcdRegSlice.actions;
  166 | export default incidentAcdRegSlice.reducer;
  167 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/satya/PMLogBookTVMReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\satya\PMLogBookTVMReducer.jsx: Unexpected token (175:0)

  173 |     });
  174 |   },
> 175 | });
      | ^
  176 | export const { addLogbook } = pmlogbookTVMSlice.actions;
  177 | export default pmlogbookTVMSlice.reducer;
  178 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/reducer/satya/PMMainlineReducer.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\reducer\satya\PMMainlineReducer.jsx: Unexpected token (186:0)

  184 |     });
  185 |   },
> 186 | });
      | ^
  187 | export const { addPM } = pmmainlineSlice.actions;
  188 | export default pmmainlineSlice.reducer;
  189 |
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.unexpected (E:\AUG29\node_modules\@babel\parser\lib\index.js:6650:16)
    at FlowParserMixin.parseExprAtom (E:\AUG29\node_modules\@babel\parser\lib\index.js:11451:16)
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
    at FlowParserMixin.parseExpressionBase (E:\AUG29\node_modules\@babel\parser\lib\index.js:10788:23)
    at E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:39
    at FlowParserMixin.allowInAnd (E:\AUG29\node_modules\@babel\parser\lib\index.js:12431:16)
    at FlowParserMixin.parseExpression (E:\AUG29\node_modules\@babel\parser\lib\index.js:10784:17)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12904:23)
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
ERROR in ./src/tables/store/StockMovementTokensview.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\tables\store\StockMovementTokensview.jsx: 'return' outside of function. (59:2)

  57 |          // Refresh the page
  58 |      };
> 59 |   return (
     |   ^
  60 |     <Container>
  61 |        <button
  62 |                             className="btn"
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.parseReturnStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13145:12)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12807:21)
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
ERROR in ./src/tables/store/StockmovementcardsView.jsx
Module build failed (from ./node_modules/babel-loader/lib/index.js):
SyntaxError: E:\AUG29\src\tables\store\StockmovementcardsView.jsx: 'return' outside of function. (59:2)

  57 |          // Refresh the page
  58 |      };
> 59 |   return (
     |   ^
  60 |     <div className="container mt-4">
  61 |       <button
  62 |                       className="btn"
    at constructor (E:\AUG29\node_modules\@babel\parser\lib\index.js:367:19)
    at FlowParserMixin.raise (E:\AUG29\node_modules\@babel\parser\lib\index.js:6630:19)
    at FlowParserMixin.parseReturnStatement (E:\AUG29\node_modules\@babel\parser\lib\index.js:13145:12)
    at FlowParserMixin.parseStatementContent (E:\AUG29\node_modules\@babel\parser\lib\index.js:12807:21)
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
ERROR
[eslint] 
src\component\EnhancedExcelExportComponent.jsx
  Line 151:21:  'XLSX' is not defined  no-undef
  Line 155:27:  'XLSX' is not defined  no-undef
  Line 203:25:  'XLSX' is not defined  no-undef

src\component\TableStructureList.jsx
  Line 96:2:  Parsing error: Unexpected token (96:2)

src\edit\isha\Edit PREVENTIVEMAINTENACE_CC_CCHS.jsx
  Line 585:  Parsing error: 'import' and 'export' may only appear at the top level. (585:0)

src\edit\isha\EditAfcPreventiveHalfYearly.jsx
  Line 606:  Parsing error: 'import' and 'export' may only appear at the top level. (606:0)

src\edit\isha\EditPMLOGBOOKMAAINLINE9.jsx
  Line 479:  Parsing error: 'import' and 'export' may only appear at the top level. (479:0)

src\edit\monika\DailycheckRegisterEdit.jsx
  Line 22:5:   'dispatch' is not defined  no-undef
  Line 196:5:  'dispatch' is not defined  no-undef

src\edit\pinki\EditAxleCounter.jsx
  Line 25:7:  Parsing error: Missing initializer in destructuring declaration. (25:7)

src\edit\satya\EditAfcPreventive.jsx
  Line 552:  Parsing error: 'import' and 'export' may only appear at the top level. (552:0)

src\edit\satya\EditCabinetRecord.jsx
  Line 406:  Parsing error: 'import' and 'export' may only appear at the top level. (406:0)

src\edit\satya\EditPMList.jsx
  Line 482:  Parsing error: 'import' and 'export' may only appear at the top level. (482:0)

src\edit\satya\EditPMMainline.jsx
  Line 746:  Parsing error: 'import' and 'export' may only appear at the top level. (746:0)

src\edit\store\StationEarningEdit.jsx
  Line 45:10:  Parsing error: Missing semicolon. (45:10)

src\forms\store\BudgetAllotmentForm.jsx
  Line 153:2:  Parsing error: 'return' outside of function. (153:2)

src\forms\store\NightAfcGateDrill.jsx
  Line 52:2:  Parsing error: 'return' outside of function. (52:2)

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
  Line 144:  Parsing error: Unexpected token (144:0)

src\reducer\AuthReducer.jsx
  Line 37:  Parsing error: Unexpected token (37:0)

src\reducer\CentCompPreReducer.jsx
  Line 174:  Parsing error: Unexpected token (174:0)

src\reducer\ColorLightSignalMainlineReducer.jsx
  Line 167:  Parsing error: Unexpected token (167:0)

src\reducer\ESPQuarterlyMaintananceSignalReducer.jsx
  Line 163:  Parsing error: Unexpected token (163:0)

src\reducer\FirstAidRegisterReducer.jsx
  Line 155:  Parsing error: Unexpected token (155:0)

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
  Line 169:  Parsing error: Unexpected token (169:0)

src\reducer\IncidentAccidentRegReducer.jsx
  Line 165:  Parsing error: Unexpected token (165:0)

src\reducer\LatsVduDrillReducer.jsx
  Line 164:  Parsing error: Unexpected token (164:0)

src\reducer\ListHonorariumReducer.jsx
  Line 150:  Parsing error: Unexpected token (150:0)

src\reducer\LoanRegisterReducer.jsx
  Line 170:  Parsing error: Unexpected token (170:0)

src\reducer\OutstandRecRegReducer.jsx
  Line 177:  Parsing error: Unexpected token (177:0)

src\reducer\PoliceCtdRegReducer.jsx
  Line 162:  Parsing error: Unexpected token (162:0)

src\reducer\TER_Entry_Reducer.jsx
  Line 163:  Parsing error: Unexpected token (163:0)

src\reducer\Update_Check_List_PM_occ_bcc_Red.jsx
  Line 149:  Parsing error: Unexpected token (149:0)

src\reducer\akshra\AgentissueReducer.jsx
  Line 125:  Parsing error: Unexpected token (125:0)

src\reducer\akshra\TsrrReducer.jsx
  Line 168:  Parsing error: Unexpected token (168:0)

src\reducer\isha\IncidentAccidentRegReducer.jsx
  Line 164:  Parsing error: Unexpected token (164:0)

src\reducer\satya\PMLogBookTVMReducer.jsx
  Line 175:  Parsing error: Unexpected token (175:0)

src\reducer\satya\PMMainlineReducer.jsx
  Line 186:  Parsing error: Unexpected token (186:0)

src\tables\store\StockMovementTokensview.jsx
  Line 59:2:  Parsing error: 'return' outside of function. (59:2)

src\tables\store\StockmovementcardsView.jsx
  Line 59:2:  Parsing error: 'return' outside of function. (59:2)

Search for the keywords to learn more about each error.