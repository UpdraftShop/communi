# <a name="usage_top" href="https://www.youtube.com/watch?v=aoHXTMpmqDo" target="_blank" rel="noopener noreferrer">使用方法</a>


### <a name="open_tool">= ツールの開き方<br></a>
unity上部のメニューから<br>
[UpdraftShop] → [Communi]<br>
の順でクリックする事で本ツールを開くことが出来ます。<br>
<br>
<img src="/communi/images/usage/open_tool.png" width="287">
<br>
<br>

### <a name="function_tool">= 各種機能の説明<br></a>
#### <a name="function_tool_language" class="heading-banner">・ 言語切替</spawn></a><br>
<img src="/communi/images/usage/explain_language.png" width="600px">
<br>
右上には言語切替機能があり、現在では [ 日本語(jp) / 英語(en) / 韓国語(ko) ] に対応しています。<br>
クリックする毎に順番に言語が切り替わります。<br>
※翻訳が不十分な場合があります。<br>
　その際はご連絡下さい。<br>
<br>
<br>

#### <a name="function_tool_setting_base" class="heading-banner">・ 基本設定</a><br>
<img src="/communi/images/usage/explain_setting_base.png" width="600px">
<br>
ここではツールの基本となる対象アバターの設定と生成されるアニメーションなどの保存先を指定します。<br>

<span style="color: orange; ">①</span> Communiを適応させいたい対象のアバターを指定します。<br>
　 VRC AvatarDescriptorがアタッチされてあるシーン上のアバターを指定してください。<br>
<br>
<span style="color: orange; ">②</span> 生成されるアニメーションなどのファイルの保存先を指定できます。<br>
　 デフォルトではCommuniに新しく「Animations」フォルダが生成されその中に保存されます。<br>
　 直接パスを入力するか、右のフォルダマークをクリックして指定できます。<br>
<br>
<br>

#### <a name="function_tool_setting_main" class="heading-banner">・ メイン設定</a><br>
<div style="display: flex;">
    <div style="margin-right: 20px;">
        ■ 画面一覧<br>
        <a href="#function_tool_setting_main_preset"><b>= <span style="color: orange; ">①</span> プリセット</b></a><br>
        <a href="#function_tool_setting_main_layer"><b>= <span style="color: orange; ">②</span> レイヤー</b></a><br>
        <a href="#function_tool_setting_main_default_facial_expression"><b>= <span style="color: orange; ">③</span> デフォルト表情</b></a><br>
        <a href="#function_tool_setting_main_avatar_view"><b>= <span style="color: orange; ">④</span> アバタービュー</b></a><br>
        <a href="#function_tool_setting_main_hand_gesture"><b>= <span style="color: orange; ">⑤</span>ハンドジェスチャー設定</b></a><br>
    </div>
    <img src="/communi/images/usage/explain_hand_gesture.png" width="500">
</div>
<br>
<br>

<a name="function_tool_setting_main_preset"><b>= <span style="color: orange; ">①</span> プリセット</b></a><br>
<img src="/communi/images/usage/explain_preset.png" width="275px">
<br>
ここではCommuniの生成の際にどのアバター向けに生成するかのプリセットを変更できます。<br>
プリセットはアバター固有のレイヤーの使い方をされているものに対応するようにCommuniを生成したい場合に使います。<br>
<br>
例えば
<a href="https://komado.booth.pm/items/4876459" target ="_blank">あまとうさぎ さんの『ライム -Lime- 』</a>
では瞬きの制御に専用のレイヤーが使われていたり<br>
<a href="https://booth.pm/ja/items/3472207" target ="_blank">nylonheart さんの『トラスとウェッジ』</a>
ではAFK時やメニューから表情を変更している間はハンドジェスチャーが<br>
無効化されるように作られていたりします。<br>
<br>
現在対応しているのは以下のアバターたちです。(敬称略)<br>
[Lime] <a href="https://komado.booth.pm/items/4876459" target ="_blank">あまとうさぎ『ライム -Lime- 』</a><br>
[Tolass] <a href="https://booth.pm/ja/items/3472207" target ="_blank">nylonheart『トラスとウェッジ』</a><br>
<br>
<br>

<a name="function_tool_setting_main_layer"><b>= <span style="color: orange; ">②</span> レイヤー</b></a><br>
<img src="/communi/images/usage/explain_layer.png" width="600px">
<br>
ここでレイヤーを追加/削除、またレイヤー名や編集するレイヤーを変更できます。<br>
レイヤー機能はメニューから使用するレイヤーを変更でき、レイヤー毎に設定した<br>
ハンドジェスチャーの内容を簡単に切り替えることができます。<br>
<br>
中央のレイヤー名が表示されているボックスをクリックする事でレイヤー名を編集できます。<br>
ここで設定したレイヤー名はレイヤーを切り替えるメニューに表示されます。<br>
<img src="/communi/images/usage/explain_layer_menu.png" width="250px"><br>

また左右の [◀] [▶] でレイヤーを切り替えることができます。<br>
<br>
レイヤーを追加/削除したい場合は右端にある [ + ] [ - ] から追加/削除が行なえます。<br>
新規で追加したレイヤーはデフォルトで「New Layer」という名前で生成されハンドジェスチャーの設定は<br>全て空の状態です。<br>
<br>
<br>

<a name="function_tool_setting_main_default_facial_expression"><b>= <span style="color: orange; ">③</span> デフォルト表情</b></a><br>
<img src="/communi/images/usage/explain_default_facial_expression.png" width="300px"><br>
ここにアバターのデフォルトとなる表情を設定します。<br>
<br>
例えば<span style="color: green; ">「目を瞑る表情」</span>を左手のFistに、<span style="color: #3333ff; ">「笑顔の表情」</span>を左手のPeaceに設定した場合に<br>
左手Fist → 左手Peace の順で手の形を変えた際に<span style="color: green; ">「目を瞑る表情」</span>と<span style="color: #3333ff; ">「笑顔の表情」</span>の間に<br>
一度デフォルトの表情を経由して表情同士の干渉を防ぎます。<br>
<br>
前提としてデフォルト表情には表情に使われているシェイプキーを全て初期化するようにアニメーションを<br>
作成する必要があります。<br>
<span style="color: #777777;">※後述するアニメーション作成で簡単にデフォルト表情を作ることができます。</span><br>
<br>
各表情で全てのシェイプキーを初期化している場合はデフォルト表情の設定はNoneのままでも問題ありません。
<br>
<br>

<a name="function_tool_setting_main_avatar_view"><b>= <span style="color: orange; ">④</span> アバタービュー</b></a><br>
<img src="/communi/images/usage/explain_avatar_view.png" width="300px"><br>
選択しているアバターが表示されます。<br>
画面左上の [ ↑ ] [ ↓ ] で視点を上下に移動<br>
画面右上の [ + ] [ - ] でズームイン、ズームアウト<br>
画面下左右の [ < ] [ > ] で視点を回転できます。<br>
<br>
<span style="color: red; ">[表情変更設定]</span>の際にハンドジェスチャー設定をクリックする事で設定されてある表情がアバタービューに反映されます。<br>
また現在選択中の表情がわかりやすくハンドジェスチャー設定の枠が黄色くなります。<br>
<br>
<br>
<br>

<a name="function_tool_setting_main_hand_gesture"><b>= <span style="color: orange; ">⑤</span> ハンドジェスチャー設定</b></a><br>
<div style="display: flex;">
    <div style="margin-right: 20px;">
        ■ 画面一覧<br>
        <a href="#hand_gesture_setting_category"><b>- <span style="color: orange; ">①</span> カテゴリ</b></a><br>
        <a href="#hand_gesture_setting_option"><b>- <span style="color: orange; ">②</span> オプション</b></a><br>
        <a href="#hand_gesture_setting_main"><b>- <span style="color: orange; ">③</span> メイン設定</b></a><br>
    </div>
    <img src="/communi/images/usage/explain_hand_gesture_setting.png" width="400">
</div>
<a name="hand_gesture_setting_category"><b>- カテゴリ</b></a><br>
<div style="display: flex;">
    <img src="/communi/images/usage/explain_hand_gesture_setting_category.png" width="40">
    <div style="margin-left: 20px;">
        <span style="color: red; ">[表情変更設定]</span> <span style="color: green; ">[表情固定設定]</span> <span style="color: blue; ">[パラメーターセット設定]</span> の3つのボタンを押すと<br>
        それぞれのカテゴリの編集画面を表示できます。<br>
        <br>
        <span style="color: red; ">[表情変更設定]</span> では手の形に合わせて表情を変更できる設定を行えます。<br>
        <br>
        <span style="color: green; ">[表情固定設定]</span> はメニューにもある表情固定をハンドジェスチャーの動作で発動する事ができる設定を行えます。<br>
        表情固定がONの時に設定した動作を行うとOFFに、OFFの時に動作を行った場合はONになるようになります。<br>
        <br>
        <span style="color: blue; ">[パラメーターセット設定]</span> では設定した動作を行った際にアニメーターのパラメータを任意の値にセットする事ができる設定を行えます。<br>
        同時に複数のパラメーターを設定できたり、パラメーターが発動するまでの時間に遅延を設けることもできます。<br>
        <br>
        <br>
        またどのカテゴリにおいても一般的に設定されている「左手/右手」それぞれのNeutral、Fist、HandOpen、FingerPoint、Victory、<br>
        RockNRoll、HandGun、ThumbsUp に加えて左手と右手を組み合わせた時のハンドジェスチャーの設定も行えます。<br>
        例えば左手でPeace、右手でFistの時に発動するような条件付けができます。<br>
        <br>
    </div>
</div>
<br>
<br>
<a name="hand_gesture_setting_option"><b>- オプション</b></a><br>
<img src="/communi/images/usage/explain_hand_gesture_setting_option.png" width="150"><br>
オプションは表示されているカテゴリに対して操作できる機能が表示されます。<br>
<br>
[左手アイコン]、[右手アイコン] を押すと表示されているカテゴリ内のハンドジェスチャーを左手、又は右手優先に自動で並べ替えが行なえます。<br>
<br>
[リセット] は <span style="color: red; ">[表情変更設定] </span>カテゴリの場合にのみ表示されます。<br>
このボタンを押すと左手、右手それぞれのFist、HandOpen、FingerPoint、Victory、RockNRoll、HandGun、ThumbsUp、左右でのNeutralのハンドジェスチャーが<br>
自動で設定されます。<br>
<br>
[ + ] は新しくハンドジェスチャーの設定を現在のカテゴリに1つ追加します。<br>
<br>
<br>
<a name="hand_gesture_setting_main"><b>- メイン設定</b></a><br>

<button id="setting_button_1"><span style="color: red;">表情変更設定</span></button>
<button id="setting_button_2"><span style="color: green;">表情固定設定</span></button>
<button id="setting_button_3"><span style="color: blue;">パラメーターセット設定</span></button>

<div id="content-area">
  <div id="content_setting_1" class="content" style="display:none;">
    <div style="display: flex;">
      <div style="margin-right: 20px;">
        ■ 画面一覧<br>
        <a href="#hand_gesture_setting_expression_main_priority"><b>- <span style="color: orange; ">①</span> 優先度変更</b></a><br>
        <a href="#hand_gesture_setting_expression_main_control"><b>- <span style="color: orange; ">②</span> ハンドジェスチャー操作</b></a><br>
        <a href="#hand_gesture_setting_expression_main_hand_view"><b>- <span style="color: orange; ">③</span> ハンドビュー</b></a><br>
        <a href="#hand_gesture_setting_expression_main_animation_setting"><b>- <span style="color: orange; ">④</span> アニメーション設定</b></a><br>
        <a href="#hand_gesture_setting_expression_main_animation_setting_transition_and_tracking"><b>- <span style="color: orange; ">⑤</span> 遷移設定&トラッキング設定</b></a><br>
        <a href="#hand_gesture_setting_expression_main_hand_setting"><b>- <span style="color: orange; ">⑥</span> ハンド設定</b></a><br>
      </div>
      <img src="/communi/images/usage/explain_hand_gesture_setting_expression.png" width="400">
    </div>
    <br>
    <a name="hand_gesture_setting_expression_main_priority"><b>- <span style="color: orange; ">①</span> 優先度変更</b></a><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_priority.png" width="75"><br>
    [ ↑ ] [ ↓ ] を押すことでそのハンドジェスチャーの優先度を変更する事ができます。<br>
    優先度はリストの上にあるほど高く、下にあるほど低くなります。<br>
    <br>
    <br>
    <a name="hand_gesture_setting_expression_main_control"><b>- <span style="color: orange; ">②</span> ハンドジェスチャー操作</b></a><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_control.png" width="75"><br>
    表示されているハンドジェスチャーを削除したり表示を小さく折りたたむ事ができます。<br>
    [ - ] を押すことでリストから操作中のハンドジェスチャーを削除します。<br>
    [ ▽ ] や [ ▷ ]を押すと表示を小さく折りたたんだり展開する事ができます。<br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_control_small.png" width="600"><br>
    <br>
    <br>
    <a name="hand_gesture_setting_expression_main_hand_view"><b>- <span style="color: orange; ">③</span> ハンドビュー</b></a><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_hand_view.png" width="300"><br>
    設定した左手/右手の形を確認する事ができます。<br>
    片手のみ、両手の時それぞれ対応している手が表示されます。<br>
    <br>
    <br>
    <a name="hand_gesture_setting_expression_main_animation_setting"><b>- <span style="color: orange; ">④</span> アニメーション設定</b></a><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_animation.png" width="400"><br>
    変更したい表情アニメーションを設定します。<br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_animation_button.png" width="17.5"> ボタンを押すことでセットしてあるアニメーションを編集する事ができます。<br>
    アニメーションがセットされていない状態でボタンを押した場合は新規でアニメーションを作るウィンドウが出た後に編集画面に遷移します。<br>
    <br>
    アニメーション遷移画面ではUnity標準のアニメーション編集画面とは違い、表情編集に特化した専用の編集画面が表示されます。<br>
    出来る事は選択中のアバターの表情シェイプキーを自動で検出し、実際にアバタービューで表情を見ながら編集する事ができます。<br>
    <b>[アニメーション編集画面]</b><button id="content_animation_edit_button">▷</button><br>
    <div id="content-area">
      <div id="content_animation_edit" class="content" style="display:none; border: 2px solid black; padding: 10px;">
        <img src="/communi/images/usage/explain_hand_gesture_setting_expression_animation_edit.png" width="400"><br>
        <b>Body: </b><br>
        自動で表情シェイプキーが含まれるSkinned Mesh Rendererが選択されます。<br>
        またシーン上にある選択したアバターのSkinned Mesh Rendererを手動でセットする事でそこに含まれているシェイプキーを編集する事も出来ます。<br>
        <br>
        <b>カテゴリー区分文字: </b><br>
        アバターによってはEye/Mouth/Eyebrowなどシェイプキーの区分を分ける際に「---------Eye---------」のように<br>
        シェイプキーが含まれている場合があります。<br>
        <img src="/communi/images/usage/explain_hand_gesture_setting_expression_animation_edit_category.png" width="200"><br>
        ここで区分に使われている共通している文字、例えば「-----」を区分文字に入力しておく事で編集画面では見やすく表示されます。<br>
        <img src="/communi/images/usage/explain_hand_gesture_setting_expression_animation_edit_category_view.png" width="400"><br>
        <br>
        <b>アニメーション編集: </b><br>
        編集したいシェイプキーのスライダー、もしくは数値を変更する事でアバタービューに反映しながら表情を編集できます。<br>
        また値を変更しただけでは保存の際に反映はされないので反映させたいアニメーションには右の<img src="/communi/images/usage/explain_hand_gesture_setting_expression_animation_edit_record_button.png" width="17.5"> ボタンを押すことで<br>
        保存対象に加える事ができます。<br>
        <br>
        <b>保存: </b><br>
        保存対象になっているシェイプキーをアニメーションに保存します。<br>
        保存対象になっていないシェイプキーは前回保存対象になっていてもアニメーションからは削除されます。<br>
        <span style="color: #777777; ">※例外として表示されているシェイプキー以外がアニメーションに含まれている場合はそのまま残ります。</span><br>
        <br>
        <b>リセット: </b><br>
        アニメーションに設定している内容にリセットします。<br>
        保存していないシェイプキーの値や保存対象の情報は破棄されます。<br>
        <br>
        <b>その他: </b><br>
        左上の[ ◀ ] で編集画面を終了し元の画面に戻ります。<br>
        右上の<img src="/communi/images/usage/explain_hand_gesture_setting_expression_animation_edit_record_button.png" width="17.5"> ボタンを押すとVRChatで使われているシェイプキー以外を一括で保存対象に登録します。<br>
        デフォルト表情を作る際にはこのボタンを押すと簡単に全てのシェイプキーを選択する事ができます。<br>
        またこの時VRChatで使われているシェイプキーというのはアバターのVRC Avatar Descriptorの設定で以下の画像の場所で参照されているシェイプキーが対象になります。<br>
        <img src="/communi/images/usage/explain_hand_gesture_setting_expression_animation_edit_vrc_lipsync.png" width="600"><br>
        <img src="/communi/images/usage/explain_hand_gesture_setting_expression_animation_edit_vrc_eyelids.png" width="600"><br>
      </div>
    </div>
    <br>
    右上の<img src="/communi/images/usage/explain_hand_gesture_setting_switch.png" width="17.5"> ボタンを押す事で「Singleな表情切り替え」と「BlendTreeを用いた表情切り替え」の設定を切り替えることができます。<br>
    設定したい内容によって好きな方でアニメーションが設定できます。<br>
    <button id="animation_switch_1"><span style="color: black;">Single</span></button>
    <button id="animation_switch_2"><span style="color: black;">BlendTree</span></button><br>
    <div id="content_animation_switch_1" class="content" style="display:none; padding-top: 5px;">
      <img src="/communi/images/usage/explain_hand_gesture_setting_expression_animation_single.png" width="400"><br>
      「Singleな表情切り替え」では設定できるアニメーションは1つだけです。<br>
    </div>
    <div id="content_animation_switch_2" class="content" style="display:none; padding-top: 5px;">
      <img src="/communi/images/usage/explain_hand_gesture_setting_expression_animation_blend_tree.png" width="400"><br>
      「BlendTreeを用いた表情切り替え」ではアニメーションを複数設定できます。<br> 
      UIもよりUnityのデフォルトに近い作りにしてあるためBlendTreeの詳細については<a href="https://docs.unity3d.com/ja/2019.4/Manual/class-BlendTree.html" target ="_blank">公式</a>を参照してください。<br>
      <span style="color: #777777;">※Unity標準のBlendTreeの設定から簡易化したものになるので設定できない項目もあります。</span><br>
    </div>
    <br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_animation_trigger.png" width="500"><br>
    トリガー押し込みを使用したい場合は「トリガーを使用する」にチェックを入れる事でコントローラーのトリガー押し込みを使えるようになります。<br>
    <span style="color: #777777;">※BlendTree時は自動で有効になります。</span><br>
    [ ▼ ] を押すことでトリガーとして使えるパラメーター名が候補として表示されます。<br>
    ここで表示される候補はアバターに設定してあるFXレイヤーからFloatになっているものが自動で表示されます。<br>
    自身でパラメーター名を直接入力する事も可能です。<br>
    <br>
    <br>
    <a name="hand_gesture_setting_expression_main_animation_setting_transition_and_tracking"><b>- <span style="color: orange; ">⑤</span> 遷移設定&トラッキング設定</b></a><br>
    右上の<img src="/communi/images/usage/explain_hand_gesture_setting_switch.png" width="17.5"> ボタンを押す事で「遷移設定」と「トラッキング設定」を切り替えることができます。<br>
    <button id="animation_transition_tracking_1"><span style="color: black;">遷移設定</span></button>
    <button id="animation_transition_tracking_2"><span style="color: black;">トラッキング設定</span></button><br>
    <div id="content_transition_tracking_1" class="content" style="display:none; padding-top: 5px;">
      <img src="/communi/images/usage/explain_hand_gesture_setting_expression_animation_transition.png" width="500"><br>
      <b>アニメーションに入る際の時間:</b><br>
      設定したアニメーションに遷移して入る際の時間を設定します。<br>
      時間が長いほどゆっくりと遷移し、短いほどすぐに表情が変更されます。<br>
      <br>
      <b>アニメーションから出る際の時間:</b><br>
      設定したアニメーションから別のアニメーションに出ていく際の時間を設定します。<br>
      時間が長いほどゆっくりと遷移し、短いほどすぐに表情が変更されます。<br>
    </div>
    <div id="content_transition_tracking_2" class="content" style="display:none; padding-top: 5px;">
      <img src="/communi/images/usage/explain_hand_gesture_setting_expression_animation_tracking.png" width="500"><br>
      その表情中の目と口のトラッキング状態を設定します。<br>
      設定できる項目は「No Change」「Tracking」「Animation」の3つです。<br>
      各項目の詳細は<a href="https://creators.vrchat.com/avatars/state-behaviors/#animator-tracking-control" target ="_blank">公式</a>を参照してください。<br>
    </div>
    <br>
    <br>
    <a name="hand_gesture_setting_expression_main_hand_setting"><b>- <span style="color: orange; ">⑥</span> ハンド設定</b></a><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_hand.png" width="500"><br>
    発動条件となるハンドジェスチャーの設定を行えます。<br>
    [左右どちらの手]で[手がどの形をしているか]を決めることができ、更に細かく条件を設定することもできます。<br>
    設定できる細かな条件は以下の3つがあります。<br>
    <br>
    <b>[この手の形と一致している時]</b><br>
    設定した左右の手、手の形と同じ時に発動します。<br>
    一般的な表情切り替えはこの条件を使うことになります。<br>
    <br>
    <b>[この手の形を維持し続けた時]</b><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_hand_keep.png" width="500"><br>
    設定した左右の手、手の形を指定した秒数分維持した場合に発動します。<br>
    <b>何秒間維持するか?：</b><br>
    発動するのに必要な維持時間を入力します。<br>
    1.5秒維持したい場合は「1.5」を入力します。<br>
    <br>
    <b>[この手の形を繰り返した時]</b><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_hand_continue.png" width="500"><br>
    設定した左右の手、手の形を指定した回数分連続で実行した場合に発動します。<br>
    <b>何回繰り返すか?：</b><br>
    繰り返す回数を設定します。<br>
    <b>繰り返す際の猶予は?：</b><br>
    手の形を作り再度同じ手の形を作り直すまでの猶予時間を設定します。<br>
    例えば繰り返す回数を3回、猶予時間を0.5秒で設定した場合<br>
    指定された手の形を作り、猶予時間0.5秒以内に手の形を一度崩し再度手の形を猶予時間0.5秒以内に作り、これを回数分繰り返すと発動します。
  </div>

  <div id="content_setting_2" class="content" style="display:none;">
    <div style="display: flex;">
      <div style="margin-right: 20px;">
        ■ 画面一覧<br>
        <a href="#hand_gesture_setting_lock_main_priority"><b>- <span style="color: orange; ">①</span> 優先度変更</b></a><br>
        <a href="#hand_gesture_setting_lock_main_control"><b>- <span style="color: orange; ">②</span> ハンドジェスチャー操作</b></a><br>
        <a href="#hand_gesture_setting_lock_main_hand_view"><b>- <span style="color: orange; ">③</span> ハンドビュー</b></a><br>
        <a href="#hand_gesture_setting_lock_main_hand_setting"><b>- <span style="color: orange; ">④</span> ハンド設定</b></a><br>
      </div>
      <img src="/communi/images/usage/explain_hand_gesture_setting_lock.png" width="400">
    </div>
    <br>
    <a name="hand_gesture_setting_lock_main_priority"><b>- <span style="color: orange; ">①</span> 優先度変更</b></a><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_priority.png" width="75"><br>
    [ ↑ ] [ ↓ ] を押すことでそのハンドジェスチャーの優先度を変更する事ができます。<br>
    優先度はリストの上にあるほど高く、下にあるほど低くなります。<br>
    <br>
    <br>
    <a name="hand_gesture_setting_lock_main_control"><b>- <span style="color: orange; ">②</span> ハンドジェスチャー操作</b></a><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_control.png" width="75"><br>
    表示されているハンドジェスチャーを削除したり表示を小さく折りたたむ事ができます。<br>
    [ - ] を押すことでリストから操作中のハンドジェスチャーを削除します。<br>
    [ ▽ ] や [ ▷ ]を押すと表示を小さく折りたたんだり展開する事ができます。<br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_control_small.png" width="600"><br>
    <br>
    <br>
    <a name="hand_gesture_setting_lock_main_hand_view"><b>- <span style="color: orange; ">③</span> ハンドビュー</b></a><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_hand_view.png" width="300"><br>
    設定した左手/右手の形を確認する事ができます。<br>
    片手のみ、両手の時それぞれ対応している手が表示されます。<br>
    <br>
    <br>
    <a name="hand_gesture_setting_lock_main_hand_setting"><b>- <span style="color: orange; ">④</span> ハンド設定</b></a><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_hand.png" width="500"><br>
    発動条件となるハンドジェスチャーの設定を行えます。<br>
    [左右どちらの手]で[手がどの形をしているか]を決めることができ、更に細かく条件を設定することもできます。<br>
    設定できる細かな条件は以下の3つがあります。<br>
    <br>
    <b>[この手の形と一致している時]</b><br>
    設定した左右の手、手の形と同じ時に発動します。<br>
    一般的な表情切り替えはこの条件を使うことになります。<br>
    <br>
    <b>[この手の形を維持し続けた時]</b><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_hand_keep.png" width="500"><br>
    設定した左右の手、手の形を指定した秒数分維持した場合に発動します。<br>
    <b>何秒間維持するか?：</b><br>
    発動するのに必要な維持時間を入力します。<br>
    1.5秒維持したい場合は「1.5」を入力します。<br>
    <br>
    <b>[この手の形を繰り返した時]</b><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_hand_continue.png" width="500"><br>
    設定した左右の手、手の形を指定した回数分連続で実行した場合に発動します。<br>
    <b>何回繰り返すか?：</b><br>
    繰り返す回数を設定します。<br>
    <b>繰り返す際の猶予は?：</b><br>
    手の形を作り再度同じ手の形を作り直すまでの猶予時間を設定します。<br>
    例えば繰り返す回数を3回、猶予時間を0.5秒で設定した場合<br>
    指定された手の形を作り、猶予時間0.5秒以内に手の形を一度崩し再度手の形を猶予時間0.5秒以内に作り、これを回数分繰り返すと発動します。
  </div>

  <div id="content_setting_3" class="content" style="display:none;">
    <div style="display: flex;">
      <div style="margin-right: 20px;">
        ■ 画面一覧<br>
        <a href="#hand_gesture_setting_parameter_main_priority"><b>- <span style="color: orange; ">①</span> 優先度変更</b></a><br>
        <a href="#hand_gesture_setting_parameter_main_control"><b>- <span style="color: orange; ">②</span> ハンドジェスチャー操作</b></a><br>
        <a href="#hand_gesture_setting_parameter_main_hand_view"><b>- <span style="color: orange; ">③</span> ハンドビュー</b></a><br>
        <a href="#hand_gesture_setting_parameter_main_parameter_setting"><b>- <span style="color: orange; ">④</span> パラメーター設定</b></a><br>
        <a href="#hand_gesture_setting_parameter_main_hand_setting"><b>- <span style="color: orange; ">⑤</span> ハンド設定</b></a><br>
      </div>
      <img src="/communi/images/usage/explain_hand_gesture_setting_parameter.png" width="400">
    </div>
    <br>
    <a name="hand_gesture_setting_parameter_main_priority"><b>- <span style="color: orange; ">①</span> 優先度変更</b></a><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_priority.png" width="75"><br>
    [ ↑ ] [ ↓ ] を押すことでそのハンドジェスチャーの優先度を変更する事ができます。<br>
    優先度はリストの上にあるほど高く、下にあるほど低くなります。<br>
    <br>
    <br>
    <a name="hand_gesture_setting_parameter_main_control"><b>- <span style="color: orange; ">②</span> ハンドジェスチャー操作</b></a><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_control.png" width="75"><br>
    表示されているハンドジェスチャーを削除したり表示を小さく折りたたむ事ができます。<br>
    [ - ] を押すことでリストから操作中のハンドジェスチャーを削除します。<br>
    [ ▽ ] や [ ▷ ]を押すと表示を小さく折りたたんだり展開する事ができます。<br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_control_small.png" width="600"><br>
    <br>
    <br>
    <a name="hand_gesture_setting_parameter_main_hand_view"><b>- <span style="color: orange; ">③</span> ハンドビュー</b></a><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_hand_view.png" width="300"><br>
    設定した左手/右手の形を確認する事ができます。<br>
    片手のみ、両手の時それぞれ対応している手が表示されます。<br>
    <br>
    <br>
    <a name="hand_gesture_setting_parameter_main_parameter_setting"><b>- <span style="color: orange; ">⑤</span> パラメーター設定</b></a><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_parameter_setting.png" width="400"><br>
    発動時にセットするパラメーターを設定します。<br>
    パラメーターは同時に複数セットする事や、遅延をつけてセットする事ができます。<br>
    <br>
    <b>[遅延]</b><br>
    パラメーターをセットするまでの遅延を設定します。<br>
    入力する数値は秒単位で1.5秒遅延をつけたい場合は「1.5」と入力します。<br>
    <br>
    <b>[パラメーター名]</b><br>
    セットしたいパラメーター名を入力します。<br>
    使用できるパラメーターに制限はなくローカル/グローバル関係なくパラメーター名を設定できます。<br>
    <br>
    <b>[値]</b><br>
    [パラメーター名]で設定したパラメーターの値を入力します。<br>
    int型、float型の場合はそのまま数値を、bool型の場合は0/1を入力します。<br>
    <br>
    右上の[ + ] [ - ] から設定するパラメーターを追加/削除ができます。<br>
    また使用例として<a href="https://booth.pm/ja/items/2280136" target ="_blank">VirtualLens2</a> をメニューではなくハンドジェスチャーで取り出したい時は以下のように設定する事で簡単に取り出せます。<br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_parameter_setting_virtual_lens2.png" width="400"><br>
    <br>
    <br>
    <a name="hand_gesture_setting_parameter_main_hand_setting"><b>- <span style="color: orange; ">⑤</span> ハンド設定</b></a><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_hand.png" width="500"><br>
    発動条件となるハンドジェスチャーの設定を行えます。<br>
    [左右どちらの手]で[手がどの形をしているか]を決めることができ、更に細かく条件を設定することもできます。<br>
    設定できる細かな条件は以下の3つがあります。<br>
    <br>
    <b>[この手の形と一致している時]</b><br>
    設定した左右の手、手の形と同じ時に発動します。<br>
    一般的な表情切り替えはこの条件を使うことになります。<br>
    <br>
    <b>[この手の形を維持し続けた時]</b><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_hand_keep.png" width="500"><br>
    設定した左右の手、手の形を指定した秒数分維持した場合に発動します。<br>
    <b>何秒間維持するか?：</b><br>
    発動するのに必要な維持時間を入力します。<br>
    1.5秒維持したい場合は「1.5」を入力します。<br>
    <br>
    <b>[この手の形を繰り返した時]</b><br>
    <img src="/communi/images/usage/explain_hand_gesture_setting_expression_hand_continue.png" width="500"><br>
    設定した左右の手、手の形を指定した回数分連続で実行した場合に発動します。<br>
    <b>何回繰り返すか?：</b><br>
    繰り返す回数を設定します。<br>
    <b>繰り返す際の猶予は?：</b><br>
    手の形を作り再度同じ手の形を作り直すまでの猶予時間を設定します。<br>
    例えば繰り返す回数を3回、猶予時間を0.5秒で設定した場合<br>
    指定された手の形を作り、猶予時間0.5秒以内に手の形を一度崩し再度手の形を猶予時間0.5秒以内に作り、これを回数分繰り返すと発動します。
  </div>
</div>

#### <a name="function_tool_generate" class="heading-banner">・ 生成</a><br>
<div style="display: flex;">
    <div style="margin-right: 20px;">
        ■ 画面一覧<br>
        <a href="#function_tool_generate_menu"><b>= <span style="color: orange; ">①</span> メニュー設定</b></a><br>
        <a href="#function_tool_generate_fx"><b>= <span style="color: orange; ">②</span> FX設定</b></a><br>
        <a href="#function_tool_generate_option"><b>= <span style="color: orange; ">③</span> オプション設定</b></a><br>
        <a href="#function_tool_generate_generate"><b>= <span style="color: orange; ">④</span> 生成</b></a><br>
    </div>
    <img src="/communi/images/usage/explain_generate.png" width="600px">
</div>
<br>
<a name="function_tool_generate_menu"><b>= <span style="color: orange; ">①</span> メニュー設定</b></a><br>
Communi用のVRCExpressionsMenuのインストール先を指定します。<br>
デフォルトでは指定したアバターのExpressionsのMenuがインストール先になっています。<br>
<br>
<br>
<a name="function_tool_generate_fx"><b>= <span style="color: orange; ">②</span> FX設定</b></a><br>
FXレイヤーを指定します。<br>
デフォルトでは指定したアバターのPlayable LayersのFXレイヤーが選択されます。<br>
<br>
また、現在使われているハンドジェスチャーのレイヤーを自動で検出、手動で追加する事もできます。<br>
<img src="/communi/images/usage/explain_generate_fx_layer.png" width="600px"><br>
Communi以外のレイヤーでハンドジェスチャーを使っている場合正しく動かない場合があるためCommuni以外のレイヤーは消して使うことが前提になります。<br>
そのため自動で検出されていない場合は右上の[ + ]からFXレイヤーのレイヤーを追加できるので指定する必要があります。<br>
<br>
<br>
<a name="function_tool_generate_option"><b>= <span style="color: orange; ">③</span> オプション設定</b></a><br>
<img src="/communi/images/usage/explain_generate_option.png" width="400px"><br>
Communiを生成する際のオプションを設定します。<br>
<br>
<b>[ModularAvatarを使用します]</b><br>
CommuniをModularAvatarで生成します。<br>
アバターの中にCommuni用のオブジェクトが作られます。<br>
<br>
<b>[アバターのWrite Defaults設定に合わせる]</b><br>
生成されるAnimationのWrite Defaults設定をアバターで使われている方に合わせて生成します。<br>
Write DefaultsがOnとOffが混合している場合はそれぞれの総数が多い方に合わせて生成されます。<br>
<br>
<b>[AnimationのWriteDefaults設定]</b><br>
生成されるAnimationのWrite Defaultsを設定したOnまたはOffで生成します。<br>
[アバターのWrite Defaults設定に合わせる]がOnの場合はこちらの設定は無効化されます。<br>
<br>
<b>[生成時にレイヤーを複製する]</b><br>
生成する際に既存のFXレイヤーを複製してCommuniを含めて生成します。<br>
[ModularAvatarを使用します]がOnの場合はこちらの設定は無効化されます。<br>
<br>
<br>
<a name="function_tool_generate_generate"><b>= <span style="color: orange; ">④</span> 生成</b></a><br>
ボタンを押して設定した内容に沿って生成します。<br>
<br>
<br>
