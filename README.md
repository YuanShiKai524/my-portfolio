專案名稱：Portfolio

簡單介紹：

    個人簡介的網站demo，使用React、TypeScript、Sass編寫，且為RWD響應式網頁，能用電腦、手機、平板等螢幕大小瀏覽。
    內容主要為，關於我的簡介、專長、教育程度、工作經歷、以及透過email或電話'聯絡我'之功能等等。

文件結構：

    -- /src  專案根目錄。
        |---index.tsx   整個專案項目的入口文件。
        |---App.tsx     整個專案項目的最上層組件。
        |---/components 存放各組件之目錄。
            |
            |---LeftColumn.tsx      左欄組件(包括個人簡介、專長項目，位於左側的組件)。
                |---Brief.tsx       展示簡介部分的組件(可由其中的email及phone的連結，聯絡我)。
                |---Advantages.tsx  展示專長部分的組件。
            |
            |---RightColumn.tsx     右欄組件(包括學歷、經歷的項目，位於右側的組件)。
                |---Experiences.tsx 展示學經歷的組件(內容包括education、work experiences)。
            |
            |---Footer.tsx          頁尾組件(包含許多社群網站，可以找到我，其中包括Github、Line等，也可以從此處聯絡我)。
            |---MyATag.tsx          對html的a標籤進行了封裝的組件，用於Footer組件中外部連結的部分，其中包括noreferrer等使用。
            |---Error.tsx           用於展示錯誤訊息給用戶的組件。
        
        |---/helpers                存放工具組件之目錄。
            |
            |---FetchData.tsx       用於向伺服器發送請求獲取資料的工具組件。

        |---/skeletons                  存放所有skeleton骨架圖之目錄，skeletons中的組件皆用於loading時展示用。
            |
            |---SkeletonElement.tsx     組成所有skeleton組件的基底元素組件(為了複用)。
            |---SkeletonBar.tsx         長條狀skeleton。
            |---SkeletonBarWithIcon.tsx 圓形及長條狀skeleton。
            |---Skeleton~.tsx           其餘Skeleton組件，皆用於各自的項目loading時展示(其名字對應個別的組件)。


以下介紹public目錄下的較重要目錄及文件：

    -- /public  伺服器根目錄(存放html、css、scss、data、image等)。
        |
        |---/data 存放左欄及右欄的所有資料之目錄。
            |---leftData.json
            |---rightData.json
        |
        |---/images 存放此專案中唯一一張圖片。
            |---portrait.jpg
        |
        |---/sass   存放所有scss檔案之目錄。
            |
            |---/base   存放所有組件共用以及網頁總體使用之樣式的目錄。
                |
                |---_general.scss   網頁總體使用之樣式。
                |---_reset.scss     包括一些樣式的歸零或清除之scss文件。
            |
            |---/helpers    存放mixin及variables文件的目錄。
            |
            |---/layout     存放排版相關之樣式的目錄(包括RWD樣式內容)。
            |
            |---/pages      存放各組件單獨使用之樣式的目錄(名字與組件名相同)。
            |
            |---/skeletons  存放skeleton骨架圖的樣式之目錄。
            |
            |---all.scss    import所有scss檔案的總scss檔案(最後將編譯成css文件的總文件)