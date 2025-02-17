---
id: deploy-on-app-store-create-appstore-record
title: App Storeレコードの作成
---

> **目標**
> 
> * デベロッパーアカウントで App ID を作成する
> * App Store Connect でアプリを作成する

> **用意するもの**
> 
> * [組織向けのApple Developer Program](../tutorials/developer-program/register-apple-developer-program-organization) または
> * [個人向けの Apple Developer Program](../tutorials/developer-program/register-apple-developer-program-individual)


## ⒈ App ID を作成する

#### App ID とは？

*App ID は、1つの開発チームによる 1つ以上のアプリの識別に使用される 2つの部分からなる文字列です。 文字列は Team ID とバンドルID で構成され、ピリオド (.) で区切られます (例: TeamID.BundleID)。*

> **注記**
> 
> * 個人向けの Apple Developer アカウントを選択した場合は、すぐにアカウントを利用でき、App ID を作成することができます。
> * 組織向けの Apple Developer アカウントを選択した場合には、Apple の承認を得てから、App ID を作成することができます。

App ID を作成するには、デベロッパーアカウントにアクセスし、[Certificates, IDs & Profile](https://developer.apple.com/account/ios/identifier/bundle) を選択します。

* *Register iOS App IDs* の横にある + 記号をクリックし、新しい App ID を追加します。

* アプリの名前とバンドルID を定義します。

![App ID](img/Developer-account-App-ID.png)

* アプリに含める App Services を定義します。

![App Services](img/App-Services-to-include.png)

* **Register** をクリックし、App ID を登録します。

![Confirm App ID](img/Confirm-App-ID.png)

## ⒉ App Store Connect にサインインする

* [App Store Connect アカウント](https://appstoreconnect.apple.com) にサインインします。
* **マイ App** をクリックします。

![App Store Connect](img/App-Store-Connect-home-page.png)

## ⒊ 新規の iOSアプリを作成する

左上の **+** をクリックして、新規の iOSアプリを作成します。

![新規の iOSアプリを作成する](img/Create-new-iOS-App.png)

以下の情報を追加します:

* **プラットフォーム**: iOSを選択します。
* **名前**: アプリ名を入力します。
* **プライマリ言語**: アプリで使われる主要言語です。
* **バンドルID**: ドロップダウンリストからアプリのバンドルID を選択します。
* **SKU**: アプリのユニークな ID (これは非公開で、ユーザーには見えません)
* **ユーザーアクセス** (任意): アプリへのアクセスを App Manager、Developer、Marketer、Sales のロールを持つユーザーに制限することができます。

![Change BundleID](img/Change-BundleID-Xcode-Project.png)

> **注記**
> 
> バンドルID が利用できない場合、App Store の他のアプリですでに使用されている可能性があります。 その場合、Xcode プロジェクトで自分のバンドルID を変更する必要があります。

## ⒋ App情報

From App Store Connect > App Information:

* Define your app's Privacy Policy URL (optional).
* Enter a subtitle for your app. This will appear below your app's name throughout the App Store in iOS 11.
* Select a primary and secondary (optional) category for your app to appear in.

![App情報](img/App-Store-Connect-app-information.png)

## ⒌ ⒌ ⒌ ⒌ Pricing and Availability

This is where you define the price for your app.

> **TIPS**
> 
> You can define limited-time discounts by specifying start and end dates.

## ⒍ ⒍ ⒍ Prepare for Submission

Add all of the assets for your app to appear in the App Store in **Version Information**:

> **TIPS**
> 
> You can generate all of your screenshots in Simulator (File > New Screen Shot).

![⒍ ⒍ Prepare for Submission](img/Prepare-for-submission-screenshot-description.png)

* Add your app screenshots. Screenshots for the iPhone 5.5" Super Retina Display and iPad 12.9" Retina Display are mandatory. For more details, see [Screenshot specifications](https://help.apple.com/app-store-connect/#/devd274dd925).

* Scroll down and define the **Keywords** and complete the **Description** (this is what users will see in the App Store).
* You can share updates about your app, including new promotions or in-app purchases, upcoming features or content, limited- time sales, or other events within your app in also add a **Promotional Text** that will appear above your description on the App Store (for customers with devices running iOS 11 or later).
* Enter a **Support URL** that includes support information for your app. This URL will be visible on the App Store.
* **Marketing URL** is optional. This can direct users to a marketing website for your app.

In the **iOS App section**:

![iOS App section](img/Prepare-for-submission-build-icon.png)

Locate your build versions in **Build**.

* In **General App Information** area, enter the Copyright, Version, and Trade Representative Contact Information for your app.
* Your app icon is included in the generated 4D for iOS project.
* Rating is a required property used by the App Store's parental controls. Click Edit and select the appropriate age category for your app.

The **App Review Information** and **Version Release** sections include information required by the App Store. The information provided here will not be seen by users.

![App Review Information](img/Prepare-for-submission-review-information.png)

* **App Review Information**: Confidential contact and security information.
* **Version Release**: Specifies an automatic or manual publication.
* Finally, click **Save**.
