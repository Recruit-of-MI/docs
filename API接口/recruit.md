---
title: recruit v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.11"

---

# recruit

> v1.0.0

# 个人信息管理

## POST 上传简历信息

POST /user/createResume

> Body 请求参数

```yaml
userID: string
realName: string
phoneNum: string
birthYear: string
education: string
workYear: string
intentionJob: string
privacy: string

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» userID|body|string| 否 |none|
|» realName|body|string| 否 |none|
|» phoneNum|body|string| 否 |none|
|» birthYear|body|string| 否 |none|
|» education|body|string| 否 |none|
|» workYear|body|string| 否 |none|
|» intentionJob|body|string| 否 |none|
|» privacy|body|string| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|boolean|true|none||none|

## PUT 更新简历信息

PUT /user/updateResume

> Body 请求参数

```yaml
userID: string
realName: string
phoneNum: string
birthYear: string
education: string
workYear: string
intentionJob: string
privacy: string

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» userID|body|string| 否 |none|
|» realName|body|string| 否 |none|
|» phoneNum|body|string| 否 |none|
|» birthYear|body|string| 否 |none|
|» education|body|string| 否 |none|
|» workYear|body|string| 否 |none|
|» intentionJob|body|string| 否 |none|
|» privacy|body|string| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|boolean|true|none||none|

## POST 上传微信账号信息

POST /user/createUser

小程序新用户第一次登录，需要将用户信息上传至数据库

> Body 请求参数

```yaml
userID: 123456aaa
userName: hello
avatarUrl: http://dummyimage.com/100x100

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» userID|body|string| 否 |微信openId|
|» userName|body|string| 否 |微信昵称|
|» avatarUrl|body|string| 否 |微信头像|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|boolean|true|none|成功|创建成功|

## GET 查询简历信息

GET /user/getResume

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userID|query|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» userID|string|true|none|用户ID|微信openId|
|» realName|string|true|none|用户真实姓名|用户的真实姓名|
|» phoneNum|string|true|none|电话号码|用户联系方式|
|» birthYear|string|true|none|出生年月|用户的出生年份|
|» education|string|true|none|学历|最高的学历|
|» workYear|string|true|none|工作年限|工作年限|
|» intentionJob|string|true|none|期望的工作|用户期待的工作|
|» privacy|string|true|none|是否公开|资料是否公开|

## PUT 更新账号信息

PUT /user/updateUser

> Body 请求参数

```yaml
userID: 123456aaagg
userName: hello
avatarUrl: http://dummyimage.com/100x100

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» userID|body|string| 否 |微信的openId|
|» userName|body|string| 否 |微信昵称|
|» avatarUrl|body|string| 否 |微信头像|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|boolean|

## GET 查询用户信息

GET /user/getUser

查询已上传的用户信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userID|query|string| 是 |用户ID|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» userID|string|true|none||none|
|» userName|string|true|none||none|
|» avatarUrl|string|true|none||none|

# 招聘信息管理

## POST 发布工作

POST /recruit/createJob

> Body 请求参数

```yaml
recruitPosition: 学校司机
jobTitle: string
maxWages: "12000"
minWages: "8000"
region: string
specificLocation: 浙江工商大学
corporateName: string
minEducation: 不限
mode: 全职
userID: "12345647"
publisherName: string
publisherAvatarUrl: string
jobDescription: 岗位职责：根据用户的需求撰写文档总结需求并上报
recruitNum: 0
welfare1: 五险一金
welfare2: string
welfare3: string
welfare4: string
welfare5: string
label1: string
label2: string
label3: string

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» recruitPosition|body|string| 是 |职位|
|» jobTitle|body|string| 是 |工作标题|
|» maxWages|body|string| 是 |最高工资|
|» minWages|body|string| 是 |最低工资|
|» region|body|string| 是 |工作区域|
|» specificLocation|body|string| 是 |具体工作地点|
|» corporateName|body|string| 是 |发布公司|
|» minEducation|body|string| 是 |最低学历要求|
|» mode|body|string| 是 |工作模式|
|» userID|body|string| 是 |发布者|
|» publisherName|body|string| 否 |发布者名字|
|» publisherAvatarUrl|body|string| 否 |发布者头像|
|» jobDescription|body|string| 否 |工作描述|
|» recruitNum|body|integer| 否 |招聘人数|
|» welfare1|body|string| 否 |福利|
|» welfare2|body|string| 否 |none|
|» welfare3|body|string| 否 |none|
|» welfare4|body|string| 否 |none|
|» welfare5|body|string| 否 |none|
|» label1|body|string| 否 |标签|
|» label2|body|string| 否 |none|
|» label3|body|string| 否 |none|

> 返回示例

> 成功

```json
{
  "data": true
}
```

```json
{
  "data": false
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|boolean|true|none||none|

## GET 保安

GET /recruit/getSecurity

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|number|true|none||none|
|»»» minWages|number|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|

## POST 投递工作

POST /recruit/createDelivered

> Body 请求参数

```yaml
jobID: "123456"
userID: "1234664"
userName: 王安

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» jobID|body|string| 是 |none|
|» userID|body|string| 是 |none|
|» userName|body|string| 是 |none|

> 返回示例

> 成功

```json
{
  "data": true
}
```

```json
{
  "data": false
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|boolean|true|none||none|

## GET 高薪

GET /recruit/getHighPayJob

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|number|true|none||none|
|»»» minWages|number|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|

## GET 获取足迹

GET /recruit/getBrowsed

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userID|query|string| 是 |none|

> 返回示例

> 成功

```json
{
  "data": {
    "job": [
      {
        "jobID": "70",
        "jobDescribe": "cillum irure dolor aliquip",
        "jobSalary": "labore",
        "jobPlace": "veniam ex",
        "jobKeyWord": "nostrud",
        "jobLabel": "amet voluptate proident Lorem",
        "jobSenderID": "94"
      },
      {
        "jobID": "29",
        "jobDescribe": "Excepteur nulla",
        "jobSalary": "exercitation irure commodo",
        "jobPlace": "Excepteur laborum",
        "jobKeyWord": "sed reprehenderit ipsum",
        "jobLabel": "incididunt Ut irure laborum laboris",
        "jobSenderID": "35"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» job|[object]|true|none||none|
|»»» jobID|string|true|none||none|
|»»» jobDescribe|string|true|none||none|
|»»» jobHighSalary|string|true|none||none|
|»»» jobLowSalary|string|true|none||none|
|»»» jobPlace|string|true|none||none|
|»»» jobKeyWord|string|true|none||none|
|»»» jobLabel|string|true|none||none|

## GET 搜索

GET /recruit/searchJob

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|jobKeyWord|query|string| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|number|true|none||none|
|»»» minWages|number|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|

## GET 食宿话补

GET /recruit/getSubsidyJob

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|number|true|none||none|
|»»» minWages|number|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|

## GET 获取收藏

GET /recruit/getCollect

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userID|query|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» job|[object]|true|none||none|
|»»» jobID|string|true|none||none|
|»»» jobDescribe|string|true|none||none|
|»»» jobHighSalary|string|true|none||none|
|»»» jobLowSalary|string|true|none||none|
|»»» jobPlace|string|true|none||none|
|»»» jobKeyWord|string|true|none||none|
|»»» jobLabel|string|true|none||none|

## GET 附近热招

GET /recruit/getHotJob

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|region|query|string| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|number|true|none||none|
|»»» minWages|number|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|

## GET 最新发布

GET /recruit/getLatestJob

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|number|true|none||none|
|»»» minWages|number|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|

## GET 获取已发布

GET /recruit/getSend

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userID|query|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|integer|true|none||none|
|»»» minWages|integer|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|

## PUT 拒绝投递者

PUT /recruit/disagreeDeliver

> Body 请求参数

```yaml
jobID: "123456"
userID: "1234664"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» jobID|body|string| 是 |none|
|» userID|body|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|boolean|

## GET 获取已投递的工作

GET /recruit/getDelivered

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userID|query|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|integer|true|none||none|
|»»» minWages|integer|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|
|»»» isAgree|integer|true|none||none|

## PUT 更新工作

PUT /recruit/updateJob

> Body 请求参数

```yaml
jobID: "123456"
recruitPosition: 学校司机
jobTitle: string
maxWages: "12000"
minWages: "8000"
region: string
specificLocation: 浙江工商大学
corporateName: string
minEducation: 本科
mode: 全职
userID: "12345647"
publisherName: string
publisherAvatarUrl: string
jobDescription: 岗位职责：根据用户的需求撰写文档总结需求并上报
recruitNum: 五险一金
welfare1: string
welfare2: string
welfare3: string
welfare4: string
welfare5: string
label1: string
label2: string
label3: string

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» jobID|body|string| 是 |none|
|» recruitPosition|body|string| 是 |none|
|» jobTitle|body|string| 是 |none|
|» maxWages|body|string| 是 |none|
|» minWages|body|string| 是 |none|
|» region|body|string| 是 |none|
|» specificLocation|body|string| 是 |none|
|» corporateName|body|string| 是 |none|
|» minEducation|body|string| 是 |none|
|» mode|body|string| 是 |none|
|» userID|body|string| 是 |none|
|» publisherName|body|string| 否 |none|
|» publisherAvatarUrl|body|string| 否 |none|
|» jobDescription|body|string| 是 |none|
|» recruitNum|body|string| 是 |none|
|» welfare1|body|string| 否 |none|
|» welfare2|body|string| 否 |none|
|» welfare3|body|string| 否 |none|
|» welfare4|body|string| 否 |none|
|» welfare5|body|string| 否 |none|
|» label1|body|string| 否 |none|
|» label2|body|string| 否 |none|
|» label3|body|string| 否 |none|

> 返回示例

> 成功

```json
{
  "data": true
}
```

```json
{
  "data": false
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|boolean|true|none||none|

## GET 今日急招

GET /recruit/getUrgentJob

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|number|true|none||none|
|»»» minWages|number|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|

## POST 添加历史足迹

POST /recruit/createBrowsed

> Body 请求参数

```yaml
userID: "12345647"
jobID: "123456"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» userID|body|string| 是 |none|
|» jobID|body|string| 是 |none|

> 返回示例

> 成功

```json
false
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|boolean|

## GET 获取工作详细

GET /recruit/getSpecificJobOfUser

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|JobID|query|integer| 否 |none|
|userID|query|string| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|number|true|none||none|
|»»» minWages|number|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|
|»»» field1|string|true|none||none|

## GET 司机

GET /recruit/getDriver

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|number|true|none||none|
|»»» minWages|number|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|

## PUT 接受投递者

PUT /recruit/agreeDeliver

> Body 请求参数

```yaml
jobID: "123456"
userID: "1234664"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» jobID|body|string| 是 |none|
|» userID|body|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|boolean|

## GET 招聘的主页职位推荐

GET /recruit/getJob

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|number|true|none||none|
|»»» minWages|number|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|

## GET 名企

GET /recruit/getFamousJob

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|number|true|none||none|
|»»» minWages|number|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|

## POST 添加收藏

POST /recruit/createCollect

> Body 请求参数

```yaml
userID: "12345647"
jobID: "123456"

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» userID|body|string| 是 |none|
|» jobID|body|string| 是 |none|

> 返回示例

> 成功

```json
false
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|boolean|

## GET 获取工作的投递者

GET /recruit/getDeliveredForJob

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|jobID|query|integer| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» user|[object]|true|none||none|
|»» user|object|true|none||none|
|»»» userID|string|true|none||none|
|»»» avatarUrl|string|true|none||none|
|»»» userName|string|true|none||none|
|»» isAgree|integer|true|none||0为未决定，1为同意，2为拒绝|

## GET 日结

GET /recruit/getDaily

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|number|true|none||none|
|»»» minWages|number|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|

## GET 兼职

GET /recruit/getPartJob

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|number|true|none||none|
|»»» minWages|number|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|

## GET 外卖员

GET /recruit/getTakeOutClerk

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» jobID|integer|true|none||none|
|»»» recruitPosition|string|true|none||none|
|»»» jobTitle|string|true|none||none|
|»»» maxWages|number|true|none||none|
|»»» minWages|number|true|none||none|
|»»» region|string|true|none||none|
|»»» specificLocation|string|true|none||none|
|»»» corporateName|string|true|none||none|
|»»» minEducation|string|true|none||none|
|»»» mode|string|true|none||none|
|»»» userID|string|true|none||none|
|»»» publisherName|string|true|none||none|
|»»» publisherAvatarUrl|string|true|none||none|
|»»» jobDescription|string|true|none||none|
|»»» recruitNum|integer|true|none||none|
|»»» welfare1|string|true|none||none|
|»»» welfare2|string|true|none||none|
|»»» welfare3|string|true|none||none|
|»»» welfare4|string|true|none||none|
|»»» welfare5|string|true|none||none|
|»»» label1|string|true|none||none|
|»»» label2|string|true|none||none|
|»»» label3|string|true|none||none|

# 聊天信息管理

## GET 面试的消息列表

GET /message/getRecruit

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userID|query|string| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» otherID|string|true|none||none|
|»»» avatarUrl|string|true|none||none|
|»»» userName|string|true|none||none|
|»»» latestMessage|string|true|none||none|
|»»» latestMessageTime|string|true|none||none|

## POST 添加面试的消息列

POST /message/createRecruit

> Body 请求参数

```yaml
userID: string
otherID: string
otherAvatarUrl: string
otherUserName: string
latestMessage: string

```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» userID|body|string| 否 |none|
|» otherID|body|string| 否 |none|
|» otherAvatarUrl|body|string| 否 |none|
|» otherUserName|body|string| 否 |none|
|» latestMessage|body|string| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|boolean|true|none||none|

## GET 显示聊天记录

GET /message/getChat

> Body 请求参数

```json
{
  "userId": "string",
  "otherUserId": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|userID|query|string| 否 ||none|
|otherID|query|string| 否 ||none|
|body|body|object| 否 ||none|
|» userId|body|string| 是 | 用户ID|用户的微信openId|
|» otherUserId|body|string| 是 | 另一用户ID|另一用户的微信openId|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» userID|string|true|none||none|
|»»» otherID|string|true|none||none|
|»»» otherAvatarUrl|string|true|none||none|
|»»» contentType|string|true|none||none|
|»»» content|string|true|none||none|
|»»» speaker|string|true|none||none|
|»»» createTime|string|true|none||none|

## POST 发送聊天消息

POST /message/createChat

> Body 请求参数

```yaml
userID: string
otherID: string
userName: string
avatarUrl: string
otherUserName: string
otherAvatarUrl: string
speaker: string
contentType: image
content: 你好

```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» userID|body|string| 是 ||自己的ID|
|» otherID|body|string| 是 ||其他用户的ID|
|» userName|body|string| 是 ||发送这的名字|
|» avatarUrl|body|string| 是 ||发送者的头像|
|» otherUserName|body|string| 是 ||其他用户的名字|
|» otherAvatarUrl|body|string| 是 ||其他用户的头像|
|» speaker|body|string| 是 ||发送者|
|» contentType|body|string| 是 ||消息类型|
|» content|body|string| 是 ||消息|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|boolean|true|none||none|

## POST 添加应聘的消息列

POST /message/createApply

> Body 请求参数

```yaml
userID: string
otherID: string
otherAvatarUrl: string
otherUserName: string
latestMessage: string

```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 ||none|
|» userID|body|string| 否 ||none|
|» otherID|body|string| 否 ||none|
|» otherAvatarUrl|body|string| 否 ||none|
|» otherUserName|body|string| 否 ||none|
|» latestMessage|body|string| 否 ||none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|boolean|

## GET 应聘的消息列表

GET /message/getApply

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|userID|query|string| 是 ||none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» data|object|true|none||none|
|»» list|[object]|true|none||none|
|»»» otherID|string|true|none||none|
|»»» otherAvatarUrl|string|true|none||none|
|»»» otherUserName|string|true|none||none|
|»»» latestMessage|string|true|none||none|
|»»» latestMessageTime|string|true|none||none|

# 数据模型

